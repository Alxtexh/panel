<script setup lang="ts">
/**
 * Enrol a passkey.
 *
 * WHY THIS IS IN THE PACKAGE NOW. It worked perfectly well in the reference app
 * and had done for a long time - which was the problem: a fresh
 * `composer require panelkit/panel` produced a panel with no passkey support and
 * nothing to suggest that adding it was a solved problem rather than a project.
 * The capability was never missing; it was only ever in the wrong place.
 *
 * `@laravel/passkeys/vue` IS A PEER DEPENDENCY, not a bundled one. It is the
 * browser half of Fortify's own WebAuthn support, and PanelKit does not require
 * Fortify - an installation on a different auth stack should not be made to
 * carry it. Applications that have it get this component working; applications
 * that do not never render it, because the server says `available` is false.
 *
 * `isSupported` IS ANSWERED BEFORE THE BUTTON IS DRAWN. Passkeys need a platform
 * authenticator, and a browser without one produces a registration dialog that
 * fails after the user has committed to it. Saying so up front is a sentence;
 * finding out afterwards is a support ticket.
 */
import { usePasskeyRegister } from '@laravel/passkeys/vue'
import { ref } from 'vue'
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

const { register, isLoading, error, isSupported } = usePasskeyRegister({
    onSuccess: () => {
        name.value = ''
        showForm.value = false
        emit('success')
    },
})

const submit = async (event: Event) => {
    event.preventDefault()

    if (!name.value.trim()) {
        return
    }

    await register(name.value)
}

const cancel = () => {
    showForm.value = false
    name.value = ''
}
</script>

<template>
    <p v-if="!isSupported" class="text-muted-foreground text-sm">
        Passkeys are not supported in this browser.
    </p>

    <PkButton v-else-if="!showForm" variant="outline" @click="showForm = true">
        Add passkey
    </PkButton>

    <form
        v-else
        class="border-border bg-muted/50 space-y-4 rounded-lg border p-4"
        @submit="submit"
    >
        <div class="grid gap-2">
            <label for="pk-passkey-name" class="text-sm font-medium">
                Passkey name
            </label>

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

            <p class="text-muted-foreground text-xs">
                A name helps you identify this passkey later.
            </p>
        </div>

        <p v-if="error" class="text-destructive text-sm">{{ error }}</p>

        <div class="flex gap-2">
            <PkButton type="submit" :disabled="isLoading || !name.trim()">
                {{ isLoading ? 'Registering…' : 'Register passkey' }}
            </PkButton>

            <PkButton type="button" variant="ghost" @click="cancel">
                Cancel
            </PkButton>
        </div>
    </form>
</template>
