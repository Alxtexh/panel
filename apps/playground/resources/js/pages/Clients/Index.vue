<script setup lang="ts">
/** PHASE 3 — all mechanics live in @panelkit/ui and useListTable. */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useListTable, type ListPageProps } from '@/composables/useListTable'
import { DataTable, PkDropdown, TablePagination, TableToolbar, useColumnVisibility, type TableColumn } from '@panelkit/ui'
import { Head } from '@inertiajs/vue3'

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
</script>

<template>
    <Head title="Clients" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Clients</h1>
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
            <!--
                The menu OPENS with no network request. Antipatterns 3.0.3: a
                Filament action modal fetches its form from the server on open,
                so a confirmation dialog has latency in front of it. Here the
                definitions arrive with the page, so opening is local state.

                Items are disabled and labelled until Phase 5 brings the form and
                action layer. A menu that opens and explains itself beats a dead
                button that looks broken.
            -->
            <template #actions="{ row }">
                <PkDropdown width="w-44">
                    <template #trigger>
                        <button
                            type="button"
                            class="hover:bg-accent hover:text-accent-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors"
                            :aria-label="`Actions for ${row.name}`"
                        >
                            ⋯
                        </button>
                    </template>
                    <template #panel>
                        <p class="text-muted-foreground truncate px-2 py-1.5 text-xs font-medium">{{ row.name }}</p>
                        <div class="border-t pt-1">
                        <button
                            disabled
                            class="text-muted-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm disabled:opacity-50"
                        >
                            View — Phase 5
                        </button>
                        <button
                            disabled
                            class="text-muted-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm disabled:opacity-50"
                        >
                            Edit — Phase 5
                        </button>
                        <button
                            disabled
                            class="text-muted-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm disabled:opacity-50"
                        >
                            Suspend — Phase 5
                        </button>
                        </div>
                    </template>
                </PkDropdown>
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
