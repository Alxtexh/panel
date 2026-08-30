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
import { iconPath } from '../primitives/icons'
import PkButton from '../primitives/PkButton.vue'

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
        class="bg-card text-card-foreground relative flex flex-col gap-4 rounded-xl border p-6 transition-shadow"
        :class="
            highlighted
                ? 'border-primary shadow-lg ring-1 ring-primary/20'
                : plan.current
                  ? 'border-primary/40'
                  : ''
        "
        data-slot="plan-purchase-card"
        :data-current="plan.current ? 'true' : undefined"
        :data-recommended="plan.recommended ? 'true' : undefined"
    >
        <!--
            THE BADGE FLOATS ON THE BORDER, not inline text above the title -
            the pill overlapping the card edge is what every modern pricing
            card reference actually does, and text-in-a-row reads as a label
            rather than a call-out.
        -->
        <span
            v-if="highlighted"
            class="bg-primary text-primary-foreground absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold shadow-sm"
        >
            Most popular
        </span>
        <span
            v-else-if="plan.current"
            class="bg-primary/10 text-primary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold"
        >
            Current plan
        </span>

        <header class="flex flex-col gap-1" :class="highlighted || plan.current ? 'pt-2' : ''">
            <h3 class="text-sm font-semibold">{{ plan.name }}</h3>
            <p class="flex items-baseline gap-1">
                <span class="text-4xl font-bold tracking-tight tabular-nums">{{ price }}</span>
                <span class="text-muted-foreground text-sm font-normal">/ {{ period }}</span>
            </p>
            <p
                v-if="plan.description"
                class="text-muted-foreground text-sm font-normal text-pretty"
            >
                {{ plan.description }}
            </p>
        </header>

        <ul v-if="plan.features?.length" class="flex flex-1 flex-col gap-2 text-sm">
            <li
                v-for="(feature, index) in plan.features"
                :key="index"
                class="flex items-start gap-2"
            >
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

        <!--
            NO BUTTON ON THE CURRENT PLAN'S OWN CARD. The floating badge above
            already says so; a second, disabled "Current plan" button repeats
            it in a control that does nothing when pressed, which is a worse
            way to say the same thing.
        -->
        <footer v-if="!plan.current" class="mt-auto pt-2">
            <PkButton
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
