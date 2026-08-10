/**
 * The numbered-circle step strip the wizard form field drew for itself,
 * pulled out so a page header can show the same "step 2 of 4" language for
 * a flow the schema layer never sees - an import dialog, a restore that
 * runs in phases on the server. `SchemaNode.vue`'s wizard branch is this
 * component now, not a second copy of it.
 *
 * A TAB STRIP SAYS "these are equally available"; A STEPPER SAYS "this
 * comes after that" - see the wizard field's own note. Earlier steps stay
 * clickable so going back to correct something is always allowed; later
 * ones are not, because they may depend on an answer not given yet. Set
 * `interactive` to false for a passive status display - restore's progress
 * has no "go back", it is reporting what already happened.
 */
export interface Step {
    label: string;
    description?: string;
}
type __VLS_Props = {
    steps: Step[];
    activeStep: number;
    /** True marks a step's circle with an error dot instead of hiding it behind a click. */
    hasError?: (index: number) => boolean;
    /**
     * The step that failed outright, if any. Rendered with a destructive
     * cross rather than a tick; every step after it is treated as never
     * reached rather than "upcoming", because a failure does not resume
     * where it left off.
     */
    failedStep?: number | null;
    /** False for a read-only progress display: no buttons, no click-back. */
    interactive?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:activeStep": (index: number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:activeStep"?: ((index: number) => any) | undefined;
}>, {
    hasError: (index: number) => boolean;
    failedStep: number | null;
    interactive: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
