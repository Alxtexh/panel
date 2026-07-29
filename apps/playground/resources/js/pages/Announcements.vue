<script setup lang="ts">
/**
 * The screen a plugin installed.
 *
 * WHAT IT PROVES rather than what it does: this page exists because
 * `AnnouncementsPlugin` asked for it. No route was added to `web.php`, no entry
 * to `Pages.php`, no panel provider edited - and the link in the sidebar, the
 * authentication in front of it and the tenant scope around it all came from the
 * portal it landed in.
 *
 * A REAL PLUGIN would ship this component too, and the application would resolve
 * it from the package rather than from its own pages directory - which is a
 * bundler question rather than a panel one.
 */
import { Head } from '@inertiajs/vue3'
import { Megaphone } from '@lucide/vue'

defineProps<{ portal: string }>()

defineOptions({ layout: { breadcrumbs: [{ title: 'Announcements', href: '/announcements' }] } })
</script>

<template>
    <Head title="Announcements" />

    <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-4 sm:p-6">
        <header class="flex flex-col gap-1">
            <h1 class="flex items-center gap-2 text-xl font-semibold tracking-tight sm:text-2xl">
                <Megaphone class="text-primary size-5" />
                Announcements
            </h1>
            <p class="text-muted-foreground text-sm">
                Notices for everybody working in this organisation.
            </p>
        </header>

        <div class="bg-card flex flex-col gap-2 rounded-lg border p-6">
            <p class="text-sm font-medium">This screen came from a plugin.</p>
            <p class="text-muted-foreground text-sm">
                It was installed into the <strong>{{ portal }}</strong> portal by
                <code class="bg-muted rounded px-1 py-0.5 text-xs">panelkit/announcements</code>,
                which added the route, the navigation entry and this page without any change to the
                application's own routes or page list.
            </p>
        </div>
    </div>
</template>
