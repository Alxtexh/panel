<script setup lang="ts">
/**
 * The packaged screen, with this application's routes mapped onto it.
 *
 * ONE IMPLEMENTATION - see `auth/ForgotPassword.vue`. The token and the address
 * arrive from the reset link and are passed straight through; the package's
 * screen posts them back with the new password.
 */
import { ResetPassword } from '@panelkit/inertia';
import { update } from '@/routes/password';

defineProps<{ token: string; email: string }>();
</script>

<template>
    <ResetPassword
        :action="update.form().action"
        :token="token"
        :email="email"
    />
</template>
