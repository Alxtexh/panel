import { usePage } from '@inertiajs/vue3'
import { computed, toValue, type ComputedRef, type MaybeRefOrGetter } from 'vue'

/**
 * Sidebar design families (shadcn-vue block patterns, kit AppSidebar).
 *
 * Resolution order: optional `force` argument → page `forceSidebarLayout` →
 * shared `panel.sidebarLayout` → `inset` (historical default).
 */
export const SIDEBAR_LAYOUTS = ['inset', 'sidebar', 'floating', 'icon', 'header'] as const

export type SidebarLayout = (typeof SIDEBAR_LAYOUTS)[number]

export type SidebarChrome = {
    /** Passed to the shadcn Sidebar root. */
    variant: 'sidebar' | 'floating' | 'inset'
    /** Desktop collapse mode. Mobile always uses offcanvas in AppSidebar. */
    collapsible: 'offcanvas' | 'icon' | 'none'
    /** Prefer the rail collapsed on first paint (icon family). */
    preferCollapsed: boolean
    /** Sticky full-width site header above the rail (header family). */
    siteHeader: boolean
    /** Show a search affordance in the sidebar header (header family). */
    sidebarSearch: boolean
    /** Account menu in the inset top bar instead of the sidebar footer. */
    topNavUser: boolean
    /** Hide the logo block in the rail; brand lives in the site header. */
    hideSidebarBrand: boolean
    /** Footer support links as a compact Help dropdown, not a labeled group. */
    compactFooterSupport: boolean
}

const CHROME: Record<SidebarLayout, SidebarChrome> = {
    inset: {
        variant: 'inset',
        collapsible: 'icon',
        preferCollapsed: false,
        siteHeader: false,
        sidebarSearch: false,
        topNavUser: false,
        hideSidebarBrand: false,
        compactFooterSupport: false,
    },
    sidebar: {
        variant: 'sidebar',
        collapsible: 'icon',
        preferCollapsed: false,
        siteHeader: false,
        sidebarSearch: false,
        topNavUser: false,
        hideSidebarBrand: false,
        compactFooterSupport: false,
    },
    floating: {
        variant: 'floating',
        collapsible: 'icon',
        preferCollapsed: false,
        siteHeader: false,
        sidebarSearch: false,
        topNavUser: false,
        hideSidebarBrand: false,
        compactFooterSupport: false,
    },
    icon: {
        variant: 'inset',
        collapsible: 'icon',
        preferCollapsed: true,
        siteHeader: false,
        sidebarSearch: false,
        topNavUser: false,
        hideSidebarBrand: false,
        compactFooterSupport: false,
    },
    header: {
        variant: 'inset',
        collapsible: 'icon',
        preferCollapsed: false,
        siteHeader: true,
        sidebarSearch: false,
        topNavUser: true,
        hideSidebarBrand: true,
        compactFooterSupport: true,
    },
}

function resolveName(raw: unknown): SidebarLayout {
    if (typeof raw === 'string' && (SIDEBAR_LAYOUTS as readonly string[]).includes(raw)) {
        return raw as SidebarLayout
    }

    return 'inset'
}

export function useSidebarLayout(force?: MaybeRefOrGetter<string | null | undefined>): {
    layout: ComputedRef<SidebarLayout>
    chrome: ComputedRef<SidebarChrome>
} {
    const page = usePage()

    const layout = computed<SidebarLayout>(() => {
        const forcedArg = toValue(force)
        if (forcedArg != null && forcedArg !== '') {
            return resolveName(forcedArg)
        }

        const props = page.props as Record<string, unknown>
        const forced = props.forceSidebarLayout
        if (forced != null && forced !== '') {
            return resolveName(forced)
        }

        const panel = props.panel as { sidebarLayout?: string } | undefined

        return resolveName(panel?.sidebarLayout)
    })

    const chrome = computed(() => CHROME[layout.value])

    return { layout, chrome }
}
