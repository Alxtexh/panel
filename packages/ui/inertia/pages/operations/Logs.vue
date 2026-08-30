<script setup lang="ts">
/**
 * MOVED FROM THE REFERENCE APP.
 *
 * TWO SUBSTITUTIONS, and only two. Its Wayfinder route helpers became a
 * `routes` prop, because a package cannot know a consuming application's route
 * names; and `defineOptions({
    // Page props arrive as attributes and this root is a fragment.
    inheritAttrs: false, layout })` is gone, because the layout is the
 * consumer's to apply - `panel:install` writes a one-line page file, and that
 * file's resolver decides the frame.
 */
/**
 * The application log, in the panel.
 *
 * THE FILE IS PICKED FROM A SERVER-BUILT LIST, never typed. This page sends a
 * name that the server validates against the files it itself found - see
 * `LogReader`, where the naive "open whatever was asked for" version is a
 * read-any-file endpoint.
 *
 * NEWEST LAST, SCROLLED TO THE BOTTOM, because that is where the thing you came
 * to read is. A log viewer that opens at the top of a 40,000-line file is a
 * scroll bar with a search box.
 */
import { Head, router } from '@inertiajs/vue3'
import { nextTick, onMounted, ref, watch } from 'vue'

const props = defineProps<{
    /** Where this screen re-fetches itself with a new filter. */
    routes: { logs: string }
    files: { name: string; bytes: number; at: string }[]
    tail: { name: string | null; lines: string[]; truncated: boolean }
    query: string
}>()

const search = ref(props.query)
const pane = ref<HTMLElement | null>(null)

function open(name: string) {
    router.get(props.routes.logs, { file: name, q: search.value }, { preserveState: true })
}

function runSearch() {
    router.get(
        props.routes.logs,
        { file: props.tail.name ?? '', q: search.value },
        { preserveState: true },
    )
}

/** A log line's level, for colouring - read from the line Laravel wrote. */
function tone(line: string): string {
    if (/\.(ERROR|CRITICAL|ALERT|EMERGENCY)\b/.test(line)) {
        return 'text-destructive'
    }

    if (/\.WARNING\b/.test(line)) {
        return 'text-amber-600 dark:text-amber-500'
    }

    if (/\.(INFO|NOTICE)\b/.test(line)) {
        return 'text-sky-600 dark:text-sky-400'
    }

    return 'text-muted-foreground'
}

async function toBottom() {
    await nextTick()

    if (pane.value) {
        pane.value.scrollTop = pane.value.scrollHeight
    }
}

onMounted(toBottom)
watch(() => props.tail, toBottom)
</script>

<template>
    <Head title="Logs" />

    <div class="flex flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">Logs</h1>
            <p class="text-sm text-muted-foreground font-normal">
                The last part of each file. Reading only.
            </p>
        </div>

        <!--
            ONE CARD, AND THE CONTROLS ARE INSIDE IT - design rule 4.

            The picker, the filter, the truncation notice and the lines were
            four siblings with gaps between them, so the controls read as a
            widget that happened to sit above a log rather than as the log's
            own controls. Same reasoning as the table shell: one border round
            the whole object, `divide-y` between the bands, nothing floating.
        -->
        <p
            v-if="!props.files.length"
            class="rounded-lg border border-dashed px-4 py-8 text-center text-sm text-muted-foreground"
        >
            No log files yet.
        </p>

        <div v-else class="flex min-h-0 flex-col divide-y rounded-lg border bg-card">
            <div class="flex flex-wrap items-center gap-2 p-3">
                <!--
                    A PICKER ONLY WHERE THERE IS SOMETHING TO PICK - design
                    rule 5. Most installations have one log file, and a select
                    holding a single option is a control that looks operable,
                    invites a click and does nothing. The name is worth showing
                    either way, so the one-file case states it instead.
                -->
                <select
                    v-if="props.files.length > 1"
                    class="h-9 rounded-md border border-input bg-background px-3 text-sm"
                    :value="props.tail.name ?? ''"
                    aria-label="Log file"
                    @change="open(($event.target as HTMLSelectElement).value)"
                >
                    <option v-for="f in props.files" :key="f.name" :value="f.name">
                        {{ f.name }} - {{ Math.round(f.bytes / 1024) }} KB
                    </option>
                </select>

                <p v-else-if="props.files.length === 1" class="text-sm font-medium">
                    {{ props.files[0].name }}
                    <span class="font-normal text-muted-foreground">
                        - {{ Math.round(props.files[0].bytes / 1024) }} KB
                    </span>
                </p>

                <input
                    v-model="search"
                    type="search"
                    placeholder="Filter lines…"
                    aria-label="Filter lines"
                    class="h-9 min-w-40 flex-1 rounded-md border border-input bg-background px-3 text-sm"
                    @keyup.enter="runSearch"
                />
            </div>

            <p v-if="props.tail.truncated" class="px-3 py-2 text-xs text-muted-foreground">
                Showing the end of the file - earlier entries are on disk.
            </p>

            <div
                ref="pane"
                class="max-h-[65vh] min-h-0 overflow-auto p-3 font-mono text-xs leading-relaxed"
            >
                <p v-if="!props.tail.lines.length" class="text-muted-foreground">
                    Nothing to show.
                </p>

                <p
                    v-for="(line, i) in props.tail.lines"
                    :key="i"
                    class="whitespace-pre-wrap"
                    :class="tone(line)"
                >
                    {{ line }}
                </p>
            </div>
        </div>
    </div>
</template>
