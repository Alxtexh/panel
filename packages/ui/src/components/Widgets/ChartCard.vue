<script setup lang="ts">
import { ref } from 'vue'
import PkSkeleton from '../primitives/PkSkeleton.vue'
/**
 * The frame around a chart: title, period selector, trend, and the chart slot.
 *
 * IT DOES NOT FETCH. Selecting a period emits `update:period` and nothing else
 * - the page decides that this means an Inertia partial reload of one prop.
 * That is package rule 2 (§4), and it is what lets the same card work outside
 * Inertia later.
 *
 * THE CARD IS THE ONLY FRAME. The chart inside draws no border and no heading
 * of its own; nesting a bordered chart inside a bordered card is the wrapper
 * stack the layout renderer already avoids.
 *
 * The body height is FIXED across loading, error and loaded states. A skeleton
 * shorter than the chart makes the whole dashboard jump when six cards resolve
 * at slightly different times.
 *
 * COLLAPSE IS LOCAL AND EPHEMERAL, the same choice `StatStrip` makes for its
 * reveal state - a dashboard is visited often enough that reaching for
 * persistence here is solving a problem nobody has asked for yet. `v-show`,
 * not `v-if`: a chart's canvas is real work to lay out, and collapsing must
 * not force a resolved widget to redraw itself from nothing when reopened.
 */
const props = withDefaults(
    defineProps<{
        label: string
        description?: string | null
        /** Omit to hide the selector entirely. */
        periods?: { value: string; label: string }[] | null
        period?: string
        loading?: boolean
        error?: boolean
        bodyHeight?: number
        /** Offer the collapse control at all. */
        collapsible?: boolean
        defaultCollapsed?: boolean
    }>(),
    {
        description: null,
        periods: null,
        loading: false,
        error: false,
        bodyHeight: 220,
        collapsible: true,
        defaultCollapsed: false,
    },
)

defineEmits<{ (e: 'update:period', value: string): void }>()

const collapsed = ref(props.defaultCollapsed)
</script>

<template>
    <div class="bg-card flex flex-col gap-3 rounded-lg border p-4">
        <div class="flex flex-wrap items-start justify-between gap-2">
            <div class="flex min-w-0 items-start gap-2">
                <slot name="icon" />

                <div class="min-w-0">
                    <p class="text-sm font-medium">{{ label }}</p>
                    <p v-if="description" class="text-muted-foreground mt-0.5 text-xs">
                        {{ description }}
                    </p>

                    <!-- Trend sits under the title, where it reads as a property
                         of the metric rather than of the selected period. -->
                    <slot name="trend" />
                </div>
            </div>

            <div class="flex shrink-0 items-center gap-1.5">
                <div
                    v-if="periods && periods.length"
                    class="bg-muted/60 flex items-center gap-0.5 rounded-md p-0.5"
                    role="group"
                    aria-label="Period"
                >
                    <button
                        v-for="option in periods"
                        :key="option.value"
                        type="button"
                        class="rounded px-2 py-1 text-xs transition-colors"
                        :class="
                            period === option.value
                                ? 'bg-background text-foreground font-medium shadow-sm'
                                : 'text-muted-foreground hover:text-foreground'
                        "
                        :aria-pressed="period === option.value"
                        @click="$emit('update:period', option.value)"
                    >
                        {{ option.label }}
                    </button>
                </div>

                <!--
                    THE CHEVRON, NOT A SHOW/HIDE WORD - the header stays a fixed
                    width whichever state it is in, which a two-state label
                    would not.
                -->
                <button
                    v-if="collapsible"
                    type="button"
                    class="text-muted-foreground hover:bg-muted hover:text-foreground rounded-md p-1 transition-colors"
                    :aria-expanded="!collapsed"
                    :aria-label="collapsed ? `Expand ${label}` : `Collapse ${label}`"
                    :title="collapsed ? 'Expand' : 'Collapse'"
                    @click="collapsed = !collapsed"
                >
                    <svg
                        class="size-4 transition-transform"
                        :class="collapsed ? '-rotate-90' : ''"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>
            </div>
        </div>

        <div
            v-show="!collapsed"
            :style="{ minHeight: `${bodyHeight}px` }"
            class="flex flex-col justify-center"
        >
            <PkSkeleton v-if="loading" variant="block" :height="bodyHeight" />

            <p
                v-else-if="error"
                class="text-destructive flex items-center justify-center text-sm"
                :style="{ height: `${bodyHeight}px` }"
                role="alert"
            >
                Could not load
            </p>

            <slot v-else />
        </div>
    </div>
</template>
