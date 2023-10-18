import * as go from 'gojs';

export class Layout extends go.LayeredDigraphLayout {
    private spouseSpacing: number = 30;

    constructor() {
        super();
        this.initializeOption = go.LayeredDigraphLayout.InitDepthFirstIn;
        this.layerSpacing = 100;
        this.direction = 90;
    }

    makeNetwork(coll: go.Diagram | go.Group | go.Iterable<go.Part>): go.LayoutNetwork {
        const network = this.createNetwork();

        if (coll instanceof go.Diagram) {
            this.add(network, coll.nodes, true);
            this.add(network, coll.links, true);
        } else if (coll instanceof go.Group) {
            this.add(network, coll.memberParts, false);
        } else if (coll.iterator) {
            this.add(network, coll.iterator, false);
        }

        return network;
    }

    private add(network: go.LayeredDigraphNetwork, coll: go.Iterator<go.Part>, nonMemberOnly: boolean) {
        const iterator = coll.iterator;

        while (iterator.next()) {
            const node = iterator.value;
            
            if (!(node instanceof go.Node)) {
                continue;
            }

            if (nonMemberOnly && node.containingGroup !== null) {
                continue;
            }

            if (node.isLinkLabel) {
                const link = node.labeledLink;
                const spouseA = link.fromNode;
                const spouseB = link.toNode;
                const vertex = network.addNode(node);

                vertex.width = spouseA.actualBounds.width + this.spouseSpacing + spouseB.actualBounds.width;
                vertex.height = Math.max(spouseA.actualBounds.height, spouseB.actualBounds.height);
                vertex.focus = new go.Point(
                    spouseA.actualBounds.width + this.spouseSpacing / 2,
                    vertex.height / 2
                );
            } else {
                let marriages = 0;

                node.linksConnected.each((link) => {
                    if (link.isLabeledLink) {
                        marriages++;
                    }
                });

                if (marriages === 0) {
                    network.addNode(node);
                }
            }
        }

        iterator.reset();

        while (iterator.next()) {
            const link = iterator.value;
            
            if (!(link instanceof go.Link)) {
                continue;
            }

            if (nonMemberOnly && link.containingGroup !== null) {
                continue;
            }

            if (!link.isLabeledLink) {
                const parent = network.findVertex(link.fromNode);
                const child = network.findVertex(link.toNode);

                if (child) {
                    network.linkVertexes(parent, child, link);
                } else {
                    link.toNode.linksConnected.each((l) => {
                        if (!l.isLabeledLink) {
                            return;
                        }

                        const mLabel = l.labelNodes.first();
                        const mLabelVertex = network.findVertex(mLabel);
                        if (mLabelVertex !== null) {
                            network.linkVertexes(parent, mLabelVertex, link);
                        }
                    });
                }
            }
        }
    }

    protected assignLayers(): void {
        super.assignLayers();

        const maxSizes = {} as any;

        this.network.vertexes.each((vertex) => {
            const layer = (vertex as go.LayeredDigraphVertex).layer;
            let max = maxSizes[layer];

            if (max === undefined) {
                max = 0;
            }

            if (vertex.height > max) {
                maxSizes[layer] = vertex.height;
            }
        });

        this.network.vertexes.each((vertex) => {
            const layer = (vertex as go.LayeredDigraphVertex).layer;
            let max = maxSizes[layer];
            vertex.focus = new go.Point(vertex.width / 2, 0);
            vertex.height = max;
        });
    }

    private findParentsMarriageLabelNode(node: go.Node) {
        const iterator = node.findNodesInto();

        while (iterator.next()) {
            const node = iterator.value;

            if (node.isLinkLabel) {
                return node;
            }
        }

        return null;
    }

    protected commitNodes(): void {
        super.commitNodes();
        
        this.network.vertexes.each((vertex) => {
            if (vertex.node !== null && !vertex.node.isLinkLabel) {
                vertex.node.position = new go.Point(vertex.x, vertex.y);
            }
        });

        this.network.vertexes.each((vertex) => {
            if (vertex.node === null) {
                return;
            }

            if (!vertex.node.isLinkLabel) {
                return;
            }

            const labelNode = vertex.node;
            const labelLink = labelNode.labeledLink;
            labelLink.invalidateRoute();

            let spouseA = labelLink.fromNode;
            let spouseB = labelLink.toNode;

            if (spouseA.data.gender === 'F') {
                const temp = spouseA;
                spouseA = spouseB;
                spouseB = temp;
            }

            const aParentsNode = this.findParentsMarriageLabelNode(spouseA);
            const bParentsNode = this.findParentsMarriageLabelNode(spouseB);

            if (aParentsNode !== null && bParentsNode !== null && aParentsNode.position.x > bParentsNode.position.x) {
                const temp = spouseA;
                spouseA = spouseB;
                spouseB = temp;
            }

            spouseA.position = new go.Point(vertex.x, vertex.y);
            spouseB.position = new go.Point(vertex.x + spouseA.actualBounds.width + this.spouseSpacing, vertex.y);
        });
    }

    doLayout(coll: go.Diagram | go.Group | go.Iterable<go.Part>) {
        if (coll instanceof go.Diagram) {
            const parentsOfGroups = this.diagram.nodes.filter(
                (node) =>
                    !!node.containingGroup
                    && node.linksConnected.filter(
                        (link) => !link.fromNode.containingGroup
                    ).count > 0
            );
            const linksToSwap = parentsOfGroups.map(
                (parent) => ({ parent, link: parent.linksConnected.filter(
                    (link) => !link.fromNode.containingGroup && link.category === ''
                ).first()})
            ).map(({ parent, link }) => {
                link.toNode = parent.containingGroup;
                return ({ parent, link });
            });
            super.doLayout(coll);
            linksToSwap.each(({ parent, link }) => link.toNode = parent);
        } else {
            super.doLayout(coll);
        }
    }
}