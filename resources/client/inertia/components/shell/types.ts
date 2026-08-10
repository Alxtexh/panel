/**
 * One entry in a panel's navigation, as the server sends it.
 *
 * IT LIVES IN A `.ts` FILE AND IS NEVER IMPORTED INTO `defineProps`, and both
 * halves of that are load-bearing.
 *
 * `defineProps<{ nav?: NavItem[] }>()` with `NavItem` imported from another
 * file makes the SFC compiler resolve a type ACROSS FILES, which it can only do
 * by loading TypeScript from the CONSUMING project. The monorepo has it, so the
 * reference app built; a fresh Laravel application does not, and
 * `npm run build` died with "Failed to load TypeScript, which is required for
 * resolving imported types". A library cannot require every consumer to install
 * a compiler to render its sidebar.
 *
 * So the components declare their prop shapes INLINE - self-contained, resolved
 * without TypeScript - and this type exists for consumers who want to name the
 * shape in their own code. Exporting it costs nothing; importing it into a
 * `defineProps` would cost everyone.
 */
export interface NavItem {
    key: string
    title: string
    href: string
    icon?: string | null
    group?: string | null
}
