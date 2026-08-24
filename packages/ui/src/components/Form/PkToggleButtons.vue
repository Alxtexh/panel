<script setup lang="ts">
/**
 * The control for `ToggleButtonsField` - choices drawn as buttons.
 *
 * REAL radio / checkbox inputs under the buttons, same accessibility posture as
 * PkRadioGroup and PkCheckboxList. The visible chrome is a label; the input is
 * sr-only so keyboard and AT behaviour stay native.
 *
 * Colours and icons come from the schema as semantic names. Tone classes live
 * here so PHP never ships Tailwind utilities that a purge could drop.
 */
import { computed } from 'vue'
import { FOCUS_RING } from '../../lib/focusRing'
import { iconPath } from '../primitives/icons'

defineOptions({ inheritAttrs: false })

interface Option {
    value: string | number
    label: string
}

interface ToggleButtonsSchema {
    key: string
    colors?: Record<string, string>
    icons?: Record<string, string>
    tooltips?: Record<string, string>
    multiple?: boolean
    inline?: boolean
    grouped?: boolean
    hiddenLabels?: boolean
    columns?: number
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: ToggleButtonsSchema
        modelValue: unknown
        options?: Option[]
        disabled?: boolean
    }>(),
    { options: () => [], disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const multiple = computed(() => Boolean(props.field.multiple))
const grouped = computed(() => Boolean(props.field.grouped))
const hiddenLabels = computed(() => Boolean(props.field.hiddenLabels))
const inline = computed(() => props.field.inline !== false)

const chosenList = computed<(string | number)[]>(() =>
    Array.isArray(props.modelValue) ? (props.modelValue as (string | number)[]) : [],
)

/** Loose compare: JSON numbers vs string round-trips. */
function isChosen(option: Option): boolean {
    if (multiple.value) {
        return chosenList.value.some((value) => value == option.value)
    }

    return props.modelValue != null && option.value == (props.modelValue as never)
}

function select(option: Option) {
    if (props.disabled) {
        return
    }

    if (multiple.value) {
        emit(
            'update:modelValue',
            isChosen(option)
                ? chosenList.value.filter((value) => value != option.value)
                : [...chosenList.value, option.value],
        )

        return
    }

    emit('update:modelValue', option.value)
}

function toneKey(option: Option): string {
    return props.field.colors?.[String(option.value)] ?? 'primary'
}

function optionIcon(option: Option): string | null {
    const name = props.field.icons?.[String(option.value)]

    return name ? iconPath(name) : null
}

function optionTitle(option: Option): string {
    return props.field.tooltips?.[String(option.value)] ?? option.label
}

/**
 * Selected / idle classes per tone. Fixed tokens (success, warning, …), not
 * theme primary alone, so draft/published stay readable across accents.
 */
const TONE_SELECTED: Record<string, string> = {
    primary: 'border-primary bg-primary text-primary-foreground',
    success: 'border-success bg-success text-white',
    warning: 'border-warning bg-warning text-white',
    danger: 'border-destructive bg-destructive text-white',
    info: 'border-info bg-info text-white',
    neutral: 'border-foreground bg-foreground text-background',
}

const TONE_IDLE: Record<string, string> = {
    primary: 'border-input hover:border-primary/60 hover:bg-primary/5',
    success: 'border-input hover:border-success/60 hover:bg-success/5',
    warning: 'border-input hover:border-warning/60 hover:bg-warning/5',
    danger: 'border-input hover:border-destructive/60 hover:bg-destructive/5',
    info: 'border-input hover:border-info/60 hover:bg-info/5',
    neutral: 'border-input hover:border-foreground/40 hover:bg-muted',
}

function buttonClass(option: Option): string {
    const tone = toneKey(option)
    const selected = isChosen(option)

    return [
        FOCUS_RING,
        'inline-flex items-center justify-center gap-1.5 border px-3 py-1.5 text-sm font-medium transition-colors',
        grouped.value ? 'rounded-none first:rounded-l-md last:rounded-r-md -ml-px first:ml-0' : 'rounded-md',
        selected ? (TONE_SELECTED[tone] ?? TONE_SELECTED.primary) : (TONE_IDLE[tone] ?? TONE_IDLE.primary),
        props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ].join(' ')
}

const gridStyle = computed(() => {
    if (inline.value || grouped.value) {
        return undefined
    }

    if (props.field.columns && props.field.columns > 1) {
        return { gridTemplateColumns: `repeat(${props.field.columns}, minmax(0, 1fr))` }
    }

    return undefined
})

const containerClass = computed(() => {
    if (grouped.value) {
        return 'inline-flex flex-wrap'
    }

    if (inline.value) {
        return 'flex flex-wrap gap-2'
    }

    return 'grid gap-2'
})
</script>

<template>
    <div
        :role="multiple ? 'group' : 'radiogroup'"
        :class="containerClass"
        :style="gridStyle"
        data-test="toggle-buttons-field"
    >
        <label
            v-for="option in options"
            :key="String(option.value)"
            :class="buttonClass(option)"
            :title="optionTitle(option)"
        >
            <input
                class="sr-only"
                :type="multiple ? 'checkbox' : 'radio'"
                :name="multiple ? undefined : `f-${field.key}`"
                :value="option.value"
                :checked="isChosen(option)"
                :disabled="disabled"
                :aria-label="hiddenLabels ? option.label : undefined"
                @change="select(option)"
            />
            <svg
                v-if="optionIcon(option)"
                viewBox="0 0 24 24"
                class="size-4 shrink-0"
                fill="none"
                stroke="currentColor"
                stroke-width="2.2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path :d="optionIcon(option)!" />
            </svg>
            <span v-if="!hiddenLabels">{{ option.label }}</span>
        </label>

        <p v-if="options.length === 0" class="text-muted-foreground text-sm font-normal">
            Nothing to choose from yet.
        </p>
    </div>
</template>
