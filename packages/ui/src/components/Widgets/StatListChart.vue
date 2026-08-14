<script setup lang="ts">
/**
 * A `table`-type chart: rows of label and value, some carrying a usage bar.
 *
 * WHY THIS EXISTS ALONGSIDE `SegmentedBar`, RATHER THAN REUSING IT. A segmented
 * bar's default palette cascades through `--primary` and `--chart-2..5` - right
 * for a breakdown where the colours are decorative, wrong for a row that means
 * "used" specifically. A usage bar's colour is part of what it says, the same
 * way a badge's is, so its segments take a semantic `tone` and resolve to the
 * SAME fixed tokens badges use (`--success`, `--warning`, …) rather than the
 * chart palette - see `PkBadge` for the other half of that rule.
 *
 * NOT RE-NORMALISED, for the same reason `SegmentedBar` is not: a bar that
 * always fills completely cannot show 38% free space, which is the entire
 * point of a usage row.
 */
import { computed } from 'vue'

export interface StatListBarSegment {
    label: string
    value: number
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
}

export interface StatListRow {
    key: string
    label: string
    value: string
    tone?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | null
    bar?: {
        segments: StatListBarSegment[]
        total?: number | null
    } | null
}

const props = defineProps<{ rows: StatListRow[] }>()

const TONE_TEXT: Record<string, string> = {
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-destructive',
    info: 'text-info',
    neutral: '',
}

const TONE_BAR: Record<string, string> = {
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-destructive',
    info: 'bg-info',
    neutral: 'bg-muted-foreground/40',
}

const resolved = computed(() =>
    props.rows.map((row) => {
        if (!row.bar || row.bar.segments.length === 0) {
            return { ...row, segments: [] as (StatListBarSegment & { width: string })[] }
        }

        const sum = row.bar.segments.reduce((t, s) => t + Math.max(0, s.value), 0)
        const denominator = Math.max(row.bar.total ?? sum, sum, 1)

        return {
            ...row,
            segments: row.bar.segments.map((s) => ({
                ...s,
                // A visible sliver rather than nothing, for a non-zero value
                // too small to round to a pixel - see `SegmentedBar`.
                width: s.value > 0 ? `max(2px, ${((Math.max(0, s.value) / denominator) * 100).toFixed(2)}%)` : '0px',
            })),
        }
    }),
)
</script>

<template>
    <div class="divide-border flex flex-col divide-y">
        <div v-for="row in resolved" :key="row.key" class="flex flex-col gap-1.5 py-2.5 first:pt-0 last:pb-0">
            <div class="flex items-center justify-between gap-3 text-sm">
                <span class="text-muted-foreground truncate">{{ row.label }}</span>
                <span
                    class="shrink-0 font-medium tabular-nums"
                    :class="row.tone ? TONE_TEXT[row.tone] : 'text-foreground'"
                >
                    {{ row.value }}
                </span>
            </div>

            <div
                v-if="row.segments.length"
                class="bg-muted flex h-1.5 w-full overflow-hidden rounded-full"
                role="img"
                :aria-label="row.segments.map((s) => `${s.label} ${s.value}`).join(', ')"
            >
                <span
                    v-for="(segment, i) in row.segments"
                    :key="i"
                    class="h-full transition-all"
                    :class="TONE_BAR[segment.tone ?? 'neutral']"
                    :style="{ width: segment.width }"
                />
            </div>
        </div>
    </div>
</template>
