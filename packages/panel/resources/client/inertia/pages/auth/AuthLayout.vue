<script setup lang="ts">
/**
 * The frame every packaged sign-in screen renders inside.
 *
 * PROMOTED FROM THE REFERENCE APP, where it was the one part of authentication
 * that had nothing application-specific in it: a centred card, the product's
 * name, a theme toggle. Everything else about auth was Fortify's or the demo's.
 *
 * TWO LAYOUTS, ONE COMPONENT. `Panel::authLayout('split')` selects the
 * side-by-side design: branding panel on the left, form on the right. The
 * default is 'centered' - the existing card-in-the-middle style. Either way
 * the choice comes from `panel.authLayout` in the shared Inertia props and
 * propagates automatically to every auth screen - login, register, password
 * request/reset, OTP, lock - because they all render inside this wrapper.
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

const authLayout = computed((): 'centered' | 'split' => {
    const props = usePage().props
    const layout = props.panel && typeof props.panel === 'object'
        ? (props.panel as Record<string, unknown>).authLayout
        : null

    return layout === 'split' ? 'split' : 'centered'
})
</script>

<template>
    <!-- ===== CENTERED (default) ===== -->
    <div
        v-if="authLayout === 'centered'"
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

    <!-- ===== SPLIT ===== -->
    <!--
        LEFT: muted/neutral image panel — full height, bg-muted, decorative.
        RIGHT: form — vertically centred on bg-background.

        ON MOBILE the image panel collapses away entirely so the form is the
        first (and only) thing a small screen sees. The brand name moves into
        the form header on mobile, where it was always going to land first.

        THE IMAGE SLOT lets an installation swap in a real photo or
        illustration. Omitting it shows a tasteful SVG placeholder — enough
        to signal that an image belongs here without committing to one that
        would date the product or tie it to an industry.
    -->
    <div
        v-else
        class="relative min-h-svh lg:grid lg:grid-cols-2"
    >
        <!-- Image panel — hidden below lg -->
        <div class="relative hidden lg:flex flex-col bg-muted">
            <!-- Brand name — top left -->
            <div class="p-10">
                <Link href="/" class="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity">
                    <span class="text-lg font-semibold tracking-tight">{{ appName }}</span>
                </Link>
            </div>

            <!--
                IMAGE AREA. The slot lets a consumer pass a real <img> or
                <video>. The default SVG is a subtle geometric placeholder
                that reads as "an image goes here" without picking sides
                about what the product does.
            -->
            <div class="flex flex-1 items-center justify-center p-10">
                <slot name="image">
                    <div class="flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-dashed border-muted-foreground/25 text-muted-foreground/40">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="size-16"
                        >
                            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                            <circle cx="9" cy="9" r="2" />
                            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
                        </svg>
                    </div>
                </slot>
            </div>

            <div class="p-10" />
        </div>

        <!-- Form panel -->
        <div class="flex flex-col bg-background">
            <!-- Mobile: brand strip -->
            <div class="flex items-center justify-between border-b px-6 py-4 lg:hidden">
                <Link href="/" class="text-base font-semibold tracking-tight">
                    {{ appName }}
                </Link>
                <ThemeToggle />
            </div>

            <div class="relative flex flex-1 flex-col items-center justify-center p-6 md:p-12">
                <!-- Desktop theme toggle -->
                <div class="absolute top-4 right-4 hidden lg:block">
                    <ThemeToggle />
                </div>

                <div class="w-full max-w-sm">
                    <div class="flex flex-col gap-8">
                        <div class="flex flex-col gap-1.5">
                            <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
                            <p v-if="description" class="text-sm text-muted-foreground">
                                {{ description }}
                            </p>
                        </div>

                        <slot />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
