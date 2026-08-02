<script setup lang="ts">
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
 * declares - a framework shipping its own version history would put PanelKit's
 * releases on somebody else's operations screen.
 */
import { Head } from '@inertiajs/vue3'
import { Bug, Lightbulb, Sparkles } from '@lucide/vue'
import { ref } from 'vue'

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
    }>(),
    { releases: () => [], pageHeading: "What's new", pageDescription: null },
)

/** Only the newest starts open — see the note above. */
const open = ref<Set<string>>(new Set(props.releases.length ? [props.releases[0].version] : []))

const toggle = (version: string) => {
    const next = new Set(open.value)
    next.has(version) ? next.delete(version) : next.add(version)
    open.value = next
}

const SECTIONS = [
    { key: 'added', label: 'Added', icon: Sparkles },
    { key: 'changed', label: 'Changed', icon: Lightbulb },
    { key: 'fixed', label: 'Fixed', icon: Bug },
] as const
</script>

<template>
    <Head :title="pageHeading" />

    <div class="space-y-6">
        <header>
            <h1 class="text-2xl font-semibold tracking-tight">
                {{ pageHeading }}
            </h1>
            <p v-if="pageDescription" class="text-muted-foreground mt-1 text-sm">
                {{ pageDescription }}
            </p>
        </header>

        <!--
            AN EMPTY CHANGELOG SAYS SO. A blank page is indistinguishable from
            one that failed to load, and this screen is reached deliberately.
        -->
        <p v-if="!releases.length" class="text-muted-foreground text-sm">
            No release notes yet. Declare them in
            <code>config/panel.php</code> under <code>changelog</code>.
        </p>

        <article
            v-for="release in releases"
            :key="release.version"
            class="border-border rounded-lg border"
        >
            <button
                type="button"
                class="hover:bg-muted/50 flex w-full items-baseline gap-3 px-4 py-3 text-left"
                :aria-expanded="open.has(release.version)"
                @click="toggle(release.version)"
            >
                <span class="font-semibold">{{ release.version }}</span>
                <span class="text-muted-foreground text-sm">{{ release.date }}</span>
            </button>

            <div v-if="open.has(release.version)" class="space-y-4 px-4 pb-4">
                <p v-if="release.highlight" class="text-sm">
                    {{ release.highlight }}
                </p>

                <section
                    v-for="section in SECTIONS"
                    :key="section.key"
                    v-show="release[section.key].length"
                >
                    <h2
                        class="text-muted-foreground mb-2 flex items-center gap-2 text-xs font-medium tracking-wide uppercase"
                    >
                        <component :is="section.icon" class="h-3.5 w-3.5" />
                        {{ section.label }}
                    </h2>

                    <ul class="space-y-1.5 text-sm">
                        <li
                            v-for="(line, index) in release[section.key]"
                            :key="index"
                            class="text-muted-foreground before:text-foreground/40 before:mr-2 before:content-['—']"
                        >
                            {{ line }}
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    </div>
</template>
