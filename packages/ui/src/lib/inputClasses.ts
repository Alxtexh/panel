/**
 * Input text and placeholder styling.
 *
 * Always include `font-normal` on placeholders so weight does not inherit from
 * a nearby `font-medium` label. Placeholders use muted foreground so they do
 * not compete with labels.
 */
export const INPUT_TEXT = 'text-foreground font-normal'

export const INPUT_PLACEHOLDER = 'placeholder:text-muted-foreground placeholder:font-normal'

/** Typed value and placeholder styling for native inputs and textareas. */
export const INPUT_COPY = `${INPUT_TEXT} ${INPUT_PLACEHOLDER}`
