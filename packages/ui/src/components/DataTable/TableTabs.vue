<script setup lang="ts">
/**
 * Status tabs with counts.
 *
 * Counts arrive from ONE grouped aggregate query on the server (addendum C1:
 * "N tabs must never produce N queries") and are deferred, so they land after
 * the rows rather than in front of them.
 *
 * While the counts are in flight each tab shows a placeholder rather than a
 * zero. A zero that later becomes 47 reads as data changing under the operator;
 * a placeholder reads as "still counting", which is the truth.
 */
withDefaults(
    defineProps<{
        tabs: string[]
        active: string | null
        /** Deferred — undefined until the grouped count query resolves. */
        counts?: Record<string, number>
    }>(),
    {},
)

const emit = defineEmits<{ (e: 'select', tab: string | null): void }>()

const format = (n: number) => new Intl.NumberFormat().format(n)
</script>

<template>
    <div class="border-border pk-tabs flex shrink-0 items-center gap-1 overflow-x-auto overflow-y-hidden border-b">
        <button
            type="button"
            class="relative shrink-0 px-3 py-2 text-sm capitalize transition-colors"
            :class="
                active === null
                    ? 'text-foreground border-primary border-b-2 font-medium'
                    : 'text-muted-foreground hover:text-foreground border-b-2 border-transparent'
            "
            @click="emit('select', null)"
        >
            All
            <span v-if="counts" class="text-muted-foreground ml-1 text-xs tabular-nums">
                {{ format(counts.all ?? 0) }}
            </span>
            <span v-else class="bg-muted ml-1 inline-block h-3 w-6 animate-pulse rounded align-middle" />
        </button>

        <button
            v-for="tab in tabs"
            :key="tab"
            type="button"
            class="relative shrink-0 px-3 py-2 text-sm capitalize transition-colors"
            :class="
                active === tab
                    ? 'text-foreground border-primary border-b-2 font-medium'
                    : 'text-muted-foreground hover:text-foreground border-b-2 border-transparent'
            "
            @click="emit('select', tab)"
        >
            {{ tab }}
            <span v-if="counts" class="text-muted-foreground ml-1 text-xs tabular-nums">
                {{ format(counts[tab] ?? 0) }}
            </span>
            <span v-else class="bg-muted ml-1 inline-block h-3 w-6 animate-pulse rounded align-middle" />
        </button>
    </div>
</template>

<style scoped>
/* The tab strip scrolls sideways when there are many tabs; it must never
   scroll vertically. Without this the 2px active-tab border overflows by a
   pixel and the browser paints a stub vertical scrollbar beside the tabs. */
.pk-tabs {
    scrollbar-width: none;
}

.pk-tabs::-webkit-scrollbar {
    display: none;
}
</style>
