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
import { router } from '@inertiajs/vue3'
import { CornerDownLeft, FileText, Search, Users, X } from '@lucide/vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'

interface Item {
    id: string
    title: string
    subtitle?: string
    href: string
    kind: 'page' | 'record'
}

interface Group {
    label: string
    items: Item[]
}

const open = ref(false)
const term = ref('')
const activeIndex = ref(0)
const remoteGroups = ref<Group[]>([])
const searching = ref(false)
const inputEl = ref<HTMLInputElement | null>(null)
const listEl = ref<HTMLElement | null>(null)

/** Static, so page results cost no round trip. */
const pages: Item[] = [
    { id: 'page-dashboard', title: 'Dashboard', subtitle: 'Overview', href: '/dashboard', kind: 'page' },
    { id: 'page-clients', title: 'Clients', subtitle: 'Subscribers', href: '/clients', kind: 'page' },
    { id: 'page-routers', title: 'Routers', subtitle: 'Network', href: '/routers', kind: 'page' },
    { id: 'page-plans', title: 'Plans', subtitle: 'Network', href: '/plans', kind: 'page' },
    { id: 'page-profile', title: 'Profile settings', subtitle: 'Settings', href: '/settings/profile', kind: 'page' },
    { id: 'page-password', title: 'Password', subtitle: 'Settings', href: '/settings/password', kind: 'page' },
    { id: 'page-appearance', title: 'Appearance', subtitle: 'Settings', href: '/settings/appearance', kind: 'page' },
]

const pageGroup = computed<Group | null>(() => {
    const q = term.value.trim().toLowerCase()
    const items = q === '' ? pages : pages.filter((p) => `${p.title} ${p.subtitle ?? ''}`.toLowerCase().includes(q))

    return items.length ? { label: 'Pages', items } : null
})

const groups = computed<Group[]>(() => {
    const out: Group[] = []
    if (pageGroup.value) out.push(pageGroup.value)
    out.push(...remoteGroups.value)
    return out
})

/** Flattened for keyboard navigation across group boundaries. */
const flat = computed<Item[]>(() => groups.value.flatMap((g) => g.items))

watch(flat, () => {
    if (activeIndex.value >= flat.value.length) activeIndex.value = 0
})

let debounce: ReturnType<typeof setTimeout> | undefined
let controller: AbortController | undefined

watch(term, (value) => {
    clearTimeout(debounce)
    controller?.abort()

    const q = value.trim()

    if (q.length < 2) {
        remoteGroups.value = []
        searching.value = false
        return
    }

    searching.value = true

    debounce = setTimeout(async () => {
        controller = new AbortController()

        try {
            const res = await fetch(`/search?q=${encodeURIComponent(q)}`, {
                headers: { Accept: 'application/json' },
                signal: controller.signal,
            })

            if (!res.ok) throw new Error(String(res.status))

            const data = (await res.json()) as { groups: Omit<Group, 'items'> & { items: Omit<Item, 'kind'>[] }[] }

            remoteGroups.value = (data.groups as unknown as { label: string; items: Omit<Item, 'kind'>[] }[]).map(
                (g) => ({
                    label: g.label,
                    items: g.items.map((i) => ({ ...i, kind: 'record' as const })),
                }),
            )
        } catch (e) {
            // An aborted request is the expected path when typing continues.
            if ((e as Error).name !== 'AbortError') remoteGroups.value = []
        } finally {
            searching.value = false
        }
    }, 180)
})

function show() {
    open.value = true
    activeIndex.value = 0
    nextTick(() => inputEl.value?.focus())
}

function hide() {
    open.value = false
    term.value = ''
    remoteGroups.value = []
}

function choose(item: Item) {
    hide()
    router.visit(item.href)
}

function onKeydown(e: KeyboardEvent) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        open.value ? hide() : show()
        return
    }

    if (!open.value) return

    if (e.key === 'Escape') {
        e.preventDefault()
        hide()
    } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value + 1) % Math.max(flat.value.length, 1)
        scrollActiveIntoView()
    } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        activeIndex.value = (activeIndex.value - 1 + flat.value.length) % Math.max(flat.value.length, 1)
        scrollActiveIntoView()
    } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = flat.value[activeIndex.value]
        if (item) choose(item)
    }
}

function scrollActiveIntoView() {
    nextTick(() => {
        listEl.value?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' })
    })
}

function indexOf(group: Group, item: Item): number {
    return flat.value.findIndex((i) => i.id === item.id)
}

const isMac = typeof navigator !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.platform)

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeydown)
    clearTimeout(debounce)
    controller?.abort()
})

defineExpose({ show })
</script>

<template>
    <!-- Trigger. Collapses to an icon-only button on phones, where a wide
         search field would eat the whole topbar. -->
    <button
        type="button"
        class="border-input bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground flex h-9 items-center gap-2 rounded-md border px-2.5 text-sm transition-colors sm:w-72 sm:px-3"
        @click="show"
    >
        <Search class="size-4 shrink-0" />
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
                @click.self="hide"
            >
                <div
                    class="bg-popover text-popover-foreground w-full max-w-xl overflow-hidden rounded-xl border shadow-2xl"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Search"
                >
                    <!-- Input -->
                    <div class="flex items-center gap-2 border-b px-4">
                        <Search class="text-muted-foreground size-4 shrink-0" />
                        <input
                            ref="inputEl"
                            v-model="term"
                            class="placeholder:text-muted-foreground h-12 w-full bg-transparent text-sm outline-none"
                            placeholder="Search pages and clients…"
                            aria-label="Search pages and clients"
                        />
                        <span
                            v-if="searching"
                            class="border-muted-foreground/30 border-t-muted-foreground size-3.5 shrink-0 animate-spin rounded-full border-2"
                        />
                        <button
                            type="button"
                            class="text-muted-foreground hover:text-foreground shrink-0"
                            aria-label="Close search"
                            @click="hide"
                        >
                            <X class="size-4" />
                        </button>
                    </div>

                    <!-- Results -->
                    <div ref="listEl" class="max-h-[min(60vh,24rem)] overflow-y-auto p-2">
                        <div v-if="flat.length === 0" class="text-muted-foreground px-3 py-8 text-center text-sm">
                            <template v-if="term.trim().length < 2">Type at least two characters</template>
                            <template v-else>No results for “{{ term }}”</template>
                        </div>

                        <div v-for="group in groups" :key="group.label" class="mb-1 last:mb-0">
                            <p class="text-muted-foreground px-3 py-1.5 text-[11px] font-medium tracking-wide uppercase">
                                {{ group.label }}
                            </p>

                            <button
                                v-for="item in group.items"
                                :key="item.id"
                                type="button"
                                :data-active="indexOf(group, item) === activeIndex"
                                class="data-[active=true]:bg-accent data-[active=true]:text-accent-foreground flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors"
                                @click="choose(item)"
                                @mouseenter="activeIndex = indexOf(group, item)"
                            >
                                <component
                                    :is="item.kind === 'page' ? FileText : Users"
                                    class="text-muted-foreground size-4 shrink-0"
                                />
                                <span class="min-w-0 flex-1">
                                    <span class="block truncate font-medium">{{ item.title }}</span>
                                    <span v-if="item.subtitle" class="text-muted-foreground block truncate text-xs">
                                        {{ item.subtitle }}
                                    </span>
                                </span>
                                <CornerDownLeft
                                    v-if="indexOf(group, item) === activeIndex"
                                    class="text-muted-foreground size-3.5 shrink-0"
                                />
                            </button>
                        </div>
                    </div>

                    <!-- Footer hints. Hidden on phones, where there is no keyboard. -->
                    <div
                        class="text-muted-foreground bg-muted/40 hidden items-center gap-4 border-t px-4 py-2 text-[11px] sm:flex"
                    >
                        <span class="flex items-center gap-1"><kbd class="bg-background rounded border px-1">↑↓</kbd> Navigate</span>
                        <span class="flex items-center gap-1"><kbd class="bg-background rounded border px-1">↵</kbd> Open</span>
                        <span class="flex items-center gap-1"><kbd class="bg-background rounded border px-1">esc</kbd> Close</span>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>
