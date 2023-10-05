export const mouseDrop = (event: go.InputEvent, group: go.Group) => {
    if (!group) {
        return;
    }

    group.addMembers(event.diagram.selection, true);
};
