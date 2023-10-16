import * as go from 'gojs';

export class DraggingTool extends go.DraggingTool {
    doActivate(): void {
        super.doActivate();

        this.draggedParts = this.computeEffectiveCollection(
            this.getChildrenArrayWithParent(),
            this.dragOptions
        );
    }

    private getChildrenArrayWithParent(): go.List<go.Part> {
        const childrenWithParent: go.List<go.Part> = new go.List();

        this.draggedParts.each(({ key }) => {
            childrenWithParent.add(key);
            if (key instanceof go.Node) {
                this.findAllChildren(key).forEach((node: go.Node) => {
                    childrenWithParent.add(node);
                });
            }
        });

        return childrenWithParent;
    }

    private findAllChildren(parentNode: go.Node): go.Node[] {
        let nodes: go.Node[] = [];

        parentNode
            .findTreeChildrenNodes()
            .each((node: go.Node) => nodes = [...nodes, node]);
        
        return [
            ...nodes,
            ...nodes.reduce(
                (children: go.Node[], child: go.Node) =>
                    [...children, ...this.findAllChildren(child)],
                []
            )
        ];
    }
};
