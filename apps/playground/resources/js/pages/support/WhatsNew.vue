<script setup lang="ts">
/**
 * The in-panel changelog.
 *
 * WHY A PANEL SHOULD HAVE ONE AT ALL: operators live in this interface daily,
 * and a control that moved or a feature that appeared is otherwise discovered
 * by accident - or reported as a bug. A release note inside the product is the
 * cheapest way to stop "where did the export button go?" reaching support.
 *
 * ENTRIES ARE GROUPED BY KIND, not written as prose. "Added / Changed / Fixed"
 * lets someone scan for the one line that affects them; a paragraph per release
 * has to be read in full to find out it says nothing relevant.
 *
 * Newest first, and the top entry is expanded - the release someone has not
 * seen yet is almost always the most recent one.
 */
import { Head } from '@inertiajs/vue3'
import { ref } from 'vue'
import { Bug, Lightbulb, Sparkles } from '@lucide/vue'
import FeedbackDialog from '@/components/FeedbackDialog.vue'

defineOptions({ layout: { breadcrumbs: [{ title: "What's new", href: '/whats-new' }] } })

interface Release {
    version: string
    date: string
    highlight?: string
    added?: string[]
    changed?: string[]
    fixed?: string[]
}

const releases: Release[] = [
    {
        version: '0.7',
        date: '28 July 2026',
        highlight: 'Portals from a command, a public API, scheduled reports, and an assistant that cites its sources.',
        added: [
            'make:panel builds a whole portal - provider, routes, guard and navigation - so a superadmin, an admin and a reseller portal are three commands rather than three copies of the routing.',
            'A public REST API with its own tokens, abilities and rate limit, kept separate from the endpoints the panel itself uses.',
            'Reports on a schedule: a saved filter, run as its owner, emailed as a CSV - including when it matches nothing, because silence looks the same as a scheduler that stopped.',
            'Retrieval over the help centre, so the assistant answers from the actual page and links to it. Where nothing matches it says it does not have the answer instead of writing a plausible one.',
            'panel:doctor now reports a knowledge base that can no longer be searched - the failure where every passage is still there and every search returns nothing.',
        ],
        changed: [
            'Help articles are defined on the server. The page still searches them in the browser; there is now one copy rather than one for the screen and another for the assistant.',
            'Retrieval works without pgvector. PostgreSQL with the extension searches in the database against an index, and every other engine scores the candidates in PHP - same schema, same answers.',
        ],
    },
    {
        version: '0.6',
        date: '27 July 2026',
        highlight: 'A full chart gallery, three navigation layouts, and in-panel help.',
        added: [
            'Twelve chart types on the dashboard - line, area, stepped, multi-axis, vertical, horizontal, stacked and grouped bars, combo, pie, doughnut, polar area and radar.',
            'Navigation can now sit on the left, on the right, or across the top.',
            'A collapsed sidebar opens its groups as flyout menus beside the rail.',
            'Help, FAQ, About and this page.',
            'A floating unsaved-changes bar with Reset and Save.',
        ],
        changed: [
            'Charts draw smooth curves that stay within the values they join, so a series touching zero is no longer drawn dipping below it.',
            'The subscriber status column went back to a badge; a dropdown in every row made the list harder to scan.',
        ],
        fixed: [
            'Row action menus were clipped by the table and scrolled away with the rows.',
            'The appearance drawer opened on top of a right-hand sidebar instead of opposite it.',
            'Moving the sidebar to the right pushed the toolbar controls into one corner rather than mirroring them.',
        ],
    },
    {
        version: '0.5',
        date: '26 July 2026',
        highlight: 'Bulk actions, exports, and editable cells.',
        added: [
            'Bulk actions over a selection, including everything matching the current filters.',
            'CSV export of the filtered view, generated in the background.',
            'Icon, image, toggle and select columns.',
            'Period selectors and trend indicators on dashboard widgets.',
        ],
        changed: [
            'A widget number, its trend and its sparkline are now required to measure the same thing.',
        ],
        fixed: [
            'Inline controls were disabled on resources that have no form, even where the policy allowed the write.',
            'Stored text sizes from an older release rendered as an invalid value.',
        ],
    },
    {
        version: '0.4',
        date: '26 July 2026',
        highlight: 'Forms, view pages and layout components.',
        added: [
            'Dedicated create, edit and view pages rather than modals.',
            'Sections, tabs and grids for forms and view pages.',
            'Searchable selects for large relations.',
            'Multi-select and date-range filters.',
        ],
        fixed: [
            'Cross-tenant writes were possible through a validation rule that queried the table directly.',
        ],
    },
]

const open = ref<string | null>(releases[0]?.version ?? null)

/*
 * The dialog is opened WITH a kind, from two buttons rather than one.
 *
 * A single "Send feedback" button makes choosing the type the first thing you
 * do inside the dialog, which is a decision you had already made before
 * clicking. Two buttons carry it in, and the dialog opens on the right form.
 */
const feedbackOpen = ref(false)
const feedbackKind = ref<'feature' | 'bug'>('feature')

function openFeedback(kind: 'feature' | 'bug'): void {
    feedbackKind.value = kind
    feedbackOpen.value = true
}

const KINDS = [
    { key: 'added', label: 'Added', tone: 'text-emerald-600 dark:text-emerald-400' },
    { key: 'changed', label: 'Changed', tone: 'text-amber-600 dark:text-amber-400' },
    { key: 'fixed', label: 'Fixed', tone: 'text-sky-600 dark:text-sky-400' },
] as const
</script>

<template>
    <Head title="What's new" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex items-start gap-3">
            <span class="bg-primary/10 text-primary flex size-10 shrink-0 items-center justify-center rounded-lg">
                <Sparkles class="size-5" />
            </span>
            <div>
                <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">What's new</h1>
                <p class="text-muted-foreground text-sm">Recent changes to the panel.</p>
            </div>
        </header>

        <!--
            HERE BECAUSE THIS IS WHERE THE THOUGHT HAPPENS. Somebody reading a
            changelog is already thinking about what the panel does and does not
            do, which is the moment they are most likely to have a request worth
            writing down. A feedback link buried in a settings page is one nobody
            is looking at when they have something to say.
        -->
        <div class="bg-muted/40 flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p class="text-sm font-medium">Something missing, or something broken?</p>
                <p class="text-muted-foreground text-sm">
                    Reports arrive with the page and browser details already attached.
                </p>
            </div>

            <div class="flex shrink-0 gap-2">
                <button
                    type="button"
                    class="hover:bg-accent inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors"
                    @click="openFeedback('feature')"
                >
                    <Lightbulb class="size-4" />
                    Request a feature
                </button>
                <button
                    type="button"
                    class="hover:bg-accent inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors"
                    @click="openFeedback('bug')"
                >
                    <Bug class="size-4" />
                    Report a bug
                </button>
            </div>
        </div>

        <FeedbackDialog v-model:open="feedbackOpen" :kind="feedbackKind" />

        <ol class="flex flex-col gap-3">
            <li v-for="release in releases" :key="release.version" class="bg-card overflow-hidden rounded-lg border">
                <button
                    type="button"
                    class="hover:bg-accent/50 flex w-full items-start justify-between gap-4 p-4 text-left transition-colors"
                    :aria-expanded="open === release.version"
                    @click="open = open === release.version ? null : release.version"
                >
                    <div class="min-w-0">
                        <div class="flex flex-wrap items-center gap-2">
                            <span class="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-semibold">
                                v{{ release.version }}
                            </span>
                            <time class="text-muted-foreground text-xs">{{ release.date }}</time>
                        </div>
                        <p v-if="release.highlight" class="mt-1.5 text-sm font-medium">{{ release.highlight }}</p>
                    </div>

                    <svg
                        viewBox="0 0 24 24"
                        class="text-muted-foreground mt-1 size-4 shrink-0 transition-transform"
                        :class="open === release.version ? 'rotate-180' : ''"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                    >
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </button>

                <div v-if="open === release.version" class="flex flex-col gap-4 border-t px-4 py-4">
                    <section v-for="kind in KINDS" v-show="release[kind.key]?.length" :key="kind.key">
                        <h3 class="text-xs font-semibold tracking-wide uppercase" :class="kind.tone">
                            {{ kind.label }}
                        </h3>
                        <ul class="text-muted-foreground mt-1.5 flex flex-col gap-1.5 text-sm">
                            <li v-for="(line, i) in release[kind.key] ?? []" :key="i" class="flex gap-2">
                                <span class="text-muted-foreground/50 select-none">-</span>
                                <span>{{ line }}</span>
                            </li>
                        </ul>
                    </section>
                </div>
            </li>
        </ol>
    </div>
</template>
