import * as go from 'gojs';

import './styles.css';
import { createDiagram } from './gojs/diagram/diagram';

window.addEventListener('load', () => {
    const diagramDiv = document.getElementById('diagram');
    const diagram = createDiagram(diagramDiv as HTMLDivElement);

    const saveButton = document.getElementById('saveButton') as HTMLButtonElement;
    const loadButton = document.getElementById('loadButton') as HTMLButtonElement;

    saveButton.onclick = () => localStorage.setItem('diagram', diagram.model.toJson());
    loadButton.onclick = () => diagram.model = go.Model.fromJson(localStorage.getItem('diagram'));
});