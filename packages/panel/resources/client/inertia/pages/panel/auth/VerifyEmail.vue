<script setup lang="ts">
/*
 * A PANEL'S OWN VerifyEmail screen.
 *
 * `panel/auth/*` is a name no application owns, so the packaged controller
 * and the packaged component are guaranteed to agree.
 */
import VerifyEmail from '../../auth/VerifyEmail.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <VerifyEmail v-bind="$attrs as any" />
</template>
