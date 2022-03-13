import { getRandomElement } from './Utility';

export class Repository {
    private name: any;

    private templates: {
        name?: string;
    };
    private konstructor: any;

    private randomTemplates: {};

    constructor(name: string, konstructor: any) {
        this.name = name;
        this.templates = {};
        this.konstructor = konstructor;
        this.randomTemplates = {};
    }

    define(name: string, template: string, options: {}): void {
        // @ts-ignore
        this.templates.name = template;
    }

    // Create an object based on a template.
    create(name: string) {
        if (!this.templates.name) {
            throw new Error("No template named '" + name + "' in repository '" + this.name + "'");
        }
        // Copy the template
        // @ts-ignore
        const template = Object.create(this.templates.name);

        // Create the object, passing the template as an argument
        return new this.konstructor(template);
    };

    // Create an object based on a random template
    createRandom(): any {
        // Pick a random key and create an object based off of it.
        return this.create(getRandomElement(Object.keys(this.randomTemplates)));
    };
}
