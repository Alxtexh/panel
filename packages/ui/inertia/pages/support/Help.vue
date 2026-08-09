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
 * most common query shape - people search for the word in their head ("bulk",
 * "csv", "stuck") rather than for the phrasing an author chose. Keywords are
 * what let "csv" find "Exporting a filtered list".
 *
 * A CATEGORY IS A FILTER, NOT A PAGE. Splitting into sub-pages would mean
 * search has to span them, which is a router problem in exchange for no benefit
 * at this size.
 *
 * SEARCH IS STILL CLIENT-SIDE, and that has not changed: the whole set arrives
 * with the page, so typing filters on keystroke with no request, which is the
 * reason it feels like a search box rather than a form.
 *
 * WHAT DID CHANGE IS WHERE THE ARTICLES ARE DEFINED. They were an array in this
 * file until the assistant needed to cite them; the alternative was a second
 * copy in PHP for indexing, and two copies of an answer is how a panel tells
 * somebody one thing on screen and something else in chat. They now come from
 * `App\Support\HelpArticles` as a prop.
 */
import { Head, Link } from '@inertiajs/vue3'
import {
    BookOpen,
    Download,
    LifeBuoy,
    Lock,
    Rocket,
    Search,
    Settings2,
    Sparkles,
    Users,
    X,
} from '@lucide/vue'
import { computed, onMounted, ref } from 'vue'

defineOptions({
    // Page props arrive as attributes and this root is a fragment.
    inheritAttrs: false, layout: { breadcrumbs: [{ title: 'Help', href: '' }] } })

interface Article {
    id: string
    category: string
    title: string
    keywords: string
    body: string[]
}

const props = defineProps<{
    articles: Article[]
    /**
     * SENT BY THE SERVER, derived from the articles that exist.
     *
     * This list used to be hardcoded here, and it read "Getting started,
     * Subscribers, Data & exports, The panel" - which made a framework screen
     * quietly about an ISP. "Subscribers" means nothing to a veterinary
     * practice, and a tab with no articles behind it is worse than a missing
     * one, because somebody clicks it.
     */
    categories?: { key: string; label: string }[]
}>()

/**
 * ICONS CANNOT TRAVEL IN JSON, so the server sends keys and labels and the
 * screen decorates what it recognises. A category the package has never heard
 * of still gets a tab, with the generic icon - the alternative is either no
 * tab or a crash on an unknown key.
 */
const ICONS: Record<string, unknown> = {
    start: Rocket,
    panel: Settings2,
    account: Lock,
    data: Download,
    people: Users,
}

const categories = computed(() =>
    (props.categories ?? []).map((c) => ({
        ...c,
        icon: ICONS[c.key] ?? BookOpen,
    })),
)

const query = ref('')
const category = ref<string | null>(null)
const open = ref<string | null>(null)

const results = computed(() => {
    const q = query.value.trim().toLowerCase()

    return props.articles.filter((a) => {
        if (category.value && a.category !== category.value) {
            return false
        }

        if (!q) {
            return true
        }

        return `${a.title} ${a.keywords} ${a.body.join(' ')}`.toLowerCase().includes(q)
    })
})

const grouped = computed(() =>
    categories.value
        .map((c) => ({
            ...c,
            items: results.value.filter((a) => a.category === c.key),
        }))
        .filter((c) => c.items.length > 0),
)

function toggle(id: string) {
    open.value = open.value === id ? null : id
}

function clearAll() {
    query.value = ''
    category.value = null
}

/**
 * ARRIVING BY CITATION OPENS THE ARTICLE.
 *
 * A link from the assistant lands on the right heading and would otherwise show
 * it collapsed - the answer somebody was sent to read is one click further away
 * than the link implied. The browser has already scrolled to the anchor by the
 * time this runs; all it does is expand it.
 */
onMounted(() => {
    const id = window.location.hash.replace('#', '')

    if (id && props.articles.some((a) => a.id === id)) {
        open.value = id
    }
})
</script>

<template>
    <Head title="Help" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col items-center gap-4 py-4 text-center">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">How can we help?</h1>

            <div class="relative w-full max-w-lg">
                <Search
                    class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <input
                    v-model="query"
                    type="search"
                    class="w-full rounded-full border bg-background py-2.5 pr-10 pl-9 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Search help - try “export”, “bulk” or “theme”"
                    aria-label="Search help"
                />
                <button
                    v-if="query"
                    type="button"
                    class="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground hover:text-foreground"
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
                    :class="
                        category === null
                            ? 'border-transparent bg-primary text-primary-foreground'
                            : 'bg-background hover:bg-accent'
                    "
                    @click="category = null"
                >
                    All
                </button>
                <button
                    v-for="c in categories"
                    :key="c.key"
                    type="button"
                    class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium transition-colors"
                    :class="
                        category === c.key
                            ? 'border-transparent bg-primary text-primary-foreground'
                            : 'bg-background hover:bg-accent'
                    "
                    @click="category = category === c.key ? null : c.key"
                >
                    <component :is="c.icon" class="size-3.5" />
                    {{ c.label }}
                </button>
            </div>
        </header>

        <!-- An empty result is a dead end unless it offers a way out. -->
        <div
            v-if="results.length === 0"
            class="flex flex-col items-center gap-3 rounded-lg border bg-card p-8 text-center"
        >
            <p class="text-sm font-medium">Nothing matched “{{ query }}”</p>
            <p class="text-sm text-muted-foreground">Try a shorter word, or browse everything.</p>
            <button
                type="button"
                class="rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                @click="clearAll"
            >
                Show all articles
            </button>
        </div>

        <section v-for="group in grouped" :key="group.key" class="flex flex-col gap-2">
            <h2
                class="flex items-center gap-1.5 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
            >
                <component :is="group.icon" class="size-3.5" />
                {{ group.label }}
            </h2>

            <div class="divide-y overflow-hidden rounded-lg border bg-card">
                <!--
                    THE ID IS WHAT MAKES A CITATION LAND. The assistant links to
                    /help#exporting; without an anchor here that link opens the
                    help centre at the top and leaves somebody to find the
                    paragraph, which is most of the difference between citing an
                    answer and gesturing at one.
                -->
                <article v-for="item in group.items" :id="item.id" :key="item.id">
                    <h3>
                        <button
                            type="button"
                            class="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-medium transition-colors hover:bg-accent/50"
                            :aria-expanded="open === item.id"
                            @click="toggle(item.id)"
                        >
                            {{ item.title }}
                            <svg
                                viewBox="0 0 24 24"
                                class="size-4 shrink-0 text-muted-foreground transition-transform"
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
                        <p
                            v-for="(p, i) in item.body"
                            :key="i"
                            class="text-sm text-muted-foreground"
                        >
                            {{ p }}
                        </p>
                    </div>
                </article>
            </div>
        </section>

        <section
            class="flex flex-wrap items-center justify-between gap-4 rounded-lg border bg-card p-4"
        >
            <div class="flex items-start gap-3">
                <span
                    class="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
                >
                    <LifeBuoy class="size-4" />
                </span>
                <div>
                    <h2 class="text-sm font-semibold">Still stuck?</h2>
                    <p class="text-sm text-muted-foreground">
                        The FAQ covers the questions people ask most often.
                    </p>
                </div>
            </div>

            <div class="flex flex-wrap items-center gap-2">
                <Link
                    href="/faq"
                    class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                >
                    <BookOpen class="size-4" />
                    Read the FAQ
                </Link>
                <Link
                    href="/whats-new"
                    class="inline-flex items-center gap-1.5 rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                >
                    <Sparkles class="size-4" />
                    What's new
                </Link>
            </div>
        </section>
    </div>
</template>
