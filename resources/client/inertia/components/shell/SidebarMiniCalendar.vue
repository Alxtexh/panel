<script setup lang="ts">
/**
 * Compact month grid for the calendar sidebar family (sidebar-12 chrome).
 *
 * Demo / shell chrome only: sample highlight dates make the rail look real
 * without wiring a full scheduling product.
 */
import { ChevronLeft, ChevronRight } from '@lucide/vue'
import { computed, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        /** ISO dates (YYYY-MM-DD) to mark as sample events. */
        highlights?: string[]
    }>(),
    {
        highlights: () => {
            const now = new Date()
            const y = now.getFullYear()
            const m = String(now.getMonth() + 1).padStart(2, '0')

            return [`${y}-${m}-03`, `${y}-${m}-12`, `${y}-${m}-18`, `${y}-${m}-25`]
        },
    },
)

const cursor = ref(new Date())

const year = computed(() => cursor.value.getFullYear())
const month = computed(() => cursor.value.getMonth())

const label = computed(() =>
    cursor.value.toLocaleString(undefined, { month: 'long', year: 'numeric' }),
)

const highlightSet = computed(() => new Set(props.highlights))

const todayKey = computed(() => {
    const now = new Date()

    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
})

const cells = computed(() => {
    const first = new Date(year.value, month.value, 1)
    const startPad = (first.getDay() + 6) % 7
    const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
    const out: Array<{ day: number | null; key: string; marked: boolean; today: boolean }> = []

    for (let i = 0; i < startPad; i++) {
        out.push({ day: null, key: `pad-${i}`, marked: false, today: false })
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const key = `${year.value}-${String(month.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        out.push({
            day,
            key,
            marked: highlightSet.value.has(key),
            today: key === todayKey.value,
        })
    }

    return out
})

function prev(): void {
    cursor.value = new Date(year.value, month.value - 1, 1)
}

function next(): void {
    cursor.value = new Date(year.value, month.value + 1, 1)
}
</script>

<template>
    <div class="px-2 pb-2">
        <div class="mb-2 flex items-center justify-between gap-1">
            <button
                type="button"
                class="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                aria-label="Previous month"
                @click="prev"
            >
                <ChevronLeft class="size-4" />
            </button>
            <p class="text-sm font-medium">{{ label }}</p>
            <button
                type="button"
                class="inline-flex size-7 items-center justify-center rounded-md text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                aria-label="Next month"
                @click="next"
            >
                <ChevronRight class="size-4" />
            </button>
        </div>
        <div class="text-muted-foreground mb-1 grid grid-cols-7 gap-0.5 text-center text-[10px] font-medium uppercase">
            <span v-for="d in ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']" :key="d">{{ d }}</span>
        </div>
        <div class="grid grid-cols-7 gap-0.5">
            <div
                v-for="cell in cells"
                :key="cell.key"
                class="relative flex aspect-square items-center justify-center rounded-md text-xs"
                :class="
                    cell.day == null
                        ? ''
                        : cell.today
                          ? 'bg-sidebar-primary text-sidebar-primary-foreground font-medium'
                          : cell.marked
                            ? 'bg-sidebar-accent font-medium text-sidebar-accent-foreground'
                            : 'text-sidebar-foreground hover:bg-sidebar-accent/60'
                "
            >
                <template v-if="cell.day != null">
                    {{ cell.day }}
                    <span
                        v-if="cell.marked && !cell.today"
                        class="bg-primary absolute bottom-0.5 size-1 rounded-full"
                        aria-hidden="true"
                    />
                </template>
            </div>
        </div>
    </div>
</template>
