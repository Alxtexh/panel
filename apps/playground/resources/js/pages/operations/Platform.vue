<script setup lang="ts">
/**
 * What this installation is actually running.
 *
 * IT EXISTS BECAUSE THESE ANSWERS NEEDED A SHELL. Which cache driver, which
 * queue, whether cron is ticking, whether tenancy separates by column or by
 * database - each one changes how the panel behaves, each is a common cause of
 * "it works on my machine", and each required SSH access and a copy of the
 * config. An operator watching a backup fail could see the failure and nothing
 * about the environment it failed in.
 *
 * PROBLEMS FIRST, FACTS SECOND. The health findings sit at the top because they
 * are the reason anybody opens this page in a hurry; the reference table
 * underneath is what they read once they know where to look.
 *
 * NOTHING HERE IS EDITABLE, and the absence of a Save button is the point - see
 * `PlatformReport`. Configuration that belongs in a deploy stays in the deploy.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'
import { CircleCheck, Info, TriangleAlert } from '@lucide/vue'
import { computed } from 'vue'

defineOptions({ layout: AppLayout })

const props = defineProps<{
    application: {
        name: string
        environment: string
        debug: boolean
        url: string
        php: string
        laravel: string
        timezone: string
        locale: string
    }
    drivers: {
        database: { connection: string; driver: string; host: string; version: string | null }
        cache: string
        queue: string
        session: string
        mail: string
        filesystem: string
        live: string
        broadcast: string
    }
    tenancy: { mode: string; meaning: string; resources: number }
    scheduler: { lastRunAt: string | null; healthy: boolean }
    findings: { level: string; title: string; detail: string }[]
}>()

const problems = computed(() => props.findings.filter((f) => f.level === 'problem'))
const notes = computed(() => props.findings.filter((f) => f.level !== 'problem'))

/**
 * Debug mode in production is its own finding, and it is not a note.
 *
 * Left on, it puts stack traces, environment variables and database credentials
 * on an error page - and it is invisible until something throws, which is the
 * worst moment to find out.
 */
const debugInProduction = computed(
    () => props.application.debug && props.application.environment !== 'local',
)

const when = (iso: string | null) => (iso === null ? 'never' : new Date(iso).toLocaleString())
</script>

<template>
    <Head title="Platform" />

    <div class="flex flex-col gap-6 p-4">
        <div>
            <h1 class="text-xl font-semibold">Platform</h1>
            <p class="text-muted-foreground text-sm">
                What this installation is running. Nothing on this page can be changed here -
                these come from the deploy.
            </p>
        </div>

        <!-- PROBLEMS FIRST. This is the half somebody opens the page for. -->
        <div
            v-if="debugInProduction"
            class="border-destructive/40 bg-destructive/5 flex items-start gap-3 rounded-lg border p-4 text-sm"
        >
            <TriangleAlert class="text-destructive mt-0.5 size-4 shrink-0" />
            <div>
                <p class="font-medium">Debug mode is on outside local.</p>
                <p class="text-muted-foreground">
                    Any unhandled error will show stack traces, environment variables and database
                    credentials to whoever triggered it. Set <span class="font-mono">APP_DEBUG=false</span>.
                </p>
            </div>
        </div>

        <div
            v-for="(finding, i) in problems"
            :key="`problem-${i}`"
            class="border-destructive/40 bg-destructive/5 flex items-start gap-3 rounded-lg border p-4 text-sm"
        >
            <TriangleAlert class="text-destructive mt-0.5 size-4 shrink-0" />
            <div>
                <p class="font-medium">{{ finding.title }}</p>
                <p class="text-muted-foreground">{{ finding.detail }}</p>
            </div>
        </div>

        <div
            v-if="!problems.length && !debugInProduction"
            class="flex items-start gap-3 rounded-lg border border-emerald-500/40 bg-emerald-500/5 p-4 text-sm"
        >
            <CircleCheck class="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
            <p class="font-medium">Nothing silently wrong.</p>
        </div>

        <!--
            THE SCHEDULER GETS ITS OWN BLOCK because it is the most commonly
            broken thing in a deployment and has the quietest failure: no cron
            means no backups, no cleanup and no monitor, and every screen
            reporting on those looks perfectly normal.
        -->
        <div
            class="rounded-lg border p-4 text-sm"
            :class="props.scheduler.healthy ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-destructive/40 bg-destructive/5'"
        >
            <p class="font-medium">
                <template v-if="props.scheduler.healthy">The scheduler is running.</template>
                <template v-else>The scheduler does not appear to be running.</template>
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
                Last tick: {{ when(props.scheduler.lastRunAt) }}.
                <template v-if="!props.scheduler.healthy">
                    Without it there are no backups, no cleanup and no monitoring - and every
                    screen reporting on those will look normal.
                </template>
            </p>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
            <section class="rounded-lg border">
                <h2 class="border-b px-4 py-2 text-sm font-medium">Application</h2>
                <dl class="divide-y text-sm">
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Environment</dt>
                        <dd class="font-mono text-xs">{{ props.application.environment }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Debug</dt>
                        <dd class="font-mono text-xs">{{ props.application.debug ? 'on' : 'off' }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">URL</dt>
                        <dd class="truncate font-mono text-xs">{{ props.application.url }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">PHP</dt>
                        <dd class="font-mono text-xs">{{ props.application.php }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Laravel</dt>
                        <dd class="font-mono text-xs">{{ props.application.laravel }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Timezone</dt>
                        <dd class="font-mono text-xs">{{ props.application.timezone }}</dd>
                    </div>
                </dl>
            </section>

            <section class="rounded-lg border">
                <h2 class="border-b px-4 py-2 text-sm font-medium">Drivers</h2>
                <dl class="divide-y text-sm">
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Database</dt>
                        <dd class="text-right font-mono text-xs">
                            {{ props.drivers.database.driver }}
                            <span v-if="props.drivers.database.version">
                                {{ props.drivers.database.version }}
                            </span>
                            <!-- The host is the fact a restore makes urgent:
                                 "am I looking at staging?" -->
                            <span class="text-muted-foreground block">
                                {{ props.drivers.database.host }}
                            </span>
                        </dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Cache</dt>
                        <dd class="font-mono text-xs">{{ props.drivers.cache }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Queue</dt>
                        <dd class="font-mono text-xs">{{ props.drivers.queue }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Session</dt>
                        <dd class="font-mono text-xs">{{ props.drivers.session }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Mail</dt>
                        <dd class="font-mono text-xs">{{ props.drivers.mail }}</dd>
                    </div>
                    <div class="flex justify-between gap-4 px-4 py-2">
                        <dt class="text-muted-foreground">Live updates</dt>
                        <dd class="font-mono text-xs">{{ props.drivers.live }}</dd>
                    </div>
                </dl>
            </section>
        </div>

        <section class="rounded-lg border p-4 text-sm">
            <h2 class="text-sm font-medium">Tenancy</h2>
            <p class="mt-1">
                <span class="font-mono text-xs">{{ props.tenancy.mode }}</span>
                — {{ props.tenancy.meaning }}
            </p>
            <p class="text-muted-foreground mt-1 text-xs">
                {{ props.tenancy.resources }} registered resource(s).
            </p>
        </section>

        <!-- Notes last: they are worth knowing and are not why anybody came. -->
        <section v-if="notes.length" class="flex flex-col gap-2">
            <h2 class="text-sm font-medium">Notes</h2>

            <div
                v-for="(finding, i) in notes"
                :key="`note-${i}`"
                class="flex items-start gap-3 rounded-lg border p-3 text-sm"
            >
                <Info class="text-muted-foreground mt-0.5 size-4 shrink-0" />
                <div>
                    <p class="font-medium">{{ finding.title }}</p>
                    <p class="text-muted-foreground">{{ finding.detail }}</p>
                </div>
            </div>
        </section>
    </div>
</template>
