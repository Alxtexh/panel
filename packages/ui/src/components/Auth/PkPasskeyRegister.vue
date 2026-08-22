<script setup lang="ts">
/**
 * Enrol a passkey.
 *
 * WHY THIS IS IN THE PACKAGE NOW. It worked perfectly well in the reference app
 * and had done for a long time - which was the problem: a fresh
 * `composer require alxtexh-enterprise/panel` produced a panel with no passkey support and
 * nothing to suggest that adding it was a solved problem rather than a project.
 * The capability was never missing; it was only ever in the wrong place.
 *
 * `@laravel/passkeys/vue` IS A PEER DEPENDENCY, not a bundled one. It is the
 * browser half of Fortify's own WebAuthn support, and Alxtexhpanel does not require
 * Fortify - an installation on a different auth stack should not be made to
 * carry it.
 *
 * WHICH MEANS THE IMPORT HAS TO BE LAZY, and this was a STATIC import for two
 * releases. "Optional peer" was true of the PHP half and false of this file: a
 * bare `import { usePasskeyRegister } from '@laravel/passkeys/vue'` is resolved
 * at BUILD time, so any application without the package failed
 * `npm run build` outright - not the passkey screen, the whole bundle. The
 * server saying `available` is false never got a chance to matter, because
 * there was nothing to serve.
 *
 * Found by building a FRESH application rather than the reference one, where
 * Fortify has always been installed.
 *
 * `isSupported` IS ANSWERED BEFORE THE BUTTON IS DRAWN. Passkeys need a platform
 * authenticator, and a browser without one produces a registration dialog that
 * fails after the user has committed to it. Saying so up front is a sentence;
 * finding out afterwards is a support ticket.
 */
import { computed, onMounted, ref, shallowRef } from 'vue'
import type { Ref } from 'vue'
import PkButton from '../primitives/PkButton.vue'

const emit = defineEmits<{ success: [] }>()

/**
 * A NAME THE OWNER WILL RECOGNISE, guessed from the user agent.
 *
 * Somebody with three passkeys and three entries called "Passkey" cannot revoke
 * the one from the laptop they just lost, which is the single moment this list
 * exists for. "Chrome on Mac" is a guess and an editable one - better than a
 * blank field somebody fills with a keystroke to get past it.
 */
const defaultName = (): string => {
    const ua = navigator.userAgent

    const browser = [
        { pattern: /Edg|Edge/, name: 'Edge' },
        { pattern: /OPR|Opera|OPiOS/, name: 'Opera' },
        { pattern: /Firefox|FxiOS/, name: 'Firefox' },
        { pattern: /Chrome|CriOS/, name: 'Chrome' },
        { pattern: /Safari/, name: 'Safari' },
    ].find(({ pattern }) => pattern.test(ua))?.name

    const os = [
        { pattern: /iPhone/, name: 'iPhone' },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: 'iPad' },
        { pattern: /Android/, name: 'Android' },
        { pattern: /Mac/, name: 'Mac' },
        { pattern: /Windows/, name: 'Windows' },
    ].find(({ pattern }) => pattern.test(ua))?.name

    return [browser, os].filter(Boolean).join(' on ') || ''
}

const name = ref(defaultName())
const showForm = ref(false)

/*
 * RESOLVED AT RUNTIME, INSIDE A TRY. `import()` of a module that is not
 * installed is a rejected promise rather than a build failure, so an
 * application without `@laravel/passkeys` builds, runs, and simply never offers
 * enrolment - which is what "optional" was always meant to mean.
 *
 * `isSupported` STARTS FALSE, so the button cannot be drawn before the module
 * has answered. Starting true would show a control that throws on click for
 * however long the import takes.
 */
type Passkeys = {
    register: (name: string) => Promise<void>
    isLoading: Ref<boolean>
    error: Ref<string | null>
    isSupported: Ref<boolean>
}

/*
 * THE COMPOSABLE'S OWN REFS ARE HELD, not copied into new ones. Copying reads
 * their value once - at mount, before any registration has run - so the button
 * would never show a loading state and an error would never appear.
 */
const passkeys = shallowRef<Passkeys | null>(null)

const isLoading = computed(() => passkeys.value?.isLoading.value ?? false)
const error = computed(() => passkeys.value?.error.value ?? null)
const isSupported = computed(() => passkeys.value?.isSupported.value ?? false)

onMounted(async () => {
    try {
        const { usePasskeyRegister } = await import('@laravel/passkeys/vue')

        passkeys.value = usePasskeyRegister({
            onSuccess: () => {
                name.value = ''
                showForm.value = false
                emit('success')
            },
        }) as Passkeys
    } catch {
        /*
         * NOT AN ERROR MESSAGE. The application does not have passkeys
         * installed, which is a supported configuration - telling somebody
         * about a missing npm package on their security screen would be
         * reporting our own optionality as their problem.
         */
        passkeys.value = null
    }
})

const submit = async (event: Event) => {
    event.preventDefault()

    if (!name.value.trim() || passkeys.value === null) {
        return
    }

    await passkeys.value.register(name.value)
}

const cancel = () => {
    showForm.value = false
    name.value = ''
}
</script>

<template>
    <p v-if="!isSupported" class="text-muted-foreground text-sm font-normal">
        Passkeys are not supported in this browser.
    </p>

    <PkButton v-else-if="!showForm" variant="outline" @click="showForm = true">
        Add passkey
    </PkButton>

    <form v-else class="border-border bg-muted/50 space-y-4 rounded-lg border p-4" @submit="submit">
        <div class="grid gap-2">
            <label for="pk-passkey-name" class="text-sm font-medium"> Passkey name </label>

            <!--
                A PLAIN INPUT, styled with the same tokens the form fields use.
                The package ships no text-input primitive, and adding one for a
                single field would be a second control to keep in step with
                `FormFieldControl` for no gain.
            -->
            <input
                id="pk-passkey-name"
                v-model="name"
                type="text"
                autofocus
                placeholder="e.g. MacBook Pro, iPhone"
                class="border-input bg-background focus-visible:ring-ring h-9 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
            />

            <p class="text-muted-foreground text-xs font-normal">
                A name helps you identify this passkey later.
            </p>
        </div>

        <p v-if="error" class="text-destructive text-sm">{{ error }}</p>

        <div class="flex gap-2">
            <PkButton type="submit" :disabled="isLoading || !name.trim()">
                {{ isLoading ? 'Registering…' : 'Register passkey' }}
            </PkButton>

            <PkButton type="button" variant="ghost" @click="cancel"> Cancel </PkButton>
        </div>
    </form>
</template>
