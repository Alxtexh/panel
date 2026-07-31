<script setup lang="ts">
/**
 * Every landing page, drawn from its sections.
 *
 * THERE IS ONE OF THESE NOW, WHERE THERE WERE THREE PAGES. Aurora, Editorial
 * and Console differ by which sections they contain and what those sections
 * say - which is what the difference between two landing pages actually is, and
 * it means a fourth design needs no file and editing a word needs no deploy.
 */
import { Head } from '@inertiajs/vue3';
import { PkAuroraBackdrop, PkLandingSections } from '@panelkit/ui';
import type { LandingSection } from '@panelkit/ui';
import LandingFooter from './LandingFooter.vue';
import LandingNav from './LandingNav.vue';

/*
 * NO `layout` HERE. `app.ts` already resolves every `landing/*` page to no
 * layout - saying it twice is two places to keep in step, and the one that
 * loses puts the panel's sidebar around the marketing page.
 */
defineProps<{ sections: LandingSection[]; design: string; title?: string }>();
</script>

<template>
    <Head :title="title ?? 'PanelKit'" />

    <!--
        THE BACKDROP SITS BETWEEN THE PAGE COLOUR AND THE CONTENT, which is why
        the wrapper is `relative` and the content is raised. A backdrop at a
        negative z-index behind an element that paints its own background is
        painted over by it - invisible, with nothing in the DOM to suggest why.
    -->
    <div
        class="relative flex min-h-screen flex-col bg-background text-foreground"
    >
        <PkAuroraBackdrop v-if="design === 'aurora'" />

        <div class="relative z-10 flex flex-1 flex-col">
            <LandingNav :design="design" />

            <main class="flex-1">
                <PkLandingSections :sections="sections" />
            </main>

            <LandingFooter />
        </div>
    </div>
</template>
