/**
 * Dense catalogue / settings card grids: responsive columns under PAGE_SHELL.
 *
 * Columns follow the **content pane** width via container queries, not the
 * viewport. Dual sidebars (main + settings) shrink the pane far below the
 * viewport, so `sm:` / `md:` viewport breakpoints turn two-up too early.
 *
 * Put `CATALOGUE_CONTAINER` (`@container`) on an ancestor whose width is the
 * pane (settings content column, widget root, or PAGE_SHELL when there is no
 * aside). Then: 1 col by default, 2 from `@lg` (32rem), 3 from `@3xl` (48rem).
 *
 * Use for payment gateways, document template pickers, resource directories, and
 * similar tile catalogues. Do not use for dashboard stats, pricing plans,
 * landing marketing sections, or form field rows.
 */
export const CATALOGUE_CONTAINER = '@container min-w-0'

export const CATALOGUE_GRID = 'grid grid-cols-1 gap-3 @lg:grid-cols-2 @3xl:grid-cols-3'

/** Same column rules with a tighter gap (directory-style link tiles). */
export const CATALOGUE_GRID_TIGHT = 'grid grid-cols-1 gap-2 @lg:grid-cols-2 @3xl:grid-cols-3'

/**
 * Product / merch tiles: same container column steps, slightly larger gap.
 */
export const CATALOGUE_GRID_TILES =
    'grid grid-cols-1 gap-4 @lg:grid-cols-2 @lg:gap-5 @3xl:grid-cols-3'
