<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component -
 * declared props bind as props, and the shared ones (panelNav, auth,
 * locale, and every deferred prop as it lands) arrive as plain
 * attributes with nowhere to go. Vue then warns once per prop, per
 * visit, which reads exactly like the page reloading in a loop.
 */
defineOptions({ inheritAttrs: false })

/**
 * Release notes, as the panel shows them.
 *
 * NEWEST FIRST AND THE TOP ONE OPEN. The release somebody has not seen is almost
 * always the most recent, so opening it costs a click that every reader would
 * otherwise pay. The rest stay collapsed: a changelog that renders eighteen
 * months of history at full length is one people scroll past.
 *
 * GROUPED BY KIND, NOT WRITTEN AS PROSE. "Added / changed / fixed" lets somebody
 * scan for the line that affects them. A paragraph per release has to be read in
 * full to discover it says nothing relevant, which is how release notes come to
 * be ignored.
 *
 * THE CONTENT IS THE APPLICATION'S. This renders whatever `panel.changelog`
 * declares - a framework shipping its own version history would put Alxtexhpanel's
 * releases on somebody else's operations screen.
 */
import { Head, router, usePage } from '@inertiajs/vue3'
import { Bug, ChevronDown, Lightbulb, MessageSquare, Sparkles } from '@lucide/vue'
import { computed, ref } from 'vue'
import { PAGE_SHELL } from '@alxtexh-enterprise/panel'
import FeedbackDialog from '../components/FeedbackDialog.vue'
import SupportPageEditor from '../components/support/SupportPageEditor.vue'
import type { SupportProps } from '../components/support/SupportPageEditor.vue'

type Release = {
    version: string
    date: string
    highlight: string | null
    added: string[]
    changed: string[]
    fixed: string[]
}

const props = withDefaults(
    defineProps<{
        releases?: Release[]
        pageHeading?: string
        pageDescription?: string | null
        support?: SupportProps | null
        feedbackAction?: string | null
        onboardingReset?: string | null
    }>(),
    {
        releases: () => [],
        pageHeading: "What's new",
        pageDescription: null,
        feedbackAction: null,
        onboardingReset: null,
    },
)

const page = usePage()
const feedbackOpen = ref(false)
const feedbackUrl = computed(() => {
    if (props.feedbackAction) {
        return props.feedbackAction
    }

    return (
        ((page.props as Record<string, any>).panel?.feedback as string | null | undefined) ?? null
    )
})

function replayOnboarding() {
    if (!props.onboardingReset) {
        return
    }

    if (typeof document !== 'undefined') {
        document.cookie = 'panel_onboarding_done=0;path=/;max-age=0;SameSite=Lax'
    }

    router.post(props.onboardingReset)
}

/** Only the newest starts open - see the note above. */
const open = ref<Set<string>>(new Set(props.releases.length ? [props.releases[0].version] : []))

const toggle = (version: string) => {
    const next = new Set(open.value)

    if (next.has(version)) {
        next.delete(version)
    } else {
        next.add(version)
    }

    open.value = next
}

/**
 * THE KIND IS CARRIED BY COLOUR, not by an uppercase word.
 *
 * "ADDED / CHANGED / FIXED" in tracked-out capitals is how a text file renders
 * a heading, and it read like one - three identical grey labels that had to be
 * READ to be told apart. A tinted icon is recognised before the word is,
 * which is the whole job of a section marker in a list somebody is scanning.
 *
 * The tints are deliberately the conventional ones - green for what is new,
 * blue for what moved, amber for what was broken - because a changelog is read
 * by people who have read other changelogs.
 */
const SECTIONS = [
    {
        key: 'added',
        label: 'Added',
        icon: Sparkles,
        tint: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    },
    {
        key: 'changed',
        label: 'Changed',
        icon: Lightbulb,
        tint: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    },
    {
        key: 'fixed',
        label: 'Fixed',
        icon: Bug,
        tint: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    },
] as const
</script>

<template>
    <Head :title="pageHeading" />

    <!--
        THE PAGE SUPPLIES ITS OWN PADDING AND READING WIDTH, like every other
        screen. It had `space-y-6` alone - no padding, no width - so release
        notes ran flush to both edges of the shell and stretched to whatever
        the viewport was, which is unreadable on a wide monitor and looked
        broken next to Help and About, which are the same shape of screen.
    -->
    <div :class="[PAGE_SHELL, 'flex flex-col gap-6']">
        <SupportPageEditor :support="support">
            <header>
                <h1 class="text-2xl font-semibold tracking-tight">
                    {{ pageHeading }}
                </h1>
                <p v-if="pageDescription" class="text-muted-foreground mt-1 text-sm">
                    {{ pageDescription }}
                </p>
                <div v-if="feedbackUrl || onboardingReset" class="mt-4 flex flex-wrap gap-2">
                    <button
                        v-if="feedbackUrl"
                        type="button"
                        class="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                        @click="feedbackOpen = true"
                    >
                        <MessageSquare class="size-4" />
                        Send feedback
                    </button>
                    <button
                        v-if="onboardingReset"
                        type="button"
                        class="inline-flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                        @click="replayOnboarding"
                    >
                        Show setup guide
                    </button>
                </div>
            </header>

            <!--
            AN EMPTY CHANGELOG SAYS SO. A blank page is indistinguishable from
            one that failed to load, and this screen is reached deliberately.
        -->
            <p v-if="!releases.length" class="text-muted-foreground text-sm font-normal">
                No release notes yet. Declare them in
                <code>config/panel.php</code> under <code>changelog</code>.
            </p>

            <article
                v-for="release in releases"
                :key="release.version"
                class="border-border overflow-hidden rounded-xl border"
            >
                <!--
                THE CHEVRON IS NOT DECORATION. Every release past the first is
                collapsed, and the header carried no affordance at all - a row
                of plain text that happened to be a button, so the only way to
                discover the older releases could be opened was to click one on
                spec. It rotates rather than swapping glyph, which is what makes
                the open state readable at a glance.
            -->
                <button
                    type="button"
                    class="hover:bg-muted/40 flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors"
                    :aria-expanded="open.has(release.version)"
                    @click="toggle(release.version)"
                >
                    <!-- The version is the identifier, so it is set like one. -->
                    <span
                        class="bg-primary text-primary-foreground rounded-md px-2 py-0.5 text-xs font-semibold tabular-nums"
                    >
                        {{ release.version }}
                    </span>

                    <span class="text-muted-foreground text-sm font-normal">{{
                        release.date
                    }}</span>

                    <ChevronDown
                        class="text-muted-foreground ml-auto size-4 shrink-0 transition-transform duration-200"
                        :class="open.has(release.version) ? 'rotate-180' : ''"
                        aria-hidden="true"
                    />
                </button>

                <div v-if="open.has(release.version)" class="flex flex-col gap-5 px-4 pb-5">
                    <!--
                    THE HIGHLIGHT LEADS, so it is weighted like a lead. It sat at
                    the same size and colour as every bullet under it, which made
                    the one sentence written to summarise the release the easiest
                    thing on the card to skip.
                -->
                    <p v-if="release.highlight" class="text-[0.95rem] leading-relaxed font-medium">
                        {{ release.highlight }}
                    </p>

                    <section
                        v-for="section in SECTIONS"
                        :key="section.key"
                        v-show="release[section.key].length"
                    >
                        <h2 class="mb-2 flex items-center gap-2 text-sm font-medium">
                            <span
                                class="flex size-5 shrink-0 items-center justify-center rounded-md"
                                :class="section.tint"
                            >
                                <component :is="section.icon" class="size-3" />
                            </span>
                            {{ section.label }}
                        </h2>

                        <!--
                        A RULE GROUPS THE LINES; an em dash in front of each one
                        does not. The dash was a `::before` on every item, which
                        is a plain-text convention borrowed into a UI - it added
                        a character to read at the start of every line and still
                        left nothing showing where the group began and ended.
                    -->
                        <ul
                            class="border-border text-muted-foreground ml-2.5 flex flex-col gap-2 border-l pl-4 text-sm leading-relaxed"
                        >
                            <li v-for="(line, index) in release[section.key]" :key="index">
                                {{ line }}
                            </li>
                        </ul>
                    </section>
                </div>
            </article>
        </SupportPageEditor>
        <FeedbackDialog v-if="feedbackUrl" v-model:open="feedbackOpen" :action="feedbackUrl" />
    </div>
</template>
