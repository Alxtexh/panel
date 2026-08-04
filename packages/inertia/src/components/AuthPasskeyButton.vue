<script setup lang="ts">
/**
 * Sign in with a passkey.
 *
 * NO NPM DEPENDENCY, DELIBERATELY. The reference app uses
 * `@laravel/passkeys/vue`, and requiring it here would make every consumer
 * install a package to render a button most of them will not show. WebAuthn is
 * a BROWSER API - `navigator.credentials.get()` - so the only thing a library
 * adds is the base64url encoding below, which is twenty lines.
 *
 * THE ROUTES COME FROM THE SERVER AND MAY BE NULL. `laravel/passkeys` registers
 * `passkey.login-options` and `passkey.login`; an installation without it has
 * neither, and `Passkeys::signInRoutes()` returns null - so this renders
 * nothing rather than offering a button that posts into the void.
 *
 * IT ALSO RENDERS NOTHING WHERE THE BROWSER CANNOT DO IT. `PublicKeyCredential`
 * is absent over plain HTTP and in older browsers, and a passkey button that
 * throws on click is worse than one that was never there.
 *
 * THE ERROR IS SHOWN, NOT SWALLOWED. A passkey that fails silently leaves
 * somebody clicking a button that appears to do nothing - and the commonest
 * failure is the most confusing one: no passkey registered for this site yet.
 */
import { computed, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        /** From `Passkeys::signInRoutes()`. Null when passkeys are not routed. */
        routes?: { options: string; verify: string } | null
        label?: string
        loadingLabel?: string
        /** Where to land when the server does not say. */
        fallback?: string
    }>(),
    {
        routes: null,
        label: 'Sign in with a passkey',
        loadingLabel: 'Authenticating…',
        fallback: '/',
    },
)

const loading = ref(false)
const error = ref('')

/**
 * WebAuthn is only offered over a secure context, which `localhost` counts as.
 * Checking the API rather than the protocol keeps this honest in both.
 */
const supported = typeof window !== 'undefined' && 'PublicKeyCredential' in window

const visible = computed(() => supported && props.routes !== null)

/** base64url → ArrayBuffer. The wire format WebAuthn wants as bytes. */
function toBuffer(value: string): ArrayBuffer {
    const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=')
    const binary = atob(padded)
    const bytes = new Uint8Array(binary.length)

    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i)
    }

    return bytes.buffer
}

/** ArrayBuffer → base64url. The reverse, for what the authenticator returns. */
function toBase64Url(buffer: ArrayBuffer): string {
    const bytes = new Uint8Array(buffer)
    let binary = ''

    for (const byte of bytes) {
        binary += String.fromCharCode(byte)
    }

    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function csrf(): string {
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    return match ? decodeURIComponent(match[1]) : ''
}

async function verify(): Promise<void> {
    if (!props.routes) {
        return
    }

    loading.value = true
    error.value = ''

    try {
        const optionsResponse = await fetch(props.routes.options, {
            headers: { Accept: 'application/json' },
            credentials: 'same-origin',
        })

        if (!optionsResponse.ok) {
            throw new Error('Could not start passkey sign-in.')
        }

        const payload = await optionsResponse.json()

        /*
         * `laravel/passkeys` NESTS THE OPTIONS UNDER `options`, and the WebAuthn
         * spec's own shape does not. Reading the top level got `undefined` for
         * the challenge and threw "Cannot read properties of undefined (reading
         * 'replace')" out of `toBuffer` - a message that names neither the field
         * nor the endpoint. Accepting both shapes costs one line.
         */
        const options = payload.options ?? payload

        if (typeof options?.challenge !== 'string') {
            throw new Error('The server did not return a passkey challenge.')
        }

        /*
         * THE CHALLENGE AND EVERY CREDENTIAL ID ARRIVE AS STRINGS and the API
         * demands ArrayBuffers. Passing the strings through is the mistake that
         * produces a bare "TypeError" from the browser with nothing naming the
         * field.
         */
        const publicKey: PublicKeyCredentialRequestOptions = {
            ...options,
            challenge: toBuffer(options.challenge),
            allowCredentials: (options.allowCredentials ?? []).map((credential: any) => ({
                ...credential,
                id: toBuffer(credential.id),
            })),
        }

        const credential = (await navigator.credentials.get({
            publicKey,
        })) as PublicKeyCredential | null

        if (credential === null) {
            throw new Error('No passkey was selected.')
        }

        const assertion = credential.response as AuthenticatorAssertionResponse

        const verified = await fetch(props.routes.verify, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': csrf(),
            },
            credentials: 'same-origin',
            /*
             * WRAPPED IN `credential`, which is what `PasskeyVerificationRequest`
             * validates - `credential.id`, `credential.rawId`, `credential.type`,
             * `credential.response`. Posting those at the top level fails
             * validation rather than the signature check, so the reader is told
             * the passkey was rejected when it was never read.
             */
            body: JSON.stringify({
                credential: {
                    id: credential.id,
                    rawId: toBase64Url(credential.rawId),
                    type: credential.type,
                    response: {
                        clientDataJSON: toBase64Url(assertion.clientDataJSON),
                        authenticatorData: toBase64Url(assertion.authenticatorData),
                        signature: toBase64Url(assertion.signature),
                        userHandle: assertion.userHandle ? toBase64Url(assertion.userHandle) : null,
                    },
                },
            }),
        })

        if (!verified.ok) {
            throw new Error('That passkey was not accepted.')
        }

        const body = await verified.json().catch(() => ({}))

        /*
         * A FULL VISIT, NOT AN INERTIA ONE. Signing in changes the session and
         * every shared prop with it; asking Inertia to swap the page would keep
         * the pre-auth props for the rest of the visit.
         */
        window.location.assign(body.redirect ?? props.fallback)
    } catch (e) {
        /*
         * ABORT IS SOMEBODY CHANGING THEIR MIND - closing the browser's own
         * dialog - and is not an error to report at them.
         */
        error.value =
            (e as Error)?.name === 'NotAllowedError'
                ? ''
                : ((e as Error).message ?? 'Passkey sign-in failed.')
    } finally {
        loading.value = false
    }
}

defineExpose({ verify })
</script>

<template>
    <div v-if="visible" class="grid gap-2">
        <button
            type="button"
            data-passkey-button
            class="border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-10 w-full items-center justify-center gap-2 rounded-md border text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
            :disabled="loading"
            @click="verify"
        >
            <svg
                class="size-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                :class="loading ? 'animate-spin' : ''"
            >
                <template v-if="loading">
                    <circle cx="12" cy="12" r="9" class="opacity-25" />
                    <path d="M21 12a9 9 0 0 0-9-9" />
                </template>
                <template v-else>
                    <circle cx="9" cy="9" r="4" />
                    <path d="M14.5 12.5 21 19v2h-3v-2h-2v-2h-2l-1.2-1.2" />
                </template>
            </svg>

            {{ loading ? props.loadingLabel : props.label }}
        </button>

        <p v-if="error" class="text-destructive text-center text-sm">{{ error }}</p>
    </div>
</template>
