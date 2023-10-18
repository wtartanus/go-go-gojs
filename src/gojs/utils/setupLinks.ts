import * as go from 'gojs';

const findMarriage = (diagram: go.Diagram, a: number, b: number) => {
    const nodeA = diagram.findNodeForKey(a);
    const nodeB = diagram.findNodeForKey(b);

    if (nodeA && nodeB) {
        const it = nodeA.findLinksBetween(nodeB);

        while (it.next()) {
            const link = it.value;

            if (link.data && link.data.category === 'Marriage') {
                return link;
            }
        }
    }

    return null;
};

export const setupMarriages = (diagram: go.Diagram) => {
    const model = diagram.model;
    const nodeDataArray = model.nodeDataArray;

    for (let i = 0; i < nodeDataArray.length; i++) {
        const data = nodeDataArray[i];
        const key = data.key;
        const wife = data.wife;
        const husband = data.husband;

        if (wife) {
            const link = findMarriage(diagram, key, wife);

            if (!link) {
                const mlab = { category: 'LinkLabel' };
                model.addNodeData(mlab);
                const mdata = { from: key, to: wife, labelKeys: [(mlab as any).key], category: 'Marriage' };
                (model as go.GraphLinksModel).addLinkData(mdata);
            }
        }

        if (husband) {
            const link = findMarriage(diagram, key, husband);

            if (!link) {
                const mlab = { category: 'LinkLabel' };
                model.addNodeData(mlab);
                const mdata = { from: key, to: husband, labelKeys: [(mlab as any).key], category: 'Marriage' };
            }
        }
    }
};

export const setupParents = (diagram: go.Diagram) => {
    const model = diagram.model;
    const nodeDataArray = model.nodeDataArray;

    for (let i = 0; i < nodeDataArray.length; i++) {
        const data = nodeDataArray[i];
        const key = data.key;
        const mother = data.m;
        const father = data.f;

        if (mother && father) {
            const link = findMarriage(diagram, mother, father);

            if (link === null) {
                continue;
            }

            const mdata = link.data;
            const mlabkey = mdata.labelKeys[0];
            const cdata = { from: mlabkey, to: key, parent: 'parent', child: 'child' };
            (model as go.GraphLinksModel).addLinkData(cdata);
        }
    }
}