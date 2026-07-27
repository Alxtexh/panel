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
         * Footer aggregate DEFINITIONS, keyed by column key — how to render.
         * Structure travels with the schema; the values arrive separately.
         */
        summaries?: Record<string, { kind: string; label: string | null; prefix: string | null; suffix: string | null; divideBy: number | null; decimals: number }> | null
        /** The computed values, once the deferred prop lands. */
        summaryValues?: Record<string, number | null> | null
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
    },
)

const emit = defineEmits<{
    (e: 'sort', key: string): void
    (e: 'toggle-row', id: string | number): void
    (e: 'toggle-page', select: boolean): void
}>()

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

    if (!definition) return ''

    // Null is "no matching rows", which is not zero — an average over nothing
    // is undefined, and printing 0 would assert something false.
    if (raw === null || raw === undefined) return '—'

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
        large empty area between the last row and the pagination — dead space
        that reads as a broken layout.

        max-h-full then clipped the last row instead, because 100% of the parent
        ignores the title, tabs, toolbar and pagination sharing that column, so
        the cap was too generous by exactly their height.

        grow-0 + shrink + basis-auto hugs the content when it fits and shrinks
        only when it genuinely cannot. min-h-0 is what allows the shrink at all.
    -->
    <div class="pk-scroll relative min-h-0 w-full min-w-0 shrink grow-0 overflow-auto rounded-lg border">
        <table class="w-full border-collapse text-sm">
            <thead class="bg-background sticky top-0 z-10">
                <tr class="bg-muted/50">
                    <th v-if="selectable" class="w-10 border-b px-3 py-2.5">
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
                            <span v-if="isSortedBy(col)" class="text-xs">{{ direction === 'desc' ? '↓' : '↑' }}</span>
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

            <!-- Dimmed, never unmounted — scroll position and selection survive
                 a reload (§10). -->
            <tbody :class="loading ? 'opacity-50 transition-opacity' : 'transition-opacity'">
                <tr
                    v-for="row in rows"
                    :key="row[rowKey]"
                    class="hover:bg-muted/40 group pk-row border-b transition-colors"
                                        :class="
                        selected?.has(row[rowKey])
                            ? 'bg-primary/5 shadow-[inset_3px_0_0_0_var(--color-primary)]'
                            : ''
                    "
                >
                    <td v-if="selectable" class="px-3 py-2">
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
                        <slot :name="`cell:${col.key}`" :row="row" :value="row[col.key]" :column="col">
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
                            <span v-else>{{ row[col.key] ?? '—' }}</span>
                        </slot>
                    </td>

                    <td
                        v-if="$slots.actions"
                        class="pk-actions bg-background group-hover:bg-muted/40 sticky right-0 border-l px-2 py-2 text-right shadow-[-8px_0_8px_-8px_rgb(0_0_0/0.25)]"
                    >
                        <slot name="actions" :row="row" />
                    </td>
                </tr>
            </tbody>

            <!--
                The footer totals the FILTERED SET, not the page.

                Rendered as a real <tfoot> so it aligns with the columns and
                stays with the table when it scrolls horizontally. It is absent
                until the deferred values arrive, rather than showing zeroes —
                a total that reads 0 and then changes is worse than one that
                appears a moment late.
            -->
            <tfoot v-if="hasSummary" class="bg-muted/40 border-t-2">
                <tr>
                    <td v-if="selectable" />
                    <template v-for="col in columns" :key="`s-${col.key}`">
                        <td
                            v-if="!hidden.has(col.key)"
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
 * styling produces heavy grey bars framing the data — visual weight that
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
 * unclickable even though it is plainly visible — a failure that looks like a
 * dead button rather than a layering bug.
 */
td.pk-actions,
th.pk-actions {
    z-index: 2;
}
</style>
