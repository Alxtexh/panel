<script setup lang="ts">
/**
 * The packaged screen, with this application's routes mapped onto it.
 *
 * ONE IMPLEMENTATION. It was eighty lines here and sixty-eight in the package -
 * the same form twice, differing only in which `Input` component it imported.
 * See `auth/Login.vue` for why `layout: null`.
 */
import { ForgotPassword } from '@alxtexh-enterprise/panel/inertia';
import { login } from '@/routes';
import { email } from '@/routes/password';

defineProps<{ status?: string }>();
</script>

<template>
    <ForgotPassword
        :action="email().url"
        :login-url="login().url"
        :status="status"
    />
</template>
