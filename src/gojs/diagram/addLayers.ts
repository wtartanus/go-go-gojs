import * as go from 'gojs';

const $ = go.GraphObject.make;

export const addLayers = (diagram: go.Diagram) => {
    const backgroundLayer = diagram.findLayer('Background');
    diagram.addLayerAfter($(go.Layer, { name: 'GroupLayer'}), backgroundLayer);

    const foregroundLayer = diagram.findLayer('Foreground');
    diagram.addLayerBefore($(go.Layer, { name: "ForegroundBackLayer" }), foregroundLayer);
    diagram.addLayerBefore($(go.Layer, { name: 'ForegroundLayer'}), foregroundLayer);
}