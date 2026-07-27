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

import { onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        field: FormField
        value: unknown
        error?: string
        options?: { value: any; label: string }[]
        processing?: boolean
        /**
         * Supplied only for a SEARCHABLE select. The component never fetches
         * itself — @panelkit/ui ships no HTTP client (spec §4 rule 2).
         */
        searchOptions?: (term: string) => Promise<{ value: any; label: string }[]>
    }>(),
    { options: () => [], processing: false },
)

const emit = defineEmits<{ (e: 'change', value: unknown): void }>()

/* ----------------------------------------------------- searchable select */

const open = ref(false)
const term = ref('')
const results = ref<{ value: any; label: string }[]>([])
const searching = ref(false)
/** The chosen option's label, kept so the closed control shows a name not an id. */
const chosenLabel = ref<string | null>(null)

let debounce: ReturnType<typeof setTimeout> | undefined

watch(term, (value) => {
    if (!props.searchOptions) return

    clearTimeout(debounce)
    searching.value = true

    debounce = setTimeout(async () => {
        try {
            results.value = await props.searchOptions!(value)
        } catch {
            // A failed lookup leaves the previous results rather than blanking
            // the list, which would read as "no such plan exists".
        } finally {
            searching.value = false
        }
    }, 200)
})

async function openSearch() {
    if (props.processing || props.field.disabled) return

    open.value = true

    if (results.value.length === 0 && props.searchOptions) {
        searching.value = true
        try {
            results.value = await props.searchOptions('')
        } finally {
            searching.value = false
        }
    }
}

function pick(option: { value: any; label: string }) {
    chosenLabel.value = option.label
    emit('change', option.value)
    open.value = false
    term.value = ''
}

function clearChoice() {
    chosenLabel.value = null
    emit('change', null)
}

onBeforeUnmount(() => clearTimeout(debounce))
</script>

<template>
    <div class="flex flex-col gap-1.5">
        <label :for="`f-${field.key}`" class="text-sm font-medium">
            {{ field.label }}
            <span v-if="field.required" class="text-destructive" aria-hidden="true">*</span>
        </label>

        <!--
            Searchable select. Options are fetched on demand rather than rendered
            inline, which is what makes a relation with 100k rows pickable at all
            — the alternative ships 100,000 option elements to every browser.
        -->
        <div v-if="field.type === 'select' && searchOptions" class="relative">
            <button
                type="button"
                class="border-input bg-background focus-visible:ring-ring flex h-9 w-full items-center justify-between rounded-md border px-3 text-left text-sm focus-visible:ring-2 focus-visible:outline-none disabled:opacity-50"
                :disabled="field.disabled || processing"
                :aria-invalid="!!error"
                @click="openSearch"
            >
                <span :class="chosenLabel || value ? '' : 'text-muted-foreground'">
                    {{ chosenLabel ?? (value ? String(value) : 'Search…') }}
                </span>
                <span
                    v-if="value"
                    class="text-muted-foreground hover:text-foreground ml-2 text-xs"
                    role="button"
                    aria-label="Clear selection"
                    @click.stop="clearChoice"
                >
                    ✕
                </span>
            </button>

            <div
                v-if="open"
                class="bg-popover absolute z-50 mt-1 w-full overflow-hidden rounded-md border shadow-md"
            >
                <input
                    v-model="term"
                    type="search"
                    class="h-9 w-full border-b bg-transparent px-3 text-sm outline-none"
                    placeholder="Type to search…"
                    autofocus
                />

                <div class="max-h-56 overflow-y-auto p-1">
                    <p v-if="searching" class="text-muted-foreground px-2 py-2 text-xs">Searching…</p>
                    <p v-else-if="results.length === 0" class="text-muted-foreground px-2 py-2 text-xs">
                        No matches
                    </p>
                    <button
                        v-for="opt in results"
                        :key="String(opt.value)"
                        type="button"
                        class="hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm"
                        @click="pick(opt)"
                    >
                        {{ opt.label }}
                    </button>
                </div>
            </div>

            <!-- Closes on an outside click without a global listener. -->
            <div v-if="open" class="fixed inset-0 z-40" @click="open = false" />
        </div>

        <select
            v-else-if="field.type === 'select'"
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
