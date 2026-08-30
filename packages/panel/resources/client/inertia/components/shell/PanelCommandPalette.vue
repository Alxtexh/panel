<script setup lang="ts">
/**
 * Go anywhere, or find any record, from the keyboard.
 *
 * PAGES ARE LOCAL, RECORDS ARE REMOTE, and that split is the whole reason this
 * feels instant. The navigation is already on the client - the same `panelNav`
 * the sidebar draws - so filtering it costs nothing and happens in the frame
 * the key was pressed. Only records need a server, and only after 2 characters
 * and a pause.
 *
 * THE DEMO'S VERSION LISTED ITS PAGES IN ITS OWN SOURCE, which is why it could
 * not ship: a palette that has to be edited whenever somebody adds a screen is
 * one that goes stale the first week. This reads the registry, so a resource
 * generated this afternoon is in the palette with nothing else touched.
 *
 * ONE REQUEST IN FLIGHT. Every keystroke aborts the last one - without that,
 * answers arrive out of order and the list flickers between two terms, which
 * looks like a bug in the search rather than in the client.
 */
import { router, usePage } from '@inertiajs/vue3'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = withDefaults(
    defineProps<{
        /** Where the record search lives. Panel-prefixed by the server. */
        endpoint?: string
    }>(),
    { endpoint: '' },
)

interface Item {
    id: string
    title: string
    subtitle?: string | null
    href: string
    kind: 'page' | 'record'
}

interface Group {
    label: string
    items: Item[]
}

const page = usePage()

const open = ref(false)
const term = ref('')
const activeIndex = ref(0)
const searching = ref(false)
const remoteGroups = ref<Group[]>([])
const recentItems = ref<Item[]>([])
const pinnedItems = ref<Item[]>([])

const inputEl = ref<HTMLInputElement | null>(null)
const listEl = ref<HTMLElement | null>(null)

/** The navigation the sidebar draws, plus declared panel pages, as palette items. */
function navItems(entries: any[]): Item[] {
    const items: Item[] = []

    for (const entry of entries ?? []) {
        if (!entry?.href || !entry?.title) {
            continue
        }

        items.push({
            id: `page-${entry.key ?? entry.href}`,
            title: entry.title,
            subtitle: entry.group ?? null,
            href: entry.href,
            kind: 'page',
        })

        if (Array.isArray(entry.members) && entry.members.length > 0) {
            items.push(...navItems(entry.members))
        }
    }

    return items
}

const pages = computed<Item[]>(() => {
    const fromNav = navItems((page.props as any).panelNav ?? [])
    const seen = new Set(fromNav.map((item) => item.href))
    const extra = navItems((page.props as any).panelPages ?? []).filter(
        (item) => !seen.has(item.href),
    )

    return [...fromNav, ...extra]
})

const searchUrl = computed<string>(() => {
    if (props.endpoint) {
        return props.endpoint
    }

    const prefix = (page.props as any).panel?.path ?? '/'

    return `${prefix === '/' ? '' : prefix}/panel-search`
})

const recentStorageKey = computed<string>(
    () => `alxtexhpanel.command-palette.recent.${searchUrl.value}`,
)

const pinnedStorageKey = computed<string>(
    () => `alxtexhpanel.command-palette.pinned.${searchUrl.value}`,
)

const recentLimit = 7

function loadRecent(): void {
    try {
        const raw = window.sessionStorage.getItem(recentStorageKey.value)

        if (!raw) {
            recentItems.value = []

            return
        }

        const parsed = JSON.parse(raw) as unknown

        if (!Array.isArray(parsed)) {
            recentItems.value = []

            return
        }

        recentItems.value = (parsed as unknown[])
            .filter((i) => i && typeof i === 'object')
            .map((i) => i as Partial<Item>)
            .filter(
                (i) =>
                    i.kind === 'record' &&
                    typeof i.href === 'string' &&
                    typeof i.title === 'string',
            )
            .slice(0, recentLimit)
            .map((i) => ({ ...i, id: String(i.id ?? i.href) }) as Item)
    } catch {
        recentItems.value = []
    }
}

function loadPinned(): void {
    try {
        const raw = window.sessionStorage.getItem(pinnedStorageKey.value)

        if (!raw) {
            pinnedItems.value = []

            return
        }

        const parsed = JSON.parse(raw) as unknown

        if (!Array.isArray(parsed)) {
            pinnedItems.value = []

            return
        }

        pinnedItems.value = (parsed as unknown[])
            .filter((i) => i && typeof i === 'object')
            .map((i) => i as Partial<Item>)
            .filter(
                (i) =>
                    i.kind === 'record' &&
                    typeof i.href === 'string' &&
                    typeof i.title === 'string',
            )
            .slice(0, recentLimit)
            .map((i) => ({ ...i, id: String(i.id ?? i.href) }) as Item)
    } catch {
        pinnedItems.value = []
    }
}

function isPinned(item: Item): boolean {
    return pinnedItems.value.some((i) => i.href === item.href)
}

function rememberRecent(item: Item): void {
    if (item.kind !== 'record') {
        return
    }

    if (isPinned(item)) {
        const nextPinned = [item, ...pinnedItems.value.filter((i) => i.href !== item.href)].slice(
            0,
            recentLimit,
        )

        pinnedItems.value = nextPinned

        try {
            window.sessionStorage.setItem(pinnedStorageKey.value, JSON.stringify(nextPinned))
        } catch {
            // Session storage can be disabled. Pinning is optional.
        }

        return
    }

    const next = [item, ...recentItems.value.filter((i) => i.href !== item.href)].slice(
        0,
        recentLimit,
    )

    recentItems.value = next

    try {
        window.sessionStorage.setItem(recentStorageKey.value, JSON.stringify(next))
    } catch {
        // Session storage can be disabled. Recent results are optional.
    }
}

function togglePin(item: Item): void {
    if (item.kind !== 'record') {
        return
    }

    if (isPinned(item)) {
        const nextPinned = pinnedItems.value.filter((i) => i.href !== item.href)
        const nextRecent = [item, ...recentItems.value.filter((i) => i.href !== item.href)].slice(
            0,
            recentLimit,
        )

        pinnedItems.value = nextPinned
        recentItems.value = nextRecent

        try {
            window.sessionStorage.setItem(pinnedStorageKey.value, JSON.stringify(nextPinned))
            window.sessionStorage.setItem(recentStorageKey.value, JSON.stringify(nextRecent))
        } catch {
            // Session storage can be disabled. Pinning is optional.
        }

        return
    }

    const nextPinned = [item, ...pinnedItems.value.filter((i) => i.href !== item.href)].slice(
        0,
        recentLimit,
    )
    const nextRecent = recentItems.value.filter((i) => i.href !== item.href)

    pinnedItems.value = nextPinned
    recentItems.value = nextRecent

    try {
        window.sessionStorage.setItem(pinnedStorageKey.value, JSON.stringify(nextPinned))
        window.sessionStorage.setItem(recentStorageKey.value, JSON.stringify(nextRecent))
    } catch {
        // Session storage can be disabled. Pinning is optional.
    }
}

const recentCombined = computed<Item[]>(() => {
    const pinned = pinnedItems.value
    const recent = recentItems.value.filter((i) => !pinned.some((p) => p.href === i.href))

    return [...pinned, ...recent].slice(0, recentLimit)
})

const pageGroup = computed<Group | null>(() => {
    const q = term.value.trim().toLowerCase()

    const items =
        q === ''
            ? pages.value
            : pages.value.filter((p) => `${p.title} ${p.subtitle ?? ''}`.toLowerCase().includes(q))

    return items.length ? { label: 'Pages', items } : null
})

const groups = computed<Group[]>(() => [
    ...(term.value.trim() === '' && recentCombined.value.length
        ? [{ label: 'Recent', items: recentCombined.value }]
        : []),
    ...(pageGroup.value ? [pageGroup.value] : []),
    ...remoteGroups.value,
])

/** Flattened, so the arrow keys cross group boundaries without noticing them. */
const flat = computed<Item[]>(() => groups.value.flatMap((g) => g.items))

watch(flat, () => {
    if (activeIndex.value >= flat.value.length) {
        activeIndex.value = 0
    }
})

let debounce: ReturnType<typeof setTimeout> | undefined
let controller: AbortController | undefined

/**
 * WHICH REQUEST IS ALLOWED TO ANSWER. Aborting is not enough on its own,
 * because an abort settles the OLD promise asynchronously - so its `finally`
 * ran after the next keystroke had already set `searching` to true and turned
 * the spinner off underneath a search that was still pending. The list then sat
 * looking finished and wrong until the real answer landed.
 *
 * Only the newest request may touch shared state. Everything older resolves
 * into nothing, whether it was aborted, errored, or merely slow.
 */
let latest = 0

/**
 * ANSWERS ALREADY PAID FOR.
 *
 * Backspacing is the most common thing anybody does in a search box, and every
 * deletion used to be a fresh round trip for a term that had just been on
 * screen. A term maps to the same results for as long as the palette is open,
 * so the second visit costs nothing and renders in the same frame as the
 * keystroke - which is the difference people describe as "instant".
 *
 * BOUNDED AND OPEN-SCOPED. It is cleared when the palette closes, so it can
 * neither grow without limit nor show a record that was edited or deleted in
 * between; within one session of typing, staleness is not reachable.
 */
const CACHE_LIMIT = 50
const cache = new Map<string, Group[]>()

function remember(q: string, value: Group[]): void {
    cache.delete(q)
    cache.set(q, value)

    if (cache.size > CACHE_LIMIT) {
        // Oldest insertion first, so the least recently stored falls out.
        cache.delete(cache.keys().next().value as string)
    }
}

watch(term, (value) => {
    activeIndex.value = 0

    clearTimeout(debounce)
    controller?.abort()

    const q = value.trim()
    const id = ++latest

    if (q.length < 2) {
        remoteGroups.value = []
        searching.value = false

        return
    }

    /*
     * A HIT SKIPS THE DEBOUNCE ENTIRELY. Waiting 180ms to display something
     * already in memory is a pause with nothing at the end of it.
     */
    const hit = cache.get(q)

    if (hit !== undefined) {
        remoteGroups.value = hit
        searching.value = false

        return
    }

    searching.value = true

    debounce = setTimeout(async () => {
        controller = new AbortController()

        try {
            const res = await fetch(`${searchUrl.value}?q=${encodeURIComponent(q)}`, {
                headers: { Accept: 'application/json' },
                signal: controller.signal,
            })

            if (!res.ok) {
                throw new Error(String(res.status))
            }

            const data = (await res.json()) as {
                groups: { label: string; items: Omit<Item, 'kind'>[] }[]
            }

            const mapped = data.groups.map((g) => ({
                label: g.label,
                items: g.items.map((i) => ({ ...i, id: String(i.href), kind: 'record' as const })),
            }))

            // Worth keeping even if it arrived too late to display: the term is
            // one backspace away from being asked for again.
            remember(q, mapped)

            if (id === latest) {
                remoteGroups.value = mapped
            }
        } catch (e) {
            // An abort is the EXPECTED path when typing continues, so it must
            // not clear the list somebody is still reading.
            if ((e as Error).name !== 'AbortError' && id === latest) {
                remoteGroups.value = []
            }
        } finally {
            if (id === latest) {
                searching.value = false
            }
        }
    }, 180)
})

function show(): void {
    open.value = true
    activeIndex.value = 0
    loadPinned()
    loadRecent()
    void nextTick(() => inputEl.value?.focus())
}

function hide(): void {
    open.value = false
    term.value = ''
    remoteGroups.value = []

    /*
     * CLOSING ENDS THE CACHE'S LIFE. Reopening the palette is the moment
     * somebody expects to see the world as it is now - they may have just
     * renamed or deleted the very record they are looking for - so results
     * never outlive the session of typing that produced them.
     *
     * `latest` moves too, so a reply still in flight cannot arrive after the
     * close and repopulate a list nobody is looking at.
     */
    latest++
    cache.clear()
}

function choose(item: Item): void {
    rememberRecent(item)
    hide()
    router.visit(item.href)
}

function scrollActiveIntoView(): void {
    void nextTick(() => {
        listEl.value?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })
    })
}

function onKeydown(e: KeyboardEvent): void {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()

        if (open.value) {
            hide()
        } else {
            show()
        }

        return
    }

    if (!open.value) {
        return
    }

    if (e.key === 'Escape') {
        e.preventDefault()
        hide()
    } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value + 1) % Math.max(flat.value.length, 1)
        scrollActiveIntoView()
    } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        activeIndex.value =
            (activeIndex.value - 1 + flat.value.length) % Math.max(flat.value.length, 1)
        scrollActiveIntoView()
    } else if (e.key === 'Enter') {
        e.preventDefault()

        const item = flat.value[activeIndex.value]

        if (item) {
            choose(item)
        }
    }
}

function indexOf(item: Item): number {
    return flat.value.findIndex((i) => i.id === item.id)
}

/*
 * `platform` IS DEPRECATED AND STILL THE ONLY THING THAT WORKS EVERYWHERE.
 * Getting this wrong shows a Mac user Ctrl and a Windows user the command key,
 * which is a small lie in the one place people look for the shortcut.
 */
const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform ?? '')

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    clearTimeout(debounce)
    controller?.abort()
})

defineExpose({ show })
</script>

<template>
    <!--
        THE TRIGGER COLLAPSES ON A PHONE. A search field wide enough to read
        eats the whole topbar at 375px, and the shortcut it advertises does not
        exist on a device with no keyboard.
    -->
    <button
        type="button"
        class="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-9 shrink items-center gap-2 rounded-md border px-2.5 text-sm transition-colors sm:w-56 sm:px-3 lg:w-72"
        aria-label="Search"
        @click="show"
    >
        <svg
            class="size-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
        >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
        </svg>

        <span class="hidden flex-1 text-left sm:inline">Search…</span>

        <kbd
            class="bg-muted text-muted-foreground hidden rounded px-1.5 py-0.5 font-mono text-[10px] font-medium sm:inline"
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
                role="dialog"
                aria-modal="true"
                aria-label="Search"
                @click.self="hide"
            >
                <div
                    class="bg-popover text-popover-foreground w-full max-w-xl overflow-hidden rounded-xl border shadow-2xl"
                >
                    <div class="flex items-center gap-2 border-b px-3">
                        <svg
                            class="text-muted-foreground size-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                        >
                            <circle cx="11" cy="11" r="7" />
                            <path d="m20 20-3.5-3.5" />
                        </svg>

                        <input
                            ref="inputEl"
                            v-model="term"
                            data-palette-input
                            type="text"
                            class="h-10 flex-1 bg-transparent text-sm outline-none"
                            placeholder="Search screens and records…"
                        />

                        <span v-if="searching" class="text-muted-foreground text-xs font-normal"
                            >…</span
                        >
                    </div>

                    <div ref="listEl" class="max-h-80 overflow-y-auto p-1">
                        <div v-for="group in groups" :key="group.label" class="mb-0.5">
                            <p
                                class="text-muted-foreground px-2 pt-1.5 pb-0.5 text-[11px] font-medium tracking-wide uppercase"
                            >
                                {{ group.label }}
                            </p>

                            <button
                                v-for="item in group.items"
                                :key="item.id"
                                type="button"
                                class="flex w-full items-center justify-between gap-3 rounded-md px-2 py-1.5 text-left text-sm transition-colors"
                                :class="
                                    indexOf(item) === activeIndex
                                        ? 'bg-muted text-foreground'
                                        : 'hover:bg-muted/60'
                                "
                                :data-active="indexOf(item) === activeIndex"
                                @click="choose(item)"
                                @mousemove="activeIndex = indexOf(item)"
                            >
                                <span class="min-w-0 truncate">{{ item.title }}</span>

                                <span class="flex shrink-0 items-center gap-2">
                                    <span
                                        v-if="item.subtitle"
                                        class="text-muted-foreground text-xs font-normal"
                                    >
                                        {{ item.subtitle }}
                                    </span>

                                    <span
                                        v-if="item.kind === 'record'"
                                        class="inline-flex h-6 items-center rounded border px-1.5 text-[10px] leading-none transition-colors hover:bg-accent"
                                        :class="
                                            isPinned(item)
                                                ? 'border-amber-500/60 text-amber-600 dark:text-amber-500'
                                                : 'border-border text-muted-foreground'
                                        "
                                        role="button"
                                        :aria-label="isPinned(item) ? 'Unpin' : 'Pin'"
                                        tabindex="-1"
                                        @click.stop="togglePin(item)"
                                    >
                                        <svg
                                            v-if="isPinned(item)"
                                            viewBox="0 0 24 24"
                                            class="size-3"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M14 2l-1 6 4 4 6-1-9 9-3-3-3 3-1-1 3-3-3-3 9-9z"
                                            />
                                        </svg>

                                        <svg
                                            v-else
                                            viewBox="0 0 24 24"
                                            class="size-3"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        >
                                            <path
                                                d="M14 2l-1 6 4 4 6-1-9 9-3-3-3 3-1-1 3-3-3-3 9-9z"
                                            />
                                        </svg>
                                    </span>
                                </span>
                            </button>
                        </div>

                        <!--
                            NOTHING FOUND SAYS SO, and says it differently from
                            still-looking. A blank panel while a request is in
                            flight reads as "no such record", which is the
                            answer people act on.
                        -->
                        <p
                            v-if="groups.length === 0"
                            class="text-muted-foreground px-2 py-6 text-center text-sm"
                        >
                            {{ searching ? 'Searching…' : 'Nothing matches that.' }}
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
