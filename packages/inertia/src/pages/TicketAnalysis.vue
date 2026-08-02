<script setup lang="ts">
/**
 * How the desk is doing - a page of its own.
 *
 * SPLIT OUT OF THE QUEUE DELIBERATELY. The two screens answer different
 * questions for different people at different times: the queue is "what do I
 * work on next", opened forty times a day by whoever is on the rota; this is
 * "are we coping", opened weekly by whoever decides staffing. Stacking them
 * put a fortnight's chart above the row somebody was reaching for, and pushed
 * the work below the fold to make room for a number nobody acts on hourly.
 *
 * A page rather than a dashboard widget for the same reason: a widget has to
 * earn its space against everything else on the dashboard, and this earns its
 * space against nothing - it is what you open when you came to ask.
 */
import { Head, Link } from '@inertiajs/vue3'
import { ChartCard, LineChart, SegmentedBar, StatCard, buttonClasses } from '@panelkit/ui'
import type { ChartSeries } from '@panelkit/ui'
import { computed, onMounted, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        /** Where the queue itself lives, for the way back. */
        queueUrl?: string
    }>(),
    { queueUrl: '/tickets' },
)

type Stats = {
    open: number
    pending: number
    resolved: number
    unanswered: number
    medianFirstResponse: number | null
    volume: { labels: string[]; opened: number[]; resolved: number[] }
}

const stats = ref<Stats | null>(null)
const loading = ref(true)
const failed = ref(false)

async function load() {
    loading.value = true
    failed.value = false

    try {
        const response = await fetch(`${props.queueUrl}/stats`, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })

        if (!response.ok) {
            throw new Error(String(response.status))
        }

        stats.value = await response.json()
    } catch {
        failed.value = true
    } finally {
        loading.value = false
    }
}

onMounted(load)

/**
 * A DURATION READ THE WAY SOMEBODY WOULD SAY IT. "94 minutes" is a number to
 * do arithmetic on; "1h 34m" is the answer to "how long are people waiting".
 * An em dash when nothing has been answered yet, never a zero - zero is a
 * claim the desk has not earned.
 */
const median = computed(() => {
    const minutes = stats.value?.medianFirstResponse

    if (minutes === null || minutes === undefined) {
        return '—'
    }

    if (minutes < 60) {
        return `${minutes}m`
    }

    const hours = Math.floor(minutes / 60)

    return hours < 24 ? `${hours}h ${minutes % 60}m` : `${Math.floor(hours / 24)}d ${hours % 24}h`
})

const series = computed<ChartSeries[]>(() => {
    const volume = stats.value?.volume

    if (!volume) {
        return []
    }

    const points = (values: number[]) =>
        volume.labels.map((label, i) => ({ label, value: values[i] ?? 0 }))

    return [
        { name: 'Opened', points: points(volume.opened) },
        { name: 'Resolved', points: points(volume.resolved) },
    ]
})

/** Where the queue stands right now, as one bar rather than three numbers. */
const mix = computed(() => [
    { label: 'Open', value: stats.value?.open ?? 0, color: 'var(--chart-1)' },
    {
        label: 'Waiting on customer',
        value: stats.value?.pending ?? 0,
        color: 'var(--chart-2)',
    },
    {
        label: 'Resolved',
        value: stats.value?.resolved ?? 0,
        color: 'var(--chart-3)',
    },
])
</script>

<template>
    <Head title="Ticket analysis" />

    <div class="mx-auto flex w-full max-w-5xl flex-col gap-4 p-3 sm:p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
                <h1 class="text-lg font-semibold tracking-tight sm:text-xl">Ticket analysis</h1>
                <p class="text-sm text-muted-foreground">
                    Whether the desk is keeping up. The queue itself is where the work is.
                </p>
            </div>

            <!-- One group, trailing edge - DESIGN_RULES rules 1 and 2. -->
            <Link :href="queueUrl" :class="buttonClasses({ variant: 'outline', size: 'sm' })">
                Open the queue
            </Link>
        </div>

        <p v-if="failed" class="text-sm text-destructive">
            The figures could not be loaded.
            <button type="button" class="underline" @click="load">Try again</button>
        </p>

        <template v-else>
            <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
                <!--
                    UNANSWERED FIRST. An open ticket somebody has replied to is
                    work in progress; an open ticket nobody has answered is a
                    person sitting in silence, and only the second is an
                    emergency.
                -->
                <StatCard
                    label="Unanswered"
                    description="Nobody has replied yet"
                    :value="stats?.unanswered ?? 0"
                    :loading="loading"
                    inverted
                />
                <StatCard
                    label="Open"
                    description="Being worked on"
                    :value="stats?.open ?? 0"
                    :loading="loading"
                />
                <StatCard
                    label="Waiting on customer"
                    description="With them, not us"
                    :value="stats?.pending ?? 0"
                    :loading="loading"
                />
                <StatCard
                    label="Typical first reply"
                    description="Median, last 14 days"
                    :value="median"
                    :loading="loading"
                    inverted
                />
            </div>

            <!--
                BOTH LINES, NEVER JUST ARRIVALS. A rising volume chart alone
                says nothing about whether the desk is coping - opened against
                resolved says whether the backlog is growing, which is the
                only reason to draw it.
            -->
            <ChartCard
                label="Opened and resolved"
                description="The last fortnight. Where the lines diverge, the backlog is moving."
                :loading="loading"
            >
                <LineChart :series="series" :height="260" type="area" show-legend />
            </ChartCard>

            <ChartCard
                label="Where the queue stands"
                description="Every ticket this organisation has, by state."
                :loading="loading"
            >
                <SegmentedBar :segments="mix" />
            </ChartCard>
        </template>
    </div>
</template>
