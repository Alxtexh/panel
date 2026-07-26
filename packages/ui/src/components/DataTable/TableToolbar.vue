<script setup lang="ts">
/**
 * Search box, one filter dropdown holding every filter, and a column-visibility
 * dropdown.
 *
 * Shape borrowed from Filament, cost model deliberately not: Filament
 * round-trips to the server to re-render its filter dropdown. Here the dropdown
 * is local state and only an APPLIED filter costs a request.
 *
 * Filters render from the server's `filterSchema`, so adding a filter is a PHP
 * change with no Vue change — which is the whole point of the schema contract.
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
        filterSchema: FilterSchema[]
        /** Applied values keyed by filter key. null means "not applied". */
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

// Keep in step when the server echoes a different value back (e.g. the browser
// back button restoring a previous query string).
watch(
    () => props.search,
    (value) => {
        if (value !== local.value) local.value = value
    },
)

// Debounced so typing does not fire a request per keystroke.
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

/** Clearing resets the local search box too, or it would keep a stale term. */
function clearAll() {
    local.value = ''
    emit('clear')
}

function labelFor(filter: FilterSchema): string {
    const value = props.filters[filter.key]

    if (filter.type === 'boolean') {
        return value ? (filter.trueLabel ?? 'Yes') : (filter.falseLabel ?? 'No')
    }

    return String(value)
}
</script>

<template>
    <div class="flex flex-wrap items-center gap-2">
        <div class="relative min-w-0 flex-1 sm:flex-none">
            <span class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-sm">
                ⌕
            </span>
            <input
                v-model="local"
                type="search"
                :placeholder="searchPlaceholder"
                :aria-label="searchPlaceholder"
                class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border pr-3 pl-7 text-sm focus-visible:ring-2 focus-visible:outline-none sm:w-56"
            />
        </div>

        <!-- Filters: one dropdown, every filter, active count on the trigger. -->
        <PkDropdown v-if="filterSchema.length" width="w-56">
            <template #trigger>
                <button
                    type="button"
                    class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors"
                >
                    <span>⚟</span>
                    <span class="hidden sm:inline">Filters</span>
                    <span
                        v-if="activeCount"
                        class="bg-primary text-primary-foreground ml-0.5 inline-flex size-5 items-center justify-center rounded-full text-[10px] tabular-nums"
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

                <div v-for="filter in filterSchema" :key="filter.key" class="border-t pt-1 first:border-t-0">
                    <p class="text-muted-foreground px-2 py-1 text-[11px] tracking-wide uppercase">
                        {{ filter.label }}
                    </p>

                    <!-- Boolean filters render THREE states. "Inactive" must be
                         selectable on its own, not just "not active". -->
                    <template v-if="filter.type === 'boolean'">
                        <button
                            v-for="opt in [true, false]"
                            :key="String(opt)"
                            class="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm"
                            @click="choose(filter, opt)"
                        >
                            <span :class="isSelected(filter, opt) ? 'opacity-100' : 'opacity-0'">✓</span>
                            {{ opt ? (filter.trueLabel ?? 'Yes') : (filter.falseLabel ?? 'No') }}
                        </button>
                    </template>

                    <template v-else>
                        <button
                            v-for="opt in filter.options ?? []"
                            :key="opt"
                            class="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm capitalize"
                            @click="choose(filter, opt)"
                        >
                            <span :class="isSelected(filter, opt) ? 'opacity-100' : 'opacity-0'">✓</span>
                            <span class="truncate">{{ opt }}</span>
                        </button>
                    </template>
                </div>
            </template>
        </PkDropdown>

        <!-- Column visibility -->
        <PkDropdown width="w-48">
            <template #trigger>
                <button
                    type="button"
                    class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border px-3 text-sm transition-colors"
                >
                    <span>☰</span>
                    <span class="hidden sm:inline">Columns</span>
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

                <button
                    v-for="col in columns"
                    :key="col.key"
                    :disabled="col.locked"
                    class="hover:bg-accent hover:text-accent-foreground flex w-full items-center gap-2 rounded px-2 py-1.5 text-left text-sm disabled:opacity-50"
                    @click="!col.locked && emit('toggle-column', col.key)"
                >
                    <span :class="hidden.has(col.key) ? 'opacity-0' : 'opacity-100'">✓</span>
                    {{ col.label }}
                </button>
            </template>
        </PkDropdown>

        <button
            v-if="hasAnything"
            type="button"
            class="hover:bg-accent hover:text-accent-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md px-3 text-sm transition-colors"
            @click="clearAll"
        >
            <span>✕</span>
            <span class="hidden sm:inline">Clear</span>
        </button>

        <span v-if="loading" class="text-muted-foreground shrink-0 text-xs">Loading…</span>
    </div>

    <!-- Applied filters as removable chips, so what is active is visible without
         opening the dropdown. Filament hides this behind the trigger badge. -->
    <div v-if="activeCount" class="flex flex-wrap items-center gap-2">
        <template v-for="filter in filterSchema" :key="filter.key">
            <span
                v-if="filters[filter.key] !== null && filters[filter.key] !== undefined"
                class="bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs capitalize"
            >
                {{ filter.label }}: {{ labelFor(filter) }}
                <button :aria-label="`Remove ${filter.label} filter`" @click="emit('filter', filter.key, null)">
                    ✕
                </button>
            </span>
        </template>
    </div>
</template>
