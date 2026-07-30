<script setup lang="ts">
/**
 * The user menu for the horizontal layout.
 *
 * SEPARATE FROM NavUser BECAUSE NavUser CALLS useSidebar(). That composable
 * reads the SidebarProvider context to decide which side to open on, and the
 * horizontal layout has no provider at all - rendering NavUser there throws on
 * mount, taking the whole page with it rather than degrading.
 *
 * The MENU CONTENTS are shared (UserMenuContent), so profile and sign-out stay
 * in one place; only the trigger differs, which is the only thing that actually
 * differs between the two layouts.
 */
import { usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import UserMenuContent from '@/components/UserMenuContent.vue';
import { getInitials } from '@/composables/useInitials';

const page = usePage();
const user = computed(() => page.props.auth.user);
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <button
                type="button"
                class="rounded-full transition-colors hover:bg-accent"
                :aria-label="`Account menu for ${user.name}`"
            >
                <Avatar class="size-8">
                    <AvatarImage
                        v-if="user.avatar"
                        :src="user.avatar"
                        :alt="user.name"
                    />
                    <AvatarFallback class="text-xs">{{
                        getInitials(user.name)
                    }}</AvatarFallback>
                </Avatar>
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
            class="min-w-56 rounded-lg"
            align="end"
            :side-offset="6"
        >
            <UserMenuContent :user="user" />
        </DropdownMenuContent>
    </DropdownMenu>
</template>
