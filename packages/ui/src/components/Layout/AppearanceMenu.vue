<script setup lang="ts">
/**
 * Appearance, in the TOPBAR rather than buried in settings.
 *
 * These are things people change while looking at the thing they affect. A
 * settings page means leaving the screen you are trying to adjust, changing
 * something, and coming back to see whether it helped. Filament puts the theme
 * switcher in the topbar for the same reason; the other three it does not offer
 * per-user at all.
 *
 * Every change applies immediately and locally. There is no request, so there is
 * no Apply button — unlike the filter panel, where batching genuinely saves
 * round trips.
 */
import PkDropdown from '../primitives/PkDropdown.vue'
import {
    useAppearance,
    type Density,
    type FontSize,
    type SidebarSide,
    type Theme,
} from '../../composables/useAppearance'

const { appearance, set } = useAppearance()

const groups = [
    {
        label: 'Theme',
        key: 'theme',
        options: [
            { value: 'light' as Theme, label: 'Light' },
            { value: 'dark' as Theme, label: 'Dark' },
            { value: 'system' as Theme, label: 'System' },
        ],
    },
    {
        label: 'Density',
        key: 'density',
        options: [
            { value: 'comfortable' as Density, label: 'Comfortable' },
            { value: 'compact' as Density, label: 'Compact' },
        ],
    },
    {
        label: 'Font size',
        key: 'fontSize',
        options: [
            { value: 'small' as FontSize, label: 'Small' },
            { value: 'normal' as FontSize, label: 'Normal' },
            { value: 'large' as FontSize, label: 'Large' },
        ],
    },
    {
        label: 'Sidebar',
        key: 'sidebarSide',
        options: [
            { value: 'left' as SidebarSide, label: 'Left' },
            { value: 'right' as SidebarSide, label: 'Right' },
        ],
    },
]
</script>

<template>
    <PkDropdown width="w-64">
        <template #trigger>
            <button
                type="button"
                class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
                aria-label="Appearance"
                title="Appearance"
            >
                <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="4" />
                    <path
                        d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                    />
                </svg>
            </button>
        </template>

        <template #panel>
            <p class="px-1 pt-1 pb-2 text-sm font-semibold">Appearance</p>

            <div class="flex flex-col gap-3 px-1 pb-1">
                <!-- Segmented controls rather than lists: small mutually
                     exclusive sets where seeing every option at once is the
                     point. -->
                <div v-for="group in groups" :key="group.key" class="flex flex-col gap-1">
                    <span class="text-muted-foreground text-[11px] font-medium">{{ group.label }}</span>

                    <div class="bg-muted/40 flex gap-0.5 rounded-md p-0.5">
                        <button
                            v-for="opt in group.options"
                            :key="String(opt.value)"
                            type="button"
                            class="flex-1 rounded px-2 py-1 text-xs transition-colors"
                            :class="
                                (appearance as any)[group.key] === opt.value
                                    ? 'bg-background text-foreground font-medium shadow-sm'
                                    : 'text-muted-foreground hover:text-foreground'
                            "
                            @click="set({ [group.key]: opt.value } as any)"
                        >
                            {{ opt.label }}
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </PkDropdown>
</template>
