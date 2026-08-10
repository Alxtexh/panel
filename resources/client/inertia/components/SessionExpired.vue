<script setup lang="ts">
/**
 * Session expiry, as an interruption rather than a destination.
 *
 * WHY THIS IS NOT A PAGE. A 419 is not a place you went - it is something that
 * happened to the click you just made. Navigating to a dedicated page throws
 * away the page you were actually on, which is the one thing you wanted to keep:
 * a half-filled form, a scroll position, an open filter. Then it asks you to
 * find your way back.
 *
 * A modal over the page you are already on says the same thing and loses none of
 * it. Reloading in place re-establishes the session and leaves you where you
 * were, so in the common case - you came back from lunch and clicked something -
 * the whole event is one dialog and a refresh.
 *
 * IT IS NOT DISMISSIBLE, and that is deliberate. Nothing behind it will work
 * until the page is reloaded: every subsequent request carries the same stale
 * token and fails the same way. Offering a Cancel would offer a broken panel.
 *
 * WHY IT RELOADS RATHER THAN SILENTLY RETRYING. The failed request might have
 * been a write, and replaying a write against a fresh session is how you charge
 * somebody twice. The reader is told what happened and the page starts clean.
 */
import { PkButton as Button } from '@alxtexh-enterprise/panel'
import { sessionExpired } from '../lib/sessionExpired'

/*
 * The flag lives in a module, set by the router hook in `app.ts` - see
 * `lib/sessionExpired.ts` for why it is not a prop.
 */
const open = sessionExpired

function reload() {
    // A hard reload, not an Inertia visit: the whole point is a new session and
    // a new CSRF token, and an Inertia visit would carry the stale one.
    window.location.reload()
}
</script>

<template>
    <!-- Teleported, so a stale-session dialog is never clipped by whatever
         overflow container the click happened inside. -->
    <Teleport to="body">
        <div
            v-if="open"
            class="fixed inset-0 z-[100] flex items-center justify-center p-4"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="session-expired-title"
        >
            <div class="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

            <div
                class="relative w-full max-w-sm rounded-xl border bg-card p-6 text-center shadow-lg"
            >
                <div
                    class="mx-auto flex size-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400"
                >
                    <svg
                        class="size-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                    </svg>
                </div>

                <h2 id="session-expired-title" class="mt-4 text-base font-semibold">
                    Your session expired
                </h2>

                <p class="mt-2 text-sm leading-relaxed text-muted-foreground">
                    You were away long enough that the page went stale. Reloading will pick things
                    back up - anything you had already saved is safe.
                </p>

                <Button class="mt-5 w-full" autofocus @click="reload">Reload the page</Button>
            </div>
        </div>
    </Teleport>
</template>
