import * as go from 'gojs';

import { WOMAN_AVATAR, MAN_AVATAR } from '../consts/avatars';
import { mouseDrop } from '../utils/mouseDrop';
import { createNativeTooltipTemplate } from './nativeTooltipTemplate';

const $ = go.GraphObject.make;

const toggleHighlight = (obj: go.Part, reverse: boolean = false) => {
    const background = obj.findObject('mainShape') as go.Shape;
    const color = reverse ? '#fff' : '#ebebeb';
    background.fill = color;
};

const textEdited = (textBlock: go.TextBlock, oldText: string, newText: string) => {
    if (!newText) {
        textBlock.text = oldText;
        alert('The name field cannot be empty');
    }
};

export const createNodeTemplate = () =>
    $(
        go.Node, 
        {
            isShadowed: true,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 20,
            movable: true,
            toolTip: createNativeTooltipTemplate(),
            mouseDrop,
            mouseEnter: (_, node: go.Node) => toggleHighlight(node),
            mouseLeave: (_, node: go.Node) => toggleHighlight(node, true),
        },
        $(
            go.Panel, 
            go.Panel.Spot,
            familyMemberInfoPanel(),
            aliveIndicator(),
            photoPanel(),
            crownPanel(),
        )
    );

const familyMemberInfoPanel = () =>
    $(
        go.Panel,
        go.Panel.Auto,
        {
            name: 'FAMILY_MEMBER_INFO_PANEL',
            portId: 'parent',
            fromLinkable: true,
            fromSpot: go.Spot.Bottom,
        },
        containerRectangle(),
        $(
            go.Panel,
            go.Panel.Vertical,
            {
                margin: new go.Margin(30, 10, 10, 10),
            },
            nameTextBlock(),
            lifeSpanTextBlock()
        )
    );

const aliveIndicator = () =>
    $(
        go.Shape,
        'Rectangle',
        {
            desiredSize: new go.Size(100, 5),
            alignmentFocus: go.Spot.Bottom,
            alignment: new go.Spot(0.5, 0, 0, 1),
            strokeWidth: 0,
            fill: '#66c458'
        },
        new go.Binding('fill', '', data => data.deathYear ? '#474747' : '#66c458'),
        new go.Binding('desiredSize', '', (obj) => {
            obj.part.ensureBounds();
            const { width } = obj.actualBounds;
            return new go.Size(width - 2, 5);
        }).ofObject('FAMILY_MEMBER_INFO_PANEL')
    );

const photoPanel = (size = 60) =>
    $(
        go.Panel,
        go.Panel.Spot,
        {
            alignment: go.Spot.Top,
            portId: 'child',
            toLinkable: true,
            toSpot: go.Spot.Top,
            toMaxLinks: 1,
        },
        photoShape(size),
        photo(size),
    );

const photoShape = (size: number) => 
    $(go.Shape, 'Circle', {
        desiredSize: new go.Size(size, size),
        fill: '#ebebeb',
        stroke: '#a6a6a6',
    });

const photo = (size: number) =>
    $(
        go.Panel,
        go.Panel.Spot,
        {
            isClipping: true,
        },
        $(go.Shape, 'Circle', {
            desiredSize: new go.Size(size - 1, size - 1),
        }),
        $(
            go.Picture,
            {
                imageStretch: go.GraphObject.UniformToFill,
                desiredSize: new go.Size(size - 1, size - 1),
            },
            new go.Binding('source', '', (model) =>
                model.photo
                    ? model.photo
                    : model.gender === 'F'
                    ? WOMAN_AVATAR
                    : MAN_AVATAR
            )
        ),
    );

const crownPanel = () =>
    $(
        go.Panel,
        go.Panel.Spot,
        {
            alignment: new go.Spot(0.5, -0.8),
            visible: false
        },
        $(
            go.Picture, 'https://cdn1.iconfinder.com/data/icons/england-cartoon/512/g5323-512.png',
            {
                width: 60,
                height: 60,
                imageStretch: go.GraphObject.Fill,
            }
        ),
        new go.Binding('visible', 'reign', (reign) => !!reign)
    );

const containerRectangle = () => 
    $(go.Shape, 'RoundedRectangle', {
            fill: '#fff',
            strokeWidth: 0,
            name: 'mainShape'
    });

const nameTextBlock = () => 
    $(go.TextBlock,
        {
            minSize: new go.Size(100, NaN),
            textAlign: 'center',
            editable: true,
            textEdited,
        },
        new go.Binding('text', 'name').makeTwoWay()
    );

const lifeSpanTextBlock = () => 
    $(go.TextBlock,
        {
            minSize: new go.Size(100, NaN),
            textAlign: 'center',
        },
        new go.Binding('text', '', ({ birthYear, deathYear = ''}) =>
            birthYear ? `${birthYear} - ${deathYear}` : ''
        )
    );
