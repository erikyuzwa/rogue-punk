import * as ROT from 'rot-js';
import { Vector3d } from './Vector3d';
import { Emitter } from './Emitter';
import { GlyphOptions } from './GlyphOptions';
import { Map } from './Map';


/**
 * Class representing our base level Entity.
 *
 * TODO: Pull in a decent ECS implementation?
 * TODO: keep fleshing out
 */
export class Entity extends Emitter {
    private position : Vector3d | undefined;
    private map: Map | undefined;

    constructor(options: GlyphOptions) {
        super(options);
        this.position = new Vector3d(0, 0,0);
    }

    get x(): number {
        // @ts-ignore
        return this.position.x;
    }

    set x(x: number) {
        // @ts-ignore
        this.position.x = x;
    }

    get y(): number {
        // @ts-ignore
        return this.position.y;
    }

    set y(y: number) {
        // @ts-ignore
        this.position.y = y;
    }

    get z(): number {
        // @ts-ignore
        return this.position.z;
    }

    set z(z: number) {
        // @ts-ignore
        this.position.z = z;
    }

    setPosition(x: number, y: number, z: number) {

        const oldPosition: Vector3d | undefined = this.position;

        // Update position
        this.position = new Vector3d(x, y, z);

        // If the entity is on a map, notify the map that the entity has moved.
        if (this.map) {
            this.map.updateEntityPosition(this, oldPosition);
        }
    };

    setMap(map: Map) {
        this.map = map;
    }

    render(display: ROT.Display) {
        // TODO: do this within the Entity level?
    }

}
