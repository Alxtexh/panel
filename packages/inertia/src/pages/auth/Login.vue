<script setup lang="ts">
/**
 * Sign in to a panel.
 *
 * THE PACKAGE SHIPPED NONE OF THIS UNTIL v0.5.0, and the omission was
 * defensible exactly once: Breeze, Jetstream and Fortify all supply a login
 * screen, and a package that registered a second at `/login` would fight them.
 *
 * IT STOPPED BEING DEFENSIBLE AT THE SECOND PORTAL. `make:panel reseller`
 * produces a panel with its own guard on its own path, and a starter kit gives
 * you exactly one sign-in screen wired to `web` - so every generated portal
 * meant hand-writing a login controller, and the first panel page anybody
 * visited died with `Route [login] not defined`, an error naming nothing you
 * can act on.
 *
 * SO THIS IS PER PANEL AND NEVER AT `/login`. The route lives under the panel's
 * own prefix; see `PanelAuthController` and the `--auth` flag.
 *
 * THE FORM POSTS TO ITS OWN ADDRESS rather than to a named route, because a
 * generated portal's route names are the application's and this component is
 * the package's. The server sends `action`; nothing here guesses it.
 */
import { Form, Head, Link } from '@inertiajs/vue3'
import { PkButton as Button } from '@panelkit/ui'
import { computed } from 'vue'
import AuthField from '../../components/AuthField.vue'
import AuthPasskeyButton from '../../components/AuthPasskeyButton.vue'
import AuthTurnstile from '../../components/AuthTurnstile.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where to POST. Supplied by the server - see the note above. */
    action: string
    /** Where "Forgot password?" goes, or null when resets are not routed. */
    forgotUrl?: string | null
    /** A one-off message, e.g. "your password has been reset". */
    status?: string | null
    /** Heading and subheading, so an installation can reword without a fork. */
    heading?: string
    description?: string
    /**
     * A seeded account filled in ready to submit.
     *
     * INTENDED TO BE NULL IN EVERY ENVIRONMENT THAT MATTERS, and decided on the
     * SERVER rather than here - a component cannot be trusted to know whether
     * it is in production. See the controller.
     */
    prefill?: { email: string; password: string } | null
    /**
     * Sign-in providers this installation has, as label and URL.
     *
     * EMPTY IS THE NORMAL CASE and renders nothing at all - not a divider, not
     * an empty row. An installation without social sign-in should look like one
     * that never offered it.
     *
     * THE URL IS THE APPLICATION'S, not guessed here. Where a provider redirect
     * lives depends on how that application wired Socialite, and a package that
     * assumed `/auth/{key}/redirect` would send half its consumers to a 404.
     */
    socialProviders?: { key: string; label: string; url: string }[]
    /** Where "Sign up" goes, or null when registration is not offered. */
    registerUrl?: string | null
    /** Turnstile's public key, or null when it is off. See `AuthTurnstile`. */
    turnstileSiteKey?: string | null
    /**
     * Where passkey sign-in asks and posts, or null when it is not routed.
     *
     * FROM `Passkeys::signInRoutes()`. This was a SLOT and nothing filled it, so
     * a fresh install had no passkey button at all - which is not "optional", it
     * is absent. The button ships now and hides itself when the routes are not
     * there or the browser cannot do WebAuthn.
     */
    passkeys?: { options: string; verify: string } | null
}>()

/*
 * THE PASSKEY BUTTON SHIPS. It was a slot, on the reasoning that a WebAuthn
 * client belongs to whichever package the application chose - and the result
 * was a fresh install with no passkey at all, which is not "optional", it is
 * absent. `AuthPasskeyButton` uses the BROWSER's WebAuthn API against the
 * routes the server reports, so it needs no npm dependency and disappears where
 * those routes do not exist. The slot remains for an application that already
 * has its own.
 */
const providers = computed(() => props.socialProviders ?? [])
</script>

<template>
    <AuthLayout
        :title="props.heading ?? 'Log in to your account'"
        :description="props.description ?? 'Enter your email and password below to log in'"
    >
        <Head title="Log in" />

        <div
            v-if="props.status"
            class="mb-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
            {{ props.status }}
        </div>

        <!--
            ABOVE THE FORM, because a passkey is the faster path for somebody
            who has one, and burying it under the password field means they type
            the password anyway.

            THE SLOT IS AN OVERRIDE, NOT THE MECHANISM. An application already
            using `@laravel/passkeys/vue` passes its own button; everybody else
            gets the packaged one, which needs no npm dependency at all.
        -->
        <div v-if="$slots.passkey || props.passkeys">
            <slot name="passkey">
                <AuthPasskeyButton :routes="props.passkeys" :fallback="props.action" />
            </slot>

            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <span class="bg-border h-px w-full" />
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                    <span class="bg-background text-muted-foreground px-2">
                        Or continue with email
                    </span>
                </div>
            </div>
        </div>

        <Form
            :action="props.action"
            method="post"
            :reset-on-success="['password']"
            v-slot="{ errors, processing }"
            class="flex flex-col gap-6"
        >
            <div class="grid gap-6">
                <AuthField
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    autocomplete="email"
                    placeholder="email@example.com"
                    required
                    autofocus
                    :error="errors.email"
                    :default-value="props.prefill?.email"
                />

                <AuthField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    autocomplete="current-password"
                    placeholder="Password"
                    required
                    :error="errors.password"
                    :default-value="props.prefill?.password"
                >
                    <template #labelSuffix>
                        <Link
                            v-if="props.forgotUrl"
                            :href="props.forgotUrl"
                            class="text-sm underline-offset-4 hover:underline"
                        >
                            Forgot password?
                        </Link>
                    </template>
                </AuthField>

                <!--
                    SAID OUT LOUD, because a form that has quietly filled in an
                    administrator's password should never be mistaken for one
                    the browser remembered. It names the account, so the person
                    about to click Log in knows who they are about to be.
                -->
                <p
                    v-if="props.prefill"
                    class="text-muted-foreground rounded-md border border-dashed px-3 py-2 text-xs"
                >
                    Local development: filled in with the seeded account
                    <span class="font-medium">{{ props.prefill.email }}</span
                    >.
                </p>

                <label class="flex items-center gap-3 text-sm">
                    <input
                        type="checkbox"
                        name="remember"
                        value="1"
                        class="border-input accent-primary size-4 rounded"
                    />
                    Remember me
                </label>

                <!--
                    Renders nothing when Turnstile is off; the server refuses
                    without a token either way.
                -->
                <AuthTurnstile :site-key="props.turnstileSiteKey" />

                <Button
                    type="submit"
                    class="w-full"
                    :disabled="processing"
                    data-test="login-button"
                >
                    <!--
                        A SPINNER RATHER THAN ONLY A WORD. On a slow connection
                        the gap between clicking and the next screen is seconds,
                        and a button that merely changes its label reads as one
                        that did not register the click - so people click again.
                    -->
                    <svg
                        v-if="processing"
                        class="mr-2 size-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <circle cx="12" cy="12" r="9" class="opacity-25" />
                        <path d="M21 12a9 9 0 0 0-9-9" stroke-linecap="round" />
                    </svg>
                    {{ processing ? 'Signing in…' : 'Log in' }}
                </Button>
            </div>

            <!--
                THE PROVIDER BUTTONS SIT AFTER THE PASSWORD FORM, not before it.
                Putting them first pushes the field most people use below a row
                of alternatives, and an operator signing in to a work panel is
                overwhelmingly using their password.
            -->
            <div v-if="providers.length > 0" class="flex flex-col gap-3">
                <div class="flex items-center gap-3">
                    <span class="bg-border h-px flex-1" />
                    <span class="text-muted-foreground text-xs">or continue with</span>
                    <span class="bg-border h-px flex-1" />
                </div>

                <div class="grid gap-2" :class="providers.length > 1 ? 'sm:grid-cols-2' : ''">
                    <!--
                        A LINK, NOT A FETCH. The provider redirect leaves the
                        application entirely, so this has to be a real
                        navigation; an XHR would be answered with an opaque
                        redirect the page cannot follow.
                    -->
                    <a
                        v-for="provider in providers"
                        :key="provider.key"
                        :href="provider.url"
                        class="bg-background hover:bg-accent inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors"
                    >
                        {{ provider.label }}
                    </a>
                </div>
            </div>

            <div v-if="props.registerUrl" class="text-muted-foreground text-center text-sm">
                Don't have an account?
                <Link :href="props.registerUrl" class="underline-offset-4 hover:underline">
                    Sign up
                </Link>
            </div>
        </Form>
    </AuthLayout>
</template>
