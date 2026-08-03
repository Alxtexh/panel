<script setup lang="ts">
/** The packaged screen - see `auth/Login.vue`. */
import { TwoFactorChallenge } from '@panelkit/inertia';
import { store } from '@/routes/two-factor/login';
</script>

<template>
    <TwoFactorChallenge :action="store.form().action" />
</template>
