<script setup lang="ts">
/**
 * Backup health, and the things an operator needs to do about it.
 *
 * THE HEADLINE IS THE AGE, not the list. A directory full of snapshots from
 * March looks exactly like a healthy one until somebody reads the dates - which
 * is always after they were needed. So the page leads with how old the newest
 * one is and says plainly when that is too old; the file list is supporting
 * detail underneath.
 *
 * IT USED TO BE READ-ONLY, and that was wrong. A screen that lists snapshots and
 * offers nothing to do with them is a fire extinguisher behind glass with no
 * hammer: an operator can see the backup exists and still has to find somebody
 * with a shell to use it. Download, delete, restore and the schedule are all
 * here now.
 *
 * EVERY DESTRUCTIVE ACTION GOES THROUGH `PkModal`, NEVER `window.confirm`. That
 * is not a style preference - `confirm()` is suppressed outright in embedded
 * browsers, so the dialog never appears, the handler never runs, and the button
 * looks broken. It has cost this project three separate bugs.
 *
 * THE CONFIRMATIONS ARE COURTESIES, NOT GUARDS. Every one of these is re-checked
 * on the server: the ability, the snapshot name, the typed confirmation, and the
 * refusal to delete the last remaining copy. A client that skipped this page
 * entirely gets a 403 or a 422, not a deletion.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Button } from '@/components/ui/button'
import { Head, router, useForm } from '@inertiajs/vue3'
/*
 * GENERATED FROM THE ROUTES, not typed out.
 *
 * A literal `'/operations/backups/restore'` is a string the compiler cannot
 * check and the router does not know about - so renaming the route leaves this
 * file pointing at a 404 that nothing reports until somebody clicks it. These
 * helpers are regenerated from `route:list` on every build, so the same rename
 * breaks the build instead.
 */
import backups from '@/routes/operations/backups'
import alerts from '@/routes/operations/alerts'
import { PkModal } from '@panelkit/ui'
import { Download, RotateCcw, Settings2, Trash2, TriangleAlert } from '@lucide/vue'
import { computed, ref } from 'vue'

defineOptions({ layout: AppLayout })

interface Snapshot {
    path: string
    bytes: number
    at: string
}

interface Settings {
    frequency: string
    time: string
    weekday: number
    dayOfMonth: number
    keepDays: number
    maxMegabytes: number | null
    destinations: string[]
    alertEmail: string | null
    alertTelegramChatId: string | null
    /**
     * ALWAYS NULL ON THE WAY IN. The server redacts it - see `redacted()` - so
     * the field starts empty and an empty submission means "leave it as it is"
     * rather than "clear it".
     */
    alertTelegramToken: string | null
    notifyOnSuccess: boolean
}

/** What the server tells us ABOUT the token, without telling us the token. */
interface SettingsIn extends Settings {
    hasTelegramToken: boolean
    telegramReady: boolean
}

const props = defineProps<{
    status: {
        configured: boolean
        disk: string | null
        healthy: boolean | null
        newestAt: string | null
        ageHours: number | null
        totalBytes: number
        backups: Snapshot[]
        problem: string | null
    }
    /** The last manual run, so the button is not a black hole. */
    lastRun: { state: string; message: string; at: string; by: string | null } | null
    lastRestore: {
        state: string
        message: string
        at: string
        by: string | null
        snapshot: string
    } | null
    /**
     * A one-time maintenance bypass for the restore that was just started.
     *
     * The restore closes the panel while it swaps the database. Without this
     * link the operator watches their own restore from a 503 page, which is
     * exactly when they most need to see what is happening.
     */
    restoreBypass: string | null
    settings: SettingsIn
    /** A sentence built server-side from the same values the scheduler reads. */
    schedule: string
    /** Who last changed the policy. Null while it is still the shipped default. */
    settingsChangedBy: { by: string | null; at: string } | null
    disks: string[]
    /**
     * What has been done to the backups, across the whole installation.
     *
     * NOT ON THE ACTIVITY SCREEN: that is one organisation's own trail and is
     * scoped to it, so another tenant's operator appearing there would be a
     * leak. These events belong to the installation, so they belong here.
     */
    history: {
        event: string
        actor: string | null
        snapshot: string | null
        ip: string | null
        at: string
    }[]
    can: { manage: boolean }
}>()

const starting = ref(false)

/**
 * Ask for a backup; do not wait for one.
 *
 * The job is queued and locked - a dump plus a zip takes minutes on anything
 * real, and an inline run would hold the request until the browser gave up with
 * no way to tell whether it finished.
 */
function backUpNow() {
    starting.value = true

    router.post(
        backups.run.url(),
        {},
        { preserveScroll: true, onFinish: () => (starting.value = false) },
    )
}

/* ------------------------------------------------------------------ *
 * Selection
 * ------------------------------------------------------------------ */

const selected = ref<string[]>([])

const allSelected = computed(
    () => props.status.backups.length > 0 && selected.value.length === props.status.backups.length,
)

/**
 * Indeterminate, not just checked/unchecked.
 *
 * A header box that shows unchecked while four of nine rows are selected tells
 * the operator their selection was lost, and the usual reaction is to click it -
 * which selects everything, one keystroke away from deleting everything.
 */
const someSelected = computed(
    () => selected.value.length > 0 && selected.value.length < props.status.backups.length,
)

function toggleAll() {
    selected.value = allSelected.value ? [] : props.status.backups.map((b) => b.path)
}

function toggle(path: string) {
    selected.value = selected.value.includes(path)
        ? selected.value.filter((p) => p !== path)
        : [...selected.value, path]
}

/**
 * Whether deleting this exact set would empty the directory.
 *
 * MIRRORED FROM THE SERVER, WHICH IS THE AUTHORITY. Computing it here only
 * changes the wording on the dialog and disables a button that would otherwise
 * be refused with an error; `BackupArchive` is what actually holds the line.
 */
const wouldEmpty = computed(
    () => pendingDelete.value.length > 0 && pendingDelete.value.length >= props.status.backups.length,
)

/* ------------------------------------------------------------------ *
 * Delete
 * ------------------------------------------------------------------ */

const pendingDelete = ref<string[]>([])

function askDelete(paths: string[]) {
    pendingDelete.value = paths
}

function confirmDelete() {
    router.delete(backups.delete.url(), {
        data: { paths: pendingDelete.value },
        preserveScroll: true,
        onFinish: () => {
            selected.value = selected.value.filter((p) => !pendingDelete.value.includes(p))
            pendingDelete.value = []
        },
    })
}

/* ------------------------------------------------------------------ *
 * Restore
 * ------------------------------------------------------------------ */

const pendingRestore = ref<Snapshot | null>(null)
const typedConfirmation = ref('')

const restoreName = computed(() => pendingRestore.value?.path.split('/').pop() ?? '')

/**
 * The name has to be typed out, not clicked past.
 *
 * A DELIBERATE OBSTACLE, and the only one on this page. Restoring overwrites the
 * live database; typing the filename forces a look at WHICH snapshot is about to
 * be applied, which is the mistake actually made under pressure - not "restoring
 * by accident" but "restoring the wrong one". The server checks the same string,
 * so this is a prompt rather than a lock.
 */
const confirmationMatches = computed(
    () => typedConfirmation.value.trim() === restoreName.value && restoreName.value !== '',
)

function askRestore(snapshot: Snapshot) {
    pendingRestore.value = snapshot
    typedConfirmation.value = ''
}

function confirmRestore() {
    if (!pendingRestore.value || !confirmationMatches.value) return

    router.post(
        backups.restore.url(),
        { path: pendingRestore.value.path, confirm: typedConfirmation.value.trim() },
        {
            preserveScroll: true,
            onFinish: () => {
                pendingRestore.value = null
                typedConfirmation.value = ''
            },
        },
    )
}

/* ------------------------------------------------------------------ *
 * Settings
 * ------------------------------------------------------------------ */

const settingsOpen = ref(false)

/**
 * Only the fields the endpoint accepts.
 *
 * `hasTelegramToken` and `telegramReady` are the server DESCRIBING the token
 * rather than sending it; posting them back would be reporting the server's own
 * answer to it as if it were an edit.
 */
function formValues(): Settings {
    const { hasTelegramToken: _has, telegramReady: _ready, ...values } = props.settings

    // Never prefilled: the stored token is not sent here, and an empty
    // submission means "keep the one you have".
    return { ...values, alertTelegramToken: null }
}

const form = useForm<Settings>(formValues())

function openSettings() {
    // Reset from the props each time, so a cancelled edit does not persist as
    // the starting point of the next one.
    form.defaults(formValues())
    form.reset()
    form.clearErrors()
    settingsOpen.value = true
}

function saveSettings() {
    form.put(backups.settings.url(), {
        preserveScroll: true,
        onSuccess: () => (settingsOpen.value = false),
    })
}

function toggleDestination(disk: string) {
    form.destinations = form.destinations.includes(disk)
        ? form.destinations.filter((d) => d !== disk)
        : [...form.destinations, disk]
}

/**
 * Try a destination without committing to it.
 *
 * SAVING ALSO CHECKS, AND REFUSES - which is right and is also the worst moment
 * to find out: a half-filled form and an error nobody can investigate from
 * there. This answers "is this bucket right" while the credentials are still
 * open in another tab.
 */
const testing = ref<string | null>(null)

function testDestination(disk: string) {
    testing.value = disk

    router.post(
        backups.destinations.test.url(),
        { disk },
        { preserveScroll: true, preserveState: true, onFinish: () => (testing.value = null) },
    )
}

/**
 * Send a test message to the alert chat.
 *
 * THE SAME REASONING AS `testDestination`, one step further out: this leaves the
 * building. A destination probe writes a file somebody can delete; this posts to
 * a chat other people are reading, which is why it is a deliberate press rather
 * than something that happens on save.
 */
const testingTelegram = ref(false)

function testTelegram() {
    testingTelegram.value = true

    router.post(
        alerts.telegram.test.url(),
        {
            // Whatever is on screen, so a pasted token can be checked before it
            // is committed. The server applies it for that request only.
            token: form.alertTelegramToken,
            chat_id: form.alertTelegramChatId,
        },
        { preserveScroll: true, preserveState: true, onFinish: () => (testingTelegram.value = false) },
    )
}

const FREQUENCIES = [
    { value: 'hourly', label: 'Every hour' },
    { value: 'twice-daily', label: 'Twice a day' },
    { value: 'daily', label: 'Every day' },
    { value: 'weekly', label: 'Every week' },
    { value: 'monthly', label: 'Every month' },
]

/**
 * 1 to 28, and the ceiling is the point.
 *
 * The 29th, 30th and 31st are not days every month has, and a schedule set to
 * one of them simply does not fire in the months that lack it - so "back up on
 * the 31st" would quietly skip February, April, June, September and November.
 */
const DAYS_OF_MONTH = Array.from({ length: 28 }, (_, i) => i + 1)

const WEEKDAYS = [
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
    { value: 7, label: 'Sunday' },
]

/* ------------------------------------------------------------------ *
 * Formatting
 * ------------------------------------------------------------------ */

const runTone: Record<string, string> = {
    succeeded: 'text-emerald-600 dark:text-emerald-400',
    running: 'text-sky-600 dark:text-sky-400',
    skipped: 'text-amber-600 dark:text-amber-500',
    refused: 'text-amber-600 dark:text-amber-500',
    failed: 'text-destructive',
}

/** Zero stays zero - a `Math.max(1, …)` floor reported "1 MB" of nothing. */
const mb = (bytes: number) => {
    if (bytes <= 0) return '0 MB'

    if (bytes > 1024 * 1024 * 1024) return `${(bytes / 1024 / 1024 / 1024).toFixed(1)} GB`

    return `${Math.max(1, Math.round(bytes / 1024 / 1024))} MB`
}

const when = (iso: string) => new Date(iso).toLocaleString()

const basename = (path: string) => path.split('/').pop() ?? path

/**
 * `backup.restore-started` reads as a log line, not as a sentence.
 *
 * The fallback humanises anything unmapped rather than showing the raw key, so
 * an event added on the server still reads sensibly here.
 */
const EVENT_LABELS: Record<string, string> = {
    'backup.deleted': 'Deleted',
    'backup.downloaded': 'Downloaded',
    'backup.restore-started': 'Restore started',
    'backup.settings-changed': 'Settings changed',
}

const eventLabel = (event: string) =>
    EVENT_LABELS[event] ?? event.replace(/^backup\./, '').replace(/[-_]/g, ' ')

const downloadUrl = (path: string) => backups.download.url({ query: { path } })
</script>

<template>
    <Head title="Backups" />

    <div class="flex flex-col gap-6 p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
                <h1 class="text-xl font-semibold">Backups</h1>
                <p class="text-muted-foreground text-sm">
                    {{ props.schedule }}, kept for {{ props.settings.keepDays }} days.
                </p>
            </div>

            <div class="flex items-center gap-2">
                <Button v-if="props.can.manage" variant="outline" size="sm" @click="openSettings">
                    <Settings2 class="size-4" />
                    Settings
                </Button>

                <Button size="sm" :disabled="starting" @click="backUpNow">
                    {{ starting ? 'Starting…' : 'Back up now' }}
                </Button>
            </div>
        </div>

        <!--
            THE OUTCOME OF THE LAST MANUAL RUN. A button that dispatches a job
            and says nothing afterwards is worse than no button: the operator
            believes a backup exists.
        -->
        <div v-if="props.lastRun" class="rounded-lg border p-3 text-sm">
            <span class="font-medium" :class="runTone[props.lastRun.state] ?? ''">
                Last manual run: {{ props.lastRun.state }}
            </span>
            <span class="text-muted-foreground"> - {{ props.lastRun.message }}</span>
            <span class="text-muted-foreground block text-xs">
                {{ when(props.lastRun.at) }}<template v-if="props.lastRun.by">
                    · started by {{ props.lastRun.by }}</template>
            </span>
        </div>

        <!--
            THE BYPASS LINK, SHOWN ONCE AND PROMINENTLY.

            The panel goes down within the minute. This is the only way back in
            while it does, it is flashed rather than stored, and there is no
            second chance to read it - so it sits above the fold in its own
            block rather than in a toast that fades.
        -->
        <div
            v-if="props.restoreBypass"
            class="rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-sm"
        >
            <p class="font-medium">The panel will close while the database is restored.</p>
            <p class="text-muted-foreground mt-1 text-xs">
                Everyone else sees a maintenance page, so nothing is written to the database
                being replaced. Open this link first - it is shown once and stops working when
                the restore finishes.
            </p>
            <a
                :href="`/${props.restoreBypass}`"
                class="mt-2 inline-block font-mono text-xs underline"
                target="_blank"
                rel="noopener"
            >/{{ props.restoreBypass }}</a>
        </div>

        <!-- A restore is reported separately and permanently: it is the one
             action here whose outcome somebody may need to account for. -->
        <div v-if="props.lastRestore" class="rounded-lg border p-3 text-sm">
            <span class="font-medium" :class="runTone[props.lastRestore.state] ?? ''">
                Last restore: {{ props.lastRestore.state }}
            </span>
            <span class="text-muted-foreground"> - {{ props.lastRestore.message }}</span>
            <span class="text-muted-foreground block text-xs">
                {{ when(props.lastRestore.at) }}
                <template v-if="props.lastRestore.by"> · started by {{ props.lastRestore.by }}</template>
            </span>
        </div>

        <div
            class="rounded-lg border p-4"
            :class="
                props.status.problem
                    ? 'border-destructive/40 bg-destructive/5'
                    : 'border-emerald-500/40 bg-emerald-500/5'
            "
        >
            <p class="text-sm font-medium">
                <template v-if="props.status.problem">{{ props.status.problem }}</template>
                <template v-else-if="props.status.ageHours !== null">
                    Newest backup is {{ props.status.ageHours }} hours old.
                </template>
                <template v-else>Backups look healthy.</template>
            </p>

            <p v-if="props.status.configured" class="text-muted-foreground mt-1 text-xs">
                Disk <span class="font-mono">{{ props.status.disk }}</span> ·
                {{ props.status.backups.length }} snapshot(s) ·
                {{ mb(props.status.totalBytes) }} total
            </p>
        </div>

        <div v-if="props.status.backups.length" class="flex flex-col gap-2">
            <!--
                THE BULK BAR SITS ABOVE THE TABLE, not inside it as a row. A
                toolbar wedged into the table body shifts every row down the
                moment something is ticked, and the row under the pointer is no
                longer the row that was about to be clicked.
            -->
            <div
                v-if="selected.length"
                class="bg-muted/40 flex flex-wrap items-center justify-between gap-2 rounded-lg border px-3 py-2 text-sm"
            >
                <span>{{ selected.length }} selected</span>

                <div class="flex items-center gap-2">
                    <Button variant="ghost" size="sm" @click="selected = []">Clear</Button>
                    <Button
                        v-if="props.can.manage"
                        variant="destructive"
                        size="sm"
                        @click="askDelete(selected)"
                    >
                        <Trash2 class="size-4" />
                        Delete selected
                    </Button>
                </div>
            </div>

            <div class="overflow-x-auto rounded-lg border">
                <table class="w-full text-sm">
                    <thead class="bg-muted/50">
                        <tr>
                            <th class="w-10 px-3 py-2 text-left">
                                <input
                                    type="checkbox"
                                    class="size-4 align-middle"
                                    aria-label="Select every snapshot"
                                    :checked="allSelected"
                                    :indeterminate.prop="someSelected"
                                    @change="toggleAll"
                                />
                            </th>
                            <th class="px-3 py-2 text-left font-medium">Snapshot</th>
                            <th class="px-3 py-2 text-left font-medium">Taken</th>
                            <th class="px-3 py-2 text-right font-medium">Size</th>
                            <th class="w-px px-3 py-2 text-right font-medium">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            v-for="b in props.status.backups"
                            :key="b.path"
                            class="hover:bg-muted/30 border-t"
                        >
                            <td class="px-3 py-2">
                                <input
                                    type="checkbox"
                                    class="size-4 align-middle"
                                    :aria-label="`Select ${basename(b.path)}`"
                                    :checked="selected.includes(b.path)"
                                    @change="toggle(b.path)"
                                />
                            </td>
                            <td class="px-3 py-2 font-mono text-xs">{{ b.path }}</td>
                            <td class="px-3 py-2 whitespace-nowrap">{{ when(b.at) }}</td>
                            <td class="px-3 py-2 text-right tabular-nums">{{ mb(b.bytes) }}</td>
                            <td class="px-3 py-2">
                                <div class="flex items-center justify-end gap-1">
                                    <!--
                                        A REAL ANCHOR, not a router call. The
                                        response is a file stream, and Inertia
                                        would try to parse it as a page.
                                    -->
                                    <a
                                        :href="downloadUrl(b.path)"
                                        class="hover:bg-muted inline-flex size-8 items-center justify-center rounded-md"
                                        :title="`Download ${basename(b.path)}`"
                                        :aria-label="`Download ${basename(b.path)}`"
                                    >
                                        <Download class="size-4" />
                                    </a>

                                    <button
                                        v-if="props.can.manage"
                                        type="button"
                                        class="hover:bg-muted inline-flex size-8 items-center justify-center rounded-md"
                                        :title="`Restore from ${basename(b.path)}`"
                                        :aria-label="`Restore from ${basename(b.path)}`"
                                        @click="askRestore(b)"
                                    >
                                        <RotateCcw class="size-4" />
                                    </button>

                                    <button
                                        v-if="props.can.manage"
                                        type="button"
                                        class="hover:bg-destructive/10 text-destructive inline-flex size-8 items-center justify-center rounded-md"
                                        :title="`Delete ${basename(b.path)}`"
                                        :aria-label="`Delete ${basename(b.path)}`"
                                        @click="askDelete([b.path])"
                                    >
                                        <Trash2 class="size-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!--
            THE TRAIL, UNDER THE LIST IT DESCRIBES.

            A snapshot that vanished with nothing recording who removed it is
            indistinguishable from a snapshot that was never taken - and the
            moment somebody asks is the moment the answer matters.
        -->
        <div v-if="props.history.length" class="flex flex-col gap-2">
            <h2 class="text-sm font-medium">Recent backup activity</h2>

            <ul class="divide-y rounded-lg border text-sm">
                <li v-for="(entry, i) in props.history" :key="i" class="flex flex-wrap gap-x-2 px-3 py-2">
                    <span class="font-medium">{{ eventLabel(entry.event) }}</span>
                    <span v-if="entry.snapshot" class="font-mono text-xs self-center">
                        {{ entry.snapshot }}
                    </span>
                    <span class="text-muted-foreground ml-auto text-xs">
                        {{ entry.actor ?? 'somebody' }}<template v-if="entry.ip"> · {{ entry.ip }}</template>
                        · {{ when(entry.at) }}
                    </span>
                </li>
            </ul>
        </div>
    </div>

    <!-- Delete ------------------------------------------------------- -->
    <PkModal
        :open="pendingDelete.length > 0"
        :title="
            pendingDelete.length === 1
                ? `Delete ${basename(pendingDelete[0])}?`
                : `Delete ${pendingDelete.length} snapshots?`
        "
        description="The files are removed from the backup disk. This cannot be undone."
        @close="pendingDelete = []"
    >
        <p v-if="wouldEmpty" class="text-destructive flex items-start gap-2 text-sm">
            <TriangleAlert class="mt-0.5 size-4 shrink-0" />
            <span>
                That is every snapshot there is. The server will refuse this - at least one
                backup must always remain.
            </span>
        </p>

        <ul v-else class="text-muted-foreground max-h-40 space-y-1 overflow-y-auto text-xs">
            <li v-for="path in pendingDelete" :key="path" class="font-mono">
                {{ basename(path) }}
            </li>
        </ul>

        <template #footer>
            <Button variant="ghost" size="sm" @click="pendingDelete = []">Cancel</Button>
            <Button variant="destructive" size="sm" :disabled="wouldEmpty" @click="confirmDelete">
                {{ pendingDelete.length === 1 ? 'Delete snapshot' : 'Delete snapshots' }}
            </Button>
        </template>
    </PkModal>

    <!-- Restore ------------------------------------------------------ -->
    <PkModal
        :open="pendingRestore !== null"
        title="Restore the database?"
        description="A safety backup is taken first, so this can be undone."
        @close="pendingRestore = null"
    >
        <div class="flex flex-col gap-3 text-sm">
            <p class="text-destructive flex items-start gap-2">
                <TriangleAlert class="mt-0.5 size-4 shrink-0" />
                <span>
                    Every record in the live database is replaced with the contents of this
                    snapshot. Anything created since it was taken is lost.
                </span>
            </p>

            <!--
                SAYING WHAT IT DOES NOT DO IS AS IMPORTANT AS SAYING WHAT IT
                DOES. An operator who assumes uploaded files come back too will
                not go looking for them.
            -->
            <p class="text-muted-foreground text-xs">
                Only the database is restored. Application files and uploaded documents are
                left exactly as they are - download the snapshot if you need those.
            </p>

            <label class="flex flex-col gap-1">
                <span class="text-xs font-medium">
                    Type <span class="font-mono">{{ restoreName }}</span> to confirm
                </span>
                <input
                    v-model="typedConfirmation"
                    type="text"
                    class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                    autocomplete="off"
                    spellcheck="false"
                />
            </label>
        </div>

        <template #footer>
            <Button variant="ghost" size="sm" @click="pendingRestore = null">Cancel</Button>
            <Button
                variant="destructive"
                size="sm"
                :disabled="!confirmationMatches"
                @click="confirmRestore"
            >
                Restore database
            </Button>
        </template>
    </PkModal>

    <!-- Settings ----------------------------------------------------- -->
    <PkModal
        :open="settingsOpen"
        title="Backup settings"
        description="How often backups run, how long they are kept, where they go, and who is told."
        :busy="form.processing"
        @close="settingsOpen = false"
    >
        <div class="flex flex-col gap-4 text-sm">
            <!-- A retention policy that quietly went from ninety days to seven
                 is exactly what somebody has to be able to account for later. -->
            <p v-if="props.settingsChangedBy" class="text-muted-foreground text-xs">
                Last changed by {{ props.settingsChangedBy.by ?? 'somebody' }} on
                {{ when(props.settingsChangedBy.at) }}.
            </p>
            <p v-else class="text-muted-foreground text-xs">
                Still on the shipped defaults - nothing here has been changed yet.
            </p>

            <div class="grid gap-3 sm:grid-cols-2">
                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">How often</span>
                    <select
                        v-model="form.frequency"
                        class="border-input bg-background rounded-md border px-3 py-1.5"
                    >
                        <option v-for="f in FREQUENCIES" :key="f.value" :value="f.value">
                            {{ f.label }}
                        </option>
                    </select>
                </label>

                <!-- Hidden rather than disabled when hourly: a time field that
                     does nothing invites somebody to set it and expect it. -->
                <label v-if="form.frequency !== 'hourly'" class="flex flex-col gap-1">
                    <span class="text-xs font-medium">At</span>
                    <input
                        v-model="form.time"
                        type="time"
                        class="border-input bg-background rounded-md border px-3 py-1.5"
                    />
                </label>

                <label v-if="form.frequency === 'weekly'" class="flex flex-col gap-1">
                    <span class="text-xs font-medium">On</span>
                    <select
                        v-model.number="form.weekday"
                        class="border-input bg-background rounded-md border px-3 py-1.5"
                    >
                        <option v-for="d in WEEKDAYS" :key="d.value" :value="d.value">
                            {{ d.label }}
                        </option>
                    </select>
                </label>

                <label v-if="form.frequency === 'monthly'" class="flex flex-col gap-1">
                    <span class="text-xs font-medium">On the</span>
                    <select
                        v-model.number="form.dayOfMonth"
                        class="border-input bg-background rounded-md border px-3 py-1.5"
                    >
                        <option v-for="d in DAYS_OF_MONTH" :key="d" :value="d">{{ d }}</option>
                    </select>
                    <!-- The ceiling needs saying, or its absence reads as a bug. -->
                    <span class="text-muted-foreground text-xs">
                        Stops at 28 so it fires in every month, February included.
                    </span>
                </label>
            </div>

            <!-- A monthly cadence changes what "healthy" means, and an operator
                 who is not told will read the next stale-backup alert as noise. -->
            <p v-if="form.frequency === 'monthly'" class="text-muted-foreground -mt-2 text-xs">
                On a monthly schedule a backup is only reported as stale after 35 days.
            </p>

            <div class="grid gap-3 sm:grid-cols-2">
                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">Delete snapshots older than</span>
                    <div class="flex items-center gap-2">
                        <input
                            v-model.number="form.keepDays"
                            type="number"
                            min="1"
                            max="3650"
                            class="border-input bg-background w-24 rounded-md border px-3 py-1.5"
                        />
                        <span class="text-muted-foreground text-xs">days</span>
                    </div>
                    <span v-if="form.errors.keepDays" class="text-destructive text-xs">
                        {{ form.errors.keepDays }}
                    </span>
                </label>

                <label class="flex flex-col gap-1">
                    <span class="text-xs font-medium">Or when they total more than</span>
                    <div class="flex items-center gap-2">
                        <input
                            v-model.number="form.maxMegabytes"
                            type="number"
                            min="100"
                            class="border-input bg-background w-28 rounded-md border px-3 py-1.5"
                        />
                        <span class="text-muted-foreground text-xs">MB</span>
                    </div>
                </label>
            </div>

            <!-- The newest snapshot is never deleted by either rule, and saying
                 so is what stops "1 day" reading as "keep nothing". -->
            <p class="text-muted-foreground -mt-2 text-xs">
                The most recent backup is never deleted, whatever these say.
            </p>

            <fieldset class="flex flex-col gap-2">
                <legend class="text-xs font-medium">Where copies are kept</legend>
                <p class="text-muted-foreground text-xs">
                    A copy that only exists on this machine is not a backup. Add an off-site disk
                    and every snapshot is written to both.
                </p>

                <div class="flex flex-wrap gap-3 pt-1">
                    <div
                        v-for="disk in props.disks"
                        :key="disk"
                        class="flex items-center gap-2 text-sm"
                    >
                        <label class="flex items-center gap-2">
                            <input
                                type="checkbox"
                                class="size-4"
                                :checked="form.destinations.includes(disk)"
                                :disabled="disk === 'local'"
                                @change="toggleDestination(disk)"
                            />
                            <span class="font-mono text-xs">{{ disk }}</span>
                            <span v-if="disk === 'local'" class="text-muted-foreground text-xs">
                                (always)
                            </span>
                        </label>

                        <!--
                            A DISK NAME IS NOT PROOF OF A WORKING DESTINATION.
                            An s3 entry with empty credentials is a valid name:
                            it saves happily and fails on the first nightly run,
                            taking the whole backup with it.
                        -->
                        <button
                            type="button"
                            class="text-muted-foreground hover:text-foreground text-xs underline disabled:opacity-50"
                            :disabled="testing !== null"
                            @click="testDestination(disk)"
                        >
                            {{ testing === disk ? 'Testing…' : 'Test' }}
                        </button>
                    </div>
                </div>

                <span v-if="form.errors.destinations" class="text-destructive text-xs">
                    {{ form.errors.destinations }}
                </span>
            </fieldset>

            <fieldset class="flex flex-col gap-2">
                <legend class="text-xs font-medium">Who is told</legend>

                <label class="flex flex-col gap-1">
                    <span class="text-muted-foreground text-xs">Email address</span>
                    <input
                        v-model="form.alertEmail"
                        type="email"
                        placeholder="ops@example.com"
                        class="border-input bg-background rounded-md border px-3 py-1.5"
                    />
                    <span v-if="form.errors.alertEmail" class="text-destructive text-xs">
                        {{ form.errors.alertEmail }}
                    </span>
                </label>

                <!--
                    BOTH HALVES, because either alone does nothing.
                    Only the chat id was asked for, while the bot token came from
                    the server's environment - so an operator could fill in the
                    one field they were shown, save it, and get no alerts, with
                    nothing on screen explaining why.
                -->
                <div class="grid gap-3 sm:grid-cols-2">
                    <label class="flex flex-col gap-1">
                        <span class="text-muted-foreground text-xs">Telegram bot token</span>
                        <input
                            v-model="form.alertTelegramToken"
                            type="password"
                            autocomplete="off"
                            :placeholder="
                                props.settings.hasTelegramToken
                                    ? 'Saved - type to replace'
                                    : '123456:ABC-DEF…'
                            "
                            class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                        />
                        <!--
                            The stored token is never sent back here, so an empty
                            field means "leave it alone" rather than "clear it" -
                            otherwise editing the retention period would silently
                            delete a working credential.
                        -->
                        <span class="text-muted-foreground text-xs">
                            {{
                                props.settings.hasTelegramToken
                                    ? 'Leave blank to keep the saved token.'
                                    : 'From @BotFather. Stored on the server and never shown again.'
                            }}
                        </span>
                        <span v-if="form.errors.alertTelegramToken" class="text-destructive text-xs">
                            {{ form.errors.alertTelegramToken }}
                        </span>
                    </label>

                    <label class="flex flex-col gap-1">
                        <span class="text-muted-foreground text-xs">Telegram chat id</span>
                        <input
                            v-model="form.alertTelegramChatId"
                            type="text"
                            placeholder="-1001234567890"
                            class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                        />
                        <span class="text-muted-foreground text-xs">
                            The group or channel the bot posts to.
                        </span>
                    </label>
                </div>

                <!-- Half-configured is the state worth calling out: it looks set
                     up on the screen and delivers nothing. -->
                <p
                    v-if="!props.settings.telegramReady && (form.alertTelegramChatId || form.alertTelegramToken)"
                    class="text-amber-600 text-xs dark:text-amber-500"
                >
                    Telegram needs both a bot token and a chat id. With only one, nothing is sent.
                </p>

                <!--
                    A REAL MESSAGE, NOT A CREDENTIAL CHECK.
                    Validating the token proves the bot exists and proves nothing
                    about whether the chat id is right or whether the bot was ever
                    added to that group - and all of those fail identically at
                    three in the morning: silence. This sends, through the same
                    channel the next real alert will use.

                    It tests WHAT IS IN THE FORM, so a token can be checked
                    before it is committed. That is the order somebody actually
                    works in: paste, test, save.
                -->
                <div class="flex items-center gap-2 pt-1">
                    <Button
                        variant="outline"
                        size="sm"
                        :disabled="testingTelegram"
                        @click="testTelegram"
                    >
                        {{ testingTelegram ? 'Sending…' : 'Send a test message' }}
                    </Button>
                    <span class="text-muted-foreground text-xs">
                        Posts to the chat above, now.
                    </span>
                </div>

                <label class="flex items-start gap-2 pt-1">
                    <input v-model="form.notifyOnSuccess" type="checkbox" class="mt-0.5 size-4" />
                    <span>
                        <span class="text-sm">Also tell me when a backup succeeds</span>
                        <span class="text-muted-foreground block text-xs">
                            Failures are always reported. A nightly success message gets filtered
                            into a folder within a week, and then the failure is filtered with it.
                        </span>
                    </span>
                </label>
            </fieldset>
        </div>

        <template #footer>
            <Button variant="ghost" size="sm" :disabled="form.processing" @click="settingsOpen = false">
                Cancel
            </Button>
            <Button size="sm" :disabled="form.processing" @click="saveSettings">
                {{ form.processing ? 'Saving…' : 'Save settings' }}
            </Button>
        </template>
    </PkModal>
</template>
