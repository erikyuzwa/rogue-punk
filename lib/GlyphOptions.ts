/**
 * A catch-all set of options that should be passed down the Object chain
 * as objects are being instantiated.
 * Not all need to be defined or used
 * TODO: add more?
 */
export interface GlyphOptions {
    character?: string | undefined;
    fgColor?: string | undefined;
    bgColor?: string | undefined;

    walkable?: boolean | false;
    diggable?: boolean | false;
    description?: string | '';
    name?: string | '';

}
