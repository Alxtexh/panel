<script setup lang="ts">
/** The packaged screen - see `auth/Login.vue`. */
import { LockScreen } from '@alxtexh-enterprise/panel/inertia';

defineProps<{ status?: string }>();
</script>

<template>
    <LockScreen action="/unlock" logout-url="/logout" :status="status" />
</template>
