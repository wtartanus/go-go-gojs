import * as go from 'gojs';

import { WOMAN_AVATAR, MAN_AVATAR } from '../consts/avatars';
import { mouseDrop } from '../utils/mouseDrop';
import { createNativeTooltipTemplate } from './nativeTooltipTemplate';
import { nodeSelectionAdornment } from './nodeSelectionAdornment';
import { crowningButton } from './crowningButton';

const $ = go.GraphObject.make;

const crownAnimation = (reign: string, obj: go.GraphObject) => {
    console.log(reign, obj);
    const animation = new go.Animation();
    animation.duration = 1000;
    if (reign) {
        animation.add(obj, 'opacity', 0, 1);
        animation.add(obj, 'scale', 0.01, 1);
    } else {
        animation.add(obj, 'opacity', 1, 0);
        animation.add(obj, 'scale', 1, 0.01);
    }

    animation.start();
}

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

const toggleCrowningButton = (isSelected: boolean, node: go.Node) => {
    if (isSelected) {
        if (!node.findAdornment('crowningButton')) {
            const adornment = crowningButton();
            adornment.adornedObject = node;
            node.addAdornment('crowningButton', adornment);
        }
    } else {
        if (node.findAdornment('crowningButton')) {
            node.removeAdornment('crowningButton');
        }
    }

    return (node as any)._gohashid;
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
            selectionChanged: (part: go.Part) => {
                part.layerName = part.isSelected ? 'Foreground' : 'ForegroundBackLayer';
            },
            selectionAdornmentTemplate: nodeSelectionAdornment(),
            selectionObjectName: 'mainShape'
        },
        $(
            go.Panel, 
            go.Panel.Spot,
            familyMemberInfoPanel(),
            aliveIndicator(),
            photoPanel(),
            crownPanel(),
        ),
        new go.Binding(
            '_gohashid',
            'isSelected',
            toggleCrowningButton
        ).ofObject('')
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
        new go.Binding(
            'alignment',
            'isSelected',
            (isSelected) => isSelected ? new go.Spot(0.5, 0, 0, -1.5) : new go.Spot(0.5, 0, 0, 0)
        ),
        new go.Binding('desiredSize', '', (obj) => {
            obj.part.ensureBounds();
            const { width } = obj.actualBounds;
            return new go.Size(width - 10, 5);
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
                sourceCrossOrigin: () => 'anonymous',
                errorFunction: (picture: go.Picture, event: Event) => {
                    const data = picture.part.data;
                    picture.source = data.gender === 'F' ? WOMAN_AVATAR : MAN_AVATAR;
                }
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
            alignment: new go.Spot(0.5, 0, -30, -30),
            desiredSize: new go.Size(50, 50),
        },
        $(
            go.Picture, 'https://cdn1.iconfinder.com/data/icons/england-cartoon/512/g5323-512.png',
            {
                angle: -45,
                desiredSize: new go.Size(35, 35),
                opacity: 0,
                scale: 0.01,
                imageStretch: go.GraphObject.Fill,
            },
            new go.Binding('opacity', 'reign', crownAnimation)
        ),
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
