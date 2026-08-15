<script setup lang="ts">
/**
 * A compact quantity control: minus, the count, plus.
 *
 * A TILL LINE IS NOT A TEXT FIELD. Typing "3" is slower than tapping plus, and
 * a free-text qty is how a cashier types 30 by accident. Bounds live here;
 * the cart decides what reaching the minimum means (stop, or remove the line).
 */
import { computed } from 'vue'
import { iconPath } from './icons'

const {
    min = 1,
    max = null,
    disabled = false,
} = defineProps<{
    min?: number
    max?: number | null
    disabled?: boolean
}>()

const qty = defineModel<number>({ required: true })

const emit = defineEmits<{
    decrease: [value: number]
    increase: [value: number]
}>()

const atMin = computed(() => qty.value <= min)
const atMax = computed(() => max !== null && qty.value >= max)

function bump(delta: number): void {
    if (disabled) {
        return
    }

    const next = qty.value + delta

    if (next < min || (max !== null && next > max)) {
        return
    }

    qty.value = next

    if (delta < 0) {
        emit('decrease', next)
    } else {
        emit('increase', next)
    }
}
</script>

<template>
    <div
        class="inline-flex h-8 items-center rounded-md border"
        data-slot="qty-stepper"
        role="group"
        :aria-disabled="disabled ? 'true' : undefined"
    >
        <button
            type="button"
            class="hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40"
            :disabled="disabled || atMin"
            aria-label="Decrease quantity"
            @click="bump(-1)"
        >
            <svg
                class="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <path :d="iconPath('minus')" />
            </svg>
        </button>
        <span class="min-w-6 px-1 text-center text-sm tabular-nums" aria-live="polite">
            {{ qty }}
        </span>
        <button
            type="button"
            class="hover:bg-muted inline-flex size-8 items-center justify-center disabled:opacity-40"
            :disabled="disabled || atMax"
            aria-label="Increase quantity"
            @click="bump(1)"
        >
            <svg
                class="size-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                aria-hidden="true"
            >
                <path :d="iconPath('plus')" />
            </svg>
        </button>
    </div>
</template>
