<script setup lang="ts">
/**
 * "Confirm it is you" before something consequential.
 *
 * MOVED FROM THE REFERENCE APP. Laravel's password-confirmation wall, which
 * guards the screens that change security itself - a new passkey, a disabled
 * second factor, an API token.
 *
 * THE PASSKEY BUTTON IS OFFERED HERE TOO, on the same terms as the sign-in
 * screen: somebody who signed in with a passkey has no password to type, and a
 * wall that only accepts one is a wall they cannot pass.
 */
import { Form, Head } from '@inertiajs/vue3'
import { PkButton as Button, PkSpinner as Spinner } from '@panelkit/ui'
import AuthField from '../../components/AuthField.vue'
import AuthPasskeyButton from '../../components/AuthPasskeyButton.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where the password posts. */
    action: string
    /** Passkey confirmation routes, when routed. See `Passkeys::confirmRoutes()`. */
    passkeys?: { options: string; verify: string } | null
    heading?: string
    description?: string
}>()
</script>

<template>
    <AuthLayout
        :title="props.heading ?? 'Confirm your password'"
        :description="
            props.description ??
            'This is a secure area of the application. Please confirm your password before continuing.'
        "
    >
        <Head title="Confirm password" />

        <div v-if="props.passkeys" class="mb-6">
            <AuthPasskeyButton :routes="props.passkeys" label="Confirm with a passkey" />
        </div>

        <Form
            :action="props.action"
            method="post"
            v-slot="{ errors, processing }"
            class="space-y-6"
        >
            <AuthField
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                autocomplete="current-password"
                required
                autofocus
                :error="errors.password"
            />

            <Button
                type="submit"
                class="w-full"
                :disabled="processing"
                data-test="confirm-password-button"
            >
                <Spinner v-if="processing" />
                Confirm password
            </Button>
        </Form>
    </AuthLayout>
</template>
