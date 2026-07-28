/**
 * A form field, as the schema describes it.
 *
 * Semantic values only - no CSS classes ever cross from PHP (antipatterns §6.1).
 */
export interface FormField {
    component?: 'field'
    key: string
    label: string
    type:
        | 'text'
        | 'textarea'
        | 'number'
        | 'select'
        | 'toggle'
        | 'date'
        | 'multiselect'
        | 'datetime'
        | 'file'
        | 'repeater'
        | 'keyvalue'
        | 'richtext'
        /** Rendered as an <input type="password">, and never carries a value back. */
        | 'password'
    required?: boolean
    help?: string
    placeholder?: string
    disabled?: boolean
    span?: number
    inputType?: string
    rows?: number
    min?: number
    max?: number
    /** Fetches options on demand instead of rendering them inline. */
    searchable?: boolean
    /** File fields: allowed extensions, the size ceiling, and preview intent. */
    accept?: string[]
    maxKilobytes?: number
    image?: boolean

    /**
     * Repeater: one row's shape, and how many rows are allowed.
     *
     * `children` are LEAVES ONLY - the server refuses a repeater or key-value
     * nested inside another at declaration time, because what that describes is
     * a table with a foreign key.
     */
    children?: FormField[]
    itemLabel?: string
    minItems?: number | null
    maxItems?: number | null

    /** Key-value: what the two columns are called, and the pair ceiling. */
    keyLabel?: string
    valueLabel?: string
    maxPairs?: number | null

    /**
     * Rich text: which toolbar controls to show.
     *
     * PRESENTATION ONLY. Hiding the link button does not stop an anchor being
     * submitted - the server's allowlist decides that, and it never reads this.
     */
    toolbar?: string[]
    maxLength?: number | null
}
