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
import { PkButton as Button } from '@panelkit/ui'
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
        props.entries.map((entry) => [
            entry.key,
            entry.secret ? '' : (entry.value ?? ''),
        ]),
    ),
})

const notice = computed(() =>
    props.cached
        ? 'The configuration is cached, so a change here takes effect after the next deploy.'
        : 'A change here takes effect on the next request.',
)

const submit = () => form.put(window.location.pathname, { preserveScroll: true })
</script>

<template>
    <Head :title="pageHeading" />

    <div class="max-w-2xl space-y-6">
        <header>
            <h1 class="text-2xl font-semibold tracking-tight">{{ pageHeading }}</h1>
            <p v-if="pageDescription" class="text-muted-foreground mt-1 text-sm">
                {{ pageDescription }}
            </p>
        </header>

        <p
            v-if="!writable"
            class="border-destructive/40 bg-destructive/5 rounded-lg border p-4 text-sm"
        >
            The .env file is not writable by the web process, or no keys are
            declared as editable. Nothing here can be changed.
        </p>

        <p v-else class="text-muted-foreground text-sm">{{ notice }}</p>

        <p v-if="form.errors.values" class="text-destructive text-sm">
            {{ form.errors.values }}
        </p>

        <form v-if="writable && entries.length" class="space-y-4" @submit.prevent="submit">
            <div v-for="entry in entries" :key="entry.key" class="grid gap-1.5">
                <label :for="`env-${entry.key}`" class="font-mono text-sm font-medium">
                    {{ entry.key }}
                </label>

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

            <Button type="submit" :disabled="form.processing">
                {{ form.processing ? 'Saving…' : 'Save' }}
            </Button>
        </form>

        <p v-else-if="writable" class="text-muted-foreground text-sm">
            No keys are declared as editable. Name them in
            <code>config/panel.php</code> under <code>env.editable</code>.
        </p>
    </div>
</template>
