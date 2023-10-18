import * as go from 'gojs';

import { createLinkTemplate } from '../templates/linkTemplate';
import { createNodeTemplate } from '../templates/nodeTemplate';
import { createGroupTemplate } from '../templates/groupTemplate';
import { createMarriageLinkTemplate } from '../templates/marriageLinkTemplate';
import { createLinkLabelTemplate } from '../templates/linkLabelTemplate';

export const registerTemplates  = (diagram: go.Diagram) => {
    diagram.nodeTemplateMap = new go.Map([
        { key: '', value: createNodeTemplate() },
        { key: 'LinkLabel', value: createLinkLabelTemplate() }
    ]);

    diagram.linkTemplateMap = new go.Map([
        { key: '', value: createLinkTemplate() },
        { key: 'Marriage', value: createMarriageLinkTemplate() }
    ]);

    diagram.groupTemplateMap = new go.Map([
        { key: '', value: createGroupTemplate() }
    ]);
};
