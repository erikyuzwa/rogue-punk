import { Emitter } from './Emitter';
import { GlyphOptions } from './GlyphOptions';

/**
 * A basic Item object to help track "Item" type things
 */
export class Item extends Emitter {
    constructor(options: GlyphOptions) {
        super(options);
    }
}
