<script setup lang="ts">
/**
 * Billing portal canvas. Props from BillingPortalPage.
 * Host fills subscription / invoices / methods; actions stay href-driven.
 */
import { Head } from '@inertiajs/vue3'
import { computed } from 'vue'
import {
    PAGE_SHELL_STACK,
    PkEmptyState,
    PkPageHeader,
    TableShell,
    buttonClasses,
} from '@alxtexh-enterprise/panel'
import { useTranslations } from '../composables/useTranslations'

defineOptions({ inheritAttrs: false })

type BillingAction = { label?: string | null; href?: string | null }

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        subscription?: Record<string, unknown> | null
        invoices?: Record<string, unknown>[]
        paymentMethods?: Record<string, unknown>[]
        billingActions?: Record<string, BillingAction>
    }>(),
    {
        subscription: null,
        invoices: () => [],
        paymentMethods: () => [],
        billingActions: () => ({}),
    },
)

const { t } = useTranslations()

const hasData = computed(
    () =>
        !!props.subscription ||
        (props.invoices?.length ?? 0) > 0 ||
        (props.paymentMethods?.length ?? 0) > 0,
)

const actionEntries = computed(() => Object.entries(props.billingActions ?? {}))

function cell(row: Record<string, unknown>, keys: string[]): string {
    for (const key of keys) {
        const value = row[key]

        if (value != null && value !== '') {
            return String(value)
        }
    }

    return '-'
}
</script>

<template>
    <Head :title="pageHeading ?? t('billing.portal.title')" />

    <div :class="PAGE_SHELL_STACK">
        <PkPageHeader
            :title="pageHeading ?? t('billing.portal.title')"
            :purpose="pageDescription ?? t('billing.portal.host_extension')"
        />

        <PkEmptyState
            v-if="!hasData"
            :title="t('billing.portal.empty')"
            :description="t('billing.portal.empty_hint')"
            icon="file-text"
        />

        <section v-if="subscription" class="space-y-2 rounded-xl border bg-card p-4">
            <h2 class="text-sm font-medium">{{ t('billing.portal.subscription') }}</h2>
            <dl class="grid gap-3 sm:grid-cols-2 text-sm">
                <div v-for="(value, key) in subscription" :key="String(key)">
                    <dt class="text-muted-foreground text-xs font-normal uppercase tracking-wide">
                        {{ key }}
                    </dt>
                    <dd class="font-medium">
                        {{ value == null || value === '' ? '-' : String(value) }}
                    </dd>
                </div>
            </dl>
        </section>

        <TableShell v-if="invoices.length > 0 || hasData">
            <template #title>
                <p class="text-sm font-medium">{{ t('billing.portal.invoices') }}</p>
            </template>
            <p v-if="invoices.length === 0" class="text-muted-foreground px-3 py-6 text-sm">
                {{ t('billing.portal.no_invoices') }}
            </p>
            <div v-else class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <thead
                        class="border-b bg-muted/40 text-left text-xs uppercase text-muted-foreground"
                    >
                        <tr>
                            <th class="px-3 py-2">Reference</th>
                            <th class="px-3 py-2">Status</th>
                            <th class="px-3 py-2">Amount</th>
                            <th class="px-3 py-2">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="(row, index) in invoices"
                            :key="cell(row, ['id', 'number', 'reference']) + String(index)"
                            class="border-b last:border-0"
                        >
                            <td class="px-3 py-2 font-medium">
                                {{ cell(row, ['number', 'reference', 'id', 'label']) }}
                            </td>
                            <td class="px-3 py-2">
                                {{ cell(row, ['status', 'state']) }}
                            </td>
                            <td class="px-3 py-2">
                                {{ cell(row, ['amount', 'total', 'amount_due']) }}
                            </td>
                            <td class="text-muted-foreground px-3 py-2">
                                {{ cell(row, ['date', 'issued_at', 'created_at']) }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </TableShell>

        <section v-if="paymentMethods.length > 0 || hasData" class="space-y-3">
            <h2 class="text-sm font-medium">{{ t('billing.portal.payment_methods') }}</h2>
            <p v-if="paymentMethods.length === 0" class="text-muted-foreground text-sm font-normal">
                {{ t('billing.portal.no_methods') }}
            </p>
            <ul v-else class="grid gap-3 sm:grid-cols-2">
                <li
                    v-for="(method, index) in paymentMethods"
                    :key="cell(method, ['id', 'brand', 'last4']) + String(index)"
                    class="rounded-xl border bg-card p-4 text-sm"
                >
                    <p class="font-medium">
                        {{ cell(method, ['brand', 'type', 'label', 'name']) }}
                        <span v-if="method.last4" class="text-muted-foreground">
                            ···· {{ method.last4 }}
                        </span>
                    </p>
                    <p class="text-muted-foreground mt-1 text-xs">
                        {{ cell(method, ['exp_month', 'expiry', 'status']) }}
                    </p>
                </li>
            </ul>
        </section>

        <section v-if="actionEntries.length" class="space-y-3">
            <h2 class="text-sm font-medium">{{ t('billing.portal.actions') }}</h2>
            <div class="flex flex-wrap gap-2">
                <a
                    v-for="[key, action] in actionEntries"
                    :key="key"
                    :href="action?.href || undefined"
                    :aria-disabled="!action?.href"
                    :class="[
                        buttonClasses({
                            variant: action?.href ? 'default' : 'outline',
                        }),
                        !action?.href ? 'pointer-events-none opacity-60' : '',
                    ]"
                    @click="(e) => !action?.href && e.preventDefault()"
                >
                    {{ action?.label ?? key }}
                </a>
            </div>
        </section>
    </div>
</template>
