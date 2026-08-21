/**
 * Dense catalogue / settings card grids: responsive columns under PAGE_SHELL.
 *
 * 1 on mobile, 2 from sm, 3 from xl (wide desktops under the full-bleed shell).
 * Use for payment gateways, document template pickers, resource directories, and
 * similar tile catalogues. Do not use for dashboard stats, pricing plans,
 * landing marketing sections, or form field rows.
 */
export declare const CATALOGUE_GRID = "grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3";
/** Same column rules with a tighter gap (directory-style link tiles). */
export declare const CATALOGUE_GRID_TIGHT = "grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3";
/**
 * Product / merch tiles: two-up on small screens, three on wide desktops.
 */
export declare const CATALOGUE_GRID_TILES = "grid grid-cols-2 gap-4 sm:gap-5 xl:grid-cols-3";
