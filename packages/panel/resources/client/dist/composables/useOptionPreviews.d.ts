import type { Component } from 'vue';
/**
 * Register the component that draws one option for `name`.
 *
 * The component receives, as props:
 *
 *   `value`    the option's value - the only thing that says WHICH variant this is
 *   `label`    the option's human label, for renderers that want to include it
 *   `selected` whether this option is the current choice
 *
 * It should draw the thing itself and nothing else: no border, no label, no
 * selected ring. The tile around it supplies all of that, so a renderer that
 * draws its own selection state ends up with two.
 */
export declare function registerOptionPreview(name: string, preview: Component): void;
/** The renderer for `name`, or undefined when nothing has claimed it. */
export declare function optionPreview(name: string): Component | undefined;
/** Whether anything has claimed `name`. */
export declare function hasOptionPreview(name: string): boolean;
/**
 * Every registered name, for diagnostics.
 *
 * IT EXISTS FOR THE ERROR MESSAGE, same as `registeredFieldTypes`. A field
 * naming a renderer nothing registered is a wiring bug, and "no preview for
 * [voucher-code-box]; registered: swatch" is the difference between a five-minute
 * fix and an afternoon spent wondering whether the server sent the field at all.
 */
export declare function registeredOptionPreviews(): string[];
/**
 * Forget everything. Tests only.
 *
 * A module-level map outlives a test, so one test registering a renderer would
 * change what the next one draws - the shared-state failure where the suite
 * passes in order and fails alone.
 */
export declare function resetOptionPreviews(): void;
