<script setup lang="ts">
/**
 * Every panel error, rendered by ONE page.
 *
 * The exception handler passes a status; the copy for each one lives here in a
 * single map rather than in five near-identical page components. Five files
 * drift - one gains a "go back" button, another loses it, and the 500 is the
 * one nobody revisits because it is the hardest to trigger on purpose.
 *
 * THE COPY IS DELIBERATELY UNHELPFUL ABOUT CAUSES. A 403 that explains what
 * permission was missing tells whoever probed for it exactly what to ask for
 * next; a 500 that names the failing subsystem is a map of the internals. What
 * every message here does instead is say what the reader can DO.
 */
import { computed } from 'vue'
import ErrorScreen from './ErrorScreen.vue'

const props = withDefaults(
    defineProps<{
        status: number
        /** Where "back to the panel" goes. */
        homeHref?: string
        /** Where a stale session sends somebody to start again. */
        loginHref?: string
        /**
         * What the button back to the panel says.
         *
         * A PROP BECAUSE THE WORD IS THE APPLICATION'S. "Back to the panel" is
         * a default that is never wrong; an installation whose home screen is
         * called something ("Back to dashboard") should say that instead.
         */
        homeLabel?: string
        /**
         * COPY THIS PORTAL CHOSE FOR THIS STATUS - `Panel::registerErrorNotification()`.
         *
         * The packaged wording below is a sensible default for every
         * installation and the right words for none in particular. 419 is the
         * case that needed it: "Page expired" describes a CSRF token, and this
         * panel now ends sessions at an absolute ceiling on purpose, so an
         * operator mid-form meets that screen deliberately.
         */
        title?: string | null
        body?: string | null
    }>(),
    { homeHref: '/', loginHref: '/login', homeLabel: 'Back to the panel' },
)

/** Status → what to say. Anything unlisted falls back to the generic pair. */
const COPY: Record<number, { title: string; message: string; canGoBack?: boolean }> = {
    403: {
        title: 'You do not have access to this',
        message:
            'Your account is signed in, but it is not permitted to open this page. If you think it should be, ask whoever administers your organisation.',
    },
    404: {
        title: 'That page does not exist',
        message: 'The link may be out of date, or the record it pointed at may have been removed.',
    },
    429: {
        title: 'Too many requests',
        message: 'Give it a moment and try again.',
    },
    500: {
        title: 'Something went wrong on our side',
        message:
            'This one is not your fault. The error has been recorded; trying again in a minute is usually enough.',
    },
    503: {
        title: 'The panel is down for maintenance',
        message: 'It will be back shortly. Nothing you have saved is affected.',
        canGoBack: false,
    },
}

/**
 * THE PORTAL'S OWN WORDS WIN, then the packaged pair for this status, then the
 * generic one.
 *
 * A TITLE WITHOUT A BODY KEEPS THE PACKAGED MESSAGE, rather than blanking it -
 * an installation renaming a heading has not thereby asked for the explanation
 * underneath it to disappear, and a bare heading on an error screen is the
 * least helpful thing on it.
 */
const copy = computed(() => {
    const packaged = COPY[props.status] ?? {
        title: 'Something went wrong',
        message: 'The page could not be shown. Trying again is usually enough.',
    }

    return {
        ...packaged,
        title: props.title ?? packaged.title,
        message: props.body ?? packaged.message,
    }
})
</script>

<template>
    <ErrorScreen
        :status="status"
        :title="copy.title"
        :message="copy.message"
        :can-go-back="copy.canGoBack ?? true"
        :home-href="status === 419 ? props.loginHref : props.homeHref"
        :home-label="status === 419 ? 'Sign in again' : props.homeLabel"
    />
</template>
