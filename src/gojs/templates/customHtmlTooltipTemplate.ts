import * as go from 'gojs';

const $ = go.GraphObject.make;

const show = (link: go.Link, diagram: go.Diagram) => {
    const tooltipDiv = document.getElementById('customTooltip');
    const point = diagram.lastInput.viewPoint;
    tooltipDiv.style.left = (point.x + 10) + 'px';
    tooltipDiv.style.top = (point.y + 10) + 'px';
    const { from, to } = link.data;
    const anchorNodeLocation = diagram.findNodeForKey(from).location;
    const parentsData = diagram.findPartsNear(anchorNodeLocation, 25)
        .filter((part) => part instanceof go.Node && !(part instanceof go.Group))
        .map(({ data }) => data)
        .toArray();
        console.log(parentsData);
    const fromName = `${parentsData[0].name} and ${parentsData[1]?.name}`;    
    const toName = diagram.model.findNodeDataForKey(to).name;
    document.getElementById('customTooltipFrom').innerHTML = '<b>From:</b>' + fromName;
    document.getElementById('customTooltipTo').innerHTML = '<b>To:</b>' + toName;

    tooltipDiv.classList.remove('hidden');
    tooltipDiv.classList.remove('fade-out');
    tooltipDiv.classList.add('fade-in');
};

const hide = () => {
    const tooltipDiv = document.getElementById('customTooltip');
    tooltipDiv.classList.remove('fade-in');
    tooltipDiv.classList.add('fade-out');
};

export const createCustomHtmlTooltip = () => $(
    go.HTMLInfo,
    {
        show,
        hide
    }
);

