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
export { default as BulkActions } from './components/DataTable/BulkActions.vue'
export { default as IconCell } from './components/DataTable/IconCell.vue'
export { default as ImageCell } from './components/DataTable/ImageCell.vue'
export { default as EditableCell } from './components/DataTable/EditableCell.vue'
export { default as AppearanceDrawer } from './components/Layout/AppearanceDrawer.vue'
export { default as BarChart } from './components/Widgets/BarChart.vue'
export { default as LineChart } from './components/Widgets/LineChart.vue'
export { default as PieChart } from './components/Widgets/PieChart.vue'
export { default as RadarChart } from './components/Widgets/RadarChart.vue'
export { default as PolarAreaChart } from './components/Widgets/PolarAreaChart.vue'
export { default as ComboChart } from './components/Widgets/ComboChart.vue'
export { default as HeatmapChart } from './components/Widgets/HeatmapChart.vue'
export { default as Sparkline } from './components/Widgets/Sparkline.vue'
export { default as TrendBadge } from './components/Widgets/TrendBadge.vue'
export { default as ChartCard } from './components/Widgets/ChartCard.vue'
export { default as StatCard } from './components/Widgets/StatCard.vue'
export { default as MiniStatCard } from './components/Widgets/MiniStatCard.vue'
export { default as SegmentedBar } from './components/Widgets/SegmentedBar.vue'
export { default as SelectionBar } from './components/DataTable/SelectionBar.vue'
export { default as TablePagination } from './components/DataTable/TablePagination.vue'
export { default as TableTabs } from './components/DataTable/TableTabs.vue'
export { default as TableToolbar } from './components/DataTable/TableToolbar.vue'
export { default as PkModal } from './components/Overlay/PkModal.vue'
export { default as PkSlideover } from './components/Overlay/PkSlideover.vue'
export { default as RecordForm } from './components/Form/RecordForm.vue'
export { default as UnsavedBar } from './components/Form/UnsavedBar.vue'
export { default as InfoNode } from './components/Form/InfoNode.vue'
export { default as SchemaNode } from './components/Form/SchemaNode.vue'
export { default as FormFieldControl } from './components/Form/FormFieldControl.vue'
export { default as PkDropdown } from './components/primitives/PkDropdown.vue'

export { useColumnVisibility } from './composables/useColumnVisibility'
export { useLiveUpdates } from './composables/useLiveUpdates'
export { useAppearance } from './composables/useAppearance'
export { useTenantTheme } from './composables/useTenantTheme'
export { useSchemaColumns, BADGE_VARIANTS } from './composables/useSchemaColumns'

export type { FilterSchema, SortDirection, TableColumn } from './components/DataTable/types'
export type { BulkActionSchema } from './components/DataTable/BulkActions.vue'
export type { ChartSeries, ChartPoint } from './components/Widgets/types'
export type { Appearance, Theme, Density, SidebarSide, CardStyle } from './composables/useAppearance'
export type { SchemaColumn } from './composables/useSchemaColumns'
export type { FormField } from './components/Form/types'

export const version = '0.0.1'
