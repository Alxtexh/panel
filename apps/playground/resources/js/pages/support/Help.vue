<script setup lang="ts">
/**
 * The help centre.
 *
 * THE FIRST VERSION WAS A WALL OF FOUR CARDS WITH NOTHING TO CLICK. It looked
 * like a help page and did none of the work: no way to search, no article to
 * open, no answer actually on the page. A help centre's job is to get someone
 * from a question to an answer, and static blurbs get them precisely nowhere.
 *
 * SEARCH FILTERS TITLE, BODY *AND* KEYWORDS. Matching only titles fails the
 * most common query shape — people search for the word in their head ("bulk",
 * "csv", "stuck") rather than for the phrasing an author chose. Keywords are
 * what let "csv" find "Exporting a filtered list".
 *
 * A CATEGORY IS A FILTER, NOT A PAGE. Splitting into sub-pages would mean
 * search has to span them, which is a router problem in exchange for no benefit
 * at this size.
 *
 * Everything is client-side because the content is static and small — shipping
 * it with the page means search responds on keystroke with no request at all,
 * which is the whole reason it feels like a search box rather than a form.
 */
import { Head, Link } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import {
    BookOpen,
    Download,
    LifeBuoy,
    Rocket,
    Search,
    Settings2,
    Sparkles,
    Users,
    X,
} from '@lucide/vue'

defineOptions({ layout: { breadcrumbs: [{ title: 'Help', href: '/help' }] } })

interface Article {
    id: string
    category: string
    title: string
    keywords: string
    body: string[]
}

const categories = [
    { key: 'start', label: 'Getting started', icon: Rocket },
    { key: 'subscribers', label: 'Subscribers', icon: Users },
    { key: 'data', label: 'Data & exports', icon: Download },
    { key: 'panel', label: 'The panel', icon: Settings2 },
]

const articles: Article[] = [
    {
        id: 'first-steps',
        category: 'start',
        title: 'Setting up for the first time',
        keywords: 'setup onboarding begin new install first plan router',
        body: [
            'Work in this order: create your plans, register your routers, then add subscribers against them. A subscriber needs both a plan and a router, so creating those first avoids a half-filled form.',
            'Plans describe what you sell — a speed and a price. Routers describe where a subscriber connects. Neither depends on the other, so you can create them in either order.',
        ],
    },
    {
        id: 'search-anything',
        category: 'start',
        title: 'Finding anything quickly',
        keywords: 'search command palette shortcut keyboard ctrl k find lookup',
        body: [
            'Press ⌘K, or Ctrl+K on Windows and Linux, from anywhere in the panel. The palette searches subscribers, routers and plans at once, and also jumps to pages.',
            'Searching matches the start of any word, so "achieng" finds "Amina Achieng" without needing the full name.',
        ],
    },
    {
        id: 'filtering',
        category: 'subscribers',
        title: 'Filtering a list',
        keywords: 'filter status expiry date range narrow search tabs',
        body: [
            'The tabs above a table are quick filters on status. The funnel icon opens the full panel, where you can combine several filters at once — status, plan type and an expiry range together.',
            'Filters are staged: nothing is applied until you press Apply, so you can set three conditions without the table reloading three times.',
            'The filters live in the address bar, which means a filtered view can be bookmarked or sent to a colleague.',
        ],
    },
    {
        id: 'bulk-actions',
        category: 'subscribers',
        title: 'Changing many subscribers at once',
        keywords: 'bulk select all suspend activate delete many batch mass',
        body: [
            'Tick the rows you want and the action bar appears above the table. To act on more than the visible page, use "Select all" — that takes everything matching your current filters, not just what is on screen.',
            'A selection you can see is applied immediately. A select-all across thousands of records runs in the background and tells you when it has finished, because a request that long would otherwise time out half way through.',
            'Destructive actions ask for confirmation and state how many records they will affect.',
        ],
    },
    {
        id: 'rejected-change',
        category: 'subscribers',
        title: 'Why a change was rejected',
        keywords: 'error rejected conflict stale someone else edited failed save',
        body: [
            'If someone else edited the same record while your page was open, the panel refuses your write rather than silently overwriting their change. Reload to see the current values, then reapply your edit.',
            'A value can also be rejected for not being an allowed option. Statuses and plan types are fixed lists, and a value outside them is refused so the record stays findable by the filters.',
        ],
    },
    {
        id: 'exporting',
        category: 'data',
        title: 'Exporting a filtered list',
        keywords: 'export csv download spreadsheet excel report extract',
        body: [
            'Select rows, or select all matching, and choose Export CSV. The file contains the current filtered view in full — if you filtered to 43 records you get 43 rows, however many pages they span.',
            'Exports are generated in the background and offered as a download when ready. The link belongs to your account and cannot be used by anyone else.',
            'The file opens correctly in Excel, including names with accents, and values are written as text so a phone number starting with + is not treated as a formula.',
        ],
    },
    {
        id: 'live-data',
        category: 'data',
        title: 'How the data stays current',
        keywords: 'live refresh realtime polling updates automatic stale',
        body: [
            'Lists update in place without a full page reload, so a status that changes elsewhere appears on your screen shortly afterwards.',
            'How that happens is a configuration choice — a periodic check or a push connection. Nothing in the interface changes when it is switched, and neither requires you to do anything.',
        ],
    },
    {
        id: 'appearance',
        category: 'panel',
        title: 'Changing how the panel looks',
        keywords: 'theme dark light colour color font size sidebar layout appearance settings',
        body: [
            'The gear icon in the toolbar opens the appearance drawer. You can set the colour scheme, an accent colour, a surface tint, spacing density and text size in pixels.',
            'The navigation can sit on the left, on the right, or across the top. The rest of the interface mirrors to match, so the collapse control and breadcrumbs stay next to the menu wherever you put it.',
            'These are your preferences and are stored in your browser, so they do not affect anyone else using the same panel.',
        ],
    },
    {
        id: 'columns',
        category: 'panel',
        title: 'Showing and hiding columns',
        keywords: 'columns hide show table layout customise width',
        body: [
            'The columns icon beside the filters lets you turn individual columns off. Your choice is remembered per table.',
            'Some columns cannot be hidden — the one carrying the record name, for instance, since a row with no identifier is not useful.',
        ],
    },
]

const query = ref('')
const category = ref<string | null>(null)
const open = ref<string | null>(null)

const results = computed(() => {
    const q = query.value.trim().toLowerCase()

    return articles.filter((a) => {
        if (category.value && a.category !== category.value) return false
        if (!q) return true

        return `${a.title} ${a.keywords} ${a.body.join(' ')}`.toLowerCase().includes(q)
    })
})

const grouped = computed(() =>
    categories
        .map((c) => ({ ...c, items: results.value.filter((a) => a.category === c.key) }))
        .filter((c) => c.items.length > 0),
)

function toggle(id: string) {
    open.value = open.value === id ? null : id
}

/** Searching for a term should reveal the answer, not just the heading. */
function pick(id: string) {
    open.value = id
}

function clearAll() {
    query.value = ''
    category.value = null
}
</script>

<template>
    <Head title="Help" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col items-center gap-4 py-4 text-center">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">How can we help?</h1>

            <div class="relative w-full max-w-lg">
                <Search class="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
                <input
                    v-model="query"
                    type="search"
                    class="bg-background focus:ring-ring w-full rounded-full border py-2.5 pr-10 pl-9 text-sm focus:ring-2 focus:outline-none"
                    placeholder="Search help — try “export”, “bulk” or “theme”"
                    aria-label="Search help"
                />
                <button
                    v-if="query"
                    type="button"
                    class="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
                    aria-label="Clear search"
                    @click="query = ''"
                >
                    <X class="size-4" />
                </button>
            </div>

            <div class="flex flex-wrap items-center justify-center gap-2">
                <button
                    type="button"
                    class="rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                    :class="category === null ? 'bg-primary text-primary-foreground border-transparent' : 'bg-background hover:bg-accent'"
                    @click="category = null"
                >
                    All
                </button>
                <button
                    v-for="c in categories"
                    :key="c.key"
                    type="button"
                    class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                    :class="category === c.key ? 'bg-primary text-primary-foreground border-transparent' : 'bg-background hover:bg-accent'"
                    @click="category = category === c.key ? null : c.key"
                >
                    <component :is="c.icon" class="size-3.5" />
                    {{ c.label }}
                </button>
            </div>
        </header>

        <!-- An empty result is a dead end unless it offers a way out. -->
        <div v-if="results.length === 0" class="bg-card flex flex-col items-center gap-3 rounded-lg border p-8 text-center">
            <p class="text-sm font-medium">Nothing matched “{{ query }}”</p>
            <p class="text-muted-foreground text-sm">
                Try a shorter word, or browse everything.
            </p>
            <button
                type="button"
                class="bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm font-medium"
                @click="clearAll"
            >
                Show all articles
            </button>
        </div>

        <section v-for="group in grouped" :key="group.key" class="flex flex-col gap-2">
            <h2 class="text-muted-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                <component :is="group.icon" class="size-3.5" />
                {{ group.label }}
            </h2>

            <div class="bg-card divide-y overflow-hidden rounded-lg border">
                <article v-for="item in group.items" :key="item.id">
                    <h3>
                        <button
                            type="button"
                            class="hover:bg-accent/50 flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors"
                            :aria-expanded="open === item.id"
                            @click="toggle(item.id)"
                        >
                            {{ item.title }}
                            <svg
                                viewBox="0 0 24 24"
                                class="text-muted-foreground size-4 shrink-0 transition-transform"
                                :class="open === item.id ? 'rotate-180' : ''"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2.5"
                            >
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </h3>

                    <div v-if="open === item.id" class="flex flex-col gap-2 px-4 pb-4">
                        <p v-for="(p, i) in item.body" :key="i" class="text-muted-foreground text-sm">{{ p }}</p>
                    </div>
                </article>
            </div>
        </section>

        <section class="bg-card flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4">
            <div class="flex items-start gap-3">
                <span class="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-md">
                    <LifeBuoy class="size-4" />
                </span>
                <div>
                    <h2 class="text-sm font-semibold">Still stuck?</h2>
                    <p class="text-muted-foreground text-sm">The FAQ covers the questions people ask most often.</p>
                </div>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <Link
                    href="/faq"
                    class="bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium"
                >
                    <BookOpen class="size-4" />
                    Read the FAQ
                </Link>
                <Link
                    href="/whats-new"
                    class="bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium"
                >
                    <Sparkles class="size-4" />
                    What's new
                </Link>
            </div>
        </section>
    </div>
</template>
