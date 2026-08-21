<script setup lang="ts">
/**
 * Star control for RatingField. Emits an integer (or half-step when allowed).
 */
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

interface RatingSchema {
    key: string
    max?: number
    allowHalf?: boolean
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: RatingSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const max = computed(() => Math.max(1, Math.min(10, Number(props.field.max ?? 5))))
const allowHalf = computed(() => Boolean(props.field.allowHalf))

const current = computed(() => {
    const raw = Number(props.modelValue)

    return Number.isFinite(raw) ? raw : 0
})

function set(value: number) {
    if (props.disabled) {
        return
    }

    emit('update:modelValue', value)
}

function starFill(index: number): 'full' | 'half' | 'empty' {
    if (current.value >= index) {
        return 'full'
    }

    if (allowHalf.value && current.value >= index - 0.5) {
        return 'half'
    }

    return 'empty'
}
</script>

<template>
    <div
        class="inline-flex items-center gap-0.5"
        role="group"
        :aria-label="`Rating out of ${max}`"
        data-test="rating-field"
    >
        <button
            v-for="n in max"
            :key="n"
            type="button"
            class="rounded p-0.5 text-amber-500 transition-colors hover:text-amber-600 disabled:opacity-50"
            :disabled="disabled"
            :aria-label="`${n} of ${max}`"
            :aria-pressed="current >= n"
            @click="set(n)"
        >
            <svg class="size-5" viewBox="0 0 24 24" aria-hidden="true">
                <defs v-if="starFill(n) === 'half'">
                    <linearGradient :id="`half-${field.key}-${n}`" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="50%" stop-color="currentColor" />
                        <stop offset="50%" stop-color="transparent" stop-opacity="1" />
                    </linearGradient>
                </defs>
                <path
                    d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z"
                    :fill="
                        starFill(n) === 'full'
                            ? 'currentColor'
                            : starFill(n) === 'half'
                              ? `url(#half-${field.key}-${n})`
                              : 'none'
                    "
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                />
            </svg>
        </button>
        <button
            v-if="current > 0"
            type="button"
            class="text-muted-foreground ml-1 text-xs hover:text-foreground disabled:opacity-50"
            :disabled="disabled"
            @click="set(0)"
        >
            Clear
        </button>
    </div>
</template>
