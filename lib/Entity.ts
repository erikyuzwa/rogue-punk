import * as ROT from "rot-js";

/**
 * Class representing our base level Entity. TODO: Pull in a good ECS.
 */
export class Entity {
    private x: number;
    private y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    render(display: ROT.Display) {
        // TODO: do this within the Entity level?
    }

}
