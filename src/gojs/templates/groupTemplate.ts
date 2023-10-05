import * as go from 'gojs';

const $ = go.GraphObject.make;

const groupLayout = new go.TreeLayout();
groupLayout.angle = 90;

export const createGroupTemplate = () =>
    $(
        go.Group,
        go.Group.Spot,
        {
            layout: groupLayout,
        },
        $(
            go.Panel,
            go.Panel.Auto,
            $(
                go.Shape,
                'RoundedRectangle',
                {
                    fill: 'transparent',
                }
            ),
            $(go.Placeholder, { padding: 15 })
        ),
        $(
            go.TextBlock,
            {
                alignment: new go.Spot(.5, 0, 0, -10),
                font: '20px Helvetica'
            },
            new go.Binding('text', 'name')
        )
    );