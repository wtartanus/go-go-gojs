import * as go from 'gojs';
import mergeImages from 'merge-images';

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

export const exportToPng = async (diagram: go.Diagram) => {
    const CONTENT_MAX_SIZE = 2000;
    const {
        width: diagramWidth,
        height: diagramHeight 
    } = diagram.documentBounds;
    const imagesCount = Math.ceil(diagramWidth / CONTENT_MAX_SIZE);
    
    const images = Array.from({ length: imagesCount }, (_, i) => {
        const x = i * CONTENT_MAX_SIZE;
        const { src } = diagram.makeImage({
            position: new go.Point(x, 0),
            size: new go.Size(CONTENT_MAX_SIZE, diagramHeight),
            scale: 1,
            background: 'white',
        });

        return { src, x, y: 0}
    });
  
    const mergedUrl = await mergeImages(images, { width: diagramWidth, height: diagramHeight });
  
    const binaryData = atob(mergedUrl.split(',')[1]);
    const uint8Array = new Uint8Array(binaryData.length);
    
    for (let i = 0; i < binaryData.length; i++) {
      uint8Array[i] = binaryData.charCodeAt(i);
    }

    const blob = new Blob([uint8Array], { type: 'image/png' });
    callback(blob);
}