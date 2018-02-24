import { generateElementId } from './generateElementId';

export function elementIsExists(id: string): boolean {
    const elementId = generateElementId(id);
    const elements = document.querySelectorAll(`#${elementId}`);

    return elements.length > 0;
}
