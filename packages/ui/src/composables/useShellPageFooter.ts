import { computed, provide, type ComputedRef, type InjectionKey } from 'vue'
import { usePage } from '@inertiajs/vue3'

/**
 * Whether the shell will render AppPageFooter for this panel.
 *
 * PROVIDED so a page that also imports the component can skip its own copy.
 * The shell still renders at most one when `panel.pageFooter` is true.
 */
export const PAGE_FOOTER_FROM_SHELL: InjectionKey<ComputedRef<boolean>> = Symbol('pkPageFooterFromShell')

export function useShellPageFooter(): ComputedRef<boolean> {
    const page = usePage()

    const enabled = computed(() => {
        const panel = page.props.panel as { pageFooter?: boolean } | null | undefined

        return panel?.pageFooter === true
    })

    provide(PAGE_FOOTER_FROM_SHELL, enabled)

    return enabled
}
