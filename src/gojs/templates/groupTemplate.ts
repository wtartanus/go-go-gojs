import * as go from 'gojs';

import { mouseDrop } from '../utils/mouseDrop';

const $ = go.GraphObject.make;

const groupLayout = new go.TreeLayout();
groupLayout.angle = 90;

export const createGroupTemplate = () =>
    $(
        go.Group,
        go.Group.Spot,
        {
            layout: groupLayout,
            mouseDrop
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
            $(go.Placeholder, { padding: 25 })
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