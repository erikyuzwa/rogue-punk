import * as ROT from 'rot-js';

/**
 * Base level container for our scene graph
 */
export class World {
    private options: {};

    constructor(options = {}) {
        this.options = options;
    }

    begin() {
        // TODO: setup any states? entities?
    }

    end() {
        // TODO: save any states? entities?
    }

    render(display: ROT.Display) {
        // TODO: go through and render our scene graph
    }

    handleInput(inputType: string, inputData : {}) {
        // TODO: go through our inputData and update accordingly

    }

}
