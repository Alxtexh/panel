<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3';
import { buttonClasses } from '@panelkit/panel';
import { computed } from 'vue';
import Heading from '@/components/Heading.vue';
import { Separator } from '@/components/ui/separator';
import { useCurrentUrl } from '@/composables/useCurrentUrl';
import { toUrl } from '@/lib/utils';
import { edit as editProfile } from '@/routes/profile';
import { edit as editSecurity } from '@/routes/security';
import { index as settingsIndex } from '@/routes/settings';
import type { NavItem } from '@/types';

const page = usePage();

const sidebarNavItems = computed<NavItem[]>(() => [
    {
        title: 'Profile',
        href: editProfile(),
    },
    {
        title: 'Security',
        href: editSecurity(),
    },
    /*
     * Last, and named for what it is. The two above are about the person
     * signed in; this one changes what every colleague sees, so it reads
     * wrongly anywhere in the middle of a list of personal settings.
     */
    {
        title: 'Organisation',
        href: '/settings/organisation',
    },
    /*
     * Which organisations you belong to - personal, like Profile, but it
     * reads most naturally next to Organisation: one is the workspace from
     * the inside, the other is the list of them.
     */
    {
        title: 'Workspaces',
        href: '/settings/workspaces',
    },
    /*
     * OMITTED, NOT DISABLED, without the ability - the same call the
     * settings index makes: a link that always 403s advertises a page and
     * then refuses it.
     */
    ...((page.props.auth as any)?.can?.manageAssistant
        ? [{ title: 'Assistant', href: '/settings/assistant' }]
        : []),
]);

/*
 * ROLES IS NOT LISTED HERE, and its absence is deliberate.
 *
 * These are SETTINGS: the person signed in, and the organisation they belong
 * to. Who may do what is administration of other people, which is the subject
 * of User management - and that screen already has a Roles tab, so listing it
 * here was the same destination in two places with different names.
 *
 * The screen still exists and still routes; User management is the way in.
 */
const { isCurrentOrParentUrl } = useCurrentUrl();
</script>

<template>
    <div class="px-4 py-6">
        <!--
            BACK TO THE INDEX, because arriving here directly (a bookmark, a
            reload) is not the same as having come from it - roadmap 3.7's
            searchable list is the front door, and a door only one direction
            can reach is not a door.
        -->
        <Link
            :href="settingsIndex()"
            class="mb-2 inline-block text-xs text-muted-foreground hover:text-foreground"
        >
            ← All settings
        </Link>

        <Heading
            title="Settings"
            description="Manage your profile, security and organisation"
        />

        <div class="flex flex-col lg:flex-row lg:space-x-12">
            <aside class="w-full max-w-xl lg:w-48">
                <nav
                    class="flex flex-col space-y-1 space-x-0"
                    aria-label="Settings"
                >
                    <!-- Classes on the link itself - see ErrorScreen's note. -->
                    <Link
                        v-for="item in sidebarNavItems"
                        :key="toUrl(item.href)"
                        :href="item.href"
                        :class="[
                            buttonClasses({ variant: 'ghost' }),
                            'w-full justify-start',
                            { 'bg-muted': isCurrentOrParentUrl(item.href) },
                        ]"
                    >
                        <component :is="item.icon" class="h-4 w-4" />
                        {{ item.title }}
                    </Link>
                </nav>
            </aside>

            <Separator class="my-6 lg:hidden" />

            <div class="flex-1 md:max-w-2xl">
                <section class="max-w-xl space-y-12">
                    <slot />
                </section>
            </div>
        </div>
    </div>
</template>
