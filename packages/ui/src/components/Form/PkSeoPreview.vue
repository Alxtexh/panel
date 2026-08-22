<script setup lang="ts">
/**
 * What this page will look like in a search result, as it is typed.
 *
 * THE IDEA IS `smart-seo`'S AND IT IS THE RIGHT ONE. A character counter tells
 * somebody their title is 74 characters. It does not tell them that 74 is where
 * the engine stops rendering it - which is the fact they needed, and which a
 * preview showing the actual truncation communicates without a number at all.
 *
 * TRUNCATION IS SIMULATED HONESTLY, at the same thresholds the server analyses
 * against, because those arrive in `field.limits` rather than being repeated
 * here. A preview that cut at 70 while the analyser warned at 60 would be two
 * components disagreeing about the one number the operator is trying to hit.
 *
 * IT IS AN APPROXIMATION AND SAYS SO. Real engines measure PIXELS, not
 * characters, and rewrite titles they judge unhelpful - so a character-based cut
 * is close but not what Google will do. The note under the card is there
 * because a preview presented as exact is one people trust past its accuracy.
 *
 * NO NETWORK, NO FETCH, NO KEY. `smart-seo` generates metadata with Gemini,
 * which is a real feature and the wrong dependency for something that redraws on
 * every keystroke - see `SeoAnalyser`'s note on why the analysis stayed
 * deterministic. Everything here is computed from what is already in the form.
 */
import { computed } from 'vue'

type Limits = {
    titleMax: number
    titleMin: number
    descriptionMax: number
    descriptionMin: number
}

const props = withDefaults(
    defineProps<{
        field: {
            watch?: { title: string; description: string }
            siteUrl?: string
            path?: string
            limits?: Limits
        }
        /** The whole form - see `FormFieldControl`, which is the only caller. */
        values?: Record<string, any>
    }>(),
    { values: () => ({}) },
)

const LIMITS: Limits = {
    titleMax: 60,
    titleMin: 30,
    descriptionMax: 160,
    descriptionMin: 70,
}

const limits = computed<Limits>(() => ({ ...LIMITS, ...(props.field.limits ?? {}) }))

const title = computed(() =>
    String(props.values[props.field.watch?.title ?? 'seo_title'] ?? '').trim(),
)

const description = computed(() =>
    String(props.values[props.field.watch?.description ?? 'seo_description'] ?? '').trim(),
)

/**
 * The domain as an engine prints it: no scheme, no trailing slash.
 *
 * A RESULT NEVER SHOWS `https://`, and showing it here would make the preview
 * wider than the real thing at exactly the point somebody is judging whether
 * their title fits.
 */
const host = computed(() =>
    String(props.field.siteUrl ?? '')
        .replace(/^https?:\/\//, '')
        .replace(/\/+$/, ''),
)

const crumb = computed(() => {
    const path = String(props.field.path ?? '/')
        .split('?')[0]
        .replace(/^\/+|\/+$/g, '')

    return path === '' ? host.value : `${host.value} › ${path.split('/').join(' › ')}`
})

function clamp(value: string, max: number): string {
    // The ellipsis replaces a character rather than being added to the end, so
    // the rendered string is never longer than the limit it is demonstrating.
    return value.length <= max ? value : `${value.slice(0, max - 1).trimEnd()}…`
}

const shownTitle = computed(() => clamp(title.value, limits.value.titleMax))
const shownDescription = computed(() => clamp(description.value, limits.value.descriptionMax))

/**
 * Under, inside, or over - as a colour and a word.
 *
 * `short` IS NOT AN ERROR STATE and is coloured as a hint rather than a warning.
 * A 20-character title is legitimate for a page called "Contact"; a 74-character
 * one is losing words. Treating both as the same amber is what makes an operator
 * stop reading the colours.
 */
function budget(length: number, min: number, max: number) {
    if (length === 0) {
        return { tone: 'text-muted-foreground', note: 'empty' }
    }

    if (length > max) {
        return { tone: 'text-amber-600 dark:text-amber-400', note: 'truncated' }
    }

    if (length < min) {
        return { tone: 'text-muted-foreground', note: 'short' }
    }

    return { tone: 'text-emerald-600 dark:text-emerald-400', note: 'good' }
}

const titleBudget = computed(() =>
    budget(title.value.length, limits.value.titleMin, limits.value.titleMax),
)

const descriptionBudget = computed(() =>
    budget(description.value.length, limits.value.descriptionMin, limits.value.descriptionMax),
)
</script>

<template>
    <div class="flex flex-col gap-2">
        <!--
            A RESULT, NOT A FORM PREVIEW. The blue heading, the green-grey
            breadcrumb and the grey snippet are what an engine actually renders -
            drawn as a result rather than as "your title here" because the whole
            point is judging it the way a reader will see it.
        -->
        <div class="bg-card rounded-lg border p-4">
            <p class="text-muted-foreground truncate text-xs">{{ crumb }}</p>

            <p
                class="mt-1 truncate text-lg leading-snug text-[#1a0dab] dark:text-[#8ab4f8]"
                :class="shownTitle === '' ? 'text-muted-foreground italic' : ''"
            >
                {{ shownTitle || 'Untitled page' }}
            </p>

            <p
                class="text-muted-foreground mt-1 line-clamp-2 text-sm"
                :class="shownDescription === '' ? 'italic' : ''"
            >
                {{
                    shownDescription ||
                    'No description. The engine writes its own from the page text, which is usually a mid-sentence fragment.'
                }}
            </p>
        </div>

        <!--
            THE BUDGETS, BESIDE THE PREVIEW RATHER THAN INSIDE IT. Numbers
            overlaid on the result would make the card stop looking like a
            result, which is the one thing it has to do.
        -->
        <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs">
            <span :class="titleBudget.tone">
                Title {{ title.length }}/{{ limits.titleMax }} · {{ titleBudget.note }}
            </span>
            <span :class="descriptionBudget.tone">
                Description {{ description.length }}/{{ limits.descriptionMax }} ·
                {{ descriptionBudget.note }}
            </span>
        </div>

        <p class="text-muted-foreground text-xs font-normal">
            An approximation. Engines measure pixel width rather than characters, and may rewrite a
            title they judge unhelpful.
        </p>
    </div>
</template>
