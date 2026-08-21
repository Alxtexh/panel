type __VLS_Props = {
    align?: 'start' | 'end';
    /**
     * A width class for the panel.
     *
     * A MINIMUM BY DEFAULT, NOT A FIXED SIZE, and that distinction is the
     * whole bug this replaced. It used to be `w-56` and applied literally,
     * so a menu holding one "Delete" was 224 pixels wide - the panel never
     * measured what was in it, and every short menu looked like a mistake.
     *
     * THE MINIMUM IS NOT HERE. It lives in `MIN_PANEL_WIDTH`, because a
     * class and an inline style both setting `min-width` is a fight the
     * class loses - see that constant for the 96-pixel menu it produced.
     *
     * Pass a `w-…` class where a fixed width is genuinely wanted: the filter
     * panel is a form, and a form that reflows as its contents change is
     * worse than one that does not.
     */
    width?: string;
    /** Gap between trigger and panel, in px. */
    offset?: number;
    /**
     * Which side of the trigger to open on.
     *
     * `right`/`left` are what a COLLAPSED SIDEBAR needs: an icon rail has no
     * room to expand a group downward into, so the group opens as a flyout
     * beside the rail. Both flip to the opposite side when there is no room,
     * so the same setting works whichever edge the sidebar is on.
     */
    placement?: 'bottom' | 'right' | 'left';
    /** Open on hover as well as click - right for a nav rail, wrong for a menu. */
    hoverable?: boolean;
    /**
     * Whether a click inside the panel dismisses it.
     *
     * TRUE IS RIGHT FOR A MENU and wrong for a FORM, and this component is
     * used as both. A menu item is a command: giving it should close the
     * menu. A filter panel is a small form with its own Apply button, and
     * dismissing it mid-edit throws away the draft - which is exactly what
     * happened when the Status field, whose trigger is a button rather than
     * a native control, was read as "a command has been given".
     *
     * The `input, select, textarea, label` exemption below was an attempt to
     * tell the two apart by guessing from the element. It cannot: a custom
     * control is a button, and so is a menu item.
     */
    dismissOnPanelClick?: boolean;
};
/** Open anchored to a point - viewport coordinates, as from a MouseEvent. */
declare function openAt(x: number, y: number): Promise<void>;
declare function close(): void;
declare var __VLS_1: {
    open: boolean;
}, __VLS_11: {
    close: typeof close;
};
type __VLS_Slots = {} & {
    trigger?: (props: typeof __VLS_1) => any;
} & {
    panel?: (props: typeof __VLS_11) => any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_Props, {
    close: typeof close;
    openAt: typeof openAt;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    width: string;
    align: "start" | "end";
    offset: number;
    placement: "bottom" | "right" | "left";
    hoverable: boolean;
    dismissOnPanelClick: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
