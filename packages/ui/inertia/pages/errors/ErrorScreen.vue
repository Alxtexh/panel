<script setup lang="ts">
/* MOVED FROM THE REFERENCE APP, verbatim. */
/**
 * The shell every error page shares.
 *
 * ONE COMPONENT, FIVE STATUSES, because the difference between a 403 and a 404
 * is what you say, not how it looks. Five separately-styled pages drift: one
 * gets a "go back" button, another does not, and the 500 is the one nobody
 * revisits because it is the hardest to trigger on purpose.
 *
 * WHAT AN ERROR PAGE IS FOR is telling somebody what to do next. The status
 * code is for us; the sentence underneath is for them. So the code is set small
 * and muted and the ACTION is the loudest thing on the page - a panel that
 * renders a giant 404 and no way out has described the problem and left the
 * person in it.
 *
 * NO STACK TRACE, NO REQUEST ID, NO "CONTACT SUPPORT WITH THIS CODE". Anything
 * shown here reaches whoever triggered it, including someone probing for
 * information - and a 403 that explains WHY access was denied is a 403 that
 * tells an attacker what they are missing.
 */
import { Head, Link, router } from '@inertiajs/vue3'
import { computed } from 'vue'
import { PkButton as Button, buttonClasses } from '@alxtexh-enterprise/panel'
import ErrorArt from './ErrorArt.vue'

const props = withDefaults(
    defineProps<{
        status: number
        title: string
        message: string
        /** Hide the "go back" affordance where history is not a way out. */
        canGoBack?: boolean
        /** Where the primary action leads. The panel's home by default. */
        homeHref?: string
        homeLabel?: string
    }>(),
    { canGoBack: true, homeHref: '/dashboard', homeLabel: 'Back to dashboard' },
)

/**
 * The tone carries the same information as the words, for the glance before
 * anybody reads. Amber for "you asked for the wrong thing", rose for "we broke
 * something", slate for "it is temporary".
 */
const tone = computed(() => {
    if (props.status >= 500) {
        return 'text-rose-600 dark:text-rose-400'
    }

    if (props.status === 403 || props.status === 419) {
        return 'text-amber-600 dark:text-amber-400'
    }

    return 'text-muted-foreground'
})

function goBack() {
    // The panel's own history, not the browser's - `window.history.back()` from
    // a freshly-loaded error page leaves the app entirely.
    if (window.history.length > 1) {
        router.visit(document.referrer || props.homeHref)
    } else {
        router.visit(props.homeHref)
    }
}
</script>

<template>
    <Head :title="`${status} - ${title}`" />

    <div
        class="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-12 text-center"
    >
        <ErrorArt :status="status" />

        <!--
            The number sits UNDER the picture and small. It is for us - the
            reader needs the sentence, and a page whose largest element is a
            three-digit code has told them nothing they can act on.
        -->
        <p class="mt-2 text-xs font-semibold tracking-[0.25em] tabular-nums" :class="tone">
            ERROR {{ status }}
        </p>

        <h1 class="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            {{ title }}
        </h1>

        <p class="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            {{ message }}
        </p>

        <!-- The way out is the loudest thing here, on purpose. -->
        <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <!--
                A `<Link>` WEARING BUTTON CLASSES, not a Button wrapping one.
                `as-child` slot-merging is not something PkButton does, so the
                pattern that used to render an <a> INSIDE a <button> - two
                interactive elements where a keyboard user expects one - is
                now the classes handed to the link's own element.
            -->
            <Link :href="homeHref" :class="buttonClasses()">{{ homeLabel }}</Link>

            <Button v-if="canGoBack" variant="outline" @click="goBack">Go back</Button>
        </div>

        <slot />
    </div>
</template>
