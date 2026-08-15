<script setup lang="ts">
/**
 * Cards plus a register table: the same rows as a grid and as a DataTable.
 *
 * A rental board, a locker list, a desk book. Status cells use PkStatusBadge.
 */
import { computed, ref } from 'vue'
import PkHeading from '../primitives/PkHeading.vue'
import PkStatusBadge from '../primitives/PkStatusBadge.vue'
import DataTable from '../DataTable/DataTable.vue'
import type { TableColumn } from '../DataTable/types'
import CatalogGrid from './CatalogGrid.vue'
import {
    emptyCatalogFilters,
    matchCatalogItem,
} from './catalogFilter'
import type { CatalogFacet, CatalogFilters } from './catalogFilter'
import type { CatalogItem } from './CatalogCard.vue'

const props = withDefaults(
    defineProps<{
        title?: string
        description?: string | null
        cardsTitle?: string
        cardsDescription?: string | null
        tableTitle?: string
        tableDescription?: string | null
        cards?: CatalogItem[]
        facets?: CatalogFacet[]
        rows?: Record<string, unknown>[]
        columns?: TableColumn[]
        searchPlaceholder?: string
        emptyTitle?: string
        embedded?: boolean
    }>(),
    {
        title: 'Register',
        description: null,
        cardsTitle: 'Units',
        cardsDescription: null,
        tableTitle: 'Register',
        tableDescription: null,
        cards: () => [],
        facets: () => [],
        rows: () => [],
        columns: () => [],
        searchPlaceholder: 'Search…',
        emptyTitle: 'Nothing here',
        embedded: false,
    },
)

const emit = defineEmits<{
    select: [key: string]
    cart: [key: string]
}>()

const filters = ref<CatalogFilters>(emptyCatalogFilters())

const visibleCards = computed(() =>
    props.cards.filter((item) => matchCatalogItem(item, filters.value)),
)
</script>

<template>
    <div
        class="flex w-full flex-col gap-10"
        :class="embedded ? '' : 'mx-auto max-w-6xl p-4 sm:p-6'"
    >
        <PkHeading :title="title" :description="description ?? undefined" />

        <section class="flex flex-col gap-4">
            <PkHeading
                variant="small"
                :title="cardsTitle"
                :description="cardsDescription ?? undefined"
            />
            <CatalogGrid
                searchable
                layout-toggle
                :search-placeholder="searchPlaceholder"
                :facets="facets"
                :items="visibleCards"
                @filter="filters = $event"
                @select="emit('select', $event)"
                @cart="emit('cart', $event)"
            />
        </section>

        <section class="flex flex-col gap-4">
            <PkHeading
                variant="small"
                :title="tableTitle"
                :description="tableDescription ?? undefined"
            />
            <DataTable :columns="columns" :rows="rows" :empty-title="emptyTitle">
                <template #cell:status="{ value }">
                    <PkStatusBadge :status="String(value)">{{ value }}</PkStatusBadge>
                </template>
            </DataTable>
        </section>
    </div>
</template>
