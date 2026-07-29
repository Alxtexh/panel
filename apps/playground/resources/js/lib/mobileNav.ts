import { ref } from 'vue'

/**
 * The seam between the bottom bar and the sidebar it opens.
 *
 * WHY A SEAM AND NOT A DIRECT CALL. The sidebar's open state belongs to
 * `SidebarProvider`, which is inside the shell; the bottom bar is rendered
 * beside the shell, because it is fixed to the viewport and must survive
 * whichever layout is active. `useSidebar()` is an `inject`, so calling it from
 * outside that provider gets nothing - the bar cannot reach the thing it needs
 * to open.
 *
 * THE ALTERNATIVE WAS A SECOND MENU, and that is what was there: "More" opened
 * a sheet listing every destination, built from the same data the sidebar is
 * built from and looking nothing like it. Two navigations for one set of
 * destinations means the phone gets a menu nobody else has seen, with none of
 * the grouping, none of the collapse state and none of the footer links - so
 * the thing a technician learns on a phone is not the thing they see on a
 * laptop.
 *
 * A COUNTER RATHER THAN A BOOLEAN. The sidebar owns "is it open"; this only
 * says "somebody asked". A boolean would need resetting after each open, and a
 * second tap while it was already true would do nothing - which is exactly the
 * case that matters: open the drawer, dismiss it by tapping the page, tap More
 * again.
 */
const requests = ref(0)

/**
 * Whether a sidebar is mounted and listening.
 *
 * The horizontal layout has no sidebar at all, so the bar has to know the
 * difference between "asked and it opened" and "asked into nothing" - the
 * second case still needs the sheet, which is the only navigation that layout
 * has on a phone.
 */
const available = ref(false)

export function useSidebarOpener() {
    return {
        requests,

        /** Called by the sidebar while it is mounted. */
        register(): void {
            available.value = true
        },

        unregister(): void {
            available.value = false
        },

        /** True when a sidebar took the request; false when nothing is listening. */
        request(): boolean {
            if (! available.value) {
                return false
            }

            requests.value++

            return true
        },
    }
}
