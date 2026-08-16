/**
 * Pack dashboard widgets into independent column tracks.
 *
 * A two-column CSS grid shares rows: collapsing the left card leaves a hole
 * because the right neighbour still defines the row height. Assigning widgets
 * to flex columns (round-robin, declaration order) means a collapse only
 * shortens that column, and widgets below it slide up immediately.
 *
 * `span >= 2` widgets flush the current column batch and sit on their own
 * full-width band, matching `lg:col-span-2` without stretching siblings.
 */
export type WidgetColumnBand<T> = {
    type: 'wide';
    item: T;
} | {
    type: 'columns';
    columns: T[][];
};
export declare function packWidgetColumns<T extends {
    span?: number;
}>(items: readonly T[], columnCount: number): WidgetColumnBand<T>[];
