<script setup lang="ts">
/*
 * A PANEL'S OWN TwoFactorChallenge screen.
 *
 * WHY THIS PATH EXISTS SEPARATELY FROM `../../auth/TwoFactorChallenge.vue`,
 * which it renders: the two are the same screen reached under two names, and
 * the NAME is what had to change. Inertia resolves a page name against the
 * consuming application's `resources/js/pages` first, so a portal rendering
 * `auth/TwoFactorChallenge` got whatever the host starter kit had put there.
 *
 * `panel/auth/*` is a name no application owns, so the packaged controller
 * and the packaged component are guaranteed to agree.
 *
 * THE FILE PATH MATCHES THE PAGE NAME ON PURPOSE. `PackagedScreensTest`
 * walks every name the PHP half renders and asserts a component ships at the
 * matching path.
 */
import TwoFactorChallenge from '../../auth/TwoFactorChallenge.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <TwoFactorChallenge v-bind="$attrs as any" />
</template>
