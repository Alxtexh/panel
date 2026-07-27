<script setup lang="ts">
/**
 * PHASE 4 — the ONE page that renders every resource.
 *
 * Clients, Routers and Plans all render through this. Adding a screen is a PHP
 * class and nothing else; there is no per-resource Vue file left.
 *
 * WHY THIS LIVES IN THE APP rather than in @panelkit/ui:
 *
 * It is the Inertia adapter. Spec §4 rule 1 forbids anything in the UI package
 * from importing Inertia, and a page must know how data arrives. So the
 * reusable parts — DataTable, TableToolbar, TableTabs, TablePagination,
 * SelectionBar, and the schema-to-column mapping — all live in the package,
 * and this file is the thin seam that wires Inertia to them.
 *
 * THE TRANSPORT SPLIT, which is the entire architecture:
 *
 *   `schema` arrives on first load and is NOT in the `only:` list that
 *   useListTable sends, so filtering, sorting and paging move rows and nothing
 *   else. A server-rendered panel re-renders its whole component tree per
 *   interaction instead (antipatterns §3.1: 500–950 ms, of which 1–16 ms was
 *   actually the database).
 *
 *   `filterOptions` arrives WITH the data, never inside the schema, because a
 *   tenant's routers are tenant data (addendum Part A). That is what lets the
 *   schema cache key drop the tenant id entirely.
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useListTable, type ListPageProps } from '@/composables/useListTable'
import {
    DataTable,
    PkDropdown,
    SelectionBar,
    TablePagination,
    TableTabs,
    TableToolbar,
    PkModal,
    useColumnVisibility,
    useLiveUpdates,
    useSchemaColumns,
    type SchemaColumn,
} from '@panelkit/ui'
import { Head, Link, router } from '@inertiajs/vue3'
import { computed, ref, toRef } from 'vue'
import { toast } from 'vue-sonner'

interface ResourceSchema {
    v: number
    kind: string
    key: string
    label: string
    labelPlural: string
    icon: string
    group: string | null
    routes: { index: string }
    table: {
        columns: SchemaColumn[]
        filters: { key: string; label: string; type: 'select' | 'boolean'; trueLabel?: string; falseLabel?: string }[]
        tabs: string[]
    }
    /** Only the count matters here; the form pages own the field shapes. */
    form: { columns: number; fields: unknown[] }
}

const props = defineProps<
    ListPageProps & {
        schema: ResourceSchema
        /** Tenant data, delivered beside the records rather than in the schema. */
        filterOptions: Record<string, string[]>
        /** Form option lists — tenant data, so they arrive with the payload. */
        formOptions: Record<string, { value: any; label: string }[]>
        /** UI hints only. Every write re-authorizes server-side. */
        can: { viewAny: boolean; create: boolean; update: boolean; delete: boolean }
        /** Transport for staying fresh. The page does not know which driver. */
        live: {
            driver: 'none' | 'poll' | 'broadcast'
            intervalMs: number
            batchMs: number
            channel: string | null
            events: string[]
            pauseWhenHidden: boolean
        }
        total?: number
        tabCounts?: Record<string, number>
    }
>()

defineOptions({
    layout: {
        breadcrumbs: [],
    },
})

const t = useListTable(props.schema.routes.index, props)

// Keyed by resource, so hiding a column on Clients does not hide it on Routers.
const { hidden, toggle, reset } = useColumnVisibility(`panelkit.${props.schema.key}.columns`)

const schemaColumns = toRef(() => props.schema.table.columns)
const { columns, byKey, badgeVariant } = useSchemaColumns(schemaColumns)

/**
 * Filter schema and its OPTIONS are recombined here, at the last moment.
 *
 * They travel separately on purpose: structure is cached and shared, options
 * are tenant data. The toolbar only ever sees the merged result.
 */
const filterSchema = computed(() =>
    props.schema.table.filters.map((f) => ({ ...f, options: props.filterOptions[f.key] ?? [] })),
)

const dateFormats: Record<string, Intl.DateTimeFormatOptions> = {
    date: { year: 'numeric', month: 'short', day: '2-digit' },
    datetime: { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' },
}

function render(key: string, value: unknown): string {
    const column = byKey.value[key]

    if (value === null || value === undefined || value === '') return '—'

    if (column?.type === 'date' || column?.type === 'datetime') {
        return new Date(String(value)).toLocaleDateString(undefined, dateFormats[column.type])
    }

    // Units and currency codes come from the schema, so no resource needs its
    // own Vue slot just to write "Mbps" after a number.
    return [column?.prefix, String(value), column?.suffix].filter(Boolean).join(' ')
}

/** Columns the schema marks as badges get badge rendering, generically. */
const badgeKeys = computed(() => schemaColumns.value.filter((c) => c.type === 'badge').map((c) => c.key))

/* ---------------------------------------------------------------------------
 * Writes
 *
 * Create, view and edit are dedicated PAGES now, not modals — Filament's
 * convention, and for practical reasons: a page is linkable, survives a refresh,
 * gets its own history entry, and has room for a form a dialog cannot hold.
 *
 * Delete stays a confirmation dialog, because that is what a modal is actually
 * good at: a single irreversible decision with no form to fill in. It still
 * opens with no network request.
 * ------------------------------------------------------------------------- */

const confirmingDelete = ref<Record<string, any> | null>(null)


const canWrite = computed(() => props.schema.form.fields.length > 0)





function destroy() {
    const row = confirmingDelete.value
    if (!row) return

    router.delete(`${props.schema.routes.index}/${row.id}`, {
        preserveScroll: true,
        onSuccess: () => {
            confirmingDelete.value = null
            toast.success(`${props.schema.label} deleted`)
            router.reload({ only: ['records', 'total', 'tabCounts'] })
        },
        onError: () => toast.error(`Could not delete this ${props.schema.label.toLowerCase()}`),
    })
}
/* ---------------------------------------------------------------------------
 * Staying fresh
 *
 * The page does not know or care which transport is configured. `poll` needs no
 * infrastructure and works on plain PHP-FPM; `broadcast` needs Reverb and gives
 * constant server cost regardless of viewer count. Switching is a config change.
 *
 * The fetch lives HERE rather than in the composable because @panelkit/ui may
 * not import Inertia or ship an HTTP client (spec §4).
 * ------------------------------------------------------------------------- */

const { status: liveStatus, recentlyChanged } = useLiveUpdates({
    config: props.live,
    rows: t.rows,
    fetchChanges: async (ids, since) => {
        const query = new URLSearchParams({ ids: ids.join(','), since })
        const res = await fetch(`${props.schema.routes.index}/updates?${query}`, {
            headers: { Accept: 'application/json' },
        })

        if (!res.ok) throw new Error(String(res.status))

        return res.json()
    },
    // Rule 7: after a pause or a reconnect, refetch rather than trusting local
    // state. Data only — the schema does not travel again.
    onResync: () => router.reload({ only: ['records', 'total', 'tabCounts'] }),
})
function badgeLabel(key: string, value: unknown): string {
    if (typeof value === 'boolean') {
        const column = byKey.value[key]

        return value ? (column?.label ?? 'Yes') : `Not ${(column?.label ?? 'set').toLowerCase()}`
    }

    return String(value)
}
</script>

<template>
    <Head :title="schema.labelPlural" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-3 p-3 sm:p-4">
        <div class="flex items-center justify-between gap-3">
            <div class="flex items-center gap-2">
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">{{ schema.labelPlural }}</h1>

                <!-- Rule 8: show connection state, so a table that silently
                     lost its transport is never mistaken for a quiet one. -->
                <span
                    v-if="live.driver !== 'none'"
                    class="inline-flex items-center gap-1 text-[11px]"
                    :class="liveStatus === 'live' ? 'text-muted-foreground' : 'text-amber-600 dark:text-amber-500'"
                    :title="`Live updates: ${liveStatus} (${live.driver})`"
                >
                    <span
                        class="size-1.5 rounded-full"
                        :class="{
                            'bg-emerald-500': liveStatus === 'live',
                            'bg-amber-500': liveStatus === 'connecting',
                            'bg-muted-foreground': liveStatus === 'paused' || liveStatus === 'off',
                        }"
                    />
                    {{ liveStatus }}
                </span>
            </div>
            <Button v-if="canWrite && can.create" as-child size="sm">
                <Link :href="`${schema.routes.index}/create`">New {{ schema.label }}</Link>
            </Button>
        </div>

        <TableTabs
            v-if="schema.table.tabs.length"
            :tabs="schema.table.tabs"
            :active="tab"
            :counts="tabCounts"
            @select="t.setTab"
        />

        <TableToolbar
            :search="search"
            :search-placeholder="`Search ${schema.labelPlural.toLowerCase()}…`"
            search-hint="Matches the start of any word in the searchable columns"
            :filter-schema="filterSchema"
            :filters="filters"
            :columns="columns"
            :hidden="hidden"
            :loading="t.showSpinner.value"
            @update:search="t.setSearch"
            @filter="t.setFilter"
            @toggle-column="toggle"
            @reset-columns="reset"
            @reset-filters="t.resetFilters"
            @clear="t.clearAll"
        />

        <SelectionBar
            v-if="t.selected.value.size"
            :page-count="t.selected.value.size"
            :all-matching="t.allMatching.value"
            :total="total"
            @select-all-matching="t.selectAllMatching"
            @clear="t.clearSelection"
        >
            <template #actions>
                <!-- Bulk mutations need the action layer and the auto-queue
                     threshold from addendum D1, both Phase 5. -->
                <Button size="sm" variant="outline" disabled>Bulk actions — Phase 5</Button>
            </template>
        </SelectionBar>

        <DataTable
            :columns="columns"
            :rows="t.rows.value"
            :hidden="hidden"
            :sort="sort"
            :direction="direction"
            :loading="t.loading.value"
            :filtered="t.isFiltered.value"
            selectable
            :selected="t.selected.value"
            :empty-title="`No ${schema.labelPlural.toLowerCase()} yet`"
            empty-hint="Seed demo data with: make seed"
            @sort="t.sortBy"
            @toggle-row="t.toggleRow"
            @toggle-page="t.togglePage"
        >
            <!--
                ONE slot per column, branching inside.

                Two loops both emitting `cell:<key>` would collide: Vue keeps the
                last definition, so every badge column would silently render as
                plain text. The branch has to be inside a single loop.

                Nothing here names a resource — badge colouring comes from the
                schema's semantic map, and formatting from the column type.
            -->
            <template v-for="col in columns" :key="col.key" #[`cell:${col.key}`]="{ row }">
                <Badge
                    v-if="badgeKeys.includes(col.key)"
                    :variant="badgeVariant(col.key, row[col.key]) as any"
                    class="capitalize"
                >
                    {{ badgeLabel(col.key, row[col.key]) }}
                </Badge>
                <Link
                    v-else-if="col.key === 'name'"
                    :href="`${schema.routes.index}/${row.id}`"
                    class="hover:text-primary hover:underline"
                >
                    {{ render(col.key, row[col.key]) }}
                </Link>
                <span v-else>{{ render(col.key, row[col.key]) }}</span>
            </template>

            <template #clear-filters>
                <Button variant="link" size="sm" @click="t.clearAll">Clear filters</Button>
            </template>

            <template #actions="{ row }">
                <PkDropdown width="w-44">
                    <template #trigger>
                        <button
                            type="button"
                            class="hover:bg-accent hover:text-accent-foreground inline-flex size-7 items-center justify-center rounded-md transition-colors"
                            :aria-label="`Actions for ${row.name ?? row.id}`"
                        >
                            ⋯
                        </button>
                    </template>
                    <template #panel>
                        <p class="text-muted-foreground truncate px-2 py-1.5 text-xs font-medium">
                            {{ row.name ?? `#${row.id}` }}
                        </p>
                        <div class="border-t pt-1">
                            <Link
                                :href="`${schema.routes.index}/${row.id}`"
                                class="hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm"
                            >
                                View
                            </Link>
                            <Link
                                v-if="canWrite && can.update"
                                :href="`${schema.routes.index}/${row.id}/edit`"
                                class="hover:bg-accent hover:text-accent-foreground flex w-full items-center rounded px-2 py-1.5 text-left text-sm"
                            >
                                Edit
                            </Link>
                            <button
                                v-if="can.delete"
                                class="text-destructive hover:bg-destructive/10 flex w-full items-center rounded px-2 py-1.5 text-left text-sm"
                                @click="confirmingDelete = row"
                            >
                                Delete
                            </button>
                            <p
                                v-if="!can.update && !can.delete"
                                class="text-muted-foreground px-2 py-1.5 text-xs"
                            >
                                No actions available
                            </p>
                        </div>
                    </template>
                </PkDropdown>
            </template>
        </DataTable>

        <TablePagination
            :page="t.page.value"
            :per-page="perPage"
            :per-page-options="perPageOptions"
            :rows-on-page="t.rows.value.length"
            :has-next="t.hasNext.value"
            :has-previous="t.hasPrevious.value"
            :total="total"
            :loading="t.loading.value"
            @next="t.nextPage"
            @previous="t.previousPage"
            @update:per-page="t.setPerPage"
        />


        <PkModal
            :open="!!confirmingDelete"
            :title="`Delete ${schema.label}?`"
            description="This cannot be undone."
            @close="confirmingDelete = null"
        >
            <p class="text-sm">
                <strong>{{ confirmingDelete?.name ?? `#${confirmingDelete?.id}` }}</strong>
                will be permanently removed.
            </p>

            <template #footer>
                <Button variant="ghost" size="sm" @click="confirmingDelete = null">Cancel</Button>
                <Button variant="destructive" size="sm" @click="destroy">Delete</Button>
            </template>
        </PkModal>
    </div>
</template>
