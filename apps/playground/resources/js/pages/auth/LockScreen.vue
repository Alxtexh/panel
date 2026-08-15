<script setup lang="ts">
/** The packaged screen - see `auth/Login.vue`. */
import { LockScreen } from '@alxtexh-enterprise/panel/inertia';

defineProps<{
    status?: string;
    action?: string;
    logoutUrl?: string | null;
    passkeys?: { options: string; verify: string } | null;
}>();
</script>

<template>
    <LockScreen
        :action="action ?? '/unlock'"
        :logout-url="logoutUrl ?? '/logout'"
        :status="status"
        :passkeys="passkeys"
    />
</template>
