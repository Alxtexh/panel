<script setup lang="ts">
/**
 * The packaged screen, with this application's routes mapped onto it.
 * See `auth/Login.vue` - one implementation, the mapping stays here.
 */
import { Register } from '@panelkit/panel/inertia';
import { login } from '@/routes';
import { store } from '@/routes/register';

defineProps<{ passwordRules: string }>();
</script>

<template>
    <Register
        :action="store.form().action"
        :login-url="login().url"
        :password-rules="passwordRules"
    />
</template>
