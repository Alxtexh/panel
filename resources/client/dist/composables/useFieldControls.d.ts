import type { Component } from 'vue';
/**
 * Register the control that renders `type`.
 *
 * The component receives, as props:
 *
 *   `field`      the schema node, including any extra keys the PHP field added
 *   `modelValue` the current value
 *   `disabled`   true while the form is saving or the field is disabled
 *   `errors`     the whole error bag, keyed as the server returned it
 *   `options`    resolved options, when the field declared any
 *
 * and emits `update:modelValue` with the new value. That is deliberately the
 * plain `v-model` contract rather than a bespoke one: a control written for a
 * panel should be an ordinary Vue component that happens to be usable here.
 *
 * REGISTERING TWICE REPLACES, and does not warn. Hot module replacement
 * re-executes a plugin's entry point on every save, and a duplicate-registration
 * warning in that situation is noise about something nobody did wrong.
 */
export declare function registerFieldControl(type: string, control: Component): void;
/** The control for `type`, or undefined when nothing has claimed it. */
export declare function fieldControl(type: string): Component | undefined;
/** Whether anything has claimed `type`. */
export declare function hasFieldControl(type: string): boolean;
/**
 * Every registered type, for diagnostics.
 *
 * IT EXISTS FOR THE ERROR MESSAGE. A field whose type nothing renders is the
 * failure this whole file is about, and "no control for [colour]; registered:
 * text, select, slider" is the difference between a five-minute fix and an
 * afternoon spent wondering whether the server sent the field at all.
 */
export declare function registeredFieldTypes(): string[];
/**
 * Forget everything. Tests only.
 *
 * A module-level map outlives a test, so one test registering a control would
 * change what the next one renders - the classic shared-state failure where the
 * suite passes in order and fails alone.
 */
export declare function resetFieldControls(): void;
