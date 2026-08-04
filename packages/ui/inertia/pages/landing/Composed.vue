<script setup lang="ts">
/**
 * Every landing page, drawn from its sections.
 *
 * MOVED FROM THE REFERENCE APPLICATION. It, the nav, the footer, the three
 * designs, the controller and the editor all lived there - so
 * `composer require panelkit/panel` gave you `PkLandingSections`, a component
 * that draws landing sections, and nothing at all that used it. The README
 * described a front page you could edit from the panel; exactly one
 * installation in the world could.
 *
 * THERE IS ONE OF THESE NOW, WHERE THERE WERE THREE PAGES. Aurora, Editorial
 * and Console differ by which sections they contain and what those sections
 * say - which is what the difference between two landing pages actually is, and
 * it means a fourth design needs no file and editing a word needs no deploy.
 */
import { Head } from '@inertiajs/vue3'
import {
    PkAuroraBackdrop,
    PkConsoleBackdrop,
    PkEditorialBackdrop,
    PkLandingSections,
} from '@alxtexh-enterprise/panel'
import type { LandingSection } from '@alxtexh-enterprise/panel'
import LandingFooter from './LandingFooter.vue'
import LandingNav from './LandingNav.vue'

/*
 * NO `layout` HERE. `app.ts` already resolves every `landing/*` page to no
 * layout - saying it twice is two places to keep in step, and the one that
 * loses puts the panel's sidebar around the marketing page.
 */
/*
 * THE CHROME'S CONTENT IS THE APPLICATION'S. The nav and footer took their
 * brand, their links and their sign-in URLs from constants in the reference
 * app, which is fine until the component ships - a packaged footer linking to
 * `/help` puts a 404 at the bottom of everybody's front page.
 */
withDefaults(
    defineProps<{
        sections: LandingSection[]
        design: string
        title?: string
        brand?: string
        tagline?: string
        loginHref?: string
        registerHref?: string
        dashboardHref?: string
        /** Designs offered in the switcher; empty on a real front door. */
        previews?: string[]
        footerLinks?: { label: string; href: string }[]
    }>(),
    {
        title: undefined,
        brand: 'PanelKit',
        tagline: 'Built with Laravel, Inertia and Vue.',
        loginHref: '/login',
        registerHref: '/register',
        dashboardHref: '/dashboard',
        previews: () => [],
        footerLinks: () => [],
    },
)
</script>

<template>
    <Head :title="title ?? brand" />

    <!--
        THE BACKDROP SITS BETWEEN THE PAGE COLOUR AND THE CONTENT, which is why
        the wrapper is `relative` and the content is raised. A backdrop at a
        negative z-index behind an element that paints its own background is
        painted over by it - invisible, with nothing in the DOM to suggest why.
    -->
    <!--
        THE TYPE IS HALF THE DESIGN. A backdrop alone leaves three pages that
        differ only in what is behind them; the family, measure and tracking are
        what make Editorial read as a magazine and Console as a terminal.

        The class goes on the WRAPPER, never inside the section components - a
        section must render identically whichever design composes it, which is
        the whole point of a library. What changes is the typographic
        environment it inherits.
    -->
    <div
        class="relative flex min-h-screen flex-col bg-background text-foreground"
        :class="{
            'pk-editorial': design === 'editorial',
            'pk-console': design === 'console',
        }"
    >
        <PkAuroraBackdrop v-if="design === 'aurora'" />
        <PkEditorialBackdrop v-else-if="design === 'editorial'" />
        <PkConsoleBackdrop v-else-if="design === 'console'" />

        <div class="relative z-10 flex flex-1 flex-col">
            <LandingNav
                :design="design"
                :brand="brand"
                :login-href="loginHref"
                :register-href="registerHref"
                :dashboard-href="dashboardHref"
                :previews="previews"
            />

            <main class="flex-1">
                <PkLandingSections :sections="sections" />
            </main>

            <LandingFooter :brand="brand" :tagline="tagline" :links="footerLinks" />
        </div>
    </div>
</template>
