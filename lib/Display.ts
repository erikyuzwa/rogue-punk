import * as ROT from 'rot-js';

export class Display {
    private width: null;
    private height: null;
    private options: {
        id?: string;
        width: number;
        height: number;
    };
    private id: any;
    private display: ROT.Display;
    private displayContainer: HTMLElement | null;
    private ele: HTMLElement | null;
    private cameraTarget: null;

    constructor(options = {}) {
        this.options = {width: 60, height: 30, ...options};
        this.width = null;
        this.height = null;

        this.id = this.options.id || 'display';
        this.display = new ROT.Display(this.options);
        this.displayContainer = null;
        this.ele = null;
        this.cameraTarget = null;

        this.setupElements();
    }

    setupElements() {
        this.displayContainer = document.getElementById(this.id);
        this.ele = this.display.getContainer();
        // @ts-ignore
        this.displayContainer.appendChild(this.ele);

    }

    getDisplay() {
        return this.display;
    }

    clear() {
        this.display.clear();
    }

}
