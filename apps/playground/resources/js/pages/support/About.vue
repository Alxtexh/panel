<script setup lang="ts">
/**
 * About the panel: what it is, and what it is built on.
 */
import { Head } from '@inertiajs/vue3'
import { Gauge, Lock, Layers, Zap } from '@lucide/vue'

defineOptions({ layout: { breadcrumbs: [{ title: 'About', href: '/about' }] } })

const principles = [
    {
        icon: Zap,
        title: 'Fast by construction',
        body: 'Lists page by seek rather than offset and never block on a COUNT(*), so a table behaves the same at two hundred rows and two million.',
    },
    {
        icon: Layers,
        title: 'Declared once',
        body: 'A screen is a PHP class. Columns, filters, forms and actions are described in one place, and the structure travels to the browser once per session rather than on every interaction.',
    },
    {
        icon: Lock,
        title: 'Closed by default',
        body: 'A resource with no policy grants nothing, tenancy is applied in the query layer rather than remembered per call site, and every write re-authorises on the server.',
    },
    {
        icon: Gauge,
        title: 'No mandated stack',
        body: 'Live updates, pagination strategy and counting are choices behind an interface. Nothing here requires a particular queue, broadcaster or database engine.',
    },
]
</script>

<template>
    <Head title="About" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">About this panel</h1>
            <p class="text-muted-foreground text-sm">
                An administration panel for internet service providers — subscribers, routers and
                plans — built to stay responsive as the data grows rather than only while it is
                small.
            </p>
        </header>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <article v-for="p in principles" :key="p.title" class="bg-card flex gap-3 rounded-lg border p-4">
                <span class="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-md">
                    <component :is="p.icon" class="size-4" />
                </span>
                <div class="min-w-0">
                    <h2 class="text-sm font-semibold">{{ p.title }}</h2>
                    <p class="text-muted-foreground mt-1 text-sm">{{ p.body }}</p>
                </div>
            </article>
        </div>

        <section class="bg-card rounded-lg border p-4">
            <h2 class="text-sm font-semibold">Built with</h2>
            <ul class="text-muted-foreground mt-2 grid grid-cols-2 gap-1 text-sm sm:grid-cols-4">
                <li>Laravel</li>
                <li>Inertia</li>
                <li>Vue 3</li>
                <li>Tailwind CSS</li>
            </ul>
        </section>
    </div>
</template>
