export function createIFrame(id: string): HTMLIFrameElement {
    const iframe = document.createElement('iframe');

    iframe.id = id;
    iframe.style.position = 'fixed';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    iframe.style.visibility = 'hidden';

    return iframe;
}
