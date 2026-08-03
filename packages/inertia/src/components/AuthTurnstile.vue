<script setup lang="ts">
/**
 * The Cloudflare Turnstile widget, as a form field.
 *
 * IT RENDERS NOTHING WHEN TURNSTILE IS OFF, which is what lets every auth form
 * include it unconditionally. The alternative - a `v-if` at each call site - is
 * several places to remember, and the one that gets forgotten is an unprotected
 * door that looks exactly like the others.
 *
 * THE SITE KEY COMES FROM THE SERVER, per screen, rather than from a shared page
 * prop. `PanelAuthController` sends it because `Turnstile::enabled()` and the
 * secret both live in config the client cannot see - and a sign-in screen is
 * rendered before there is a session to share anything on.
 *
 * THE SCRIPT LOADS ONCE, LAZILY. Cloudflare's loader is fetched the first time a
 * form that needs it mounts, not on every page of the panel: a panel is mostly
 * pages behind the login, and none of them should pay for a third-party script
 * they will never use.
 *
 * ITS ABSENCE IS NOT A PASS. If the script fails to load the field stays empty,
 * no token is produced, and the server refuses - see `Turnstile::verify`. That
 * is the correct direction to fail: a blocked script means somebody cannot sign
 * in, not that anybody can.
 *
 * A HIDDEN INPUT RATHER THAN A MODEL, unlike the reference app's version. These
 * screens post an ordinary `<Form>` to a URL the server chose, with no state
 * object to bind to - so the token has to travel as a named field, which is what
 * the middleware reads anyway.
 */
import { onMounted, ref } from 'vue'

const props = withDefaults(
    defineProps<{
        /** Null or empty when Turnstile is off, which renders nothing at all. */
        siteKey?: string | null
        /** The field name the verifying middleware reads. */
        name?: string
    }>(),
    { siteKey: null, name: 'cf-turnstile-response' },
)

const container = ref<HTMLElement | null>(null)
const token = ref('')

const SCRIPT_ID = 'cf-turnstile-script'

function loadScript(): Promise<void> {
    return new Promise((resolve, reject) => {
        if ((window as any).turnstile) {
            resolve()

            return
        }

        const existing = document.getElementById(SCRIPT_ID)

        if (existing) {
            existing.addEventListener('load', () => resolve())
            existing.addEventListener('error', () => reject())

            return
        }

        const script = document.createElement('script')

        script.id = SCRIPT_ID
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.defer = true
        script.onload = () => resolve()
        script.onerror = () => reject()

        document.head.appendChild(script)
    })
}

onMounted(async () => {
    if (!props.siteKey || !container.value) {
        return
    }

    try {
        await loadScript()
    } catch {
        // Deliberately silent to the visitor and fatal to the submission: the
        // server refuses without a token, which is the honest outcome.
        return
    }

    ;(window as any).turnstile?.render(container.value, {
        sitekey: props.siteKey,
        callback: (value: string) => (token.value = value),
        /*
         * A TOKEN IS SINGLE-USE AND EXPIRES. Clearing the value when either
         * happens means a stale token is never submitted - the server would
         * refuse it, and the visitor would see "please verify" beside a widget
         * showing a green tick, which is the most confusing possible failure.
         */
        'expired-callback': () => (token.value = ''),
        'error-callback': () => (token.value = ''),
    })
})
</script>

<template>
    <div v-if="props.siteKey" class="my-2">
        <div ref="container" />
        <input type="hidden" :name="props.name" :value="token" />
    </div>
</template>
