import { describe, expect, it } from 'vitest'
import { CreateOptionError, fieldErrorsFromPayload } from './createOptionError'
import { createOptionActionLabel, createOptionTitle } from './createOptionTitle'
import type { FormField } from '../components/Form/types'

describe('createOptionError', () => {
    it('carries field errors from a Laravel 422 body', () => {
        const errors = fieldErrorsFromPayload({
            title: ['The title field is required.'],
            status: ['Invalid status.'],
        })

        expect(errors).toEqual({
            title: 'The title field is required.',
            status: 'Invalid status.',
        })
    })

    it('exposes field errors on CreateOptionError', () => {
        const error = new CreateOptionError('Validation failed', { title: 'Required.' })

        expect(error.message).toBe('Validation failed')
        expect(error.fieldErrors.title).toBe('Required.')
    })
})

describe('createOptionTitle', () => {
    const field: FormField = {
        key: 'article_id',
        label: 'Article',
        type: 'select',
    }

    it('derives a dialog title from the field label', () => {
        expect(createOptionTitle(field)).toBe('Create article')
    })

    it('prefers an explicit createOptionLabel from the schema', () => {
        expect(
            createOptionTitle({ ...field, createOptionLabel: 'Add a new article' }),
        ).toBe('Add a new article')
    })

    it('derives the dropdown action label', () => {
        expect(createOptionActionLabel(field)).toBe('Create article')
    })
})
