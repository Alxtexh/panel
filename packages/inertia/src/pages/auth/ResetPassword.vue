<script setup lang="ts">
/**
 * Choose a new password, having followed the link.
 *
 * THE TOKEN AND THE EMAIL TRAVEL AS HIDDEN FIELDS, not in the POST URL. A
 * reset token in a query string reaches the browser history, the referrer
 * header of anything the page loads, and every proxy log on the way - and it
 * is, for its lifetime, a password.
 *
 * THE EMAIL IS READ-ONLY RATHER THAN ABSENT. Showing which account is being
 * reset is what stops somebody changing the password on an address they did
 * not mean to; making it editable would let a valid token be pointed at
 * another account, which the broker would refuse but only after the attempt.
 */
import { Form, Head } from '@inertiajs/vue3'
import { PkButton as Button } from '@panelkit/ui'
import AuthField from '../../components/AuthField.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    action: string
    token: string
    email: string
}>()
</script>

<template>
    <AuthLayout title="Reset password" description="Please choose a new password">
        <Head title="Reset password" />

        <Form
            :action="props.action"
            method="post"
            v-slot="{ errors, processing }"
            class="flex flex-col gap-6"
        >
            <input type="hidden" name="token" :value="props.token" />
            <input type="hidden" name="email" :value="props.email" />

            <div class="grid gap-2">
                <label
                    for="email-display"
                    class="flex items-center gap-2 text-sm leading-none font-medium select-none"
                >
                    Email address
                </label>
                <input
                    id="email-display"
                    type="email"
                    :value="props.email"
                    readonly
                    class="border-input dark:bg-input/30 h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base text-muted-foreground shadow-xs outline-none md:text-sm"
                />
                <p v-if="errors.email" class="text-sm text-destructive">
                    {{ errors.email }}
                </p>
            </div>

            <AuthField
                id="password"
                name="password"
                type="password"
                label="Password"
                autocomplete="new-password"
                placeholder="Password"
                required
                autofocus
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
                :error="errors.password_confirmation"
            />

            <Button type="submit" class="w-full" :disabled="processing">
                {{ processing ? 'Saving…' : 'Reset password' }}
            </Button>
        </Form>
    </AuthLayout>
</template>
