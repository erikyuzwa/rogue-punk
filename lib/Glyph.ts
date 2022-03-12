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

    getChar(): string {
        return this.char;
    }

    getBgColor(): string {
        return this.bgColor;
    }

    getFgColor(): string {
        return this.fgColor;
    }

    toString(): string {
        return '%c{' +
            this.fgColor +
            '}%b{' +
            this.bgColor +
            '}' +
            this.char +
            '%c{white}%b{black}';
    }
}
