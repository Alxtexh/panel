<script setup lang="ts">
/**
 * Who is signed in, and the way out.
 *
 * SIGN OUT IS A FORM, NOT A LINK, and that is not pedantry. A GET that ends a
 * session is followed by anything that prefetches links - a browser, a
 * scanner, a chat client unfurling a URL - and the symptom is somebody being
 * logged out at random with nothing in the log to explain it.
 *
 * THE URL COMES FROM THE SERVER. `--auth` names the route `{panel}.logout`, an
 * application on Fortify has a plain `logout`, and a portal that scaffolded
 * neither has none - so `SharePanelProps` resolves it and this renders no
 * sign-out item when it is null. Guessing `/logout` would put a 404 behind the
 * one action somebody takes when they want to be safe.
 */
import { Link, router } from '@inertiajs/vue3'
import { PkDropdown } from '@panelkit/panel'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        user?: { name?: string | null; email?: string | null } | null
        /** Where sign-out posts. Null when nothing routes it - see above. */
        logout?: string | null
        /** An optional account or profile screen, when the panel has one. */
        accountUrl?: string | null
    }>(),
    { user: null, logout: null, accountUrl: null },
)

/**
 * Initials, from whatever the account actually has.
 *
 * A PANEL USER MAY HAVE NO NAME - `panel:make-user` asks for one, an imported
 * account may not - so the email's first character stands in, and a question
 * mark stands in for that. An empty avatar reads as a rendering fault.
 */
const initials = computed<string>(() => {
    const name = props.user?.name?.trim()

    if (name) {
        const parts = name.split(/\s+/)

        return (parts[0]![0]! + (parts.length > 1 ? parts.at(-1)![0]! : '')).toUpperCase()
    }

    return (props.user?.email?.[0] ?? '?').toUpperCase()
})

/**
 * CLOSING FIRST IS NOT COSMETIC. Inertia swaps the page without unmounting
 * this component, so a menu left open stays open over whatever the sign-out
 * redirected to - which, on the login screen, is a floating account menu for
 * somebody who is no longer signed in.
 */
function signOut(close: () => void): void {
    close()

    if (props.logout) {
        router.post(props.logout)
    }
}
</script>

<template>
    <PkDropdown v-if="user" align="end">
        <template #trigger="{ open }">
            <button
                type="button"
                class="hover:bg-muted flex items-center gap-2 rounded-md p-1 pr-2 transition-colors"
                :aria-expanded="open"
                aria-haspopup="menu"
            >
                <span
                    class="bg-muted flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                    aria-hidden="true"
                >
                    {{ initials }}
                </span>

                <span class="hidden max-w-32 truncate text-sm sm:block">
                    {{ user.name ?? user.email }}
                </span>
            </button>
        </template>

        <template #panel="{ close }">
            <div class="border-b px-3 py-2">
                <p class="truncate text-sm font-medium">{{ user.name ?? 'Signed in' }}</p>
                <p v-if="user.email" class="text-muted-foreground truncate text-xs">
                    {{ user.email }}
                </p>
            </div>

            <div class="p-1">
                <Link
                    v-if="accountUrl"
                    :href="accountUrl"
                    class="hover:bg-muted block rounded px-2 py-1.5 text-sm"
                    @click="close"
                >
                    Account
                </Link>

                <button
                    v-if="logout"
                    type="button"
                    class="hover:bg-muted block w-full rounded px-2 py-1.5 text-left text-sm"
                    @click="signOut(close)"
                >
                    Sign out
                </button>
            </div>
        </template>
    </PkDropdown>
</template>
