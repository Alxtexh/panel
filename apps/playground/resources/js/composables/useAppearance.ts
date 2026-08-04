/**
 * The starter kit's light/dark helper, now a THIN ADAPTER over the panel's own
 * appearance system.
 *
 * WHY IT STILL EXISTS. Two files owned "the theme" and wrote to different
 * localStorage keys - this one to `appearance` (light/dark only) and
 * @alxtexh-enterprise/panel to `panelkit.appearance` (scheme, accent, surface, density, text
 * size, navigation side). Both ran, so the last writer won and the panel's
 * settings appeared to reset themselves. The visible symptom was that a theme
 * survived a page change but not a sign-out and back in.
 *
 * Rather than delete it and chase every import, it now delegates: there is one
 * source of truth, and the settings page's light/dark tabs keep working.
 */
import { useAppearance as usePanelAppearance } from '@alxtexh-enterprise/panel';
import type { Theme } from '@alxtexh-enterprise/panel';
import type { ComputedRef, Ref } from 'vue';
import { computed } from 'vue';

export type Appearance = Theme;
export type ResolvedAppearance = 'light' | 'dark';

export type UseAppearanceReturn = {
    appearance: Ref<Appearance>;
    resolvedAppearance: ComputedRef<ResolvedAppearance>;
    updateAppearance: (value: Appearance) => void;
};

export function useAppearance(): UseAppearanceReturn {
    const { appearance: panel, set } = usePanelAppearance();

    const appearance = computed({
        get: () => panel.value.theme,
        set: (value: Appearance) => set({ theme: value }),
    }) as unknown as Ref<Appearance>;

    /*
     * THE PREFERENCE IS THE ANSWER, now that `system` is gone. This used to
     * fall back to `prefers-color-scheme`, which is how a panel defaulting to
     * light still rendered dark on a dark-mode machine.
     */
    const resolvedAppearance = computed<ResolvedAppearance>(
        () => panel.value.theme,
    );

    return {
        appearance,
        resolvedAppearance,
        updateAppearance: (value: Appearance) => set({ theme: value }),
    };
}

/** Kept for the settings page; the real work happens in initializeAppearance(). */
export function updateTheme(value: Appearance): void {
    usePanelAppearance().set({ theme: value });
}
