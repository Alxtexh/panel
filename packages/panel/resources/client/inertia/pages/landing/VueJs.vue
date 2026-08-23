<script setup lang="ts">
/**
 * Built-in `marketing` / `vue-js` landing.
 *
 * Ported from https://github.com/younusaliakash/vue-js-landing-page
 * (Colorlib-style Vue 3 landing). Section SFCs and CSS are the source
 * templates, adapted only for Inertia brand/auth props and Vite assets.
 */
defineOptions({ inheritAttrs: false })

import { Head, Link } from '@inertiajs/vue3'
import './templates/vue-js/styles/bootstrap.min.css'
import './templates/vue-js/fonts/icomoon/style.css'
import './templates/vue-js/fonts/flaticon/font/flaticon.css'
import './templates/vue-js/styles/style.css'

import Header from './templates/vue-js/components/Header.vue'
import Hero from './templates/vue-js/components/Hero.vue'
import Service1 from './templates/vue-js/components/Service1.vue'
import Service2 from './templates/vue-js/components/Service2.vue'
import Feature from './templates/vue-js/components/Feature.vue'
import Pricing from './templates/vue-js/components/Pricing.vue'
import Advantage from './templates/vue-js/components/Advantage.vue'
import Testimonial from './templates/vue-js/components/Testimonial.vue'
import About from './templates/vue-js/components/About.vue'
import Blog from './templates/vue-js/components/Blog.vue'
import Contact from './templates/vue-js/components/Contact.vue'
import Footer from './templates/vue-js/components/Footer.vue'

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
        design: 'marketing',
        brand: 'Launch',
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

    <div class="pk-vue-js-template">
        <nav
            v-if="previews.length"
            class="sticky top-0 z-50 flex flex-wrap items-center justify-center gap-1 border-b bg-white/95 px-3 py-2 text-sm shadow-sm"
        >
            <span class="mr-2 text-xs uppercase tracking-wide text-slate-500">Landing samples</span>
            <Link
                v-for="d in previews"
                :key="d"
                :href="`/preview/${d}`"
                class="rounded px-2 py-1 capitalize"
                :class="d === design ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'"
            >
                {{ d }}
            </Link>
        </nav>

        <!-- Same section order as source App.vue -->
        <Header :brand="brand" :login-href="loginHref" :register-href="registerHref" />
        <Hero />
        <Service1 />
        <Service2 />
        <Feature />
        <Pricing />
        <Pricing />
        <Advantage />
        <Testimonial />
        <About />
        <Blog />
        <Contact />
        <Footer />
    </div>
</template>
