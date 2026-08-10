/**
 * The option renderer for a visual select whose values are colours.
 *
 * `->preview('swatch')` on a field whose option values are CSS colours - hex,
 * `oklch()`, a custom property, anything the browser accepts. Naming a colour
 * ("Terracotta", "Slate") tells somebody nothing about whether it works next to
 * their logo; a block of it tells them immediately.
 *
 * IT SHIPS WITH THE PACKAGE FOR THE SAME REASON THE BUILT-IN FIELD CONTROLS GO
 * THROUGH THE REGISTRY: an extension point nothing uses is one nobody has
 * exercised, and the first person to write an option renderer would discover it
 * does not work. This is the proof that it does.
 *
 * THE VALUE GOES INTO A STYLE, NOT A CLASS. `bg-[${value}]` is a class that
 * exists in no build - Tailwind scans for whole literal class names and an
 * interpolated one is invisible to it. An inline `background` is also the only
 * form that can carry a colour the application invented at runtime.
 */
type __VLS_Props = {
    value: string | number;
    label?: string;
    selected?: boolean;
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
