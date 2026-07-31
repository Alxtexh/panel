<script setup lang="ts">
/**
 * What the queue looks like, above the queue - roadmap H.3.
 *
 * FOUR NUMBERS AND ONE CHART, and the restraint is the design. A dashboard
 * of twelve tiles is read as decoration and scrolled past; four numbers a
 * rota can act on get looked at. See `TicketStats` for why these four.
 *
 * FETCHED, NOT SHIPPED WITH THE LIST. The rows are what the page is for, and
 * an aggregate over a tenant's tickets must never sit in front of them - the
 * same rule the deferred total and the tab counts follow.
 */
import { ChartCard, LineChart, StatCard } from '@panelkit/ui';
import type { ChartSeries } from '@panelkit/ui';
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
    /** Forwarded by the list page. */
    baseUrl?: string;
}>();

type Stats = {
    open: number;
    pending: number;
    resolved: number;
    unanswered: number;
    medianFirstResponse: number | null;
    volume: { labels: string[]; opened: number[]; resolved: number[] };
};

const stats = ref<Stats | null>(null);
const loading = ref(true);
const failed = ref(false);

async function load() {
    try {
        const response = await fetch(`${props.baseUrl ?? ''}/stats`, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        });

        if (!response.ok) {
            throw new Error(String(response.status));
        }

        stats.value = await response.json();
    } catch {
        failed.value = true;
    } finally {
        loading.value = false;
    }
}

onMounted(load);

/**
 * A DURATION READ THE WAY SOMEBODY WOULD SAY IT. "94 minutes" is a number to
 * do arithmetic on; "1h 34m" is the answer to "how long are people waiting".
 * An em dash when nothing has been answered yet, never a zero - zero is a
 * claim the desk has not earned.
 */
const median = computed(() => {
    const minutes = stats.value?.medianFirstResponse;

    if (minutes === null || minutes === undefined) {
        return '—';
    }

    if (minutes < 60) {
        return `${minutes}m`;
    }

    const hours = Math.floor(minutes / 60);

    return hours < 24
        ? `${hours}h ${minutes % 60}m`
        : `${Math.floor(hours / 24)}d ${hours % 24}h`;
});

const series = computed<ChartSeries[]>(() => {
    const volume = stats.value?.volume;

    if (!volume) {
        return [];
    }

    const points = (values: number[]) =>
        volume.labels.map((label, i) => ({ label, value: values[i] ?? 0 }));

    return [
        { name: 'Opened', points: points(volume.opened) },
        { name: 'Resolved', points: points(volume.resolved) },
    ];
});
</script>

<template>
    <div v-if="!failed" class="flex w-full flex-col gap-3">
        <div class="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <!--
                UNANSWERED IS FIRST AND IT IS THE ONE THAT CAN GO RED. An open
                ticket somebody has replied to is work in progress; an open
                ticket nobody has answered is a person sitting in silence.
                Only the second is an emergency, so only it is coloured.
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
            BOTH LINES, NEVER JUST ARRIVALS. A rising volume chart alone says
            nothing about whether the desk is coping - opened against resolved
            says whether the backlog is growing, which is the only reason to
            put a chart on a queue at all.
        -->
        <ChartCard
            label="Opened and resolved"
            description="The last fortnight. Where the lines diverge, the backlog is moving."
        >
            <LineChart :series="series" :height="180" type="area" show-legend />
        </ChartCard>
    </div>
</template>
