<script setup lang="ts">
/**
 * The frame every packaged sign-in screen renders inside.
 *
 * PROMOTED FROM THE REFERENCE APP, where it was the one part of authentication
 * that had nothing application-specific in it: a centred card, the product's
 * name, a theme toggle. Everything else about auth was Fortify's or the demo's.
 *
 * THE PRODUCT'S NAME, NOT A FRAMEWORK BADGE. There is no tenant before sign-in
 * - the hostname might identify one, a shared sign-in screen does not - so
 * there is no organisation logo to show and nothing tenant-specific to say.
 * What belongs here is whoever operates the panel, which is `APP_NAME`. A
 * framework mark would tell every customer whose software this is, which is the
 * one fact a white-labelled panel exists to not volunteer.
 *
 * LIGHT OR DARK ONLY, AND NOT THE APPEARANCE DRAWER. Accent, density, sidebar
 * side and font size are saved against an ACCOUNT, so choosing them on a login
 * screen writes them to this browser alone and they vanish the moment the same
 * person signs in elsewhere - which reads as the panel forgetting what it was
 * told. Light-versus-dark stays because the reason for it is physical rather
 * than organisational: nobody on a dark-adapted screen at night should be
 * blinded by a sign-in form first.
 */
import { Link, usePage } from '@inertiajs/vue3'
import { computed } from 'vue'
import { ThemeToggle } from '@alxtexh-enterprise/panel'

defineProps<{
    title?: string
    description?: string
}>()

/**
 * THE PORTAL'S OWN BRAND FIRST, and it took a measurement to notice this was
 * missing. `SharePanelProps` has always shared `panel.brand` -
 * `Panel::brandName()` resolved per request - and this layout read only `name`,
 * so every portal's sign-in screen showed the bare application name. The
 * reference app's client portal offered "Alxtexhpanel" where it had declared
 * "Alxtexhpanel — Client", and its superadmin portal did the same. Five portals,
 * five distinct brands, one heading.
 *
 * IT LOOKS CORRECT, WHICH IS WHY IT LASTED. A sign-in page showing the product's
 * name is not obviously wrong - it is only wrong next to the portal it belongs
 * to, and nobody opens two sign-in screens side by side.
 *
 * FALLING THROUGH IS THE INTERESTING PART, not the lookup. A tenant panel
 * resolves its brand from the signed-in tenant - the reference app's admin panel
 * is `tenant()?->name` - and BEFORE SIGN-IN there is no tenant, so it resolves
 * null. That must land on the application name rather than on an empty heading,
 * which is the state this screen is always in for a tenant portal.
 *
 * Empty strings fall through too. `??` alone would not: a brand resolving to ''
 * is falsy but not nullish, and it would render a blank heading that reads as a
 * broken page rather than as an unset option.
 */
const appName = computed(() => {
    const props = usePage().props
    const brand = props.panel && typeof props.panel === 'object'
        ? (props.panel as Record<string, unknown>).brand
        : null

    return String(brand || props.name || 'Panel')
})
</script>

<template>
    <div
        class="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm">
            <div class="flex flex-col gap-8">
                <div class="flex flex-col items-center gap-4">
                    <!--
                        A LINK HOME, AND A TITLE ONLY A SCREEN READER HEARS.
                        Both were in the reference app's copy of this layout and
                        not in this one, so promoting the file lost them. The
                        heading below is a visual `<h1>`; the `sr-only` span is
                        what gives the link an accessible name, without which it
                        announces as the product name twice over.
                    -->
                    <Link href="/" class="flex flex-col items-center gap-2 font-medium">
                        <span class="mb-1 text-lg font-semibold tracking-tight">
                            {{ appName }}
                        </span>
                        <span class="sr-only">{{ title }}</span>
                    </Link>

                    <div class="space-y-2 text-center">
                        <h1 class="text-xl font-medium">{{ title }}</h1>
                        <p v-if="description" class="text-center text-sm text-muted-foreground">
                            {{ description }}
                        </p>
                    </div>
                </div>

                <slot />
            </div>
        </div>
    </div>
</template>
