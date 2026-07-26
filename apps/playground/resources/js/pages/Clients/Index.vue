<script setup lang="ts">
/** PHASE 3 — all mechanics live in @panelkit/ui and useListTable. */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useListTable, type ListPageProps } from '@/composables/useListTable'
import { DataTable, TableToolbar, useColumnVisibility, type TableColumn } from '@panelkit/ui'
import { Deferred, Head } from '@inertiajs/vue3'

const props = defineProps<ListPageProps & { filterSchema: any[]; total?: number }>()
defineOptions({ layout: { breadcrumbs: [{ title: 'Clients', href: '/clients' }] } })

const t = useListTable('/clients', props)
const { hidden, toggle, reset } = useColumnVisibility('panelkit.clients.columns')

const columns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true, locked: true, cellClass: 'font-medium' },
    { key: 'access_code', label: 'Access code', copyable: true, cellClass: 'text-muted-foreground font-mono text-xs' },
    { key: 'phone', label: 'Phone', copyable: true, cellClass: 'text-muted-foreground' },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'plan_name', label: 'Plan' },
    { key: 'plan_type', label: 'Type', cellClass: 'text-muted-foreground uppercase' },
    { key: 'expiry_date', label: 'Expires', sortable: true },
    { key: 'created_at', label: 'Created', sortable: true, cellClass: 'text-muted-foreground' },
]

const statusVariant: Record<string, 'default' | 'secondary' | 'destructive'> = {
    active: 'default', expired: 'destructive', suspended: 'secondary',
}

const date = (v: string | null) =>
    v ? new Date(v).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' }) : '—'
const num = (v: number) => new Intl.NumberFormat().format(v)
</script>

<template>
    <Head title="Clients" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Clients</h1>
                <p class="text-muted-foreground text-sm">
                    <Deferred data="total">
                        <template #fallback><span class="bg-muted inline-block h-3 w-16 animate-pulse rounded" /></template>
                        <span>{{ num(total ?? 0) }} matching</span>
                    </Deferred>
                </p>
            </div>

            <TableToolbar
                :search="search" search-placeholder="Name, phone or code…"
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
            :filtered="t.isFiltered.value" empty-title="No clients yet"
            empty-hint="Seed demo data with: make seed"
            @sort="t.sortBy"
        >
            <template #cell:status="{ row }">
                <Badge :variant="statusVariant[row.status] ?? 'outline'" class="capitalize">{{ row.status }}</Badge>
            </template>
            <template #cell:expiry_date="{ row }">{{ date(row.expiry_date) }}</template>
            <template #cell:created_at="{ row }">{{ date(row.created_at) }}</template>
            <template #clear-filters><Button variant="link" size="sm" @click="t.clearAll">Clear filters</Button></template>
            <template #actions="{ row }">
                <Button variant="ghost" size="icon" class="size-7" disabled :aria-label="`Actions for ${row.name}`">⋯</Button>
            </template>
        </DataTable>

        <div class="flex items-center justify-between gap-3">
            <p class="text-muted-foreground text-xs">Showing {{ num(t.rows.value.length) }}</p>
            <Button v-if="nextCursor" variant="outline" size="sm" :disabled="t.loadingMore.value" @click="t.loadMore">
                Load more
            </Button>
        </div>
    </div>
</template>
