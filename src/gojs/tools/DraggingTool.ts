import * as go from 'gojs';

export class DraggingTool extends go.DraggingTool {
    doActivate(): void {
        super.doActivate();

        this.draggedParts = this.computeEffectiveCollection(
            this.getChildrenArrayWithParent(),
            this.dragOptions
        );
    }

    private getChildrenArrayWithParent(): go.List<go.Part> {
        const childrenWithParent: go.List<go.Part> = new go.List();

        this.draggedParts.each(({ key }) => {
            childrenWithParent.add(key);
            if (key instanceof go.Node) {
                this.findAllChildren(key).forEach((node: go.Node) => {
                    childrenWithParent.add(node);
                });
            }
        });

        return childrenWithParent;
    }

    private findAllChildren(parentNode: go.Node): go.Node[] {
        let nodes: go.Node[] = [];
    
        const spouseLink = parentNode
            .linksConnected
            .filter((link) => link.category === 'Marriage')
            .first()
    
        parentNode
            .linksConnected
            .filter((link) => link.category === 'Marriage')
            .first()
            ?.labelNodes
            .first()
            .findLinksOutOf()
            .each((link) => nodes.push(link.toNode));
    
        return spouseLink
            ? [
                ...nodes,
                ...nodes.reduce(
                    (children: go.Node[], child: go.Node) =>
                        [...children, ...this.findAllChildren(child)],
                    []
                ),
                spouseLink.toNode === parentNode ? spouseLink.fromNode : spouseLink.toNode
            ]
            : [
                ...nodes,
                ...nodes.reduce(
                    (children: go.Node[], child: go.Node) =>
                        [...children, ...this.findAllChildren(child)],
                    []
                )
            ]
    }
};
