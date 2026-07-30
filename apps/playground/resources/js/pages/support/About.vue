<script setup lang="ts">
/**
 * About the panel.
 *
 * THE FIRST VERSION WAS FOUR SLOGANS AND A LIST OF FRAMEWORK NAMES - the kind
 * of page that exists to fill a route. An About page earns its place by
 * answering questions someone actually has: what is this for, what does it do
 * well, what does it not do yet, and what version am I looking at. The last two
 * matter most, because a page that admits its limits is the one people trust
 * about everything else.
 */
import { Head, Link } from '@inertiajs/vue3';
import { BookOpen, Gauge, Layers, Lock, Zap } from '@lucide/vue';

defineOptions({
    layout: { breadcrumbs: [{ title: 'About', href: '/about' }] },
});

const principles = [
    {
        icon: Zap,
        title: 'Fast by construction',
        body: 'Lists page by seek rather than offset and never block on counting the whole table, so a screen behaves the same at two hundred rows and at two million.',
    },
    {
        icon: Layers,
        title: 'Declared once',
        body: 'A screen is a single class. Columns, filters, forms and actions are described in one place, and that structure reaches the browser once per session rather than on every click.',
    },
    {
        icon: Lock,
        title: 'Closed by default',
        body: 'A resource with no policy grants nothing. Tenant isolation is applied in the query layer rather than remembered at each call site, and every write is re-authorised on the server.',
    },
    {
        icon: Gauge,
        title: 'No mandated stack',
        body: 'Live updates, pagination and counting are choices behind an interface. Nothing here requires a particular queue, broadcaster or database engine.',
    },
];

/*
 * KEPT HONEST BY BEING EDITED. Four of these were listed as planned long after
 * they shipped, which is the direction that matters least - but a stale list is
 * a list nobody trusts in either direction, and the unchecked half is the only
 * part of this page that answers "can I rely on it yet".
 */
const capabilities = [
    { label: 'Subscribers, routers and plans', done: true },
    { label: 'Filtering, sorting and search across large tables', done: true },
    { label: 'Bulk actions and background CSV export', done: true },
    { label: 'Dashboard widgets and twelve chart types', done: true },
    { label: 'Per-user appearance and three navigation layouts', done: true },
    { label: 'File uploads on forms', done: true },
    { label: 'Notifications with a topbar bell', done: true },
    { label: 'Related records as tabs on a record page', done: true },
    { label: 'Soft deletes and a trash view', done: true },
    { label: 'Roles, a permission matrix and role templates', done: true },
    {
        label: 'Several portals from one command, each with its own guard',
        done: true,
    },
    {
        label: 'Backups: schedule, off-site copies, download, restore',
        done: true,
    },
    {
        label: 'An assistant that can look subscribers up, with approvals',
        done: true,
    },
    {
        label: 'A public REST API distinct from the panel’s own endpoints',
        done: true,
    },
    { label: 'Scheduled report delivery by email', done: true },
    {
        label: 'Retrieval over panel content, so the assistant cites rather than guesses',
        done: true,
    },
];
</script>

<template>
    <Head title="About" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-2">
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">
                About this panel
            </h1>
            <p class="text-sm text-muted-foreground">
                An administration panel for internet service providers -
                subscribers, routers and plans - built to stay responsive as the
                data grows rather than only while it is small.
            </p>
        </header>

        <!--
            THE DOCUMENTATION, AT THE TOP RATHER THAN IN A FOOTER. Somebody
            reading About is usually deciding whether to build with this; the
            page that answers that is one link, and burying it under four
            principle cards makes it the last thing they see.
        -->
        <Link
            href="/about/building"
            class="flex items-start gap-3 rounded-lg border bg-card p-4 transition-colors hover:bg-accent"
        >
            <span
                class="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
            >
                <BookOpen class="size-4" />
            </span>
            <span class="min-w-0">
                <span class="block text-sm font-semibold"
                    >Building a panel</span
                >
                <span class="mt-1 block text-sm text-muted-foreground">
                    What you need before you start, the commands in order, and
                    the decisions that are hard to change later - panels,
                    resources, forms, actions, permissions, tenancy and
                    operations.
                </span>
            </span>
        </Link>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <article
                v-for="p in principles"
                :key="p.title"
                class="flex gap-3 rounded-lg border bg-card p-4"
            >
                <span
                    class="flex size-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary"
                >
                    <component :is="p.icon" class="size-4" />
                </span>
                <div class="min-w-0">
                    <h2 class="text-sm font-semibold">{{ p.title }}</h2>
                    <p class="mt-1 text-sm text-muted-foreground">
                        {{ p.body }}
                    </p>
                </div>
            </article>
        </div>

        <!--
            What is here AND what is not. A capability list with no gaps reads
            as marketing; the unchecked half is the part that answers "can I
            rely on this yet".
        -->
        <section class="rounded-lg border bg-card p-4">
            <h2 class="text-sm font-semibold">What the panel does today</h2>
            <ul class="mt-3 flex flex-col gap-2">
                <li
                    v-for="c in capabilities"
                    :key="c.label"
                    class="flex items-start gap-2 text-sm"
                >
                    <span
                        class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full"
                        :class="
                            c.done
                                ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400'
                                : 'bg-muted text-muted-foreground'
                        "
                        aria-hidden="true"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            class="size-2.5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="4"
                        >
                            <path v-if="c.done" d="M20 6 9 17l-5-5" />
                            <path v-else d="M5 12h14" />
                        </svg>
                    </span>
                    <span :class="c.done ? '' : 'text-muted-foreground'">
                        {{ c.label }}
                        <span
                            v-if="!c.done"
                            class="text-xs text-muted-foreground/70"
                            >- planned</span
                        >
                    </span>
                </li>
            </ul>
        </section>

        <section class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div class="rounded-lg border bg-card p-4">
                <h2 class="text-sm font-semibold">Built with</h2>
                <ul
                    class="mt-2 grid grid-cols-2 gap-1 text-sm text-muted-foreground"
                >
                    <li>Laravel</li>
                    <li>Inertia</li>
                    <li>Vue 3</li>
                    <li>Tailwind CSS</li>
                </ul>
                <p class="mt-3 text-xs text-muted-foreground">
                    Charts are drawn directly rather than through a charting
                    library, so no part of the dashboard waits on a large
                    dependency to load.
                </p>
            </div>

            <div
                class="flex flex-col justify-between gap-3 rounded-lg border bg-card p-4"
            >
                <div>
                    <h2 class="text-sm font-semibold">Version</h2>
                    <p class="mt-1 text-sm text-muted-foreground">
                        You are running
                        <span class="font-medium text-foreground">0.6</span>.
                    </p>
                </div>
                <Link
                    href="/whats-new"
                    class="inline-flex w-fit items-center rounded-md border bg-background px-3 py-1.5 text-sm font-medium hover:bg-accent"
                >
                    See what changed
                </Link>
            </div>
        </section>
    </div>
</template>
