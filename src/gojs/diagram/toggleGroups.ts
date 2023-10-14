import * as go from 'gojs';
import { withoutUndoManager } from '../utils/withoutUndoManager';

export const toggleGroups = (diagram: go.Diagram) => {
    withoutUndoManager(diagram, () => {
        diagram.commit(() => {
            const groupLayer = diagram.findLayer('GroupLayer');
            groupLayer.visible = !groupLayer.visible;
        }, 'toggleGroups');
    });
};
