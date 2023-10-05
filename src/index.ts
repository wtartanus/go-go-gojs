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

    saveButton.onclick = () => {
        localStorage.setItem('diagram', diagram.model.toJson());
        saveButton.setAttribute('disabled', 'true');
    };

    loadButton.onclick = () => diagram.model = go.Model.fromJson(localStorage.getItem('diagram'));

    const selectedPerson = document.getElementById('selectedPerson');
    diagram.addDiagramListener('ChangedSelection', () => {
        if (diagram.selection.count !== 1) {
            selectedPerson.innerText = '';
            return;
        }
        const selection = diagram.selection.first();
        if (!(selection instanceof go.Node) || selection instanceof go.Group) {
            selectedPerson.innerText = '';
        } else {
            selectedPerson.innerText = selection.data.name;
        }
    });

    diagram.addDiagramListener('Modified', (e) => {
        if (saveButton.disabled) {
            saveButton.removeAttribute('disabled');
        }
    });
});