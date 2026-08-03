<script setup lang="ts">
/**
 * The PACKAGED sign-in screen, rendered so a browser test can prove it draws.
 *
 * WHY IT IS NOT JUST `auth/Login`. This application HAS a login screen of its
 * own at that name, and Inertia resolves by name - so a test that visited the
 * demo's sign-in page and asserted "the packaged login works" would pass
 * without the package being involved at all. That is the same wrong-reason pass
 * the shell fixture and the palette test each hit once; naming the fixture
 * differently is what makes the assertion mean what it says.
 *
 * UNDER `errors/` for the reason the shell preview gives: it is the one prefix
 * this application leaves layout-free, so the packaged auth layout is not
 * wrapped in the demo's.
 *
 * THE PROPS ARE THE SERVER'S SHAPE, hand-supplied here. What is under test is
 * the SCREEN - the reveal toggle, the provider buttons, the passkey slot - and
 * `PanelAuthTest` already covers which of them the controller decides to send.
 */
import { Login } from '@panelkit/inertia';
</script>

<template>
    <Login
        action="/login"
        forgot-url="/forgot-password"
        register-url="/register"
        :social-providers="[
            { key: 'google', label: 'Google', url: '/auth/google/redirect' },
        ]"
    >
        <!--
            THE PASSKEY SLOT, filled by the application - which is the whole
            point of it being a slot. The package draws the placement and the
            divider; the WebAuthn client belongs to whichever package the
            application chose.
        -->
        <template #passkey>
            <button
                type="button"
                data-passkey-button
                class="inline-flex h-10 w-full items-center justify-center rounded-md border bg-background text-sm font-medium"
            >
                Sign in with a passkey
            </button>
        </template>
    </Login>
</template>
