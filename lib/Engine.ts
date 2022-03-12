import { Stage } from './Stage';
import { World } from './World';
import { StageOptions } from './StageOptions';

/**
 * Base-level object of the library. Extend from Engine in your own project.
 */
export class Engine {
    private stage: Stage;
    private currentWorld: World;

    /**
     * @constructor
     */
    constructor(options: StageOptions) {
        this.stage = new Stage(options);
        this.currentWorld = new World();
    }

    getStage() {
        return this.stage;
    }

    refresh() {
        this.stage.clear();
        if (this.currentWorld) {
            this.currentWorld.render(this.stage.getDisplay());
        }

    }

    switchWorld(newWorld: World) {
        if (this.currentWorld) {
            this.currentWorld.end();
        }

        this.currentWorld = newWorld;

        if (this.currentWorld) {
            this.currentWorld.begin();
            this.refresh();
        }
    }


}
