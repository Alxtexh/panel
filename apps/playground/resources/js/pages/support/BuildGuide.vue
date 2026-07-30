<script setup lang="ts">
/**
 * The build guide: one subject per page.
 *
 * IT LIVES IN THE PANEL, NOT IN A README. Documentation in a repository is read
 * once, by whoever set the project up; documentation in the running application
 * is read by whoever is looking at the thing it describes, at the moment they
 * have the question. It also stays honest - a claim here is one screen away
 * from being checked.
 *
 * TWO SCROLL REGIONS, NOT ONE PAGE. The contents and the article scroll
 * independently, and that is a correctness fix rather than a flourish: with one
 * scrolling document, reaching the last entry in a thirty-item list means
 * scrolling to the bottom of the window, and clicking it then leaves you at the
 * bottom of a page whose text starts at the top. You read the end of an article
 * you have not started.
 *
 * A PARAGRAPH IS A LEAD AND A BODY. Every one here opens with a capitalised
 * claim and then explains it - good writing, and unreadable when the claim is
 * rendered as just more sentence. The server splits them, so the claim is what
 * you scan and the explanation is what you read once you have found the right
 * paragraph.
 *
 * CODE SPANS ARRIVE AS DATA, not as markdown for the client to parse. Rendering
 * markdown in the browser means either a parser in the bundle or `v-html`, and
 * `v-html` over content somebody will one day edit is how documentation becomes
 * an injection point.
 */
import { Head, Link } from '@inertiajs/vue3';
import { router } from '@inertiajs/vue3';
import {
    ArrowLeft,
    ArrowRight,
    Check,
    Copy,
    Search,
    TriangleAlert,
    X,
} from '@lucide/vue';
import {
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    useTemplateRef,
    watch,
} from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';

defineOptions({ layout: AppLayout });

interface Segment {
    /**
     * `match` is the searched term and `code-match` a code span containing it -
     * both marked by the server, so nothing here renders HTML.
     *
     * A code span is marked WHOLE rather than split: cutting `visibleWhen` into
     * three chips for a search on "visible" is less readable than the thing
     * being searched for.
     */
    type: 'text' | 'code' | 'match' | 'code-match';
    value: string;
}

interface SearchResult {
    slug: string;
    title: string;
    group: string;
    snippet: Segment[];
}

interface Paragraph {
    lead: Segment[] | null;
    text: Segment[];
}

interface Block {
    /** `shell` renders with a prompt and a copy button; `php` and `text` do not. */
    kind: 'shell' | 'php' | 'text';
    code: string;
}

interface GuidePage {
    slug: string;
    title: string;
    summary: string;
    body: Paragraph[];
    blocks: Block[];
    warning: Segment[] | null;
}

interface Neighbour {
    slug: string;
    title: string;
}

const props = defineProps<{
    groups: { title: string; pages: string[] }[];
    titles: Record<string, string>;
    page: GuidePage;
    /** The term this page was opened with, if it came from a result. */
    query: string;
    previous: Neighbour | null;
    next: Neighbour | null;
}>();

const contents = useTemplateRef<HTMLElement>('contents');
const article = useTemplateRef<HTMLElement>('article');

/**
 * The article starts at its own top on every navigation.
 *
 * A SCROLL CONTAINER DOES NOT RESET ITSELF. Inertia returns the WINDOW to the
 * top between pages, and this column is not the window - so arriving at a new
 * article three screens down, mid-sentence, was the exact complaint that made
 * two scroll regions worth building in the first place.
 */
watch(
    () => props.page.slug,
    async () => {
        await nextTick();
        article.value?.scrollTo({ top: 0 });
        showActiveEntry();
        showFirstMatch();
    },
);

/**
 * And the contents show where you are.
 *
 * Thirty entries do not fit a viewport, so a deep link into the last group
 * opened with the sidebar at the top and the current page out of sight - the
 * reader has to hunt for their own position before they can move.
 *
 * `nearest` rather than `center`, because a list that jumps every time you click
 * is one you lose your place in; this only moves when the entry is genuinely off
 * screen.
 */
function showActiveEntry() {
    contents.value
        ?.querySelector('[data-active="true"]')
        ?.scrollIntoView({ block: 'nearest' });
}

onMounted(() => {
    showActiveEntry();
    showFirstMatch();
    searchAgainIfArrivedFromAResult();
});

/**
 * Arriving from a result lands on the sentence, not on the page.
 *
 * Without this, search finds a PAGE and leaves the reader to find the word they
 * typed - on a page whose whole job is to contain a lot of words.
 */
async function showFirstMatch() {
    if (!props.query) {
        return;
    }

    await nextTick();

    /*
     * BY ATTRIBUTE, NOT BY TAG. A marked code span renders as `<code>` rather
     * than `<mark>` - splitting `visibleWhen` into three chips would be less
     * readable than the thing being searched for - so looking for `mark` found
     * nothing precisely when the search term was a class name, which is most of
     * the time in this guide.
     */
    article.value
        ?.querySelector('[data-match]')
        ?.scrollIntoView({ block: 'center' });
}

/* ------------------------------------------------------------------- search */

const term = ref(props.query ?? '');
const results = ref<SearchResult[]>([]);
const searching = ref(false);

/**
 * The term the results on screen belong to.
 *
 * WITHOUT IT, ARRIVING FROM A RESULT SHOWED "0 RESULTS". The box is seeded with
 * the term the page was opened with, so the panel had a term and an empty list
 * - and it replaced the contents with "nothing in the guide mentions that",
 * about a word that had just matched the page being read.
 */
const searchedFor = ref('');
const highlighted = ref(0);
const box = useTemplateRef<HTMLInputElement>('box');

let debounce: ReturnType<typeof setTimeout> | undefined;

/**
 * DEBOUNCED, AND NOT FIRED AT ALL BELOW TWO CHARACTERS.
 *
 * A request per keystroke over a guide is a request per keystroke; one letter
 * matches most of the prose, so the answer would be "everything", which reads as
 * a broken search rather than as "type more".
 */
watch(term, (value) => {
    clearTimeout(debounce);

    if (value.trim().length < 2) {
        results.value = [];
        searchedFor.value = '';
        searching.value = false;

        return;
    }

    searching.value = true;

    debounce = setTimeout(() => runSearch(value), 180);
});

async function runSearch(value: string) {
    searching.value = true;

    try {
        const response = await fetch(
            `/about/building/search?q=${encodeURIComponent(value.trim())}`,
            {
                headers: {
                    Accept: 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                },
                credentials: 'same-origin',
            },
        );

        if (!response.ok) {
            throw new Error('search');
        }

        results.value = (await response.json()).results ?? [];
        searchedFor.value = value.trim();
        highlighted.value = 0;
    } catch {
        // A failed search leaves the previous results rather than blanking the
        // list, which would read as "no such thing exists".
    } finally {
        searching.value = false;
    }
}

/** The term travels with the link, so the page it opens marks and scrolls to it. */
function open(result: SearchResult) {
    router.visit(
        `${href(result.slug)}?q=${encodeURIComponent(term.value.trim())}`,
    );
}

function onSearchKey(event: KeyboardEvent) {
    if (results.value.length === 0) {
        return;
    }

    if (event.key === 'ArrowDown') {
        event.preventDefault();
        highlighted.value = (highlighted.value + 1) % results.value.length;
    } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        highlighted.value =
            (highlighted.value - 1 + results.value.length) %
            results.value.length;
    } else if (event.key === 'Enter') {
        event.preventDefault();
        open(results.value[highlighted.value]);
    }
}

function clearSearch() {
    term.value = '';
    results.value = [];
    searchedFor.value = '';
    box.value?.focus();
}

/**
 * A page opened from a result re-runs its own search.
 *
 * The term is still in the box, so the reader expects the other matches to still
 * be there - and finding the second-best page is exactly what somebody does when
 * the first one did not answer the question.
 */
function searchAgainIfArrivedFromAResult() {
    if (props.query && props.query.trim().length >= 2) {
        // Assigning the same value would not trigger the watcher, so the search
        // is kicked off directly.
        term.value = props.query;
        results.value = [];
        searchedFor.value = '';
        runSearch(props.query);
    }
}

/**
 * `/` FOCUSES THE BOX, the shortcut every documentation site has - but only when
 * nothing else is being typed into, or pressing slash inside a filter field
 * would jump the caret out of it.
 */
function onKeydown(event: KeyboardEvent) {
    const target = event.target as HTMLElement | null;
    const typing =
        target?.tagName === 'INPUT' ||
        target?.tagName === 'TEXTAREA' ||
        target?.isContentEditable;

    if (event.key === '/' && !typing) {
        event.preventDefault();
        box.value?.focus();

        return;
    }

    if (event.key === 'Escape' && document.activeElement === box.value) {
        clearSearch();
    }
}

onMounted(() => window.addEventListener('keydown', onKeydown));

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
    clearTimeout(debounce);
});

/* ------------------------------------------------------------------- copying */

const copied = ref<string | null>(null);

async function copy(code: string) {
    try {
        await navigator.clipboard.writeText(code);
        copied.value = code;
        setTimeout(() => (copied.value = null), 1500);
    } catch {
        // Clipboard access is refused in some contexts. The code is selectable
        // either way, so a failed copy is not worth an error message.
    }
}

const href = (slug: string) => `/about/building/${slug}`;

const shellLines = (code: string) => code.split('\n');

const isComment = (line: string) => line.trimStart().startsWith('#');
</script>

<template>
    <Head :title="`${page.title} - Building a panel`" />

    <!--
        HEIGHT-CONSTRAINED ON LARGE SCREENS ONLY. Below `lg` the two columns
        stack and the document scrolls normally - trapping a phone inside a
        200px scroller to preserve a desktop behaviour would be trading a real
        problem for a worse one.
    -->
    <div
        class="flex flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row lg:overflow-hidden"
    >
        <nav
            ref="contents"
            class="shrink-0 border-b px-4 py-4 lg:w-60 lg:overflow-y-auto lg:border-r lg:border-b-0 lg:py-6"
        >
            <div class="mb-3">
                <p class="text-sm font-semibold">Building a panel</p>
                <p class="mt-0.5 text-xs text-muted-foreground">
                    The order to do things in, and the decisions that are hard
                    to change later.
                </p>
            </div>

            <div class="relative mb-4">
                <Search
                    class="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground"
                />
                <input
                    ref="box"
                    v-model="term"
                    type="search"
                    class="h-8 w-full rounded-md border border-input bg-background pr-7 pl-8 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Search the guide"
                    aria-label="Search the guide"
                    @keydown="onSearchKey"
                />
                <button
                    v-if="term"
                    type="button"
                    class="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear search"
                    @click="clearSearch"
                >
                    <X class="size-3.5" />
                </button>
                <kbd
                    v-else
                    class="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2 text-[10px] text-muted-foreground"
                    aria-hidden="true"
                    >/</kbd
                >
            </div>

            <!--
                RESULTS REPLACE THE CONTENTS rather than appearing over them. A
                dropdown inside a scrolling column is clipped by that column, and
                the alternative - a floating panel - covers the list you are
                trying to compare the results against.
            -->
            <div
                v-if="
                    term.trim().length >= 2 &&
                    (searching || searchedFor === term.trim())
                "
                class="flex flex-col gap-1"
            >
                <p
                    class="px-2 pb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase"
                >
                    {{
                        searching ? 'Searching…' : `${results.length} result(s)`
                    }}
                </p>

                <p
                    v-if="!searching && results.length === 0"
                    class="px-2 py-3 text-sm text-muted-foreground"
                >
                    Nothing in the guide mentions that.
                </p>

                <button
                    v-for="(result, i) in results"
                    :key="result.slug"
                    type="button"
                    class="flex flex-col gap-0.5 rounded-md px-2 py-1.5 text-left transition-colors"
                    :class="
                        i === highlighted ? 'bg-muted' : 'hover:bg-muted/50'
                    "
                    @click="open(result)"
                    @mouseenter="highlighted = i"
                >
                    <span class="text-sm font-medium">{{ result.title }}</span>
                    <span class="text-[11px] text-muted-foreground uppercase">{{
                        result.group
                    }}</span>
                    <span class="text-xs leading-snug text-muted-foreground">
                        <template
                            v-for="(segment, s) in result.snippet"
                            :key="s"
                        >
                            <mark
                                v-if="segment.type === 'match'"
                                class="rounded-sm bg-primary/20 px-0.5 text-foreground"
                                >{{ segment.value }}</mark
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </span>
                </button>
            </div>

            <div v-else class="flex flex-col gap-5">
                <div
                    v-for="group in groups"
                    :key="group.title"
                    class="flex flex-col gap-0.5"
                >
                    <p
                        class="px-2 pb-1 text-[11px] font-semibold tracking-wide text-muted-foreground uppercase"
                    >
                        {{ group.title }}
                    </p>

                    <Link
                        v-for="slug in group.pages"
                        :key="slug"
                        :href="href(slug)"
                        :data-active="page.slug === slug"
                        class="rounded-md px-2 py-1.5 text-sm transition-colors"
                        :class="
                            page.slug === slug
                                ? 'bg-muted font-medium'
                                : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                        "
                    >
                        {{ titles[slug] }}
                    </Link>
                </div>
            </div>
        </nav>

        <!--
            THE ARTICLE SCROLLS ITSELF, and starts at its own top on every
            navigation - which is the whole reason the columns are separate.
        -->
        <div ref="article" class="min-w-0 flex-1 lg:overflow-y-auto">
            <article
                class="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-6 sm:px-8"
            >
                <header class="flex flex-col gap-1.5">
                    <h1 class="text-2xl font-semibold tracking-tight">
                        {{ page.title }}
                    </h1>
                    <p class="text-muted-foreground">{{ page.summary }}</p>
                </header>

                <section
                    v-for="(paragraph, i) in page.body"
                    :key="i"
                    class="flex flex-col gap-1"
                >
                    <!--
                        The claim, hoisted. It is what somebody scans for; the
                        paragraph under it is what they read once they have
                        found the right one.
                    -->
                    <h2 v-if="paragraph.lead" class="text-sm font-semibold">
                        <template
                            v-for="(segment, s) in paragraph.lead"
                            :key="s"
                        >
                            <code
                                v-if="
                                    segment.type === 'code' ||
                                    segment.type === 'code-match'
                                "
                                :data-match="
                                    segment.type === 'code-match'
                                        ? ''
                                        : undefined
                                "
                                class="rounded px-1 py-0.5 font-mono text-[13px] font-normal"
                                :class="
                                    segment.type === 'code-match'
                                        ? 'bg-primary/20'
                                        : 'bg-muted'
                                "
                                >{{ segment.value }}</code
                            >
                            <mark
                                v-else-if="segment.type === 'match'"
                                data-match
                                class="rounded-sm bg-primary/20 px-0.5 text-foreground"
                                >{{ segment.value }}</mark
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </h2>

                    <p class="text-[15px] leading-7 text-muted-foreground">
                        <template
                            v-for="(segment, s) in paragraph.text"
                            :key="s"
                        >
                            <code
                                v-if="
                                    segment.type === 'code' ||
                                    segment.type === 'code-match'
                                "
                                :data-match="
                                    segment.type === 'code-match'
                                        ? ''
                                        : undefined
                                "
                                class="rounded px-1 py-0.5 font-mono text-[13px] text-foreground"
                                :class="
                                    segment.type === 'code-match'
                                        ? 'bg-primary/20'
                                        : 'bg-muted'
                                "
                                >{{ segment.value }}</code
                            >
                            <mark
                                v-else-if="segment.type === 'match'"
                                data-match
                                class="rounded-sm bg-primary/20 px-0.5 text-foreground"
                                >{{ segment.value }}</mark
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </p>
                </section>

                <div v-for="(block, i) in page.blocks" :key="`b${i}`">
                    <div
                        class="group relative overflow-x-auto rounded-lg border bg-muted/40 p-3 font-mono text-xs"
                    >
                        <button
                            type="button"
                            class="absolute top-2 right-2 rounded-md border bg-background p-1.5 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                            :aria-label="
                                copied === block.code ? 'Copied' : 'Copy'
                            "
                            @click="copy(block.code)"
                        >
                            <Check
                                v-if="copied === block.code"
                                class="size-3.5 text-emerald-600"
                            />
                            <Copy v-else class="size-3.5" />
                        </button>

                        <!--
                            A SHELL BLOCK GETS A PROMPT, and a comment does not -
                            a `$` in front of `# The operator portal` is a line
                            somebody pastes and watches fail.
                        -->
                        <template v-if="block.kind === 'shell'">
                            <div
                                v-for="(line, l) in shellLines(block.code)"
                                :key="l"
                                class="whitespace-pre"
                                :class="
                                    isComment(line)
                                        ? 'text-muted-foreground'
                                        : ''
                                "
                            >
                                <span
                                    v-if="
                                        line.trim() !== '' && !isComment(line)
                                    "
                                    class="text-muted-foreground select-none"
                                    aria-hidden="true"
                                    >$ </span
                                >{{ line }}
                            </div>
                        </template>

                        <pre v-else class="whitespace-pre">{{
                            block.code
                        }}</pre>
                    </div>
                </div>

                <!-- The thing that is easy to get wrong, where somebody reading
                     the page meets it rather than in a footnote. -->
                <div
                    v-if="page.warning"
                    class="flex items-start gap-2.5 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3"
                >
                    <TriangleAlert
                        class="mt-0.5 size-4 shrink-0 text-amber-600"
                    />
                    <p class="text-[15px] leading-7">
                        <template v-for="(segment, s) in page.warning" :key="s">
                            <code
                                v-if="
                                    segment.type === 'code' ||
                                    segment.type === 'code-match'
                                "
                                class="rounded bg-muted px-1 py-0.5 font-mono text-[13px]"
                                >{{ segment.value }}</code
                            >
                            <mark
                                v-else-if="segment.type === 'match'"
                                data-match
                                class="rounded-sm bg-primary/20 px-0.5 text-foreground"
                                >{{ segment.value }}</mark
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </p>
                </div>

                <!-- Read forwards the first time, searched afterwards. -->
                <nav
                    class="mt-2 flex items-center justify-between gap-3 border-t pt-4"
                >
                    <Link
                        v-if="previous"
                        :href="href(previous.slug)"
                        class="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                        <ArrowLeft class="size-3.5" />
                        {{ previous.title }}
                    </Link>
                    <span v-else />

                    <Link
                        v-if="next"
                        :href="href(next.slug)"
                        class="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
                    >
                        {{ next.title }}
                        <ArrowRight class="size-3.5" />
                    </Link>
                </nav>
            </article>
        </div>
    </div>
</template>
