import * as go from 'gojs';

import './styles.css';
import { createDiagram } from './gojs/diagram/diagram';
import { createPalette } from './gojs/palette/palette';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram');
    const diagram = createDiagram(diagramDiv as HTMLDivElement);

    const paletteDiv = document.getElementById('palette') as HTMLDivElement;
    createPalette(paletteDiv);

    const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    const loadButton = document.getElementById('loadButton') as HTMLButtonElement;

    saveButton.onclick = () => localStorage.setItem('diagram', diagram.model.toJson());
    loadButton.onclick = () => diagram.model = go.Model.fromJson(localStorage.getItem('diagram'));

    const addGirlButton = document.getElementById('addGirlButton') as HTMLButtonElement;
    const addBoyButton = document.getElementById('addBoyButton') as HTMLButtonElement;

    addGirlButton.onclick = () => diagram.model.addNodeData({ name: 'new girl', gender: 'F'});
    addBoyButton.onclick = () => diagram.model.addNodeData({ name: 'new boy', gender: 'M'});
});