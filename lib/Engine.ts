import {Display} from "./Display";
import {World} from "./World";


export class Engine {
    private display: Display;
    private currentWorld: World;

    constructor() {
        this.display = new Display();
        this.currentWorld = new World();
    }

    getDisplay() {
        return this.display;
    }

    refresh() {
        this.display.clear();
        if (this.currentWorld) {
            this.currentWorld.render(this.display.getDisplay());
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
