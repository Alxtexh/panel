<script setup lang="ts">
/**
 * The topbar bell: alerts and notifications, kept apart.
 *
 * TWO TABS, NOT ONE LIST, because they answer different questions and support
 * different actions:
 *
 *   ALERTS  — what is wrong RIGHT NOW. Recomputed server-side on every open,
 *             no read state, nothing to dismiss. You clear an alert by fixing
 *             the condition.
 *   INBOX   — what HAPPENED, addressed to you. Persistent, has read state, and
 *             you delete it when you are done with it.
 *
 * THE BADGE COUNTS UNREAD NOTIFICATIONS ONLY. Counting alerts too would leave
 * a badge lit for as long as a condition persists — which trains people to
 * ignore the badge, and then they miss the notification that mattered.
 *
 * IT FETCHES ONLY WHEN OPENED. A bell that polls in the background costs a
 * request per interval per open tab forever, which is the ambient polling §8
 * exists to avoid. The unread count arrives with the page payload, so the badge
 * is correct on load without any request at all.
 */
import { PkSlideover, useAppearance } from '@panelkit/ui'
import { usePage } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import { Bell } from '@lucide/vue'

interface Alert {
    key: string
    severity: 'danger' | 'warning' | 'info'
    title: string
    body: string
    href: string | null
    count: number
}

interface Note {
    id: string
    title: string
    body: string
    href: string | null
    severity: string
    read: boolean
    at: string | null
}

const page = usePage()
const { appearance } = useAppearance()

const open = ref(false)
const tab = ref<'alerts' | 'inbox'>('alerts')
const loading = ref(false)
const alerts = ref<Alert[]>([])
const notifications = ref<Note[]>([])

/**
 * Seeded from the page payload so the badge is right before anything is
 * fetched, then kept current by each open.
 */
const unread = ref<number>((page.props.notificationCount as number | undefined) ?? 0)

const TONES: Record<string, string> = {
    danger: 'text-rose-600 dark:text-rose-400 bg-rose-500/10',
    warning: 'text-amber-600 dark:text-amber-400 bg-amber-500/10',
    info: 'text-sky-600 dark:text-sky-400 bg-sky-500/10',
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

async function send(url: string, method: string) {
    await fetch(url, {
        method,
        headers: {
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': csrf(),
        },
        credentials: 'same-origin',
    })
}

async function load() {
    loading.value = true

    try {
        const response = await fetch('/notifications', {
            headers: { Accept: 'application/json', 'X-Requested-With': 'XMLHttpRequest' },
            credentials: 'same-origin',
        })

        if (!response.ok) throw new Error(String(response.status))

        const data = await response.json()

        alerts.value = data.alerts
        notifications.value = data.notifications
        unread.value = data.unread

        // Open on whichever tab has something to say. Landing on an empty
        // Alerts tab while three unread notifications sit behind it is the
        // panel hiding the thing you opened it for.
        tab.value = alerts.value.length === 0 && unread.value > 0 ? 'inbox' : 'alerts'
    } catch {
        // A failed load leaves the panel empty rather than showing stale
        // alerts, which would be worse: an alert list is a claim about NOW.
        alerts.value = []
        notifications.value = []
    } finally {
        loading.value = false
    }
}

function show() {
    open.value = true
    load()
}

async function markRead(note: Note) {
    if (note.read) return

    note.read = true
    unread.value = Math.max(0, unread.value - 1)

    await send(`/notifications/${note.id}/read`, 'POST')
}

async function markAllRead() {
    notifications.value.forEach((n) => (n.read = true))
    unread.value = 0

    await send('/notifications/read-all', 'POST')
}

async function remove(note: Note) {
    notifications.value = notifications.value.filter((n) => n.id !== note.id)

    if (!note.read) unread.value = Math.max(0, unread.value - 1)

    await send(`/notifications/${note.id}`, 'DELETE')
}

function follow(href: string | null) {
    if (!href) return

    open.value = false
    window.location.assign(href)
}

/** The panel opens opposite the sidebar, like the appearance drawer. */
const side = computed<'left' | 'right'>(() => (appearance.value.sidebarSide === 'right' ? 'left' : 'right'))
</script>

<template>
    <button
        type="button"
        class="border-input bg-background hover:bg-accent hover:text-accent-foreground relative inline-flex size-9 shrink-0 items-center justify-center rounded-md border transition-colors"
        :aria-label="unread > 0 ? `Notifications, ${unread} unread` : 'Notifications'"
        title="Alerts and notifications"
        @click="show"
    >
        <Bell class="size-4" />
        <span
            v-if="unread > 0"
            class="bg-destructive absolute -top-1 -right-1 flex min-w-4 items-center justify-center rounded-full px-1 text-[10px] font-semibold text-white"
        >
            {{ unread > 99 ? '99+' : unread }}
        </span>
    </button>

    <PkSlideover
        :open="open"
        :side="side"
        title="Alerts & notifications"
        width="w-[24rem]"
        @close="open = false"
    >
        <div class="flex flex-col">
            <div class="bg-muted/40 sticky top-0 z-10 flex gap-1 border-b p-1">
                <button
                    type="button"
                    class="flex-1 rounded-md px-3 py-1.5 text-sm transition-colors"
                    :class="tab === 'alerts' ? 'bg-background font-medium shadow-sm' : 'text-muted-foreground'"
                    @click="tab = 'alerts'"
                >
                    Alerts
                    <span v-if="alerts.length" class="text-muted-foreground">({{ alerts.length }})</span>
                </button>
                <button
                    type="button"
                    class="flex-1 rounded-md px-3 py-1.5 text-sm transition-colors"
                    :class="tab === 'inbox' ? 'bg-background font-medium shadow-sm' : 'text-muted-foreground'"
                    @click="tab = 'inbox'"
                >
                    Inbox
                    <span v-if="unread" class="text-muted-foreground">({{ unread }})</span>
                </button>
            </div>

            <p v-if="loading" class="text-muted-foreground p-4 text-sm">Loading…</p>

            <!-- ALERTS: current conditions. Nothing to dismiss. -->
            <template v-else-if="tab === 'alerts'">
                <div v-if="alerts.length === 0" class="flex flex-col items-center gap-1 p-8 text-center">
                    <p class="text-sm font-medium">Nothing needs attention</p>
                    <p class="text-muted-foreground text-xs">
                        Alerts appear here while a condition is active, and clear themselves once it
                        is resolved.
                    </p>
                </div>

                <ul v-else class="divide-y">
                    <li v-for="alert in alerts" :key="alert.key">
                        <component
                            :is="alert.href ? 'button' : 'div'"
                            class="flex w-full items-start gap-3 p-4 text-left"
                            :class="alert.href ? 'hover:bg-accent/50 transition-colors' : ''"
                            @click="follow(alert.href)"
                        >
                            <span
                                class="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                                :class="TONES[alert.severity] ?? TONES.info"
                            >
                                !
                            </span>
                            <span class="min-w-0">
                                <span class="block text-sm font-medium">{{ alert.title }}</span>
                                <span class="text-muted-foreground block text-xs">{{ alert.body }}</span>
                            </span>
                        </component>
                    </li>
                </ul>
            </template>

            <!-- INBOX: recorded events, per user. -->
            <template v-else>
                <div v-if="notifications.length === 0" class="flex flex-col items-center gap-1 p-8 text-center">
                    <p class="text-sm font-medium">No notifications</p>
                    <p class="text-muted-foreground text-xs">
                        Finished exports and background actions land here.
                    </p>
                </div>

                <ul v-else class="divide-y">
                    <li
                        v-for="note in notifications"
                        :key="note.id"
                        class="hover:bg-accent/30 group flex items-start gap-3 p-4 transition-colors"
                        :class="note.read ? 'opacity-60' : ''"
                    >
                        <span
                            class="mt-1.5 size-2 shrink-0 rounded-full"
                            :class="note.read ? 'bg-transparent' : 'bg-primary'"
                            :aria-label="note.read ? 'Read' : 'Unread'"
                        />

                        <button type="button" class="min-w-0 flex-1 text-left" @click="markRead(note); follow(note.href)">
                            <span class="block text-sm font-medium">{{ note.title }}</span>
                            <span class="text-muted-foreground block text-xs">{{ note.body }}</span>
                            <span v-if="note.at" class="text-muted-foreground/70 mt-0.5 block text-[11px]">
                                {{ note.at }}
                            </span>
                        </button>

                        <button
                            type="button"
                            class="text-muted-foreground hover:text-destructive shrink-0 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                            :aria-label="`Delete ${note.title}`"
                            @click="remove(note)"
                        >
                            <svg viewBox="0 0 24 24" class="size-4" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6 6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </li>
                </ul>
            </template>
        </div>

        <template v-if="tab === 'inbox' && unread > 0" #footer>
            <button
                type="button"
                class="bg-background hover:bg-accent rounded-md border px-3 py-1.5 text-sm"
                @click="markAllRead"
            >
                Mark all as read
            </button>
        </template>
    </PkSlideover>
</template>
