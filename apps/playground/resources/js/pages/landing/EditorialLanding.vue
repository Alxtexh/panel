<script setup lang="ts">
/**
 * EDITORIAL - the quiet, typographic landing page, Part G.9.
 *
 * The opposite bet to Aurora: no gradient, no cards, no centred hero. A
 * left-aligned column, generous type, and rules instead of borders - the
 * shape a developer tool or an infrastructure product wears when it wants
 * to be read rather than scrolled.
 *
 * WHY SHIP A SECOND SHAPE AT ALL. A landing page is the one screen whose
 * job is to sound like the company behind it, and one template makes every
 * deployment sound like the same company. These differ in voice, not just
 * in colour.
 */
import { Head, Link } from '@inertiajs/vue3';
import { buttonClasses } from '@panelkit/ui';
import { register } from '@/routes';
import LandingFooter from './LandingFooter.vue';
import LandingNav from './LandingNav.vue';
import { FAQS, FEATURES, HERO, PLANS } from './Shared';
</script>

<template>
    <Head :title="HERO.title" />

    <div class="min-h-screen bg-background text-foreground">
        <LandingNav design="editorial" />

        <!-- Hero: left-aligned, no ornament. -->
        <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
            <p class="text-sm tracking-widest text-muted-foreground uppercase">
                {{ HERO.eyebrow }}
            </p>

            <h1
                class="mt-6 text-4xl leading-tight font-semibold tracking-tight sm:text-5xl"
            >
                {{ HERO.title }}
            </h1>

            <p
                class="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground"
            >
                {{ HERO.subtitle }}
            </p>

            <div class="mt-10 flex flex-wrap gap-3">
                <Link :href="register()" :class="buttonClasses()">
                    {{ HERO.primaryCta }}
                </Link>
                <Link
                    href="/dashboard"
                    :class="buttonClasses({ variant: 'ghost' })"
                >
                    {{ HERO.secondaryCta }} →
                </Link>
            </div>
        </section>

        <!-- Features as a numbered prose list, not cards. -->
        <section class="mx-auto max-w-3xl px-4 sm:px-6">
            <hr />
            <ol class="divide-y">
                <li
                    v-for="(feature, i) in FEATURES"
                    :key="feature.title"
                    class="grid gap-2 py-8 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                    <span
                        class="font-mono text-sm text-muted-foreground tabular-nums"
                    >
                        {{ String(i + 1).padStart(2, '0') }}
                    </span>
                    <div>
                        <h2 class="font-semibold">{{ feature.title }}</h2>
                        <p class="mt-1 leading-relaxed text-muted-foreground">
                            {{ feature.body }}
                        </p>
                    </div>
                </li>
            </ol>
            <hr />
        </section>

        <!-- Pricing as a plain table: comparable at a glance, no raised card. -->
        <section class="mx-auto max-w-3xl px-4 py-20 sm:px-6">
            <h2 class="text-2xl font-semibold tracking-tight">Pricing</h2>

            <div class="mt-8 divide-y border-y">
                <div
                    v-for="plan in PLANS"
                    :key="plan.name"
                    class="flex flex-col gap-4 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                >
                    <div class="sm:max-w-sm">
                        <h3 class="font-semibold">
                            {{ plan.name }}
                            <span
                                v-if="plan.featured"
                                class="ml-2 text-xs font-normal text-muted-foreground"
                            >
                                — most chosen
                            </span>
                        </h3>
                        <p class="mt-1 text-sm text-muted-foreground">
                            {{ plan.blurb }}
                        </p>
                        <p class="mt-2 text-sm text-muted-foreground">
                            {{ plan.features.join(' · ') }}
                        </p>
                    </div>

                    <div class="flex items-baseline gap-4 sm:shrink-0">
                        <span class="text-2xl font-semibold">{{
                            plan.price
                        }}</span>
                        <span
                            v-if="plan.cadence"
                            class="text-sm text-muted-foreground"
                        >
                            {{ plan.cadence }}
                        </span>
                        <Link
                            :href="register()"
                            :class="
                                buttonClasses({
                                    variant: 'outline',
                                    size: 'sm',
                                })
                            "
                        >
                            Choose
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <!-- Questions, as prose. -->
        <section class="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
            <h2 class="text-2xl font-semibold tracking-tight">Questions</h2>

            <dl class="mt-8 space-y-8">
                <div v-for="faq in FAQS" :key="faq.q">
                    <dt class="font-medium">{{ faq.q }}</dt>
                    <dd class="mt-2 leading-relaxed text-muted-foreground">
                        {{ faq.a }}
                    </dd>
                </div>
            </dl>
        </section>

        <LandingFooter />
    </div>
</template>
