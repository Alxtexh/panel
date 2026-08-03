<script setup lang="ts">
/** The packaged screen - see `auth/Login.vue`. */
import { VerifyEmail } from '@panelkit/inertia';
import { logout } from '@/routes';
import { send } from '@/routes/verification';

defineProps<{ status?: string }>();
</script>

<template>
    <VerifyEmail
        :action="send.form().action"
        :logout-url="logout().url"
        :status="status"
    />
</template>
