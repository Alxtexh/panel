/**
 * A form field, as the schema describes it.
 *
 * Semantic values only — no CSS classes ever cross from PHP (antipatterns §6.1).
 */
export interface FormField {
    component?: 'field'
    key: string
    label: string
    type: 'text' | 'textarea' | 'number' | 'select' | 'toggle' | 'date' | 'datetime'
    required?: boolean
    help?: string
    placeholder?: string
    disabled?: boolean
    span?: number
    inputType?: string
    rows?: number
    min?: number
    max?: number
}
