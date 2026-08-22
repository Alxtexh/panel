<script setup lang="ts">
/**
 * Opt-in log tail (`Panel::logTail()` / apps(['logs'])).
 *
 * Files come from a server allow-list only. Polls `routes.tail` for fresh lines.
 */
import { Head, router } from '@inertiajs/vue3'
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'

defineOptions({ inheritAttrs: false })

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        routes: { logs: string; tail: string }
        files: { name: string; bytes: number; at: string }[]
        tail: { name: string | null; lines: string[]; truncated: boolean }
        query?: string
        pollSeconds?: number
    }>(),
    {
        query: '',
        pollSeconds: 5,
    },
)

const search = ref(props.query)
const pane = ref<HTMLElement | null>(null)
const liveTail = ref(props.tail)
let timer: ReturnType<typeof setInterval> | null = null

function open(name: string) {
    router.get(props.routes.logs, { file: name, q: search.value }, { preserveState: true })
}

function runSearch() {
    router.get(
        props.routes.logs,
        { file: liveTail.value.name ?? '', q: search.value },
        { preserveState: true },
    )
}

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

async function poll(): Promise<void> {
    const params = new URLSearchParams()

    if (liveTail.value.name) {
        params.set('file', liveTail.value.name)
    }

    if (search.value) {
        params.set('q', search.value)
    }

    const url = `${props.routes.tail}?${params.toString()}`

    try {
        const response = await fetch(url, {
            headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'same-origin',
        })

        if (!response.ok) {
            return
        }

        liveTail.value = (await response.json()) as typeof props.tail
        await toBottom()
    } catch {
        // Keep the last good tail; the next tick retries.
    }
}

onMounted(() => {
    void toBottom()
    const seconds = Math.max(2, props.pollSeconds ?? 5)
    timer = setInterval(() => {
        void poll()
    }, seconds * 1000)
})

onUnmounted(() => {
    if (timer !== null) {
        clearInterval(timer)
    }
})

watch(
    () => props.tail,
    (value) => {
        liveTail.value = value
        void toBottom()
    },
)
</script>

<template>
    <Head :title="pageHeading ?? 'Logs'" />

    <div class="flex flex-col gap-4 p-4">
        <div>
            <h1 class="text-xl font-semibold">{{ pageHeading ?? 'Logs' }}</h1>
            <p class="text-muted-foreground text-sm font-normal">
                {{ pageDescription ?? 'The last part of each file. Reading only.' }}
            </p>
        </div>

        <p
            v-if="!props.files.length"
            class="text-muted-foreground rounded-lg border border-dashed px-4 py-8 text-center text-sm"
        >
            No log files yet.
        </p>

        <div v-else class="bg-card flex min-h-0 flex-col divide-y rounded-lg border">
            <div class="flex flex-wrap items-center gap-2 p-3">
                <select
                    v-if="props.files.length > 1"
                    class="border-input bg-background h-9 rounded-md border px-3 text-sm"
                    :value="liveTail.name ?? ''"
                    aria-label="Log file"
                    @change="open(($event.target as HTMLSelectElement).value)"
                >
                    <option v-for="f in props.files" :key="f.name" :value="f.name">
                        {{ f.name }} - {{ Math.round(f.bytes / 1024) }} KB
                    </option>
                </select>

                <p v-else-if="props.files.length === 1" class="text-sm font-medium">
                    {{ props.files[0].name }}
                    <span class="text-muted-foreground font-normal">
                        - {{ Math.round(props.files[0].bytes / 1024) }} KB
                    </span>
                </p>

                <input
                    v-model="search"
                    type="search"
                    placeholder="Filter lines…"
                    aria-label="Filter lines"
                    class="border-input bg-background h-9 min-w-40 flex-1 rounded-md border px-3 text-sm"
                    @keyup.enter="runSearch"
                />

                <p class="text-muted-foreground text-xs font-normal">Auto-refresh every {{ pollSeconds }}s</p>
            </div>

            <p v-if="liveTail.truncated" class="text-muted-foreground px-3 py-2 text-xs">
                Showing the end of the file - earlier entries are on disk.
            </p>

            <div
                ref="pane"
                class="max-h-[65vh] min-h-0 overflow-auto p-3 font-mono text-xs leading-relaxed"
            >
                <p v-if="!liveTail.lines.length" class="text-muted-foreground">Nothing to show.</p>

                <p
                    v-for="(line, i) in liveTail.lines"
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
