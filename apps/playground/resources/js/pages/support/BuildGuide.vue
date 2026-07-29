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
import AppLayout from '@/layouts/AppLayout.vue'
import { Head, Link } from '@inertiajs/vue3'
import { ArrowLeft, ArrowRight, Check, Copy, TriangleAlert } from '@lucide/vue'
import { nextTick, onMounted, ref, useTemplateRef, watch } from 'vue'

defineOptions({ layout: AppLayout })

interface Segment {
    type: 'text' | 'code'
    value: string
}

interface Paragraph {
    lead: Segment[] | null
    text: Segment[]
}

interface Block {
    /** `shell` renders with a prompt and a copy button; `php` and `text` do not. */
    kind: 'shell' | 'php' | 'text'
    code: string
}

interface GuidePage {
    slug: string
    title: string
    summary: string
    body: Paragraph[]
    blocks: Block[]
    warning: Segment[] | null
}

interface Neighbour {
    slug: string
    title: string
}

const props = defineProps<{
    groups: { title: string; pages: string[] }[]
    titles: Record<string, string>
    page: GuidePage
    previous: Neighbour | null
    next: Neighbour | null
}>()

const contents = useTemplateRef<HTMLElement>('contents')
const article = useTemplateRef<HTMLElement>('article')

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
        await nextTick()
        article.value?.scrollTo({ top: 0 })
        showActiveEntry()
    },
)

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
        ?.scrollIntoView({ block: 'nearest' })
}

onMounted(showActiveEntry)

const copied = ref<string | null>(null)

async function copy(code: string) {
    try {
        await navigator.clipboard.writeText(code)
        copied.value = code
        setTimeout(() => (copied.value = null), 1500)
    } catch {
        // Clipboard access is refused in some contexts. The code is selectable
        // either way, so a failed copy is not worth an error message.
    }
}

const href = (slug: string) => `/about/building/${slug}`

const shellLines = (code: string) => code.split('\n')

const isComment = (line: string) => line.trimStart().startsWith('#')
</script>

<template>
    <Head :title="`${page.title} - Building a panel`" />

    <!--
        HEIGHT-CONSTRAINED ON LARGE SCREENS ONLY. Below `lg` the two columns
        stack and the document scrolls normally - trapping a phone inside a
        200px scroller to preserve a desktop behaviour would be trading a real
        problem for a worse one.
    -->
    <div class="flex flex-col lg:h-[calc(100dvh-4rem)] lg:flex-row lg:overflow-hidden">
        <nav
            ref="contents"
            class="shrink-0 border-b px-4 py-4 lg:w-60 lg:overflow-y-auto lg:border-r lg:border-b-0 lg:py-6"
        >
            <div class="mb-4">
                <p class="text-sm font-semibold">Building a panel</p>
                <p class="text-muted-foreground mt-0.5 text-xs">
                    The order to do things in, and the decisions that are hard to change later.
                </p>
            </div>

            <div class="flex flex-col gap-5">
                <div v-for="group in groups" :key="group.title" class="flex flex-col gap-0.5">
                    <p class="text-muted-foreground px-2 pb-1 text-[11px] font-semibold tracking-wide uppercase">
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
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
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
            <article class="mx-auto flex max-w-2xl flex-col gap-5 px-4 py-6 sm:px-8">
                <header class="flex flex-col gap-1.5">
                    <h1 class="text-2xl font-semibold tracking-tight">{{ page.title }}</h1>
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
                        <template v-for="(segment, s) in paragraph.lead" :key="s">
                            <code
                                v-if="segment.type === 'code'"
                                class="bg-muted rounded px-1 py-0.5 font-mono text-[13px] font-normal"
                                >{{ segment.value }}</code
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </h2>

                    <p class="text-muted-foreground text-[15px] leading-7">
                        <template v-for="(segment, s) in paragraph.text" :key="s">
                            <code
                                v-if="segment.type === 'code'"
                                class="bg-muted text-foreground rounded px-1 py-0.5 font-mono text-[13px]"
                                >{{ segment.value }}</code
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </p>
                </section>

                <div v-for="(block, i) in page.blocks" :key="`b${i}`">
                    <div
                        class="group bg-muted/40 relative overflow-x-auto rounded-lg border p-3 font-mono text-xs"
                    >
                        <button
                            type="button"
                            class="bg-background absolute top-2 right-2 rounded-md border p-1.5 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                            :aria-label="copied === block.code ? 'Copied' : 'Copy'"
                            @click="copy(block.code)"
                        >
                            <Check v-if="copied === block.code" class="size-3.5 text-emerald-600" />
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
                                :class="isComment(line) ? 'text-muted-foreground' : ''"
                            >
                                <span
                                    v-if="line.trim() !== '' && !isComment(line)"
                                    class="text-muted-foreground select-none"
                                    aria-hidden="true"
                                    >$ </span
                                >{{ line }}
                            </div>
                        </template>

                        <pre v-else class="whitespace-pre">{{ block.code }}</pre>
                    </div>
                </div>

                <!-- The thing that is easy to get wrong, where somebody reading
                     the page meets it rather than in a footnote. -->
                <div
                    v-if="page.warning"
                    class="flex items-start gap-2.5 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3"
                >
                    <TriangleAlert class="mt-0.5 size-4 shrink-0 text-amber-600" />
                    <p class="text-[15px] leading-7">
                        <template v-for="(segment, s) in page.warning" :key="s">
                            <code
                                v-if="segment.type === 'code'"
                                class="bg-muted rounded px-1 py-0.5 font-mono text-[13px]"
                                >{{ segment.value }}</code
                            >
                            <template v-else>{{ segment.value }}</template>
                        </template>
                    </p>
                </div>

                <!-- Read forwards the first time, searched afterwards. -->
                <nav class="mt-2 flex items-center justify-between gap-3 border-t pt-4">
                    <Link
                        v-if="previous"
                        :href="href(previous.slug)"
                        class="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm"
                    >
                        <ArrowLeft class="size-3.5" />
                        {{ previous.title }}
                    </Link>
                    <span v-else />

                    <Link
                        v-if="next"
                        :href="href(next.slug)"
                        class="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm"
                    >
                        {{ next.title }}
                        <ArrowRight class="size-3.5" />
                    </Link>
                </nav>
            </article>
        </div>
    </div>
</template>
