/**
 * The drifting mesh-gradient behind the Aurora design.
 *
 * CSS AND THREE DIVS, not a canvas or a WebGL scene. The effect is four blurred
 * radial gradients on slow, offset loops - which the compositor can run on the
 * GPU without a main-thread frame, costs nothing to parse, and degrades to a
 * flat tint where `filter: blur` is unsupported. A canvas here would be a
 * second render loop competing with the page for the same frame budget, for an
 * effect nobody can tell apart.
 *
 * `aria-hidden` AND `pointer-events-none`: it is decoration. A screen reader
 * announcing "image" here would be describing a mood.
 *
 * IT STOPS MOVING WHEN ASKED. `prefers-reduced-motion` pauses the drift rather
 * than hiding the colour, so the page keeps its identity for somebody who
 * cannot tolerate movement.
 */
type __VLS_Props = {
    intensity?: 'soft' | 'full';
};
declare const _default: import("vue").DefineComponent<__VLS_Props, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    intensity: "soft" | "full";
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
export default _default;
