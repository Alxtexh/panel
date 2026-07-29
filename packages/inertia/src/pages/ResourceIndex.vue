<script setup lang="ts">
/**
 * PHASE 4 - the ONE page that renders every resource.
 *
 * Clients, Routers and Plans all render through this. Adding a screen is a PHP
 * class and nothing else; there is no per-resource Vue file left.
 *
 * WHY THIS LIVES IN THE APP rather than in @panelkit/ui:
 *
 * It is the Inertia adapter. Spec §4 rule 1 forbids anything in the UI package
 * from importing Inertia, and a page must know how data arrives. So the
 * reusable parts - DataTable, TableToolbar, TableTabs, TablePagination,
 * SelectionBar, and the schema-to-column mapping - all live in the package,
 * and this file is the thin seam that wires Inertia to them.
 *
 * THE TRANSPORT SPLIT, which is the entire architecture:
 *
 *   `schema` arrives on first load and is NOT in the `only:` list that
 *   useListTable sends, so filtering, sorting and paging move rows and nothing
 *   else. A server-rendered panel re-renders its whole component tree per
 *   interaction instead (antipatterns §3.1: 500-950 ms, of which 1-16 ms was
 *   actually the database).
 *
 *   `filterOptions` arrives WITH the data, never inside the schema, because a
 *   tenant's routers are tenant data (addendum Part A). That is what lets the
 *   schema cache key drop the tenant id entirely.
 */
import { PkBadge as Badge } from '@panelkit/ui'
import { PkButton as Button } from '@panelkit/ui'
import { useListTable, type ListPageProps } from '../composables/useListTable'
import { useBulkJob } from '../composables/useBulkJob'
import {
    BulkActions,
    DataTable,
    EditableCell,
    IconCell,
    ImageCell,
    PkBoundary,
    RecordActions,
    SelectionBar,
    TablePagination,
    TableTabs,
    TableToolbar,
    PkModal,
    useColumnVisibility,
    useLiveUpdates,
    useSchemaColumns,
    type RecordActionGroup,
    type RecordActionItem,
    type SchemaColumn,
} from '@panelkit/ui'
import { Head, Link, router, usePage } from '@inertiajs/vue3'
import { computed, ref, toRef, watch } from 'vue'
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
        filters: {
            key: string
            label: string
            type: 'select' | 'boolean'
            trueLabel?: string
            falseLabel?: string
        }[]
        tabs: string[]
        /** Structure only; the values arrive with the rows. */
        groupBy?: { key: string; label: string } | null
        /** The order column, when this table can be dragged into order. */
        reorderable?: string | null
        /**
         * Whether clicking the row body opens the record. Declared per resource
         * server-side, because a browsed list wants it and a read-in-place one
         * does not - see `Table::rowClick()`.
         */
        rowClick?: 'view' | null
        /** Structure only; per-row availability rides with the row. */
        recordActions?: {
            label?: string
            actions: {
                key: string
                label: string
                icon?: string
                ability: string
                link?: boolean
                destructive?: boolean
                confirmation?: string
                removesRow?: boolean
                color?: string
            }[]
        }[]
        bulkActions: {
            key: string
            label: string
            icon: string | null
            destructive: boolean
            confirmation: string | null
        }[]
    }
    /** Only the count matters here; the form pages own the field shapes. */
    form: { columns: number; fields: unknown[] }
}

const props = defineProps<
    ListPageProps & {
        schema: ResourceSchema
        /** Tenant data, delivered beside the records rather than in the schema. */
        filterOptions: Record<string, string[]>
        /** Form option lists - tenant data, so they arrive with the payload. */
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
const { hidden, setHidden } = useColumnVisibility(`panelkit.${props.schema.key}.columns`)

/** The column panel stages its choices and applies them together. */
function applyColumns(keys: string[]) {
    setHidden(new Set(keys))
}

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
    datetime: {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    },
}

function render(key: string, value: unknown): string {
    const column = byKey.value[key]

    if (value === null || value === undefined || value === '') return '-'

    if (column?.type === 'date' || column?.type === 'datetime') {
        return new Date(String(value)).toLocaleDateString(undefined, dateFormats[column.type])
    }

    // Units and currency codes come from the schema, so no resource needs its
    // own Vue slot just to write "Mbps" after a number.
    return [column?.prefix, String(value), column?.suffix].filter(Boolean).join(' ')
}

/** Columns the schema marks as badges get badge rendering, generically. */
/**
 * Footer aggregate definitions, pulled off the schema columns.
 *
 * Structure only - which aggregate and how to render it. The VALUES arrive as
 * their own deferred prop, so a total over 200,000 rows never sits in front of
 * the ten on screen.
 */
const page = usePage()

const columnSummaries = computed(() => {
    const out: Record<string, any> = {}

    for (const column of schemaColumns.value) {
        if ((column as any).summary) out[column.key] = (column as any).summary
    }

    return Object.keys(out).length ? out : null
})

const badgeKeys = computed(() =>
    schemaColumns.value.filter((c) => c.type === 'badge').map((c) => c.key),
)

/* ---------------------------------------------------------------------------
 * Writes
 *
 * Create, view and edit are dedicated PAGES now, not modals - Filament's
 * convention, and for practical reasons: a page is linkable, survives a refresh,
 * gets its own history entry, and has room for a form a dialog cannot hold.
 *
 * Delete stays a confirmation dialog, because that is what a modal is actually
 * good at: a single irreversible decision with no form to fill in. It still
 * opens with no network request.
 * ------------------------------------------------------------------------- */

const confirmingDelete = ref<Record<string, any> | null>(null)

const canWrite = computed(() => props.schema.form.fields.length > 0)

/* ---------------------------------------------------------------------------
 * Inline cell edits
 *
 * OPTIMISTIC, WITH A REAL ROLLBACK. The switch flips immediately because
 * waiting 40 ms to see your own click is what makes a panel feel slow - but a
 * rejected write must visibly undo, or the operator walks away believing a
 * change landed that never did.
 *
 * The new value is held in an OVERRIDE MAP rather than written into the row.
 * `t.rows` derives from page props, so mutating a row in place fights the next
 * partial reload: the reload would restore the server value and the edit would
 * appear to flicker back. An override keyed by row and column is discarded when
 * fresh rows arrive, which is exactly the desired lifetime.
 * ------------------------------------------------------------------------- */

const cellOverrides = ref<Record<string, unknown>>({})
const savingCell = ref<string | null>(null)

// A new page of rows makes every override stale by definition.
watch(
    () => t.rows.value,
    () => (cellOverrides.value = {}),
)

function cellKey(row: Record<string, any>, column: string): string {
    return `${row.id}:${column}`
}

/** `in`, not `??` - an override of `false` or `0` is a real value. */
function cellValue(row: Record<string, any>, column: string): unknown {
    const key = cellKey(row, column)

    return key in cellOverrides.value ? cellOverrides.value[key] : row[column]
}

async function editCell(row: Record<string, any>, column: string, value: unknown) {
    const key = cellKey(row, column)
    const previous = cellValue(row, column)

    cellOverrides.value = { ...cellOverrides.value, [key]: value }
    savingCell.value = key

    try {
        const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

        const response = await fetch(`${props.schema.routes.index}/${row.id}/cell`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': match ? decodeURIComponent(match[1]) : '',
            },
            credentials: 'same-origin',
            body: JSON.stringify({ column, value }),
        })

        if (!response.ok) {
            const body = await response.json().catch(() => ({}))

            throw new Error(body.message ?? 'That change was rejected.')
        }

        const saved = await response.json()
        cellOverrides.value = { ...cellOverrides.value, [key]: saved.value }

        // Tab counts and the total can both move when a status changes.
        router.reload({ only: ['tabCounts', 'total'] })
    } catch (e) {
        const { [key]: _discarded, ...rest } = cellOverrides.value
        cellOverrides.value = { ...rest, [key]: previous }

        toast.error(e instanceof Error ? e.message : 'That change was rejected.')
    } finally {
        savingCell.value = null
    }
}

/* ---------------------------------------------------------------------------
 * Bulk actions and export
 *
 * The selection can mean two very different things and they post differently:
 * a set of ticked ids, or "everything matching the current filters". The second
 * never sends ids - the whole point is that the set may be far larger than this
 * page has ever seen, so the server re-derives it from the same filter
 * parameters that drew the table.
 * ------------------------------------------------------------------------- */

const job = useBulkJob(props.schema.key)

/**
 * Hide actions the operator cannot perform.
 *
 * A UI HINT ONLY - every bulk request re-authorizes server-side against the
 * ability the action declares (§9 item 3). Hiding a button the policy would
 * refuse just avoids offering a guaranteed 403.
 */
const allowedBulkActions = computed(() =>
    props.schema.table.bulkActions.filter((action) =>
        action.destructive ? props.can.delete !== false : props.can.update !== false,
    ),
)

function bulkTarget() {
    return t.allMatching.value
        ? { all: true }
        : { ids: Array.from(t.selected.value) as (string | number)[] }
}

/**
 * The row menu for one row: the declared structure, filtered for what this
 * operator may do and what this record is.
 *
 * VISIBILITY IS RE-CHECKED ON THE SERVER. This filtering exists so the menu
 * does not offer "Suspend" on a suspended row; it is not a permission boundary,
 * and the endpoint enforces both the policy and the same visibility rule again.
 * A hidden button is not a check (§9 item 3).
 *
 * The `visible` predicates cannot be sent as closures, so the server sends the
 * RESULT per row - see `row._actions`.
 */
function menuFor(row: Record<string, any>): RecordActionGroup[] {
    const available: string[] | null = row._actions ?? null

    const groups: RecordActionGroup[] = (props.schema.table.recordActions ?? [])
        .map((group: any) => ({
            label: group.label,
            actions: group.actions
                .filter(
                    (a: any) =>
                        (available === null || available.includes(a.key)) &&
                        (props.can as unknown as Record<string, boolean>)[a.ability] !== false,
                )
                // The URL is per-row, so it is resolved here rather than in the
                // schema - the schema is cached across every record.
                .map((a: any) => ({ ...a, url: row._actionUrls?.[a.key] })),
        }))
        // A heading over nothing reads as something failing to load.
        .filter((group: any) => group.actions.length > 0)

    /*
     * Delete joins the list as an ordinary declared action.
     *
     * It used to be markup appended after the loop, which meant RecordActions
     * could not know it existed - so the "no actions available" case and the
     * destructive separator both had to be reasoned about in two places. As a
     * synthetic entry it sorts itself: the component already puts every
     * destructive action last, separated, and never inline.
     *
     * The key is namespaced because it is NOT a server-declared action and must
     * never be sent to the action endpoint as one.
     */
    if (props.can.delete) {
        groups.push({
            actions: [{ key: DELETE_ACTION, label: 'Delete', icon: 'trash', destructive: true }],
        })
    }

    return groups
}

/** Not a server action: it opens the confirmation dialog instead. */
const DELETE_ACTION = '__delete'

/**
 * The RecordActions instance per row, so a right-click can open the right one.
 *
 * A plain Map keyed by row id rather than an array: rows are keyed by id in the
 * table too, so after a filter or a page change the surviving components keep
 * their entries and the departed ones unregister themselves. An index-keyed
 * array would silently point at whatever row now occupies that position.
 */
const rowMenus = new Map<string | number, { openContextMenu: (e: MouseEvent) => void }>()

function registerRowMenu(id: string | number, instance: unknown) {
    if (instance) {
        rowMenus.set(id, instance as { openContextMenu: (e: MouseEvent) => void })
    } else {
        rowMenus.delete(id)
    }
}

function onRowContextMenu(row: Record<string, any>, event: MouseEvent) {
    // Reordering is a mode where the only verb is "move"; opening an action
    // menu mid-drag offers things that contradict what the mode is for.
    if (reordering.value) return

    rowMenus.get(row.id)?.openContextMenu(event)
}

/**
 * A click on the row body opens the record.
 *
 * IT REUSES THE `view` RECORD ACTION rather than building a URL from the
 * resource name, and that is the whole design. The action list arriving with
 * each row has already been filtered by the policy for this record and this
 * user, so a row whose operator may not view it carries no `view` action and
 * simply does not navigate. Constructing `/clients/{id}` here would instead
 * send them to a page that 403s - the permission approximated in a second
 * place, and wrong.
 *
 * IT ALSO SILENTLY DOES NOTHING when the resource has no view page at all,
 * which is the correct outcome for a table whose records are edited in place.
 */
function onRowClick(row: Record<string, any>) {
    const view = menuFor(row)
        .flatMap((group) => group.actions)
        .find((a) => a.key === 'view' && a.link && a.url)

    if (view?.url) {
        router.visit(view.url)
    }
}

/** One entry point for both the inline buttons and the menu. */
function onRecordAction(row: Record<string, any>, action: RecordActionItem) {
    if (action.key === DELETE_ACTION) {
        confirmingDelete.value = row

        return
    }

    runRecordAction(row, action)
}

/** Which action is in flight, as `rowId:actionKey`. */
const runningAction = ref<string | null>(null)

/**
 * The action key in flight FOR THIS ROW, or null.
 *
 * Scoped per row on purpose: `runningAction` is a single global, so returning
 * the bare key would disable the same button on all twenty-five rows while one
 * of them worked.
 */
function busyActionFor(row: Record<string, any>): string | null {
    const running = runningAction.value

    if (!running || !running.startsWith(`${row.id}:`)) return null

    return running.slice(String(row.id).length + 1)
}

async function runRecordAction(row: Record<string, any>, action: any) {
    if (action.confirmation && !window.confirm(action.confirmation)) return

    runningAction.value = `${row.id}:${action.key}`

    try {
        const response = await fetch(`${props.schema.routes.index}/${row.id}/action`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': csrfToken(),
            },
            credentials: 'same-origin',
            body: JSON.stringify({ action: action.key }),
        })

        if (!response.ok) {
            const body = await response.json().catch(() => null)

            toast.error(body?.message ?? 'That action could not be completed.')

            return
        }

        toast.success(`${action.label} done`)

        /*
         * The LIST is reloaded, not the row patched.
         *
         * An action changes the record's data and can change whether it still
         * belongs in the current view at all - suspending a client under an
         * "Active" tab means the row should leave. Patching in place would
         * leave it sitting there contradicting the filter above it.
         *
         * Partial: the schema does not travel again.
         */
        router.reload({ only: ['records', 'total', 'tabCounts'] })
    } finally {
        runningAction.value = null
    }
}

function csrfToken(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

/**
 * Whether dragging is offered right now.
 *
 * ONLY WHILE SORTED BY THE ORDER COLUMN. Under any other ordering a drag would
 * write a position whose effect is invisible - the row would not move, because
 * the table is not sorted by the thing that changed - and that reads as the
 * drag having silently failed. Searching and filtering are fine: the visible
 * rows still redistribute their own positions among themselves.
 */
const canReorder = computed(
    () =>
        !!props.schema.table.reorderable &&
        props.sort === props.schema.table.reorderable &&
        props.can.update !== false,
)

/**
 * Whether the table is currently being arranged.
 *
 * A MODE, entered deliberately. Handles on every row all the time are clutter
 * on a table nobody reorders daily, and they make an ordinary list look
 * half-editable. Entering the mode also suppresses selection - choosing rows
 * and arranging them are different intents, and offering both at once means
 * every drag starts by wondering whether it will tick a checkbox.
 */
const reordering = ref(false)

/*
 * Leaving the ordering drops out of the mode.
 *
 * Sorting by name while holding a reorder handle would let somebody drag under
 * an ordering where the result is invisible - the row would not move, because
 * the table is not sorted by the thing that changed.
 */
watch(
    () => props.sort,
    () => {
        reordering.value = false
    },
)

/**
 * Persist a new order for the visible page.
 *
 * The rows are NOT patched optimistically. A reorder rewrites positions that
 * the next page's cursor is derived from, so showing a provisional order and
 * then reloading would flash twice; reloading once is both simpler and honest
 * about when the change is real.
 */
async function persistOrder(ids: (string | number)[]) {
    const response = await fetch(`${props.schema.routes.index}/reorder`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrfToken(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ ids }),
    })

    if (!response.ok) {
        toast.error('That order could not be saved.')

        return
    }

    router.reload({ only: ['records'] })
}

async function runBulk(action: string) {
    await job.run(action, bulkTarget())

    if (job.error.value) {
        toast.error(job.error.value)
        return
    }

    // A queued run reports when it lands, not now.
    if (job.progress.value?.status === 'done') {
        toast.success(`${job.progress.value.done.toLocaleString()} records updated`)
        t.clearSelection()
    }
}

async function exportSelection() {
    await job.exportView(bulkTarget())

    if (job.error.value) toast.error(job.error.value)
}

/**
 * A finished export announces itself rather than downloading silently.
 *
 * An automatic `window.location = url` on a background job fires whenever the
 * poll happens to resolve, which can be minutes after the click and while the
 * operator is reading something else - a file appearing unbidden reads as a
 * bug. The toast is persistent because the alternative is a download link that
 * times out while they are looking away.
 */
watch(
    () => job.downloadUrl.value,
    (url) => {
        if (!url) return

        toast.success('Your export is ready', {
            duration: Number.POSITIVE_INFINITY,
            action: { label: 'Download', onClick: () => window.location.assign(url) },
        })
    },
)

watch(
    () => job.error.value,
    (message) => {
        if (message) toast.error(message)
    },
)

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
    // state. Data only - the schema does not travel again.
    onResync: () => router.reload({ only: ['records', 'total', 'tabCounts'] }),
})
/**
 * What a badge reads as.
 *
 * THE COLUMN'S OWN MAP FIRST. A boolean has no words of its own, and the old
 * fallback - the column's label for true, "not <label>" for false - only worked
 * while the label happened to be an adjective. Renaming a column to "Status"
 * made every active row read "Status" and every retired one "Not status".
 *
 * The fallback stays for columns that never declared a map, because a bare
 * `true` on screen is worse than a clumsy sentence.
 */
function badgeLabel(key: string, value: unknown): string {
    const column = byKey.value[key] as
        { label?: string; labels?: Record<string, string> } | undefined
    const labels = column?.labels

    if (labels) {
        // JSON object keys are strings, so a numeric or boolean value has to be
        // normalised before the lookup.
        const lookup = typeof value === 'boolean' ? (value ? '1' : '0') : String(value)

        if (labels[lookup] !== undefined) return labels[lookup]
    }

    if (typeof value === 'boolean') {
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
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">
                    {{ schema.labelPlural }}
                </h1>

                <!-- Rule 8: show connection state, so a table that silently
                     lost its transport is never mistaken for a quiet one. -->
                <span
                    v-if="live.driver !== 'none'"
                    class="inline-flex items-center gap-1 text-[11px]"
                    :class="
                        liveStatus === 'live'
                            ? 'text-muted-foreground'
                            : 'text-amber-600 dark:text-amber-500'
                    "
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
            <!--
                Reordering is ENTERED, not always available. See `reordering`.
            -->
            <Button
                v-if="canReorder"
                size="sm"
                :variant="reordering ? 'default' : 'outline'"
                @click="reordering = !reordering"
            >
                {{ reordering ? 'Done' : 'Reorder' }}
            </Button>

            <Button v-if="canWrite && can.create && !reordering" as-child size="sm">
                <Link :href="`${schema.routes.index}/create`">New {{ schema.label }}</Link>
            </Button>
        </div>

        <!--
            Said once, at the top, rather than as a tooltip on every handle: the
            mode is unusual enough to need explaining and short enough to leave.
        -->
        <p
            v-if="reordering"
            class="bg-primary/5 text-muted-foreground rounded-lg border px-3 py-2 text-xs"
        >
            Drag rows to change their order. Changes save as you drop them.
        </p>

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
            @apply-filters="t.applyFilters"
            @apply-columns="applyColumns"
            @clear="t.clearAll"
        />

        <SelectionBar
            v-if="t.selected.value.size"
            :count="t.selected.value.size"
            :all-matching="t.allMatching.value"
            :total="total"
            @select-all-matching="t.selectAllMatching"
            @clear="t.clearSelection"
        >
            <template #actions>
                <BulkActions
                    :actions="allowedBulkActions"
                    :count="t.selected.value.size"
                    :all-matching="t.allMatching.value"
                    :busy="job.busy.value"
                    @run="runBulk"
                    @export="exportSelection"
                />
            </template>
        </SelectionBar>

        <!--
            One boundary around the table, not one per row.

            A row that throws does so because of the SHAPE of the data - a
            column renderer meeting a type it did not expect - and that shape is
            almost always shared by every row on the page. Twenty-five identical
            failure cards is not more useful than one, and it is much harder to
            read.
        -->
        <PkBoundary label="The table">
        <DataTable
            :group-by="schema.table.groupBy ?? null"
            :reordering="reordering"
            @reorder="persistOrder"
            @row-contextmenu="onRowContextMenu"
            :row-clickable="schema.table.rowClick === 'view'"
            @row-click="onRowClick"
            :columns="columns"
            :rows="t.rows.value"
            :hidden="hidden"
            :sort="sort"
            :direction="direction"
            :loading="t.loading.value"
            :filtered="t.isFiltered.value"
            selectable
            :selected="t.selected.value"
            :summaries="columnSummaries"
            :summary-values="(page.props.summary as any) ?? null"
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

                Nothing here names a resource - badge colouring comes from the
                schema's semantic map, and formatting from the column type.
            -->
            <template v-for="col in columns" :key="col.key" #[`cell:${col.key}`]="{ row }">
                <EditableCell
                    v-if="byKey[col.key]?.editable"
                    :type="byKey[col.key].type === 'toggle' ? 'toggle' : 'select'"
                    :value="cellValue(row, col.key)"
                    :options="byKey[col.key].options ?? {}"
                    :on-label="byKey[col.key].onLabel"
                    :off-label="byKey[col.key].offLabel"
                    :busy="savingCell === `${row.id}:${col.key}`"
                    :disabled="!can.update"
                    @change="(value: unknown) => editCell(row, col.key, value)"
                />
                <IconCell
                    v-else-if="byKey[col.key]?.type === 'icon'"
                    :value="row[col.key]"
                    :icons="byKey[col.key].icons ?? {}"
                    :colors="byKey[col.key].colors ?? {}"
                    :labels="byKey[col.key].labels ?? {}"
                    :default-icon="byKey[col.key].defaultIcon ?? 'dot'"
                />
                <ImageCell
                    v-else-if="byKey[col.key]?.type === 'image'"
                    :src="row[col.key]"
                    :fallback-text="row[byKey[col.key].fallbackFrom ?? 'name']"
                    :rounded="byKey[col.key].rounded !== false"
                    :size="byKey[col.key].size ?? 'md'"
                    :fallback="byKey[col.key].fallback ?? 'initials'"
                />
                <Badge
                    v-else-if="badgeKeys.includes(col.key)"
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
                <RecordActions
                    :ref="(el: any) => registerRowMenu(row.id, el)"
                    :groups="menuFor(row)"
                    :title="row.name ?? `#${row.id}`"
                    :busy="busyActionFor(row)"
                    @run="onRecordAction(row, $event)"
                />
            </template>
        </DataTable>
        </PkBoundary>

        <TablePagination
            :page="t.page.value"
            :per-page="perPage"
            :per-page-options="perPageOptions"
            :rows-on-page="t.rows.value.length"
            :has-next="t.hasNext.value"
            :has-previous="t.hasPrevious.value"
            :total="total"
            :loading="t.loading.value"
            @first="t.firstPage"
            @update:per-page="t.setPerPage"
            @next="t.nextPage"
            @previous="t.previousPage"
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
