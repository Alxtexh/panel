<script setup lang="ts">
/**
 * Notices at the top of the dashboard.
 *
 * THEY HAD A PAGE AND NOBODY WENT TO IT. A screen called Announcements is a
 * screen people open once, out of curiosity, and never again - so the notice
 * everybody needed to read was reliably the one nobody read. These are now the
 * first thing on the screen somebody opens anyway.
 *
 * SEVERITY DECIDES THE COLOUR AND THE ORDER. An outage and a new feature are not
 * the same message, and rendering both in amber teaches people to ignore amber.
 * Urgent notices sort first, because the one that matters should not be third.
 *
 * A TOAST IS FOR SOMETHING WITH NO CONSEQUENCE. It is gone in a few seconds, so
 * anyone who was making coffee never saw it - which is fine for "the new export
 * format is live" and completely wrong for "billing is down". The choice is the
 * author's, made when they write the notice.
 *
 * CLOSING ONE DOES NOT DESTROY IT. The dismissal is recorded for this person and
 * the notice is written into their notifications, so a banner closed on Tuesday
 * because it was in the way is still findable on Saturday when it matters. A ×
 * that removed the only copy of something you were told once would be a
 * trapdoor.
 */
import { router } from '@inertiajs/vue3';
import { CircleCheck, Info, TriangleAlert, X } from '@lucide/vue';
import { onMounted, ref } from 'vue';
import { toast } from 'vue-sonner';
import type { Announcement } from '../types';

const props = withDefaults(
    defineProps<{
        announcements: Announcement[]
        /**
         * The panel's path prefix, because the dismiss route is mounted INSIDE
         * the panel group. This was a bare `/announcements/...` while the
         * component lived in the reference app, whose default panel is mounted
         * at the root - correct there and a 404 in any portal with a path, which
         * is most of them. The server knows the prefix; the component should not
         * guess it. Same shape as `Trash`.
         */
        prefix?: string
    }>(),
    { prefix: '' },
);

/** Locally hidden the moment × is clicked, so the row goes without a round trip. */
const closed = ref<Set<number>>(new Set());

const banners = () => props.announcements.filter((a) => a.display === 'banner');

const TONES: Record<
    string,
    { border: string; background: string; icon: string }
> = {
    danger: {
        border: 'border-destructive/40',
        background: 'bg-destructive/5',
        icon: 'text-destructive',
    },
    warning: {
        border: 'border-amber-500/40',
        background: 'bg-amber-500/5',
        icon: 'text-amber-600 dark:text-amber-400',
    },
    success: {
        border: 'border-emerald-500/40',
        background: 'bg-emerald-500/5',
        icon: 'text-emerald-600 dark:text-emerald-400',
    },
    info: {
        border: 'border-border',
        background: 'bg-card',
        icon: 'text-muted-foreground',
    },
};

const tone = (severity: string) => TONES[severity] ?? TONES.info;

const ICONS: Record<string, typeof Info> = {
    danger: TriangleAlert,
    warning: TriangleAlert,
    success: CircleCheck,
    info: Info,
};

const icon = (severity: string) => ICONS[severity] ?? Info;

function dismiss(announcement: Announcement) {
    closed.value = new Set([...closed.value, announcement.id]);

    /*
     * FIRE AND FORGET, DELIBERATELY. The row is already gone from the screen and
     * the worst case of a failed request is that the banner returns on the next
     * page load - which is a far better failure than a spinner on a × or an
     * error dialog about a notice somebody was trying to get rid of.
     */
    router.post(
        `${props.prefix.replace(/\/$/, '')}/announcements/${announcement.id}/dismiss`,
        {},
        { preserveScroll: true, preserveState: true, only: [] },
    );
}

/*
 * TOASTS FIRE ONCE, ON ARRIVAL. Rendering them as part of the list would make
 * them reappear on every partial reload of the dashboard - a "new feature"
 * notice popping up each time somebody changes a chart period.
 */
onMounted(() => {
    for (const announcement of props.announcements.filter(
        (a) => a.display === 'toast',
    )) {
        const show = announcement.severity === 'danger' ? toast.error : toast;

        show(announcement.title, {
            description: announcement.body ?? undefined,
            action:
                announcement.actionUrl && announcement.actionLabel
                    ? {
                          label: announcement.actionLabel,
                          onClick: () => router.visit(announcement.actionUrl!),
                      }
                    : undefined,
        });

        // A toast is transient by definition, so it is dismissed on the way out
        // rather than waiting for somebody to close something already gone.
        dismiss(announcement);
    }
});
</script>

<template>
    <div v-if="banners().length" class="flex flex-col gap-2">
        <div
            v-for="announcement in banners().filter((a) => !closed.has(a.id))"
            :key="announcement.id"
            class="flex items-start gap-3 rounded-lg border p-3 text-sm"
            :class="[
                tone(announcement.severity).border,
                tone(announcement.severity).background,
            ]"
        >
            <component
                :is="icon(announcement.severity)"
                class="mt-0.5 size-4 shrink-0"
                :class="tone(announcement.severity).icon"
            />

            <div class="min-w-0 flex-1">
                <p class="font-medium">{{ announcement.title }}</p>
                <p
                    v-if="announcement.body"
                    class="mt-0.5 text-muted-foreground"
                >
                    {{ announcement.body }}
                </p>
            </div>

            <a
                v-if="announcement.actionUrl && announcement.actionLabel"
                :href="announcement.actionUrl"
                class="shrink-0 rounded-md border bg-background px-2.5 py-1 text-xs font-medium hover:bg-accent"
            >
                {{ announcement.actionLabel }}
            </a>

            <button
                type="button"
                class="shrink-0 text-muted-foreground hover:text-foreground"
                :aria-label="`Dismiss ${announcement.title}`"
                :title="'Dismiss - it stays in your notifications'"
                @click="dismiss(announcement)"
            >
                <X class="size-4" />
            </button>
        </div>
    </div>
</template>
