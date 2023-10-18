import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createMarriageLinkTemplate = () => $(
    go.Link,
    { selectable: false },
    $(
        go.Shape,
        {
            strokeWidth: 2.5,
            stroke: '#5d8cc1'
        }
    )
);