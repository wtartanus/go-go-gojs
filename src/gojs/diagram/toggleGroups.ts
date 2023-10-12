import * as go from 'gojs';

export const toggleGroups = (diagram: go.Diagram) => {
    const groupLayer = diagram.findLayer('GroupLayer');
    groupLayer.visible = !groupLayer.visible;
};
