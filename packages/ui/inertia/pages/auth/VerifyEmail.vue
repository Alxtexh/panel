<script setup lang="ts">
/**
 * "We emailed you a link."
 *
 * MOVED FROM THE REFERENCE APP. The only screen here with no input at all - it
 * exists so somebody who cannot get in has something to do other than guess.
 *
 * SIGNING OUT IS THE SECOND ACTION, and it matters more than it looks: the
 * commonest reason for being stuck here is having registered with the wrong
 * address, and without a way out the only remedy is clearing cookies.
 */
import { Form, Head } from '@inertiajs/vue3'
import { PkButton as Button, PkSpinner as Spinner } from '@panelkit/panel'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where "resend" posts. */
    action: string
    /** Where "log out" posts. */
    logoutUrl?: string | null
    status?: string | null
    heading?: string
    description?: string
}>()
</script>

<template>
    <AuthLayout
        :title="props.heading ?? 'Email verification'"
        :description="
            props.description ??
            'Please verify your email address by clicking on the link we just emailed to you.'
        "
    >
        <Head title="Email verification" />

        <div
            v-if="props.status === 'verification-link-sent'"
            class="mb-4 text-center text-sm font-medium text-green-600"
        >
            A new verification link has been sent to the email address you provided during
            registration.
        </div>

        <Form
            :action="props.action"
            method="post"
            class="space-y-6 text-center"
            v-slot="{ processing }"
        >
            <Button :disabled="processing" variant="secondary">
                <Spinner v-if="processing" />
                Resend verification email
            </Button>
        </Form>

        <Form
            v-if="props.logoutUrl"
            :action="props.logoutUrl"
            method="post"
            class="text-center"
            v-slot="{ processing }"
        >
            <button
                type="submit"
                class="text-muted-foreground hover:text-foreground mx-auto block text-sm underline underline-offset-4"
                :disabled="processing"
            >
                Log out
            </button>
        </Form>
    </AuthLayout>
</template>
