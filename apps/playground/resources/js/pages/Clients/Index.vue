<script setup lang="ts">
/**
 * PHASE 1 — deliberately hardcoded. Columns, filters and sorts are written out
 * by hand. Phases 2 and 3 duplicate this twice more; the duplication is what
 * tells us what the generic DataTable should be (spec §11).
 *
 * The interaction rules below are NOT provisional — they are the §10 transport
 * mandates and the §8 table requirements, and they are what Phase 3 extracts:
 *
 *   - every filter/sort/search reflected in the URL, so views are shareable
 *   - partial reloads carry data only, never the whole page
 *   - the table never unmounts during a reload; rows dim and swap in place
 *   - no spinner under 300 ms — a flash of loading reads as slower than a pause
 *   - empty, no-results-for-filter, and loading are three distinct states
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import AppLayout from '@/layouts/AppLayout.vue'
import type { BreadcrumbItem } from '@/types'
import { Deferred, Head, router } from '@inertiajs/vue3'
import { ArrowDown, ArrowUp, ChevronsUpDown, Loader2, Search, X } from '@lucide/vue'
import { computed, ref, watch } from 'vue'

interface ClientRow {
    id: number
    name: string
    phone: string
    access_code: string
    status: string
    plan_type: string
    plan_name: string | null
    expiry_date: string | null
    created_at: string
}

interface Filters {
    search: string
    status: string | null
    planType: string | null
    sort: string
    direction: 'asc' | 'desc'
    cursor: string | null
}

const props = defineProps<{
    records: ClientRow[]
    filters: Filters
    sortable: string[]
    statuses: string[]
    planTypes: string[]
    nextCursor: string | null
    perPage: number
    total?: number
}>()

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Clients', href: '/clients' }]

/**
 * Accumulated rows across "load more". Keyset pagination appends rather than
 * replacing, so this holds every page fetched so far.
 *
 * Rows are keyed by id in the template, never by array index — §8 rule 2. Index
 * keys make Vue reuse the wrong DOM node when rows shift, which is what produces
 * the classic "wrong row highlighted after an update" bug.
 */
const rows = ref<ClientRow[]>([...props.records])
const loading = ref(false)
const loadingMore = ref(false)

/** §10: "No spinner under 300 ms." Delayed, so fast responses never flash. */
const showSpinner = ref(false)
let spinnerTimer: ReturnType<typeof setTimeout> | undefined

const search = ref(props.filters.search)

const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'access_code', label: 'Access code', sortable: false },
    { key: 'phone', label: 'Phone', sortable: false },
    { key: 'status', label: 'Status', sortable: true },
    { key: 'plan_name', label: 'Plan', sortable: false },
    { key: 'plan_type', label: 'Type', sortable: false },
    { key: 'expiry_date', label: 'Expires', sortable: true },
    { key: 'created_at', label: 'Created', sortable: true },
] as const

const statusVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    active: 'default',
    expired: 'destructive',
    suspended: 'secondary',
}

const hasFilters = computed(
    () => props.filters.search !== '' || props.filters.status !== null || props.filters.planType !== null,
)

/**
 * Builds the next query string. Every piece of table state lives here and
 * therefore in the URL — back button and link sharing both work for free.
 */
function query(overrides: Partial<Filters> = {}): Record<string, string> {
    const next = { ...props.filters, ...overrides }
    const out: Record<string, string> = {}

    if (next.search) out.search = next.search
    if (next.status) out.status = next.status
    if (next.planType) out.planType = next.planType
    if (next.sort !== 'created_at') out.sort = next.sort
    if (next.direction !== 'desc') out.direction = next.direction

    return out
}

/**
 * A filter/sort/search change. Replaces the row set.
 *
 * `only` keeps this a data-only request — the layout, the sidebar and the
 * schema-shaped props do not travel again. That is the entire architecture in
 * one option (spec §3).
 */
function apply(overrides: Partial<Filters>) {
    loading.value = true
    spinnerTimer = setTimeout(() => (showSpinner.value = true), 300)

    router.get('/clients', query(overrides), {
        only: ['records', 'filters', 'nextCursor', 'total'],
        preserveState: true,
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
            rows.value = [...props.records]
        },
        onFinish: () => {
            clearTimeout(spinnerTimer)
            loading.value = false
            showSpinner.value = false
        },
    })
}

/** Keyset "load more" — appends the next page rather than replacing. */
function loadMore() {
    if (!props.nextCursor || loadingMore.value) return

    loadingMore.value = true

    router.get(
        '/clients',
        { ...query(), cursor: props.nextCursor },
        {
            only: ['records', 'nextCursor'],
            preserveState: true,
            preserveScroll: true,
            replace: true,
            onSuccess: () => {
                rows.value = [...rows.value, ...props.records]
            },
            onFinish: () => (loadingMore.value = false),
        },
    )
}

function toggleSort(column: string) {
    const direction = props.filters.sort === column && props.filters.direction === 'desc' ? 'asc' : 'desc'
    apply({ sort: column, direction })
}

function clearFilters() {
    search.value = ''
    apply({ search: '', status: null, planType: null })
}

/** Debounced so typing does not fire a request per keystroke. */
let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, (value) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
        if (value !== props.filters.search) apply({ search: value })
    }, 250)
})

function formatDate(value: string | null): string {
    if (!value) return '—'
    return new Date(value).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: '2-digit' })
}

function formatNumber(value: number): string {
    return new Intl.NumberFormat().format(value)
}
</script>

<template>
    <Head title="Clients" />

    <AppLayout :breadcrumbs="breadcrumbs">
        <div class="flex h-full flex-col gap-4 p-4">
            <!-- Header -->
            <div class="flex flex-wrap items-end justify-between gap-3">
                <div>
                    <h1 class="text-xl font-semibold tracking-tight">Clients</h1>
                    <p class="text-muted-foreground text-sm">
                        <!-- The total is a deferred prop: rows paint first, the count
                             arrives after. §10 forbids blocking a list on COUNT(*). -->
                        <Deferred data="total">
                            <template #fallback>
                                <span class="inline-flex items-center gap-1.5">
                                    <span class="bg-muted h-3 w-16 animate-pulse rounded" />
                                    <span>matching</span>
                                </span>
                            </template>
                            <span>{{ formatNumber(total ?? 0) }} matching</span>
                        </Deferred>
                    </p>
                </div>

                <div class="flex flex-wrap items-center gap-2">
                    <div class="relative">
                        <Search
                            class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                        />
                        <Input
                            v-model="search"
                            placeholder="Name, phone or code…"
                            class="w-56 pl-8"
                            aria-label="Search clients"
                        />
                    </div>

                    <select
                        :value="filters.status ?? ''"
                        aria-label="Filter by status"
                        class="border-input bg-background ring-offset-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm capitalize focus-visible:ring-2 focus-visible:outline-none"
                        @change="apply({ status: ($event.target as HTMLSelectElement).value || null })"
                    >
                        <option value="">All statuses</option>
                        <option v-for="s in statuses" :key="s" :value="s" class="capitalize">{{ s }}</option>
                    </select>

                    <select
                        :value="filters.planType ?? ''"
                        aria-label="Filter by plan type"
                        class="border-input bg-background ring-offset-background focus-visible:ring-ring h-9 rounded-md border px-3 text-sm uppercase focus-visible:ring-2 focus-visible:outline-none"
                        @change="apply({ planType: ($event.target as HTMLSelectElement).value || null })"
                    >
                        <option value="">All types</option>
                        <option v-for="t in planTypes" :key="t" :value="t">{{ t }}</option>
                    </select>

                    <Button v-if="hasFilters" variant="ghost" size="sm" @click="clearFilters">
                        <X class="size-4" />
                        Clear
                    </Button>

                    <Loader2 v-if="showSpinner" class="text-muted-foreground size-4 animate-spin" />
                </div>
            </div>

            <!-- Table. Never unmounted during a reload — it dims and swaps rows
                 in place, so scroll position and selection survive (§10). -->
            <div class="relative flex-1 overflow-auto rounded-lg border">
                <table class="w-full border-collapse text-sm">
                    <thead class="bg-muted/50 sticky top-0 z-10 backdrop-blur">
                        <tr>
                            <th
                                v-for="col in columns"
                                :key="col.key"
                                class="text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
                            >
                                <button
                                    v-if="col.sortable"
                                    class="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                                    @click="toggleSort(col.key)"
                                >
                                    {{ col.label }}
                                    <ArrowDown
                                        v-if="filters.sort === col.key && filters.direction === 'desc'"
                                        class="size-3.5"
                                    />
                                    <ArrowUp
                                        v-else-if="filters.sort === col.key && filters.direction === 'asc'"
                                        class="size-3.5"
                                    />
                                    <ChevronsUpDown v-else class="size-3.5 opacity-40" />
                                </button>
                                <span v-else>{{ col.label }}</span>
                            </th>
                        </tr>
                    </thead>

                    <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                        <!-- Keyed by record id, never by index (§8 rule 2). -->
                        <tr v-for="row in rows" :key="row.id" class="hover:bg-muted/40 border-b transition-colors">
                            <td class="px-3 py-2 font-medium whitespace-nowrap">{{ row.name }}</td>
                            <td class="text-muted-foreground px-3 py-2 font-mono text-xs">{{ row.access_code }}</td>
                            <td class="text-muted-foreground px-3 py-2 whitespace-nowrap">{{ row.phone }}</td>
                            <td class="px-3 py-2">
                                <Badge :variant="statusVariant[row.status] ?? 'outline'" class="capitalize">
                                    {{ row.status }}
                                </Badge>
                            </td>
                            <td class="px-3 py-2 whitespace-nowrap">{{ row.plan_name ?? '—' }}</td>
                            <td class="text-muted-foreground px-3 py-2 uppercase">{{ row.plan_type }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">{{ formatDate(row.expiry_date) }}</td>
                            <td class="text-muted-foreground px-3 py-2 whitespace-nowrap">
                                {{ formatDate(row.created_at) }}
                            </td>
                        </tr>
                    </tbody>
                </table>

                <!-- Three distinct states, not one generic "nothing here" (§8). -->
                <div v-if="rows.length === 0 && hasFilters" class="text-muted-foreground p-10 text-center">
                    <p class="font-medium">No clients match these filters</p>
                    <Button variant="link" size="sm" @click="clearFilters">Clear filters</Button>
                </div>
                <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
                    <p class="font-medium">No clients yet</p>
                    <p class="text-sm">Seed demo data with <code class="text-xs">make seed</code></p>
                </div>
            </div>

            <!-- Keyset pagination. No page numbers, because page numbers require a
                 count and OFFSET, and §10 rules out both at this scale. -->
            <div class="flex items-center justify-between gap-3">
                <p class="text-muted-foreground text-xs">
                    Showing {{ formatNumber(rows.length) }}
                    <Deferred data="total">
                        <template #fallback><span /></template>
                        <span>of {{ formatNumber(total ?? 0) }}</span>
                    </Deferred>
                </p>

                <Button v-if="nextCursor" variant="outline" size="sm" :disabled="loadingMore" @click="loadMore">
                    <Loader2 v-if="loadingMore" class="size-4 animate-spin" />
                    Load more
                </Button>
            </div>
        </div>
    </AppLayout>
</template>
