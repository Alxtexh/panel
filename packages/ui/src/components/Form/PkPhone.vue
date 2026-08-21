<script setup lang="ts">
/**
 * E.164 phone input for PhoneField.
 */
import { computed } from 'vue'
import { FOCUS_RING } from '../../lib/focusRing'

defineOptions({ inheritAttrs: false })

interface PhoneSchema {
    key: string
    placeholder?: string
    [key: string]: unknown
}

const props = withDefaults(
    defineProps<{
        field: PhoneSchema
        modelValue: unknown
        disabled?: boolean
    }>(),
    { disabled: false },
)

const emit = defineEmits<{ (e: 'update:modelValue', value: unknown): void }>()

const value = computed(() => (typeof props.modelValue === 'string' ? props.modelValue : ''))

function onInput(event: Event) {
    const raw = (event.target as HTMLInputElement).value
    emit('update:modelValue', raw === '' ? null : raw.trim())
}
</script>

<template>
    <input
        type="tel"
        inputmode="tel"
        autocomplete="tel"
        class="border-input bg-background h-10 w-full rounded-md border px-3 text-sm"
        :class="FOCUS_RING"
        :value="value"
        :placeholder="field.placeholder ?? '+254712345678'"
        :disabled="disabled"
        data-test="phone-field"
        @input="onInput"
    />
</template>
