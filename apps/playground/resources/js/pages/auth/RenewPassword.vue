<script setup lang="ts">
/** The packaged screen - see `auth/Login.vue`. */
import { RenewPassword } from '@panelkit/inertia';
import { logout } from '@/routes';

defineProps<{ reason: 'expired' | 'requested'; maxAgeDays: number }>();
</script>

<template>
    <RenewPassword
        action="/password/change"
        :reason="reason"
        :max-age-days="maxAgeDays"
        :logout-url="logout().url"
    />
</template>
