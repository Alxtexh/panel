<script setup lang="ts">
/**
 * The control for `RadioField` - one choice, all options visible.
 *
 * A REAL `<input type="radio">` GROUP, not styled buttons. Arrow keys move
 * between options, the group is one tab stop, and a screen reader announces "2
 * of 4" - all of that comes free from the element and none of it comes free from
 * a div with a click handler. The visible circle is the input; nothing is
 * duplicated as a hidden control that could disagree with what is drawn.
 *
 * THE NAME IS SCOPED TO THE FIELD KEY, which is what makes the group a group. A
 * shared or missing `name` puts every radio on the page into one set - so
 * choosing a plan type would silently clear the delivery method somewhere below
 * it, and only on pages that happen to have two radio fields.
 */
defineOptions({ inheritAttrs: false })

interface Option {
    value: string | number
    label: string
}

interface RadioFieldSchema {
    key: string
    inline?: boolean
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: RadioFieldSchema
        modelValue: unknown
        options?: Option[]
        disabled?: boolean
    }>(),
    { options: () => [], disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

/**
 * COMPARED LOOSELY, deliberately.
 *
 * An option value arrives from JSON as the number `3` while the record's value
 * came back from a form round trip as the string `"3"` - strict equality then
 * shows nothing selected on a form that has a perfectly good value, which reads
 * as data loss. The values are always scalars here, so `==` is safe and `===`
 * is the bug.
 */
function isChosen(option: Option): boolean {
    return props.modelValue != null && option.value == (props.modelValue as never)
}
</script>

<template>
    <div
        role="radiogroup"
        class="flex gap-x-4 gap-y-2"
        :class="field.inline ? 'flex-row flex-wrap items-center' : 'flex-col'"
    >
        <label
            v-for="option in options"
            :key="String(option.value)"
            class="flex items-center gap-2 text-sm"
            :class="disabled ? 'opacity-50' : 'cursor-pointer'"
        >
            <input
                type="radio"
                class="text-primary focus-visible:ring-ring size-4 shrink-0 border focus-visible:ring-2"
                :name="`f-${field.key}`"
                :value="option.value"
                :checked="isChosen(option)"
                :disabled="disabled"
                @change="emit('update:modelValue', option.value)"
            />
            {{ option.label }}
        </label>

        <!-- An empty option list is a real state - a tenant-scoped list that
             resolved to nothing - and saying so beats an invisible control. -->
        <p v-if="options.length === 0" class="text-muted-foreground text-sm">
            Nothing to choose from yet.
        </p>
    </div>
</template>
