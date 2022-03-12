/**
 * My cheesy implementation of Vector2d.
 *
 * You could also pull in something like THREE.Vector2
 * https://threejs.org/docs/#api/en/math/Vector2
 */
export class Vector2d {

    public constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    get x(): number {
        return this.x;
    }

    set x(x: number) {
        this.x = x;
    }

    get y(): number {
        return this.y;
    }

    set y(y: number) {
        this.y = y;
    }
}
