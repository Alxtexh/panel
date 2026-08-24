<script setup lang="ts">
/**
 * Catalog search, chips and ranges in a dashboard-shaped slideover.
 *
 * CatalogGrid still owns Tiles/List. The page owns applied filters; this
 * sheet stages a draft until Apply, the same rhythm as dashboard Filters.
 */
import { computed, reactive, ref, watch } from 'vue'
import PkButton from '../primitives/PkButton.vue'
import PkTextInput from '../primitives/PkTextInput.vue'
import PkSlideover from '../Overlay/PkSlideover.vue'
import { emptyCatalogFilters } from './catalogFilter'
import type { CatalogFacet, CatalogFilters, CatalogRangeValue } from './catalogFilter'

const props = withDefaults(
    defineProps<{
        open: boolean
        title?: string
        searchPlaceholder?: string
        /** Till keeps SKU search on the page; the sheet is chips only. */
        hideSearch?: boolean
        facets: CatalogFacet[]
        applied: CatalogFilters
        description?: string
    }>(),
    {
        title: 'Filters',
        searchPlaceholder: 'Search…',
        hideSearch: false,
        description: '',
    },
)

const emit = defineEmits<{
    close: []
    apply: [filters: CatalogFilters]
    reset: []
}>()

const query = ref('')
const selected = reactive<Record<string, string | null>>({})
const ranges = reactive<Record<string, { min: string; max: string }>>({})

const chipFacets = computed(() =>
    props.facets.filter((facet) => (facet.kind ?? 'chips') === 'chips'),
)
const rangeFacets = computed(() => props.facets.filter((facet) => facet.kind === 'range'))

function boundLabel(value: number | null | undefined): string {
    return value === null || value === undefined ? '' : String(value)
}

function seed(): void {
    query.value = props.applied.query ?? ''

    for (const key of Object.keys(selected)) {
        delete selected[key]
    }

    for (const [key, value] of Object.entries(props.applied.selected ?? {})) {
        selected[key] = value
    }

    for (const key of Object.keys(ranges)) {
        delete ranges[key]
    }

    for (const [key, range] of Object.entries(props.applied.ranges ?? {})) {
        ranges[key] = { min: boundLabel(range.min), max: boundLabel(range.max) }
    }
}

watch(
    () => props.open,
    (isOpen) => {
        if (isOpen) {
            seed()
        }
    },
)

function parseBound(raw: string): number | null {
    const trimmed = raw.trim()

    if (trimmed === '') {
        return null
    }

    const parsed = Number(trimmed)

    return Number.isFinite(parsed) ? parsed : null
}

function parsedRanges(): Record<string, CatalogRangeValue> {
    const next: Record<string, CatalogRangeValue> = {}

    for (const [key, range] of Object.entries(ranges)) {
        next[key] = { min: parseBound(range.min), max: parseBound(range.max) }
    }

    return next
}

function current(): CatalogFilters {
    return {
        query: props.hideSearch ? props.applied.query : query.value,
        selected: { ...selected },
        ranges: parsedRanges(),
    }
}

const changeCount = computed(() => {
    let count = props.hideSearch || query.value.trim() === '' ? 0 : 1

    for (const value of Object.values(selected)) {
        if (value) {
            count += 1
        }
    }

    for (const range of Object.values(parsedRanges())) {
        if (range.min !== null || range.max !== null) {
            count += 1
        }
    }

    return count
})

function toggleFacet(key: string, value: string): void {
    selected[key] = selected[key] === value ? null : value
}

function rangeDraft(key: string): { min: string; max: string } {
    return ranges[key] ?? { min: '', max: '' }
}

function setRange(key: string, part: 'min' | 'max', value: string): void {
    const draft = ranges[key] ?? { min: '', max: '' }
    ranges[key] = { ...draft, [part]: value }
}

function apply(): void {
    emit('apply', current())
}

function reset(): void {
    query.value = ''

    for (const key of Object.keys(selected)) {
        selected[key] = null
    }

    for (const key of Object.keys(ranges)) {
        ranges[key] = { min: '', max: '' }
    }

    emit('reset')
    emit(
        'apply',
        props.hideSearch
            ? { ...emptyCatalogFilters(), query: props.applied.query }
            : emptyCatalogFilters(),
    )
}
</script>

<template>
    <PkSlideover
        :open="open"
        :title="title"
        :description="
            description ||
            (hideSearch
                ? 'Category and stock for this list'
                : 'Search, categories and ranges for this list')
        "
        size="sm"
        @close="emit('close')"
    >
        <div class="flex flex-col gap-6">
            <label v-if="!hideSearch" class="flex flex-col gap-1.5">
                <span class="text-sm font-semibold">Search</span>
                <PkTextInput
                    v-model="query"
                    type="search"
                    :placeholder="searchPlaceholder"
                    :aria-label="searchPlaceholder"
                />
            </label>

            <section
                v-for="facet in chipFacets"
                :key="facet.key"
                class="flex flex-col gap-2"
            >
                <h3 class="text-sm font-semibold">{{ facet.label ?? facet.key }}</h3>
                <div class="flex flex-wrap items-center gap-1.5">
                    <button
                        v-for="option in facet.options ?? []"
                        :key="option.value"
                        type="button"
                        class="rounded-full border px-2.5 py-1 text-xs transition-colors"
                        :class="
                            selected[facet.key] === option.value
                                ? 'border-foreground bg-foreground text-background'
                                : 'bg-background text-foreground hover:bg-muted/60'
                        "
                        :aria-pressed="selected[facet.key] === option.value ? 'true' : 'false'"
                        @click="toggleFacet(facet.key, option.value)"
                    >
                        {{ option.label }}
                    </button>
                </div>
            </section>

            <section
                v-for="facet in rangeFacets"
                :key="facet.key"
                class="flex flex-col gap-2"
            >
                <h3 class="text-sm font-semibold">{{ facet.label ?? facet.key }}</h3>
                <div class="flex flex-wrap items-center gap-1.5">
                    <PkTextInput
                        type="number"
                        class="h-8 w-24 px-2 text-xs"
                        placeholder="From"
                        :aria-label="`${facet.label ?? facet.key} from`"
                        :model-value="rangeDraft(facet.key).min"
                        @update:model-value="setRange(facet.key, 'min', String($event))"
                    />
                    <span class="text-muted-foreground text-xs font-normal">to</span>
                    <PkTextInput
                        type="number"
                        class="h-8 w-24 px-2 text-xs"
                        placeholder="To"
                        :aria-label="`${facet.label ?? facet.key} to`"
                        :model-value="rangeDraft(facet.key).max"
                        @update:model-value="setRange(facet.key, 'max', String($event))"
                    />
                </div>
            </section>
        </div>

        <template #footer>
            <button
                type="button"
                class="text-muted-foreground mr-auto text-xs hover:underline"
                @click="reset"
            >
                Reset all
            </button>
            <PkButton variant="outline" size="sm" @click="emit('close')">Cancel</PkButton>
            <PkButton size="sm" @click="apply">
                Apply<span v-if="changeCount"> ({{ changeCount }})</span>
            </PkButton>
        </template>
    </PkSlideover>
</template>
