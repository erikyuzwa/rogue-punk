import * as ROT from 'rot-js';
import { StageOptions } from './StageOptions';
import { Vector2d } from './Vector2d';

/**
 * Display object to handle rendering everything
 */
export class Stage {
    /** @type {number} */
    private width: number;

    /** @type {number} */
    private height: number;

    /** @type {StageOptions} */
    private options: StageOptions;

    /** @type {string} */
    private id: any;

    /** @type {ROT.Display} */
    private display: ROT.Display;

    /** @type {HTMLElement} */
    private displayContainer: HTMLElement | null;

    /** @type {Vector2d} */
    private cameraTarget: Vector2d | null;

    /** @type {Vector2d} */
    private center: Vector2d | null;

    constructor(options : StageOptions) {
        this.options = {...options};
        this.width = options.width || 60;
        this.height = options.height || 30;

        this.id = options.id || 'stage';
        this.display = new ROT.Display(this.options);
        this.displayContainer = null;

        this.cameraTarget = null;
        this.center = null;

        this.setDimensions(this.width, this.height);

        this.attachToElement();
    }

    setDimensions(x: number, y : number): void {
        this.width = x;
        this.height = y;
        // @ts-ignore
        this.center.x = Math.round(x / 2);
        // @ts-ignore
        this.center.y = Math.round(y / 2);
    }

    attachToElement(): void {
        this.displayContainer = document.getElementById(this.id);
        // @ts-ignore
        this.displayContainer.appendChild(this.display.getContainer());
    }

    getDisplay(): ROT.Display {
        return this.display;
    }

    clear(): void {
        this.display.clear();
    }

    setCameraTarget(cameraTarget : Vector2d): void {
        this.cameraTarget = cameraTarget;
    }

    draw(x : number, y : number, glyph : string, fgColor : string, bgColor : string) {
        if (this.cameraTarget) {
            // @ts-ignore
            x += (this.center.x - this.cameraTarget.x);
            // @ts-ignore
            y += (this.center.y - this.cameraTarget.y);
        }
        return this.display.draw(x, y, glyph, fgColor, bgColor);
    }

}
