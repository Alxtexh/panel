<script setup lang="ts">
/*
 * The panel's Faq screen, from @panelkit/panel/inertia.
 *
 * THIS APPLICATION'S COPY IS GONE. The packaged one was moved out of here and
 * made generic - the articles, the questions and the About copy now arrive as
 * props, so the screen is the framework's and the words are the
 * application's.
 *
 * WHERE THE WORDS COME FROM: `HelpCentre::add()` in AppServiceProvider, which
 * registers this app's ISP articles alongside the packaged ones about the
 * panel itself.
 */
import Faq from '@panelkit/panel/pages/support/Faq.vue';

defineOptions({ inheritAttrs: false });
</script>

<template>
    <Faq v-bind="$attrs as any" />
</template>
