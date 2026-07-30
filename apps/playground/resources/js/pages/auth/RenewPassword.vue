<script setup lang="ts">
/**
 * Change an expired password, and nothing else.
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
import { Head, useForm } from '@inertiajs/vue3';
import { computed } from 'vue';
import { Button } from '@/components/ui/button';
import AuthLayout from '@/layouts/AuthLayout.vue';

defineOptions({ layout: AuthLayout });

const props = defineProps<{
    /** `expired` when the age policy caught it, `requested` when somebody asked. */
    reason: 'expired' | 'requested';
    maxAgeDays: number;
}>();

const form = useForm({
    current_password: '',
    password: '',
    password_confirmation: '',
});

const explanation = computed(() =>
    props.reason === 'requested'
        ? 'Somebody with administrative access asked for this password to be changed.'
        : `Passwords here are changed every ${props.maxAgeDays} days.`,
);

function submit() {
    form.put('/password/change', {
        // Only the password fields are cleared on failure: keeping the current
        // password typed would leave a valid credential sitting in a form after
        // an error somebody may walk away from.
        onError: () =>
            form.reset('current_password', 'password', 'password_confirmation'),
    });
}
</script>

<template>
    <Head title="Change your password" />

    <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
        <div>
            <h1 class="text-xl font-semibold">Change your password</h1>
            <p class="mt-1 text-sm text-muted-foreground">{{ explanation }}</p>
        </div>

        <form class="flex flex-col gap-4" @submit.prevent="submit">
            <label class="flex flex-col gap-1">
                <span class="text-sm font-medium">Current password</span>
                <input
                    v-model="form.current_password"
                    type="password"
                    autocomplete="current-password"
                    autofocus
                    class="rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <span
                    v-if="form.errors.current_password"
                    class="text-xs text-destructive"
                >
                    {{ form.errors.current_password }}
                </span>
            </label>

            <label class="flex flex-col gap-1">
                <span class="text-sm font-medium">New password</span>
                <input
                    v-model="form.password"
                    type="password"
                    autocomplete="new-password"
                    class="rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <!--
                    The reuse refusal arrives here as a validation message. It is
                    checked on the server against hashes of recent passwords -
                    a renewal satisfied by re-entering the same password changed
                    nothing while recording that it did.
                -->
                <span
                    v-if="form.errors.password"
                    class="text-xs text-destructive"
                >
                    {{ form.errors.password }}
                </span>
            </label>

            <label class="flex flex-col gap-1">
                <span class="text-sm font-medium">Confirm new password</span>
                <input
                    v-model="form.password_confirmation"
                    type="password"
                    autocomplete="new-password"
                    class="rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
            </label>

            <Button type="submit" :disabled="form.processing">
                {{ form.processing ? 'Saving…' : 'Change password' }}
            </Button>
        </form>

        <!-- The one way out. Without it the only exit is clearing cookies. -->
        <form method="POST" action="/logout">
            <button
                type="submit"
                class="text-sm text-muted-foreground underline hover:text-foreground"
            >
                Sign out instead
            </button>
        </form>
    </div>
</template>
