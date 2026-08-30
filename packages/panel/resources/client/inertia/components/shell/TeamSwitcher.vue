<script setup lang="ts">
/**
 * The workspace switcher, at the top of the sidebar rather than buried on a
 * settings page.
 *
 * SAME SHAPE AS `NavUser`, deliberately: `DropdownMenu` + a `SidebarMenuButton`
 * trigger + `ChevronsUpDown`. Two controls in the same rail that look
 * unrelated would each need learning once; one pattern used twice is learned
 * once and recognised the second time.
 *
 * RENDERS NOTHING when `workspaces` is absent from the shared props -
 * `SharePanelProps` sends `null` for the ordinary single-tenant panel, where
 * `Tenants::switchable()` is false, so this never queries and never appears.
 * `AppSidebar` falls back to the plain logo link in that case.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { Building2, Check, ChevronsUpDown, Plus } from '@lucide/vue'
import { computed } from 'vue'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from '@alxtexh-enterprise/panel'

type Workspace = { id: number | string; name: string; slug: string | null }
type Workspaces = {
    current: Workspace | null
    available: Workspace[]
    switchUrl: string
    manageUrl: string | null
} | null

const page = usePage()
const workspaces = computed(() => (page.props.workspaces as Workspaces | undefined) ?? null)
const { isMobile, state } = useSidebar()

/**
 * A NUMBERED SHORTCUT PER ROW, ⌘1 THROUGH ⌘9. Capped there rather than
 * continuing into two-digit numbers, which stop being a single keystroke and
 * stop being the thing the affordance promised.
 */
function shortcut(index: number): string | null {
    return index < 9 ? `⌘${index + 1}` : null
}
</script>

<template>
    <SidebarMenu v-if="workspaces">
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger as-child>
                    <SidebarMenuButton
                        size="lg"
                        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                    >
                        <div
                            class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                        >
                            <Building2 class="size-4" />
                        </div>
                        <div class="grid flex-1 text-left text-sm leading-tight">
                            <span class="truncate font-medium">{{
                                workspaces.current?.name ?? 'Choose a workspace'
                            }}</span>
                            <span class="text-muted-foreground truncate text-xs"
                                >Switch workspace</span
                            >
                        </div>
                        <ChevronsUpDown class="ml-auto size-4" />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    class="w-(--reka-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                    :side="isMobile ? 'bottom' : state === 'collapsed' ? 'right' : 'bottom'"
                    align="start"
                    :side-offset="4"
                >
                    <DropdownMenuLabel class="text-muted-foreground text-xs font-normal"
                        >Workspaces</DropdownMenuLabel
                    >

                    <DropdownMenuItem
                        v-for="(workspace, index) in workspaces.available"
                        :key="workspace.id"
                        as-child
                        :disabled="workspace.id === workspaces.current?.id"
                        class="gap-2 p-2"
                    >
                        <!--
                            `method="put"`, THE SAME SHAPE `DefaultAccountMenuItems`
                            USES FOR SIGN-OUT. A raw `@click` on `DropdownMenuItem`
                            is not this codebase's pattern for a menu row that
                            performs an action rather than a plain GET - Reka's own
                            interaction handling owns the native click, and `Link`
                            is the documented way to ride along with it rather than
                            race it.
                        -->
                        <Link
                            class="flex w-full cursor-pointer items-center gap-2"
                            :href="workspaces.switchUrl"
                            method="put"
                            :data="{ workspace: workspace.id }"
                            as="button"
                        >
                            <div class="flex size-6 items-center justify-center rounded-md border">
                                <Building2 class="size-3.5 shrink-0" />
                            </div>
                            {{ workspace.name }}
                            <Check
                                v-if="workspace.id === workspaces.current?.id"
                                class="ml-auto size-4"
                                aria-hidden="true"
                            />
                            <span
                                v-else-if="shortcut(index)"
                                class="text-muted-foreground ml-auto text-xs"
                            >
                                {{ shortcut(index) }}
                            </span>
                        </Link>
                    </DropdownMenuItem>

                    <template v-if="workspaces.manageUrl">
                        <DropdownMenuSeparator />
                        <DropdownMenuItem as-child class="gap-2 p-2">
                            <Link :href="workspaces.manageUrl">
                                <div
                                    class="flex size-6 items-center justify-center rounded-md border bg-transparent"
                                >
                                    <Plus class="size-4" />
                                </div>
                                <span class="text-muted-foreground font-medium">Add workspace</span>
                            </Link>
                        </DropdownMenuItem>
                    </template>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    </SidebarMenu>
</template>
