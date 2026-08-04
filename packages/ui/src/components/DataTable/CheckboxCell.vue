<script setup lang="ts">
/**
 * A boolean that is READ, not set - roadmap 4.6.
 *
 * DISABLED AND `aria-readonly`, deliberately both. A checkbox a keyboard user
 * can focus and toggle, whose change goes nowhere, is worse than a label: it
 * reports a change that did not happen. `EditableCell` with a toggle type is
 * the control; this is the state.
 *
 * THE LABEL IS THE RECORD'S, NOT THE CONTROL'S. A bare checkbox announces
 * "checked", which is true of the widget and useless about the row - so the
 * column supplies "Verified" / "Not verified" and that is what is read out.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        value?: unknown
        trueLabel?: string | null
        falseLabel?: string | null
    }>(),
    // `value` has no default: `unknown` cannot take one that type-checks,
    // and an absent value is already falsy where it is read.
    { trueLabel: null, falseLabel: null },
)

/**
 * `"0"` and `"false"` ARE FALSE HERE. They arrive that way from drivers and
 * from JSON, and a plain cast makes both of them true - the same trap
 * `ToggleColumn::castValue` documents on the write side.
 */
const checked = computed(() => {
    const v = props.value

    if (typeof v === 'string') {
        return v !== '' && v !== '0' && v.toLowerCase() !== 'false'
    }

    return Boolean(v)
})

const label = computed(() =>
    checked.value ? (props.trueLabel ?? 'Yes') : (props.falseLabel ?? 'No'),
)
</script>

<template>
    <span class="inline-flex items-center">
        <input
            type="checkbox"
            :checked="checked"
            disabled
            aria-readonly="true"
            :aria-label="label"
            class="border-input text-primary size-4 rounded disabled:opacity-100"
        />
        <span class="sr-only">{{ label }}</span>
    </span>
</template>
