import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createLinkTemplate = () => 
    $(
        go.Link,
        {
            routing: go.Link.Orthogonal,
            corner: 10,
            fromShortLength: 2
        },
        linkShape(),
        arrowHead(),
        birthYear()
    );

const linkShape = () => 
    $(go.Shape, {
        stroke: '#919191',
        strokeDashArray: [15, 15]
    });

const arrowHead = () => 
    $(go.Shape, {
        fromArrow: 'StretchedDiamond',
        stroke: null,
        fill: '#919191'
    });

const birthYear = () => 
    $(
        go.Panel,
        go.Panel.Auto,
        {
            segmentIndex: NaN,
            segmentFraction: 1,
            segmentOffset: new go.Point(-10, 0),
        },
        $(go.Shape, 'RoundedRectangle', { fill: '#fff', stroke: '#919191' }),
        $(
            go.TextBlock,
            { stroke: '#757575', font: '11px sans-serif' },
            new go.Binding(
                'text',
                '',
                (linkObject) => linkObject.toNode?.data?.birthYear || ''
            ).ofObject()
        ),
        new go.Binding(
            'visible',
            '',
            (linkObject) => !!linkObject.toNode?.data?.birthYear
        ).ofObject()
    );