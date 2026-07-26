<script setup lang="ts">
/**
 * PHASE 2 — a near-verbatim copy of Clients/Index.vue, on purpose (spec §11).
 *
 * Reading the three list pages side by side is what tells Phase 3 what the
 * generic DataTable needs. Everything below except `columns`, `COPYABLE`, the
 * filter block and the badge mapping is character-identical to the other two.
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

interface RouterRow {
    id: number
    name: string
    ip_address: string
    model: string | null
    status: string
    last_seen_at: string | null
    created_at: string
}

interface Filters {
    search: string
    status: string | null
    model: string | null
    sort: string
    direction: 'asc' | 'desc'
    cursor: string | null
}

const props = defineProps<{
    records: RouterRow[]
    filters: Filters
    statuses: string[]
    models: string[]
    nextCursor: string | null
    perPage: number
    total?: number
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Routers', href: '/routers' }] } })

const rows = ref<RouterRow[]>([...props.records])
const loading = ref(false)
const loadingMore = ref(false)
const showSpinner = ref(false)
let spinnerTimer: ReturnType<typeof setTimeout> | undefined

const search = ref(props.filters.search)
const copied = ref<string | null>(null)

const columns = [
    { key: 'name', label: 'Name', sortable: true, locked: true },
    { key: 'ip_address', label: 'IP address', sortable: false, locked: false },
    { key: 'model', label: 'Model', sortable: false, locked: false },
    { key: 'status', label: 'Status', sortable: true, locked: false },
    { key: 'last_seen_at', label: 'Last seen', sortable: true, locked: false },
    { key: 'created_at', label: 'Created', sortable: true, locked: false },
] as const

type ColumnKey = (typeof columns)[number]['key']

const COPYABLE: ReadonlySet<string> = new Set(['ip_address'])

const STORAGE_KEY = 'panelkit.routers.columns'
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
    online: 'default',
    offline: 'destructive',
    degraded: 'secondary',
}

const activeFilterCount = computed(() => (props.filters.status ? 1 : 0) + (props.filters.model ? 1 : 0))
const hasFilters = computed(() => props.filters.search !== '' || activeFilterCount.value > 0)

function query(overrides: Partial<Filters> = {}): Record<string, string> {
    const next = { ...props.filters, ...overrides }
    const out: Record<string, string> = {}

    if (next.search) out.search = next.search
    if (next.status) out.status = next.status
    if (next.model) out.model = next.model
    if (next.sort !== 'created_at') out.sort = next.sort
    if (next.direction !== 'desc') out.direction = next.direction

    return out
}

function apply(overrides: Partial<Filters>) {
    loading.value = true
    spinnerTimer = setTimeout(() => (showSpinner.value = true), 300)

    router.get('/routers', query(overrides), {
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
        '/routers',
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

function setStatus(value: string | null) {
    apply({ status: props.filters.status === value ? null : value })
}

function setModel(value: string | null) {
    apply({ model: props.filters.model === value ? null : value })
}

function resetFilters() {
    apply({ status: null, model: null })
}

function clearAll() {
    search.value = ''
    apply({ search: '', status: null, model: null })
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

let searchTimer: ReturnType<typeof setTimeout> | undefined
watch(search, (value) => {
    clearTimeout(searchTimer)
    searchTimer = setTimeout(() => {
        if (value !== props.filters.search) apply({ search: value })
    }, 250)
})

function cell(row: RouterRow, key: ColumnKey): string {
    if (key === 'last_seen_at' || key === 'created_at') return formatDate(row[key])
    if (key === 'model') return row.model ?? '—'
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
    <Head title="Routers" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Routers</h1>
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
                        placeholder="Name or IP…"
                        class="w-full pl-8 sm:w-56"
                        aria-label="Search routers"
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

                        <template v-if="models.length">
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel class="text-muted-foreground text-[11px] tracking-wide uppercase">
                                Model
                            </DropdownMenuLabel>
                            <DropdownMenuItem
                                v-for="m in models"
                                :key="m"
                                @select="(e: Event) => e.preventDefault()"
                                @click="setModel(m)"
                            >
                                <Check :class="['size-4', filters.model === m ? 'opacity-100' : 'opacity-0']" />
                                <span class="truncate">{{ m }}</span>
                            </DropdownMenuItem>
                        </template>
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
            <Badge v-if="filters.status" variant="secondary" class="gap-1 capitalize">
                Status: {{ filters.status }}
                <button aria-label="Remove status filter" @click="setStatus(null)"><X class="size-3" /></button>
            </Badge>
            <Badge v-if="filters.model" variant="secondary" class="gap-1">
                Model: {{ filters.model }}
                <button aria-label="Remove model filter" @click="setModel(null)"><X class="size-3" /></button>
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
                                'text-muted-foreground font-mono text-xs': col.key === 'ip_address',
                                'text-muted-foreground': col.key === 'model' || col.key === 'created_at',
                            }"
                        >
                            <Badge
                                v-if="col.key === 'status'"
                                :variant="statusVariant[row.status] ?? 'outline'"
                                class="capitalize"
                            >
                                {{ row.status }}
                            </Badge>

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
                                    <DropdownMenuItem disabled>View — Phase 5</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Edit — Phase 5</DropdownMenuItem>
                                    <DropdownMenuItem disabled>Reboot — Phase 5</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="rows.length === 0 && hasFilters" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No routers match these filters</p>
                <Button variant="link" size="sm" @click="clearAll">Clear filters</Button>
            </div>
            <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
                <p class="font-medium">No routers yet</p>
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
