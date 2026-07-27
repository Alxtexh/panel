<script setup lang="ts">
/**
 * Search, a filter panel, and a column panel.
 *
 * FILTERS ARE STAGED, NOT INSTANT. Picking a value edits a local draft; nothing
 * reaches the server until Apply. Two reasons, and the second matters more:
 *
 *   1. Choosing four filters used to cost four round trips and four table
 *      repaints, with the list rearranging under the cursor between each one.
 *      Staged, it costs one.
 *   2. Multi-value filters are not expressible one click at a time. "Expired OR
 *      suspended, created this month" is a single question, and applying it in
 *      pieces briefly shows answers to questions nobody asked.
 *
 * Search stays instant and debounced, because typing IS the interaction — there
 * is nothing to batch.
 *
 * Opening either panel makes no network request: the filter schema arrived with
 * the page and option lists with the data (antipatterns §3.0.3).
 *
 * Emits only. Never fetches (spec §4 rule 2).
 */
import { computed, ref, watch } from 'vue'
import PkDropdown from '../primitives/PkDropdown.vue'
import type { FilterSchema } from './types'

const props = withDefaults(
    defineProps<{
        search: string
        searchPlaceholder?: string
        searchHint?: string
        filterSchema: FilterSchema[]
        filters: Record<string, unknown>
        columns: { key: string; label: string; locked?: boolean }[]
        hidden: Set<string>
        loading?: boolean
    }>(),
    { searchPlaceholder: 'Search…', loading: false },
)

const emit = defineEmits<{
    (e: 'update:search', value: string): void
    /** The whole filter set at once, so Apply is one request. */
    (e: 'apply-filters', filters: Record<string, unknown>): void
    (e: 'apply-columns', hidden: string[]): void
    (e: 'clear'): void
}>()

/* ------------------------------------------------------------------ search */

const local = ref(props.search)

watch(
    () => props.search,
    (value) => {
        if (value !== local.value) local.value = value
    },
)

let timer: ReturnType<typeof setTimeout> | undefined
watch(local, (value) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        if (value !== props.search) emit('update:search', value)
    }, 250)
})

/* ------------------------------------------------------------------ filters */

/** Local draft. The applied set only changes on Apply. */
const draft = ref<Record<string, unknown>>({ ...props.filters })

// Re-sync when the server echoes a different set back — a back-button
// navigation, or another control clearing everything.
watch(
    () => props.filters,
    (applied) => {
        draft.value = { ...applied }
    },
    { deep: true },
)

/** `!== null` and not truthiness — `false` is an applied value for a toggle. */
const activeCount = computed(
    () => props.filterSchema.filter((f) => props.filters[f.key] !== null && props.filters[f.key] !== undefined).length,
)

const draftDiffers = computed(() => JSON.stringify(draft.value) !== JSON.stringify(props.filters))

const hasAnything = computed(() => props.search !== '' || activeCount.value > 0)

function isMulti(filter: FilterSchema): boolean {
    return filter.type === 'multiselect'
}

function draftValues(filter: FilterSchema): unknown[] {
    const value = draft.value[filter.key]

    return Array.isArray(value) ? value : value === null || value === undefined ? [] : [value]
}

function isChosen(filter: FilterSchema, value: unknown): boolean {
    if (isMulti(filter)) return draftValues(filter).includes(value)

    return draft.value[filter.key] === value
}

function toggleChip(filter: FilterSchema, value: unknown) {
    const current = draftValues(filter)
    const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value]

    // Empty means "no filter", never "match nothing".
    draft.value = { ...draft.value, [filter.key]: next.length ? next : null }
}

function setValue(filter: FilterSchema, value: unknown) {
    draft.value = { ...draft.value, [filter.key]: value === '' ? null : value }
}

/** Date ranges carry a preset name, or an explicit from..to pair. */
function rangePart(filter: FilterSchema, part: 'from' | 'to'): string {
    const value = draft.value[filter.key] as { raw?: string } | string | null

    if (typeof value !== 'string' || !value.includes('..')) return ''

    const [from, to] = value.split('..')

    return part === 'from' ? (from ?? '') : (to ?? '')
}

function setRangePart(filter: FilterSchema, part: 'from' | 'to', value: string) {
    const from = part === 'from' ? value : rangePart(filter, 'from')
    const to = part === 'to' ? value : rangePart(filter, 'to')

    // Both halves are needed before the range means anything; until then the
    // filter stays unset rather than half-applied.
    draft.value = { ...draft.value, [filter.key]: from && to ? `${from}..${to}` : null }
}

function applyFilters(close: () => void) {
    emit('apply-filters', { ...draft.value })
    close()
}

function resetFilters() {
    draft.value = Object.fromEntries(props.filterSchema.map((f) => [f.key, null]))
}

function optionsFor(filter: FilterSchema): { value: unknown; label: string }[] {
    if (filter.type === 'boolean') {
        return [
            { value: true, label: filter.trueLabel ?? 'Yes' },
            { value: false, label: filter.falseLabel ?? 'No' },
        ]
    }

    if (filter.type === 'daterange') {
        return Object.entries(filter.presets ?? {}).map(([value, label]) => ({ value, label }))
    }

    return (filter.options ?? []).map((o) => ({ value: o, label: o }))
}

/* ------------------------------------------------------------------ columns */

const columnDraft = ref<Set<string>>(new Set(props.hidden))

watch(
    () => props.hidden,
    (hidden) => {
        columnDraft.value = new Set(hidden)
    },
    { deep: true },
)

function toggleColumnDraft(key: string) {
    const next = new Set(columnDraft.value)
    next.has(key) ? next.delete(key) : next.add(key)
    columnDraft.value = next
}

function applyColumns(close: () => void) {
    emit('apply-columns', [...columnDraft.value])
    close()
}

/** Clearing resets the local search box too, or it keeps a stale term. */
function clearEverything() {
    local.value = ''
    emit('clear')
}
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <!-- Geometry deliberately identical to the topbar search: two search
             boxes that are almost-but-not-quite alike read as inconsistency. -->
        <div class="relative min-w-0 flex-1 sm:w-72 sm:flex-none">
            <svg
                class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
            </svg>
            <input
                v-model="local"
                type="search"
                :placeholder="searchPlaceholder"
                :title="searchHint"
                :aria-label="searchHint ?? searchPlaceholder"
                class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-9 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
            />
            <button
                v-if="local"
                type="button"
                class="text-muted-foreground hover:text-foreground absolute top-1/2 right-2 -translate-y-1/2"
                aria-label="Clear search"
                @click="local = ''"
            >
                <svg viewBox="0 0 24 24" class="size-3.5" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Filters -->
        <PkDropdown v-if="filterSchema.length" width="w-80">
            <template #trigger>
                <button
                    type="button"
                    class="border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
                    :class="activeCount ? 'border-primary text-primary' : ''"
                    :aria-label="activeCount ? `Filters (${activeCount} active)` : 'Filters'"
                    title="Filters"
                >
                    <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <path d="M3 5h18M6 12h12M10 19h4" />
                    </svg>
                    <span
                        v-if="activeCount"
                        class="bg-primary text-primary-foreground absolute -top-1.5 -right-1.5 inline-flex size-4 items-center justify-center rounded-full text-[10px] tabular-nums"
                    >
                        {{ activeCount }}
                    </span>
                </button>
            </template>

            <template #panel="{ close }">
                <div class="flex items-center justify-between px-1 pt-1 pb-2">
                    <span class="text-sm font-semibold">Filters</span>
                    <button class="text-destructive text-xs hover:underline" @click="resetFilters">Reset</button>
                </div>

                <p class="text-muted-foreground px-1 pb-3 text-xs">
                    Select one or more — all chosen filters must match.
                </p>

                <div class="flex max-h-96 flex-col gap-4 overflow-y-auto px-1 pb-3">
                    <div v-for="filter in filterSchema" :key="filter.key" class="flex flex-col gap-1.5">
                        <label class="text-xs font-medium">{{ filter.label }}</label>

                        <!-- Multi-value: chips, because a stack of checkboxes
                             hides how many are chosen and a multi-select box
                             hides the options. -->
                        <div v-if="isMulti(filter)" class="flex flex-wrap gap-1.5">
                            <button
                                v-for="opt in optionsFor(filter)"
                                :key="String(opt.value)"
                                type="button"
                                class="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs capitalize transition-colors"
                                :class="
                                    isChosen(filter, opt.value)
                                        ? 'border-primary bg-primary/10 text-primary font-medium'
                                        : 'border-input hover:bg-accent'
                                "
                                @click="toggleChip(filter, opt.value)"
                            >
                                <svg
                                    v-if="isChosen(filter, opt.value)"
                                    viewBox="0 0 24 24"
                                    class="size-3"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3.5"
                                >
                                    <path d="m5 13 4 4L19 7" />
                                </svg>
                                {{ opt.label }}
                            </button>
                        </div>

                        <!-- Date range: presets plus an explicit pair. -->
                        <template v-else-if="filter.type === 'daterange'">
                            <select
                                :value="typeof draft[filter.key] === 'string' && !String(draft[filter.key]).includes('..') ? draft[filter.key] : ''"
                                class="border-input bg-background h-9 rounded-md border px-3 text-sm"
                                @change="setValue(filter, ($event.target as HTMLSelectElement).value)"
                            >
                                <option value="">Any time</option>
                                <option v-for="opt in optionsFor(filter)" :key="String(opt.value)" :value="opt.value">
                                    {{ opt.label }}
                                </option>
                            </select>

                            <div class="grid grid-cols-2 gap-2">
                                <input
                                    type="date"
                                    :value="rangePart(filter, 'from')"
                                    aria-label="From"
                                    class="border-input bg-background h-9 rounded-md border px-2 text-xs"
                                    @change="setRangePart(filter, 'from', ($event.target as HTMLInputElement).value)"
                                />
                                <input
                                    type="date"
                                    :value="rangePart(filter, 'to')"
                                    aria-label="To"
                                    class="border-input bg-background h-9 rounded-md border px-2 text-xs"
                                    @change="setRangePart(filter, 'to', ($event.target as HTMLInputElement).value)"
                                />
                            </div>
                        </template>

                        <!-- Boolean: a real toggle, since three states as a
                             dropdown reads worse than a switch plus "Any". -->
                        <div v-else-if="filter.type === 'boolean'" class="flex items-center gap-2">
                            <button
                                type="button"
                                role="switch"
                                :aria-checked="draft[filter.key] === true"
                                class="relative h-5 w-9 shrink-0 rounded-full transition-colors"
                                :class="draft[filter.key] === true ? 'bg-primary' : 'bg-muted-foreground/30'"
                                @click="setValue(filter, draft[filter.key] === true ? null : true)"
                            >
                                <span
                                    class="bg-background absolute top-0.5 size-4 rounded-full transition-all"
                                    :class="draft[filter.key] === true ? 'left-4.5' : 'left-0.5'"
                                />
                            </button>
                            <span class="text-xs">{{ filter.trueLabel ?? 'Yes' }}</span>

                            <button
                                type="button"
                                class="text-muted-foreground ml-auto text-xs hover:underline"
                                :class="draft[filter.key] === false ? 'text-primary font-medium' : ''"
                                @click="setValue(filter, draft[filter.key] === false ? null : false)"
                            >
                                {{ filter.falseLabel ?? 'No' }} only
                            </button>
                        </div>

                        <!-- Single choice. -->
                        <select
                            v-else
                            :value="(draft[filter.key] as string) ?? ''"
                            class="border-input bg-background h-9 rounded-md border px-3 text-sm capitalize"
                            @change="setValue(filter, ($event.target as HTMLSelectElement).value)"
                        >
                            <option value="">All</option>
                            <option v-for="opt in optionsFor(filter)" :key="String(opt.value)" :value="opt.value">
                                {{ opt.label }}
                            </option>
                        </select>
                    </div>
                </div>

                <button
                    type="button"
                    class="bg-primary text-primary-foreground hover:bg-primary/90 mt-1 h-9 w-full rounded-md text-sm font-medium transition-colors disabled:opacity-50"
                    :disabled="!draftDiffers"
                    @click="applyFilters(close)"
                >
                    Apply filters
                </button>
            </template>
        </PkDropdown>

        <!-- Columns -->
        <PkDropdown width="w-60">
            <template #trigger>
                <button
                    type="button"
                    class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
                    aria-label="Columns"
                    title="Columns"
                >
                    <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="16" rx="2" />
                        <path d="M9 4v16M15 4v16" />
                    </svg>
                </button>
            </template>

            <template #panel="{ close }">
                <div class="flex items-center justify-between px-1 pt-1 pb-2">
                    <span class="text-sm font-semibold">Columns</span>
                    <button class="text-destructive text-xs hover:underline" @click="columnDraft = new Set()">
                        Reset
                    </button>
                </div>

                <div class="flex max-h-80 flex-col gap-0.5 overflow-y-auto px-1 pb-3">
                    <label
                        v-for="col in columns"
                        :key="col.key"
                        class="hover:bg-accent flex items-center gap-2.5 rounded px-2 py-1.5 text-sm"
                        :class="col.locked ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'"
                    >
                        <!-- A real checkbox, not a tick glyph: it carries its own
                             disabled and indeterminate semantics, and screen
                             readers already know what it is. -->
                        <input
                            type="checkbox"
                            class="accent-primary size-4"
                            :checked="!columnDraft.has(col.key)"
                            :disabled="col.locked"
                            @change="toggleColumnDraft(col.key)"
                        />
                        {{ col.label }}
                    </label>
                </div>

                <button
                    type="button"
                    class="bg-primary text-primary-foreground hover:bg-primary/90 h-9 w-full rounded-md text-sm font-medium transition-colors"
                    @click="applyColumns(close)"
                >
                    Apply columns
                </button>
            </template>
        </PkDropdown>

        <button
            v-if="hasAnything"
            type="button"
            class="text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline"
            @click="clearEverything"
        >
            Clear
        </button>

        <span v-if="loading" class="text-muted-foreground shrink-0 text-xs">Loading…</span>
    </div>
</template>
