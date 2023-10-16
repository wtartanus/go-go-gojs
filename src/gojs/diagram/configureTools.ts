import * as go from 'gojs';
import { DraggingTool } from '../tools/DraggingTool';

export const configureTools = (diagram: go.Diagram) => {
    diagram.toolManager.draggingTool = new DraggingTool();
};
