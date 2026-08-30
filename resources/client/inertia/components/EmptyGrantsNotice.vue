<script setup lang="ts">
/**
 * First-run access: signed in, allowed into the panel, holding nothing.
 *
 * THE INSTALLER DOES NOT GRANT EVERY ABILITY. A blank shell used to look
 * broken. This is the kit empty state: you have no grants, here is how to
 * create an Administrator.
 *
 * `PanelDashboard` IS THE ONLY CALLER. It lived in `PanelShell` first - every
 * page's own toolbar, not just the dashboard's - which meant a person saw
 * this banner following them from Settings to a resource list to wherever
 * they clicked next, long after they had read it once. It answers "why is
 * my sidebar empty", and the dashboard is the one screen actually asking
 * that question. (An earlier pass also had `PanelDashboard` render this a
 * SECOND time on top of the shell's copy, fixed in v1.4.59 - the shell copy
 * was the one that needed to go, not the duplicate alone.)
 *
 * THE COMMANDS STAY, ON PURPOSE. `panel:permissions grant` is deliberately a
 * shell-only act - see that command's own docblock: "somebody with the
 * server is somebody entitled to decide", not whoever is signed in when the
 * install happens to be short a role. A button here that granted
 * Administrator to the viewer would turn that guard into a race the moment
 * two people open a dashboard with nothing set up yet. `reason` says why the
 * terminal, so this reads as a considered boundary instead of an unfinished
 * feature.
 */
import { usePage } from '@inertiajs/vue3'
import { Lock, Terminal } from '@lucide/vue'
import { computed } from 'vue'
import { useTranslations } from '../composables/useTranslations'

const page = usePage()
const { t } = useTranslations()

const hint = computed(() => {
    const props = page.props as Record<string, any>
    const shared = props.panelEmptyGrantsHint as
        { title: string; body: string; commands: string[] } | null | undefined

    if (shared) {
        return shared
    }

    if (!props.panelEmptyGrants) {
        return null
    }

    return {
        title: t('grants.empty.title'),
        body: t('grants.empty.body'),
        commands: [
            'php artisan panel:permissions sync',
            'php artisan panel:permissions grant --email=you@example.com',
        ],
    }
})
</script>

<template>
    <div
        v-if="hint"
        class="flex flex-col gap-3 rounded-lg border border-dashed bg-muted/20 p-3 sm:flex-row sm:items-start sm:gap-4"
        data-slot="empty-grants"
    >
        <div class="flex min-w-0 flex-1 items-start gap-2.5">
            <span
                class="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
            >
                <Lock class="size-3.5" />
            </span>
            <div class="min-w-0">
                <p class="text-sm font-medium">{{ hint.title }}</p>
                <p class="text-muted-foreground mt-0.5 text-xs">{{ hint.body }}</p>
                <p class="text-muted-foreground/80 mt-1 text-xs italic">
                    {{ t('grants.empty.reason') }}
                </p>
            </div>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 sm:shrink-0 sm:flex-col sm:items-stretch">
            <code
                v-for="command in hint.commands"
                :key="command"
                class="bg-muted/60 inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono text-[11px] leading-none"
            >
                <Terminal class="size-3 shrink-0 opacity-60" aria-hidden="true" />
                {{ command }}
            </code>
        </div>
    </div>
</template>
