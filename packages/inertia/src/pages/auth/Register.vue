<script setup lang="ts">
/**
 * Create an account.
 *
 * MOVED FROM THE REFERENCE APP, not redrawn. The markup below is that file's,
 * with three substitutions and no third: its `@/components/ui/*` imports become
 * this package's primitives, its `@/routes/*` helpers become props the server
 * sends, and its Turnstile field becomes the packaged one. Everything a person
 * sees is the same, which is the whole point of moving rather than rewriting.
 *
 * ROUTED ONLY WHERE A PANEL ASKS FOR IT. A staff console should not offer
 * self-registration, so `PanelAuthController` mounts this only when
 * `panel.auth.{id}.register` names somewhere - and the sign-in screen links to
 * it on the same condition.
 */
import { Form, Head, Link } from '@inertiajs/vue3'
import { PkButton as Button, PkSpinner as Spinner } from '@panelkit/ui'
import AuthField from '../../components/AuthField.vue'
import AuthTurnstile from '../../components/AuthTurnstile.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where to POST. */
    action: string
    /** Back to sign-in. */
    loginUrl: string
    /**
     * The browser's password-generation hint, from the panel's own policy.
     *
     * A STRING THE SERVER COMPOSES. Safari and iOS read `passwordrules` when
     * offering to generate one, and a generated password that the server then
     * rejects is the most annoying possible first impression.
     */
    passwordRules?: string
    turnstileSiteKey?: string | null
    heading?: string
    description?: string
}>()
</script>

<template>
    <AuthLayout
        :title="props.heading ?? 'Create an account'"
        :description="props.description ?? 'Enter your details below to create your account'"
    >
        <Head title="Register" />

        <Form
            :action="props.action"
            method="post"
            :reset-on-success="['password', 'password_confirmation']"
            v-slot="{ errors, processing }"
            class="flex flex-col gap-6"
        >
            <div class="grid gap-6">
                <AuthField
                    id="name"
                    name="name"
                    label="Name"
                    autocomplete="name"
                    placeholder="Full name"
                    required
                    autofocus
                    :error="errors.name"
                />

                <AuthField
                    id="email"
                    name="email"
                    type="email"
                    label="Email address"
                    autocomplete="email"
                    placeholder="email@example.com"
                    required
                    :error="errors.email"
                />

                <AuthField
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    autocomplete="new-password"
                    placeholder="Password"
                    required
                    :password-rules="props.passwordRules"
                    :error="errors.password"
                />

                <AuthField
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    label="Confirm password"
                    autocomplete="new-password"
                    placeholder="Confirm password"
                    required
                    :password-rules="props.passwordRules"
                    :error="errors.password_confirmation"
                />

                <!--
                    Renders nothing when Turnstile is off; the server refuses
                    without a token either way.
                -->
                <AuthTurnstile :site-key="props.turnstileSiteKey" />

                <Button
                    type="submit"
                    class="mt-2 w-full"
                    :disabled="processing"
                    data-test="register-user-button"
                >
                    <Spinner v-if="processing" />
                    Create account
                </Button>
            </div>

            <div class="text-muted-foreground text-center text-sm">
                Already have an account?
                <Link :href="props.loginUrl" class="underline underline-offset-4">Log in</Link>
            </div>
        </Form>
    </AuthLayout>
</template>
