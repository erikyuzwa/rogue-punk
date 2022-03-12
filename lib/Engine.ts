import { Stage } from './Stage';
import { World } from './World';
import { StageOptions } from './StageOptions';

/**
 * Base-level object of the library. Extend from Engine in your own project.
 */
export class Engine {
    private stage: Stage;
    private currentWorld: World | undefined;

    /**
     * @constructor
     */
    constructor(options: StageOptions) {
        this.stage = new Stage(options);

        this.init();
    }

    init(): void {
        // TODO: come up with something else for binding
        // maybe allow for W,A,S,D by default?
        const engine = this;
        const bindEventToScreen = ((event: string) => {
            window.addEventListener(event, (e) => {
                if (engine.currentWorld) {
                    engine.currentWorld.handleInput(event, e);
                }
            }, false);
        });

        bindEventToScreen('keydown');
    }

    // TODO: do we need this?
    getStage(): Stage {
        return this.stage;
    }

    refresh(): void {
        this.stage.clear();
        if (this.currentWorld) {
            this.currentWorld.render(this.stage.getDisplay());
        }

    }

    switchWorld(newWorld: World): void {
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
