import { GlyphOptions } from './GlyphOptions';

/**
 * The basic display element
 */
export class Glyph {
    private char: string;
    private fgColor: string;
    private bgColor: string;

    constructor(options: GlyphOptions) {
        options = options || {};
        this.char = options.character || ' ';
        this.fgColor = options.fgColor || 'white';
        this.bgColor = options.bgColor || 'black';
    }

    getChar() {
        return this.char;
    }

    getBgColor() {
        return this.bgColor;
    }

    getFgColor() {
        return this.fgColor;
    }

    toString() {
        return '%c{' +
            this.fgColor +
            '}%b{' +
            this.bgColor +
            '}' +
            this.char +
            '%c{white}%b{black}';
    }
}
