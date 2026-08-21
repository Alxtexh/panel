<script setup lang="ts">
/**
 * One chart's plot, chosen by its declared type.
 *
 * EXTRACTED FROM `PanelDashboard.vue`, WHICH WAS THE ONLY SCREEN THAT HAD IT.
 * `WidgetSet` has three hosts - the dashboard, `Resource::headerWidgets()` and
 * `Page::headerWidgets()` - and all three receive the same serialised charts.
 * Only the dashboard could draw one. `ResourceIndex` rendered the stats and
 * silently dropped `headerCharts`; a custom page got the props and had nothing
 * at all. So a resource could declare a chart, the server would resolve it, and
 * the screen would show nothing - no error, no empty state, just an absence.
 *
 * A BRANCH PER RENDERER, WRITTEN OUT rather than resolved through a component
 * map, which is the shape it was found in and worth keeping: a map would hide
 * that a combo takes bars and lines while a radar takes series and a pie takes
 * points. The props each chart needs stay visible.
 *
 * THE RESOLVED DATA ARRIVES AS A PROP, never read from page props here. That is
 * what makes this reusable at all: the dashboard's charts are keyed
 * `chart_<key>` and a header row's are `header_chart_<key>`, so a component
 * that looked them up itself would work on exactly one of its three hosts.
 */
import {
    BarChart,
    ComboChart,
    HeatmapChart,
    LineChart,
    PieChart,
    PolarAreaChart,
    RadarChart,
    ScatterChart,
    SegmentedBar,
    StatListChart,
    CatalogGrid,
    LineItems,
    PkCalendar,
    PkMap,
} from '@alxtexh-enterprise/panel'
import { computed } from 'vue'
import { router } from '@inertiajs/vue3'
import { multiSeries, type Chart, type Series } from './types'

const props = defineProps<{
    chart: Chart
    data: Series
    itemPath?: string | null
}>()

function openCatalogItem(key: string): void {
    const base = (props.itemPath ?? '').replace(/\/$/, '')

    if (!base) {
        return
    }

    router.visit(`${base}/${key}`)
}

const lines = computed(() => multiSeries(props.chart, props.data))
</script>

<template>
    <SegmentedBar v-if="chart.type === 'segments'" :segments="data.points" :height="10" />

    <StatListChart v-else-if="chart.type === 'table'" :rows="data.rows ?? []" />

    <CatalogGrid
        v-else-if="chart.type === 'catalog'"
        :items="data.items ?? []"
        @select="openCatalogItem"
    />

    <LineItems v-else-if="chart.type === 'items'" :items="data.items ?? []" />

    <PkMap
        v-else-if="chart.type === 'map'"
        :markers="(data as any).markers ?? []"
        :center="(data as any).center ?? null"
        :zoom="(data as any).zoom ?? 12"
        :height="280"
        :pickable="false"
    />

    <PkCalendar v-else-if="chart.type === 'calendar'" :events="(data as any).events ?? []" />

    <PieChart
        v-else-if="chart.type === 'pie' || chart.type === 'doughnut'"
        :data="data.points"
        :type="chart.type === 'pie' ? 'pie' : 'doughnut'"
    />

    <!--
        SCATTER AND BUBBLE PLOT MEASURED x/y PAIRS, not a series against a
        category axis - `xy` carries pairs rather than the label/value shape
        every other chart here takes, which is the whole reason the type exists.
    -->
    <ScatterChart
        v-else-if="chart.type === 'scatter' || chart.type === 'bubble'"
        :data="(data as any).xy ?? []"
        :x-label="(chart as any).xLabel"
        :y-label="(chart as any).yLabel"
    />

    <PolarAreaChart v-else-if="chart.type === 'polarArea'" :data="data.points" />

    <RadarChart v-else-if="chart.type === 'radar'" :series="data.series ?? []" />

    <ComboChart
        v-else-if="chart.type === 'combo'"
        :bars="data.bars ?? []"
        :lines="data.lines ?? []"
    />

    <HeatmapChart v-else-if="chart.type === 'heatmap'" :series="data.series ?? []" :height="160" />

    <BarChart
        v-else-if="
            chart.type === 'bar' ||
            chart.type === 'horizontalBar' ||
            chart.type === 'stackedBar' ||
            chart.type === 'rankedBar'
        "
        :data="data.series ? undefined : data.points"
        :series="data.series ?? undefined"
        :orientation="
            chart.type === 'horizontalBar' || chart.type === 'rankedBar' ? 'horizontal' : 'vertical'
        "
        :stacked="chart.type === 'stackedBar'"
        :thresholds="chart.thresholds"
        :max-value="chart.maxValue"
        :height="chart.type === 'rankedBar' ? 380 : 220"
        :show-legend="chart.type !== 'rankedBar'"
    />

    <LineChart
        v-else
        :data="lines ? undefined : data.points"
        :series="lines"
        :type="chart.type === 'area' ? 'area' : 'line'"
        show-legend
    />
</template>
