import * as go from 'gojs';

export const addLayout = (palette: go.Palette) => {
    const layout = new go.GridLayout;
    layout.wrappingColumn = 1;
    palette.layout = layout;
}