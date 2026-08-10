/**
 * The text input every packaged form field draws.
 *
 * THE CLASSES ARE THE REFERENCE APP'S, VERBATIM. This is a MOVE, not a redesign
 * - the demo's `ui/input/Input.vue` is where they come from, and copying them
 * character for character is the whole point: a generated portal that renders a
 * slightly different input is a portal that looks slightly cheaper for a reason
 * nobody can name.
 *
 * WITHOUT `cn`, `reka-ui` OR `@vueuse/core`. This package has no dependencies
 * but Vue, and adding three to merge a class string would put them in every
 * consumer's bundle. An array binding is what Vue does with `:class` anyway; the
 * conflict resolution `tailwind-merge` adds is not needed when the caller is
 * appending rather than overriding.
 */
type __VLS_Props = {
    defaultValue?: string | number;
    modelValue?: string | number;
    class?: unknown;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {} & {
    "update:modelValue": (value: string | number) => any;
}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
