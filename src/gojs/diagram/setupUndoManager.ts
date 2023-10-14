import * as go from 'gojs';

export const setupUndoManager = (diagram: go.Diagram) => {
    diagram.undoManager.isEnabled = true;

    diagram.model.addChangedListener((event: go.ChangedEvent) => {
        if (event.isTransactionFinished) {
            const undoButton = document.getElementById('undoButton') as HTMLButtonElement;
            const redoButton = document.getElementById('redoButton') as HTMLButtonElement;

            undoButton.disabled = !diagram.commandHandler.canUndo();
            redoButton.disabled = !diagram.commandHandler.canRedo();
        }
    });
};
