import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createNodeTemplate = () => $(
    go.Node,
    $(
        go.Panel,
        go.Panel.Auto,
        { background: 'lightgreen' },
        $(
            go.TextBlock,
            { margin: 10 },
            new go.Binding('text', 'name')
        )
    )
);
