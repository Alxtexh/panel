<script setup lang="ts">
/**
 * AURORA - the modern SaaS landing page, Part G.9.
 *
 * The familiar shape, done properly: a gradient wash behind a centred
 * promise, feature cards, pricing with one plan raised, and questions
 * answered rather than a wall of logos nobody recognises.
 *
 * THE GRADIENT IS TOKENS, not a hardcoded palette. `--primary` is the
 * tenant's brand colour, so a deployment that themes the panel themes its
 * landing page for free - which is the entire point of shipping designs
 * rather than screenshots.
 */
import { Head, Link } from '@inertiajs/vue3';
import {
    Check,
    Gauge,
    Layers,
    Plug,
    Shield,
    Sparkles,
    Users,
} from '@lucide/vue';
import { buttonClasses } from '@panelkit/ui';
import { register } from '@/routes';
import LandingFooter from './LandingFooter.vue';
import LandingNav from './LandingNav.vue';
import { FAQS, FEATURES, HERO, PLANS } from './Shared';

const ICONS = {
    gauge: Gauge,
    shield: Shield,
    layers: Layers,
    plug: Plug,
    sparkles: Sparkles,
    users: Users,
};
</script>

<template>
    <Head :title="HERO.title" />

    <div class="min-h-screen bg-background text-foreground">
        <LandingNav design="aurora" />

        <!-- Hero -->
        <section class="relative overflow-hidden">
            <!-- The wash. `aria-hidden`, because it says nothing. -->
            <div
                aria-hidden="true"
                class="pointer-events-none absolute inset-x-0 -top-40 h-[500px] bg-gradient-to-b from-primary/25 via-primary/5 to-transparent blur-3xl"
            />

            <div
                class="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32"
            >
                <p
                    class="mx-auto mb-6 w-fit rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                    {{ HERO.eyebrow }}
                </p>

                <h1
                    class="text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
                >
                    {{ HERO.title }}
                </h1>

                <p
                    class="mx-auto mt-6 max-w-2xl text-lg text-pretty text-muted-foreground"
                >
                    {{ HERO.subtitle }}
                </p>

                <div
                    class="mt-10 flex flex-wrap items-center justify-center gap-3"
                >
                    <Link
                        :href="register()"
                        :class="buttonClasses({ size: 'lg' })"
                    >
                        {{ HERO.primaryCta }}
                    </Link>
                    <Link
                        href="/dashboard"
                        :class="
                            buttonClasses({ variant: 'outline', size: 'lg' })
                        "
                    >
                        {{ HERO.secondaryCta }}
                    </Link>
                </div>

                <p class="mt-4 text-xs text-muted-foreground">
                    No card. Runs on SQLite and one process.
                </p>
            </div>
        </section>

        <!-- Features -->
        <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <article
                    v-for="feature in FEATURES"
                    :key="feature.title"
                    class="rounded-xl border bg-card p-6 transition-shadow hover:shadow-sm"
                >
                    <component
                        :is="ICONS[feature.icon]"
                        class="size-5 text-primary"
                        aria-hidden="true"
                    />
                    <h2 class="mt-4 font-semibold">{{ feature.title }}</h2>
                    <p class="mt-2 text-sm text-muted-foreground">
                        {{ feature.body }}
                    </p>
                </article>
            </div>
        </section>

        <!-- Pricing -->
        <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 class="text-center text-3xl font-semibold tracking-tight">
                Priced for where you actually are
            </h2>

            <div class="mt-10 grid gap-6 lg:grid-cols-3">
                <article
                    v-for="plan in PLANS"
                    :key="plan.name"
                    class="relative rounded-xl border bg-card p-6"
                    :class="plan.featured ? 'border-primary shadow-lg' : ''"
                >
                    <span
                        v-if="plan.featured"
                        class="absolute -top-3 left-6 rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground"
                    >
                        Most chosen
                    </span>

                    <h3 class="font-semibold">{{ plan.name }}</h3>
                    <p class="mt-2">
                        <span class="text-3xl font-semibold">{{
                            plan.price
                        }}</span>
                        <span
                            v-if="plan.cadence"
                            class="text-sm text-muted-foreground"
                        >
                            {{ ' ' }}{{ plan.cadence }}
                        </span>
                    </p>
                    <p class="mt-2 text-sm text-muted-foreground">
                        {{ plan.blurb }}
                    </p>

                    <ul class="mt-6 space-y-2 text-sm">
                        <li
                            v-for="item in plan.features"
                            :key="item"
                            class="flex items-start gap-2"
                        >
                            <Check
                                class="mt-0.5 size-4 shrink-0 text-primary"
                                aria-hidden="true"
                            />
                            {{ item }}
                        </li>
                    </ul>

                    <Link
                        :href="register()"
                        :class="[
                            buttonClasses({
                                variant: plan.featured ? 'default' : 'outline',
                            }),
                            'mt-6 w-full',
                        ]"
                    >
                        {{
                            plan.price === 'Talk to us'
                                ? 'Contact us'
                                : 'Choose ' + plan.name
                        }}
                    </Link>
                </article>
            </div>
        </section>

        <!-- Questions -->
        <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
            <h2 class="text-center text-3xl font-semibold tracking-tight">
                The questions people actually ask
            </h2>

            <dl class="mt-10 divide-y rounded-xl border">
                <div v-for="faq in FAQS" :key="faq.q" class="p-6">
                    <dt class="font-medium">{{ faq.q }}</dt>
                    <dd class="mt-2 text-sm text-muted-foreground">
                        {{ faq.a }}
                    </dd>
                </div>
            </dl>
        </section>

        <LandingFooter />
    </div>
</template>
