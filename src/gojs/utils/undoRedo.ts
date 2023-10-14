import * as go from 'gojs';

export const undo = (diagram: go.Diagram) => {
    diagram.commandHandler.undo();
};

export const redo = (diagram: go.Diagram) => {
    diagram.commandHandler.redo();
};
