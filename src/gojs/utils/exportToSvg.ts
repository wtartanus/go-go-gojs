import * as go from 'gojs';

const callback = (blob: Blob) => {
    const url = window.URL.createObjectURL(blob);
    const filename = 'myFamilyTree.svg';

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    if (window.navigator.msSaveBlob !== undefined) {
        window.navigator.msSaveBlob(blob, filename);
        return;
    }

    document.body.appendChild(a);
    requestAnimationFrame(() => {
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    });
};

export const exportToSvg = (diagram: go.Diagram) => {
    const svg = diagram.makeSvg({
        background: 'white',
        scale: 1,
        padding: 10
    });

    const svgStr = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([svgStr], { type: 'image/svg+xml' });
    callback(blob); 
};
