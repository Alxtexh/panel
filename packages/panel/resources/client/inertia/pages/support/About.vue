<script setup lang="ts">
/**
 * What this installation is, and who to ask about it.
 *
 * THE REFERENCE APP'S VERSION WAS A MANIFESTO, and that is why it could not be
 * packaged as it stood: two hardcoded arrays of principles and capabilities
 * describing Alxtexhpanel, naming subscribers and routers. An About screen that
 * tells an operator about the framework their employer bought tells them
 * nothing; one that tells a customer about it is worse.
 *
 * SO EVERYTHING HERE ARRIVES AS A PROP, read from `panel.about` by the server,
 * with the application's name as the fallback. An installation that configures
 * nothing gets its own name and a version - honest and short, rather than
 * paragraphs about somebody else's product.
 *
 * LINKS ARE A LIST OF {label, href}, NOT FIXED FIELDS. Every installation has a
 * different set - a status page, a contract, an internal runbook - and naming
 * three of them in the shape leaves the fourth nowhere to go.
 */
import { Head } from '@inertiajs/vue3'
import { ExternalLink, Info, LifeBuoy } from '@lucide/vue'
import SupportPageEditor, {
    type SupportProps,
} from '../../components/support/SupportPageEditor.vue'

defineOptions({
    // Page props arrive as attributes and this root is a fragment.
    inheritAttrs: false, layout: { breadcrumbs: [{ title: 'About', href: '' }] } })

withDefaults(
    defineProps<{
        name?: string | null
        tagline?: string | null
        description?: string | null
        version?: string | null
        links?: { label: string; href: string }[]
        contact?: string | null
        extras?: { title: string; body: string; links: { label: string; href: string }[] }[]
        support?: SupportProps | null
    }>(),
    {
        name: null,
        tagline: null,
        description: null,
        version: null,
        links: () => [],
        contact: null,
        extras: () => [],
    },
)
</script>

<template>
    <Head title="About" />

    <div class="mx-auto flex w-full max-w-2xl flex-col gap-6 p-4 sm:p-6">
        <SupportPageEditor :support="support">
        <header class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">
                {{ name ?? 'About' }}
            </h1>

            <p v-if="tagline" class="text-muted-foreground text-sm font-normal">
                {{ tagline }}
            </p>

            <p v-if="version" class="text-muted-foreground text-xs font-normal">Version {{ version }}</p>
        </header>

        <div v-if="description" class="bg-card rounded-lg border p-5 text-sm leading-relaxed">
            <Info class="text-muted-foreground mb-3 size-4" />
            <p>{{ description }}</p>
        </div>

        <!--
            NOTHING CONFIGURED IS SAID PLAINLY, rather than left as a blank
            screen. A page that renders an empty card reads as a bug; one that
            says what is missing and where to set it reads as unconfigured, and
            the second is recoverable by whoever is looking at it.
        -->
        <div
            v-if="!description && links.length === 0 && !contact"
            class="text-muted-foreground rounded-lg border border-dashed p-6 text-sm"
        >
            Nothing has been written here yet. Fill in
            <code class="bg-muted rounded px-1 py-0.5 text-xs">panel.about</code>
            in your configuration to describe this installation, add links, and say who to contact.
        </div>

        <div v-if="links.length > 0" class="flex flex-col gap-2">
            <a
                v-for="link in links"
                :key="link.href"
                :href="link.href"
                class="bg-card hover:bg-accent flex items-center justify-between rounded-lg border px-4 py-3 text-sm transition-colors"
            >
                <span class="font-medium">{{ link.label }}</span>
                <ExternalLink class="text-muted-foreground size-4" />
            </a>
        </div>

        <div v-if="contact" class="bg-card flex items-start gap-3 rounded-lg border p-5 text-sm">
            <LifeBuoy class="text-muted-foreground mt-0.5 size-4 shrink-0" />
            <p>{{ contact }}</p>
        </div>

        <section
            v-for="extra in extras"
            :key="extra.title"
            class="bg-card flex flex-col gap-3 rounded-lg border p-5 text-sm"
        >
            <h2 class="font-semibold">{{ extra.title }}</h2>
            <p v-if="extra.body" class="leading-relaxed">{{ extra.body }}</p>
            <a
                v-for="link in extra.links"
                :key="link.href"
                :href="link.href"
                class="text-primary inline-flex items-center gap-2 hover:underline"
            >
                {{ link.label }}
                <ExternalLink class="size-3.5" />
            </a>
        </section>
        </SupportPageEditor>
    </div>
</template>
