<script setup lang="ts">
/**
 * Built-in `shadcn` / `shadcn-vue` landing.
 *
 * Ported from https://github.com/leoMirandaa/shadcn-vue-landing-page (MIT).
 * Section SFCs and UI primitives are the source templates; imports adapted
 * for reka-ui, @lucide/vue, and PanelKit's cn(). Orange theme scoped here.
 */
defineOptions({ inheritAttrs: false })

import { Head, Link } from '@inertiajs/vue3'
import './templates/shadcn-vue/theme.css'

import Navbar from './templates/shadcn-vue/components/Navbar.vue'
import Hero from './templates/shadcn-vue/components/Hero.vue'
import Benefits from './templates/shadcn-vue/components/Benefits.vue'
import Features from './templates/shadcn-vue/components/Features.vue'
import Services from './templates/shadcn-vue/components/Services.vue'
import HowItWorks from './templates/shadcn-vue/components/HowItWorks.vue'
import Sponsors from './templates/shadcn-vue/components/Sponsors.vue'
import Testimonials from './templates/shadcn-vue/components/Testimonials.vue'
import Team from './templates/shadcn-vue/components/Team.vue'
import Pricing from './templates/shadcn-vue/components/Pricing.vue'
import Community from './templates/shadcn-vue/components/Community.vue'
import Contact from './templates/shadcn-vue/components/Contact.vue'
import FAQ from './templates/shadcn-vue/components/FAQ.vue'
import Footer from './templates/shadcn-vue/components/Footer.vue'

withDefaults(
    defineProps<{
        design?: string
        brand?: string
        tagline?: string
        loginHref?: string
        registerHref?: string
        dashboardHref?: string
        previews?: string[]
        footerLinks?: { label: string; href: string }[]
        sections?: unknown[]
        title?: string
    }>(),
    {
        design: 'shadcn',
        brand: 'ShadcnVue',
        tagline: '',
        loginHref: '/login',
        registerHref: '/register',
        dashboardHref: '/dashboard',
        previews: () => [],
        footerLinks: () => [],
        sections: () => [],
        title: undefined,
    },
)
</script>

<template>
    <Head :title="title ?? brand" />

    <div class="pk-shadcn-vue-template min-h-screen">
        <nav
            v-if="previews.length"
            class="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-1 border-b bg-background/95 px-3 py-2 text-sm backdrop-blur"
        >
            <span class="mr-2 text-xs uppercase tracking-wide text-muted-foreground">Landing samples</span>
            <Link
                v-for="d in previews"
                :key="d"
                :href="`/preview/${d}`"
                class="rounded px-2 py-1 capitalize"
                :class="d === design ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'"
            >
                {{ d }}
            </Link>
        </nav>

        <!-- Same section order as source App.vue -->
        <Navbar />
        <Hero />
        <Sponsors />
        <Benefits />
        <Features />
        <Services />
        <HowItWorks />
        <Testimonials />
        <Team />
        <Community />
        <Pricing />
        <Contact />
        <FAQ />
        <Footer />
    </div>
</template>
