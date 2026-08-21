<script setup lang="ts">
/**
 * A row of `CatalogCard`s, for a `catalog` chart or a merchandising strip.
 *
 * THE GRID IS THE WIDGET; THE CARD IS THE TILE. Splitting them lets a POS
 * page place one card in a till layout without inheriting a dashboard grid.
 *
 * SEARCH AND CHIPS LIVE HERE, not in DataTable's Filters dropdown. A till
 * operator filters a shelf in place; staging a panel and hitting Apply is the
 * wrong rhythm. The grid emits `filter` and does not slice the items itself.
 * The page owns the fake (or real) data.
 */
import { computed, reactive, ref, watch } from 'vue'
import { CATALOGUE_CONTAINER, CATALOGUE_GRID_TILES } from '../../lib/catalogueGrid'
import PkTextInput from '../primitives/PkTextInput.vue'
import { iconPath } from '../primitives/icons'
import CatalogCard, { type CatalogItem } from './CatalogCard.vue'
import type { CatalogFacet, CatalogFilters, CatalogRangeValue } from './catalogFilter'

const props = withDefaults(
    defineProps<{
        items: CatalogItem[]
        /** Show the search field. Off for a dashboard `catalog` chart. */
        searchable?: boolean
        searchPlaceholder?: string
        facets?: CatalogFacet[]
        /** Tiles vs compact rows. Off for a dashboard strip. */
        layoutToggle?: boolean
        /** Autofocus the search box, a till treating it as a scanner. */
        autofocus?: boolean
        /** Page size for the grid. Off when unset. */
        pageSize?: number | null
    }>(),
    {
        searchable: false,
        searchPlaceholder: 'Search…',
        facets: () => [],
        layoutToggle: false,
        autofocus: false,
        pageSize: null,
    },
)

const emit = defineEmits<{
    select: [key: string]
    cart: [key: string]
    filter: [filters: CatalogFilters]
    scan: [query: string]
}>()

const query = ref('')
const layout = defineModel<'grid' | 'list'>({ default: 'grid' })
const selected = reactive<Record<string, string | null>>({})
const ranges = reactive<Record<string, { min: string; max: string }>>({})

watch(query, () => emitFilter())

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

function currentFilters(): CatalogFilters {
    return { query: query.value, selected: { ...selected }, ranges: parsedRanges() }
}

function emitFilter(): void {
    emit('filter', currentFilters())
}

function toggleFacet(key: string, value: string): void {
    selected[key] = selected[key] === value ? null : value
    emitFilter()
}

function rangeDraft(key: string): { min: string; max: string } {
    return ranges[key] ?? { min: '', max: '' }
}

function setRange(key: string, part: 'min' | 'max', value: string): void {
    const draft = ranges[key] ?? { min: '', max: '' }
    ranges[key] = { ...draft, [part]: value }
    emitFilter()
}

function onSearchKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Enter') {
        return
    }

    event.preventDefault()
    emit('scan', query.value.trim())
}

const chipFacets = computed(() => props.facets.filter((facet) => (facet.kind ?? 'chips') === 'chips'))
const rangeFacets = computed(() => props.facets.filter((facet) => facet.kind === 'range'))

const showToolbar = computed(
    () => props.searchable || props.facets.length > 0 || props.layoutToggle,
)

const page = ref(1)

watch(
    () => props.items.map((item) => item.key).join(','),
    () => {
        page.value = 1
    },
)

const pageCount = computed(() => {
    const size = props.pageSize

    if (!size || size < 1) {
        return 1
    }

    return Math.max(1, Math.ceil(props.items.length / size))
})

const pagedItems = computed(() => {
    const size = props.pageSize

    if (!size || size < 1) {
        return props.items
    }

    const start = (page.value - 1) * size

    return props.items.slice(start, start + size)
})

function goTo(next: number) {
    page.value = Math.min(pageCount.value, Math.max(1, next))
}
</script>

<template>
    <div :class="['flex flex-col gap-4', CATALOGUE_CONTAINER]">
        <div v-if="showToolbar" data-slot="catalog-toolbar" class="flex flex-col gap-3">
            <div class="flex flex-wrap items-center gap-2 sm:flex-nowrap">
                <div v-if="searchable" class="relative min-w-0 max-w-sm flex-1">
                    <svg
                        class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <path :d="iconPath('search')" />
                    </svg>
                    <PkTextInput
                        v-model="query"
                        type="search"
                        :placeholder="searchPlaceholder"
                        class="pl-8"
                        :aria-label="searchPlaceholder"
                        :autofocus="autofocus || undefined"
                        @keydown="onSearchKeydown"
                    />
                </div>

                <slot name="toolbar" />

                <div
                    v-if="layoutToggle"
                    class="ml-auto inline-flex shrink-0 rounded-md border"
                    data-slot="catalog-layout"
                    role="group"
                    aria-label="Layout"
                >
                    <button
                        type="button"
                        class="px-2.5 py-1.5 text-xs transition-colors"
                        :class="
                            layout === 'grid'
                                ? 'bg-foreground text-background'
                                : 'hover:bg-muted/60'
                        "
                        :aria-pressed="layout === 'grid' ? 'true' : 'false'"
                        aria-label="Grid"
                        @click="layout = 'grid'"
                    >
                        Tiles
                    </button>
                    <button
                        type="button"
                        class="px-2.5 py-1.5 text-xs transition-colors"
                        :class="
                            layout === 'list'
                                ? 'bg-foreground text-background'
                                : 'hover:bg-muted/60'
                        "
                        :aria-pressed="layout === 'list' ? 'true' : 'false'"
                        aria-label="List"
                        @click="layout = 'list'"
                    >
                        List
                    </button>
                </div>
            </div>

            <div v-if="chipFacets.length || rangeFacets.length" class="flex flex-col gap-2">
                <div
                    v-for="facet in chipFacets"
                    :key="facet.key"
                    class="flex flex-wrap items-center gap-1.5"
                    :aria-label="facet.label ?? facet.key"
                >
                    <span v-if="facet.label" class="text-muted-foreground mr-1 text-xs font-medium">
                        {{ facet.label }}
                    </span>
                    <button
                        v-for="option in facet.options ?? []"
                        :key="option.value"
                        type="button"
                        class="rounded-full border px-2.5 py-1 text-xs transition-colors"
                        :class="
                            selected[facet.key] === option.value
                                ? 'bg-foreground text-background border-foreground'
                                : 'bg-background text-foreground hover:bg-muted/60'
                        "
                        :aria-pressed="selected[facet.key] === option.value ? 'true' : 'false'"
                        @click="toggleFacet(facet.key, option.value)"
                    >
                        {{ option.label }}
                    </button>
                </div>

                <div
                    v-for="facet in rangeFacets"
                    :key="facet.key"
                    class="flex flex-wrap items-center gap-1.5"
                    :aria-label="facet.label ?? facet.key"
                    data-slot="catalog-range"
                >
                    <span class="text-muted-foreground mr-1 text-xs font-medium">
                        {{ facet.label ?? facet.key }}
                    </span>
                    <PkTextInput
                        type="number"
                        class="h-8 w-24 px-2 text-xs"
                        placeholder="From"
                        :aria-label="`${facet.label ?? facet.key} from`"
                        :model-value="rangeDraft(facet.key).min"
                        @update:model-value="setRange(facet.key, 'min', String($event))"
                    />
                    <span class="text-muted-foreground text-xs">to</span>
                    <PkTextInput
                        type="number"
                        class="h-8 w-24 px-2 text-xs"
                        placeholder="To"
                        :aria-label="`${facet.label ?? facet.key} to`"
                        :model-value="rangeDraft(facet.key).max"
                        @update:model-value="setRange(facet.key, 'max', String($event))"
                    />
                </div>
            </div>
        </div>

        <p v-if="items.length === 0" class="text-muted-foreground text-sm">No matching items.</p>

        <div
            v-else
            :class="
                layout === 'list'
                    ? 'flex flex-col gap-3'
                    : CATALOGUE_GRID_TILES
            "
            :data-slot="layout === 'list' ? 'catalog-list' : 'catalog-grid'"
        >
            <CatalogCard
                v-for="item in pagedItems"
                :key="item.key"
                :item="item"
                :layout="layout"
                @select="emit('select', $event)"
                @cart="emit('cart', $event)"
            />
        </div>

        <div
            v-if="pageSize && pageCount > 1"
            class="flex items-center justify-between gap-3"
            data-slot="catalog-pagination"
        >
            <p class="text-muted-foreground text-xs tabular-nums">
                Page {{ page }} of {{ pageCount }}
            </p>
            <div class="flex items-center gap-2">
                <button
                    type="button"
                    class="rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40"
                    :disabled="page <= 1"
                    @click="goTo(page - 1)"
                >
                    Previous
                </button>
                <button
                    type="button"
                    class="rounded-md border bg-background px-2.5 py-1 text-xs font-medium disabled:opacity-40"
                    :disabled="page >= pageCount"
                    @click="goTo(page + 1)"
                >
                    Next
                </button>
            </div>
        </div>
    </div>
</template>
