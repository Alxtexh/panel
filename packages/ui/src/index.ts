/**
 * @panelkit/ui — public surface.
 *
 * Two rules govern everything in this package (spec §4). They are cheap to hold
 * and expensive to recover once broken:
 *
 *   1. NOTHING here imports Inertia. Pages receive data as props. A thin adapter
 *      in the consuming app wires Inertia to those props. This is what keeps the
 *      kit usable outside Inertia later.
 *
 *   2. Components never fetch. They take props and emit events. Only page-level
 *      components in the consuming app trigger data loads.
 *
 * Both are why DataTable emits `sort` rather than calling a router, and why
 * TableToolbar emits `filter` rather than building a query string.
 */

export { default as DataTable } from './components/DataTable/DataTable.vue'
export { default as SelectionBar } from './components/DataTable/SelectionBar.vue'
export { default as TablePagination } from './components/DataTable/TablePagination.vue'
export { default as TableTabs } from './components/DataTable/TableTabs.vue'
export { default as TableToolbar } from './components/DataTable/TableToolbar.vue'
export { default as PkModal } from './components/Overlay/PkModal.vue'
export { default as RecordForm } from './components/Form/RecordForm.vue'
export { default as PkDropdown } from './components/primitives/PkDropdown.vue'

export { useColumnVisibility } from './composables/useColumnVisibility'
export { useTenantTheme } from './composables/useTenantTheme'
export { useSchemaColumns, BADGE_VARIANTS } from './composables/useSchemaColumns'

export type { FilterSchema, SortDirection, TableColumn } from './components/DataTable/types'
export type { SchemaColumn } from './composables/useSchemaColumns'
export type { FormField } from './components/Form/RecordForm.vue'

export const version = '0.0.1'
