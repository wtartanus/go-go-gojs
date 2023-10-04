import * as go from 'gojs';

export const addLayout = (diagram: go.Diagram) => {
    const layout = new go.TreeLayout;
    layout.angle = 90;
    diagram.layout = layout;
}