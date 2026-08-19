import type { FormField } from '../components/Form/types'

/** Dialog title for SelectField::createOption(). */
export function createOptionTitle(field: FormField): string {
    if (field.createOptionLabel) {
        return field.createOptionLabel
    }

    const base = field.label.replace(/\s*id$/i, '').trim()

    return base !== '' ? `Create ${base.toLowerCase()}` : 'Create option'
}

/** Dropdown action label beside the searchable list. */
export function createOptionActionLabel(field: FormField): string {
    if (field.createOptionActionLabel) {
        return field.createOptionActionLabel
    }

    const base = field.label.replace(/\s*id$/i, '').trim()

    return base !== '' ? `Create ${base.toLowerCase()}` : 'Create new'
}
