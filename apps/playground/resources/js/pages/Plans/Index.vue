<script setup lang="ts">
/**
 * PHASE 2 — the third copy, on purpose (spec §11).
 *
 * This one carries the two variations the other two screens do not, and they are
 * the most useful output of the whole phase:
 *
 *   1. A BOOLEAN filter with THREE states (any / active / inactive). Clients and
 *      Routers only have string-equality filters, so an abstraction generalised
 *      from those two alone would model every filter as a nullable string and
 *      silently break this.
 *   2. A COMPUTED column (`price`) that has no matching database column, so the
 *      Phase 4 schema cannot assume column key === database column.
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
    ListFilter,
    Loader2,
    MoreHorizontal,
    Search,
    SlidersHorizontal,
    X,
} from '@lucide/vue'
import { computed, onMounted, ref, watch } from 'vue'

interface PlanRow {
    id: number
    name: string
    speed_mbps: number
    price_cents: number
    price: string
    is_active: boolean
    created_at: string
}

interface Filters {
    search: string
    active: boolean | null
    sort: string
    direction: 'asc' | 'desc'
    cursor: string | null
}

const props = defineProps<{
    records: PlanRow[]
    filters: Filters
    nextCursor: string | null
    perPage: number
    total?: number
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Plans', href: '/plans' }] } })

const rows = ref<PlanRow[]>([...props.records])
const loading = ref(false)
const loadingMore = ref(false)
const showSpinner = ref(false)
let spinnerTimer: ReturnType<typeof setTimeout> | undefined

const search = ref(props.filters.search)

const columns = [
    { key: 'name', label: 'Name', sortable: true, locked: true },
    { key: 'speed_mbps', label: 'Speed', sortable: true, locked: false },
    { key: 'price', label: 'Price', sortable: true, locked: false },
    { key: 'is_active', label: 'Active', sortable: false, locked: false },
    { key: 'created_at', label: 'Created', sortable: true, locked: false },
] as const

type ColumnKey = (typeof columns)[number]['key']

/**
 * The display key and the sort key differ for `price` — it renders a formatted
 * string but must sort by the underlying integer cents. Sorting the formatted
 * string would order 1,000.00 before 9.00.
 */
const SORT_KEY: Partial<Record<ColumnKey, string>> = { price: 'price_cents' }

const STORAGE_KEY = 'panelkit.plans.columns'
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

const activeFilterCount = computed(() => (props.filters.active === null ? 0 : 1))
const hasFilters = computed(() => props.filters.search !== '' || activeFilterCount.value > 0)

function query(overrides: Partial<Filters> = {}): Record<string, string> {
    const next = { ...props.filters, ...overrides }
    const out: Record<string, string> = {}

    if (next.search) out.search = next.search
    // Explicitly serialise false — omitting it would collapse "only inactive"
    // into "no filter", which is the exact three-state bug this screen exists
    // to surface.
    if (next.active !== null && next.active !== undefined) out.active = next.active ? '1' : '0'
    if (next.sort !== 'created_at') out.sort = next.sort
    if (next.direction !== 'desc') out.direction = next.direction

    return out
}

function apply(overrides: Partial<Filters>) {
    loading.value = true
    spinnerTimer = setTimeout(() => (showSpinner.value = true), 300)

    router.get('/plans', query(overrides), {
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

function loadMore() {
    if (!props.nextCursor || loadingMore.value) return

    loadingMore.value = true

    router.get(
        '/plans',
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

function toggleSort(column: ColumnKey) {
    const key = SORT_KEY[column] ?? column
    const direction = props.filters.sort === key && props.filters.direction === 'desc' ? 'asc' : 'desc'
    apply({ sort: key, direction })
}

function isSortedBy(column: ColumnKey): boolean {
    return props.filters.sort === (SORT_KEY[column] ?? column)
}

function setActive(value: boolean | null) {
    apply({ active: props.filters.active === value ? null : value })
}

function clearAll() {
    search.value = ''
    apply({ search: '', active: null })
}

let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, (value) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
        if (value !== props.filters.search) apply({ search: value })
    }, 250)
})

function cell(row: PlanRow, key: ColumnKey): string {
    if (key === 'created_at') return formatDate(row.created_at)
    if (key === 'speed_mbps') return `${row.speed_mbps} Mbps`
    if (key === 'price') return `KES ${row.price}`
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
    <Head title="Plans" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Plans</h1>
                <p class="text-muted-foreground text-sm">
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
                <div class="relative min-w-0 flex-1 sm:flex-none">
                    <Search
                        class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2"
                    />
                    <Input
                        v-model="search"
                        placeholder="Plan name…"
                        class="w-full pl-8 sm:w-56"
                        aria-label="Search plans"
                    />
                </div>

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
                                @click="setActive(null)"
                            >
                                Reset
                            </button>
                        </div>
                        <DropdownMenuSeparator />

                        <DropdownMenuLabel class="text-muted-foreground text-[11px] tracking-wide uppercase">
                            Availability
                        </DropdownMenuLabel>
                        <!-- Three explicit states. "Any" is not the absence of a
                             choice, it is a choice, and inactive must be
                             selectable on its own. -->
                        <DropdownMenuItem @select="(e: Event) => e.preventDefault()" @click="setActive(true)">
                            <Check :class="['size-4', filters.active === true ? 'opacity-100' : 'opacity-0']" />
                            Active
                        </DropdownMenuItem>
                        <DropdownMenuItem @select="(e: Event) => e.preventDefault()" @click="setActive(false)">
                            <Check :class="['size-4', filters.active === false ? 'opacity-100' : 'opacity-0']" />
                            Inactive
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

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

        <div v-if="activeFilterCount" class="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" class="gap-1">
                {{ filters.active ? 'Active only' : 'Inactive only' }}
                <button aria-label="Remove availability filter" @click="setActive(null)"><X class="size-3" /></button>
            </Badge>
        </div>

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
                                    v-if="isSortedBy(col.key) && filters.direction === 'desc'"
                                    class="size-3.5"
                                />
                                <ArrowUp
                                    v-else-if="isSortedBy(col.key) && filters.direction === 'asc'"
                                    class="size-3.5"
                                />
                                <ChevronsUpDown v-else class="size-3.5 opacity-40" />
                            </button>
                            <span v-else>{{ col.label }}</span>
                        </th>

                        <th
                            class="bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                        >
                            <span class="sr-only">Actions</span>
                        </th>
                    </tr>
                </thead>

                <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                    <tr v-for="row in rows" :key="row.id" class="hover:bg-muted/40 group border-b transition-colors">
                        <td
                            v-for="col in visibleColumns"
                            :key="col.key"
                            class="px-3 py-2 whitespace-nowrap"
                            :class="{
                                'font-medium': col.key === 'name',
                                'tabular-nums': col.key === 'speed_mbps' || col.key === 'price',
                                'text-muted-foreground': col.key === 'created_at',
                            }"
                        >
                            <Badge v-if="col.key === 'is_active'" :variant="row.is_active ? 'default' : 'outline'">
                                {{ row.is_active ? 'Active' : 'Inactive' }}
                            </Badge>
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
                                    <DropdownMenuItem disabled>Edit — Phase 5</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Archive — Phase 5</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="rows.length === 0 && hasFilters" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No plans match these filters</p>
                <Button variant="link" size="sm" @click="clearAll">Clear filters</Button>
            </div>
            <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No plans yet</p>
                <p class="text-sm">Seed demo data with <code class="text-xs">make seed</code></p>
            </div>
        </div>

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
