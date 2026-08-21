<script setup lang="ts">
/** Billing portal shell. Props from BillingPortalPage. */
import { Head } from '@inertiajs/vue3'
import { useTranslations } from '../composables/useTranslations'
import { PAGE_SHELL_STACK } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

defineProps<{
    pageHeading?: string
    subscription?: Record<string, unknown> | null
    invoices?: Record<string, unknown>[]
    paymentMethods?: Record<string, unknown>[]
    billingActions?: Record<string, { label?: string | null; href?: string | null }>
}>()

const { t } = useTranslations()
</script>

<template>
    <Head :title="pageHeading ?? t('billing.portal.title')" />
    <div :class="PAGE_SHELL_STACK">
        <h1 class="text-2xl font-semibold">{{ pageHeading ?? t('billing.portal.title') }}</h1>
        <p v-if="!subscription && !invoices?.length" class="text-sm text-muted-foreground">
            {{ t('billing.portal.empty') }}
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
