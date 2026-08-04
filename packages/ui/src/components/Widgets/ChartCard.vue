<script setup lang="ts">
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
 */
withDefaults(
    defineProps<{
        label: string
        description?: string | null
        /** Omit to hide the selector entirely. */
        periods?: { value: string; label: string }[] | null
        period?: string
        loading?: boolean
        error?: boolean
        bodyHeight?: number
    }>(),
    {
        description: null,
        periods: null,
        loading: false,
        error: false,
        bodyHeight: 220,
    },
)

defineEmits<{ (e: 'update:period', value: string): void }>()
</script>

<template>
    <div class="bg-card flex flex-col gap-3 rounded-lg border p-4">
        <div class="flex flex-wrap items-start justify-between gap-2">
            <div class="min-w-0">
                <p class="text-sm font-medium">{{ label }}</p>
                <p v-if="description" class="text-muted-foreground mt-0.5 text-xs">
                    {{ description }}
                </p>

                <!-- Trend sits under the title, where it reads as a property of
                     the metric rather than of the selected period. -->
                <slot name="trend" />
            </div>

            <div
                v-if="periods && periods.length"
                class="bg-muted/60 flex shrink-0 items-center gap-0.5 rounded-md p-0.5"
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
        </div>

        <div :style="{ minHeight: `${bodyHeight}px` }" class="flex flex-col justify-center">
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
