<script setup lang="ts">
/**
 * A capped resource list on the dashboard. Same DataTable as the index.
 *
 * ChartWidget type('table') is a labelled fact list. This is the resource's
 * own columns and a limited ListQuery: no pager, no selection. Echo replaces
 * poll when `table.live` is set and `window.Echo` exists.
 */
import { Deferred, Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { DataTable, PkBoundary, useSchemaColumns } from '@alxtexh-enterprise/panel'
import type { SchemaColumn } from '@alxtexh-enterprise/panel'
import { useWidgetPoll } from '../../composables/useWidgetPoll'

export interface TableWidgetDecl {
    key: string
    label: string
    description: string | null
    span: number
    limit: number
    href: string | null
    poll?: number | null
    live?: string | null
}

interface TableWidgetValue {
    records: Record<string, unknown>[]
    columns: SchemaColumn[]
    rowKey: string
    error: boolean
}

const props = defineProps<{
    table: TableWidgetDecl
    dataKey: string
}>()

const page = usePage()

const resolved = computed(
    () => (page.props as Record<string, unknown>)[props.dataKey] as TableWidgetValue | undefined,
)

const schemaColumns = computed<SchemaColumn[]>(() => resolved.value?.columns ?? [])
const { columns } = useSchemaColumns(schemaColumns)

useWidgetPoll(
    () => [props.dataKey],
    () => props.table.poll ?? null,
    () => props.table.live ?? null,
)
</script>

<template>
    <PkBoundary :label="table.label">
        <Deferred :data="dataKey">
            <template #fallback>
                <div class="rounded-lg border bg-card">
                    <div class="border-b px-4 py-3">
                        <h2 class="text-sm font-medium">{{ table.label }}</h2>
                    </div>
                    <DataTable
                        :columns="[]"
                        :rows="[]"
                        :selectable="false"
                        :framed="false"
                        loading
                        empty-title="Loading"
                    />
                </div>
            </template>

            <template #default>
                <div class="rounded-lg border bg-card">
                    <div class="flex items-center justify-between gap-3 border-b px-4 py-3">
                        <div class="min-w-0">
                            <h2 class="text-sm font-medium">{{ table.label }}</h2>
                            <p
                                v-if="table.description"
                                class="text-muted-foreground truncate text-xs"
                            >
                                {{ table.description }}
                            </p>
                        </div>
                        <Link
                            v-if="table.href"
                            :href="table.href"
                            class="text-muted-foreground shrink-0 text-xs hover:text-foreground hover:underline"
                        >
                            View all
                        </Link>
                    </div>
                    <p v-if="resolved?.error" class="text-destructive p-4 text-sm">
                        This list could not be loaded.
                    </p>
                    <DataTable
                        v-else
                        :columns="columns"
                        :rows="resolved?.records ?? []"
                        :row-key="resolved?.rowKey ?? 'id'"
                        :selectable="false"
                        :framed="false"
                        :empty-title="`No ${table.label.toLowerCase()} yet`"
                    />
                </div>
            </template>
        </Deferred>
    </PkBoundary>
</template>
