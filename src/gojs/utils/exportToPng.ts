import * as go from 'gojs';

declare global {
    interface Navigator {
        msSaveBlob?: (blob: any, defaultName?: string) => boolean
    }
}

const callback = (blob: Blob) => {
    const url = window.URL.createObjectURL(blob);
    const filename = 'myFamilyTree.png';

    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;

    if (window.navigator['msSaveBlob'] !== undefined) {
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

export const exportToPng = (diagram: go.Diagram) => {
    diagram.makeImageData({
        background: 'white',
        returnType: 'blob',
        scale: 1,
        padding: 10,
        callback
    })
}