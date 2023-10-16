import * as go from 'gojs';

import { mouseDrop } from '../utils/mouseDrop';
import { groupSelectionAdornment } from './groupSelectionAdornment';

const $ = go.GraphObject.make;

const groupLayout = new go.TreeLayout();
groupLayout.angle = 90;

export const createGroupTemplate = () =>
    $(
        go.Group,
        go.Group.Spot,
        {
            layout: groupLayout,
            layerName: 'GroupLayer',
            mouseDrop,
            selectionAdornmentTemplate: groupSelectionAdornment(),
            selectionObjectName: 'mainShape'
        },
        $(
            go.Panel,
            go.Panel.Auto,
            $(
                go.Shape,
                'RoundedRectangle',
                {
                    fill: 'transparent',
                    name: 'mainShape'
                }
            ),
            $(go.Placeholder, { padding: 25 })
        ),
        $(
            go.TextBlock,
            {
                alignment: new go.Spot(.5, 0, 0, -10),
                font: '20px Helvetica',
                name: 'NAME_TEXT_BLOCK'
            },
            new go.Binding('text', 'name')
        ),
        $(
            go.Panel,
            go.Panel.Auto,
            {
                alignment: new go.Spot(.5, 0, 0, 0),
                alignmentFocus: go.Spot.TopRight
            },
            new go.Binding('alignment', '', (_, targetObj) => {
                const { width } = targetObj.part.findObject('NAME_TEXT_BLOCK').actualBounds;
                return new go.Spot(.5, 0, width / 2, 0);
            }).ofObject(),
            $(
                go.Shape,
                'RoundedRectangle',
                {
                    fill: 'transparent',
                }
            ),
            $(
                go.TextBlock,
                {
                    font: '14px Helvetica',
                    text: '',
                    textAlign: 'end',
                },
                new go.Binding('text', '', ({ data }, { diagram }) => {
                    const { key } = data;
                    const { nodeDataArray } = diagram.model;
                    const membersCount = nodeDataArray
                        .filter(({ group }: { group: number }) => group === key).length;
                    return `Members ${membersCount}`;
                }).ofObject(),
            ),
        ),
    );