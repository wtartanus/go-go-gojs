import * as go from 'gojs';

export const withoutUndoManager = (diagram: go.Diagram, callback: () => void) => {
    const previousSkipsUndoManager = diagram.skipsUndoManager;
    diagram.skipsUndoManager = true;
    callback();
    diagram.skipsUndoManager = previousSkipsUndoManager;
};
