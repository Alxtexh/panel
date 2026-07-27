<script setup lang="ts">
/**
 * The miniature series inside a stat card.
 *
 * Unlike LineChart this DOES stretch its viewBox, which is the right trade at
 * this size: a sparkline has no axes or text to distort, only a path. The one
 * casualty of stretching is the stroke, and `vector-effect="non-scaling-stroke"`
 * exempts it — so the line stays an even 1.5px at any card width without
 * measuring anything.
 *
 * THE BASELINE IS THE SERIES MINIMUM, NOT ZERO. A count that hovers between
 * 8,000 and 8,200 plotted from zero is a flat line at the top of the box, which
 * shows nothing; the point of a sparkline is the shape of the variation.
 *
 * The curve is the same monotone spline LineChart uses, for the same reason: a
 * plain smoothing spline overshoots, and at 30px tall an overshoot is a visible
 * kink that is not in the data.
 */
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        data: { label: string; value: number }[]
        height?: number
        /** A CSS colour; defaults to the theme primary. */
        color?: string
        /** Fill under the curve with a fading gradient. */
        filled?: boolean
        smooth?: boolean
    }>(),
    { height: 32, color: 'var(--primary)', filled: false, smooth: true },
)

const W = 100
const H = 30

const uid = Math.random().toString(36).slice(2, 9)

const coords = computed(() => {
    const values = props.data.map((d) => d.value)

    if (values.length < 2) return []

    const min = Math.min(...values)
    const max = Math.max(...values)
    // A perfectly flat series has no range to divide by; draw it down the middle.
    const span = max - min || 1

    return values.map((value, i) => ({
        x: (i / (values.length - 1)) * W,
        y: H - ((value - min) / span) * (H - 4) - 2,
    }))
})

/** Monotone cubic Hermite — constrained to stay within the plotted values. */
function monotone(pts: { x: number; y: number }[]): string {
    const n = pts.length

    if (n < 2) return ''

    const dx: number[] = []
    const slope: number[] = []

    for (let i = 0; i < n - 1; i++) {
        dx[i] = pts[i + 1].x - pts[i].x
        slope[i] = dx[i] === 0 ? 0 : (pts[i + 1].y - pts[i].y) / dx[i]
    }

    const tangent: number[] = [slope[0]]

    for (let i = 1; i < n - 1; i++) {
        if (slope[i - 1] * slope[i] <= 0) {
            tangent[i] = 0
        } else {
            const w1 = 2 * dx[i] + dx[i - 1]
            const w2 = dx[i] + 2 * dx[i - 1]
            tangent[i] = (w1 + w2) / (w1 / slope[i - 1] + w2 / slope[i])
        }
    }

    tangent[n - 1] = slope[n - 2]

    let d = `M${pts[0].x.toFixed(2)},${pts[0].y.toFixed(2)}`

    for (let i = 0; i < n - 1; i++) {
        const third = dx[i] / 3

        d +=
            ` C${(pts[i].x + third).toFixed(2)},${(pts[i].y + tangent[i] * third).toFixed(2)}` +
            ` ${(pts[i + 1].x - third).toFixed(2)},${(pts[i + 1].y - tangent[i + 1] * third).toFixed(2)}` +
            ` ${pts[i + 1].x.toFixed(2)},${pts[i + 1].y.toFixed(2)}`
    }

    return d
}

const path = computed(() => {
    const pts = coords.value

    if (pts.length < 2) return ''

    return props.smooth
        ? monotone(pts)
        : pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ')
})

const area = computed(() => {
    const pts = coords.value

    if (!props.filled || pts.length < 2) return ''

    return `${path.value} L${pts[pts.length - 1].x.toFixed(2)},${H} L${pts[0].x.toFixed(2)},${H} Z`
})
</script>

<template>
    <svg
        v-if="path"
        :viewBox="`0 0 ${W} ${H}`"
        preserveAspectRatio="none"
        class="w-full"
        :style="{ height: `${height}px` }"
        aria-hidden="true"
    >
        <defs v-if="filled">
            <linearGradient :id="`pk-spark-${uid}`" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" :stop-color="color" stop-opacity="0.35" />
                <stop offset="100%" :stop-color="color" stop-opacity="0" />
            </linearGradient>
        </defs>

        <path v-if="filled" :d="area" :fill="`url(#pk-spark-${uid})`" />

        <path
            :d="path"
            fill="none"
            :stroke="color"
            stroke-width="1.5"
            stroke-linejoin="round"
            stroke-linecap="round"
            vector-effect="non-scaling-stroke"
        />
    </svg>
</template>
