<script setup lang="ts">
/**
 * Tiers, with the annual/monthly switch the three shipped designs never had.
 *
 * THE SAVING IS STATED, NOT IMPLIED. "Annual" next to a smaller number invites
 * the reader to work out the discount themselves and get it wrong; saying it
 * costs one line and removes the arithmetic.
 *
 * THE TOGGLE IS ABSENT WHEN NO TIER HAS AN ANNUAL PRICE, because a switch that
 * changes nothing is a dead control - DESIGN_RULES rule 5, which applies to the
 * front door as much as to the panel.
 */
import { computed, ref } from 'vue'
import PkSection from './PkSection.vue'
import PkSectionHeading from './PkSectionHeading.vue'

interface Tier {
    name?: string
    price?: string
    annualPrice?: string
    period?: string
    body?: string
    featured?: boolean
    label?: string
    href?: string
    features?: { title?: string }[]
}

const props = defineProps<{
    title?: string
    body?: string
    annualNote?: string
    items?: Tier[]
}>()

const annual = ref(false)

const canSwitch = computed(() => (props.items ?? []).some((t) => !!t.annualPrice))

function priceOf(tier: Tier): string | undefined {
    return annual.value && tier.annualPrice ? tier.annualPrice : tier.price
}
</script>

<template>
    <PkSection muted>
        <div class="flex flex-col gap-10">
            <PkSectionHeading :title="title" :body="body" />

            <div v-if="canSwitch" class="flex items-center justify-center gap-3">
                <div class="inline-flex rounded-md border bg-background p-1" role="group">
                    <button
                        type="button"
                        class="rounded px-3 py-1.5 text-sm font-medium transition-colors"
                        :class="
                            !annual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                        "
                        :aria-pressed="!annual"
                        @click="annual = false"
                    >
                        Monthly
                    </button>
                    <button
                        type="button"
                        class="rounded px-3 py-1.5 text-sm font-medium transition-colors"
                        :class="
                            annual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                        "
                        :aria-pressed="annual"
                        @click="annual = true"
                    >
                        Annual
                    </button>
                </div>

                <p v-if="annualNote" class="text-xs text-muted-foreground font-normal">{{ annualNote }}</p>
            </div>

            <ul class="grid gap-4 md:grid-cols-3">
                <li
                    v-for="(tier, i) in items ?? []"
                    :key="i"
                    class="flex flex-col gap-4 rounded-lg border bg-card p-6"
                    :class="tier.featured ? 'border-primary shadow-sm' : ''"
                >
                    <div class="flex flex-col gap-1">
                        <h3 class="text-sm font-semibold">{{ tier.name }}</h3>
                        <p class="flex items-baseline gap-1">
                            <span class="text-3xl font-semibold tracking-tight">{{
                                priceOf(tier)
                            }}</span>
                            <span v-if="tier.period" class="text-sm text-muted-foreground font-normal">{{
                                tier.period
                            }}</span>
                        </p>
                        <p v-if="tier.body" class="text-sm text-pretty text-muted-foreground">
                            {{ tier.body }}
                        </p>
                    </div>

                    <ul class="flex flex-col gap-2 text-sm">
                        <li
                            v-for="(f, j) in tier.features ?? []"
                            :key="j"
                            class="flex items-start gap-2"
                        >
                            <span class="mt-0.5 text-success" aria-hidden="true">✓</span>
                            <span class="text-muted-foreground">{{ f.title }}</span>
                        </li>
                    </ul>

                    <a
                        v-if="tier.label"
                        :href="tier.href ?? '#'"
                        class="mt-auto inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors"
                        :class="
                            tier.featured
                                ? 'bg-primary text-primary-foreground hover:opacity-90'
                                : 'border bg-background hover:bg-accent'
                        "
                    >
                        {{ tier.label }}
                    </a>
                </li>
            </ul>
        </div>
    </PkSection>
</template>
