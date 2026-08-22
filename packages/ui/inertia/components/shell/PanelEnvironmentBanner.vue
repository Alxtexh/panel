<script setup lang="ts">
/**
 * Compact environment badge. Absent when SharePanelProps sends null.
 *
 * Renders inline in the top bar (AppSidebarHeader / AppTopNav), not as a
 * full-width strip that steals vertical space from the shell.
 */
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { PkBadge as Badge } from '@alxtexh-enterprise/panel'

const page = usePage()

const banner = computed(
    () =>
        (page.props as any).environmentBanner as { label: string; tone: string } | null | undefined,
)

const variant = computed(() => {
    switch (banner.value?.tone) {
        case 'local':
            return 'success'
        case 'testing':
            return 'info'
        case 'staging':
            return 'warning'
        case 'production':
            return 'destructive'
        default:
            return 'outline'
    }
})
</script>

<template>
    <Badge
        v-if="banner"
        :variant="variant as any"
        class="text-[10px] uppercase tracking-wide"
        data-environment-banner
        data-test="environment-banner"
        :title="`Environment: ${banner.label}`"
    >
        {{ banner.label }}
    </Badge>
</template>
