<script setup lang="ts">
/**
 * PHASE 3 — all mechanics live in @panelkit/ui and useListTable.
 *
 * The two variations this screen contributed in Phase 2 are now handled by the
 * shared layer rather than here: the tri-state boolean filter comes through
 * filterSchema, and `sortKey` below is what keeps price sorting numerically.
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useListTable, type ListPageProps } from '@/composables/useListTable'
import { DataTable, TablePagination, TableToolbar, useColumnVisibility, type TableColumn } from '@panelkit/ui'
import { Deferred, Head } from '@inertiajs/vue3'

const props = defineProps<ListPageProps & { filterSchema: any[]; total?: number }>()
defineOptions({ layout: { breadcrumbs: [{ title: 'Plans', href: '/plans' }] } })

const t = useListTable('/plans', props)
const { hidden, toggle, reset } = useColumnVisibility('panelkit.plans.columns')

const columns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true, locked: true, cellClass: 'font-medium' },
    { key: 'speed_mbps', label: 'Speed', sortable: true, cellClass: 'tabular-nums' },
    // Displays `price`, orders by `price_cents` — sorting the formatted string
    // would put 12,000.00 before 900.00.
    { key: 'price', label: 'Price', sortable: true, sortKey: 'price_cents', cellClass: 'tabular-nums' },
    { key: 'is_active', label: 'Active' },
    { key: 'created_at', label: 'Created', sortable: true, cellClass: 'text-muted-foreground' },
]

const date = (v: string | null) =>
    v ? new Date(v).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' }) : '—'
const num = (v: number) => new Intl.NumberFormat().format(v)
</script>

<template>
    <Head title="Plans" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Plans</h1>
                <p class="text-muted-foreground text-sm">
                    <Deferred data="total">
                        <template #fallback><span class="bg-muted inline-block h-3 w-16 animate-pulse rounded" /></template>
                        <span>{{ num(total ?? 0) }} matching</span>
                    </Deferred>
                </p>
            </div>

            <TableToolbar
                :search="search" search-placeholder="Plan name…"
                :filter-schema="filterSchema" :filters="filters"
                :columns="columns" :hidden="hidden" :loading="t.showSpinner.value"
                @update:search="t.setSearch" @filter="t.setFilter"
                @toggle-column="toggle" @reset-columns="reset"
                @reset-filters="t.resetFilters" @clear="t.clearAll"
            />
        </div>

        <DataTable
            :columns="columns" :rows="t.rows.value" :hidden="hidden"
            :sort="sort" :direction="direction" :loading="t.loading.value"
            :filtered="t.isFiltered.value" empty-title="No plans yet"
            empty-hint="Seed demo data with: make seed"
            @sort="t.sortBy"
        >
            <template #cell:speed_mbps="{ row }">{{ row.speed_mbps }} Mbps</template>
            <template #cell:price="{ row }">KES {{ row.price }}</template>
            <template #cell:is_active="{ row }">
                <Badge :variant="row.is_active ? 'default' : 'outline'">{{ row.is_active ? 'Active' : 'Inactive' }}</Badge>
            </template>
            <template #cell:created_at="{ row }">{{ date(row.created_at) }}</template>
            <template #clear-filters><Button variant="link" size="sm" @click="t.clearAll">Clear filters</Button></template>
            <template #actions="{ row }">
                <Button variant="ghost" size="icon" class="size-7" disabled :aria-label="`Actions for ${row.name}`">⋯</Button>
            </template>
        </DataTable>

        <TablePagination
            :page="t.page.value" :per-page="perPage" :per-page-options="perPageOptions"
            :rows-on-page="t.rows.value.length" :has-next="t.hasNext.value" :has-previous="t.hasPrevious.value"
            :total="total" :loading="t.loading.value"
            @next="t.nextPage" @previous="t.previousPage" @update:per-page="t.setPerPage"
        />
    </div>
</template>
