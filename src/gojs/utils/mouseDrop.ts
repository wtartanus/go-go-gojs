import * as go from 'gojs'; 

export const mouseDrop = (event: go.InputEvent, target: go.Group | go.Node) => {
    if (!target) {
        return;
    }

    if (target instanceof go.Group) {
        target.addMembers(event.diagram.selection, true);
        return;
    }

    if (target.data.deathYear) {
        event.diagram.currentTool.doCancel();
        return;
    }

    const newNode = event.diagram.selection.first();
    const link = { from: target.data.key, to: newNode.key};
    (event.diagram.model as go.GraphLinksModel).addLinkData(link);
    
    const targetGroup = event.diagram.findNodeForKey(target.data.group);
    if (targetGroup) {
        (targetGroup as go.Group).addMembers(event.diagram.selection, true);
    }
};
