<script setup lang="ts">
/**
 * Empty mailbox shell. Folders and threads are props from MailPage.
 *
 * No sample correspondence. A host that has none sees an empty list.
 */
import { Head } from '@inertiajs/vue3'
import { PAGE_SHELL } from '@alxtexh-enterprise/panel'

defineOptions({ inheritAttrs: false })

interface Folder {
    key: string
    label: string
    unread?: number
    total?: number
}

interface Row {
    id?: string | number
    from?: string
    subject?: string
    preview?: string
    at?: string | null
}

const props = withDefaults(
    defineProps<{
        pageHeading?: string
        pageDescription?: string | null
        folder?: string
        category?: string | null
        search?: string
        folders?: Folder[]
        categories?: { key: string; label: string; total?: number }[]
        messages?: { rows: Row[]; total: number }
    }>(),
    {
        folder: '',
        category: null,
        search: '',
        folders: () => [],
        categories: () => [],
        messages: () => ({ rows: [], total: 0 }),
    },
)
</script>

<template>
    <Head :title="pageHeading ?? 'Mail'" />

    <div :class="[PAGE_SHELL, 'flex flex-col gap-6']">
        <header class="space-y-1">
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading ?? 'Mail' }}</h1>
            <p v-if="pageDescription" class="text-sm text-muted-foreground font-normal">
                {{ pageDescription }}
            </p>
        </header>

        <div class="grid gap-6 sm:grid-cols-[12rem_1fr]">
            <aside class="space-y-4 text-sm">
                <p v-if="folders.length === 0" class="text-muted-foreground">No folders.</p>
                <nav v-else class="flex flex-col gap-1">
                    <span v-for="item in folders" :key="item.key" class="text-foreground">
                        {{ item.label }}
                    </span>
                </nav>
                <p v-if="categories.length" class="text-muted-foreground text-xs font-normal uppercase">
                    Labels
                </p>
                <nav v-if="categories.length" class="flex flex-col gap-1">
                    <span v-for="item in categories" :key="item.key">{{ item.label }}</span>
                </nav>
            </aside>

            <section>
                <p v-if="messages.rows.length === 0" class="text-muted-foreground text-sm font-normal">
                    No threads. Override MailPage::threads() to load your store.
                </p>
                <ul v-else class="divide-y rounded-md border">
                    <li v-for="row in messages.rows" :key="String(row.id ?? row.subject)" class="px-3 py-2">
                        <p class="font-medium">{{ row.subject ?? 'Untitled' }}</p>
                        <p class="text-muted-foreground text-xs font-normal">
                            {{ row.from }}
                            <span v-if="row.preview"> · {{ row.preview }}</span>
                        </p>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
