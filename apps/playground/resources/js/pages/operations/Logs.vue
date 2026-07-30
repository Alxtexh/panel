<script setup lang="ts">
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
import { Head, router } from '@inertiajs/vue3';
import { nextTick, onMounted, ref, watch } from 'vue';
import AppLayout from '@/layouts/AppLayout.vue';
import operations from '@/routes/operations';

defineOptions({ layout: AppLayout });

const props = defineProps<{
    files: { name: string; bytes: number; at: string }[];
    tail: { name: string | null; lines: string[]; truncated: boolean };
    query: string;
}>();

const search = ref(props.query);
const pane = ref<HTMLElement | null>(null);

function open(name: string) {
    router.get(
        operations.logs.url(),
        { file: name, q: search.value },
        { preserveState: true },
    );
}

function runSearch() {
    router.get(
        operations.logs.url(),
        { file: props.tail.name ?? '', q: search.value },
        { preserveState: true },
    );
}

/** A log line's level, for colouring - read from the line Laravel wrote. */
function tone(line: string): string {
    if (/\.(ERROR|CRITICAL|ALERT|EMERGENCY)\b/.test(line)) {
        return 'text-destructive';
    }

    if (/\.WARNING\b/.test(line)) {
        return 'text-amber-600 dark:text-amber-500';
    }

    if (/\.(INFO|NOTICE)\b/.test(line)) {
        return 'text-sky-600 dark:text-sky-400';
    }

    return 'text-muted-foreground';
}

async function toBottom() {
    await nextTick();

    if (pane.value) {
        pane.value.scrollTop = pane.value.scrollHeight;
    }
}

onMounted(toBottom);
watch(() => props.tail, toBottom);
</script>

<template>
    <Head title="Logs" />

    <div class="flex flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">Logs</h1>
            <p class="text-sm text-muted-foreground">
                The last part of each file. Reading only.
            </p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
            <select
                class="h-9 rounded-md border border-input bg-background px-3 text-sm"
                :value="props.tail.name ?? ''"
                @change="open(($event.target as HTMLSelectElement).value)"
            >
                <option v-for="f in props.files" :key="f.name" :value="f.name">
                    {{ f.name }} - {{ Math.round(f.bytes / 1024) }} KB
                </option>
            </select>

            <input
                v-model="search"
                type="search"
                placeholder="Filter lines…"
                class="h-9 flex-1 rounded-md border border-input bg-background px-3 text-sm"
                @keyup.enter="runSearch"
            />
        </div>

        <p v-if="props.tail.truncated" class="text-xs text-muted-foreground">
            Showing the end of the file - earlier entries are on disk.
        </p>

        <div
            ref="pane"
            class="max-h-[65vh] overflow-auto rounded-lg border bg-muted/30 p-3 font-mono text-xs leading-relaxed"
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
</template>
