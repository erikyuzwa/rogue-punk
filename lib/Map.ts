import {Entity} from './Entity';
import * as ROT from 'rot-js';
import Simple from 'rot-js/lib/scheduler/simple';
import {Tile, nullTile, floorTile} from './Tile';
import {Vector2d} from './Vector2d';
import {Vector3d} from './Vector3d';
import {Item} from './Item';
/**
 * A basic Map implementation to pull from when generating your own levels
 * TODO: Add FOV perhaps?
 */
export class Map {
    private height: number;
    private width: number;
    private depth: number;
    private tiles: Tile[][];

    private entities: {};
    private items: {};

    private engine: ROT.Engine;
    private scheduler: Simple<Entity>;
    private player: Entity;

    constructor(tiles: Array<[]>, player: Entity) {
        this.tiles = tiles;

        // @ts-ignore
        this.width = tiles[0].length;
        // @ts-ignore
        this.height = tiles[0][0].length;

        this.depth = tiles.length;

        this.entities = {};
        this.items = {};

        // create the engine and scheduler
        this.scheduler = new ROT.Scheduler.Simple();
        this.engine = new ROT.Engine(this.scheduler);

        this.player = player;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    getDepth(): number {
        return this.depth;
    }

    getTile(pos: Vector3d): Tile {
        // Make sure we are inside the bounds. If we aren't, return null tile.
        if (pos.x < 0 ||
            pos.x >= this.width ||
            pos.y < 0 ||
            pos.y >= this.height ||
            pos.z < 0 ||
            pos.z >= this.depth) {
            return nullTile;
        } else {
            // @ts-ignore
            return this.tiles[pos.z][pos.x][pos.y] || nullTile;
        }
    }

    dig(pos: Vector3d): void {
        if (this.getTile(pos).isDiggable()) {
            // @ts-ignore
            this.tiles[z][x][y] = floorTile;
        }
    }

    getRandomFloorPosition(z: number) : Vector3d {
        const pos: Vector3d = new Vector3d(0, 0, 0);
        do {
            pos.x = Math.floor(Math.random() * this.width);
            pos.y = Math.floor(Math.random() * this.height);
        } while(this.getTile(pos) !== floorTile || this.getEntityAt(pos.x, pos.y, z));

        return pos;
    }

    getEngine(): ROT.Engine {
        return this.engine;
    }

    getEntities(): {} {
        return this.entities;
    }

    getEntityAt(x:number, y:number, z:number): Entity | null {
        // @ts-ignore
        return this.entities[x + ',' + y + ',' + z];
    }

    addEntity(entity: Entity): void {

        // Update the entity's map
        entity.setMap(this);

        // Add the entity to the list of entities
        this.updateEntityPosition(entity);

        // add the entity to the scheduler
        this.scheduler.add(entity, true);
    }

    addEntityAtRandomPosition(entity: Entity, z: number) : void {
        const position: Vector3d = this.getRandomFloorPosition(z);
        entity.x = position.x;
        entity.y = position.y;
        entity.z = position.z;
        this.addEntity(entity);
    }

    removeEntity(entity: Entity): void {
        // Remove the entity from the map
        const key = entity.x + ',' + entity.y + ',' + entity.z;
        // @ts-ignore
        if (this.entities[key] === entity) {
            // @ts-ignore
            delete this.entities[key];
        }
    };

    updateEntityPosition(entity: Entity, oldPosition?: Vector3d): void {

        if (oldPosition) {
            const oldKey = oldPosition.x + ',' + oldPosition.y + ',' + oldPosition.z;
            // @ts-ignore
            if (this.entities[oldKey] === entity) {
                // @ts-ignore
                delete this.entities[oldKey];
            }
        }

        // Make sure the entity's position is within bounds
        if (entity.x < 0 || entity.x >= this.width ||
            entity.y < 0 || entity.y >= this.height) {
            throw new Error("Entity's position is out of bounds.");
        }
        // Sanity check to make sure there is no entity at the new position.
        const key = entity.x + ',' + entity.y + ',' + entity.z;
        // @ts-ignore
        if (this.entities[key]) {
            throw new Error('Tried to add an entity at an occupied position.');
        }

        // Add the entity to the table of entities
        // @ts-ignore
        this.entities[key] = entity;
    }

    getItemsAt(x: number, y: number, z: number) {
        // @ts-ignore
        return this.items[x + ',' + y + ',' + z];
    }

    setItemsAt(x: number, y: number, z: number, items: Item[]) {
        // If our items array is empty, then delete the key from the table.
        const key = x + ',' + y + ',' + z;
        if (items.length === 0) {
            // @ts-ignore
            if (this.items[key]) {
                // @ts-ignore
                delete this.items[key];
            }
        } else {
            // Simply update the items at that key
            // @ts-ignore
            this.items[key] = items;
        }
    }

    addItem(x: number, y: number, z: number, item: Item) {
        // If we already have items at that position, simply append the item to the
        // list of items.
        const key = x + ',' + y + ',' + z;
        // @ts-ignore
        if (this.items[key]) {
            // @ts-ignore
            this.items[key].push(item);
        } else {
            // @ts-ignore
            this.items[key] = [item];
        }
    }

    addItemAtRandomPosition(item: Item, z: number) {
        const position = this.getRandomFloorPosition(z);
        this.addItem(position.x, position.y, position.z, item);
    }

    getPlayer() {
        return this.player;
    }
}
