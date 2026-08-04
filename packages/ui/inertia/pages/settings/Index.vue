<script setup lang="ts">
/**
 * The settings index. Roadmap 3.7.
 *
 * `/settings` USED TO REDIRECT STRAIGHT TO PROFILE, which was the same
 * "three bare links" problem the sidebar itself has: fine to memorise at
 * three entries, and no way to discover a fourth exists except reading every
 * word of an unlabelled list. This is the front door instead - a title, a
 * description, and a search box, the same shape `Help.vue` already proved
 * works for a handful of entries with no request on keystroke.
 *
 * THE ENTRIES COME FROM THE SERVER, described once in `App\Support
 * \SettingsIndex` rather than hand-written here - the same move
 * `HelpArticles` made, and for the same reason: one declaration that both
 * this page and (eventually) anything else that wants to know what settings
 * exist can read, rather than a client-side list that silently stops
 * matching the routes it links to.
 */
import { Head, Link } from '@inertiajs/vue3'
import { Search, X } from '@lucide/vue'
import { computed, ref } from 'vue'

interface Entry {
    key: string
    title: string
    description: string
    href: string
}

const props = defineProps<{ entries: Entry[] }>()

defineOptions({
    layout: { breadcrumbs: [{ title: 'Settings', href: '' }] },
})

const query = ref('')

const results = computed(() => {
    const q = query.value.trim().toLowerCase()

    if (!q) {
        return props.entries
    }

    return props.entries.filter((e) => `${e.title} ${e.description}`.toLowerCase().includes(q))
})
</script>

<template>
    <Head title="Settings" />

    <div class="mx-auto flex w-full max-w-2xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-4">
            <div>
                <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">Settings</h1>
                <p class="text-sm text-muted-foreground">
                    Your profile, your security, and the organisation everyone here sees.
                </p>
            </div>

            <div class="relative w-full">
                <Search
                    class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                />
                <input
                    v-model="query"
                    type="search"
                    class="w-full rounded-full border bg-background py-2.5 pr-10 pl-9 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                    placeholder="Search settings"
                    aria-label="Search settings"
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
        </header>

        <ul v-if="results.length" class="flex flex-col gap-2">
            <li v-for="entry in results" :key="entry.key">
                <Link
                    :href="entry.href"
                    class="flex flex-col gap-0.5 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
                >
                    <span class="text-sm font-medium">{{ entry.title }}</span>
                    <span class="text-xs text-muted-foreground">{{ entry.description }}</span>
                </Link>
            </li>
        </ul>

        <p v-else class="py-8 text-center text-sm text-muted-foreground">
            Nothing matches “{{ query }}”.
        </p>
    </div>
</template>
