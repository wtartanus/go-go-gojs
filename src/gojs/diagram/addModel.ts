import * as go from 'gojs';

import { nodeDataArrayWithGroups } from '../../mockData';

export const addModel = (diagram: go.Diagram) => {
    const saveDiagram = localStorage.getItem('diagram');

    if (saveDiagram) {
        diagram.model = go.GraphLinksModel.fromJson(saveDiagram);
    } else {
        const model = new go.GraphLinksModel();

        model.linkFromPortIdProperty = 'fromPort',
        model.linkToPortIdProperty = 'toPort',
        model.nodeDataArray = nodeDataArrayWithGroups;
        model.linkLabelKeysProperty = 'labelKeys';

        diagram.model = model;
    }
}