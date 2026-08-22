<script setup lang="ts">
/**
 * Opt-in kit showcase (`Panel::kitShowcase()` / apps(['showcase'])).
 *
 * Domain-neutral samples only. Not the playground ISP demo.
 */
import { PkBadge, TagsCell } from '@alxtexh-enterprise/panel'
import { Head } from '@inertiajs/vue3'
import { computed } from 'vue'

defineOptions({ inheritAttrs: false })

type SampleField = { label: string; type: string; hint: string }
type SampleColumn = { key: string; label: string; type: string; group?: string; limit?: number }
type SampleWidget = { label: string; type: string; hint: string }

const props = defineProps<{
    pageHeading?: string
    pageDescription?: string | null
    samples: {
        fields: SampleField[]
        columns: SampleColumn[]
        rows: Array<Record<string, unknown>>
        widgets: SampleWidget[]
    }
}>()

const headerBands = computed(() => {
    const bands: Array<{ label: string | null; span: number; key: string }> = []

    for (const col of props.samples.columns) {
        const label = col.group ?? null
        const last = bands[bands.length - 1]

        if (last && last.label === label) {
            last.span += 1
        } else {
            bands.push({ label, span: 1, key: `${label ?? 'loose'}-${col.key}` })
        }
    }

    return bands
})

const hasGroups = computed(() => props.samples.columns.some((c) => !!c.group))

function cell(row: Record<string, unknown>, key: string): unknown {
    return row[key]
}
</script>

<template>
    <Head :title="pageHeading ?? 'Kit showcase'" />

    <div class="flex h-full min-h-0 flex-col gap-8 overflow-auto p-6">
        <header class="max-w-3xl space-y-2">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading ?? 'Kit showcase' }}</h1>
            <p class="text-muted-foreground text-sm font-normal leading-relaxed">
                {{
                    pageDescription ??
                    'Fields, table columns, and widgets from the package. Domain-neutral sample data only.'
                }}
            </p>
            <p class="text-muted-foreground text-xs font-normal">
                Enable with
                <code class="rounded bg-muted px-1 py-0.5">Panel::kitShowcase()</code>
                or
                <code class="rounded bg-muted px-1 py-0.5">apps(['showcase'])</code>.
                Keep your vertical demo on separate host pages.
            </p>
        </header>

        <section class="space-y-3">
            <h2 class="text-sm font-semibold tracking-wide uppercase">Fields</h2>
            <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="field in samples.fields"
                    :key="field.type"
                    class="border-border/80 rounded-lg border px-4 py-3"
                >
                    <div class="text-sm font-medium">{{ field.label }}</div>
                    <div class="text-muted-foreground mt-1 font-mono text-xs font-normal">{{ field.hint }}</div>
                </li>
            </ul>
        </section>

        <section class="space-y-3">
            <h2 class="text-sm font-semibold tracking-wide uppercase">Table columns</h2>
            <p class="text-muted-foreground text-sm font-normal">
                Includes
                <code class="rounded bg-muted px-1 py-0.5 text-xs">ColumnGroup</code>
                (Contact) and
                <code class="rounded bg-muted px-1 py-0.5 text-xs">TagsColumn</code>
                chips.
            </p>
            <div class="border-border/80 overflow-x-auto rounded-lg border">
                <table class="w-full border-collapse text-sm">
                    <thead class="bg-muted/40">
                        <tr v-if="hasGroups">
                            <th
                                v-for="band in headerBands"
                                :key="band.key"
                                :colspan="band.span"
                                class="text-muted-foreground border-b px-3 py-2 text-left text-xs font-medium"
                            >
                                {{ band.label ?? '' }}
                            </th>
                        </tr>
                        <tr>
                            <th
                                v-for="col in samples.columns"
                                :key="col.key"
                                class="text-muted-foreground border-b px-3 py-2.5 text-left font-medium"
                            >
                                {{ col.label }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="row in samples.rows"
                            :key="String(row.id)"
                            class="border-b last:border-b-0"
                        >
                            <td
                                v-for="col in samples.columns"
                                :key="col.key"
                                class="px-3 py-2.5 align-middle"
                            >
                                <TagsCell
                                    v-if="col.type === 'tags'"
                                    :value="cell(row, col.key)"
                                    :limit="col.limit ?? null"
                                />
                                <PkBadge
                                    v-else-if="col.type === 'badge' && cell(row, col.key)"
                                    variant="outline"
                                    class="capitalize"
                                >
                                    {{ cell(row, col.key) }}
                                </PkBadge>
                                <span v-else>{{ cell(row, col.key) }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section class="space-y-3">
            <h2 class="text-sm font-semibold tracking-wide uppercase">Widgets</h2>
            <ul class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <li
                    v-for="widget in samples.widgets"
                    :key="widget.type"
                    class="border-border/80 rounded-lg border px-4 py-3"
                >
                    <div class="flex items-center gap-2">
                        <PkBadge variant="secondary">{{ widget.type }}</PkBadge>
                        <span class="text-sm font-medium">{{ widget.label }}</span>
                    </div>
                    <div class="text-muted-foreground mt-2 font-mono text-xs font-normal">{{ widget.hint }}</div>
                </li>
            </ul>
        </section>
    </div>
</template>
