import * as go from 'gojs';

const $ = go.GraphObject.make;

const getFormattedAgeMessage = ({ birthYear, deathYear}: go.ObjectData) => {
    const yearToSubtractFrom = deathYear ? deathYear : new Date().getFullYear();

    return `Age: ${yearToSubtractFrom - birthYear}`;
};

export const createNativeTooltipTemplate = () => $(
    'ToolTip',
    $(
        go.Panel,
        go.Panel.Auto,
        $(
            go.TextBlock,
            new go.Binding('text', '', getFormattedAgeMessage)
        )
    )
);