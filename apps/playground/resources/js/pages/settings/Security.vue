<script setup lang="ts">
import { Form, Head, router } from '@inertiajs/vue3';
// Generated from the routes - a rename breaks the build rather than leaving
// this button pointed at a 404.
import deviceRoutes from '@/routes/settings/devices';
import SecurityController from '@/actions/App/Http/Controllers/Settings/SecurityController';
import Heading from '@/components/Heading.vue';
import InputError from '@/components/InputError.vue';
import type { Props as ManagePasskeysProps } from '@/components/ManagePasskeys.vue';
import ManagePasskeys from '@/components/ManagePasskeys.vue';
import type { Props as ManageTwoFactorProps } from '@/components/ManageTwoFactor.vue';
import ManageTwoFactor from '@/components/ManageTwoFactor.vue';
import PasswordInput from '@/components/PasswordInput.vue';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { edit } from '@/routes/security';

interface Device {
    id: string;
    current: boolean;
    ip: string | null;
    browser: string;
    platform: string;
    lastActiveAt: string | null;
}

type Props = {
    passwordRules: string;
    devices: Device[];
} & ManagePasskeysProps &
    ManageTwoFactorProps;

const props = defineProps<Props>();

/**
 * Signing out deletes the session row, which is what makes it immediate.
 *
 * Marking a session revoked and checking a flag later leaves a stolen cookie
 * working until something looks; deleting means the very next request has no
 * session at all.
 */
function signOut(id: string) {
    router.delete(`/settings/devices/${id}`, { preserveScroll: true });
}

function signOutOthers() {
    router.delete(deviceRoutes.destroyOthers.url(), { preserveScroll: true });
}

defineOptions({
    layout: {
        breadcrumbs: [
            {
                title: 'Security settings',
                href: edit(),
            },
        ],
    },
});
</script>

<template>
    <Head title="Security settings" />

    <h1 class="sr-only">Security settings</h1>

    <div class="space-y-6">
        <Heading
            variant="small"
            title="Update password"
            description="Ensure your account is using a long, random password to stay secure"
        />

        <Form
            v-bind="SecurityController.update.form()"
            :options="{
                preserveScroll: true,
            }"
            reset-on-success
            :reset-on-error="[
                'password',
                'password_confirmation',
                'current_password',
            ]"
            class="space-y-6"
            v-slot="{ errors, processing }"
        >
            <div class="grid gap-2">
                <Label for="current_password">Current password</Label>
                <PasswordInput
                    id="current_password"
                    name="current_password"
                    class="mt-1 block w-full"
                    autocomplete="current-password"
                    placeholder="Current password"
                />
                <InputError :message="errors.current_password" />
            </div>

            <div class="grid gap-2">
                <Label for="password">New password</Label>
                <PasswordInput
                    id="password"
                    name="password"
                    class="mt-1 block w-full"
                    autocomplete="new-password"
                    placeholder="New password"
                    :passwordrules="props.passwordRules"
                />
                <InputError :message="errors.password" />
            </div>

            <div class="grid gap-2">
                <Label for="password_confirmation">Confirm password</Label>
                <PasswordInput
                    id="password_confirmation"
                    name="password_confirmation"
                    class="mt-1 block w-full"
                    autocomplete="new-password"
                    placeholder="Confirm password"
                    :passwordrules="props.passwordRules"
                />
                <InputError :message="errors.password_confirmation" />
            </div>

            <div class="flex items-center gap-4">
                <Button
                    :disabled="processing"
                    data-test="update-password-button"
                >
                    Save
                </Button>
            </div>
        </Form>
    </div>

    <ManageTwoFactor
        :canManageTwoFactor="canManageTwoFactor"
        :requiresConfirmation="requiresConfirmation"
        :twoFactorEnabled="twoFactorEnabled"
    />

    <ManagePasskeys
        :canManagePasskeys="canManagePasskeys"
        :passkeys="passkeys"
    />

    <!--
        Signed-in devices.
        
        HERE rather than in its own screen: "where am I logged in" is the same
        worry as "who has my password", so it belongs beside the controls
        somebody reaches for next.
    -->
    <div class="space-y-6">
        <Heading
            title="Signed-in devices"
            description="Every browser currently signed in to this account. Sign out anything you do not recognise."
        />

        <div v-if="devices.length === 0" class="text-muted-foreground rounded-lg border border-dashed p-6 text-sm">
            No other devices are signed in.
        </div>

        <ul v-else class="divide-y rounded-lg border">
            <li v-for="device in devices" :key="device.id" class="flex items-center gap-3 p-3">
                <span class="text-muted-foreground shrink-0">
                    <svg
                        class="size-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                    >
                        <rect x="2" y="4" width="20" height="14" rx="2" />
                        <path d="M8 21h8M12 18v3" />
                    </svg>
                </span>

                <div class="min-w-0 flex-1">
                    <p class="flex items-center gap-2 text-sm font-medium">
                        {{ device.browser }} on {{ device.platform }}
                        <span
                            v-if="device.current"
                            class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-600 dark:text-emerald-400"
                        >
                            This device
                        </span>
                    </p>
                    <p class="text-muted-foreground text-xs">
                        {{ device.ip ?? 'Unknown address' }}
                        <template v-if="device.lastActiveAt">
                            · last active {{ new Date(device.lastActiveAt).toLocaleString() }}
                        </template>
                    </p>
                </div>

                <!--
                    THE CURRENT DEVICE HAS NO SIGN-OUT BUTTON. Signing yourself
                    out from a security page reads as a mistake, and the header
                    menu already has Log out for when it is not.
                -->
                <Button
                    v-if="!device.current"
                    variant="ghost"
                    size="sm"
                    @click="signOut(device.id)"
                >
                    Sign out
                </Button>
            </li>
        </ul>

        <Button
            v-if="devices.length > 1"
            variant="outline"
            size="sm"
            @click="signOutOthers"
        >
            Sign out every other device
        </Button>
    </div>
</template>
