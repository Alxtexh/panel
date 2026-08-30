<script setup lang="ts">
/**
 * Inertia cards + table register (leases, lockers, desks).
 */
import { Head, router } from '@inertiajs/vue3'
import { PAGE_SHELL, CatalogRegister } from '@alxtexh-enterprise/panel'
import type { CatalogFacet, CatalogItem, TableColumn } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    cards?: CatalogItem[]
    leases?: Record<string, unknown>[]
    rows?: Record<string, unknown>[]
    columns?: TableColumn[]
    facets?: CatalogFacet[]
    itemPath?: string
}>()

function openItem(key: string): void {
    const base = (props.itemPath ?? '').replace(/\/$/, '')

    if (!base) {
        return
    }

    router.visit(`${base}/${key}`)
}

const defaultColumns: TableColumn[] = [
    { key: 'tenant', label: 'Tenant', locked: true },
    { key: 'unit', label: 'Unit' },
    { key: 'start', label: 'Start' },
    { key: 'end', label: 'End' },
    { key: 'rent', label: 'Rent' },
    { key: 'deposit', label: 'Deposit' },
    { key: 'status', label: 'Status' },
]

const defaultFacets: CatalogFacet[] = [
    {
        key: 'status',
        label: 'Status',
        options: [
            { value: 'active', label: 'Active' },
            { value: 'ending', label: 'Ending' },
            { value: 'overdue', label: 'Overdue' },
        ],
    },
]
</script>

<template>
    <Head :title="pageHeading ?? 'Register'" />

    <div :class="PAGE_SHELL">
        <CatalogRegister
            :title="pageHeading ?? 'Register'"
            :description="pageDescription"
            :cards="cards ?? []"
            :rows="rows ?? leases ?? []"
            :columns="columns ?? defaultColumns"
            :facets="facets ?? defaultFacets"
            search-placeholder="Search tenant or unit…"
            empty-title="No rows"
            cards-description="Same CatalogCard facts as the grid."
            table-description="The same rows as a table."
            @select="openItem"
        />
    </div>
</template>
