import * as go from 'gojs';
import { addLayout } from './addLayout';
import { addModel } from './addModel';
import { registerTemplates } from './registerTemplates';

const $ = go.GraphObject.make;

export const createDiagram = (diagramDiv: HTMLDivElement) => {
    const diagram = $(go.Diagram, diagramDiv);
    addModel(diagram);
    addLayout(diagram);
    registerTemplates(diagram);
    
    return diagram;
}