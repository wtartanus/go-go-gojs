import * as go from 'gojs';

import { WOMAN_AVATAR, MAN_AVATAR } from '../consts/avatars';

const $ = go.GraphObject.make;

export const createNodeTemplate = () =>
    $(
        go.Node, 
        {
            isShadowed: true,
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowBlur: 20,
        },
        $(
            go.Panel, 
            go.Panel.Spot, 
            familyMemberInfoPanel(),
            aliveIndicator(),
            photoPanel()
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
        nameTextBlock()
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
            alignment: go.Spot.Center,
            alignmentFocus: go.Spot.MiddleBottom,
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

const containerRectangle = () => 
    $(go.Shape, 'RoundedRectangle', {
            fill: '#fff',
            strokeWidth: 0
    });

const nameTextBlock = () => 
    $(go.TextBlock,
        {
            margin: new go.Margin(40, 10, 10, 10),
            minSize: new go.Size(100, NaN),
            textAlign: 'center',
            editable: true,
        },
        new go.Binding('text', 'name').makeTwoWay()
    );
