/**
 * Site header chrome from shadcn dashboard-01: SidebarTrigger, a leading
 * slot (breadcrumbs or a title), and a trailing slot. No product widgets.
 *
 * PROPS-IN. AppSidebarHeader is Inertia-bound (page breadcrumbs, bell,
 * appearance). This piece is usable from `@alxtexh-enterprise/panel` in any
 * shell that already has a SidebarProvider.
 */
import type { HTMLAttributes } from 'vue';
type __VLS_Props = {
    class?: HTMLAttributes['class'];
    /**
     * Reverse the row when the sidebar sits on the right, so the trigger
     * stays next to the rail.
     */
    mirrored?: boolean;
};
type __VLS_Slots = {
    /** Breadcrumbs, a heading, a search. */
    default?(): unknown;
    /** Trailing controls: actions, appearance, an account menu. */
    trailing?(): unknown;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    mirrored: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
