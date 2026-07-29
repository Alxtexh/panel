<script setup lang="ts">
/**
 * The build guide: one subject per page.
 *
 * IT LIVES IN THE PANEL, NOT IN A README. Documentation in a repository is read
 * once, by whoever set the project up; documentation in the running application
 * is read by whoever is looking at the thing it describes, at the moment they
 * have the question. It also stays honest - a claim on this page is one screen
 * away from being checked.
 *
 * IT WAS ONE PAGE WITH THIRTEEN SECTIONS. That is an orientation rather than a
 * reference: a section inside a long page cannot be linked in a code review,
 * bookmarked, or sent to somebody with "read this first", because the anchor
 * everyone actually shares is the top of the page. Every subject now has a URL.
 *
 * THE CONTENT IS SERVER-SIDE, in `App\Support\Guide`, for the same reason the
 * help articles are: so a test can walk it. A group naming a page that does not
 * exist fails the suite rather than rendering a dead link.
 *
 * NAVIGATION IS INERTIA LINKS, not client-side state. The back button, opening a
 * page in a new tab and sending somebody a link all have to work, and every one
 * of those is a router question rather than a component one.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Head, Link } from '@inertiajs/vue3'
import { ArrowLeft, ArrowRight, Check, Copy, TriangleAlert } from '@lucide/vue'
import { ref } from 'vue'

defineOptions({ layout: AppLayout })

interface Block {
    /** `shell` renders with a prompt and a copy button; `php` and `text` do not. */
    kind: 'shell' | 'php' | 'text'
    code: string
}

interface GuidePage {
    slug: string
    title: string
    summary: string
    /** Paragraphs. Kept as separate strings so each is one idea. */
    body: string[]
    blocks: Block[]
    /** The thing that is easy to get wrong here, if there is one. */
    warning: string | null
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

    <div class="flex flex-col gap-6 p-4 sm:p-6">
        <div>
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">Building a panel</h1>
            <p class="text-muted-foreground mt-1 text-sm">
                What you need before you start, which command comes next, and the decisions that
                are hard to change later.
            </p>
        </div>

        <div class="flex flex-col gap-8 lg:flex-row">
            <!--
                THE CONTENTS ARE GROUPED AND STICKY. Thirty flat entries is a
                list nobody reads to the end; seven headings is a shape somebody
                can hold, and the group tells you whether the page you want is
                even in the part of the guide you are looking at.
            -->
            <nav class="lg:w-56 lg:shrink-0">
                <div class="flex flex-col gap-5 lg:sticky lg:top-4">
                    <div v-for="group in groups" :key="group.title" class="flex flex-col gap-1">
                        <p class="text-muted-foreground px-3 text-xs font-semibold tracking-wide uppercase">
                            {{ group.title }}
                        </p>

                        <Link
                            v-for="slug in group.pages"
                            :key="slug"
                            :href="href(slug)"
                            class="rounded-md px-3 py-1.5 text-sm transition-colors"
                            :class="
                                page.slug === slug
                                    ? 'bg-muted font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                            "
                        >
                            {{ titles[slug] }}
                        </Link>
                    </div>
                </div>
            </nav>

            <article class="flex min-w-0 max-w-3xl flex-1 flex-col gap-4">
                <header class="flex flex-col gap-1">
                    <h2 class="text-lg font-semibold">{{ page.title }}</h2>
                    <p class="text-muted-foreground text-sm">{{ page.summary }}</p>
                </header>

                <p
                    v-for="(paragraph, i) in page.body"
                    :key="i"
                    class="text-sm leading-relaxed"
                >
                    {{ paragraph }}
                </p>

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
                     the page will meet it rather than in a footnote. -->
                <div
                    v-if="page.warning"
                    class="flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-sm"
                >
                    <TriangleAlert class="mt-0.5 size-4 shrink-0 text-amber-600" />
                    <p>{{ page.warning }}</p>
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
