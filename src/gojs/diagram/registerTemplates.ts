import * as go from 'gojs';

import { createLinkTemplate } from '../templates/linkTemplate';
import { createNodeTemplate } from '../templates/nodeTemplate';

export const registerTemplates  = (diagram: go.Diagram) => {
    diagram.nodeTemplateMap = new go.Map([
        { key: '', value: createNodeTemplate() }
    ]);

    diagram.linkTemplateMap = new go.Map([
        { key: '', value: createLinkTemplate() }
    ]);
}