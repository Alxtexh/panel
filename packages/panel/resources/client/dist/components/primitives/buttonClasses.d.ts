/**
 * PkButton's classes, callable without PkButton.
 *
 * WHY THIS IS ITS OWN FUNCTION. `PkButton` only renders as an HTML tag name
 * (`as="a"`) - it never merges its classes onto a child, deliberately, per
 * the component's own note: "Inertia's `Link` renders its own element, so
 * the pattern that matters is 'give me these classes on an `<a>`', which is
 * a prop, not a slot-merging primitive." That works for a plain link. It does
 * not work for `@inertiajs/vue3`'s `<Link>`, which is a component, not a tag
 * name `as` can name - so a caller that wanted an Inertia-navigable button
 * reached for `as-child`, a prop `PkButton` has never declared. Vue's
 * fallthrough attributes rendered it anyway, as a literal `as-child=""`
 * attribute on the real `<button>`, while the `<Link>` in the default slot
 * rendered as an `<a>` INSIDE it - a button containing a link, which is what
 * an accessibility sweep of the resource list and record pages found under
 * `nested-interactive`: "Element has focusable descendants".
 *
 * THE FIX IS THIS EXPORT, not a slot-merging primitive. `<Link :class=
 * "buttonClasses({ size: 'sm' })">` is one real element with button styling,
 * not two elements pretending to be one - and it costs no new dependency,
 * which is the same trade `PkButton` itself already made.
 */
export interface ButtonClassesOptions {
    variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';
    class?: string;
}
export declare function buttonClasses(options?: ButtonClassesOptions): string;
