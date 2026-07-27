<script setup lang="ts">
/**
 * Dashboard.
 *
 * Every stat is its own DEFERRED prop, so the shell paints immediately and the
 * numbers fill in independently — one slow counter does not hold up the others.
 * Spec §10: no widget may block first paint.
 *
 * The skeleton matches the final card exactly, so nothing shifts when a value
 * lands. Cumulative layout shift target is 0 (§10).
 */
import { BarChart } from '@panelkit/ui'
import { Deferred, Head, usePage } from '@inertiajs/vue3'

interface Widget {
    key: string
    label: string
    description: string | null
    span: number
}

defineProps<{
    widgets: Widget[]
    chart_status?: { label: string; value: number }[]
    chart_plan_type?: { label: string; value: number }[]
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Dashboard', href: '/dashboard' }] } })

const page = usePage()

/**
 * Read the resolved value from PAGE PROPS, not from the Deferred slot.
 *
 * <Deferred> gates when its default slot renders; it does not hand the value in
 * as a slot prop. Reading `slotProps[key]` looked plausible and silently
 * rendered an em dash for every stat — the numbers were arriving correctly and
 * being thrown away.
 */
function stat(key: string): { value: unknown; error: boolean } | undefined {
    return (page.props as Record<string, any>)[`stat_${key}`]
}

const format = (v: unknown) => (typeof v === 'number' ? new Intl.NumberFormat().format(v) : String(v ?? '—'))
</script>

<template>
    <Head title="Dashboard" />

    <div class="flex h-full min-h-0 w-full min-w-0 flex-1 flex-col gap-4 p-3 sm:p-4">
        <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Dashboard</h1>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <div
                v-for="widget in widgets"
                :key="widget.key"
                class="bg-card flex flex-col gap-1 rounded-lg border p-4"
            >
                <p class="text-muted-foreground text-xs font-medium">{{ widget.label }}</p>

                <Deferred :data="`stat_${widget.key}`">
                    <template #fallback>
                        <!-- Same height as the resolved value, so the card does
                             not resize when the number arrives. -->
                        <span class="bg-muted h-8 w-24 animate-pulse rounded" />
                    </template>

                    <template #default>
                        <span
                            v-if="stat(widget.key)?.error"
                            class="text-destructive flex h-8 items-center text-sm"
                            role="alert"
                        >
                            Could not load
                        </span>
                        <span v-else class="flex h-8 items-center text-2xl font-semibold tabular-nums">
                            {{ format(stat(widget.key)?.value) }}
                        </span>
                    </template>
                </Deferred>

                <p v-if="widget.description" class="text-muted-foreground text-xs">{{ widget.description }}</p>
            </div>
        </div>

        <!-- Charts. Also deferred, and each from ONE grouped query — addendum C1
             applies to bars as much as to tabs. -->
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-2">
            <div class="bg-card flex flex-col gap-3 rounded-lg border p-4">
                <p class="text-muted-foreground text-xs font-medium">Clients by status</p>
                <Deferred data="chart_status">
                    <template #fallback>
                        <div class="bg-muted h-[160px] animate-pulse rounded" />
                    </template>
                    <BarChart :data="(page.props.chart_status as any) ?? []" />
                </Deferred>
            </div>

            <div class="bg-card flex flex-col gap-3 rounded-lg border p-4">
                <p class="text-muted-foreground text-xs font-medium">Clients by plan type</p>
                <Deferred data="chart_plan_type">
                    <template #fallback>
                        <div class="bg-muted h-[160px] animate-pulse rounded" />
                    </template>
                    <BarChart :data="(page.props.chart_plan_type as any) ?? []" />
                </Deferred>
            </div>
        </div>
    </div>
</template>
