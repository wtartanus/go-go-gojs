import * as go from 'gojs';

import { createPaletteNodeTemplate } from '../templates/paletteNodeTemplate';
import { addLayout } from './addLayout';

const $ = go.GraphObject.make;

export const createPalette = (paletteDiv: HTMLDivElement) => {
    const palette = $(go.Palette, paletteDiv);

    palette.nodeTemplateMap = new go.Map([
        { key: '', value: createPaletteNodeTemplate() }
    ]);

    palette.model.nodeDataArray = [
        { gender: 'M', name: 'new boy' },
        { gender: 'F', name: 'new girl' }
    ];

    palette.padding = 20;

    addLayout(palette);
}