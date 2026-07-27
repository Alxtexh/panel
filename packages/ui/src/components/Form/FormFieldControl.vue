<script setup lang="ts">
/**
 * One field control.
 *
 * Extracted so the flat renderer and the recursive tree renderer share exactly
 * one implementation — two copies would drift, and the copy that drifts is
 * always the one you are not looking at.
 *
 * Emits its value only. The parent owns state; this never mutates anything.
 */
import type { FormField } from './types'

withDefaults(
    defineProps<{
        field: FormField
        value: unknown
        error?: string
        options?: { value: any; label: string }[]
        processing?: boolean
    }>(),
    { options: () => [], processing: false },
)

const emit = defineEmits<{ (e: 'change', value: unknown): void }>()
</script>

<template>
    <div class="flex flex-col gap-1.5">
        <label :for="`f-${field.key}`" class="text-sm font-medium">
            {{ field.label }}
            <span v-if="field.required" class="text-destructive" aria-hidden="true">*</span>
        </label>

        <select
            v-if="field.type === 'select'"
            :id="`f-${field.key}`"
            :value="value ?? ''"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @change="emit('change', ($event.target as HTMLSelectElement).value || null)"
        >
            <option value="">—</option>
            <option v-for="opt in options" :key="String(opt.value)" :value="opt.value">{{ opt.label }}</option>
        </select>

        <label v-else-if="field.type === 'toggle'" class="flex items-center gap-2 text-sm">
            <input
                :id="`f-${field.key}`"
                type="checkbox"
                class="accent-primary size-4"
                :checked="!!value"
                :disabled="field.disabled || processing"
                @change="emit('change', ($event.target as HTMLInputElement).checked)"
            />
            <span class="text-muted-foreground">{{ field.help ?? 'Enabled' }}</span>
        </label>

        <textarea
            v-else-if="field.type === 'textarea'"
            :id="`f-${field.key}`"
            :value="(value as string) ?? ''"
            :rows="field.rows ?? 3"
            :placeholder="field.placeholder"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @input="emit('change', ($event.target as HTMLTextAreaElement).value)"
        />

        <input
            v-else
            :id="`f-${field.key}`"
            :type="
                field.type === 'number'
                    ? 'number'
                    : field.type === 'date'
                      ? 'date'
                      : field.type === 'datetime'
                        ? 'datetime-local'
                        : (field.inputType ?? 'text')
            "
            :value="value ?? ''"
            :placeholder="field.placeholder"
            :min="field.min"
            :max="field.max"
            :disabled="field.disabled || processing"
            :aria-invalid="!!error"
            class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
            @input="emit('change', ($event.target as HTMLInputElement).value)"
        />

        <p v-if="error" class="text-destructive text-xs" role="alert">{{ error }}</p>
        <p v-else-if="field.help && field.type !== 'toggle'" class="text-muted-foreground text-xs">
            {{ field.help }}
        </p>
    </div>
</template>
