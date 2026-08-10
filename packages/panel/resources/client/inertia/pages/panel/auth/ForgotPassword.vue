<script setup lang="ts">
/*
 * A PANEL'S OWN ForgotPassword screen.
 *
 * WHY THIS PATH EXISTS SEPARATELY FROM `../../auth/ForgotPassword.vue`, which it
 * renders: the two are the same screen reached under two names, and the NAME
 * is what had to change. Inertia resolves a page name against the consuming
 * application's `resources/js/pages` first, so a portal rendering
 * `auth/ForgotPassword` got whatever the host starter kit had put there - a
 * component written for the application's own controller, with a different
 * prop contract. The sign-in form was the visible case: the packaged
 * controller sends `socialProviders` as a list of objects, the reference
 * app's screen expected a map, and the button rendered with raw JSON in it
 * while the panel's configured heading was dropped. Nothing errored.
 *
 * `panel/auth/*` is a name no application owns, so the packaged controller
 * and the packaged component are guaranteed to agree.
 *
 * THE FILE PATH MATCHES THE PAGE NAME ON PURPOSE. `PackagedScreensTest`
 * walks every name the PHP half renders and asserts a component ships at the
 * matching path - because a name with no file is a white page in a browser
 * with a console error naming a file nobody has seen.
 */
import ForgotPassword from '../../auth/ForgotPassword.vue'

defineOptions({ inheritAttrs: false })
</script>

<template>
    <ForgotPassword v-bind="$attrs as any" />
</template>
