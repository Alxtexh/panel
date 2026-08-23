/**
 * Apply a persisted dashboard layout onto declared widgets.
 *
 * Ids are `kind:key` (`stat:users`, `chart:sessions`, `table:recent`). Legacy
 * `chartOrder` is folded by the server into `widgets` before the page props
 * arrive; this helper only consumes the normalized shape.
 */
export type DashboardWidgetKind = 'stat' | 'chart' | 'table';
export type DashboardLayoutEntry = {
    id: string;
    span: number;
    hidden: boolean;
};
export type DashboardLayout = {
    widgets: DashboardLayoutEntry[];
};
export type LayoutItem<T extends {
    key: string;
    span?: number;
} = {
    key: string;
    span?: number;
}> = {
    id: string;
    kind: DashboardWidgetKind;
    key: string;
    span: number;
    hidden: boolean;
    source: T;
};
export declare function widgetId(kind: DashboardWidgetKind, key: string): string;
export declare function parseWidgetId(id: string): {
    kind: DashboardWidgetKind;
    key: string;
} | null;
/**
 * Build one ordered list across kinds, following the saved widget order when
 * present, then appending leftovers in declaration order (stats, charts, tables).
 */
export declare function mergeLayoutItems<S extends {
    key: string;
    span?: number;
}, C extends {
    key: string;
    span?: number;
}, T extends {
    key: string;
    span?: number;
}>(stats: readonly S[], charts: readonly C[], tables: readonly T[], layout: DashboardLayout | null | undefined): Array<LayoutItem<S | C | T>>;
export declare function toPersistedLayout(items: readonly {
    id: string;
    span: number;
    hidden: boolean;
}[]): DashboardLayout;
