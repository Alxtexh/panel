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
 */
import { computed } from 'vue'
import type { SchemaColumn } from '../../composables/useSchemaColumns'

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
        emptyText?: string
    }>(),
    {
        loading: false,
        nextCursor: null,
        capped: false,
        loaded: false,
        emptyText: 'Nothing here yet.',
    },
)

const emit = defineEmits<{ (e: 'load', cursor: string | null): void }>()

const visible = computed(() => props.columns.filter((c) => c.type !== 'image'))

function format(column: SchemaColumn, value: unknown): string {
    if (value === null || value === undefined || value === '') {
        return '-'
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
</script>

<template>
    <!-- ONE CARD - DESIGN_RULES rule 4: the load-more band shares the table's
         border rather than floating beneath it as a separate object. -->
    <div class="bg-card overflow-hidden rounded-lg border">
        <div class="pk-scroll w-full overflow-x-auto">
            <table class="w-full border-collapse text-sm">
                <thead class="bg-muted/40">
                    <tr>
                        <th
                            v-for="column in visible"
                            :key="column.key"
                            class="text-muted-foreground px-3 py-2 text-left text-xs font-medium whitespace-nowrap"
                        >
                            {{ column.label }}
                        </th>
                    </tr>
                </thead>

                <tbody class="divide-y">
                    <tr v-if="loading && rows.length === 0">
                        <td
                            :colspan="visible.length"
                            class="text-muted-foreground px-3 py-6 text-center text-sm"
                        >
                            Loading…
                        </td>
                    </tr>

                    <tr v-else-if="loaded && rows.length === 0">
                        <td
                            :colspan="visible.length"
                            class="text-muted-foreground px-3 py-6 text-center text-sm"
                        >
                            {{ emptyText }}
                        </td>
                    </tr>

                    <tr v-for="(row, i) in rows" :key="row.id ?? i" class="hover:bg-accent/30">
                        <td
                            v-for="column in visible"
                            :key="column.key"
                            class="px-3 py-2 whitespace-nowrap"
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
                                {{ format(column, row[column.key]) }}
                            </slot>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- "More", not a page number. There is no total to count against. -->
        <div v-if="nextCursor" class="flex justify-center border-t px-3 py-2">
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
        <p v-else-if="capped" class="text-muted-foreground border-t px-3 py-2 text-center text-xs">
            Showing the first {{ rows.length }}. Open the full list to search or filter the rest.
        </p>
    </div>
</template>
