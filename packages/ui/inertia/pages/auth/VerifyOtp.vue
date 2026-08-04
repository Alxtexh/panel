<script setup lang="ts">
/**
 * A one-time code, emailed or texted.
 *
 * MOVED FROM THE REFERENCE APP. Distinct from `TwoFactorChallenge`, which is an
 * authenticator app's rolling code: this is a code the panel SENT, so it can be
 * resent, and saying when it expires is the difference between waiting and
 * asking for another one.
 */
import { Form, Head, Link } from '@inertiajs/vue3'
import { PkButton as Button, PkOtpInput, PkSpinner as Spinner } from '@panelkit/panel'
import { ref } from 'vue'
import AuthInputError from '../../components/AuthInputError.vue'
import AuthTurnstile from '../../components/AuthTurnstile.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where the code posts. */
    action: string
    /** Where "send another" posts, or null when resending is not offered. */
    resendUrl?: string | null
    /** Where the code went, for the subheading - an address or a masked number. */
    sentTo?: string | null
    status?: string | null
    length?: number
    /** Turnstile's public key, or null when it is off. See `AuthTurnstile`. */
    turnstileSiteKey?: string | null
}>()

const code = ref('')
</script>

<template>
    <AuthLayout
        title="Verify your code"
        :description="
            props.sentTo
                ? `Enter the code we sent to ${props.sentTo}.`
                : 'Enter the code we just sent you.'
        "
    >
        <Head title="Verify your code" />

        <div v-if="props.status" class="mb-4 text-center text-sm font-medium text-green-600">
            {{ props.status }}
        </div>

        <Form
            :action="props.action"
            method="post"
            class="space-y-6"
            reset-on-error
            @error="code = ''"
            v-slot="{ errors, processing }"
        >
            <input type="hidden" name="code" :value="code" />

            <div class="flex flex-col items-center justify-center space-y-3 text-center">
                <div class="flex w-full items-center justify-center">
                    <PkOtpInput
                        id="otp"
                        v-model="code"
                        :length="props.length ?? 6"
                        :disabled="processing"
                        autofocus
                    />
                </div>

                <AuthInputError :message="errors.code" />
            </div>

            <!--
                Renders nothing when Turnstile is off; the server refuses
                without a token either way. A code screen is worth protecting -
                it is the one auth form somebody can brute-force six digits at.
            -->
            <AuthTurnstile :site-key="props.turnstileSiteKey" />

            <Button type="submit" class="w-full" :disabled="processing">
                <Spinner v-if="processing" />
                Verify
            </Button>
        </Form>

        <Form
            v-if="props.resendUrl"
            :action="props.resendUrl"
            method="post"
            class="mt-4 text-center"
            v-slot="{ processing }"
        >
            <button
                type="submit"
                class="text-muted-foreground hover:text-foreground text-sm underline underline-offset-4"
                :disabled="processing"
            >
                Send another code
            </button>
        </Form>
    </AuthLayout>
</template>
