<script setup lang="ts">
/** Billing portal shell. Props from BillingPortalPage. */
import { Head } from '@inertiajs/vue3'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    subscription?: Record<string, unknown> | null
    invoices?: Record<string, unknown>[]
    paymentMethods?: Record<string, unknown>[]
}>()
</script>

<template>
    <Head :title="pageHeading ?? 'Billing'" />
    <div class="mx-auto max-w-5xl space-y-6 p-4 sm:p-6">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? 'Billing' }}</h1>
        <p v-if="!subscription && !invoices?.length" class="text-sm text-muted-foreground">
            No billing data. Wire Stripe, Cashier, or M-Pesa on a subclass.
        </p>
    </div>
</template>
