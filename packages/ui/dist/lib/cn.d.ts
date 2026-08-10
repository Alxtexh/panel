import type { ClassValue } from 'clsx';
/**
 * Merge Tailwind classes, letting the caller's win.
 *
 * MOVED FROM THE REFERENCE APP's `lib/utils.ts`. Every shadcn-derived component
 * in this package composes classes with it, which is why it had to come first:
 * without it those components could not move verbatim, and re-deriving their
 * class strings by hand is how a "moved" component quietly stops matching.
 *
 * `twMerge` RATHER THAN PLAIN CONCATENATION, because the point is CONFLICT
 * resolution: a caller passing `p-0` to a component whose base is `p-4` must
 * end up with `p-0`, and string concatenation leaves both with the winner
 * decided by stylesheet order rather than by the caller.
 */
export declare function cn(...inputs: ClassValue[]): string;
/**
 * An Inertia href as a plain string.
 *
 * MOVED WITH `cn` from the reference app's `lib/utils.ts`, where the two lived
 * together. Inertia accepts either a string or a `{ url, method }` object, and
 * every place that compares a link against the current path has to normalise
 * first - comparing the object silently never matches.
 */
export declare function toUrl(href: unknown): string;
