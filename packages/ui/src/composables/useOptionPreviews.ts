import type { Component } from 'vue'

/**
 * Where the component that DRAWS one option of a visual select is registered.
 *
 * This is `useFieldControls` one level down. That registry answers "what control
 * renders a field of this type"; this one answers "what draws a single option
 * inside it" - so a `visual-select` is a generic grid of tiles, and the thing
 * that knows a `dashed` code box has a dashed border lives wherever that concept
 * belongs rather than inside this package.
 *
 * THE POINT IS THAT A PLUGIN CAN ADD THE SEVENTH STYLE. A designer that hardcodes
 * six option drawings into its own screen has six forever, and an application
 * that wants a seventh forks the screen. A registry means the package ships
 * whatever it ships, an application registers its own, and both appear in the
 * same picker with no edit to either.
 *
 * REGISTERING TWICE REPLACES, and does not warn - hot module replacement
 * re-executes a plugin's entry point on every save, and a duplicate-registration
 * warning there is noise about something nobody did wrong. Replacing is also the
 * override mechanism: an application registering `voucher-code-box` after us
 * wins, which is the other half of what an extension point is for.
 */
const previews = new Map<string, Component>()

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
export function registerOptionPreview(name: string, preview: Component): void {
    previews.set(name, preview)
}

/** The renderer for `name`, or undefined when nothing has claimed it. */
export function optionPreview(name: string): Component | undefined {
    return previews.get(name)
}

/** Whether anything has claimed `name`. */
export function hasOptionPreview(name: string): boolean {
    return previews.has(name)
}

/**
 * Every registered name, for diagnostics.
 *
 * IT EXISTS FOR THE ERROR MESSAGE, same as `registeredFieldTypes`. A field
 * naming a renderer nothing registered is a wiring bug, and "no preview for
 * [voucher-code-box]; registered: swatch" is the difference between a five-minute
 * fix and an afternoon spent wondering whether the server sent the field at all.
 */
export function registeredOptionPreviews(): string[] {
    return [...previews.keys()].sort()
}

/**
 * Forget everything. Tests only.
 *
 * A module-level map outlives a test, so one test registering a renderer would
 * change what the next one draws - the shared-state failure where the suite
 * passes in order and fails alone.
 */
export function resetOptionPreviews(): void {
    previews.clear()
}
