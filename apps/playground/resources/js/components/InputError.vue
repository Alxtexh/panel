<script setup lang="ts">
/** The field error line is the package's now. */
import { AuthInputError } from '@panelkit/inertia';

defineProps<{ message?: string }>();
</script>

<template>
    <AuthInputError :message="message" />
</template>
