<script setup lang="ts">
/**
 * Change an expired password, and nothing else.
 *
 * MOVED FROM THE REFERENCE APP with its reasoning intact:
 *
 * IT IS THE ONLY SCREEN SOMEBODY IN THIS STATE CAN OPEN, which is why it carries
 * no navigation, no settings tabs and no links back into the panel. Offering
 * them would be offering doors that are all locked - and a screen full of
 * refusals reads as a broken panel rather than as one thing to do first.
 *
 * SIGNING OUT IS THE ONE WAY OUT, and it stays. Somebody who would rather leave
 * than change their password now must be able to; without it the only exit is
 * clearing cookies.
 *
 * IT SAYS WHY, in the two situations that are actually different. "Your password
 * has expired" and "an administrator asked you to change it" send somebody
 * looking for different things, and the wrong one wastes a support call.
 */
import { Head, Link, useForm } from '@inertiajs/vue3'
import { PkButton as Button, PkSpinner as Spinner } from '@alxtexh-enterprise/panel'
import { computed } from 'vue'
import AuthField from '../../components/AuthField.vue'
import AuthInputError from '../../components/AuthInputError.vue'
import AuthLayout from './AuthLayout.vue'

const props = defineProps<{
    /** Where the change is PUT. */
    action: string
    /** `expired` when the age policy caught it, `requested` when somebody asked. */
    reason: 'expired' | 'requested'
    maxAgeDays: number
    logoutUrl?: string | null
    passwordRules?: string
}>()

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
})

const explanation = computed(() =>
    props.reason === 'requested'
        ? 'Somebody with administrative access asked for this password to be changed.'
        : `Passwords here are changed every ${props.maxAgeDays} days.`,
)

function submit(): void {
    form.put(props.action, {
        // Only the password fields are cleared on failure: keeping the current
        // one typed is the difference between one correction and three.
        onError: () => form.reset('password', 'password_confirmation'),
    })
}
</script>

<template>
    <AuthLayout title="Choose a new password" :description="explanation">
        <Head title="Change your password" />

        <form class="flex flex-col gap-6" @submit.prevent="submit">
            <div class="grid gap-6">
                <AuthField
                    id="current_password"
                    name="current_password"
                    type="password"
                    label="Current password"
                    autocomplete="current-password"
                    placeholder="Current password"
                    required
                    autofocus
                    :error="form.errors.current_password"
                    @input="form.current_password = ($event.target as HTMLInputElement).value"
                />

                <AuthField
                    id="password"
                    name="password"
                    type="password"
                    label="New password"
                    autocomplete="new-password"
                    placeholder="New password"
                    required
                    :password-rules="props.passwordRules"
                    :error="form.errors.password"
                    @input="form.password = ($event.target as HTMLInputElement).value"
                />

                <AuthField
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    label="Confirm new password"
                    autocomplete="new-password"
                    placeholder="Confirm new password"
                    required
                    :password-rules="props.passwordRules"
                    :error="form.errors.password_confirmation"
                    @input="form.password_confirmation = ($event.target as HTMLInputElement).value"
                />

                <Button type="submit" class="w-full" :disabled="form.processing">
                    <Spinner v-if="form.processing" />
                    Change password
                </Button>
            </div>

            <p v-if="props.logoutUrl" class="text-muted-foreground text-center text-sm">
                <Link
                    :href="props.logoutUrl"
                    method="post"
                    as="button"
                    class="underline underline-offset-4"
                >
                    Sign out instead
                </Link>
            </p>
        </form>
    </AuthLayout>
</template>
