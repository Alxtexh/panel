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
import { Login } from '@alxtexh-enterprise/panel/inertia';
import { computed } from 'vue';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';

type SocialProvider = {
    key: string;
    label: string;
    url: string;
    configured?: boolean;
    hint?: string | null;
};

const props = defineProps<{
    status?: string;
    canResetPassword: boolean;
    /**
     * List from the server (preferred), or a legacy key => label map.
     */
    socialProviders?: SocialProvider[] | Record<string, string>;
    /**
     * A seeded demo account, filled in ready to submit.
     *
     * NULL IN EVERY ENVIRONMENT BUT `local`, decided on the server - see
     * `App\Support\DemoLogin`.
     */
    prefill?: { email: string; password: string } | null;
    /** Fortify's passkey routes, when `laravel/passkeys` registered them. */
    passkeys?: { options: string; verify: string } | null;
    turnstileSiteKey?: string | null;
    magicLinkUrl?: string | null;
}>();

/**
 * THE PACKAGE WANTS A LIST WITH URLS. Accept either the new list shape or the
 * older key => label map so a stale publish does not blank the buttons.
 */
const providers = computed((): SocialProvider[] => {
    const raw = props.socialProviders;

    if (Array.isArray(raw)) {
        return raw.map((provider) => ({
            ...provider,
            url: provider.url || `/auth/${provider.key}/redirect`,
        }));
    }

    return Object.entries(raw ?? {}).map(([key, label]) => ({
        key,
        label,
        url: `/auth/${key}/redirect`,
        configured: true,
    }));
});
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
        :turnstile-site-key="turnstileSiteKey"
        :magic-link-url="magicLinkUrl"
    />
</template>
