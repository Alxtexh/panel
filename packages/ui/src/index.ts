/**
 * @alxtexh-enterprise/panel - public surface.
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
export { default as RelationPanel } from './components/DataTable/RelationPanel.vue'
export { default as RelationCreateDialog } from './components/DataTable/RelationCreateDialog.vue'
export { default as IconCell } from './components/DataTable/IconCell.vue'
export { default as RatingCell } from './components/DataTable/RatingCell.vue'
export { default as ImageCell } from './components/DataTable/ImageCell.vue'
/*
 | ROADMAP 4.6. A colour you can SEE rather than a hex string you can read,
 | and a boolean rendered as state rather than as a control - see each
 | component for why neither is a badge and why the checkbox is disabled.
 */
export { default as ColourCell } from './components/DataTable/ColourCell.vue'
export { default as CheckboxCell } from './components/DataTable/CheckboxCell.vue'
export { default as CodeCell } from './components/DataTable/CodeCell.vue'
export { default as PkQueryBuilder } from './components/DataTable/PkQueryBuilder.vue'
export { default as KeyValueCell } from './components/DataTable/KeyValueCell.vue'
export { default as TagsCell } from './components/DataTable/TagsCell.vue'
export { default as EditableCell } from './components/DataTable/EditableCell.vue'
export { default as BadgeResolver } from './components/DataTable/BadgeResolver.vue'
export { default as RecordActions } from './components/DataTable/RecordActions.vue'
export { default as AppearanceDrawer } from './components/Layout/AppearanceDrawer.vue'
export { default as PkBottomNav } from './components/Layout/PkBottomNav.vue'

/*
 | THE REFERENCE APP'S FORM PRIMITIVES, moved rather than redrawn - see each
 | file. They are what the packaged auth screens are built from, so a generated
 | portal's inputs are the SAME inputs the demo shows.
 */
export { default as PkTextInput } from './components/primitives/PkTextInput.vue'
export { default as PkFieldLabel } from './components/primitives/PkFieldLabel.vue'
export { default as PkSpinner } from './components/primitives/PkSpinner.vue'
export { default as PkOtpInput } from './components/primitives/PkOtpInput.vue'
export { default as PkHeading } from './components/primitives/PkHeading.vue'
export { default as PkEmptyState } from './components/primitives/PkEmptyState.vue'
export { default as PkPageHeader } from './components/primitives/PkPageHeader.vue'
export { default as PkAlertError } from './components/primitives/PkAlertError.vue'
export { default as PkPasswordInput } from './components/primitives/PkPasswordInput.vue'

/* The class merger every moved shadcn component composes with. */
export { cn, toUrl } from './lib/cn'
export {
    CATALOGUE_CONTAINER,
    CATALOGUE_GRID,
    CATALOGUE_GRID_TIGHT,
    CATALOGUE_GRID_TILES,
} from './lib/catalogueGrid'
export {
    FORM_MEASURE,
    PAGE_SHELL,
    PAGE_SHELL_COMPACT,
    PAGE_SHELL_STACK,
} from './lib/pageShell'
export { FOCUS_RING, FOCUS_RING_SOFT, FOCUS_RING_WITHIN } from './lib/focusRing'
export { packWidgetColumns } from './lib/packWidgetColumns'
export type { WidgetColumnBand } from './lib/packWidgetColumns'
export {
    TRANSPARENT_IMAGE_HELP,
    OPAQUE_IMAGE_ERROR,
    JPEG_IMAGE_ERROR,
    assertTransparentImage,
    imageHasTransparency,
} from './lib/transparentImage'

/*
 | THE REFERENCE APP'S SHADCN FAMILIES, MOVED WHOLE.
 |
 | The sidebar is the reason: the demo's is 509 lines of behaviour - flyouts
 | when collapsed, a horizontal mode, collapsible groups, a mobile sheet - and
 | rebuilding that against a thinner primitive is how a generated portal ends up
 | looking almost right. Moving it meant moving what it composes, which is
 | `sheet`, `separator`, `input` and `tooltip`: 45 files, and the closure stops
 | there.
 |
 | THIS IS WHY THIS PACKAGE NOW HAS DEPENDENCIES. It had none by design, and the
 | design cost more than it saved - reka-ui, @vueuse/core and the class helpers
 | are what these components are BUILT from, and a re-implementation without
 | them is a second component library that drifts from the first.
 */
export * from './components/shadcn/sidebar'
export * from './components/shadcn/sheet'
export * from './components/shadcn/separator'
export * from './components/shadcn/tooltip'
export * from './components/shadcn/dropdown-menu'
export * from './components/shadcn/avatar'
export * from './components/shadcn/breadcrumb'
export * from './components/shadcn/navigation-menu'
export * from './components/shadcn/dialog'
export * from './components/shadcn/label'
export * from './components/shadcn/spinner'
export * from './components/shadcn/alert'
export * from './components/shadcn/card'
export * from './components/shadcn/checkbox'
export * from './components/shadcn/switch'
export { Input as ShadcnInput } from './components/shadcn/input'
export { default as PkBoundary } from './components/Layout/PkBoundary.vue'

/*
 * A PANEL OF CONTENT, which the package did not have and every screen wrote by
 * hand - fifteen copies of `rounded-lg border bg-card` in the reference app
 * alone. `StatCard` and `ChartCard` are dashboard widgets; this is the ordinary
 * block everything else sits in.
 */
export { default as PkCard } from './components/Layout/PkCard.vue'
export { default as AppPageFooter } from './components/Layout/AppPageFooter.vue'
export { useShellPageFooter } from './composables/useShellPageFooter'
export { default as PkDeviceFrame } from './components/Layout/PkDeviceFrame.vue'
export { default as PkStepIndicator } from './components/Layout/PkStepIndicator.vue'
export { default as PkRepeater } from './components/Form/PkRepeater.vue'
/*
 | ROADMAP 4.5. Markdown stores the source rather than a rendering; code
 | keeps whitespace and indents with Tab; a builder is blocks of different
 | shapes in a chosen order - see each component for why none of the three
 | is served by an existing field.
 */
export { default as PkMarkdownInput } from './components/Form/PkMarkdownInput.vue'
export { default as PkCodeInput } from './components/Form/PkCodeInput.vue'
export { default as PkBuilder } from './components/Form/PkBuilder.vue'
export { default as PkKeyValue } from './components/Form/PkKeyValue.vue'
export { default as PkRichEditor } from './components/Form/PkRichEditor.vue'
export { default as PkRadioGroup } from './components/Form/PkRadioGroup.vue'
export { default as PkCheckboxList } from './components/Form/PkCheckboxList.vue'
export { default as PkTagsInput } from './components/Form/PkTagsInput.vue'
export { default as PkColourPicker } from './components/Form/PkColourPicker.vue'
export { default as PkMap } from './components/Form/PkMap.vue'
export { default as PkMapField } from './components/Form/PkMapField.vue'
export { default as PkQrCode } from './components/Form/PkQrCode.vue'
export { default as PkBarcode } from './components/Form/PkBarcode.vue'
export { default as PkDiff } from './components/Form/PkDiff.vue'
export { default as PkCalendar } from './components/Widgets/PkCalendar.vue'
export { default as PkSlider } from './components/Form/PkSlider.vue'
export { default as PkVisualSelect } from './components/Form/PkVisualSelect.vue'
export { default as PkSwatchPreview } from './components/Form/PkSwatchPreview.vue'
export { default as PkDocument } from './components/Document/PkDocument.vue'
export { default as PkCodeBox } from './components/Document/PkCodeBox.vue'
export { default as ThemeToggle } from './components/Layout/ThemeToggle.vue'
export { default as BarChart } from './components/Widgets/BarChart.vue'
export { default as LineChart } from './components/Widgets/LineChart.vue'
export { default as PieChart } from './components/Widgets/PieChart.vue'
/*
 * ONE COMPONENT FOR BOTH FILAMENT CHART TYPES. A bubble chart is a scatter
 * with a size channel - same axes, same marks, same hit testing - so any point
 * carrying `r` makes it one, exactly as `PieChart` becomes a doughnut. Two
 * files would be two names for one drawing.
 */
export { default as ScatterChart } from './components/Widgets/ScatterChart.vue'
export { default as RadarChart } from './components/Widgets/RadarChart.vue'
export { default as PolarAreaChart } from './components/Widgets/PolarAreaChart.vue'
export { default as ComboChart } from './components/Widgets/ComboChart.vue'
export { default as HeatmapChart } from './components/Widgets/HeatmapChart.vue'
export { default as Sparkline } from './components/Widgets/Sparkline.vue'
export { default as TrendBadge } from './components/Widgets/TrendBadge.vue'
export { default as ChartCard } from './components/Widgets/ChartCard.vue'
export { default as ChartTooltip } from './components/Widgets/ChartTooltip.vue'
export { default as ShortcutsWidget } from './components/Widgets/ShortcutsWidget.vue'
export type { ShortcutItem } from './components/Widgets/ShortcutsWidget.vue'
export { default as DirectoryPage } from './components/Widgets/DirectoryPage.vue'
export { default as AdminDirectory } from './components/Widgets/DirectoryPage.vue'
export type { DirectoryLink, DirectorySection } from './components/Widgets/DirectoryPage.vue'
export { default as StatCard } from './components/Widgets/StatCard.vue'
export { default as MiniStatCard } from './components/Widgets/MiniStatCard.vue'
export { default as SegmentedBar } from './components/Widgets/SegmentedBar.vue'
export { default as StatListChart } from './components/Widgets/StatListChart.vue'
export { default as CatalogCard } from './components/Widgets/CatalogCard.vue'
export { default as PlanCard } from './components/Widgets/PlanCard.vue'
export { default as PlanGrid } from './components/Widgets/PlanGrid.vue'
export { default as PlanEditor } from './components/Widgets/PlanEditor.vue'
export {
    cycleLabel,
    formatPerkValue,
    perkGranted,
} from './components/Widgets/planTypes'
export type {
    ExtraPerk,
    PlanLimitField,
    PlanModuleOption,
    PlanPerk,
    PlanRecord,
} from './components/Widgets/planTypes'
export { default as CatalogGrid } from './components/Widgets/CatalogGrid.vue'
export { default as CatalogTill } from './components/Widgets/CatalogTill.vue'
export { default as CatalogInspect } from './components/Widgets/CatalogInspect.vue'
export { default as CatalogItemDetail } from './components/Widgets/CatalogItemDetail.vue'
export { default as CatalogItemView } from './components/Widgets/CatalogItemView.vue'
export { default as CatalogBrowser } from './components/Widgets/CatalogBrowser.vue'
export { default as CatalogFilterSheet } from './components/Widgets/CatalogFilterSheet.vue'
export { default as CatalogRegister } from './components/Widgets/CatalogRegister.vue'
export { default as SignatureStudio } from './components/Widgets/SignatureStudio.vue'
export { default as DashboardShortcuts } from './components/Widgets/DashboardShortcuts.vue'
export {
    emptyCatalogFilters,
    findExactSku,
    matchCatalogItem,
    catalogFiltersActive,
} from './components/Widgets/catalogFilter'
export { default as LineItems } from './components/Widgets/LineItems.vue'
export { default as CartPanel } from './components/Widgets/CartPanel.vue'
export { default as StatStrip } from './components/Widgets/StatStrip.vue'
export { default as SetupChecklist } from './components/Widgets/SetupChecklist.vue'
export { default as SelectionBar } from './components/DataTable/SelectionBar.vue'
export { default as TablePagination } from './components/DataTable/TablePagination.vue'
export { default as TableShell } from './components/DataTable/TableShell.vue'
export { default as TableTabs } from './components/DataTable/TableTabs.vue'
export { default as TableToolbar } from './components/DataTable/TableToolbar.vue'
export { default as PkPasskeyRegister } from './components/Auth/PkPasskeyRegister.vue'
export { default as PkModal } from './components/Overlay/PkModal.vue'
/*
 * ONE SKELETON, WITH NAMED SHAPES. There were six different ones in this package
 * - different greys, different heights, written independently at each place
 * something loads - and on a screen where several resolve at once they read as a
 * rendering fault rather than as loading. See the component.
 */
export { default as PkSkeleton } from './components/primitives/PkSkeleton.vue'
export { default as PkSlideover } from './components/Overlay/PkSlideover.vue'
export { default as RecordForm } from './components/Form/RecordForm.vue'
export { default as UnsavedBar } from './components/Form/UnsavedBar.vue'

/*
 * THE HALF `UnsavedBar` DOES NOT DO. The bar draws a decision it does not make,
 * so a page holding its own state had to write the snapshot, the comparison and
 * the `beforeunload` handler itself. `useUnsavedGuard` in `@alxtexh-enterprise/panel/inertia`
 * adds the navigation half, which needs the router and so cannot live here.
 */
export { useUnsavedChanges } from './composables/useUnsavedChanges'
export { default as InfoNode } from './components/Form/InfoNode.vue'
export { default as SchemaNode } from './components/Form/SchemaNode.vue'
export { default as FormFieldControl } from './components/Form/FormFieldControl.vue'
export { default as CreateOptionDialog } from './components/Form/CreateOptionDialog.vue'
export { CreateOptionError, fieldErrorsFromPayload } from './lib/createOptionError'
export { createOptionActionLabel, createOptionTitle } from './lib/createOptionTitle'
export { default as PkFileUpload } from './components/Form/PkFileUpload.vue'
export { default as PkDropdown } from './components/primitives/PkDropdown.vue'
export { default as PkMultiSelect } from './components/primitives/PkMultiSelect.vue'

/*
 * A BUTTON AND A BADGE, WITH NOTHING BEHIND THEM.
 *
 * These are shadcn's variants and shadcn's classes, reimplemented without
 * `reka-ui`, `class-variance-authority` or an application-local `cn()`. The
 * packaged resource screens use them, and those screens have to render in an
 * application that has never run shadcn's installer - where the alternative is a
 * missing import at runtime, in the browser, in a file the consumer did not
 * write. An application that DOES have shadcn sees its own button; one that does
 * not sees a button.
 */
export { default as PkButton } from './components/primitives/PkButton.vue'
export { default as PkBadge } from './components/primitives/PkBadge.vue'
export { default as PkStatusBadge } from './components/primitives/PkStatusBadge.vue'
export { default as PkQtyStepper } from './components/primitives/PkQtyStepper.vue'
export { default as PkSignaturePad } from './components/primitives/PkSignaturePad.vue'
export { default as PaymentGateways } from './components/Widgets/PaymentGateways.vue'
export { default as PaymentGatewaySettings } from './components/Widgets/PaymentGatewaySettings.vue'
export { statusTone, statusBadgeVariant, STATUS_TONES } from './components/primitives/statusTone'
export type { SemanticTone } from './components/primitives/statusTone'
/*
 * FOR A CALLER THAT NEEDS BUTTON STYLING ON ITS OWN ELEMENT, not PkButton's.
 * `@inertiajs/vue3`'s `<Link>` is a component, not a tag name `PkButton`'s
 * `as` prop can name - see the note on `PkButton` itself for the bug this
 * replaced: `<Link :class="buttonClasses({ size: 'sm' })">` is one real
 * element, where `<Button as-child><Link>...</Link></Button>` was two.
 */
export { buttonClasses } from './components/primitives/buttonClasses'
export type { ButtonClassesOptions } from './components/primitives/buttonClasses'

export { useColumnVisibility } from './composables/useColumnVisibility'
export {
    DASHBOARD_HIDE_KEY,
    DASHBOARD_HIDDEN_STORAGE_KEY,
} from './composables/dashboardHide'
export type { DashboardHide } from './composables/dashboardHide'
export { useLiveUpdates } from './composables/useLiveUpdates'
export type { LiveConfig, LiveUpdateOptions } from './composables/useLiveUpdates'
export {
    useAppearance,
    initializeAppearance,
    applyAppearance,
    appearanceVars,
    readAppearance,
    isDark,
    setAppearancePersister,
} from './composables/useAppearance'
export { useTenantTheme } from './composables/useTenantTheme'
export { useSchemaColumns, BADGE_VARIANTS, hasBadgeValue } from './composables/useSchemaColumns'

export type { FilterSchema, FilterIndicator, GroupSchema, SortDirection, TableColumn } from './components/DataTable/types'
export type { QueryField, QueryGroup, QueryRule } from './components/DataTable/PkQueryBuilder.vue'
export type { BulkActionSchema } from './components/DataTable/BulkActions.vue'
export type {
    ChartSeries,
    ChartPoint,
    ChartXYPoint,
    ChartXYSeries,
} from './components/Widgets/types'
export type { StatSegment } from './components/Widgets/StatStrip.vue'
export type { SetupChecklistItem } from './components/Widgets/SetupChecklist.vue'
export type { CatalogItem } from './components/Widgets/CatalogCard.vue'
export type { CatalogBrowserTab } from './components/Widgets/CatalogBrowser.vue'
export type { StudioDocument, SavedMark } from './components/Widgets/SignatureStudio.vue'
export type {
    CatalogFacet,
    CatalogFacetOption,
    CatalogFilters,
    CatalogRangeValue,
} from './components/Widgets/catalogFilter'
export type { LineItem } from './components/Widgets/LineItems.vue'
export type { PaymentGateway } from './components/Widgets/PaymentGateways.vue'
export type { MultiSelectOption } from './components/primitives/PkMultiSelect.vue'
export type { BottomNavItem } from './components/Layout/PkBottomNav.vue'
export type { Step as StepIndicatorStep } from './components/Layout/PkStepIndicator.vue'
export type { RecordActionGroup, RecordActionItem } from './components/DataTable/RecordActions.vue'
export { ICON_PATHS, iconPath } from './components/primitives/icons'
export type { UploadedFileValue } from './components/Form/PkFileUpload.vue'
export type {
    Appearance,
    Theme,
    Density,
    SidebarSide,
    CardStyle,
} from './composables/useAppearance'
export type { SchemaColumn } from './composables/useSchemaColumns'
export type { FormField, FieldAffixAction } from './components/Form/types'

/*
 * THE FIELD REGISTRY, and the five controls this package registers into it.
 *
 * Adding a field type used to mean editing a `v-else-if` chain inside
 * `FormFieldControl.vue` - fine for us, impossible for anybody who installed the
 * package. A "custom field" you can only add by patching the framework is not an
 * extension point, and its absence is what stops a plugin ecosystem existing.
 *
 * `registerBuiltInFieldControls()` IS CALLED HERE, at import time, rather than
 * left for the application to call. A control that has to be turned on is one
 * somebody forgets to turn on, and the failure - a field that renders as nothing
 * at all - looks like the server failed to send it.
 */
export {
    registerFieldControl,
    fieldControl,
    hasFieldControl,
    registeredFieldTypes,
    resetFieldControls,
} from './composables/useFieldControls'

export {
    registerOptionPreview,
    optionPreview,
    hasOptionPreview,
    registeredOptionPreviews,
    resetOptionPreviews,
} from './composables/useOptionPreviews'

import { registerBuiltInFieldControls } from './components/Form/builtInFields'

export { registerBuiltInFieldControls }

registerBuiltInFieldControls()

export const version = '0.0.1'

/*
 * LANDING SECTIONS - the front door, composed rather than hand-written.
 *
 * `PkLandingSections` renders an ordered list of stored blocks; the individual
 * sections are exported too, so an application can compose a page in a template
 * when it wants one that is not editable at all.
 */
export { default as PkLandingSections } from './components/Landing/PkLandingSections.vue'
export { default as PkSection } from './components/Landing/PkSection.vue'
export { default as PkSectionHeading } from './components/Landing/PkSectionHeading.vue'
export { default as PkHero } from './components/Landing/PkHero.vue'
export { default as PkLogoCloud } from './components/Landing/PkLogoCloud.vue'
export { default as PkFeatureGrid } from './components/Landing/PkFeatureGrid.vue'
export { default as PkSteps } from './components/Landing/PkSteps.vue'
export { default as PkStats } from './components/Landing/PkStats.vue'
export { default as PkTestimonials } from './components/Landing/PkTestimonials.vue'
export { default as PkPricing } from './components/Landing/PkPricing.vue'
export { default as PkFaq } from './components/Landing/PkFaq.vue'
export { default as PkCta } from './components/Landing/PkCta.vue'
export { default as PkAuroraBackdrop } from './components/Landing/PkAuroraBackdrop.vue'
export { default as PkEditorialBackdrop } from './components/Landing/PkEditorialBackdrop.vue'
export { default as PkConsoleBackdrop } from './components/Landing/PkConsoleBackdrop.vue'
export { default as PkReveal } from './components/Landing/PkReveal.vue'
export { default as PkCountUp } from './components/Landing/PkCountUp.vue'
export { default as PkBento } from './components/Landing/PkBento.vue'
export { default as PkShowcase } from './components/Landing/PkShowcase.vue'
export { default as PkTiltCard } from './components/Landing/PkTiltCard.vue'
export { useReveal } from './composables/useReveal'
export { usePointer } from './composables/usePointer'
export { useScrollProgress } from './composables/useScrollProgress'
export type { LandingSection, LandingItem } from './components/Landing/types'
