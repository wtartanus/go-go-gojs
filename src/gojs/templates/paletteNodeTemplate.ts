import * as go from 'gojs';

import { WOMAN_AVATAR, MAN_AVATAR } from '../consts/avatars';

const $ = go.GraphObject.make;

export const createPaletteNodeTemplate = () => 
    $(
        go.Node,
        $(
            go.Panel,
            go.Panel.Spot,
            photoShape(),
            photo(),
        )
    );

const photoShape = (size: number = 60) => 
    $(
        go.Shape,
        'Circle',
        {
            desiredSize: new go.Size(size, size),
            fill: '#ebebeb',
        }
    );

const photo = (size: number = 60) => 
    $(
        go.Panel,
        go.Panel.Spot,
        {
            isClipping: true,
        },
        $(
            go.Shape,
            'Circle',
            {
                desiredSize: new go.Size(size - 1, size - 1)
            }
        ),
        $(
            go.Picture,
            {
                imageStretch: go.GraphObject.UniformToFill,
                desiredSize: new go.Size(size - 1, size - 1),
            },
            new go.Binding(
                'source',
                'gender',
                (gender) => gender === 'F' ? WOMAN_AVATAR : MAN_AVATAR
            )
        )
    );