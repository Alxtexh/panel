import type { Component } from 'vue'

/**
 * Where a form control is registered for a field type.
 *
 * THE HOLE THIS FILLS. A field's type is a string the server chooses - a `Field`
 * subclass returns `'colour'` and the schema carries it - but the control that
 * renders it was a `v-else-if` chain inside `FormFieldControl.vue`. So writing a
 * new field meant editing a file inside this package: fine for us, impossible
 * for anybody who installed it. A "custom field" you can only add by patching
 * the framework is not an extension point, and the absence of one is what stops
 * a plugin ecosystem existing at all.
 *
 * A MAP, NOT A CONVENTION. The alternative - resolving `field.type` to a
 * component name and hoping one is globally registered - fails silently: a typo
 * or an unregistered name renders nothing at all, which on a form looks like a
 * field the server forgot to send rather than one the client cannot draw. A
 * lookup that can be asked "do you have this?" lets the caller fall back
 * deliberately and lets a test assert the wiring.
 *
 * REGISTRATION IS EXPLICIT AND GLOBAL, on purpose. Field controls are decided
 * once when the application boots - by the app, or by a plugin's entry point -
 * and never per component; making it a module-level map means a control
 * registered anywhere is available to every form, including forms rendered
 * inside a repeater three levels down.
 *
 * THE BUILT-IN TYPES ARE NOT IN HERE. `text`, `select`, `toggle` and the rest
 * stay in the component, because they share a single wrapper - label, error,
 * help text - and pulling them out would trade one switch for twenty files that
 * each have to remember the same markup. The registry is consulted FIRST, so an
 * application can still replace a built-in by registering its own control for
 * that type, which is the other half of what an extension point is for.
 */
const controls = new Map<string, Component>()

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
export function registerFieldControl(type: string, control: Component): void {
    controls.set(type, control)
}

/** The control for `type`, or undefined when nothing has claimed it. */
export function fieldControl(type: string): Component | undefined {
    return controls.get(type)
}

/** Whether anything has claimed `type`. */
export function hasFieldControl(type: string): boolean {
    return controls.has(type)
}

/**
 * Every registered type, for diagnostics.
 *
 * IT EXISTS FOR THE ERROR MESSAGE. A field whose type nothing renders is the
 * failure this whole file is about, and "no control for [colour]; registered:
 * text, select, slider" is the difference between a five-minute fix and an
 * afternoon spent wondering whether the server sent the field at all.
 */
export function registeredFieldTypes(): string[] {
    return [...controls.keys()].sort()
}

/**
 * Forget everything. Tests only.
 *
 * A module-level map outlives a test, so one test registering a control would
 * change what the next one renders - the classic shared-state failure where the
 * suite passes in order and fails alone.
 */
export function resetFieldControls(): void {
    controls.clear()
}
