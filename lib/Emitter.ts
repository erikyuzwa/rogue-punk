import { Glyph } from './Glyph';
import { GlyphOptions } from './GlyphOptions';

/**
 * This object provides a layer above Glyph that provides a way to attach event listeners
 * TODO: finish up listeners
 * TODO: cleanup ts-ignore workarounds
 * TODO: add mixin support?
 */
export class Emitter extends Glyph {
    private name: any;
    private listeners: {};

    constructor(options: GlyphOptions) {
        super(options);

        this.name = options.name || '';
        this.listeners = {};
    }

    setName(name : string) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    toString() {
        return this.name;
    }

    /**
     * Distribute an event to the listeners
     * @param event
     */
    raiseEvent(event: any) {
        // Make sure we have at least one listener, or else exit
        // @ts-ignore
        if (!this.listeners[event]) {
            return;
        }
        // Extract any arguments passed, removing the event name
        const args = Array.prototype.slice.call(arguments, 1);
        // Invoke each listener, with this entity as the context and the arguments
        const results = [];
        // @ts-ignore
        for (const i in this.listeners[event]) {
            // @ts-ignore
            results.push(this.listeners[event][i].apply(this, args));
        }

        return results;
    }

}
