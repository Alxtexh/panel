/**
 * @panelkit/ui — public surface.
 *
 * Two rules govern everything in this package (spec §4). They are cheap to hold
 * and expensive to recover once broken, so they are enforced by review and by
 * the lint rule in .eslintrc that forbids importing @inertiajs/* from here:
 *
 *   1. NOTHING here imports Inertia. Pages receive data as props. A thin adapter
 *      in the consuming app wires Inertia to those props. This is what keeps the
 *      kit usable outside Inertia later.
 *
 *   2. Components never fetch. They take props and emit events. Only page-level
 *      components in the consuming app trigger data loads.
 *
 * Contents arrive by phase — DataTable in Phase 3, the generic resource pages in
 * Phase 4, forms in Phase 5, widgets and live updates in Phase 8. Exporting
 * ahead of that would be inventing an API before the duplication has shown us
 * what it should be.
 */

export const version = '0.0.1'

export type { SchemaEnvelope } from './types/schema'
