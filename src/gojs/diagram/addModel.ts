import * as go from 'gojs';

import { nodeDataArray, linkDataArray } from '../../mockData';

export const addModel = (diagram: go.Diagram) => {
    const saveDiagram = localStorage.getItem('diagram');

    if (saveDiagram) {
        diagram.model = go.GraphLinksModel.fromJson(saveDiagram);
    } else {
        const model = new go.GraphLinksModel();
        model.nodeDataArray = nodeDataArray;
        model.linkDataArray = linkDataArray;

        diagram.model = model;
    }
}