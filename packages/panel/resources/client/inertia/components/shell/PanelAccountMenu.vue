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
import { computed } from 'vue'
import { PkDropdown } from '@alxtexh-enterprise/panel'
import type { User } from '../../types'
import UserInfo from './UserInfo.vue'

const props = withDefaults(
    defineProps<{
        user?: User | null
        /** Where sign-out posts. Null when nothing routes it - see above. */
        logout?: string | null
        /** An optional account or profile screen, when the panel has one. */
        accountUrl?: string | null
        /** The security screen, when the panel routes one. */
        securityUrl?: string | null
        /** The help centre, when the panel offers one. */
        helpUrl?: string | null
    }>(),
    { user: null, logout: null, accountUrl: null, securityUrl: null, helpUrl: null },
)

const accountUser = computed<User | null>(() => {
    if (!props.user) {
        return null
    }

    return {
        name: props.user.name ?? undefined,
        email: props.user.email ?? undefined,
        avatar: props.user.avatar ?? null,
    }
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
                <UserInfo v-if="accountUser" :user="accountUser" />
            </button>
        </template>

        <template #panel="{ close }">
            <div class="flex items-center gap-2 border-b px-3 py-2">
                <UserInfo v-if="accountUser" :user="accountUser" :show-email="true" />
            </div>

            <div class="p-1">
                <Link
                    v-if="accountUrl"
                    :href="accountUrl"
                    class="hover:bg-muted block rounded px-2 py-1.5 text-sm"
                    @click="close"
                >
                    Profile
                </Link>

                <!--
                    SECURITY IS ITS OWN ENTRY rather than something to find
                    inside Profile. Somebody opening this menu because they are
                    worried about their account should reach the passkeys, the
                    second factor and the signed-in devices in one click, not
                    two - and the two screens are separate precisely because
                    only one of them asks for the password.
                -->
                <Link
                    v-if="securityUrl"
                    :href="securityUrl"
                    class="hover:bg-muted block rounded px-2 py-1.5 text-sm"
                    @click="close"
                >
                    Security
                </Link>

                <Link
                    v-if="helpUrl"
                    :href="helpUrl"
                    class="hover:bg-muted block rounded px-2 py-1.5 text-sm"
                    @click="close"
                >
                    Help
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
