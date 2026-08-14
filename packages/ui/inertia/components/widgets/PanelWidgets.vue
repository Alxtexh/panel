<script setup lang="ts">
/**
 * A row of widgets, on any screen that hosts them.
 *
 * THE THIRD HOST HAD NOWHERE TO RENDER. `WidgetSet` serialises stats and charts
 * for three hosts - `DashboardPage`, `Resource::headerWidgets()` and
 * `Page::headerWidgets()` - and only the dashboard drew them. `ResourceIndex`
 * drew the stats and dropped the charts on the floor; a custom page received
 * the props and had nothing to draw either with, so `Page::headerWidgets()` was
 * a declared extension point whose output was invisible. This is that renderer,
 * once, for all three.
 *
 * READ OFF PAGE PROPS RATHER THAN `defineProps`, because the server sends NO
 * KEY AT ALL when a screen declares no widgets - which is nearly every screen.
 * `v-if` on the prop, not on its length, is what keeps the common case
 * byte-identical to having no row: an empty array would draw an empty grid with
 * spacing around nothing.
 *
 * THE PREFIX IS THE SEAM. `WidgetSet::props($widgets, $user, $prefix)`
 * namespaces every key it emits, so one screen can host more than one set. The
 * dashboard uses the default `''`-ish keys of its own making; a header row uses
 * `header`. Passing it here is what lets this component serve both without
 * knowing which screen it is on.
 *
 * THE RESOLVED VALUE COMES FROM PAGE PROPS, NOT THE `<Deferred>` SLOT.
 * `<Deferred>` gates WHEN its default slot renders; it does not hand the value
 * in as a slot prop. Reading `slotProps[key]` looks plausible and silently
 * renders an em dash for every card - the numbers arrive correctly and are
 * thrown away. That bug has been paid for twice in this codebase already.
 */
import { Deferred, usePage } from '@inertiajs/vue3'
import { ChartCard, PkBoundary, StatCard, TrendBadge } from '@alxtexh-enterprise/panel'
import { computed } from 'vue'
import ChartBody from './ChartBody.vue'
import { emptySeries, type Chart, type Series, type StatDefinition, type StatValue } from './types'

const props = withDefaults(
    defineProps<{
        /** Matches the `$prefix` given to `WidgetSet::props()` on the server. */
        prefix?: string
    }>(),
    { prefix: 'header' },
)

const page = usePage()

const bag = computed(() => page.props as Record<string, any>)

const stats = computed<StatDefinition[]>(() => bag.value[`${props.prefix}Widgets`] ?? [])

const charts = computed<Chart[]>(() => bag.value[`${props.prefix}Charts`] ?? [])

function stat(key: string): StatValue | undefined {
    return bag.value[`${props.prefix}_stat_${key}`] as StatValue | undefined
}

function series(key: string): Series {
    return (bag.value[`${props.prefix}_chart_${key}`] as Series | undefined) ?? emptySeries()
}

/**
 * How tall the plot area is, per renderer.
 *
 * A RANKED BAR NEEDS ROOM FOR ITS LABELS - it is the one chart whose category
 * axis carries long names, and at the default height they overlap into an
 * unreadable smear.
 */
function bodyHeight(chart: Chart): number {
    if (chart.type === 'segments') {
        return 64
    }

    if (chart.type === 'rankedBar') {
        return 380
    }

    if (chart.type === 'heatmap') {
        return 200
    }

    return 220
}
</script>

<template>
    <!--
        THE FALLBACK IS A LOADING CARD, NOT A BLANK. Every value here is
        deferred, so the row draws its labels immediately and fills in.

        `PkBoundary` PER CARD, so one widget throwing loses one tile rather than
        the screen it sits on.
    -->
    <div
        v-if="stats?.length"
        class="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
        <PkBoundary v-for="widget in stats" :key="widget.key" :label="widget.label" fill>
            <Deferred :data="`${prefix}_stat_${widget.key}`">
                <template #fallback>
                    <StatCard :label="widget.label" :description="widget.description" loading />
                </template>

                <template #default>
                    <StatCard
                        :label="widget.label"
                        :description="widget.description"
                        :value="stat(widget.key)?.value"
                        :trend="stat(widget.key)?.trend"
                        :sparkline="stat(widget.key)?.sparkline"
                        :error="stat(widget.key)?.error"
                    />
                </template>
            </Deferred>
        </PkBoundary>
    </div>

    <!--
        `fill` because these are GRID CELLS: without it a row of cards is only
        as tall as its shortest, which reads as misalignment.
    -->
    <div v-if="charts?.length" class="grid grid-cols-1 gap-3 lg:grid-cols-2">
        <PkBoundary
            v-for="chart in charts"
            :key="chart.key"
            :label="chart.label"
            :class="chart.span >= 2 ? 'lg:col-span-2' : ''"
            fill
        >
            <Deferred :data="`${prefix}_chart_${chart.key}`">
                <template #fallback>
                    <ChartCard
                        :label="chart.label"
                        :description="chart.description"
                        :body-height="bodyHeight(chart)"
                        loading
                    />
                </template>

                <template #default>
                    <ChartCard
                        :label="chart.label"
                        :description="chart.description"
                        :error="series(chart.key).error"
                        :body-height="bodyHeight(chart)"
                    >
                        <template v-if="series(chart.key).trend" #trend>
                            <TrendBadge
                                class="mt-1"
                                :direction="series(chart.key).trend!.direction"
                                :percentage="series(chart.key).trend!.percentage"
                            />
                        </template>

                        <ChartBody :chart="chart" :data="series(chart.key)" />
                    </ChartCard>
                </template>
            </Deferred>
        </PkBoundary>
    </div>
</template>
