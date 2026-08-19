import { describe, it, expect, beforeEach } from 'vitest'
import { nextTick } from 'vue'
import { useColumnVisibility } from './useColumnVisibility'

describe('useColumnVisibility', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('starts empty with no defaults and no stored value', () => {
        const { hidden } = useColumnVisibility('test.columns')
        expect(hidden.value.size).toBe(0)
    })

    it('uses defaults when no stored preference exists', () => {
        const defaults = new Set(['phone', 'email'])
        const { hidden } = useColumnVisibility('test.columns', defaults)
        expect(hidden.value).toEqual(defaults)
    })

    it('ignores defaults when stored preference exists', () => {
        localStorage.setItem('test.columns', JSON.stringify(['name']))
        const defaults = new Set(['phone', 'email'])
        const { hidden } = useColumnVisibility('test.columns', defaults)
        expect(hidden.value).toEqual(new Set(['name']))
    })

    it('toggle adds and removes keys', () => {
        const { hidden, toggle } = useColumnVisibility('test.toggle')
        toggle('email')
        expect(hidden.value.has('email')).toBe(true)
        toggle('email')
        expect(hidden.value.has('email')).toBe(false)
    })

    it('persists to localStorage on change', async () => {
        const { hide } = useColumnVisibility('test.persist')
        hide('phone')
        await nextTick()
        const stored = JSON.parse(localStorage.getItem('test.persist')!) as string[]
        expect(stored).toContain('phone')
    })

    it('reset clears all hidden columns', () => {
        const defaults = new Set(['phone'])
        const { hidden, reset } = useColumnVisibility('test.reset', defaults)
        expect(hidden.value.size).toBe(1)
        reset()
        expect(hidden.value.size).toBe(0)
    })
})
