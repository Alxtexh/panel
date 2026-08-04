<script setup lang="ts">
/**
 * The control for `CheckboxListField` - several choices, all options visible.
 *
 * THE VALUE IS ALWAYS AN ARRAY, including when it is empty. A control that
 * emitted `null` for "none ticked" would make the server's `array` rule fail on
 * the one answer that is hardest to give any other way, and "none of these" is a
 * real answer people need to be able to submit.
 *
 * IT NEVER MUTATES THE ARRAY IT WAS GIVEN. The parent owns the form state, and a
 * `push` into the prop is a change Vue may or may not notice depending on how
 * the parent stored it - the classic "it saves the second time you click"
 * report. Every toggle emits a new array.
 *
 * REAL CHECKBOXES, for the same reason the radio group uses real radios: the
 * space bar, the label click target and the announced state are all behaviour
 * nobody should be reimplementing on a div.
 */
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

interface Option {
    value: string | number
    label: string
}

interface CheckboxListSchema {
    key: string
    columns?: number
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: CheckboxListSchema
        modelValue: unknown
        options?: Option[]
        disabled?: boolean
    }>(),
    { options: () => [], disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const chosen = computed<(string | number)[]>(() =>
    Array.isArray(props.modelValue) ? (props.modelValue as (string | number)[]) : [],
)

/** Loose comparison, for the same JSON round-trip reason as the radio group. */
function isChosen(option: Option): boolean {
    return chosen.value.some((value) => value == option.value)
}

function toggle(option: Option) {
    emit(
        'update:modelValue',
        isChosen(option)
            ? chosen.value.filter((value) => value != option.value)
            : [...chosen.value, option.value],
    )
}

/**
 * COLUMNS AS A STYLE, NOT A CLASS NAME.
 *
 * `grid-cols-${n}` cannot be written as a dynamic class: Tailwind scans source
 * text, so a computed class name is one it never generates and the layout
 * silently falls back to one column. An inline `grid-template-columns` is the
 * honest way to take a number from the server.
 */
const gridStyle = computed(() =>
    props.field.columns && props.field.columns > 1
        ? { gridTemplateColumns: `repeat(${props.field.columns}, minmax(0, 1fr))` }
        : undefined,
)
</script>

<template>
    <div class="grid gap-x-4 gap-y-2" :style="gridStyle">
        <label
            v-for="option in options"
            :key="String(option.value)"
            class="flex items-center gap-2 text-sm"
            :class="disabled ? 'opacity-50' : 'cursor-pointer'"
        >
            <input
                type="checkbox"
                class="text-primary focus-visible:ring-ring size-4 shrink-0 rounded border focus-visible:ring-2"
                :value="option.value"
                :checked="isChosen(option)"
                :disabled="disabled"
                @change="toggle(option)"
            />
            {{ option.label }}
        </label>

        <p v-if="options.length === 0" class="text-muted-foreground text-sm">
            Nothing to choose from yet.
        </p>
    </div>
</template>
