<script setup lang="ts">
/**
 * The sign-in screen is the package's now.
 *
 * IT USED TO BE 189 LINES HERE AND 254 IN THE PACKAGE - two implementations of
 * one screen, which is how the two drift until a generated portal stops looking
 * like this application. What is left is the mapping: this app routes auth
 * through Fortify and generates its URLs with Wayfinder, and the packaged
 * screen takes those URLs as props because a package cannot know a consuming
 * app's route names.
 *
 * `layout: null` BECAUSE THE PACKAGED SCREEN BRINGS ITS OWN. `app.ts` applies
 * this application's AuthLayout to everything under `auth/`, and leaving that
 * in place would wrap the packaged layout in a second one - two headings, two
 * theme toggles. The same mistake the shell preview made once already.
 */
import { Login } from '@panelkit/inertia';
import { computed } from 'vue';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

const props = defineProps<{
    status?: string;
    canResetPassword: boolean;
    /** Provider key => human name, from the application's own Socialite config. */
    socialProviders?: Record<string, string>;
    /**
     * A seeded demo account, filled in ready to submit.
     *
     * NULL IN EVERY ENVIRONMENT BUT `local`, decided on the server - see
     * `App\Support\DemoLogin`.
     */
    prefill?: { email: string; password: string } | null;
    /** Fortify's passkey routes, when `laravel/passkeys` registered them. */
    passkeys?: { options: string; verify: string } | null;
}>();

/**
 * THE PACKAGE WANTS A LIST WITH URLS; this application has a key => label map
 * and its own redirect convention. Mapping it here keeps the convention where
 * it belongs - in the application that chose it.
 */
const providers = computed(() =>
    Object.entries(props.socialProviders ?? {}).map(([key, label]) => ({
        key,
        label,
        url: `/auth/${key}/redirect`,
    })),
);
</script>

<template>
    <Login
        :action="store.form().action"
        :forgot-url="canResetPassword ? request().url : null"
        :register-url="register().url"
        :status="status"
        :prefill="prefill"
        :passkeys="passkeys"
        :social-providers="providers"
    />
</template>
