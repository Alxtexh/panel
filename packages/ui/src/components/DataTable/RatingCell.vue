<script setup lang="ts">
/**
 * Read-only stars for RatingColumn.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        value: unknown
        max?: number
    }>(),
    { max: 5 },
)

const max = computed(() => Math.max(1, Math.min(10, Number(props.max ?? 5))))
const current = computed(() => {
    const raw = Number(props.value)

    return Number.isFinite(raw) ? Math.max(0, Math.min(max.value, raw)) : 0
})
</script>

<template>
    <span
        class="inline-flex items-center gap-0.5 text-amber-500"
        :aria-label="`${current} of ${max}`"
        data-test="rating-cell"
    >
        <svg v-for="n in max" :key="n" class="size-3.5" viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z"
                :fill="current >= n ? 'currentColor' : 'none'"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linejoin="round"
            />
        </svg>
    </span>
</template>
