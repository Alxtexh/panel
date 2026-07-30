<script setup lang="ts">
/**
 * The generic list table.
 *
 * TWO RULES this component exists to honour (spec §4):
 *
 *   1. It does not import Inertia. It has no idea how data arrives.
 *   2. It never fetches. Props in, events out. The consuming page decides what
 *      a sort click or a selection means.
 *
 * Everything §8 requires of the table lives here once, so no screen can forget:
 * sticky header, frozen actions column, rows keyed by record id, dim-don't-
 * unmount on reload, distinct empty states, and row selection.
 *
 * Per-cell rendering is a SLOT (`cell:<key>`), not a format enum. Three screens
 * needed badges, formatted dates, currency and units, and an enum would have
 * grown a case per screen forever.
 */
import { computed, ref } from 'vue'
import type { SortDirection, TableColumn } from './types'

const props = withDefaults(
    defineProps<{
        columns: TableColumn[]
        rows: Record<string, any>[]
        /**
         * Cluster rows under headings, by this row key.
         *
         * The rows arrive already ORDERED by it - grouping is an ordering, not
         * an aggregation - so all that happens here is inserting a heading
         * wherever the value changes. Nothing is re-sorted or bucketed on the
         * client, which is what keeps this free on a page of any size.
         */
        groupBy?: { key: string; label: string } | null
        /**
         * Whether the table is CURRENTLY in reorder mode.
         *
         * A MODE, NOT A PERMANENT AFFORDANCE. Handles on every row all the time
         * are clutter on a table nobody reorders daily, and they turn an
         * ordinary list into something that looks half-editable. Filament gets
         * this right: reordering is entered deliberately, and while you are in
         * it the table stops being a list you read and becomes a thing you
         * arrange.
         *
         * The PAGE owns the flag, because entering the mode also suppresses
         * selection and sorting - decisions that belong with the toolbar rather
         * than with the rows.
         */
        reordering?: boolean
        /**
         * Whether a click on the row body opens the record.
         *
         * The PAGE decides what "opens" means and whether the operator may -
         * this component only reports that a row was clicked somewhere that was
         * not another control. Declared server-side per resource; see
         * `Table::rowClick()`.
         */
        rowClickable?: boolean
        rowKey?: string
        sort?: string
        direction?: SortDirection
        loading?: boolean
        hidden?: Set<string>
        selectable?: boolean
        /** Ids selected on the current page. */
        selected?: Set<string | number>
        /** Distinguishes "nothing here" from "nothing matches your filters". */
        filtered?: boolean
        emptyTitle?: string
        emptyHint?: string
        /**
         * Footer aggregate DEFINITIONS, keyed by column key - how to render.
         * Structure travels with the schema; the values arrive separately.
         */
        summaries?: Record<
            string,
            {
                kind: string
                label: string | null
                prefix: string | null
                suffix: string | null
                divideBy: number | null
                decimals: number
            }
        > | null
        /** The computed values, once the deferred prop lands. */
        summaryValues?: Record<string, number | null> | null
        /**
         * Whether the table draws its own border and rounding.
         *
         * False inside a `TableShell`, which owns the ONE border around
         * tabs, toolbar, rows and pagination together (DESIGN_RULES rule
         * 4) - a second border here would draw a box inside the box. True
         * by default so a bare table dropped anywhere still looks finished.
         */
        framed?: boolean
    }>(),
    {
        rowKey: 'id',
        direction: 'desc',
        loading: false,
        filtered: false,
        selectable: false,
        summaries: null,
        summaryValues: null,
        emptyTitle: 'Nothing here yet',
        framed: true,
    },
)

/**
 * Whether this row opens a new group.
 *
 * TRUE FOR THE FIRST ROW OF EVERY PAGE, deliberately. A group can span a page
 * boundary - the page size is fixed and the groups are whatever size they are -
 * so page 2 may open mid-group, and it needs a heading saying which one or the
 * rows underneath have no label at all.
 */
function startsGroup(index: number): boolean {
    if (!props.groupBy) {
        return false
    }

    if (index === 0) {
        return true
    }

    return props.rows[index]?.[props.groupBy.key] !== props.rows[index - 1]?.[props.groupBy.key]
}

/** The heading text: the row's own value, or a placeholder for null. */
function groupValue(row: Record<string, any>): string {
    const value = props.groupBy ? row[props.groupBy.key] : null

    return value === null || value === undefined || value === '' ? 'None' : String(value)
}

/* ------------------------------------------------------------- reordering */

/** The row index currently being dragged, or null. */
const dragging = ref<number | null>(null)

/** The index it would drop into, for the insertion line. */
const dragOver = ref<number | null>(null)

function onDragStart(index: number, event: DragEvent) {
    dragging.value = index

    // Required for Firefox to start a drag at all, and the payload is unused -
    // the indices live in component state, not in the drag data.
    event.dataTransfer?.setData('text/plain', String(index))

    if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move'
    }
}

/**
 * Where the dragged row would land, as an insertion line.
 *
 * Drawn on the edge the row would enter from - above when moving up, below when
 * moving down - because a line on a fixed edge is ambiguous about which side of
 * the hovered row you are dropping onto.
 */
/** Clears the drag state however the gesture ends, including a cancelled one. */
function onDragEnd() {
    dragging.value = null
    dragOver.value = null
}

function dropEdge(index: number): string {
    if (dragging.value === null || dragOver.value !== index) {
        return ''
    }

    return dragging.value > index ? 'border-primary border-t-2' : 'border-primary border-b-2'
}

function onDragOver(index: number, event: DragEvent) {
    if (dragging.value === null) {
        return
    }

    event.preventDefault()
    dragOver.value = index
}

function onDrop(index: number) {
    const from = dragging.value

    dragging.value = null
    dragOver.value = null

    if (from === null || from === index) {
        return
    }

    /*
     * The reordered ids are emitted; the PAGE owns the rows.
     *
     * Splicing them here would mean this component mutated a prop, and the
     * optimistic update and the request would then live in different places -
     * so a failed save could leave the table showing an order the server never
     * accepted.
     */
    const ids = props.rows.map((row) => row[props.rowKey])
    const [moved] = ids.splice(from, 1)

    ids.splice(index, 0, moved)

    emit('reorder', ids)
}

const emit = defineEmits<{
    (e: 'sort', key: string): void
    (e: 'toggle-row', id: string | number): void
    (e: 'toggle-page', select: boolean): void
    /** The page's ids in their new order, after a drop. */
    (e: 'reorder', ids: (string | number)[]): void
    /**
     * Right-click on a row, with the raw event so a menu can open at the cursor.
     *
     * The DEFAULT IS NOT PREVENTED HERE. A table that swallows the browser's own
     * context menu whether or not it has anything to offer takes away Copy and
     * Inspect and gives back nothing. The listener decides - it prevents the
     * default only once it knows the row actually has actions.
     */
    (e: 'row-contextmenu', row: Record<string, unknown>, event: MouseEvent): void
    /** A plain click on the row body, already filtered for stray targets. */
    (e: 'row-click', row: Record<string, unknown>): void
}>()

/**
 * A click counts as "the row" only if it hit none of the row's own controls.
 *
 * WITHOUT THIS THE ROW EATS EVERYTHING INSIDE IT - the select checkbox, the
 * actions menu, an editable cell, a copy button, a link to a related record.
 * Each of those is a control somebody aimed at deliberately, and navigating
 * away instead is the single most irritating way for this feature to be wrong.
 *
 * A TEXT SELECTION IS NOT A CLICK EITHER. Dragging across a cell to read or
 * copy a value ends in a mouseup on the row, which is indistinguishable from a
 * click unless the selection is checked - and on a table of account numbers,
 * selecting text is something people do constantly.
 */
function onRowClick(row: Record<string, unknown>, event: MouseEvent) {
    if (!props.rowClickable || props.reordering) {
        return
    }

    // Modified clicks belong to the browser: ctrl/cmd-click and middle-click
    // mean "open in a new tab" everywhere else and must keep meaning it.
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
    }

    const target = event.target as HTMLElement | null

    if (target?.closest('a, button, input, select, textarea, label, [role="menuitem"]')) {
        return
    }

    if ((window.getSelection()?.toString().length ?? 0) > 0) {
        return
    }

    emit('row-click', row)
}

const copied = ref<string | null>(null)

const visibleColumns = computed(() => props.columns.filter((c) => !props.hidden?.has(c.key)))

const pageIds = computed(() => props.rows.map((r) => r[props.rowKey] as string | number))

const allOnPageSelected = computed(
    () => pageIds.value.length > 0 && pageIds.value.every((id) => props.selected?.has(id)),
)

/**
 * Header checkbox shows a third state when only some rows are selected.
 *
 * Without it, a partially-selected page renders an unchecked box, and clicking
 * it looks like "select all" while actually clearing an existing selection.
 */
const someOnPageSelected = computed(
    () => !allOnPageSelected.value && pageIds.value.some((id) => props.selected?.has(id)),
)

function sortKeyOf(column: TableColumn): string {
    return column.sortKey ?? column.key
}

function isSortedBy(column: TableColumn): boolean {
    return props.sort === sortKeyOf(column)
}

async function copy(rowId: string, column: TableColumn, value: unknown) {
    try {
        await navigator.clipboard.writeText(String(value))
        copied.value = `${rowId}-${column.key}`
        setTimeout(() => (copied.value = null), 1200)
    } catch {
        // Clipboard needs a secure context; failing silently beats throwing.
    }
}

/**
 * The footer only renders once the VALUES arrive.
 *
 * Showing the labels with blank or zero cells while the aggregate is still
 * running reads as "the total is zero", which is a wrong answer rather than a
 * pending one.
 */
const hasSummary = computed(
    () => !!props.summaries && !!props.summaryValues && Object.keys(props.summaries).length > 0,
)

function summaryFor(key: string) {
    return props.summaries?.[key] ?? null
}

function summaryValue(key: string): string {
    const definition = props.summaries?.[key]
    const raw = props.summaryValues?.[key]

    if (!definition) {
        return ''
    }

    // Null is "no matching rows", which is not zero - an average over nothing
    // is undefined, and printing 0 would assert something false.
    if (raw === null || raw === undefined) {
        return '-'
    }

    const value = definition.divideBy ? raw / definition.divideBy : raw

    const formatted = new Intl.NumberFormat(undefined, {
        minimumFractionDigits: definition.decimals,
        maximumFractionDigits: definition.decimals,
    }).format(value)

    return `${definition.prefix ?? ''}${formatted}${definition.suffix ?? ''}`
}
</script>

<template>
    <!--
        `min-h-0 shrink`, not `flex-1` and not `max-h-full`.

        flex-1 stretched this box to fill the shell, so a 10-row page left a
        large empty area between the last row and the pagination - dead space
        that reads as a broken layout.

        max-h-full then clipped the last row instead, because 100% of the parent
        ignores the title, tabs, toolbar and pagination sharing that column, so
        the cap was too generous by exactly their height.

        grow-0 + shrink + basis-auto hugs the content when it fits and shrinks
        only when it genuinely cannot. min-h-0 is what allows the shrink at all.
    -->
    <div
        class="pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto"
        :class="framed ? 'rounded-lg border' : ''"
    >
        <table class="w-full border-collapse text-sm">
            <thead class="bg-background sticky top-0 z-10">
                <tr class="bg-muted/50">
                    <!-- Unlabelled: the handles below say what it is, and a
                         heading over a column of grips is noise. -->
                    <th v-if="reordering" class="w-8 border-b px-2 py-2.5" />

                    <th v-if="selectable && !reordering" class="w-10 border-b px-3 py-2.5">
                        <input
                            type="checkbox"
                            class="accent-primary size-3.5 cursor-pointer align-middle"
                            :checked="allOnPageSelected"
                            :indeterminate="someOnPageSelected"
                            aria-label="Select all rows on this page"
                            @change="emit('toggle-page', !allOnPageSelected)"
                        />
                    </th>

                    <th
                        v-for="col in visibleColumns"
                        :key="col.key"
                        class="text-muted-foreground border-b px-3 py-2.5 text-left font-medium whitespace-nowrap"
                    >
                        <button
                            v-if="col.sortable"
                            class="hover:text-foreground inline-flex items-center gap-1 transition-colors"
                            @click="emit('sort', sortKeyOf(col))"
                        >
                            {{ col.label }}
                            <span v-if="isSortedBy(col)" class="text-xs">{{
                                direction === 'desc' ? '↓' : '↑'
                            }}</span>
                            <span v-else class="text-xs opacity-40">↕</span>
                        </button>
                        <span v-else>{{ col.label }}</span>
                    </th>

                    <!-- Frozen actions column. The shadow is not decoration:
                         without a depth cue a pinned column overlaying scrolled
                         content reads as a rendering bug, most obviously on a
                         phone. -->
                    <th
                        v-if="$slots.actions"
                        class="pk-actions bg-muted/50 sticky right-0 w-12 border-b border-l px-2 py-2.5 shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                    >
                        <span class="sr-only">Actions</span>
                    </th>
                </tr>
            </thead>

            <!-- Dimmed, never unmounted - scroll position and selection survive
                 a reload (§10). -->
            <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                <template v-for="(row, index) in rows" :key="row[rowKey]">
                    <!--
                        A heading whenever the value changes from the previous
                        row - including on the FIRST row of a page, which is how
                        a group that spans a page boundary is shown continuing
                        rather than starting over.
                    -->
                    <tr v-if="groupBy && startsGroup(index)" class="bg-muted/40">
                        <td
                            :colspan="
                                columns.length + (selectable ? 1 : 0) + (reordering ? 1 : 0) + 1
                            "
                            class="text-muted-foreground px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase"
                        >
                            <span class="text-muted-foreground/70">{{ groupBy.label }}:</span>
                            {{ groupValue(row) }}
                        </td>
                    </tr>

                    <tr
                        class="hover:bg-muted/40 group pk-row border-b transition-colors"
                        :class="[
                            selected?.has(row[rowKey])
                                ? 'bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]'
                                : '',
                            dragging === index ? 'opacity-40' : '',
                            dropEdge(index),
                            reordering ? 'cursor-grab active:cursor-grabbing' : '',
                            rowClickable && !reordering ? 'cursor-pointer' : '',
                        ]"
                        :draggable="reordering"
                        @dragstart="onDragStart(index, $event)"
                        @dragover="onDragOver(index, $event)"
                        @drop.prevent="onDrop(index)"
                        @dragend="onDragEnd"
                        @contextmenu="emit('row-contextmenu', row, $event)"
                        @click="onRowClick(row, $event)"
                    >
                        <!--
                        THE WHOLE ROW DRAGS, and only in reorder mode.
                        
                        An earlier version made just the grip draggable, which
                        meant aiming at a 16px target to move a row - and it
                        needed a `mousedown` to arm `draggable` first, which is
                        fragile across browsers. Inside a mode where reordering
                        is the only thing you can do, the row itself is the
                        obvious handle and the grip is just the affordance
                        saying so.
                    -->
                        <td v-if="reordering" class="w-8 px-2 py-2 align-middle">
                            <span
                                class="text-muted-foreground/50 flex cursor-grab active:cursor-grabbing"
                                aria-hidden="true"
                            >
                                <svg
                                    class="size-4"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <circle cx="9" cy="6" r="1.5" />
                                    <circle cx="15" cy="6" r="1.5" />
                                    <circle cx="9" cy="12" r="1.5" />
                                    <circle cx="15" cy="12" r="1.5" />
                                    <circle cx="9" cy="18" r="1.5" />
                                    <circle cx="15" cy="18" r="1.5" />
                                </svg>
                            </span>
                        </td>

                        <td v-if="selectable && !reordering" class="px-3 py-2">
                            <input
                                type="checkbox"
                                class="accent-primary size-3.5 cursor-pointer align-middle"
                                :checked="selected?.has(row[rowKey])"
                                :aria-label="`Select row ${row[rowKey]}`"
                                @change="emit('toggle-row', row[rowKey])"
                            />
                        </td>

                        <td
                            v-for="col in visibleColumns"
                            :key="col.key"
                            class="px-3 py-2 whitespace-nowrap"
                            :class="col.cellClass"
                        >
                            <slot
                                :name="`cell:${col.key}`"
                                :row="row"
                                :value="row[col.key]"
                                :column="col"
                            >
                                <span v-if="col.copyable" class="inline-flex items-center gap-1.5">
                                    {{ row[col.key] }}
                                    <button
                                        type="button"
                                        class="text-muted-foreground hover:text-foreground rounded p-0.5 opacity-0 transition group-hover:opacity-100 focus-visible:opacity-100"
                                        :aria-label="`Copy ${col.label.toLowerCase()}`"
                                        @click="copy(String(row[rowKey]), col, row[col.key])"
                                    >
                                        <span class="text-xs">{{
                                            copied === `${row[rowKey]}-${col.key}` ? '✓' : '⧉'
                                        }}</span>
                                    </button>
                                </span>
                                <span v-else>{{ row[col.key] ?? '-' }}</span>
                            </slot>
                        </td>

                        <td
                            v-if="$slots.actions"
                            class="pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                        >
                            <slot name="actions" :row="row" />
                        </td>
                    </tr>
                </template>
            </tbody>

            <!--
                The footer totals the FILTERED SET, not the page.

                Rendered as a real <tfoot> so it aligns with the columns and
                stays with the table when it scrolls horizontally. It is absent
                until the deferred values arrive, rather than showing zeroes -
                a total that reads 0 and then changes is worse than one that
                appears a moment late.
            -->
            <tfoot v-if="hasSummary" class="bg-muted/40 border-t-2">
                <tr>
                    <td v-if="selectable" />
                    <template v-for="col in columns" :key="`s-${col.key}`">
                        <td
                            v-if="!hidden?.has(col.key)"
                            class="px-3 py-2 align-top text-sm whitespace-nowrap"
                            :class="col.cellClass"
                        >
                            <template v-if="summaryFor(col.key)">
                                <span class="text-muted-foreground block text-[10px] font-medium">
                                    {{ summaryFor(col.key)!.label }}
                                </span>
                                <span class="font-semibold tabular-nums">
                                    {{ summaryValue(col.key) }}
                                </span>
                            </template>
                        </td>
                    </template>
                    <td v-if="$slots.actions" />
                </tr>
            </tfoot>
        </table>

        <!-- "No results for your filter" and "no data at all" are different
             problems with different fixes, so they are different states (§8). -->
        <div v-if="rows.length === 0 && filtered" class="text-muted-foreground p-10 text-center">
            <p class="font-medium">Nothing matches these filters</p>
            <slot name="clear-filters" />
        </div>
        <div v-else-if="rows.length === 0" class="text-muted-foreground p-10 text-center">
            <p class="font-medium">{{ emptyTitle }}</p>
            <p v-if="emptyHint" class="text-sm">{{ emptyHint }}</p>
        </div>
    </div>
</template>

<style scoped>
/**
 * Near-invisible scrollbars.
 *
 * A fixed shell means the table scrolls internally, which on default browser
 * styling produces heavy grey bars framing the data - visual weight that
 * competes with the content and reads as chrome rather than affordance.
 *
 * Thin, transparent-tracked, tinting only on hover. Deliberately NOT
 * `scrollbar-width: none`: hiding a scrollbar outright removes the only cue
 * that there is more content sideways.
 */
.pk-scroll {
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    transition: scrollbar-color 150ms ease;
}

.pk-scroll:hover,
.pk-scroll:focus-within {
    scrollbar-color: color-mix(in oklch, currentColor 25%, transparent) transparent;
}

.pk-scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}

.pk-scroll::-webkit-scrollbar-track {
    background: transparent;
}

.pk-scroll::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 9999px;
    transition: background 150ms ease;
}

.pk-scroll:hover::-webkit-scrollbar-thumb,
.pk-scroll:focus-within::-webkit-scrollbar-thumb {
    background: color-mix(in oklch, currentColor 22%, transparent);
}

.pk-scroll::-webkit-scrollbar-corner {
    background: transparent;
}

/**
 * The frozen actions column must sit above every other cell.
 *
 * Without an explicit stacking order a later sticky cell can paint over the
 * actions column while the table is scrolled horizontally, making the row menu
 * unclickable even though it is plainly visible - a failure that looks like a
 * dead button rather than a layering bug.
 */
td.pk-actions,
th.pk-actions {
    z-index: 2;
}
</style>
