<script setup lang="ts">
/**
 * The dashboard checklist. Purely presentational - see `SetupChecklist` in
 * `alxtexh-enterprise/panel` (packages/panel/src/Support/SetupChecklist.php) for where
 * `items` actually comes from and why "done" can un-happen.
 *
 * ONE ITEM IS HIGHLIGHTED, THE REST ARE A LIST. A page with six equally-loud
 * cards asks an operator to triage; this asks them to read one thing. `items`
 * arrives already ordered - every undone item first, done ones after - so
 * the first entry is the highlighted one and nothing here re-sorts.
 *
 * DONE ITEMS ARE STRUCK THROUGH, NOT REMOVED. A card that only ever shows
 * problems reads as "still broken" even seconds after the last one clears;
 * seeing yesterday's fixed items is what makes an empty problem list read as
 * "fixed", not "empty because nobody has looked yet".
 */
export interface SetupChecklistItem {
    key: string
    title: string
    detail: string
    done: boolean
}

const props = defineProps<{
    items: SetupChecklistItem[]
    /** Where "see the full report" points - the panel's own monitoring page, typically. */
    reportHref?: string | null
}>()

const next = props.items.find((item) => !item.done) ?? null
const rest = props.items.filter((item) => item.key !== next?.key)
</script>

<template>
    <section v-if="items.length" class="flex flex-col gap-3 rounded-lg border bg-card p-4">
        <div class="flex items-center justify-between gap-2">
            <h2 class="text-sm font-semibold">Setup checklist</h2>
            <a
                v-if="reportHref"
                :href="reportHref"
                class="text-xs text-muted-foreground hover:text-foreground hover:underline"
            >
                Full report
            </a>
        </div>

        <div
            v-if="next"
            class="flex items-start gap-3 rounded-md border border-amber-500/30 bg-amber-500/5 p-3"
        >
            <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-amber-500"
                aria-hidden="true"
            />
            <div class="flex flex-col gap-0.5">
                <p class="text-sm font-medium">{{ next.title }}</p>
                <p class="text-xs text-muted-foreground">{{ next.detail }}</p>
            </div>
        </div>

        <ul v-if="rest.length" class="flex flex-col gap-2">
            <li v-for="item in rest" :key="item.key" class="flex items-start gap-3">
                <span
                    class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                    :class="
                        item.done
                            ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                            : 'border-2 border-amber-500'
                    "
                    aria-hidden="true"
                >
                    <svg
                        v-if="item.done"
                        viewBox="0 0 24 24"
                        class="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >
                        <path d="M20 6 9 17l-5-5" />
                    </svg>
                </span>
                <div class="flex flex-col gap-0.5">
                    <p
                        class="text-sm"
                        :class="item.done ? 'text-muted-foreground line-through' : 'font-medium'"
                    >
                        {{ item.title }}
                    </p>
                    <p v-if="!item.done" class="text-xs text-muted-foreground">{{ item.detail }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>
