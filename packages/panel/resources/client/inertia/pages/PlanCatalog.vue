<script setup lang="ts">
/**
 * Browse plans and choose one. Host props from `PlanCatalogPage`.
 *
 * CHOOSING NEVER COLLECTS A CARD NUMBER HERE. `choose()` POSTs the plan id
 * to `checkoutHref`; the server's `PlanCatalogPage::checkout()` hands it to
 * the host's checkout-session resolver and sends back an
 * `Inertia::location()` response, which the client below follows as a real
 * navigation to wherever that resolver said - a Stripe Checkout Session, a
 * Paddle transaction, whatever the host's processor issues. This screen
 * never talks to a payment processor directly.
 */
import { computed, ref } from 'vue'
import { Head, router } from '@inertiajs/vue3'
import {
    PAGE_SHELL_STACK,
    PkEmptyState,
    PkPageHeader,
    PlanPurchaseCard,
} from '@alxtexh-enterprise/panel'
import type { PurchasablePlan } from '@alxtexh-enterprise/panel'
import { useTranslations } from '../composables/useTranslations'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        plans?: PurchasablePlan[]
        checkoutHref?: string
    }>(),
    { plans: () => [] },
)

const { t } = useTranslations()

/** Hidden entirely when nothing has one - a switch that changes nothing is a dead control. */
const canSwitchAnnual = computed(() => props.plans.some((plan) => plan.annualPrice !== undefined))
const annual = ref(false)

const processingId = ref<string | null>(null)

function choose(id: string) {
    if (processingId.value !== null) {
        return
    }

    processingId.value = id

    router.post(
        props.checkoutHref ?? '',
        { plan_id: id },
        {
            preserveScroll: true,
            onFinish: () => {
                processingId.value = null
            },
        },
    )
}
</script>

<template>
    <Head :title="pageHeading ?? t('billing.catalog.title')" />

    <div :class="PAGE_SHELL_STACK">
        <PkPageHeader
            :title="pageHeading ?? t('billing.catalog.title')"
            :purpose="pageDescription ?? undefined"
        />

        <div v-if="canSwitchAnnual" class="flex items-center justify-center">
            <div class="bg-background inline-flex rounded-md border p-1" role="group">
                <button
                    type="button"
                    class="rounded px-3 py-1.5 text-sm font-medium transition-colors"
                    :class="!annual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'"
                    :aria-pressed="!annual"
                    @click="annual = false"
                >
                    {{ t('billing.catalog.monthly') }}
                </button>
                <button
                    type="button"
                    class="rounded px-3 py-1.5 text-sm font-medium transition-colors"
                    :class="annual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'"
                    :aria-pressed="annual"
                    @click="annual = true"
                >
                    {{ t('billing.catalog.annual') }}
                </button>
            </div>
        </div>

        <PkEmptyState
            v-if="plans.length === 0"
            :title="t('billing.catalog.empty')"
            icon="package"
        />

        <div v-else class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <PlanPurchaseCard
                v-for="plan in plans"
                :key="plan.id"
                :plan="plan"
                :annual="annual"
                :processing="processingId === plan.id"
                @choose="choose"
            />
        </div>
    </div>
</template>
