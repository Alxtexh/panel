/*
 * The list-table composable now lives in `@panelkit/inertia`, beside the screen
 * that is its main caller.
 *
 * RE-EXPORTED RATHER THAN MOVED-AND-REWRITTEN, because this application has its
 * own list screen - the workspace page - that is not a panel resource and never
 * will be. Making every such page import from a package named for the panel's
 * own screens reads as a layering mistake; this keeps `@/composables` meaning
 * "this application's composables" whoever wrote them.
 */
export { useListTable, type ListPageProps } from '@panelkit/inertia';
