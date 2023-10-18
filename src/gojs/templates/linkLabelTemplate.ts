import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createLinkLabelTemplate = () => $(
    go.Node,
    {
        selectable: false,
        width: 1,
        height: 1
    }
);
