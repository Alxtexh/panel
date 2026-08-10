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
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { Avatar, AvatarFallback, AvatarImage } from '@alxtexh-enterprise/panel'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@alxtexh-enterprise/panel'
import { getInitials } from '../../composables/useInitials'
import type { User } from '../../types'

const page = usePage()
/**
 * TYPED, NOT READ OFF AN UNTYPED BAG. `usePage()` returns props the checker
 * knows nothing about, so `page.props.auth.user` is a property access on
 * `unknown` - which this package's own tsconfig tolerated and a consuming
 * application's did not. The failure then lands in THEIR build, on a file they
 * did not write and cannot edit.
 */
/**
 * THE PACKAGE'S OWN `User`, not a narrower shape invented here.
 *
 * A local guess at the fields compiles until somebody passes the value to
 * `UserInfo`, which wants the whole thing - and the error then lands in a
 * CONSUMER'S build, naming a packaged file they cannot edit. One type, one
 * source.
 */
type SharedAuth = { user?: User | null }

const user = computed(() => (page.props.auth as SharedAuth | undefined)?.user ?? null)
</script>

<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <button
                type="button"
                class="rounded-full transition-colors hover:bg-accent"
                :aria-label="`Account menu for ${user?.name}`"
            >
                <Avatar class="size-8">
                    <AvatarImage v-if="user?.avatar" :src="user?.avatar" :alt="user?.name" />
                    <AvatarFallback class="text-xs">{{
                        getInitials(user?.name ?? undefined)
                    }}</AvatarFallback>
                </Avatar>
            </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent class="min-w-56 rounded-lg" align="end" :side-offset="6">
            <slot name="menu" :user="user" />
        </DropdownMenuContent>
    </DropdownMenu>
</template>
