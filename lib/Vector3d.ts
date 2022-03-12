/**
 * My cheesy implementation of Vector3d.
 *
 * You could also pull in something like THREE.Vector3
 * https://threejs.org/docs/#api/en/math/Vector3
 */
export class Vector3d {

    public constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
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

    get z(): number {
        return this.z;
    }

    set z(z: number) {
        this.z = z;
    }
}
