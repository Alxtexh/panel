<script setup lang="ts">
/*
 * A PANEL'S OWN Register screen.
 *
 * `panel/auth/*` is a name no application owns, so the packaged controller
 * and the packaged component are guaranteed to agree.
 */
import Register from '../../auth/Register.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <Register v-bind="$attrs as any" />
</template>
