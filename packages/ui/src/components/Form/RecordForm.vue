<script setup lang="ts">
/**
 * Renders a form from the schema. No Inertia, no fetching (spec §4).
 *
 * It OPENS WITH NO NETWORK REQUEST. Field definitions arrived with the page and
 * option lists with the data, so showing this is local state. antipatterns
 * §3.0.3: a Filament action modal fetches its form from the server when opened,
 * putting network latency in front of a confirmation dialog.
 *
 * Errors come from the SAME Laravel rules the server enforces, so the client
 * never carries a second copy to drift out of step. While typing, the page
 * POSTs field+values as JSON to the precognitive store/update route (the same
 * shape as live() form-state). There is no Livewire.
 *
 * Takes a TREE when the schema has one, and falls back to a flat field list
 * otherwise - so a resource that never declares layout keeps working unchanged.
 */
import { computed, provide } from 'vue'
import FormFieldControl from './FormFieldControl.vue'
import type { UploadedFileValue } from './PkFileUpload.vue'
import SchemaNode from './SchemaNode.vue'
import type { SchemaNode as SchemaNodeType } from './SchemaNode.vue'
import type { FormField } from './types'

const props = withDefaults(
    defineProps<{
        /** Layout tree. Preferred when present. */
        nodes?: SchemaNodeType[]
        /** Flat fallback, for a schema with no layout. */
        fields?: FormField[]
        columns?: number
        modelValue: Record<string, any>
        errors?: Record<string, string>
        options?: Record<string, { value: any; label: string }[]>
        processing?: boolean
        /** Supplied by the page; this package ships no HTTP client. */
        searchOptions?: (field: string, term: string) => Promise<{ value: any; label: string }[]>
        /** Performs an upload for a file field. See PkFileUpload. */
        upload?: (
            field: string,
            file: File,
            onProgress: (percent: number) => void,
        ) => Promise<UploadedFileValue>
        discard?: (handle: string) => Promise<void>
        /** Base URL of this form's resource, for tableSelect picker pages. */
        pickerBase?: string
        /** Path to return to after picking a row. */
        returnUrl?: string
        /** Create a related option without leaving the form. */
        createOption?: (
            field: string,
            values: Record<string, unknown>,
        ) => Promise<{ value: any; label: string }>
    }>(),
    {
        nodes: () => [],
        fields: () => [],
        columns: 1,
        errors: () => ({}),
        options: () => ({}),
        processing: false,
    },
)

provide('panelPicker', {
    get base() {
        return props.pickerBase ?? ''
    },
    get returnUrl() {
        return props.returnUrl ?? ''
    },
})

provide('panelCreateOption', {
    run(field: string, values: Record<string, unknown>) {
        if (!props.createOption) {
            return Promise.reject(new Error('Create is not available on this field.'))
        }

        return props.createOption(field, values)
    },
})

/**
 * Emits ONE FIELD at a time, not a whole replacement object.
 *
 * Emitting `{ ...modelValue, [key]: value }` looks tidier and is subtly broken:
 * the spread reads the parent's value, which has not updated yet when two fields
 * change in the same tick. Autofill and paste then keep only the LAST change and
 * silently discard the rest - caught by filling five fields and watching four
 * revert.
 */
const emit = defineEmits<{
    (e: 'change', key: string, value: unknown): void
}>()

const hasLayout = computed(() => props.nodes.length > 0)

const gridClass = computed(() => (props.columns >= 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'))

/** A conflict surfaces inline rather than as a frozen page (antipatterns §2.2). */
const conflict = computed(() => props.errors._conflict)

/**
 * Binds the field key into the page's upload function.
 *
 * A small indirection so the template does not have to carry an annotated
 * arrow - inline type annotations inside a template expression do not parse,
 * and the resulting error points at the attribute rather than at the cause.
 */
function uploadFor(key: string) {
    if (!props.upload) {
        return undefined
    }

    return (file: File, onProgress: (percent: number) => void) =>
        props.upload!(key, file, onProgress)
}
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

        <!-- Layout tree. -->
        <template v-if="hasLayout">
            <SchemaNode
                v-for="(node, i) in nodes"
                :key="i"
                :node="node"
                :values="modelValue"
                :errors="errors"
                :options="options"
                :processing="processing"
                :search-options="searchOptions"
                :upload="upload"
                :discard="discard"
                @change="(key, value) => emit('change', key, value)"
            />
        </template>

        <!-- Flat fallback. -->
        <div v-else class="grid grid-cols-1 gap-4" :class="gridClass">
            <FormFieldControl
                v-for="field in fields"
                :key="field.key"
                :field="field"
                :value="modelValue[field.key]"
                :error="errors[field.key]"
                :errors="errors"
                :options="options[field.key]"
                :child-options="options"
                :processing="processing"
                :search-options="
                    field.searchable && searchOptions
                        ? (term: string) => searchOptions!(field.key, term)
                        : undefined
                "
                :upload="uploadFor(field.key)"
                :discard="discard"
                :class="field.span && field.span >= 2 ? 'sm:col-span-2' : ''"
                @change="(value) => emit('change', field.key, value)"
            />
        </div>
    </div>
</template>
