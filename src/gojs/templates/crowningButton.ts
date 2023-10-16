import * as go from 'gojs';

const $ = go.GraphObject.make;

const toggleHighlight = (obj: go.Part, reverse: boolean = false) => {
    const background = obj.findObject('mainShape') as go.Shape;
    const color = reverse ? '#fff' : '#ebebeb';
    background.fill = color;
};

export const crowningButton = () => $(
    go.Adornment,
    go.Panel.Spot,
    $(go.Placeholder),
    {
        click: (_, adornment: go.Adornment) => {
            const { diagram, adornedPart: { data} } = adornment;

            diagram.model.setDataProperty(
                data,
                'reign',
                !data.reign
            );
        },
        cursor: 'pointer',
        isActionable: true,
        mouseEnter: (_, obj: go.Adornment) => toggleHighlight(obj),
        mouseLeave: (_, obj: go.Adornment) => toggleHighlight(obj, true) 
    },
    $(
        go.Panel,
        go.Panel.Auto,
        {
            alignment: new go.Spot(0.5, 1, 0, 10),
            alignmentFocus: go.Spot.TopCenter
        },
        $(
            go.Shape,
            'RoundedRectangle',
            {
                fill: 'white',
                stroke: 'green',
                name: 'mainShape'
            }
        ),
        $(
            go.TextBlock,
            {
                margin: 3,
                text: ''
            },
            new go.Binding(
                'text',
                '',
                (_, obj) => obj.part.adornedPart.data.reign ? 'Decrown' : 'Crown'
            ),
        )
    ),
);