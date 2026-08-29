<script setup lang="ts">
/**
 * Settings chrome: mobile dropdown, sidebar on md+, both from `PkSubNav` -
 * see that component for why the dropdown is not this layout's to opt out of.
 *
 * NAV COMES FROM THE SERVER (`page.props.settingsNav`), the same list the
 * settings index uses. A portal that never routed payment gateways does not
 * see that row. Icon names are kit paths, not Lucide components.
 */
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import { PAGE_SHELL, PkHeading, PkSubNav } from '@alxtexh-enterprise/panel'
import type { SubNavItem } from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../composables/useCurrentUrl'

const ICONS: Record<string, string> = {
    profile: 'users',
    security: 'lock',
    notifications: 'bell',
    organisation: 'home',
    payments: 'sliders',
    smtp: 'mail',
    workspaces: 'package',
    assistant: 'star',
    roles: 'shield-alert',
}

const page = usePage()
const { isCurrentOrParentUrl } = useCurrentUrl()

const items = computed<SubNavItem[]>(() => {
    const raw = ((page.props as Record<string, unknown>).settingsNav ?? []) as SubNavItem[]

    return raw
        .filter((entry) => entry.key !== 'roles')
        .map((entry) => ({ ...entry, icon: entry.icon ?? ICONS[entry.key] }))
})

const settingsIndex = computed(() => {
    const panel = page.props.panel as { settings?: string | null } | undefined

    return panel?.settings ?? '/settings'
})

const currentItem = computed(
    () => items.value.find((item) => isCurrentOrParentUrl(item.href)) ?? items.value[0],
)
</script>

<template>
    <div :class="PAGE_SHELL">
        <Link
            :href="settingsIndex"
            class="text-muted-foreground hover:text-foreground mb-2 inline-block text-xs"
        >
            ← All settings
        </Link>

        <PkHeading
            :title="currentItem?.title ?? 'Settings'"
            :description="currentItem?.description ?? 'Organisation, roles, payments and the rest of this portal.'"
        />

        <!--
            `gap-6` IS NOT JUST THE `lg:gap-12` FALLBACK - it is what applies
            BELOW `lg`, where this is a column (dropdown stacked over content)
            rather than a row. `flex-col` with no unconditional `gap-*` puts
            zero space between them: the dropdown trigger's own border sits
            flush against the content card's border below it. Found live at
            784px, right after moving the row switch to `lg:` (see `PkSubNav`)
            made this stacked layout the one showing at a width somebody was
            actually looking at, not only on a phone where it was just as
            true and just as unnoticed.
        -->
        <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:gap-12">
            <PkSubNav :items="items" aria-label="Settings" />

            <div class="@container min-w-0 flex-1">
                <section class="space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
