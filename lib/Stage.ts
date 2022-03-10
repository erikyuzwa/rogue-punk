import * as ROT from 'rot-js';

/**
 * Display object to handle rendering our Entities
 */
export class Stage {
    /** @type {number} */
    private width: null;

    /** @type {number} */
    private height: null;

    private options: {
        id?: string;
        width: number;
        height: number;
    };

    /** @type {string} */
    private id: any;

    /** @type {ROT.Display} */
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
