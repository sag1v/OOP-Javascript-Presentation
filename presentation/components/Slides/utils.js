const converToLinesArray = (content) => Object.entries(content).reduce((acc, next) => {
    acc.push(next.lineNumbers);
    return acc;
}, []);


const lineNumberLogicCreator =  (linesArray) => (e, lineNumbersIdx) => {
    let next = lineNumbersIdx;
    const isUp = e.keyCode === 38;
    const isDown = e.keyCode === 40;
    if (isUp || isDown) {
        const isAtStart = lineNumbersIdx === 0;
        const isAtEnd = lineNumbersIdx === linesArray.length - 1
        if (isUp && !isAtStart) {
            next -= 1
        } else if (isDown && !isAtEnd) {
            next += 1;
        }
    }
    return next;
};

export const createLineNumberUpdater = (content) => lineNumberLogicCreator(converToLinesArray(content));

export class MemoryItem {
    static types = {
        func: 'func',
        obj: 'obj',
        primitive: 'primitive'
    }
    constructor({ type, name, value, children }) {
        this.type = type;
        this.name = name;
        this.value = value;
        this.children = children || [];
    }
}

export const addIf = (condition, item) => [...condition ? [item] : []];
