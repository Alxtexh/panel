<script setup lang="ts">
/*
 * EVERY PAGE PROP ARRIVES AS AN ATTRIBUTE, and this page's root is a
 * fragment. Inertia binds the whole payload onto the page component -
 * declared props bind as props, the shared ones arrive as plain
 * attributes with nowhere to go, and Vue warns once per prop per visit.
 */
defineOptions({ inheritAttrs: false })

/**
 * Ask for a reset link.
 *
 * IT ALWAYS SAYS THE SAME THING, and that is the only interesting decision on
 * this screen. Reporting "no account with that address" turns the form into an
 * account-existence oracle: anybody can check whether a given person banks
 * with you, works for you, or is a customer of yours, one address at a time.
 * The controller returns the same status for a hit and a miss; this renders
 * whatever it was given.
 */
import { Form, Head } from '@inertiajs/vue3'
import { PkButton as Button } from '@alxtexh-enterprise/panel'
import AuthField from '../../components/AuthField.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where to POST. Supplied by the server, never guessed here. */
    action: string
    /** Back to sign-in. */
    loginUrl: string
    status?: string | null
}>()
</script>

<template>
    <AuthLayout
        title="Forgot your password?"
        description="Enter your email and we will send you a reset link"
    >
        <Head title="Forgot password" />

        <div
            v-if="props.status"
            class="mb-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
        >
            {{ props.status }}
        </div>

        <Form
            :action="props.action"
            method="post"
            v-slot="{ errors, processing }"
            class="flex flex-col gap-6"
        >
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
            />

            <Button type="submit" class="w-full" :disabled="processing">
                {{ processing ? 'Sending…' : 'Email password reset link' }}
            </Button>
        </Form>

        <p class="text-center text-sm text-muted-foreground">
            Or,
            <a :href="props.loginUrl" class="underline underline-offset-4"> return to log in </a>
        </p>
    </AuthLayout>
</template>
