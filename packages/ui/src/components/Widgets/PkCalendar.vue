<script setup lang="ts">
/**
 * Month schedule for CalendarWidget (chart type `calendar`).
 */
import { computed, ref } from 'vue'

export type CalendarEvent = {
    date: string
    label: string
    tone?: string
}

const props = defineProps<{
    events?: CalendarEvent[]
}>()

const cursor = ref(new Date())

const year = computed(() => cursor.value.getFullYear())
const month = computed(() => cursor.value.getMonth())

const label = computed(() =>
    cursor.value.toLocaleString(undefined, { month: 'long', year: 'numeric' }),
)

const byDate = computed(() => {
    const map = new Map<string, CalendarEvent[]>()

    for (const event of props.events ?? []) {
        const list = map.get(event.date) ?? []
        list.push(event)
        map.set(event.date, list)
    }

    return map
})

const cells = computed(() => {
    const first = new Date(year.value, month.value, 1)
    const startPad = first.getDay()
    const daysInMonth = new Date(year.value, month.value + 1, 0).getDate()
    const out: Array<{ day: number | null; key: string; events: CalendarEvent[] }> = []

    for (let i = 0; i < startPad; i++) {
        out.push({ day: null, key: `pad-${i}`, events: [] })
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const key = `${year.value}-${String(month.value + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
        out.push({ day, key, events: byDate.value.get(key) ?? [] })
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
    <div class="flex flex-col gap-3">
        <div class="flex items-center justify-between gap-2">
            <button type="button" class="text-muted-foreground hover:text-foreground text-sm" @click="prev">
                Prev
            </button>
            <p class="text-sm font-medium">{{ label }}</p>
            <button type="button" class="text-muted-foreground hover:text-foreground text-sm" @click="next">
                Next
            </button>
        </div>
        <div class="text-muted-foreground grid grid-cols-7 gap-1 text-center text-[10px] uppercase">
            <span v-for="d in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" :key="d">{{ d }}</span>
        </div>
        <div class="grid grid-cols-7 gap-1">
            <div
                v-for="cell in cells"
                :key="cell.key"
                class="border-border/60 min-h-16 rounded-md border p-1"
                :class="cell.day ? 'bg-background' : 'bg-transparent border-transparent'"
            >
                <p v-if="cell.day" class="text-muted-foreground mb-1 text-[10px]">{{ cell.day }}</p>
                <p
                    v-for="(event, index) in cell.events.slice(0, 3)"
                    :key="`${cell.key}-${index}`"
                    class="bg-primary/10 text-foreground mb-0.5 truncate rounded px-1 text-[10px] leading-4"
                    :title="event.label"
                >
                    {{ event.label }}
                </p>
            </div>
        </div>
    </div>
</template>
