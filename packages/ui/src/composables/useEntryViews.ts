import type { Component } from 'vue'

/**
 * Where the component that DRAWS one ViewEntry is registered.
 *
 * Same idea as `useFieldControls` / `useOptionPreviews`: PHP emits a view name
 * string (`ViewEntry::make('preview')->view('invoice-summary')`), and the host
 * app registers the Vue SFC that knows how to draw that name. The kit never
 * receives a component class from the server.
 *
 * REGISTERING TWICE REPLACES (HMR and host overrides), same as option previews.
 */
const views = new Map<string, Component>()

/**
 * Register the Vue component that renders `name` for a ViewEntry.
 *
 * The component receives, as props:
 *
 *   `node`    the entry schema node (key, label, view, …)
 *   `record`  the full record payload on the view page
 *   `value`   `record[node.key]` when the entry has a key
 */
export function registerEntryView(name: string, view: Component): void {
    views.set(name, view)
}

/** The renderer for `name`, or undefined when nothing has claimed it. */
export function entryView(name: string): Component | undefined {
    return views.get(name)
}

/** Whether anything has claimed `name`. */
export function hasEntryView(name: string): boolean {
    return views.has(name)
}

/** Every registered name, for diagnostics. */
export function registeredEntryViews(): string[] {
    return [...views.keys()].sort()
}

/** Forget everything. Tests only. */
export function resetEntryViews(): void {
    views.clear()
}
