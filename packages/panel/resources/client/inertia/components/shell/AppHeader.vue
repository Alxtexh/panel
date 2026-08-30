<script setup lang="ts">
import { Link, usePage } from '@inertiajs/vue3'
import { BookOpen, Folder, House, Menu, Search } from '@lucide/vue'
import { computed } from 'vue'
import { PkButton as Button, buttonClasses } from '@alxtexh-enterprise/panel'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@alxtexh-enterprise/panel'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@alxtexh-enterprise/panel'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@alxtexh-enterprise/panel'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@alxtexh-enterprise/panel'
import { toUrl } from '@alxtexh-enterprise/panel'
import { useCurrentUrl } from '../../composables/useCurrentUrl'
import type { User } from '../../types'
import type { BreadcrumbItem, NavItem } from '../../types'
import AppLogo from './AppLogo.vue'
import Breadcrumbs from './Breadcrumbs.vue'
import UserInfo from './UserInfo.vue'

type Props = {
    breadcrumbs?: BreadcrumbItem[]
}

const props = withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
})

const page = usePage()

/**
 * Home, for the portal actually being served.
 *
 * THE SERVER KNOWS WHICH PANEL IS SERVING and the client should not guess - the
 * same reasoning `AppSidebar` carries. A hardcoded `/dashboard` took a generated
 * portal's brand link out of that portal.
 */
const panelHome = computed<string>(
    () => (page.props.panelHome as { href?: string } | undefined)?.href ?? '/',
)
/**
 * TYPED THROUGH THE PACKAGE'S OWN `User`. `usePage()` props are untyped, so
 * this read is `unknown` under a consuming application's checker even where
 * ours tolerates it - and the error lands in their build, on a file they did
 * not write.
 */
const auth = computed(() => (page.props.auth as { user?: User | null } | undefined) ?? {})
const { isCurrentUrl, whenCurrentUrl } = useCurrentUrl()

const activeItemStyles = 'text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'

/*
 * COMPUTED, because the destination is. `panelHome` is resolved from the shared
 * props rather than hardcoded, so a plain array would capture whatever it was
 * at setup and never follow a panel change.
 */
const mainNavItems = computed<NavItem[]>(() => [
    {
        title: 'Dashboard',
        href: panelHome.value,
        icon: House,
    },
])

const rightNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/vue-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#vue',
        icon: BookOpen,
    },
]
</script>

<template>
    <div>
        <div class="border-b border-sidebar-border/80">
            <div class="flex h-16 w-full items-center px-4">
                <!-- Mobile Menu -->
                <div class="lg:hidden">
                    <Sheet>
                        <SheetTrigger :as-child="true">
                            <Button variant="ghost" size="icon" class="mr-2 h-9 w-9">
                                <Menu class="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" class="w-[300px] p-6">
                            <SheetTitle class="sr-only">Navigation menu</SheetTitle>
                            <SheetHeader class="flex justify-start text-left">
                                <!-- The tenant's mark, or its name. Never a
                                     framework badge - see AppLogo. -->
                                <AppLogo show-name />
                            </SheetHeader>
                            <div class="flex h-full flex-1 flex-col justify-between space-y-4 py-6">
                                <nav class="-mx-3 space-y-1">
                                    <Link
                                        v-for="item in mainNavItems"
                                        :key="item.title"
                                        :href="item.href"
                                        class="flex items-center gap-x-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent"
                                        :class="whenCurrentUrl(item.href, activeItemStyles)"
                                    >
                                        <component
                                            v-if="item.icon"
                                            :is="item.icon"
                                            class="h-5 w-5"
                                        />
                                        {{ item.title }}
                                    </Link>
                                </nav>
                                <div class="flex flex-col space-y-4">
                                    <a
                                        v-for="item in rightNavItems"
                                        :key="item.title"
                                        :href="toUrl(item.href)"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex items-center space-x-2 text-sm font-medium"
                                    >
                                        <component
                                            v-if="item.icon"
                                            :is="item.icon"
                                            class="h-5 w-5"
                                        />
                                        <span>{{ item.title }}</span>
                                    </a>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                <Link :href="panelHome" class="flex items-center gap-x-2">
                    <AppLogo />
                </Link>

                <!-- Desktop Menu -->
                <div class="hidden h-full lg:flex lg:flex-1">
                    <NavigationMenu class="ml-10 flex h-full items-stretch">
                        <NavigationMenuList class="flex h-full items-stretch space-x-2">
                            <NavigationMenuItem
                                v-for="(item, index) in mainNavItems"
                                :key="index"
                                class="relative flex h-full items-center"
                            >
                                <Link
                                    :class="[
                                        navigationMenuTriggerStyle(),
                                        whenCurrentUrl(item.href, activeItemStyles),
                                        'h-9 cursor-pointer px-3',
                                    ]"
                                    :href="item.href"
                                >
                                    <component
                                        v-if="item.icon"
                                        :is="item.icon"
                                        class="mr-2 h-4 w-4"
                                    />
                                    {{ item.title }}
                                </Link>
                                <div
                                    v-if="isCurrentUrl(item.href)"
                                    class="absolute bottom-0 left-0 h-0.5 w-full translate-y-px bg-black dark:bg-white"
                                ></div>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div class="ml-auto flex items-center space-x-2">
                    <div class="relative flex items-center space-x-1">
                        <Button variant="ghost" size="icon" class="group h-9 w-9 cursor-pointer">
                            <Search class="size-5 opacity-80 group-hover:opacity-100" />
                        </Button>

                        <div class="hidden space-x-1 lg:flex">
                            <template v-for="item in rightNavItems" :key="item.title">
                                <TooltipProvider :delay-duration="0">
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <!-- Classes on the anchor itself -
                                                 see ErrorScreen's note. -->
                                            <a
                                                :href="toUrl(item.href)"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                :class="[
                                                    buttonClasses({
                                                        variant: 'ghost',
                                                        size: 'icon',
                                                    }),
                                                    'group h-9 w-9 cursor-pointer',
                                                ]"
                                            >
                                                <span class="sr-only">{{ item.title }}</span>
                                                <component
                                                    :is="item.icon"
                                                    class="size-5 opacity-80 group-hover:opacity-100"
                                                />
                                            </a>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{{ item.title }}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </template>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger :as-child="true">
                            <Button
                                variant="ghost"
                                size="icon"
                                class="relative size-10 w-auto rounded-full p-1 focus-within:ring-2 focus-within:ring-primary"
                            >
                                <UserInfo v-if="auth.user" :user="auth.user" :show-name="false" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" class="w-56">
                            <slot name="userMenu" :user="auth.user" />
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>

        <div
            v-if="props.breadcrumbs.length > 1"
            class="flex w-full border-b border-sidebar-border/70"
        >
            <div class="flex h-12 w-full items-center justify-start px-4 text-neutral-500">
                <Breadcrumbs :breadcrumbs="breadcrumbs" />
            </div>
        </div>
    </div>
</template>
