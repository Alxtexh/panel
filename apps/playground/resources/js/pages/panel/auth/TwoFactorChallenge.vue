<script setup lang="ts">
/*
 * A PANEL'S OWN TwoFactorChallenge screen, from @alxtexh-enterprise/panel/inertia.
 *
 * WHY THIS IS `panel/auth/` AND NOT `auth/`. This application already has
 * `auth/TwoFactorChallenge` wired to Fortify's wayfinder action. A portal
 * rendering that name would post to the application root, not this panel.
 */
import { TwoFactorChallenge } from '@alxtexh-enterprise/panel/inertia';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <TwoFactorChallenge v-bind="$attrs as any" />
</template>
