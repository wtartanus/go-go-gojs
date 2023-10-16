import * as go from 'gojs';

const $ = go.GraphObject.make;

export const nodeSelectionAdornment = () => $(
    go.Adornment,
    go.Panel.Auto,
    {
        layerName: 'Background'
    },
    $(
        go.Shape,
        {
            fill: null,
            stroke: 'green',
            strokeWidth: 3
        },
        new go.Binding(
            'geometryString',
            '',
            (_, obj) => obj.part.adornedPart.findObject('mainShape').geometryString
        ),
    ),
    $(go.Placeholder)
);