<script setup lang="ts">
/**
 * The help centre.
 *
 * A content page, not a resource: it has no table, no policy and no model, so
 * it does not go through the resource registry. It reaches the nav through the
 * static support list in usePanelNav instead.
 */
import { Head, Link } from '@inertiajs/vue3'
import { BookOpen, LifeBuoy, MessageSquare, Rocket, Search, Users } from '@lucide/vue'

defineOptions({ layout: { breadcrumbs: [{ title: 'Help', href: '/help' }] } })

const topics = [
    {
        icon: Rocket,
        title: 'Getting started',
        body: 'Create your first plan, register a router, then add subscribers against them. Everything else builds on those three.',
    },
    {
        icon: Users,
        title: 'Managing subscribers',
        body: 'Filter by status or expiry, change a status inline from the list, or select many and apply one action to all of them.',
    },
    {
        icon: Search,
        title: 'Finding anything',
        body: 'Press ⌘K (Ctrl K on Windows) to search subscribers, routers and plans from anywhere in the panel.',
    },
    {
        icon: BookOpen,
        title: 'Exports',
        body: 'Any filtered list can be exported to CSV. The export runs in the background and matches exactly what you filtered to.',
    },
]
</script>

<template>
    <Head title="Help" />

    <div class="mx-auto flex w-full max-w-4xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-1">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">How can we help?</h1>
            <p class="text-muted-foreground text-sm">
                Guides for the things operators do most often.
            </p>
        </header>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <article v-for="topic in topics" :key="topic.title" class="bg-card flex gap-3 rounded-lg border p-4">
                <span class="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-md">
                    <component :is="topic.icon" class="size-4" />
                </span>
                <div class="min-w-0">
                    <h2 class="text-sm font-semibold">{{ topic.title }}</h2>
                    <p class="text-muted-foreground mt-1 text-sm">{{ topic.body }}</p>
                </div>
            </article>
        </div>

        <section class="bg-card flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4">
            <div class="flex items-start gap-3">
                <span class="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-md">
                    <LifeBuoy class="size-4" />
                </span>
                <div>
                    <h2 class="text-sm font-semibold">Still stuck?</h2>
                    <p class="text-muted-foreground text-sm">
                        Check the frequently asked questions, or get in touch.
                    </p>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <Link
                    href="/faq"
                    class="bg-background hover:bg-accent inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium"
                >
                    <MessageSquare class="size-4" />
                    Read the FAQ
                </Link>
            </div>
        </section>
    </div>
</template>
