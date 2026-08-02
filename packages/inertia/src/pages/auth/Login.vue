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
import AuthField from '../../components/AuthField.vue'
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
}>()
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

                <label class="flex items-center gap-3 text-sm">
                    <input
                        type="checkbox"
                        name="remember"
                        value="1"
                        class="size-4 rounded border-input accent-primary"
                    />
                    Remember me
                </label>

                <Button type="submit" class="w-full" :disabled="processing">
                    {{ processing ? 'Signing in…' : 'Log in' }}
                </Button>
            </div>
        </Form>
    </AuthLayout>
</template>
