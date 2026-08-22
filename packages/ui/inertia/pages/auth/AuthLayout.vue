<script setup lang="ts">
/**
 * The frame every packaged sign-in screen renders inside.
 *
 * PROMOTED FROM THE REFERENCE APP, where it was the one part of authentication
 * that had nothing application-specific in it: a centred card, the product's
 * name, a theme toggle. Everything else about auth was Fortify's or the demo's.
 *
 * ONE FAMILY, EVERY SCREEN. `Panel::authFamily('card')` (or `authLayout`) picks
 * the composition once. Login, register, password request/reset, OTP, and the
 * two-factor challenge all render inside this wrapper, so choosing a family
 * auto-couples signup and OTP to the same design as login.
 *
 * Families map to shadcn/vue auth blocks (reimplemented here, not pasted):
 *   centered  - signup-05 / otp-01 / otp-05 (default)
 *   muted     - login-03 / otp-03
 *   showcase  - login-02 / signup-02 / otp-02 (form left, cover right)
 *   split     - mirror of showcase (cover left, form right)
 *   card      - login-04 / signup-04 / otp-04 (muted page, inset form|image card)
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
import { Card, CardContent, ThemeToggle } from '@alxtexh-enterprise/panel'
import Toaster from '../../components/Toaster.vue'

const props = defineProps<{
    title?: string
    description?: string
    /**
     * Force a family for preview routes. Wins over shared `panel.authLayout`
     * and over `forceAuthLayout` from the page props.
     */
    layout?: string
}>()

export type AuthFamily = 'centered' | 'muted' | 'split' | 'showcase' | 'card'

const AUTH_FAMILIES: AuthFamily[] = ['centered', 'muted', 'split', 'showcase', 'card']

function resolveFamily(value: unknown): AuthFamily | null {
    return typeof value === 'string' && (AUTH_FAMILIES as string[]).includes(value)
        ? (value as AuthFamily)
        : null
}

/**
 * THE PORTAL'S OWN BRAND FIRST, and it took a measurement to notice this was
 * missing. `SharePanelProps` has always shared `panel.brand` -
 * `Panel::brandName()` resolved per request - and this layout read only `name`,
 * so every portal's sign-in screen showed the bare application name. The
 * reference app's client portal offered "Alxtexhpanel - Client" where it had
 * declared that brand, and its superadmin portal did the same. Five portals,
 * five distinct brands, one heading.
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
    const pageProps = usePage().props
    const brand = pageProps.panel && typeof pageProps.panel === 'object'
        ? (pageProps.panel as Record<string, unknown>).brand
        : null

    return String(brand || pageProps.name || 'Panel')
})

const authLayout = computed((): AuthFamily => {
    const fromProp = resolveFamily(props.layout)
    if (fromProp) {
        return fromProp
    }

    const pageProps = usePage().props
    const forced = resolveFamily(pageProps.forceAuthLayout)
    if (forced) {
        return forced
    }

    const shared = pageProps.panel && typeof pageProps.panel === 'object'
        ? (pageProps.panel as Record<string, unknown>).authLayout
        : null

    return resolveFamily(shared) ?? 'centered'
})

/** `Panel::authTestimonial()`, or null when the panel declared none. */
const testimonial = computed((): { quote: string; author: string; role: string | null } | null => {
    const pageProps = usePage().props
    const value = pageProps.panel && typeof pageProps.panel === 'object'
        ? (pageProps.panel as Record<string, unknown>).authTestimonial
        : null

    return value && typeof value === 'object' ? (value as { quote: string; author: string; role: string | null }) : null
})
</script>

<template>
    <!--
        Toast outlet for unconfigured social buttons on this screen. Auth pages
        sit outside PanelShell, so they need their own sonner root.
    -->
    <Toaster />

    <!-- ===== CENTERED (default / signup-05 / otp-01 / otp-05) ===== -->
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
                        <p v-if="description" class="text-center text-sm text-muted-foreground font-normal">
                            {{ description }}
                        </p>
                    </div>
                </div>

                <slot />
            </div>
        </div>
    </div>

    <!-- ===== MUTED (login-03 / otp-03) ===== -->
    <div
        v-else-if="authLayout === 'muted'"
        class="relative flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="flex w-full max-w-sm flex-col gap-6">
            <Link href="/" class="flex items-center gap-2 self-center font-medium">
                <span class="text-lg font-semibold tracking-tight">{{ appName }}</span>
                <span class="sr-only">{{ title }}</span>
            </Link>

            <div class="flex flex-col gap-6">
                <div class="space-y-2 text-center">
                    <h1 class="text-xl font-medium">{{ title }}</h1>
                    <p v-if="description" class="text-sm text-muted-foreground font-normal">
                        {{ description }}
                    </p>
                </div>

                <slot />
            </div>
        </div>
    </div>

    <!-- ===== CARD (login-04 / signup-04 / otp-04) ===== -->
    <!--
        MUTED PAGE, INSET CARD. The form and the image share one bordered
        surface rather than splitting the viewport. Matches the shadcn-vue
        login-04 / signup-04 / otp-04 composition without importing those
        blocks as dependencies.
    -->
    <div
        v-else-if="authLayout === 'card'"
        class="relative flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10"
    >
        <div class="absolute top-4 right-4">
            <ThemeToggle />
        </div>

        <div class="w-full max-w-sm md:max-w-4xl">
            <Card class="overflow-hidden p-0">
                <CardContent class="grid p-0 md:grid-cols-2">
                    <div class="flex flex-col justify-center p-6 md:p-8">
                        <div class="flex flex-col gap-6">
                            <div class="flex flex-col items-center gap-2 text-center">
                                <Link href="/" class="text-sm font-medium text-muted-foreground hover:text-foreground">
                                    {{ appName }}
                                </Link>
                                <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
                                <p v-if="description" class="text-balance text-sm text-muted-foreground font-normal">
                                    {{ description }}
                                </p>
                            </div>

                            <slot />
                        </div>
                    </div>

                    <div class="bg-muted relative hidden min-h-[280px] md:block">
                        <slot name="image">
                            <div class="absolute inset-0 flex items-center justify-center text-muted-foreground/40">
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
                </CardContent>
            </Card>
        </div>
    </div>

    <!-- ===== SHOWCASE ===== -->
    <!--
        THE MIRROR OF SPLIT: form on the LEFT, a preview panel on the RIGHT.
        Split puts branding first because its audience already has an
        account and wants the field fastest; showcase puts the form first
        because ITS extra panel is a pitch, not a destination - the person
        reading it has not decided to sign in yet, and making them scroll or
        squint past a testimonial to find the password field would be
        answering a question nobody asked.

        SAME `#image` SLOT AS SPLIT, deliberately not a second slot name -
        an installation that wants a screenshot in one wants it in both, and
        two names for the same idea is something to remember rather than
        something to reuse.

        THE TESTIMONIAL RENDERS ONLY WHEN `Panel::authTestimonial()` WAS
        CALLED. No placeholder quote: fabricated praise attributed to nobody
        reads as a bug wearing copy, which is worse than an empty panel.
    -->
    <div
        v-else-if="authLayout === 'showcase'"
        class="relative flex min-h-svh flex-col justify-center lg:grid lg:grid-cols-2"
    >
        <!-- Form panel - LEFT (first in DOM, so it lands in the first grid column with no order utility needed) -->
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
                            <p v-if="description" class="text-sm text-muted-foreground font-normal">
                                {{ description }}
                            </p>
                        </div>

                        <slot />
                    </div>
                </div>
            </div>
        </div>

        <!-- Preview panel - RIGHT, hidden below lg -->
        <div class="relative hidden flex-col bg-muted lg:flex">
            <!-- Brand name - top left, same placement split uses -->
            <div class="p-10">
                <Link href="/" class="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-80">
                    <span class="text-lg font-semibold tracking-tight">{{ appName }}</span>
                </Link>
            </div>

            <div class="flex flex-1 flex-col items-center justify-center gap-10 p-10">
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

                <div v-if="testimonial" class="max-w-md">
                    <p class="text-lg leading-relaxed font-medium text-foreground">
                        "{{ testimonial.quote }}"
                    </p>
                    <p class="mt-4 text-sm text-muted-foreground">
                        <span class="font-medium text-foreground">{{ testimonial.author }}</span>
                        <template v-if="testimonial.role"> - {{ testimonial.role }}</template>
                    </p>
                </div>
            </div>

            <div class="p-10" />
        </div>
    </div>

    <!-- ===== SPLIT ===== -->
    <!--
        LEFT: muted/neutral image panel - full height, bg-muted, decorative.
        RIGHT: form - vertically centred on bg-background.

        ON MOBILE the image panel collapses away entirely so the form is the
        first (and only) thing a small screen sees. The brand name moves into
        the form header on mobile, where it was always going to land first.

        THE IMAGE SLOT lets an installation swap in a real photo or
        illustration. Omitting it shows a tasteful SVG placeholder - enough
        to signal that an image belongs here without committing to one that
        would date the product or tie it to an industry.
    -->
    <div
        v-else
        class="relative flex min-h-svh flex-col justify-center lg:grid lg:grid-cols-2"
    >
        <!-- Image panel - hidden below lg -->
        <div class="relative hidden flex-col bg-muted lg:flex">
            <!-- Brand name - top left -->
            <div class="p-10">
                <Link href="/" class="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-80">
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
                            <p v-if="description" class="text-sm text-muted-foreground font-normal">
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
