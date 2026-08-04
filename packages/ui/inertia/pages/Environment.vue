<script setup lang="ts">
/**
 * A handful of named settings from `.env`, not a text editor.
 *
 * WHAT THIS SCREEN DELIBERATELY CANNOT DO. There is no textarea holding the
 * file: `.env` is read before anything else boots, so a file that cannot be
 * parsed is not a broken page but every request failing - including the one that
 * would let somebody fix it. Recovery then needs a shell, which is exactly what
 * whoever is on this screen does not have.
 *
 * SECRETS ARE NEVER SHOWN. A value in a page prop is a value in the browser
 * history and in any proxy that logged the response. A secret field says only
 * whether something is SET, and an empty box means "leave it alone" rather than
 * "set it to nothing" - otherwise editing the field beside an API key would
 * wipe the key.
 *
 * NOTHING RESTARTS. Saving writes a file. Clearing a cached config or bouncing a
 * worker are deploy actions, and a web request that performs them is one that
 * can take the site down - so where the config is cached this says the change
 * is inert until the next deploy rather than pretending otherwise.
 */
import { Head, useForm } from '@inertiajs/vue3'
import { PkButton as Button } from '@alxtexh-enterprise/panel'
import { computed } from 'vue'

type Entry = {
    key: string
    value: string | null
    secret: boolean
    set: boolean
}

const props = withDefaults(
    defineProps<{
        entries?: Entry[]
        writable?: boolean
        cached?: boolean
        pageHeading?: string
        pageDescription?: string | null
    }>(),
    {
        entries: () => [],
        writable: false,
        cached: false,
        pageHeading: 'Environment',
        pageDescription: null,
    },
)

/*
 * A SECRET STARTS EMPTY, ALWAYS. Prefilling it with the real value would put
 * the secret in the DOM; prefilling it with a mask would submit the mask.
 */
const form = useForm<{ values: Record<string, string> }>({
    values: Object.fromEntries(
        props.entries.map((entry) => [entry.key, entry.secret ? '' : (entry.value ?? '')]),
    ),
})

const notice = computed(() =>
    props.cached
        ? 'The configuration is cached, so a change here takes effect after the next deploy.'
        : 'A change here takes effect on the next request.',
)

/**
 * Grouped by the first segment of the name - `MAIL_*` together, `LOG_*`
 * together.
 *
 * A FLAT STACK IS WHAT THIS SCREEN SHIPPED AS, and six unrelated boxes down the
 * page read as a form with one long question rather than as three settings.
 * Environment names already carry their grouping in the prefix; using it costs
 * nothing and is the difference between a list and a screen.
 *
 * A GROUP OF ONE IS NOT A GROUP. A lone `LOG_LEVEL` under a heading saying
 * "LOG" is a box drawn around a single field, which is noise - those collect
 * into one final group instead.
 */
const groups = computed(() => {
    const byPrefix = new Map<string, Entry[]>()

    for (const entry of props.entries) {
        const prefix = entry.key.includes('_') ? entry.key.split('_')[0] : ''

        byPrefix.set(prefix, [...(byPrefix.get(prefix) ?? []), entry])
    }

    const named: { label: string; entries: Entry[] }[] = []
    const rest: Entry[] = []

    for (const [prefix, entries] of byPrefix) {
        if (prefix === '' || entries.length < 2) {
            rest.push(...entries)

            continue
        }

        named.push({ label: prefix, entries })
    }

    return rest.length > 0 ? [...named, { label: 'Other', entries: rest }] : named
})

const submit = () => form.put(window.location.pathname, { preserveScroll: true })
</script>

<template>
    <Head :title="pageHeading" />

    <!--
        THE PAGE PADDING IS THE SCREEN'S OWN, matching `settings/Roles`. This
        rendered flush against the shell because it had none, which is most of
        why it looked unfinished next to every other screen.
    -->
    <div class="flex max-w-3xl flex-col gap-4 p-4 sm:p-6">
        <header>
            <h1 class="text-xl font-semibold tracking-tight">{{ pageHeading }}</h1>
            <p v-if="pageDescription" class="text-muted-foreground mt-1 text-sm">
                {{ pageDescription }}
            </p>
        </header>

        <p
            v-if="!writable"
            class="border-destructive/40 bg-destructive/5 rounded-lg border p-4 text-sm"
        >
            The .env file is not writable by the web process, or no keys are declared as editable.
            Nothing here can be changed.
        </p>

        <p v-else class="bg-muted/40 text-muted-foreground rounded-md border px-3 py-2 text-sm">
            {{ notice }}
        </p>

        <p v-if="form.errors.values" class="text-destructive text-sm">
            {{ form.errors.values }}
        </p>

        <form
            v-if="writable && entries.length"
            class="flex flex-col gap-4"
            @submit.prevent="submit"
        >
            <!--
                ONE CARD PER PREFIX. Six unrelated boxes down a page read as one
                long question; `MAIL_*` under a heading reads as a setting.
            -->
            <section
                v-for="group in groups"
                :key="group.label"
                class="flex flex-col gap-4 rounded-lg border p-4"
            >
                <h2 class="text-muted-foreground font-mono text-xs tracking-wide uppercase">
                    {{ group.label }}
                </h2>

                <!--
                    LABEL BESIDE THE FIELD ON A WIDE SCREEN, stacked on a narrow
                    one. Full-width inputs for values like `debug` were most of
                    the congestion - the box was six times the length of
                    anything anyone types into it.
                -->
                <div
                    v-for="entry in group.entries"
                    :key="entry.key"
                    class="grid gap-1.5 sm:grid-cols-[minmax(0,14rem)_1fr] sm:items-baseline sm:gap-4"
                >
                    <label
                        :for="`env-${entry.key}`"
                        class="font-mono text-sm font-medium break-all"
                    >
                        {{ entry.key }}
                    </label>

                    <div class="flex flex-col gap-1">
                        <input
                            :id="`env-${entry.key}`"
                            v-model="form.values[entry.key]"
                            :type="entry.secret ? 'password' : 'text'"
                            :placeholder="
                                entry.secret
                                    ? entry.set
                                        ? 'Set — leave blank to keep it'
                                        : 'Not set'
                                    : ''
                            "
                            autocomplete="off"
                            class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 font-mono text-sm focus-visible:ring-2 focus-visible:outline-none"
                        />

                        <p v-if="entry.secret" class="text-muted-foreground text-xs">
                            Never displayed. Leave blank to keep the current value.
                        </p>
                    </div>
                </div>
            </section>

            <!-- Design rule 1: actions in one group, at the trailing edge. -->
            <div class="flex justify-end">
                <Button type="submit" :disabled="form.processing">
                    {{ form.processing ? 'Saving…' : 'Save' }}
                </Button>
            </div>
        </form>

        <p v-else-if="writable" class="text-muted-foreground text-sm">
            No keys are declared as editable. Name them in
            <code>config/panel.php</code> under <code>env.editable</code>.
        </p>
    </div>
</template>
