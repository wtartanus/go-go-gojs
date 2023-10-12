import * as go from 'gojs';
import { addLayout } from './addLayout';
import { addModel } from './addModel';
import { registerTemplates } from './registerTemplates';

const $ = go.GraphObject.make;

export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);
    diagram.toolManager.hoverDelay = 100;
    diagram.toolManager.linkingTool.portGravity = 30;
    addModel(diagram);
    addLayout(diagram);
    registerTemplates(diagram);

    (window as any).goJsDiagram = diagram;
    
    return diagram;
}