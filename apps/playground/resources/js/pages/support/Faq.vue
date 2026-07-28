<script setup lang="ts">
/**
 * Frequently asked questions.
 *
 * ONE OPEN AT A TIME, and the open one is tracked by INDEX rather than by a
 * boolean on each item. A per-item flag lets two answers be open at once, which
 * is fine, but it also means the "close the others" behaviour has to be
 * maintained in two places when items are added.
 *
 * Every question is a real <button> inside the heading, so the list is
 * keyboard-navigable and announced as expandable. A div with a click handler
 * looks identical and is unreachable without a mouse.
 */
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'

defineOptions({ layout: { breadcrumbs: [{ title: 'FAQ', href: '/faq' }] } })

const groups = [
    {
        name: 'Subscribers',
        items: [
            {
                q: 'Can I change several subscribers at once?',
                a: 'Yes. Tick the rows you want, or use "Select all" to take everything matching your current filters, then choose an action. Selections you can see are applied immediately; a select-all across thousands of records runs in the background and reports when it finishes.',
            },
            {
                q: 'Why did my status change get rejected?',
                a: 'Either someone else edited that subscriber while your page was open, or the value is not one of the allowed statuses. The panel refuses a stale write rather than silently overwriting the other person’s change.',
            },
            {
                q: 'What does the expiry filter actually match?',
                a: 'The subscription end date, not the last payment. A subscriber can be active with an expiry in the past if their status has not been updated yet - the "Renewals due" panel on the dashboard is the quickest way to see what is coming.',
            },
        ],
    },
    {
        name: 'Data and exports',
        items: [
            {
                q: 'Does an export include everything or just this page?',
                a: 'It exports the current filtered view in full, not the visible page. If you have filtered to 43 records you get 43 rows, however many pages they span.',
            },
            {
                q: 'Where do exports go?',
                a: 'They are generated in the background and offered as a download when ready. The link is tied to your account, so it cannot be used by anyone else.',
            },
        ],
    },
    {
        name: 'The panel itself',
        items: [
            {
                q: 'Can I move the navigation?',
                a: 'Open the settings drawer from the toolbar. The menu can sit on the left, on the right, or across the top, and the rest of the interface mirrors to match.',
            },
            {
                q: 'Do the numbers update on their own?',
                a: 'Lists stay current without a full page reload. How that happens - polling or a push connection - is a configuration choice, and nothing in the interface changes when it is switched.',
            },
        ],
    },
]

/**
 * A flat list with a stable id per question, computed ONCE.
 *
 * The first cut assigned indices lazily from inside the template expression,
 * which meant a multi-statement expression in `@click` and an id that did not
 * exist until the first click - so `aria-expanded` was wrong until then. That
 * pattern has already caused two bugs in this project; the flattening belongs
 * in script.
 */
const sections = groups.map((group, g) => ({
    ...group,
    items: group.items.map((item, i) => ({ ...item, id: `${g}-${i}` })),
}))

const openId = ref<string | null>('0-0')

function toggle(id: string) {
    openId.value = openId.value === id ? null : id
}
</script>

<template>
    <Head title="FAQ" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-1">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">Frequently asked questions</h1>
            <p class="text-muted-foreground text-sm">The things people ask in the first week.</p>
        </header>

        <section v-for="group in sections" :key="group.name" class="flex flex-col gap-2">
            <h2 class="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                {{ group.name }}
            </h2>

            <div class="bg-card divide-y overflow-hidden rounded-lg border">
                <div v-for="item in group.items" :key="item.id">
                    <h3>
                        <button
                            type="button"
                            class="hover:bg-accent/50 flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors"
                            :aria-expanded="openId === item.id"
                            @click="toggle(item.id)"
                        >
                            {{ item.q }}
                            <svg
                                viewBox="0 0 24 24"
                                class="text-muted-foreground size-4 shrink-0 transition-transform"
                                :class="openId === item.id ? 'rotate-180' : ''"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </h3>

                    <p v-if="openId === item.id" class="text-muted-foreground px-4 pb-3 text-sm">
                        {{ item.a }}
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>
