/**
 * THE PACKAGE'S SIDEBAR OPENER, RE-EXPORTED - not a second copy of it.
 *
 * THIS FILE USED TO DUPLICATE `@alxtexh-enterprise/panel`'s implementation, and
 * the duplicate is exactly why "More" in the mobile bottom bar opened its own
 * modal instead of the sidebar.
 *
 * MODULE STATE IS PER MODULE INSTANCE. `AppSidebar.vue` ships in the package and
 * calls `register()` on the PACKAGE's `available` ref; `AppLayout.vue` called
 * `request()` on THIS file's ref, which nothing ever registered against. So
 * `request()` returned false every time, and `openFullNav()` fell through to its
 * fallback - a modal that exists for installations with no sidebar at all.
 *
 * NOTHING FAILED, WHICH IS WHY IT LASTED. Both files imported "the sidebar
 * opener", both compiled, and the fallback is a working navigation menu - so
 * the symptom was not an error but a second, unfamiliar surface appearing where
 * the sidebar should have slid in.
 *
 * TWO REFS WITH THE SAME NAME ARE NOT THE SAME REF. Re-exporting is what makes
 * "the sidebar opener" one thing; keeping the file at all is only so existing
 * `@/lib/mobileNav` imports keep resolving.
 */
export { useSidebarOpener } from '@alxtexh-enterprise/panel/inertia';
