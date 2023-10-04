import * as go from 'gojs';

const $ = go.GraphObject.make;

export const createLinkTemplate = () => $(
    go.Link,
    { routing: go.Link.Orthogonal },
    $(go.Shape)
);
