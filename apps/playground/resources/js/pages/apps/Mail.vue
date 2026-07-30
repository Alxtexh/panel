<script setup lang="ts">
/**
 * The mailbox: a folder rail and a table of threads.
 *
 * NO READING PANE, and that is the correction. The first cut put a pane beside
 * the list, which left the list about 380px wide - enough for a sender and a
 * truncated subject and nothing else. Sender, time, subject, preview and label
 * are what make a mailbox scannable, and none of them fit. So the list gets the
 * full width and a thread opens as its own page, which is also what makes a
 * thread linkable.
 *
 * IT LISTS THREADS, NOT MESSAGES. A message and its reply share a subject; two
 * rows for one conversation is the artefact of a flat list, not a mailbox.
 *
 * SELECTION AND FOLDER LIVE IN THE URL, so a view survives a refresh and the
 * back button does what it looks like it does.
 */
import { Head, Link, router } from '@inertiajs/vue3';
import {
    Archive,
    FileText,
    Inbox,
    Mail as MailIcon,
    Paperclip,
    RefreshCw,
    Search,
    Send,
    Star,
    Tag,
    Trash2,
    TriangleAlert,
    Users,
} from '@lucide/vue';
import { computed, ref } from 'vue';

interface Folder {
    key: string;
    label: string;
    unread: number;
    total: number;
}

interface Category {
    key: string;
    label: string;
    total: number;
}

interface Row {
    id: number;
    from: string;
    email: string;
    subject: string;
    preview: string;
    category: string | null;
    read: boolean;
    starred: boolean;
    important: boolean;
    attachment: boolean;
    count: number;
    at: string | null;
}

const props = defineProps<{
    folder: string;
    category: string | null;
    search: string;
    folders: Folder[];
    categories: Category[];
    messages: { rows: Row[]; total: number };
}>();

defineOptions({
    layout: { breadcrumbs: [{ title: 'Mail', href: '/apps/mail' }] },
});

const rows = computed(() => props.messages.rows);

const query = ref(props.search);
const selected = ref<Set<number>>(new Set());

const ICONS: Record<string, typeof Inbox> = {
    inbox: Inbox,
    starred: Star,
    important: Tag,
    sent: Send,
    archived: Archive,
    spam: TriangleAlert,
    trash: Trash2,
};

const CATEGORY_ICONS: Record<string, typeof Users> = {
    Security: TriangleAlert,
    Support: Users,
    Finance: FileText,
    Sales: Tag,
    Update: RefreshCw,
    System: RefreshCw,
    HR: Users,
};

/**
 * A label needs to be distinguishable at a glance, not merely present. The map
 * is explicit rather than hashed from the string, because a hash gives Finance
 * and Security the same colour often enough to matter and there is no way to
 * fix it when it does.
 */
const CATEGORY_TONE: Record<string, string> = {
    Security: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
    Support: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
    Finance: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    Sales: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
    Update: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
    System: 'bg-slate-500/10 text-slate-600 dark:text-slate-400',
    HR: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
};

const allSelected = computed(
    () => rows.value.length > 0 && selected.value.size === rows.value.length,
);

function initials(name: string): string {
    return name
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]!.toUpperCase())
        .join('');
}

/** Navigation is a visit, so back/forward work and a view is linkable. */
function go(params: Record<string, string | number | undefined>) {
    const current = Object.fromEntries(
        new URLSearchParams(window.location.search),
    );

    const next: Record<string, string> = {};

    for (const [key, value] of Object.entries({ ...current, ...params })) {
        if (value !== undefined && value !== '' && value !== null) {
            next[key] = String(value);
        }
    }

    selected.value = new Set();

    router.get('/apps/mail', next, {
        preserveState: true,
        preserveScroll: true,
        replace: true,
    });
}

function openFolder(key: string) {
    // A category narrows a folder, so switching folder clears it rather than
    // silently carrying a filter into a view that may have nothing under it.
    go({ folder: key, category: undefined });
}

function openCategory(key: string) {
    go({ category: props.category === key ? undefined : key });
}

function submitSearch() {
    go({ q: query.value || undefined });
}

/**
 * THE WHOLE ROW OPENS THE THREAD.
 *
 * The subject and the sender were the only links, so most of a wide row was
 * dead space - the pointer says "clickable" over two words out of a hundred
 * pixels, and everything else silently does nothing.
 *
 * The anchors STAY rather than being replaced by this handler: a real link is
 * what makes middle-click, ⌘-click and "open in new tab" work, and none of that
 * survives being turned into a click listener. So the row is a convenience on
 * top of the links, and it steps aside when the click was already on one.
 */
function openRow(event: MouseEvent, row: Row) {
    const target = event.target as HTMLElement | null;

    // A click that landed on a link, the checkbox, or the star has already been
    // handled by the thing it landed on.
    if (target?.closest('a, button, input')) {
        return;
    }

    router.visit(`/apps/mail/${row.id}`);
}

function toggleAll() {
    selected.value = allSelected.value
        ? new Set()
        : new Set(rows.value.map((r) => r.id));
}

function toggle(id: number) {
    const next = new Set(selected.value);

    if (next.has(id)) {
        next.delete(id);
    } else {
        next.add(id);
    }

    selected.value = next;
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/);

    return match ? decodeURIComponent(match[1]) : '';
}

/**
 * Optimistic, with the server as the record.
 *
 * A star toggling half a second after the click reads as a broken button; the
 * request is what makes it true, the local flip is what makes it feel true.
 */
async function act(id: number, action: string, folder?: string) {
    const row = rows.value.find((r) => r.id === id);

    if (row) {
        if (action === 'star') {
            row.starred = true;
        }

        if (action === 'unstar') {
            row.starred = false;
        }
    }

    await fetch(`/apps/mail/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
        body: JSON.stringify({ action, folder }),
    });

    // A move changes which folder the row belongs to, so the list and the
    // counts both have to catch up; a star only changes a count.
    if (action === 'move') {
        go({});
    } else {
        router.reload({ only: ['folders', 'categories'] });
    }
}

async function moveSelected(folder: string) {
    await Promise.all([...selected.value].map((id) => act(id, 'move', folder)));
}
</script>

<template>
    <Head title="Mail" />

    <div
        class="flex h-full min-h-0 w-full overflow-hidden rounded-xl border bg-card"
    >
        <!-- The rail. Hidden on mobile, where the list is the whole screen. -->
        <aside
            class="hidden w-56 shrink-0 flex-col gap-1 overflow-y-auto border-r p-4 md:flex"
        >
            <h2 class="mb-3 px-2 text-base font-semibold">Mails</h2>

            <p
                class="px-2 pb-1 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase"
            >
                Menu
            </p>

            <button
                v-for="f in folders"
                :key="f.key"
                type="button"
                class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors"
                :class="
                    folder === f.key
                        ? 'bg-primary font-medium text-primary-foreground'
                        : 'text-muted-foreground hover:bg-accent/60'
                "
                @click="openFolder(f.key)"
            >
                <component
                    :is="ICONS[f.key] ?? Inbox"
                    class="size-4 shrink-0"
                />
                <span class="min-w-0 flex-1 truncate text-left">{{
                    f.label
                }}</span>
                <span
                    v-if="f.unread > 0"
                    class="rounded-full px-1.5 text-[10px] font-semibold"
                    :class="
                        folder === f.key
                            ? 'bg-primary-foreground/20'
                            : 'bg-accent'
                    "
                >
                    {{ f.unread }}
                </span>
            </button>

            <template v-if="categories.length">
                <hr class="my-3" />

                <p
                    class="px-2 pb-1 text-[10px] font-semibold tracking-wider text-muted-foreground uppercase"
                >
                    Categories
                </p>

                <button
                    v-for="c in categories"
                    :key="c.key"
                    type="button"
                    class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors"
                    :class="
                        category === c.key
                            ? 'bg-accent font-medium text-foreground'
                            : 'text-muted-foreground hover:bg-accent/60'
                    "
                    @click="openCategory(c.key)"
                >
                    <component
                        :is="CATEGORY_ICONS[c.key] ?? Tag"
                        class="size-4 shrink-0"
                    />
                    <span class="min-w-0 flex-1 truncate text-left">{{
                        c.label
                    }}</span>
                    <span
                        class="text-[10px] font-semibold text-muted-foreground"
                        >{{ c.total }}</span
                    >
                </button>
            </template>
        </aside>

        <!-- The list. -->
        <section class="flex min-w-0 flex-1 flex-col">
            <div class="flex items-center gap-3 p-4">
                <div class="relative min-w-0 flex-1">
                    <Search
                        class="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                    />
                    <input
                        v-model="query"
                        type="search"
                        class="w-full rounded-lg border bg-background py-2 pr-3 pl-9 text-sm focus:ring-2 focus:ring-ring focus:outline-none"
                        placeholder="Search mail"
                        @keydown.enter="submitSearch"
                    />
                </div>

                <button
                    type="button"
                    class="flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-sm font-medium text-primary-foreground"
                >
                    <MailIcon class="size-4" />
                    <span class="hidden sm:inline">Compose New</span>
                </button>
            </div>

            <!--
                Bulk actions replace the header row rather than sitting beside
                it: a toolbar that is present but inert most of the time is what
                trains people to stop reading it.
            -->
            <div
                v-if="selected.size"
                class="flex items-center gap-2 border-y bg-accent/40 px-4 py-2 text-sm"
            >
                <span class="text-muted-foreground"
                    >{{ selected.size }} selected</span
                >
                <span class="flex-1"></span>
                <button
                    type="button"
                    class="rounded-md px-2 py-1 hover:bg-accent"
                    @click="moveSelected('archived')"
                >
                    Archive
                </button>
                <button
                    type="button"
                    class="rounded-md px-2 py-1 hover:bg-accent"
                    @click="moveSelected('spam')"
                >
                    Spam
                </button>
                <button
                    type="button"
                    class="rounded-md px-2 py-1 hover:bg-accent hover:text-destructive"
                    @click="moveSelected('trash')"
                >
                    Delete
                </button>
            </div>

            <div
                v-if="rows.length === 0"
                class="p-12 text-center text-sm text-muted-foreground"
            >
                Nothing in {{ category ?? folder }}.
            </div>

            <div v-else class="min-h-0 flex-1 overflow-y-auto">
                <table class="w-full table-fixed border-collapse text-sm">
                    <thead class="sticky top-0 z-10 text-muted-foreground">
                        <tr class="border-y bg-card">
                            <th class="w-10 py-2.5 pl-4">
                                <input
                                    type="checkbox"
                                    class="size-4 align-middle"
                                    aria-label="Select all"
                                    :checked="allSelected"
                                    @change="toggleAll"
                                />
                            </th>
                            <th class="w-44 py-2.5 pl-3 text-left font-medium">
                                From
                            </th>
                            <th class="w-20 py-2.5 text-left font-medium">
                                Time
                            </th>
                            <th class="py-2.5 pl-3 text-left font-medium">
                                Message
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y">
                        <tr
                            v-for="row in rows"
                            :key="row.id"
                            class="group cursor-pointer transition-colors hover:bg-accent/40"
                            :class="selected.has(row.id) ? 'bg-accent/50' : ''"
                            @click="openRow($event, row)"
                        >
                            <td class="py-3 pl-4 align-top">
                                <input
                                    type="checkbox"
                                    class="size-4 align-middle"
                                    :aria-label="`Select ${row.subject}`"
                                    :checked="selected.has(row.id)"
                                    @change="toggle(row.id)"
                                />
                            </td>

                            <td class="py-3 pl-3 align-top">
                                <div class="flex items-start gap-2.5">
                                    <span class="relative shrink-0">
                                        <span
                                            class="flex size-8 items-center justify-center rounded-full bg-accent text-[11px] font-semibold text-muted-foreground"
                                        >
                                            {{ initials(row.from) }}
                                        </span>
                                        <!-- The unread dot rides the avatar, so
                                             it never competes with the subject. -->
                                        <span
                                            v-if="!row.read"
                                            class="absolute -top-0.5 -right-0.5 size-2.5 rounded-full bg-primary ring-2 ring-card"
                                        ></span>
                                    </span>

                                    <span class="min-w-0">
                                        <Link
                                            :href="`/apps/mail/${row.id}`"
                                            class="block truncate hover:underline"
                                            :class="
                                                row.read ? '' : 'font-semibold'
                                            "
                                        >
                                            {{ row.from }}
                                        </Link>
                                        <button
                                            type="button"
                                            class="mt-0.5 flex items-center gap-1"
                                            :aria-label="
                                                row.starred ? 'Unstar' : 'Star'
                                            "
                                            @click="
                                                act(
                                                    row.id,
                                                    row.starred
                                                        ? 'unstar'
                                                        : 'star',
                                                )
                                            "
                                        >
                                            <Star
                                                class="size-3.5"
                                                :class="
                                                    row.starred
                                                        ? 'fill-amber-400 text-amber-400'
                                                        : 'text-muted-foreground/50'
                                                "
                                            />
                                            <span
                                                v-if="row.count > 1"
                                                class="text-[11px] text-muted-foreground"
                                            >
                                                {{ row.count }}
                                            </span>
                                        </button>
                                    </span>
                                </div>
                            </td>

                            <td
                                class="py-3 align-top text-xs whitespace-nowrap text-muted-foreground"
                            >
                                {{ row.at }}
                            </td>

                            <td class="py-3 pr-4 pl-3 align-top">
                                <div class="flex items-start gap-3">
                                    <Link
                                        :href="`/apps/mail/${row.id}`"
                                        class="min-w-0 flex-1 truncate"
                                    >
                                        <span
                                            :class="
                                                row.read ? '' : 'font-semibold'
                                            "
                                            >{{ row.subject }}</span
                                        >
                                        <span class="text-muted-foreground">
                                            <Paperclip
                                                v-if="row.attachment"
                                                class="mx-1 inline size-3"
                                            />
                                            {{ row.preview }}
                                        </span>
                                    </Link>

                                    <span
                                        v-if="row.category"
                                        class="shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium"
                                        :class="
                                            CATEGORY_TONE[row.category] ??
                                            'bg-accent text-muted-foreground'
                                        "
                                    >
                                        {{ row.category }}
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>
