<script setup lang="ts">
/**
 * The control for `SliderField`.
 *
 * THE NUMBER IS ALWAYS ON SCREEN. A slider without a readout is a control that
 * can be operated and not verified - somebody drags it to "about seventy" and
 * has no way to know whether the record now says 68 or 71, which for a threshold
 * or a quota is the whole question.
 *
 * A NUMBER INPUT BESIDE IT, because a slider cannot be typed into and an exact
 * value is often the point ("set it to 80"). Dragging is for exploring the
 * range; typing is for a figure somebody already decided on, and a control that
 * only supports one of those makes the other tedious.
 *
 * IT EMITS A NUMBER, NEVER A STRING. Both native inputs report `value` as a
 * string, and a JSON body carrying `"40"` where the column expects an integer is
 * the sort of thing that works everywhere until it reaches a strict comparison
 * or a database that will not coerce.
 */
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

interface SliderSchema {
    key: string
    min?: number
    max?: number
    step?: number
    unit?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: SliderSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const min = computed(() => props.field.min ?? 0)
const max = computed(() => props.field.max ?? 100)
const step = computed(() => props.field.step ?? 1)

/**
 * THE SLIDER NEEDS A POSITION EVEN WHEN THE RECORD HAS NO VALUE, and the honest
 * one is the bottom of the range rather than the middle - a control sitting at
 * 50 on an empty field looks like a stored value nobody set.
 */
const current = computed<number>(() => {
    const raw = Number(props.modelValue)

    return Number.isFinite(raw) ? raw : min.value
})

const empty = computed(() => props.modelValue === null || props.modelValue === undefined || props.modelValue === '')

function emitNumber(raw: string) {
    if (raw === '') {
        emit('update:modelValue', null)

        return
    }

    const value = Number(raw)

    emit('update:modelValue', Number.isFinite(value) ? value : null)
}
</script>

<template>
    <div class="flex items-center gap-3">
        <input
            type="range"
            class="accent-primary h-9 flex-1 cursor-pointer disabled:opacity-50"
            :min="min"
            :max="max"
            :step="step"
            :value="current"
            :disabled="disabled"
            :aria-label="`${field.key} value`"
            @input="emitNumber(($event.target as HTMLInputElement).value)"
        />

        <div class="flex shrink-0 items-center gap-1">
            <input
                type="number"
                class="border-input bg-background focus-visible:ring-ring h-9 w-20 rounded-md border px-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                :min="min"
                :max="max"
                :step="step"
                :value="empty ? '' : current"
                :disabled="disabled"
                @input="emitNumber(($event.target as HTMLInputElement).value)"
            />
            <span v-if="field.unit" class="text-muted-foreground text-sm">{{ field.unit }}</span>
        </div>
    </div>
</template>
