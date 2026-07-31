<script setup lang="ts">
/**
 * CONSOLE - the developer-tool landing page, Part G.9.
 *
 * The third voice: dark by default, monospace accents, and a hero that
 * SHOWS the product instead of describing it - the resource class on the
 * left, the screen it produces on the right. For an audience that believes
 * a code sample faster than a paragraph.
 *
 * THE SAMPLE IS REAL. It is the shape a working `Resource` actually takes,
 * because a landing page whose code would not run is a landing page that
 * gets found out in the first five minutes of a trial.
 */
import { Head, Link } from '@inertiajs/vue3';
import { Check } from '@lucide/vue';
import { buttonClasses } from '@panelkit/ui';
import { register } from '@/routes';
import LandingFooter from './LandingFooter.vue';
import LandingNav from './LandingNav.vue';
import { FAQS, FEATURES, HERO, PLANS } from './Shared';

const SAMPLE = `final class ClientResource extends Resource
{
    protected static string $model = Client::class;

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->searchable()->sortable(),
                BadgeColumn::make('status')->colors([
                    'active' => 'emerald', 'expired' => 'amber',
                ]),
                DateColumn::make('expiry_date')->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->perPage(25);
    }
}`;
</script>

<template>
    <Head :title="HERO.title" />

    <div class="min-h-screen bg-background text-foreground">
        <LandingNav design="console" />

        <!-- Hero: the claim beside the proof. -->
        <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <div class="grid items-center gap-12 lg:grid-cols-2">
                <div>
                    <p
                        class="w-fit rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                        composer require panelkit/panel
                    </p>

                    <h1
                        class="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl"
                    >
                        {{ HERO.title }}
                    </h1>

                    <p class="mt-6 text-lg text-pretty text-muted-foreground">
                        {{ HERO.subtitle }}
                    </p>

                    <div class="mt-8 flex flex-wrap gap-3">
                        <Link :href="register()" :class="buttonClasses()">
                            {{ HERO.primaryCta }}
                        </Link>
                        <Link
                            href="/docs"
                            :class="buttonClasses({ variant: 'outline' })"
                        >
                            Read the docs
                        </Link>
                    </div>
                </div>

                <!-- The proof. A real class, not a mock-up. -->
                <div
                    class="overflow-hidden rounded-xl border bg-zinc-950 shadow-xl"
                >
                    <div
                        class="flex items-center gap-1.5 border-b border-white/10 px-4 py-3"
                    >
                        <span class="size-2.5 rounded-full bg-red-500/70" />
                        <span class="size-2.5 rounded-full bg-amber-500/70" />
                        <span class="size-2.5 rounded-full bg-emerald-500/70" />
                        <span class="ml-2 font-mono text-xs text-zinc-400">
                            ClientResource.php
                        </span>
                    </div>
                    <pre
                        class="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-zinc-200 sm:text-xs"
                    ><code>{{ SAMPLE }}</code></pre>
                </div>
            </div>
        </section>

        <!-- Features in a tight two-column grid with rules. -->
        <section class="border-y">
            <div
                class="mx-auto grid max-w-6xl gap-px px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3"
            >
                <article
                    v-for="feature in FEATURES"
                    :key="feature.title"
                    class="py-8 sm:pr-8"
                >
                    <h2 class="font-mono text-sm font-semibold">
                        {{ feature.title }}
                    </h2>
                    <p class="mt-2 text-sm text-muted-foreground">
                        {{ feature.body }}
                    </p>
                </article>
            </div>
        </section>

        <!-- Pricing: compact, monospace figures. -->
        <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <h2 class="font-mono text-sm tracking-widest uppercase">Pricing</h2>

            <div class="mt-8 grid gap-4 lg:grid-cols-3">
                <article
                    v-for="plan in PLANS"
                    :key="plan.name"
                    class="rounded-lg border p-6"
                    :class="
                        plan.featured ? 'border-primary/60 bg-primary/5' : ''
                    "
                >
                    <h3 class="font-mono text-sm font-semibold">
                        {{ plan.name }}
                    </h3>
                    <p
                        class="mt-3 font-mono text-2xl font-semibold tabular-nums"
                    >
                        {{ plan.price }}
                        <span
                            v-if="plan.cadence"
                            class="text-xs font-normal text-muted-foreground"
                        >
                            /{{ plan.cadence.replace('per ', '') }}
                        </span>
                    </p>
                    <p class="mt-2 text-sm text-muted-foreground">
                        {{ plan.blurb }}
                    </p>

                    <ul class="mt-4 space-y-1.5 text-sm">
                        <li
                            v-for="item in plan.features"
                            :key="item"
                            class="flex items-start gap-2 text-muted-foreground"
                        >
                            <Check
                                class="mt-0.5 size-3.5 shrink-0"
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
                                size: 'sm',
                            }),
                            'mt-5 w-full',
                        ]"
                    >
                        Choose
                    </Link>
                </article>
            </div>
        </section>

        <!-- Questions, compact. -->
        <section class="mx-auto max-w-4xl px-4 pb-20 sm:px-6">
            <h2 class="font-mono text-sm tracking-widest uppercase">FAQ</h2>

            <dl class="mt-8 grid gap-8 sm:grid-cols-2">
                <div v-for="faq in FAQS" :key="faq.q">
                    <dt class="text-sm font-medium">{{ faq.q }}</dt>
                    <dd class="mt-2 text-sm text-muted-foreground">
                        {{ faq.a }}
                    </dd>
                </div>
            </dl>
        </section>

        <LandingFooter />
    </div>
</template>
