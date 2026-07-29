<script setup lang="ts">
/**
 * What a portal shows at its own root.
 *
 * IT EXISTS BECAUSE A GENERATED PORTAL 404ED ON ITSELF. `make:panel platform`
 * produced `/platform/tenants` and nothing at `/platform`, so the first thing
 * anybody did with a portal they had just created was hit an error page - which
 * reads as "the generator did not work".
 *
 * IT IS NOT A DASHBOARD. A dashboard is widgets over data somebody chose; this
 * is a directory of what the portal contains, which is the only thing that can
 * be said generically about a portal nobody has designed yet. An application
 * that wants more replaces the route.
 *
 * THE EMPTY STATE IS THE IMPORTANT ONE. Between `make:panel` and the first
 * `make:panel-resource` a portal genuinely has nothing in it, and a blank page
 * in that minute looks like a failure rather than a next step.
 */
import { Head, Link } from '@inertiajs/vue3'
import { PkSkeleton } from '@panelkit/ui'
import { Globe, Terminal } from '@lucide/vue'
import { computed } from 'vue'

/*
 * NO LAYOUT IS NAMED HERE, and that is the difference between a page in an
 * application and a page in a package. The shell - sidebar, header, account menu
 * - belongs to the application, which already has one; a package that imported
 * a layout would be a package that dictates what the whole screen looks like.
 * The consuming application wraps this the same way it wraps its own pages.
 */

interface ResourceLink {
    key: string
    title: string
    href: string
    icon: string
    group: string | null
}

const props = defineProps<{
    panel: { id: string; name: string; path: string; central: boolean }
    resources: ResourceLink[]
}>()

/**
 * Grouped the way the sidebar groups them, so the two agree.
 *
 * Ungrouped entries come first rather than under an invented heading: a group
 * of one called "Other" is noise, and the sidebar already made that decision.
 */
const groups = computed(() => {
    const ungrouped: ResourceLink[] = []
    const grouped = new Map<string, ResourceLink[]>()

    for (const resource of props.resources) {
        if (!resource.group) {
            ungrouped.push(resource)
            continue
        }

        grouped.set(resource.group, [...(grouped.get(resource.group) ?? []), resource])
    }

    return [
        ...(ungrouped.length ? [{ name: null as string | null, items: ungrouped }] : []),
        ...[...grouped.entries()].map(([name, items]) => ({ name, items })),
    ]
})
</script>

<template>
    <Head :title="props.panel.name" />

    <div class="flex flex-col gap-6 p-4 sm:p-6">
        <div>
            <h1 class="text-xl font-semibold tracking-tight">{{ props.panel.name }}</h1>
            <p class="text-muted-foreground mt-1 text-sm">
                <template v-if="props.panel.central">
                    <!--
                        SAYING SO MATTERS. A central portal sees across every
                        organisation, and somebody who does not know that reads
                        a list of everybody's records as a list of their own.
                    -->
                    This portal sees every organisation on the installation.
                </template>
                <template v-else>
                    Everything here is scoped to the organisation you are signed in to.
                </template>
            </p>
        </div>

        <!--
            THE EMPTY STATE, with the command that fixes it. This is the minute
            between generating a portal and giving it a resource, and a blank
            page in that minute looks like the generator failed.
        -->
        <div
            v-if="!props.resources.length"
            class="flex flex-col items-start gap-3 rounded-lg border border-dashed p-6"
        >
            <span class="bg-muted flex size-9 items-center justify-center rounded-md">
                <Globe class="text-muted-foreground size-4" />
            </span>

            <div>
                <p class="text-sm font-medium">This portal has no resources yet.</p>
                <p class="text-muted-foreground mt-1 text-sm">
                    It is registered, routed and reachable - there is simply nothing in it. Give
                    it a screen:
                </p>
            </div>

            <code class="bg-muted/60 flex items-center gap-2 rounded-md px-3 py-2 font-mono text-xs">
                <Terminal class="size-3.5 shrink-0" />
                php artisan make:panel-resource Model --panel={{ props.panel.id }} --generate
            </code>

            <!-- A skeleton of what will be here, so the shape of the page is
                 legible before it has any content. -->
            <PkSkeleton variant="row" :count="2" label="No resources yet" class="w-full opacity-40" />
        </div>

        <section v-for="(group, i) in groups" :key="i" class="flex flex-col gap-2">
            <h2 v-if="group.name" class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                {{ group.name }}
            </h2>

            <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                    v-for="resource in group.items"
                    :key="resource.key"
                    :href="resource.href"
                    class="bg-card hover:bg-accent rounded-lg border px-4 py-3 text-sm font-medium transition-colors"
                >
                    {{ resource.title }}
                    <span class="text-muted-foreground mt-0.5 block font-mono text-xs font-normal">
                        {{ resource.href }}
                    </span>
                </Link>
            </div>
        </section>
    </div>
</template>
