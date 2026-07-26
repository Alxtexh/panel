<script setup lang="ts">
/**
 * Renders a form from the schema. No Inertia, no fetching (spec §4).
 *
 * It OPENS WITH NO NETWORK REQUEST. The field definitions arrived with the page
 * and the option lists arrived with the data, so showing this is local state.
 * antipatterns §3.0.3: a Filament action modal fetches its form from the server
 * when opened, which puts network latency in front of a confirmation dialog.
 *
 * Errors are passed in rather than derived. They come from the SAME Laravel
 * rules the server enforces, so the client never carries a second copy to drift
 * out of step. Today they arrive on submit; live per-keystroke validation needs
 * a Precognition client that supports Inertia 3, which does not exist yet.
 */
import { computed } from 'vue'

export interface FormField {
    key: string
    label: string
    type: 'text' | 'textarea' | 'number' | 'select' | 'toggle' | 'date' | 'datetime'
    required?: boolean
    help?: string
    placeholder?: string
    disabled?: boolean
    span?: number
    inputType?: string
    rows?: number
    min?: number
    max?: number
}

const props = withDefaults(
    defineProps<{
        fields: FormField[]
        columns?: number
        modelValue: Record<string, any>
        /** Keyed by field name, from the server. */
        errors?: Record<string, string>
        /** Tenant data: option lists keyed by field name. */
        options?: Record<string, { value: any; label: string }[]>
        processing?: boolean
    }>(),
    { columns: 1, errors: () => ({}), options: () => ({}), processing: false },
)

/**
 * Emits ONE FIELD at a time, not a whole replacement object.
 *
 * Emitting `{ ...modelValue, [key]: value }` looks tidier and is subtly broken:
 * the spread reads the parent's value, which has not been updated yet when two
 * fields change in the same tick. Autofill, paste-into-multiple-fields and any
 * programmatic fill then keep only the LAST change and silently discard the
 * rest — which is exactly how this was caught, filling five fields and watching
 * four revert.
 */
const emit = defineEmits<{ (e: 'change', key: string, value: unknown): void }>()

function set(key: string, value: unknown) {
    emit('change', key, value)
}

const gridClass = computed(() => (props.columns >= 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'))

/**
 * A conflict is reported as a field error under `_conflict` so it surfaces
 * inline with everything else rather than as a frozen page (antipatterns §2.2).
 */
const conflict = computed(() => props.errors._conflict)
</script>

<template>
    <div class="flex flex-col gap-4">
        <p
            v-if="conflict"
            class="border-destructive/40 bg-destructive/10 text-destructive rounded-md border px-3 py-2 text-sm"
            role="alert"
        >
            {{ conflict }}
        </p>

        <div class="grid grid-cols-1 gap-4" :class="gridClass">
            <div
                v-for="field in fields"
                :key="field.key"
                class="flex flex-col gap-1.5"
                :class="field.span && field.span >= 2 ? 'sm:col-span-2' : ''"
            >
                <label :for="`f-${field.key}`" class="text-sm font-medium">
                    {{ field.label }}
                    <span v-if="field.required" class="text-destructive" aria-hidden="true">*</span>
                </label>

                <select
                    v-if="field.type === 'select'"
                    :id="`f-${field.key}`"
                    :value="modelValue[field.key] ?? ''"
                    :disabled="field.disabled || processing"
                    :aria-invalid="!!errors[field.key]"
                    class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                    @change="set(field.key, ($event.target as HTMLSelectElement).value || null)"
                >
                    <option value="">—</option>
                    <option v-for="opt in options[field.key] ?? []" :key="String(opt.value)" :value="opt.value">
                        {{ opt.label }}
                    </option>
                </select>

                <label v-else-if="field.type === 'toggle'" class="flex items-center gap-2 text-sm">
                    <input
                        :id="`f-${field.key}`"
                        type="checkbox"
                        class="accent-primary size-4"
                        :checked="!!modelValue[field.key]"
                        :disabled="field.disabled || processing"
                        @change="set(field.key, ($event.target as HTMLInputElement).checked)"
                    />
                    <span class="text-muted-foreground">{{ field.help ?? 'Enabled' }}</span>
                </label>

                <textarea
                    v-else-if="field.type === 'textarea'"
                    :id="`f-${field.key}`"
                    :value="modelValue[field.key] ?? ''"
                    :rows="field.rows ?? 3"
                    :placeholder="field.placeholder"
                    :disabled="field.disabled || processing"
                    :aria-invalid="!!errors[field.key]"
                    class="border-input bg-background focus-visible:ring-ring rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                    @input="set(field.key, ($event.target as HTMLTextAreaElement).value)"
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
                    :value="modelValue[field.key] ?? ''"
                    :placeholder="field.placeholder"
                    :min="field.min"
                    :max="field.max"
                    :disabled="field.disabled || processing"
                    :aria-invalid="!!errors[field.key]"
                    class="border-input bg-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                    @input="set(field.key, ($event.target as HTMLInputElement).value)"
                />

                <p v-if="errors[field.key]" class="text-destructive text-xs" role="alert">
                    {{ errors[field.key] }}
                </p>
                <p v-else-if="field.help && field.type !== 'toggle'" class="text-muted-foreground text-xs">
                    {{ field.help }}
                </p>
            </div>
        </div>
    </div>
</template>
