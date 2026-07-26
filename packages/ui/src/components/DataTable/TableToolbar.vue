<script setup lang="ts">
/**
 * Search box, one filter dropdown holding every filter, and a column-visibility
 * dropdown.
 *
 * Shape borrowed from Filament, cost model deliberately not: Filament
 * round-trips to the server to re-render its filter dropdown. Here the dropdown
 * is local state and only an APPLIED filter costs a request (antipatterns
 * 3.0.3 — opening a control must make no network request).
 *
 * Filters render from the server's `filterSchema`, so adding a filter is a PHP
 * change with no Vue change.
 *
 * Each filter is a COLLAPSIBLE SECTION, not a flat list. With three or four
 * filters a flat list becomes a long single column that overflows the viewport
 * and buries the last filter. One section open at a time keeps the panel a fixed
 *, scannable size however many filters a resource declares.
 *
 * Icons are inline SVG rather than a glyph or an icon package: a text glyph
 * renders in the user's font and reads as a character, and an icon dependency
 * would break this package's rule of having no UI dependencies at all.
 *
 * Emits only. It never fetches (spec §4 rule 2).
 */
import { computed, ref, watch } from 'vue'
import PkDropdown from '../primitives/PkDropdown.vue'
import type { FilterSchema } from './types'

const props = withDefaults(
    defineProps<{
        search: string
        searchPlaceholder?: string
        /** Names the fields search actually covers, so it is not a guess. */
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
    (e: 'filter', key: string, value: unknown): void
    (e: 'toggle-column', key: string): void
    (e: 'reset-filters'): void
    (e: 'reset-columns'): void
    (e: 'clear'): void
}>()

const local = ref(props.search)

/** Which filter section is expanded. Only one, to keep the panel compact. */
const openSection = ref<string | null>(null)

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

/** `!== null` and not a truthiness check — `false` is an applied value. */
const activeCount = computed(
    () => props.filterSchema.filter((f) => props.filters[f.key] !== null && props.filters[f.key] !== undefined).length,
)

const hasAnything = computed(() => props.search !== '' || activeCount.value > 0)

function isSelected(filter: FilterSchema, value: unknown): boolean {
    return props.filters[filter.key] === value
}

/** Selecting the already-applied value clears it, so options toggle. */
function choose(filter: FilterSchema, value: unknown) {
    emit('filter', filter.key, isSelected(filter, value) ? null : value)
}

function toggleSection(key: string) {
    openSection.value = openSection.value === key ? null : key
}

/** The applied value of a filter, rendered for its chip. */
function labelFor(filter: FilterSchema): string {
    const value = props.filters[filter.key]

    if (filter.type === 'boolean') {
        return value ? (filter.trueLabel ?? 'Yes') : (filter.falseLabel ?? 'No')
    }

    return String(value)
}

function optionsFor(filter: FilterSchema): { value: unknown; label: string }[] {
    if (filter.type === 'boolean') {
        return [
            { value: true, label: filter.trueLabel ?? 'Yes' },
            { value: false, label: filter.falseLabel ?? 'No' },
        ]
    }

    return (filter.options ?? []).map((o) => ({ value: o, label: o }))
}

function clearAll() {
    local.value = ''
    emit('clear')
}
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <div class="relative min-w-0 flex-1 sm:max-w-xs">
            <svg
                class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
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
                class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-8 pl-8 text-sm focus-visible:ring-2 focus-visible:outline-none"
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

        <!-- Filters — icon only, count badge when anything is applied. -->
        <PkDropdown v-if="filterSchema.length" width="w-60">
            <template #trigger>
                <button
                    type="button"
                    class="border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
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

            <template #panel>
                <div class="flex items-center justify-between px-2 py-1.5">
                    <span class="text-sm font-medium">Filters</span>
                    <button
                        v-if="activeCount"
                        class="text-muted-foreground hover:text-foreground text-xs"
                        @click="emit('reset-filters')"
                    >
                        Reset
                    </button>
                </div>

                <div class="max-h-80 overflow-y-auto border-t pt-1">
                    <div v-for="filter in filterSchema" :key="filter.key">
                        <button
                            class="hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded px-2 py-1.5 text-left text-sm"
                            @click="toggleSection(filter.key)"
                        >
                            <span class="flex items-center gap-1.5">
                                {{ filter.label }}
                                <span
                                    v-if="filters[filter.key] !== null && filters[filter.key] !== undefined"
                                    class="bg-primary size-1.5 rounded-full"
                                />
                            </span>
                            <svg
                                viewBox="0 0 24 24"
                                class="size-3.5 transition-transform"
                                :class="openSection === filter.key ? 'rotate-90' : ''"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                            >
                                <path d="m9 6 6 6-6 6" />
                            </svg>
                        </button>

                        <div v-if="openSection === filter.key" class="mb-1 ml-2 border-l pl-1">
                            <button
                                v-for="opt in optionsFor(filter)"
                                :key="String(opt.value)"
                                class="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm capitalize"
                                @click="choose(filter, opt.value)"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    class="size-3.5 shrink-0"
                                    :class="isSelected(filter, opt.value) ? 'opacity-100' : 'opacity-0'"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="3"
                                >
                                    <path d="m5 13 4 4L19 7" />
                                </svg>
                                <span class="truncate">{{ opt.label }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </PkDropdown>

        <!-- Columns — icon only. -->
        <PkDropdown width="w-48">
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

            <template #panel>
                <div class="flex items-center justify-between px-2 py-1.5">
                    <span class="text-sm font-medium">Columns</span>
                    <button
                        v-if="hidden.size"
                        class="text-muted-foreground hover:text-foreground text-xs"
                        @click="emit('reset-columns')"
                    >
                        Reset
                    </button>
                </div>

                <div class="max-h-80 overflow-y-auto border-t pt-1">
                    <button
                        v-for="col in columns"
                        :key="col.key"
                        :disabled="col.locked"
                        class="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm disabled:opacity-50"
                        @click="!col.locked && emit('toggle-column', col.key)"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="size-3.5 shrink-0"
                            :class="hidden.has(col.key) ? 'opacity-0' : 'opacity-100'"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="3"
                        >
                            <path d="m5 13 4 4L19 7" />
                        </svg>
                        {{ col.label }}
                    </button>
                </div>
            </template>
        </PkDropdown>

        <button
            v-if="hasAnything"
            type="button"
            class="text-muted-foreground hover:text-foreground shrink-0 text-xs underline-offset-2 hover:underline"
            @click="clearAll"
        >
            Clear
        </button>

        <span v-if="loading" class="text-muted-foreground shrink-0 text-xs">Loading…</span>
    </div>

    <!-- Applied filters as removable chips, so what is active is visible without
         opening the dropdown. Filament hides this behind the trigger badge. -->
    <div v-if="activeCount" class="flex flex-wrap items-center gap-1.5">
        <template v-for="filter in filterSchema" :key="filter.key">
            <span
                v-if="filters[filter.key] !== null && filters[filter.key] !== undefined"
                class="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs capitalize"
            >
                {{ filter.label }}: {{ labelFor(filter) }}
                <button :aria-label="`Remove ${filter.label} filter`" @click="emit('filter', filter.key, null)">
                    <svg viewBox="0 0 24 24" class="size-3" fill="none" stroke="currentColor" stroke-width="3">
                        <path d="M18 6 6 18M6 6l12 12" />
                    </svg>
                </button>
            </span>
        </template>
    </div>
</template>
