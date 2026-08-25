import type { Component } from 'vue';
/**
 * Register the Vue component that renders `name` for a ViewEntry.
 *
 * The component receives, as props:
 *
 *   `node`    the entry schema node (key, label, view, …)
 *   `record`  the full record payload on the view page
 *   `value`   `record[node.key]` when the entry has a key
 */
export declare function registerEntryView(name: string, view: Component): void;
/** The renderer for `name`, or undefined when nothing has claimed it. */
export declare function entryView(name: string): Component | undefined;
/** Whether anything has claimed `name`. */
export declare function hasEntryView(name: string): boolean;
/** Every registered name, for diagnostics. */
export declare function registeredEntryViews(): string[];
/** Forget everything. Tests only. */
export declare function resetEntryViews(): void;
