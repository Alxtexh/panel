<script setup lang="ts">
/**
 * Settings chrome: mobile dropdown, sidebar on md+, pair capped at max-w-5xl.
 *
 * NAV COMES FROM THE SERVER (`page.props.settingsNav`), the same list the
 * settings index uses. A portal that never routed payment gateways does not
 * see that row. Icon names are kit paths, not Lucide components.
 */
import { computed } from 'vue'
import { Link, usePage } from '@inertiajs/vue3'
import {
    PkDropdown,
    PkHeading,
    buttonClasses,
    iconPath,
} from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../composables/useCurrentUrl'

type NavEntry = {
    key: string
    title: string
    href: string
    icon?: string
}

const ICONS: Record<string, string> = {
    profile: 'users',
    security: 'lock',
    organisation: 'home',
    payments: 'sliders',
    workspaces: 'package',
    assistant: 'star',
    roles: 'shield-alert',
}

const page = usePage()
const { isCurrentOrParentUrl } = useCurrentUrl()

const items = computed<NavEntry[]>(() => {
    const raw = ((page.props as Record<string, unknown>).settingsNav ?? []) as NavEntry[]

    return raw.filter((entry) => entry.key !== 'roles')
})

const settingsIndex = computed(() => {
    const panel = page.props.panel as { settings?: string | null } | undefined

    return panel?.settings ?? '/settings'
})

const currentItem = computed(
    () => items.value.find((item) => isCurrentOrParentUrl(item.href)) ?? items.value[0],
)

function iconFor(entry: NavEntry): string {
    return entry.icon ?? ICONS[entry.key] ?? 'sliders'
}
</script>

<template>
    <div class="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6">
        <Link
            :href="settingsIndex"
            class="text-muted-foreground hover:text-foreground mb-2 inline-block text-xs"
        >
            ← All settings
        </Link>

        <PkHeading
            title="Settings"
            description="Manage your profile, security and organisation"
        />

        <div class="mt-6 md:hidden">
            <PkDropdown align="start">
                <template #trigger="{ open }">
                    <button
                        type="button"
                        class="border-input bg-background hover:bg-accent flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm shadow-xs"
                        :aria-expanded="open"
                        aria-haspopup="listbox"
                        aria-label="Settings section"
                    >
                        <span class="flex min-w-0 items-center gap-2">
                            <svg
                                class="text-muted-foreground size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(iconFor(currentItem ?? { key: '', title: '', href: '' }))" />
                            </svg>
                            <span class="truncate">{{ currentItem?.title }}</span>
                        </span>
                        <svg
                            class="text-muted-foreground size-4 shrink-0 opacity-70"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <path d="m7 15 5 5 5-5M7 9l5-5 5 5" />
                        </svg>
                    </button>
                </template>
                <template #panel>
                    <div class="flex flex-col" role="listbox" aria-label="Settings">
                        <Link
                            v-for="item in items"
                            :key="item.href"
                            :href="item.href"
                            role="option"
                            :aria-selected="isCurrentOrParentUrl(item.href)"
                            :class="[
                                'flex items-center gap-2 rounded-sm px-2 py-2 text-sm',
                                isCurrentOrParentUrl(item.href)
                                    ? 'bg-muted font-medium'
                                    : 'hover:bg-muted/70',
                            ]"
                        >
                            <svg
                                class="text-muted-foreground size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath(iconFor(item))" />
                            </svg>
                            <span class="flex-1">{{ item.title }}</span>
                            <svg
                                v-if="isCurrentOrParentUrl(item.href)"
                                class="size-4 shrink-0"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                aria-hidden="true"
                            >
                                <path :d="iconPath('check')" />
                            </svg>
                        </Link>
                    </div>
                </template>
            </PkDropdown>
        </div>

        <div class="mt-6 flex flex-col md:flex-row md:gap-12">
            <aside class="hidden w-52 shrink-0 md:block">
                <nav class="flex flex-col space-y-1" aria-label="Settings">
                    <Link
                        v-for="item in items"
                        :key="item.href"
                        :href="item.href"
                        :class="[
                            buttonClasses({ variant: 'ghost' }),
                            'w-full justify-start',
                            { 'bg-muted': isCurrentOrParentUrl(item.href) },
                        ]"
                    >
                        <svg
                            class="size-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            aria-hidden="true"
                        >
                            <path :d="iconPath(iconFor(item))" />
                        </svg>
                        {{ item.title }}
                    </Link>
                </nav>
            </aside>

            <div class="min-w-0 flex-1">
                <section class="space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
