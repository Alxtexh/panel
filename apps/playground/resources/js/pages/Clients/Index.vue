<script setup lang="ts">
/**
 * PHASE 1 — deliberately hardcoded. Columns, filters and sorts are written out
 * by hand. Phases 2 and 3 duplicate this twice more; the duplication is what
 * tells us what the generic DataTable should be (spec §11).
 *
 * LAYOUT NOTE: this page must NOT wrap itself in <AppLayout>. app.ts applies
 * AppLayout as a persistent layout to every page by default, so wrapping here
 * nests it inside itself — two sidebars, two collapse triggers, and a table that
 * scrolls underneath the sidebar. Breadcrumbs go through defineOptions.
 *
 * Filter/column UX follows Filament's shape (one funnel dropdown holding every
 * filter, a separate column-visibility dropdown) but not its cost model:
 * Filament round-trips to the server to re-render the dropdown itself. Here the
 * dropdown is local state, and only an applied filter costs a request.
 */
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Deferred, Head, router } from '@inertiajs/vue3'
import {
    ArrowDown,
    ArrowUp,
    Check,
    ChevronsUpDown,
    Copy,
    ListFilter,
    Loader2,
    MoreHorizontal,
    Search,
    SlidersHorizontal,
    X,
} from '@lucide/vue'
import { computed, onMounted, ref, watch } from 'vue'

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

// The layout is applied by app.ts; this only hands it the breadcrumb trail.
defineOptions({ layout: { breadcrumbs: [{ title: 'Clients', href: '/clients' }] } })

/**
 * Accumulated rows across "load more". Keyed by record id in the template,
 * never by array index — §8 rule 2. Index keys make Vue reuse the wrong DOM
 * node when rows shift, producing the classic "wrong row highlighted" bug.
 */
const rows = ref<ClientRow[]>([...props.records])
const loading = ref(false)
const loadingMore = ref(false)

/** §10: "No spinner under 300 ms." Delayed, so fast responses never flash. */
const showSpinner = ref(false)
let spinnerTimer: ReturnType<typeof setTimeout> | undefined

const search = ref(props.filters.search)
const copied = ref<string | null>(null)

const columns = [
    { key: 'name', label: 'Name', sortable: true, locked: true },
    { key: 'access_code', label: 'Access code', sortable: false, locked: false },
    { key: 'phone', label: 'Phone', sortable: false, locked: false },
    { key: 'status', label: 'Status', sortable: true, locked: false },
    { key: 'plan_name', label: 'Plan', sortable: false, locked: false },
    { key: 'plan_type', label: 'Type', sortable: false, locked: false },
    { key: 'expiry_date', label: 'Expires', sortable: true, locked: false },
    { key: 'created_at', label: 'Created', sortable: true, locked: false },
] as const

type ColumnKey = (typeof columns)[number]['key']

/** Cells that carry an identifier worth copying straight out of the table. */
const COPYABLE: ReadonlySet<string> = new Set(['access_code', 'phone'])

/**
 * §8: "Column visibility toggling, persisted per user in localStorage."
 *
 * Display-only in Phase 1 — the server still selects every column. Phase 4
 * pushes this into the schema so hidden columns leave the SELECT too, which is
 * also where it becomes a field-authorization boundary.
 */
const STORAGE_KEY = 'panelkit.clients.columns'
const hidden = ref<Set<ColumnKey>>(new Set())

onMounted(() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY)
        if (saved) hidden.value = new Set(JSON.parse(saved) as ColumnKey[])
    } catch {
        // Corrupt or unavailable storage must never break the table.
    }
})

watch(
    hidden,
    (value) => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([...value]))
        } catch {
            // Private mode / quota. Non-fatal.
        }
    },
    { deep: true },
)

const visibleColumns = computed(() => columns.filter((c) => !hidden.value.has(c.key)))

function toggleColumn(key: ColumnKey) {
    const next = new Set(hidden.value)
    next.has(key) ? next.delete(key) : next.add(key)
    hidden.value = next
}

function resetColumns() {
    hidden.value = new Set()
}

const statusVariant: Record<string, 'default' | 'secondary' | 'destructive' | 'outline'> = {
    active: 'default',
    expired: 'destructive',
    suspended: 'secondary',
}

/** Drives the badge on the funnel button, as Filament does. */
const activeFilterCount = computed(
    () => (props.filters.status ? 1 : 0) + (props.filters.planType ? 1 : 0),
)

const hasFilters = computed(() => props.filters.search !== '' || activeFilterCount.value > 0)

/** Every piece of table state lives in the URL — back button and sharing work. */
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
 * `only` keeps this a data-only request — the layout, sidebar and schema-shaped
 * props do not travel again. That is the architecture in one option (spec §3).
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

/** Selecting the already-active value clears it, so the menu toggles. */
function setStatus(value: string | null) {
    apply({ status: props.filters.status === value ? null : value })
}

function setPlanType(value: string | null) {
    apply({ planType: props.filters.planType === value ? null : value })
}

function resetFilters() {
    apply({ status: null, planType: null })
}

function clearAll() {
    search.value = ''
    apply({ search: '', status: null, planType: null })
}

async function copy(key: string, value: string) {
    try {
        await navigator.clipboard.writeText(value)
        copied.value = key
        setTimeout(() => (copied.value = null), 1200)
    } catch {
        // Clipboard needs a secure context; failing silently beats throwing.
    }
}

/** Debounced so typing does not fire a request per keystroke. */
let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, (value) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
        if (value !== props.filters.search) apply({ search: value })
    }, 250)
})

function cell(row: ClientRow, key: ColumnKey): string {
    if (key === 'expiry_date' || key === 'created_at') return formatDate(row[key])
    if (key === 'plan_name') return row.plan_name ?? '—'
    return String(row[key] ?? '')
}

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

    <!-- min-h-0 / min-w-0 matter: without them a flex child refuses to shrink
         below its content size, so the table pushes the layout wider instead of
         scrolling inside its own container, and slides under the sidebar. -->
    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <!-- Header -->
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Clients</h1>
                <p class="text-muted-foreground text-sm">
                    <!-- Deferred prop: rows paint first, the count arrives after.
                         §10 forbids blocking a list response on COUNT(*). -->
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
                <!-- Search grows to fill the row on phones, sits fixed on desktop -->
                <div class="relative min-w-0 flex-1 sm:flex-none">
                    <Search
                        class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                    />
                    <Input
                        v-model="search"
                        placeholder="Name, phone or code…"
                        class="w-full pl-8 sm:w-56"
                        aria-label="Search clients"
                    />
                </div>

                <!-- Filters: one dropdown holding every filter, Filament-style,
                     with an active-count badge on the trigger. -->
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="sm" class="relative shrink-0">
                            <ListFilter class="size-4" />
                            <span class="hidden sm:inline">Filters</span>
                            <Badge
                                v-if="activeFilterCount"
                                class="ml-0.5 size-5 justify-center rounded-full p-0 text-[10px] tabular-nums"
                            >
                                {{ activeFilterCount }}
                            </Badge>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end" class="w-56">
                        <div class="flex items-center justify-between px-2 py-1.5">
                            <span class="text-sm font-medium">Filters</span>
                            <button
                                v-if="activeFilterCount"
                                class="text-muted-foreground hover:text-foreground text-xs"
                                @click="resetFilters"
                            >
                                Reset
                            </button>
                        </div>
                        <DropdownMenuSeparator />

                        <DropdownMenuLabel class="text-muted-foreground text-[11px] tracking-wide uppercase">
                            Status
                        </DropdownMenuLabel>
                        <DropdownMenuItem
                            v-for="s in statuses"
                            :key="s"
                            class="capitalize"
                            @select="(e: Event) => e.preventDefault()"
                            @click="setStatus(s)"
                        >
                            <Check :class="['size-4', filters.status === s ? 'opacity-100' : 'opacity-0']" />
                            {{ s }}
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuLabel class="text-muted-foreground text-[11px] tracking-wide uppercase">
                            Plan type
                        </DropdownMenuLabel>
                        <DropdownMenuItem
                            v-for="t in planTypes"
                            :key="t"
                            class="uppercase"
                            @select="(e: Event) => e.preventDefault()"
                            @click="setPlanType(t)"
                        >
                            <Check :class="['size-4', filters.planType === t ? 'opacity-100' : 'opacity-0']" />
                            {{ t }}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <!-- Column visibility -->
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="sm" class="shrink-0">
                            <SlidersHorizontal class="size-4" />
                            <span class="hidden sm:inline">Columns</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" class="w-48">
                        <div class="flex items-center justify-between px-2 py-1.5">
                            <span class="text-sm font-medium">Columns</span>
                            <button
                                v-if="hidden.size"
                                class="text-muted-foreground hover:text-foreground text-xs"
                                @click="resetColumns"
                            >
                                Reset
                            </button>
                        </div>
                        <DropdownMenuSeparator />
                        <DropdownMenuCheckboxItem
                            v-for="col in columns"
                            :key="col.key"
                            :model-value="!hidden.has(col.key)"
                            :disabled="col.locked"
                            @select="(e: Event) => e.preventDefault()"
                            @update:model-value="toggleColumn(col.key)"
                        >
                            {{ col.label }}
                        </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button v-if="hasFilters" variant="ghost" size="sm" class="shrink-0" @click="clearAll">
                    <X class="size-4" />
                    <span class="hidden sm:inline">Clear</span>
                </Button>

                <Loader2 v-if="showSpinner" class="text-muted-foreground size-4 shrink-0 animate-spin" />
            </div>
        </div>

        <!-- Active filter chips, so what is applied is visible without opening
             the dropdown. Filament hides this state behind the trigger badge. -->
        <div v-if="activeFilterCount" class="flex flex-wrap items-center gap-2">
            <Badge v-if="filters.status" variant="secondary" class="gap-1 capitalize">
                Status: {{ filters.status }}
                <button aria-label="Remove status filter" @click="setStatus(null)"><X class="size-3" /></button>
            </Badge>
            <Badge v-if="filters.planType" variant="secondary" class="gap-1 uppercase">
                Type: {{ filters.planType }}
                <button aria-label="Remove plan type filter" @click="setPlanType(null)"><X class="size-3" /></button>
            </Badge>
        </div>

        <!-- Table. Never unmounted during a reload — it dims and swaps rows in
             place, so scroll position and selection survive (§10). -->
        <div class="relative min-h-0 w-full min-w-0 flex-1 overflow-auto rounded-lg border">
            <table class="w-full border-collapse text-sm">
                <thead class="bg-background sticky top-0 z-10">
                    <tr class="bg-muted/50">
                        <th
                            v-for="col in visibleColumns"
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

                        <!-- Actions pinned right, so they stay reachable while
                             the rest of the table scrolls horizontally. The
                             shadow is not decoration: without a depth cue a
                             frozen column overlaying scrolled content reads as
                             a rendering bug rather than a pinned column, which
                             is most obvious at phone widths. -->
                        <th
                            class="bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                        >
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                    <!-- Keyed by record id, never by index (§8 rule 2). -->
                    <tr v-for="row in rows" :key="row.id" class="hover:bg-muted/40 group border-b transition-colors">
                        <td
                            v-for="col in visibleColumns"
                            :key="col.key"
                            class="px-3 py-2 whitespace-nowrap"
                            :class="{
                                'font-medium': col.key === 'name',
                                'text-muted-foreground font-mono text-xs': col.key === 'access_code',
                                'text-muted-foreground uppercase': col.key === 'plan_type',
                                'text-muted-foreground': col.key === 'phone' || col.key === 'created_at',
                            }"
                        >
                            <Badge
                                v-if="col.key === 'status'"
                                :variant="statusVariant[row.status] ?? 'outline'"
                                class="capitalize"
                            >
                                {{ row.status }}
                            </Badge>

                            <!-- Copy lives on the cell that holds the value, not
                                 buried in a menu. Revealed on row hover so it
                                 does not add permanent visual noise; always
                                 present for keyboard and touch via focus. -->
                            <span v-else-if="COPYABLE.has(col.key)" class="inline-flex items-center gap-1.5">
                                {{ cell(row, col.key) }}
                                <button
                                    type="button"
                                    class="text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100"
                                    :aria-label="`Copy ${col.label.toLowerCase()} for ${row.name}`"
                                    @click="copy(`${row.id}-${col.key}`, String(row[col.key]))"
                                >
                                    <Check v-if="copied === `${row.id}-${col.key}`" class="size-3.5" />
                                    <Copy v-else class="size-3.5" />
                                </button>
                            </span>

                            <span v-else>{{ cell(row, col.key) }}</span>
                        </td>

                        <td
                            class="bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                        >
                            <DropdownMenu>
                                <DropdownMenuTrigger as-child>
                                    <Button variant="ghost" size="icon" class="size-7">
                                        <MoreHorizontal class="size-4" />
                                        <span class="sr-only">Actions for {{ row.name }}</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" class="w-48">
                                    <DropdownMenuLabel class="truncate">{{ row.name }}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <!-- View, Edit, Suspend and Delete need the
                                         form and action layer, which is Phase 5.
                                         A button that silently does nothing is
                                         worse than one that says why. -->
                                    <DropdownMenuItem disabled>View — Phase 5</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Edit — Phase 5</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Suspend — Phase 5</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Three distinct states, not one generic "nothing here" (§8). -->
            <div v-if="rows.length === 0 && hasFilters" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No clients match these filters</p>
                <Button variant="link" size="sm" @click="clearAll">Clear filters</Button>
            </div>
            <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No clients yet</p>
                <p class="text-sm">Seed demo data with <code class="text-xs">make seed</code></p>
            </div>
        </div>

        <!-- Keyset pagination. No page numbers, because page numbers need a count
             and an OFFSET, and §10 rules out both at this scale. -->
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
</template>
