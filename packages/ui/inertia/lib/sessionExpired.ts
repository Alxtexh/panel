/*
 * MOVED FROM THE REFERENCE APP, unchanged.
 *
 * A 419 is the one failure every panel has and nobody builds until it bites:
 * the session goes stale while somebody is away, and the next click fails with
 * no explanation anyone outside the console can see.
 */
import { ref } from 'vue'

/**
 * Whether the session went stale under us.
 *
 * A module-level ref rather than a prop or a provide/inject, because the thing
 * that DETECTS this is a router hook in `app.ts` - outside the component tree
 * entirely - and the thing that SHOWS it is a component deep inside a layout.
 * Threading a signal between those two through props would mean every layout in
 * between had to know about session expiry.
 *
 * One-way and one-shot: nothing clears it, because nothing can. Every request
 * after a 419 carries the same stale token and fails the same way, so the only
 * exit is a reload.
 */
export const sessionExpired = ref(false)

export function notifySessionExpired(): void {
    sessionExpired.value = true
}

/**
 * Notice a stale session on ANY request the panel makes.
 *
 * WRAPPING `fetch` RATHER THAN LISTENING TO THE ROUTER, because a 419 does not
 * only happen on navigations. Inertia 3 has no `invalid` event, and even if it
 * did it would cover visits alone - the panel also talks to the server through
 * plain `fetch` for inline cell edits, record actions, bulk jobs and appearance
 * saves, and a session that expired mid-shift fails those in exactly the same
 * way. One wrapper at the transport layer catches all of it.
 *
 * IT NEVER SWALLOWS THE RESPONSE. The wrapper observes and passes through, so
 * every existing caller still sees the 419 and can do whatever it already did.
 * The modal is additive.
 *
 * NOT COVERED: the XHR-based upload path, which reports upload progress and so
 * cannot use `fetch`. It surfaces its own error, which is enough - an upload
 * failing during a dead session is not the case worth a second mechanism for.
 */
/**
 * A REAL 419, for reviewing the dialog.
 *
 * Session expiry is the one state with no page to preview, so the only honest
 * way to look at it is to provoke an actual 419 and let the transport hook
 * notice it exactly as it would in production. A button that set the flag
 * directly would demo the dialog while proving nothing about the detection.
 *
 * Wired as a document-level click on an anchor rather than through the nav
 * component, so the navigation tree does not need to learn about actions that
 * are not navigations.
 */
export function installSessionExpiryPreview(): void {
    /*
     * NOTHING TO HOOK ON A SERVER. Both of these install BROWSER globals, and
     * `app.ts` calls them at module scope - which the SSR pass evaluates too.
     * Guarding inside the function rather than at the call site keeps the
     * module safe no matter who imports it, which is the same shape
     * `readAppearance()` in @alxtexh-enterprise/panel already uses.
     */
    if (typeof window === 'undefined') {
        return
    }

    document.addEventListener('click', (event) => {
        const target = event.target as HTMLElement | null
        const link = target?.closest('a[href="#session-expired"]')

        if (!link) {
            return
        }

        event.preventDefault()

        const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

        void fetch('/screens/expire-session', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'X-XSRF-TOKEN': match ? decodeURIComponent(match[1]) : '',
            },
            credentials: 'same-origin',
        })
    })
}

export function watchForSessionExpiry(): void {
    if (typeof window === 'undefined') {
        return
    }

    const original = window.fetch.bind(window)

    window.fetch = async (...args) => {
        const response = await original(...args)

        if (response.status === 419) {
            notifySessionExpired()
        }

        return response
    }
}
