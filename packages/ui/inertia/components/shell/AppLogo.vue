<script setup lang="ts">
/**
 * The brand mark.
 *
 * A LOGO REPLACES THE NAME; it does not sit beside it. Filament works this way
 * and the reason is spatial rather than stylistic: the topbar has to hold
 * navigation, search, a bell, settings and an avatar, and a wordmark next to an
 * icon is the one element there that carries no information the icon does not
 * already carry. On the horizontal layout it was the difference between a menu
 * that fitted and one that scrolled.
 *
 * THE TENANT'S MARK WINS OVER THE PRODUCT'S. Someone signed into their own
 * panel should see their own organisation, not the software's badge - that is
 * the whole point of white-labelling, and it is also the honest answer to
 * "which tenant am I in" when somebody administers several.
 *
 * NO LOGO MEANS THE NAME, NOT A STAND-IN. The fallback used to be the framework
 * badge, which is the one thing on screen that is actively wrong: it tells the
 * customer whose panel this is, and the answer is neither them nor the product
 * they bought. A shipped default mark also makes "has this organisation set a
 * logo yet?" unanswerable at a glance, because something is always there.
 *
 * So an organisation with no mark gets its NAME - which is real information,
 * always available, and reads correctly in the one place it has to.
 */
import { usePage } from '@inertiajs/vue3'
import { computed } from 'vue'

withDefaults(defineProps<{ showName?: boolean }>(), { showName: false })

const page = usePage()

/**
 * The tenant's name, falling back to the product's only outside a tenant.
 *
 * `page.props.name` IS NOT GUARANTEED. It is what Laravel's own Vue starter
 * kit shares, and `panel:install` runs on any Laravel app - one scaffolded
 * without that starter kit's `HandleInertiaRequests` shares neither prop, and
 * `String(undefined)` renders the literal word "undefined" as the panel's own
 * name. `'Panel'` is the same default `PanelSidebar` shipped before this
 * component replaced it.
 */
const name = computed(
    () => (page.props.panelBrand as string | null) ?? (page.props.name as string | null) ?? 'Panel',
)

const logo = computed(() => (page.props.panelLogo as string | null) ?? null)

/**
 * Initials, for the collapsed rail where a name does not fit.
 *
 * Two letters at most: three is unreadable at 32px, and the point of the rail
 * is to be scanned rather than read.
 */
const initials = computed(() =>
    name.value
        .split(/\s+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0]!.toUpperCase())
        .join(''),
)
</script>

<template>
    <div class="flex items-center gap-2">
        <!--
            `object-contain` on a fixed square, never `cover`. A logo is a
            drawing with intended proportions; cropping it to fill a box is how
            a wordmark loses its last letter.
        -->
        <img
            v-if="logo"
            :src="logo"
            :alt="name"
            :title="name"
            class="size-8 shrink-0 rounded-md object-contain"
        />

        <!--
            No logo and no room for the name: initials of the ORGANISATION, not
            a product badge. Rendered only when the name itself is suppressed,
            so the expanded sidebar shows the name alone rather than the name
            next to a square repeating its first letters.
        -->
        <div
            v-else-if="!showName"
            class="flex aspect-square size-8 shrink-0 items-center justify-center rounded-md bg-sidebar-primary text-xs font-semibold text-sidebar-primary-foreground"
            :title="name"
        >
            {{ initials }}
        </div>

        <!-- A logo replaces the name; the two never sit side by side. -->
        <span v-if="showName && !logo" class="truncate text-sm leading-tight font-semibold">{{
            name
        }}</span>
    </div>
</template>
