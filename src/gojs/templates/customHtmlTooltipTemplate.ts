import * as go from 'gojs';

const $ = go.GraphObject.make;

const show = (link: go.Link, diagram: go.Diagram) => {
    const tooltipDiv = document.getElementById('customTooltip');
    const point = diagram.lastInput.viewPoint;
    tooltipDiv.style.left = (point.x + 10) + 'px';
    tooltipDiv.style.top = (point.y + 10) + 'px';
    const { from, to } = link.data;
    const fromName = diagram.model.findNodeDataForKey(from).name;
    const toName = diagram.model.findNodeDataForKey(to).name;
    console.log(document.getElementById('customTooltipFrom'));
    console.log(document.getElementById('customTooltipTo'));
    document.getElementById('customTooltipFrom').innerHTML = '<b>From:</b>' + fromName;
    document.getElementById('customTooltipTo').innerHTML = '<b>To:</b>' + toName;
    tooltipDiv.style.display = 'block';
};

const hide = () => {
    const tooltipDiv = document.getElementById('customTooltip');
    tooltipDiv.style.display = 'none';
};

export const createCustomHtmlTooltip = () => $(
    go.HTMLInfo,
    {
        show,
        hide
    }
);

