import { Glyph } from './Glyph';
import { GlyphOptions } from './GlyphOptions';

/**
 * This is a basic Tile object which we can use to track both presentation and behaviors
 */
export class Tile extends Glyph {
    private walkable: boolean;

    private diggable: boolean;

    private description: string;

    constructor(options : GlyphOptions) {

        super(options);

        this.walkable = options.walkable || false;
        this.diggable = options.diggable || false;

        this.description = options.description || '';
    }

    isWalkable() {
        return this.walkable;
    }

    isDiggable() {
        return this.diggable;
    }

    toString() {
        return this.description;
    }

}

export const nullTile = new Tile({
    description: '(nil)'
});

export const floorTile = new Tile({
    character: '.',
    walkable: true,
    description: 'floor'
});

export const wallTile = new Tile({
    character: '#',
    fgColor: '#a2a427',
    diggable: true,
    description: 'a wall'
});
