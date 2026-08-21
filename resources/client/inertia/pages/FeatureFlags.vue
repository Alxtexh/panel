<script setup lang="ts">
/**
 * Tenant feature flags from TenantContext. Host persists via FeatureFlagsPage::toggle().
 */
import { Head, router } from '@inertiajs/vue3'
import {
    PAGE_SHELL_STACK, PkButton as Button } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

interface FlagRow {
    name: string
    enabled: boolean
    description?: string | null
}

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        flags?: FlagRow[]
        toggleHref?: string
    }>(),
    {
        flags: () => [],
        toggleHref: '/apps/feature-flags/toggle',
    },
)

function toggle(name: string, enabled: boolean) {
    router.post(
        props.toggleHref ?? '/apps/feature-flags/toggle',
        { name, enabled: !enabled },
        { preserveScroll: true },
    )
}
</script>

<template>
    <Head :title="pageHeading ?? 'Feature flags'" />

    <div :class="PAGE_SHELL_STACK">
        <header class="space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading ?? 'Feature flags' }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground">
                {{ pageDescription }}
            </p>
            <p class="text-xs text-muted-foreground">
                Values come from <code>panel.tenancy.features</code> or the tenant record. Override
                FeatureFlagsPage::toggle() to persist changes.
            </p>
        </header>

        <p v-if="flags.length === 0" class="text-sm text-muted-foreground">
            No feature flags resolved. Set <code>panel.tenancy.features</code> or override
            FeatureFlagsPage::flags().
        </p>

        <ul v-else class="divide-y rounded-md border">
            <li
                v-for="flag in flags"
                :key="flag.name"
                class="flex items-start justify-between gap-4 px-4 py-3"
            >
                <div>
                    <p class="font-medium">{{ flag.name }}</p>
                    <p v-if="flag.description" class="text-sm text-muted-foreground">
                        {{ flag.description }}
                    </p>
                </div>
                <Button type="button" variant="outline" @click="toggle(flag.name, flag.enabled)">
                    {{ flag.enabled ? 'On' : 'Off' }}
                </Button>
            </li>
        </ul>
    </div>
</template>
