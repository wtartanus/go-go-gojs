import * as go from 'gojs';
import { Layout } from './layout';

export const addLayout = (diagram: go.Diagram) => {
    const layout = new Layout();
    diagram.layout = layout;
}