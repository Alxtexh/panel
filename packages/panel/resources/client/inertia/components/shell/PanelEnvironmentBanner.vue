<script setup lang="ts">
/**
 * Environment colour strip. Absent when SharePanelProps sends null.
 *
 * Lives with the impersonation banner: spans the main column, not the sidebar.
 */
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

const page = usePage()

const banner = computed(
    () =>
        (page.props as any).environmentBanner as { label: string; tone: string } | null | undefined,
)

const toneClass = computed(() => {
    switch (banner.value?.tone) {
        case 'local':
            return 'bg-emerald-600 text-white'
        case 'testing':
            return 'bg-sky-600 text-white'
        case 'staging':
            return 'bg-amber-500 text-amber-950'
        case 'production':
            return 'bg-rose-700 text-white'
        default:
            return 'bg-violet-600 text-white'
    }
})
</script>

<template>
    <div
        v-if="banner"
        class="flex items-center justify-center px-4 py-1 text-center text-xs font-semibold tracking-wide uppercase"
        :class="toneClass"
        data-environment-banner
        data-test="environment-banner"
    >
        {{ banner.label }}
    </div>
</template>
