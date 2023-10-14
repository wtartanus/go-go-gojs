import * as go from 'gojs';

const UNDO_BATCH_INTERVAL_IN_MS = 500;

export const addBoy = (diagram: go.Diagram) => {
    diagram.startTransaction('Add boy');
    diagram.model.addNodeData({
        name: 'new boy',
        gender: 'M'
    });
    setTimeout(() => {
        diagram.commitTransaction('Add boy');
    }, UNDO_BATCH_INTERVAL_IN_MS);
};

export const addGirl = (diagram: go.Diagram) => {
    diagram.startTransaction('Add girl');
    diagram.model.addNodeData({
        name: 'new girl',
        gender: 'F'
    });
    setTimeout(() => {
        diagram.commitTransaction('Add girl');
    }, UNDO_BATCH_INTERVAL_IN_MS);
};
