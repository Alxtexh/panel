<script setup lang="ts">
/**
 * A related list on a record's page.
 *
 * IT DOES NOT FETCH (§4 rule 2) - it takes rows and emits `load` with a cursor.
 * The page owns the request, which is what keeps this usable outside Inertia.
 *
 * ROWS ARRIVE ONLY WHEN THE TAB IS OPENED. A record page with four relations
 * must not fetch four lists to show one; a client's sessions are the reason the
 * relation exists, and their invoices can wait until someone asks.
 *
 * KEYSET, NOT A PAGE COUNT. There is no total and no last page, deliberately:
 * counting a client's 40,000 sessions to print "1-10 of 40,000" is the blocking
 * count §10 forbids everywhere else, and it does not become acceptable because
 * the list is nested.
 *
 * ONE CARD. TableShell owns the chrome (title band, actions, load-more band)
 * so a relation reads as the same object a resource index is, not a bolted-on
 * table under a loose button row.
 */
import { computed, useSlots } from 'vue'
import type { SchemaColumn } from '../../composables/useSchemaColumns'
import PkEmptyState from '../primitives/PkEmptyState.vue'
import TableShell from './TableShell.vue'

const props = withDefaults(
    defineProps<{
        columns: SchemaColumn[]
        rows: Record<string, any>[]
        loading?: boolean
        /** Present when there is another page. */
        nextCursor?: string | null
        /** True once the retained-row ceiling stopped the appending. */
        capped?: boolean
        /** True once at least one page has been requested. */
        loaded?: boolean
        /** Relation label shown in the title band. */
        title?: string | null
        emptyTitle?: string
        emptyText?: string
        /** Dedicated nested list URL. The tab stays a summary that links there. */
        indexHref?: string | null
        /** Prefix for a related row's dedicated view page. */
        recordBase?: string | null
    }>(),
    {
        loading: false,
        nextCursor: null,
        capped: false,
        loaded: false,
        title: null,
        emptyTitle: 'Nothing here yet',
        emptyText: 'Related records will show up here once they exist.',
        indexHref: null,
        recordBase: null,
    },
)

const emit = defineEmits<{ (e: 'load', cursor: string | null): void }>()

const slots = useSlots()
const visible = computed(() => props.columns.filter((c) => c.type !== 'image'))
const hasActions = computed(() => Boolean(slots.actions))
const hasTitleBand = computed(() => Boolean(props.title) || hasActions.value)

function format(column: SchemaColumn, value: unknown): string {
    if (value === null || value === undefined || value === '') {
        return 'None'
    }

    if (column.type === 'date' || column.type === 'datetime') {
        return new Date(String(value)).toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            ...(column.type === 'datetime' ? { hour: '2-digit', minute: '2-digit' } : {}),
        })
    }

    return typeof value === 'number' ? new Intl.NumberFormat().format(value) : String(value)
}

function isEmpty(value: unknown): boolean {
    return value === null || value === undefined || value === ''
}
</script>

<template>
    <TableShell>
        <template v-if="hasTitleBand" #title>
            <div class="min-w-0">
                <h3 v-if="title" class="text-sm font-semibold tracking-tight">{{ title }}</h3>
            </div>
            <div v-if="hasActions" class="flex shrink-0 flex-wrap items-center justify-end gap-2">
                <slot name="actions" />
            </div>
        </template>

        <div v-if="loading && rows.length === 0" class="text-muted-foreground px-4 py-10 text-center text-sm">
            Loading…
        </div>

        <PkEmptyState
            v-else-if="loaded && rows.length === 0"
            compact
            icon="package"
            :title="emptyTitle"
            :description="emptyText"
        >
            <template v-if="$slots['empty-actions']" #actions>
                <slot name="empty-actions" />
            </template>
        </PkEmptyState>

        <div v-else-if="rows.length > 0" class="pk-scroll w-full overflow-x-auto">
            <table class="w-full border-collapse text-sm">
                <thead class="bg-muted/40">
                    <tr>
                        <th
                            v-for="column in visible"
                            :key="column.key"
                            class="text-muted-foreground px-3 py-2.5 text-left text-xs font-medium whitespace-nowrap"
                        >
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y">
                    <tr
                        v-for="(row, i) in rows"
                        :key="row.id ?? i"
                        class="hover:bg-muted/40 transition-colors"
                    >
                        <td
                            v-for="column in visible"
                            :key="column.key"
                            class="px-3 py-2.5 whitespace-nowrap"
                            :class="[
                                column.mono ? 'font-mono text-xs' : '',
                                column.muted ? 'text-muted-foreground' : '',
                            ]"
                        >
                            <slot
                                :name="`cell:${column.key}`"
                                :row="row"
                                :value="row[column.key]"
                                :column="column"
                            >
                                <a
                                    v-if="recordBase && row.id != null && column === visible[0]"
                                    :href="`${recordBase}/${row.id}`"
                                    class="text-foreground underline-offset-2 hover:underline"
                                >
                                    {{ format(column, row[column.key]) }}
                                </a>
                                <span v-else-if="isEmpty(row[column.key])" class="text-muted-foreground">
                                    None
                                </span>
                                <template v-else>{{ format(column, row[column.key]) }}</template>
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- "More", not a page number. There is no total to count against. -->
        <template v-if="nextCursor || capped" #pagination>
            <div v-if="nextCursor" class="flex justify-center">
                <button
                    type="button"
                    class="bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium disabled:opacity-50"
                    :disabled="loading"
                    @click="emit('load', nextCursor)"
                >
                    {{ loading ? 'Loading…' : 'Load more' }}
                </button>
            </div>

            <!--
                THE CEILING, SAID OUT LOUD. This panel appends every page it
                fetches, so an unattended "Load more" grows the DOM without limit -
                the one unbounded list left after the tables were paginated. It
                stops at a cap and says why, rather than degrading the record page
                for somebody who kept clicking. A relation this long has a real
                home: its own screen, with tabs, filters and paging.
            -->
            <p v-else-if="capped" class="text-muted-foreground text-center text-xs">
                Showing the first {{ rows.length }}.
                <a
                    v-if="indexHref"
                    :href="indexHref"
                    class="text-foreground underline-offset-2 hover:underline"
                >
                    Open the full list
                </a>
                <template v-else>Open the full list to search or filter the rest.</template>
            </p>
        </template>
    </TableShell>
</template>
