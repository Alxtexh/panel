<script setup lang="ts">
/**
 * The mailbox: folder rail, message list, reading pane.
 *
 * THREE PANES ON DESKTOP, ONE AT A TIME ON MOBILE. A reading pane beside a list
 * needs roughly 900px before both are usable; below that the list becomes a
 * column of truncated fragments. So narrow screens show the list, and opening a
 * message replaces it — which is what every mail client on a phone does.
 *
 * NOTHING HERE IS DEFERRED. Deferral is for aggregates that would block first
 * paint; a 25-row indexed list and a single row by primary key are not that, and
 * deferring them actively broke this screen — navigation preserves state, so the
 * component never remounts and the deferred follow-up never fires.
 *
 * SELECTION LIVES IN THE URL, so a message is linkable and survives a refresh —
 * the same reasoning as the table filters.
 */
import { Head, router, usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import {
    Archive,
    Inbox,
    Mail as MailIcon,
    Paperclip,
    Search,
    Send,
    Star,
    Trash2,
    TriangleAlert,
} from '@lucide/vue'

interface Folder {
    key: string
    label: string
    unread: number
    total: number
}

interface Row {
    id: number
    from: string
    email: string
    subject: string
    preview: string
    read: boolean
    starred: boolean
    attachment: boolean
    at: string | null
}

const props = defineProps<{
    folder: string
    search: string
    folders: Folder[]
    selectedId: number | null
}>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Mail', href: '/apps/mail' }] } })

const page = usePage()

const messages = computed(
    () => ((page.props.messages as { rows: Row[] } | undefined)?.rows ?? []) as Row[],
)
const message = computed(() => page.props.message as Record<string, any> | null)

const query = ref(props.search)

const ICONS: Record<string, typeof Inbox> = {
    inbox: Inbox,
    starred: Star,
    sent: Send,
    archived: Archive,
    spam: TriangleAlert,
    trash: Trash2,
}

/** Navigation is a visit, so back/forward work and a message is linkable. */
function go(params: Record<string, string | number | undefined>) {
    const current = Object.fromEntries(new URLSearchParams(window.location.search))

    const next: Record<string, string> = {}

    for (const [key, value] of Object.entries({ ...current, ...params })) {
        if (value !== undefined && value !== '' && value !== null) next[key] = String(value)
    }

    router.get('/apps/mail', next, { preserveState: true, preserveScroll: true, replace: true })
}

function openFolder(key: string) {
    // Clear the open message: an id from the inbox is not in the trash view.
    go({ folder: key, id: undefined })
}

function openMessage(row: Row) {
    row.read = true
    go({ id: row.id })
}

function submitSearch() {
    go({ q: query.value || undefined, id: undefined })
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

/**
 * Optimistic, with the server as the record.
 *
 * A star toggling half a second after the click reads as a broken button; the
 * request is what makes it true, the local flip is what makes it feel true.
 */
async function act(row: Row, action: string, folder?: string) {
    if (action === 'star') row.starred = true
    if (action === 'unstar') row.starred = false

    await fetch(`/apps/mail/${row.id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ action, folder }),
    })

    // A move changes which folder the row belongs to, so the list and the
    // counts both have to catch up; a star does not.
    if (action === 'move') go({ id: undefined })
    else router.reload({ only: ['folders'] })
}
</script>

<template>
    <Head title="Mail" />

    <div class="flex h-full min-h-0 w-full">
        <!-- Folder rail. Hidden on mobile, where the list is the whole screen. -->
        <aside class="hidden w-48 shrink-0 flex-col gap-1 border-r p-3 md:flex">
            <button
                type="button"
                class="bg-primary text-primary-foreground mb-2 flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium"
            >
                <MailIcon class="size-4" />
                Compose
            </button>

            <button
                v-for="f in folders"
                :key="f.key"
                type="button"
                class="flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors"
                :class="folder === f.key ? 'bg-accent text-foreground font-medium' : 'text-muted-foreground hover:bg-accent/50'"
                @click="openFolder(f.key)"
            >
                <component :is="ICONS[f.key] ?? Inbox" class="size-4 shrink-0" />
                <span class="min-w-0 flex-1 truncate text-left">{{ f.label }}</span>
                <span v-if="f.unread > 0" class="bg-primary text-primary-foreground rounded-full px-1.5 text-[10px] font-semibold">
                    {{ f.unread }}
                </span>
            </button>
        </aside>

        <!-- Message list. Replaced by the reading pane on mobile. -->
        <section
            class="flex min-w-0 flex-col border-r md:w-96 md:shrink-0"
            :class="selectedId ? 'hidden md:flex' : 'flex flex-1'"
        >
            <div class="flex items-center gap-2 border-b p-3">
                <div class="relative flex-1">
                    <Search class="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
                    <input
                        v-model="query"
                        type="search"
                        class="bg-background focus:ring-ring w-full rounded-md border py-1.5 pr-2 pl-8 text-sm focus:ring-2 focus:outline-none"
                        placeholder="Search mail…"
                        @keydown.enter="submitSearch"
                    />
                </div>
            </div>
                    <div v-if="messages.length === 0" class="text-muted-foreground p-8 text-center text-sm">
                        Nothing in {{ folder }}.
                    </div>

                    <ul v-else class="min-h-0 flex-1 divide-y overflow-y-auto">
                        <li v-for="row in messages" :key="row.id">
                            <button
                                type="button"
                                class="hover:bg-accent/40 flex w-full items-start gap-2 p-3 text-left transition-colors"
                                :class="selectedId === row.id ? 'bg-accent/60' : ''"
                                @click="openMessage(row)"
                            >
                                <span
                                    class="mt-1 shrink-0"
                                    role="button"
                                    :aria-label="row.starred ? 'Unstar' : 'Star'"
                                    @click.stop="act(row, row.starred ? 'unstar' : 'star')"
                                >
                                    <Star
                                        class="size-4"
                                        :class="row.starred ? 'fill-amber-400 text-amber-400' : 'text-muted-foreground'"
                                    />
                                </span>

                                <span class="min-w-0 flex-1">
                                    <span class="flex items-center justify-between gap-2">
                                        <span class="truncate text-sm" :class="row.read ? '' : 'font-semibold'">
                                            {{ row.from }}
                                        </span>
                                        <span class="text-muted-foreground shrink-0 text-[11px]">{{ row.at }}</span>
                                    </span>
                                    <span class="block truncate text-sm" :class="row.read ? 'text-muted-foreground' : 'font-medium'">
                                        {{ row.subject }}
                                    </span>
                                    <span class="text-muted-foreground flex items-center gap-1 truncate text-xs">
                                        <Paperclip v-if="row.attachment" class="size-3 shrink-0" />
                                        {{ row.preview }}
                                    </span>
                                </span>
                            </button>
                        </li>
                    </ul>
        </section>

        <!-- Reading pane. -->
        <section class="flex min-w-0 flex-1 flex-col" :class="selectedId ? 'flex' : 'hidden md:flex'">
                    <div
                        v-if="!message"
                        class="text-muted-foreground flex flex-1 items-center justify-center p-8 text-sm"
                    >
                        Select a message to read it.
                    </div>

                    <template v-else>
                        <header class="flex items-start justify-between gap-3 border-b p-4">
                            <div class="min-w-0">
                                <h1 class="truncate text-base font-semibold">{{ message.subject }}</h1>
                                <p class="text-muted-foreground text-xs">
                                    {{ message.from }} &lt;{{ message.email }}&gt; · {{ message.at }}
                                </p>
                            </div>

                            <div class="flex shrink-0 items-center gap-1">
                                <button
                                    type="button"
                                    class="hover:bg-accent rounded-md p-1.5"
                                    aria-label="Archive"
                                    @click="act({ id: message.id } as Row, 'move', 'archived')"
                                >
                                    <Archive class="size-4" />
                                </button>
                                <button
                                    type="button"
                                    class="hover:bg-accent rounded-md p-1.5"
                                    aria-label="Move to spam"
                                    @click="act({ id: message.id } as Row, 'move', 'spam')"
                                >
                                    <TriangleAlert class="size-4" />
                                </button>
                                <button
                                    type="button"
                                    class="hover:bg-accent hover:text-destructive rounded-md p-1.5"
                                    aria-label="Move to trash"
                                    @click="act({ id: message.id } as Row, 'move', 'trash')"
                                >
                                    <Trash2 class="size-4" />
                                </button>
                            </div>
                        </header>

                        <div class="min-h-0 flex-1 overflow-y-auto p-4">
                            <p class="text-sm leading-relaxed whitespace-pre-line">{{ message.body }}</p>
                        </div>
                    </template>
        </section>
    </div>
</template>
