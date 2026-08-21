<script setup lang="ts">
/**
 * Icon name picker for IconPickerField. Stores a semantic name, not SVG.
 */
import { computed } from 'vue'
import { FOCUS_RING } from '../../lib/focusRing'

defineOptions({ inheritAttrs: false })

interface IconPickerSchema {
    key: string
    icons?: string[]
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: IconPickerSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const icons = computed(() => props.field.icons ?? [])
const current = computed(() => (typeof props.modelValue === 'string' ? props.modelValue : ''))

function pick(name: string) {
    if (props.disabled) {
        return
    }

    emit('update:modelValue', name === current.value ? null : name)
}
</script>

<template>
    <div class="flex flex-wrap gap-1.5" role="listbox" data-test="icon-picker-field">
        <button
            v-for="name in icons"
            :key="name"
            type="button"
            role="option"
            class="border-input hover:bg-accent inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-2 text-xs font-medium disabled:opacity-50"
            :class="[FOCUS_RING, current === name ? 'border-primary bg-primary/10 text-primary' : '']"
            :aria-selected="current === name"
            :disabled="disabled"
            :title="name"
            @click="pick(name)"
        >
            {{ name }}
        </button>
    </div>
</template>
