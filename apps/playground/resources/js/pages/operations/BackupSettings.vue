<script setup lang="ts">
/**
 * The backup policy: when it runs, how long copies live, where they go, who is
 * told.
 *
 * IT WAS A DIALOG AND IT HAD OUTGROWN ONE. Nineteen controls across four
 * unrelated subjects, in a box that scrolled independently of the page behind
 * it - so the schedule was off screen while somebody typed a bot token, and the
 * thing the dialog was covering was a list of snapshots nobody was reading. A
 * dialog is for one decision you can hold in your head while the page underneath
 * stays relevant. This is a policy with four parts.
 *
 * THE SHAPE IS A FORM AND A RAIL. The left column is the decisions in the order
 * somebody makes them; the right is what those decisions currently MEAN - the
 * schedule in a sentence, where copies land, who hears about it. Reading the
 * rail is how you check the form without re-reading the form.
 *
 * EACH SECTION HEADER CARRIES ITS PURPOSE, right-aligned and grey. "When it
 * runs" is not a label for the fields - they are labelled - it is the question
 * the section answers, which is what somebody scanning for the right group
 * actually needs.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Button } from '@/components/ui/button'
import { Head, Link, router, useForm } from '@inertiajs/vue3'
import { computed, ref } from 'vue'
import backups from '@/routes/operations/backups'
import operations from '@/routes/operations'
import alerts from '@/routes/operations/alerts'
import { ArrowLeft, CalendarClock, HardDrive, Megaphone, Timer } from '@lucide/vue'

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
    alertTelegramToken: string | null
    notifyOnSuccess: boolean
    hasTelegramToken: boolean
    telegramReady: boolean
}

const props = defineProps<{
    settings: Settings
    schedule: string
    settingsChangedBy: { by: string | null; at: string } | null
    disks: string[]
    can: { manage: boolean }
}>()

defineOptions({
    layout: AppLayout,
})

/**
 * The saved token is never sent back, so the field starts empty and an empty
 * field means "leave it alone" rather than "clear it" - otherwise editing the
 * retention period would silently delete a working credential.
 */
function formValues() {
    const { hasTelegramToken: _has, telegramReady: _ready, ...values } = props.settings

    return { ...values, alertTelegramToken: null as string | null }
}

const form = useForm(formValues())

function save() {
    form.put(backups.settings.url(), { preserveScroll: true })
}

function toggleDestination(disk: string) {
    form.destinations = form.destinations.includes(disk)
        ? form.destinations.filter((d) => d !== disk)
        : [...form.destinations, disk]
}

const testing = ref<string | null>(null)

function testDestination(disk: string) {
    testing.value = disk

    router.post(
        backups.destinations.test.url(),
        { disk },
        { preserveScroll: true, preserveState: true, onFinish: () => (testing.value = null) },
    )
}

const testingTelegram = ref(false)

function testTelegram() {
    testingTelegram.value = true

    router.post(
        alerts.telegram.test.url(),
        { token: form.alertTelegramToken, chat_id: form.alertTelegramChatId },
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

const WEEKDAYS = [
    { value: 0, label: 'Sunday' },
    { value: 1, label: 'Monday' },
    { value: 2, label: 'Tuesday' },
    { value: 3, label: 'Wednesday' },
    { value: 4, label: 'Thursday' },
    { value: 5, label: 'Friday' },
    { value: 6, label: 'Saturday' },
]

const DAYS_OF_MONTH = Array.from({ length: 28 }, (_, i) => i + 1)

/**
 * What the form currently means, in the reader's words.
 *
 * COMPUTED FROM THE FORM, NOT THE SAVED SETTINGS. `schedule` from the server
 * describes what is stored; this rail has to describe what is on screen, or it
 * contradicts the controls the moment anybody touches one.
 */
const cadence = computed(() => {
    const at = form.frequency === 'hourly' ? '' : ` at ${form.time}`

    if (form.frequency === 'weekly') {
        return `Every ${WEEKDAYS[form.weekday]?.label ?? 'week'}${at}`
    }

    if (form.frequency === 'monthly') {
        return `On day ${form.dayOfMonth} of each month${at}`
    }

    return `${FREQUENCIES.find((f) => f.value === form.frequency)?.label ?? ''}${at}`
})

/**
 * How stale a backup may be before the monitor calls it unhealthy.
 *
 * DERIVED FROM THE FREQUENCY rather than configured separately - the same rule
 * `BackupSettings::staleAfterDays()` applies on the server. Stated here because
 * an operator who moves to monthly and then reads a stale-backup alert as noise
 * is the person this number exists to protect.
 */
const staleAfter = computed(() => {
    if (form.frequency === 'monthly') return 35
    if (form.frequency === 'weekly') return 8

    return 2
})

const offsite = computed(() => form.destinations.filter((d) => d !== 'local'))

const telegramHalfDone = computed(
    () =>
        (Boolean(form.alertTelegramChatId) || Boolean(form.alertTelegramToken)) &&
        !(Boolean(form.alertTelegramChatId) && (Boolean(form.alertTelegramToken) || props.settings.hasTelegramToken)),
)
</script>

<template>
    <Head title="Backup settings" />

    <div class="flex flex-col gap-4 p-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="flex flex-col gap-1">
                <Link
                    :href="operations.backups.url()"
                    class="text-muted-foreground hover:text-foreground flex w-fit items-center gap-1 text-xs"
                >
                    <ArrowLeft class="size-3.5" />
                    Backups
                </Link>
                <h1 class="text-xl font-semibold">Backup settings</h1>
                <p class="text-muted-foreground text-sm">
                    How often backups run, how long they are kept, where they go, and who is told.
                </p>
            </div>

            <!--
                THE PROVENANCE IS A HEADER FACT, not a footnote. A retention
                policy that quietly went from ninety days to seven is exactly
                what somebody has to be able to account for later.
            -->
            <p class="text-muted-foreground text-xs">
                <template v-if="props.settingsChangedBy">
                    Last changed by {{ props.settingsChangedBy.by ?? 'somebody' }}<br />
                    {{ props.settingsChangedBy.at }}
                </template>
                <template v-else> Still on the shipped defaults. </template>
            </p>
        </div>

        <div class="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div class="flex flex-col gap-4">
                <!-- ------------------------------------------------ schedule -->
                <section class="bg-card rounded-lg border">
                    <header class="flex items-center justify-between border-b px-4 py-3">
                        <h2 class="flex items-center gap-2 text-sm font-semibold">
                            <CalendarClock class="text-muted-foreground size-4" />
                            Schedule
                        </h2>
                        <span class="text-muted-foreground text-xs">when it runs</span>
                    </header>

                    <div class="flex flex-col gap-3 p-4">
                        <div class="grid gap-3 sm:grid-cols-3">
                            <label class="flex flex-col gap-1">
                                <span class="text-xs font-medium">How often</span>
                                <select
                                    v-model="form.frequency"
                                    :disabled="!can.manage"
                                    class="border-input bg-background rounded-md border px-3 py-1.5 text-sm"
                                >
                                    <option v-for="f in FREQUENCIES" :key="f.value" :value="f.value">
                                        {{ f.label }}
                                    </option>
                                </select>
                            </label>

                            <!--
                                Hidden rather than disabled when hourly: a time
                                field that does nothing invites somebody to set
                                it and expect it.
                            -->
                            <label v-if="form.frequency !== 'hourly'" class="flex flex-col gap-1">
                                <span class="text-xs font-medium">At</span>
                                <input
                                    v-model="form.time"
                                    type="time"
                                    :disabled="!can.manage"
                                    class="border-input bg-background rounded-md border px-3 py-1.5 text-sm"
                                />
                            </label>

                            <label v-if="form.frequency === 'weekly'" class="flex flex-col gap-1">
                                <span class="text-xs font-medium">On</span>
                                <select
                                    v-model.number="form.weekday"
                                    :disabled="!can.manage"
                                    class="border-input bg-background rounded-md border px-3 py-1.5 text-sm"
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
                                    :disabled="!can.manage"
                                    class="border-input bg-background rounded-md border px-3 py-1.5 text-sm"
                                >
                                    <option v-for="d in DAYS_OF_MONTH" :key="d" :value="d">{{ d }}</option>
                                </select>
                                <!-- The ceiling needs saying, or its absence reads as a bug. -->
                                <span class="text-muted-foreground text-xs">
                                    Stops at 28 so it fires in every month, February included.
                                </span>
                            </label>
                        </div>
                    </div>
                </section>

                <!-- ----------------------------------------------- retention -->
                <section class="bg-card rounded-lg border">
                    <header class="flex items-center justify-between border-b px-4 py-3">
                        <h2 class="flex items-center gap-2 text-sm font-semibold">
                            <Timer class="text-muted-foreground size-4" />
                            Retention
                        </h2>
                        <span class="text-muted-foreground text-xs">how long copies live</span>
                    </header>

                    <div class="flex flex-col gap-3 p-4">
                        <div class="grid gap-3 sm:grid-cols-2">
                            <label class="flex flex-col gap-1">
                                <span class="text-xs font-medium">Delete snapshots older than</span>
                                <div class="flex items-center gap-2">
                                    <input
                                        v-model.number="form.keepDays"
                                        type="number"
                                        min="1"
                                        max="3650"
                                        :disabled="!can.manage"
                                        class="border-input bg-background w-24 rounded-md border px-3 py-1.5 text-sm"
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
                                        :disabled="!can.manage"
                                        class="border-input bg-background w-28 rounded-md border px-3 py-1.5 text-sm"
                                    />
                                    <span class="text-muted-foreground text-xs">MB</span>
                                </div>
                            </label>
                        </div>

                        <!--
                            The newest snapshot is never deleted by either rule,
                            and saying so is what stops "1 day" reading as
                            "keep nothing".
                        -->
                        <p class="text-muted-foreground text-xs">
                            The most recent backup is never deleted, whatever these say.
                        </p>
                    </div>
                </section>

                <!-- -------------------------------------------- destinations -->
                <section class="bg-card rounded-lg border">
                    <header class="flex items-center justify-between border-b px-4 py-3">
                        <h2 class="flex items-center gap-2 text-sm font-semibold">
                            <HardDrive class="text-muted-foreground size-4" />
                            Destinations
                        </h2>
                        <span class="text-muted-foreground text-xs">where copies are kept</span>
                    </header>

                    <div class="flex flex-col gap-3 p-4">
                        <p class="text-muted-foreground text-xs">
                            A copy that only exists on this machine is not a backup. Add an off-site
                            disk and every snapshot is written to both.
                        </p>

                        <ul class="divide-y rounded-md border">
                            <li
                                v-for="disk in props.disks"
                                :key="disk"
                                class="flex items-center justify-between gap-3 px-3 py-2"
                            >
                                <label class="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        class="size-4"
                                        :checked="form.destinations.includes(disk)"
                                        :disabled="disk === 'local' || !can.manage"
                                        @change="toggleDestination(disk)"
                                    />
                                    <span class="font-mono text-xs">{{ disk }}</span>
                                    <!--
                                        A LOCKED ROW THAT SAYS WHY IT IS LOCKED,
                                        in the row rather than by refusing the
                                        click later.
                                    -->
                                    <span v-if="disk === 'local'" class="text-muted-foreground text-xs">
                                        · always on
                                    </span>
                                </label>

                                <!--
                                    A DISK NAME IS NOT PROOF OF A WORKING
                                    DESTINATION. An s3 entry with empty
                                    credentials is a valid name: it saves
                                    happily and fails on the first nightly run,
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
                            </li>
                        </ul>

                        <span v-if="form.errors.destinations" class="text-destructive text-xs">
                            {{ form.errors.destinations }}
                        </span>
                    </div>
                </section>

                <!-- -------------------------------------------------- alerts -->
                <section class="bg-card rounded-lg border">
                    <header class="flex items-center justify-between border-b px-4 py-3">
                        <h2 class="flex items-center gap-2 text-sm font-semibold">
                            <Megaphone class="text-muted-foreground size-4" />
                            Alerts
                        </h2>
                        <span class="text-muted-foreground text-xs">who is told, and how</span>
                    </header>

                    <div class="flex flex-col gap-4 p-4">
                        <label class="flex flex-col gap-1">
                            <span class="text-xs font-medium">Email address</span>
                            <input
                                v-model="form.alertEmail"
                                type="email"
                                placeholder="ops@example.com"
                                :disabled="!can.manage"
                                class="border-input bg-background rounded-md border px-3 py-1.5 text-sm sm:max-w-sm"
                            />
                        </label>

                        <div class="flex flex-col gap-3">
                            <!--
                                BOTH HALVES, because either alone does nothing.
                                Only the chat id was asked for once, while the
                                token came from the environment - so an operator
                                filled in the one field they were shown, saved,
                                and got no alerts with nothing explaining why.
                            -->
                            <div class="grid gap-3 sm:grid-cols-2">
                                <label class="flex flex-col gap-1">
                                    <span class="text-xs font-medium">Telegram bot token</span>
                                    <input
                                        v-model="form.alertTelegramToken"
                                        type="password"
                                        autocomplete="off"
                                        :disabled="!can.manage"
                                        :placeholder="
                                            props.settings.hasTelegramToken
                                                ? 'Saved — type to replace'
                                                : '123456:ABC-DEF…'
                                        "
                                        class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                                    />
                                    <span class="text-muted-foreground text-xs">
                                        {{
                                            props.settings.hasTelegramToken
                                                ? 'Leave blank to keep the saved token.'
                                                : 'From @BotFather. Stored on the server, never shown again.'
                                        }}
                                    </span>
                                    <span v-if="form.errors.alertTelegramToken" class="text-destructive text-xs">
                                        {{ form.errors.alertTelegramToken }}
                                    </span>
                                </label>

                                <label class="flex flex-col gap-1">
                                    <span class="text-xs font-medium">Telegram chat id</span>
                                    <input
                                        v-model="form.alertTelegramChatId"
                                        type="text"
                                        placeholder="-1001234567890"
                                        :disabled="!can.manage"
                                        class="border-input bg-background rounded-md border px-3 py-1.5 font-mono text-xs"
                                    />
                                    <span class="text-muted-foreground text-xs">
                                        The group or channel the bot posts to.
                                    </span>
                                </label>
                            </div>

                            <p v-if="telegramHalfDone" class="text-xs text-amber-600 dark:text-amber-500">
                                Telegram needs both a bot token and a chat id. With only one, nothing
                                is sent.
                            </p>

                            <!--
                                A REAL MESSAGE, NOT A CREDENTIAL CHECK. A valid
                                token proves nothing about whether the chat id is
                                right or whether the bot was ever added to that
                                group, and all of those fail identically at three
                                in the morning: silence.
                            -->
                            <div class="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    :disabled="testingTelegram || !can.manage"
                                    @click="testTelegram"
                                >
                                    {{ testingTelegram ? 'Sending…' : 'Send a test message' }}
                                </Button>
                                <span class="text-muted-foreground text-xs">
                                    Posts to the chat above, now — before you save.
                                </span>
                            </div>
                        </div>

                        <label class="flex items-start gap-2 border-t pt-3">
                            <input
                                v-model="form.notifyOnSuccess"
                                type="checkbox"
                                :disabled="!can.manage"
                                class="mt-0.5 size-4"
                            />
                            <span>
                                <span class="text-sm">Also tell me when a backup succeeds</span>
                                <span class="text-muted-foreground block text-xs">
                                    Failures are always reported. A nightly success message gets
                                    filtered into a folder within a week, and then the failure is
                                    filtered with it.
                                </span>
                            </span>
                        </label>
                    </div>
                </section>
            </div>

            <!-- ------------------------------------------------------- rail -->
            <!--
                WHAT THE FORM CURRENTLY MEANS, in the reader's words rather than
                in fields. Reading this is how you check the form without
                re-reading the form - and it updates as you type, so it can
                never describe the saved state while the controls show another.
            -->
            <aside class="flex h-fit flex-col gap-3 lg:sticky lg:top-4">
                <section class="bg-card rounded-lg border p-4">
                    <h2 class="text-sm font-semibold">In plain words</h2>

                    <dl class="mt-3 flex flex-col gap-3 text-xs">
                        <div>
                            <dt class="text-muted-foreground">Runs</dt>
                            <dd class="font-medium">{{ cadence }}</dd>
                        </div>

                        <div>
                            <dt class="text-muted-foreground">Kept</dt>
                            <dd class="font-medium">
                                {{ form.keepDays }} days<template v-if="form.maxMegabytes">
                                    , or until they total {{ form.maxMegabytes }} MB</template
                                >
                            </dd>
                        </div>

                        <div>
                            <dt class="text-muted-foreground">Written to</dt>
                            <dd class="font-medium">
                                <span class="font-mono">local</span>
                                <template v-if="offsite.length">
                                    and
                                    <span class="font-mono">{{ offsite.join(', ') }}</span>
                                </template>
                            </dd>
                            <!--
                                THE ONE THAT MATTERS AND THE ONE PEOPLE SKIP.
                                A backup on the machine being backed up survives
                                a mistake and nothing else.
                            -->
                            <dd v-if="!offsite.length" class="mt-1 text-amber-600 dark:text-amber-500">
                                Nowhere off-site. A copy on this machine does not survive losing this
                                machine.
                            </dd>
                        </div>

                        <div>
                            <dt class="text-muted-foreground">Called stale after</dt>
                            <dd class="font-medium">{{ staleAfter }} days</dd>
                            <dd class="text-muted-foreground mt-1">
                                Follows the frequency, so the monitor never reports a healthy backup
                                as missing.
                            </dd>
                        </div>

                        <div>
                            <dt class="text-muted-foreground">Failures reach</dt>
                            <dd class="font-medium">
                                <template v-if="form.alertEmail || props.settings.telegramReady">
                                    <template v-if="form.alertEmail">{{ form.alertEmail }}</template>
                                    <template v-if="form.alertEmail && props.settings.telegramReady">
                                        and
                                    </template>
                                    <template v-if="props.settings.telegramReady">Telegram</template>
                                </template>
                                <span v-else class="text-amber-600 dark:text-amber-500">Nobody</span>
                            </dd>
                        </div>
                    </dl>
                </section>

                <div class="flex items-center gap-2">
                    <Button
                        size="sm"
                        class="flex-1"
                        :disabled="form.processing || !can.manage"
                        @click="save"
                    >
                        {{ form.processing ? 'Saving…' : 'Save settings' }}
                    </Button>
                    <Button variant="ghost" size="sm" :disabled="form.processing" as="a" :href="operations.backups.url()">
                        Cancel
                    </Button>
                </div>

                <p v-if="!can.manage" class="text-muted-foreground text-xs">
                    You can read this policy but not change it.
                </p>
            </aside>
        </div>
    </div>
</template>
