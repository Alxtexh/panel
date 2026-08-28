<script setup lang="ts">
/**
 * One plan a customer can buy - the client-portal counterpart to `PlanCard`.
 *
 * `PlanCard` renders Edit/Delete for an operator managing the catalogue;
 * this renders a single "Choose plan" action for somebody buying from it,
 * and never both on the same card - an editable price a customer could
 * click through to a payment page would be a very different kind of bug.
 *
 * Visual language matches `PlanCard`/`PkPricing`: card, quiet border,
 * highlighted plans get `border-primary`, included features get a check.
 */
import { computed } from 'vue'
import PkButton from '../primitives/PkButton.vue'
import { iconPath } from '../primitives/icons'

export interface PurchasablePlan {
    id: string
    name: string
    price: number
    priceFormatted?: string
    annualPrice?: number
    annualPriceFormatted?: string
    interval?: string
    description?: string
    features?: string[]
    current?: boolean
    recommended?: boolean
}

const props = withDefaults(
    defineProps<{
        plan: PurchasablePlan
        /** Show the annual price when the plan has one. */
        annual?: boolean
        /** This card's own checkout request is in flight. */
        processing?: boolean
    }>(),
    { annual: false, processing: false },
)

const emit = defineEmits<{
    choose: [id: string]
}>()

const price = computed(() => {
    if (props.annual && props.plan.annualPrice !== undefined) {
        return props.plan.annualPriceFormatted ?? String(props.plan.annualPrice)
    }

    return props.plan.priceFormatted ?? String(props.plan.price)
})

const period = computed(() => {
    if (props.annual && props.plan.annualPrice !== undefined) {
        return 'year'
    }

    return props.plan.interval ?? 'month'
})

const highlighted = computed(() => Boolean(props.plan.recommended) && !props.plan.current)
</script>

<template>
    <article
        class="bg-card text-card-foreground flex flex-col gap-4 rounded-lg border p-6"
        :class="highlighted ? 'border-primary shadow-sm' : ''"
        data-slot="plan-purchase-card"
        :data-current="plan.current ? 'true' : undefined"
        :data-recommended="plan.recommended ? 'true' : undefined"
    >
        <header class="flex flex-col gap-1">
            <p
                v-if="plan.current || plan.recommended"
                class="mb-1 flex flex-wrap gap-2 text-xs font-medium"
            >
                <span v-if="plan.current" class="text-primary">Current plan</span>
                <span v-else-if="plan.recommended" class="text-muted-foreground">Recommended</span>
            </p>
            <h3 class="text-sm font-semibold">{{ plan.name }}</h3>
            <p class="flex items-baseline gap-1">
                <span class="text-3xl font-semibold tracking-tight tabular-nums">{{ price }}</span>
                <span class="text-muted-foreground text-sm font-normal">/ {{ period }}</span>
            </p>
            <p v-if="plan.description" class="text-muted-foreground text-sm font-normal text-pretty">
                {{ plan.description }}
            </p>
        </header>

        <ul v-if="plan.features?.length" class="flex flex-1 flex-col gap-2 text-sm">
            <li v-for="(feature, index) in plan.features" :key="index" class="flex items-start gap-2">
                <span class="text-success mt-0.5 shrink-0" aria-hidden="true">
                    <svg
                        class="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path :d="iconPath('check')" />
                    </svg>
                </span>
                <span class="text-muted-foreground">{{ feature }}</span>
            </li>
        </ul>
        <div v-else class="flex-1" />

        <footer class="mt-auto pt-2">
            <PkButton
                v-if="plan.current"
                class="w-full"
                variant="outline"
                size="sm"
                disabled
            >
                Current plan
            </PkButton>
            <PkButton
                v-else
                class="w-full"
                :variant="highlighted ? 'default' : 'outline'"
                size="sm"
                :disabled="processing"
                @click="emit('choose', plan.id)"
            >
                {{ processing ? 'Redirecting…' : 'Choose plan' }}
            </PkButton>
        </footer>
    </article>
</template>
