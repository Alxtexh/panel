<script setup lang="ts">
/**
 * ⌘K command palette.
 *
 * Two result sources with deliberately different latency:
 *
 *   Pages   filtered client-side from a static list, so they appear in the same
 *           frame you type. Zero network. This is what makes it feel instant.
 *   Records fetched from /search, debounced, prefix-matched against indexed
 *           columns. One lean JSON request, never a page re-render.
 *
 * In-flight requests are aborted when a newer keystroke supersedes them, so a
 * slow response can never overwrite a newer one (the classic race that makes a
 * palette show results for a query you already backspaced away from).
 */
import { router } from '@inertiajs/vue3';
import { CornerDownLeft, FileText, Search, Users, X } from '@lucide/vue';
import {
    computed,
    nextTick,
    onBeforeUnmount,
    onMounted,
    ref,
    watch,
} from 'vue';

interface Item {
    id: string;
    title: string;
    subtitle?: string;
    href: string;
    kind: 'page' | 'record';
}

interface Group {
    label: string;
    items: Item[];
}

const open = ref(false);
const term = ref('');
const activeIndex = ref(0);
const remoteGroups = ref<Group[]>([]);
const searching = ref(false);
const inputEl = ref<HTMLInputElement | null>(null);
const listEl = ref<HTMLElement | null>(null);

/** Static, so page results cost no round trip. */
const pages: Item[] = [
    {
        id: 'page-dashboard',
        title: 'Dashboard',
        subtitle: 'Overview',
        href: '/dashboard',
        kind: 'page',
    },
    {
        id: 'page-clients',
        title: 'Clients',
        subtitle: 'Subscribers',
        href: '/clients',
        kind: 'page',
    },
    {
        id: 'page-routers',
        title: 'Routers',
        subtitle: 'Network',
        href: '/routers',
        kind: 'page',
    },
    {
        id: 'page-plans',
        title: 'Plans',
        subtitle: 'Network',
        href: '/plans',
        kind: 'page',
    },
    {
        id: 'page-profile',
        title: 'Profile settings',
        subtitle: 'Settings',
        href: '/settings/profile',
        kind: 'page',
    },
    {
        id: 'page-password',
        title: 'Password',
        subtitle: 'Settings',
        href: '/settings/password',
        kind: 'page',
    },
    {
        id: 'page-appearance',
        title: 'Appearance',
        subtitle: 'Settings',
        href: '/settings/appearance',
        kind: 'page',
    },
];

const pageGroup = computed<Group | null>(() => {
    const q = term.value.trim().toLowerCase();
    const items =
        q === ''
            ? pages
            : pages.filter((p) =>
                  `${p.title} ${p.subtitle ?? ''}`.toLowerCase().includes(q),
              );

    return items.length ? { label: 'Pages', items } : null;
});

const groups = computed<Group[]>(() => {
    const out: Group[] = [];

    if (pageGroup.value) {
        out.push(pageGroup.value);
    }

    out.push(...remoteGroups.value);

    return out;
});

/** Flattened for keyboard navigation across group boundaries. */
const flat = computed<Item[]>(() => groups.value.flatMap((g) => g.items));

watch(flat, () => {
    if (activeIndex.value >= flat.value.length) {
        activeIndex.value = 0;
    }
});

let debounce: ReturnType<typeof setTimeout> | undefined;
let controller: AbortController | undefined;

watch(term, (value) => {
    clearTimeout(debounce);
    controller?.abort();

    const q = value.trim();

    if (q.length < 2) {
        remoteGroups.value = [];
        searching.value = false;

        return;
    }

    searching.value = true;

    debounce = setTimeout(async () => {
        controller = new AbortController();

        try {
            const res = await fetch(`/search?q=${encodeURIComponent(q)}`, {
                headers: { Accept: 'application/json' },
                signal: controller.signal,
            });

            if (!res.ok) {
                throw new Error(String(res.status));
            }

            const data = (await res.json()) as {
                groups: Omit<Group, 'items'> &
                    { items: Omit<Item, 'kind'>[] }[];
            };

            remoteGroups.value = (
                data.groups as unknown as {
                    label: string;
                    items: Omit<Item, 'kind'>[];
                }[]
            ).map((g) => ({
                label: g.label,
                items: g.items.map((i) => ({ ...i, kind: 'record' as const })),
            }));
        } catch (e) {
            // An aborted request is the expected path when typing continues.
            if ((e as Error).name !== 'AbortError') {
                remoteGroups.value = [];
            }
        } finally {
            searching.value = false;
        }
    }, 180);
});

function show() {
    open.value = true;
    activeIndex.value = 0;
    nextTick(() => inputEl.value?.focus());
}

function hide() {
    open.value = false;
    term.value = '';
    remoteGroups.value = [];
}

function choose(item: Item) {
    hide();
    router.visit(item.href);
}

function onKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();

        if (open.value) {
            hide();
        } else {
            show();
        }

        return;
    }

    if (!open.value) {
        return;
    }

    if (e.key === 'Escape') {
        e.preventDefault();
        hide();
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex.value =
            (activeIndex.value + 1) % Math.max(flat.value.length, 1);
        scrollActiveIntoView();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex.value =
            (activeIndex.value - 1 + flat.value.length) %
            Math.max(flat.value.length, 1);
        scrollActiveIntoView();
    } else if (e.key === 'Enter') {
        e.preventDefault();
        const item = flat.value[activeIndex.value];

        if (item) {
            choose(item);
        }
    }
}

function scrollActiveIntoView() {
    nextTick(() => {
        listEl.value
            ?.querySelector('[data-active="true"]')
            ?.scrollIntoView({ block: 'nearest' });
    });
}

function indexOf(group: Group, item: Item): number {
    return flat.value.findIndex((i) => i.id === item.id);
}

const isMac =
    typeof navigator !== 'undefined' &&
    /Mac|iPhone|iPad/.test(navigator.platform);

onMounted(() => window.addEventListener('keydown', onKeydown));
onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown);
    clearTimeout(debounce);
    controller?.abort();
});

defineExpose({ show });
</script>

<template>
    <!-- Trigger. Collapses to an icon-only button on phones, where a wide
         search field would eat the whole topbar. -->
    <button
        type="button"
        class="flex h-9 shrink items-center gap-2 rounded-md border border-input bg-background px-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground sm:w-56 sm:px-3 lg:w-72"
        @click="show"
    >
        <Search class="size-4 shrink-0" />
        <span class="hidden flex-1 text-left sm:inline">Search…</span>
        <kbd
            class="hidden rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline"
        >
            {{ isMac ? '⌘' : 'Ctrl' }}K
        </kbd>
    </button>

    <Teleport to="body">
        <Transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="opacity-0"
            leave-active-class="transition duration-75 ease-in"
            leave-to-class="opacity-0"
        >
            <div
                v-if="open"
                class="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[10vh] backdrop-blur-sm"
                @click.self="hide"
            >
                <div
                    class="w-full max-w-xl overflow-hidden rounded-xl border bg-popover text-popover-foreground shadow-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search"
                >
                    <!-- Input -->
                    <div class="flex items-center gap-2 border-b px-4">
                        <Search class="size-4 shrink-0 text-muted-foreground" />
                        <input
                            ref="inputEl"
                            v-model="term"
                            class="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            placeholder="Search pages and clients…"
                            aria-label="Search pages and clients"
                        />
                        <span
                            v-if="searching"
                            class="size-3.5 shrink-0 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground"
                        />
                        <button
                            type="button"
                            class="shrink-0 text-muted-foreground hover:text-foreground"
                            aria-label="Close search"
                            @click="hide"
                        >
                            <X class="size-4" />
                        </button>
                    </div>

                    <!-- Results -->
                    <div
                        ref="listEl"
                        class="max-h-[min(60vh,24rem)] overflow-y-auto p-2"
                    >
                        <div
                            v-if="flat.length === 0"
                            class="px-3 py-8 text-center text-sm text-muted-foreground"
                        >
                            <template v-if="term.trim().length < 2"
                                >Type at least two characters</template
                            >
                            <template v-else
                                >No results for “{{ term }}”</template
                            >
                        </div>

                        <div
                            v-for="group in groups"
                            :key="group.label"
                            class="mb-1 last:mb-0"
                        >
                            <p
                                class="px-3 py-1.5 text-[11px] font-medium tracking-wide text-muted-foreground uppercase"
                            >
                                {{ group.label }}
                            </p>

                            <button
                                v-for="item in group.items"
                                :key="item.id"
                                type="button"
                                :data-active="
                                    indexOf(group, item) === activeIndex
                                "
                                class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
                                @click="choose(item)"
                                @mouseenter="activeIndex = indexOf(group, item)"
                            >
                                <component
                                    :is="
                                        item.kind === 'page' ? FileText : Users
                                    "
                                    class="size-4 shrink-0 text-muted-foreground"
                                />
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate font-medium">{{
                                        item.title
                                    }}</span>
                                    <span
                                        v-if="item.subtitle"
                                        class="block truncate text-xs text-muted-foreground"
                                    >
                                        {{ item.subtitle }}
                                    </span>
                                </span>
                                <CornerDownLeft
                                    v-if="indexOf(group, item) === activeIndex"
                                    class="size-3.5 shrink-0 text-muted-foreground"
                                />
                            </button>
                        </div>
                    </div>

                    <!-- Footer hints. Hidden on phones, where there is no keyboard. -->
                    <div
                        class="hidden items-center gap-4 border-t bg-muted/40 px-4 py-2 text-[11px] text-muted-foreground sm:flex"
                    >
                        <span class="flex items-center gap-1"
                            ><kbd class="rounded border bg-background px-1"
                                >↑↓</kbd
                            >
                            Navigate</span
                        >
                        <span class="flex items-center gap-1"
                            ><kbd class="rounded border bg-background px-1"
                                >↵</kbd
                            >
                            Open</span
                        >
                        <span class="flex items-center gap-1"
                            ><kbd class="rounded border bg-background px-1"
                                >esc</kbd
                            >
                            Close</span
                        >
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
