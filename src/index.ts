import { generateElementId } from './generateElementId';
import { elementIsExists } from './elementIsExists';
import { createIFrame } from './createIFrame';

const channels: Map<string, Console> = new Map();

function channel(id: string, container: HTMLElement = window.document.body): Console {
    if (channels.has(id) === true) {
        const channel = channels.get(id);

        if (typeof channel === 'undefined') { 
            throw new ReferenceError(`[Chansole]: Channel doesn\'t exists (id: ${id})`);
        }

        return channel;
    }

    const externalChannelIsExists = elementIsExists(id);

    if (externalChannelIsExists === true) {
        throw new Error(`[Chansole]: Channel is already exists (id: ${id})`);
    }

    const iframe = createIFrame(generateElementId(id));
    const console = iframe.contentWindow.console;

    container.appendChild(iframe);
    channels.set(id, console);

    return console;
}

export default channel;
