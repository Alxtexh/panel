<script setup lang="ts">
/**
 * The panel's error page, from `@alxtexh-enterprise/panel/inertia`.
 *
 * WHY THIS FILE EXISTS: Inertia resolves a page name by globbing this
 * directory, so a screen living in node_modules is one it cannot find.
 *
 * The two links are this application's: its panel is at `/dashboard`, and its
 * sign-in is at `/login`.
 */
import { ErrorPage } from '@alxtexh-enterprise/panel/inertia';

defineProps<{ status: number }>();
</script>

<template>
    <ErrorPage
        :status="status"
        home-href="/dashboard"
        login-href="/login"
        home-label="Back to dashboard"
    />
</template>
