<script setup lang="ts">
/** Billing portal shell. Props from BillingPortalPage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    subscription?: Record<string, unknown> | null
    invoices?: Record<string, unknown>[]
    paymentMethods?: Record<string, unknown>[]
    billingActions?: Record<string, { label?: string | null; href?: string | null }>
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Billing'" />
    <div class="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Billing' }}</h1>
        <p v-if="!subscription && !invoices?.length" class="text-sm text-muted-foreground">
            No billing data yet. Connect your billing gateway mapping on a subclass.
        </p>
        <div v-if="billingActions && Object.keys(billingActions).length" class="grid gap-3 sm:grid-cols-2">
            <a
                v-for="(action, key) in billingActions"
                :key="key"
                :href="action?.href ?? '#'"
                class="rounded-xl border px-4 py-3 text-sm font-medium text-foreground hover:bg-muted"
                :class="{ 'pointer-events-none opacity-60': !action?.href }"
            >
                {{ action?.label ?? key }}
            </a>
        </div>
    </div>
</template>
