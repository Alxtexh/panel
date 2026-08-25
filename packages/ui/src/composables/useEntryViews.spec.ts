import { beforeEach, describe, expect, it } from 'vitest'
import { defineComponent } from 'vue'
import {
    entryView,
    hasEntryView,
    registerEntryView,
    registeredEntryViews,
    resetEntryViews,
} from './useEntryViews'

const Invoice = defineComponent({ name: 'InvoiceSummary', template: '<i />' })
const Alt = defineComponent({ name: 'AltSummary', template: '<b />' })

describe('useEntryViews', () => {
    beforeEach(() => {
        resetEntryViews()
    })

    it('hands back what was registered', () => {
        registerEntryView('invoice-summary', Invoice)

        expect(entryView('invoice-summary')).toBe(Invoice)
        expect(hasEntryView('invoice-summary')).toBe(true)
    })

    it('returns undefined for a name nothing claimed', () => {
        expect(entryView('nope')).toBeUndefined()
        expect(hasEntryView('nope')).toBe(false)
    })

    it('lets a later registration replace an earlier one', () => {
        registerEntryView('invoice-summary', Invoice)
        registerEntryView('invoice-summary', Alt)

        expect(entryView('invoice-summary')).toBe(Alt)
        expect(registeredEntryViews()).toEqual(['invoice-summary'])
    })

    it('lists registered names in a stable order', () => {
        registerEntryView('ticket', Invoice)
        registerEntryView('invoice-summary', Invoice)

        expect(registeredEntryViews()).toEqual(['invoice-summary', 'ticket'])
    })

    it('forgets everything on reset', () => {
        registerEntryView('invoice-summary', Invoice)
        resetEntryViews()

        expect(registeredEntryViews()).toEqual([])
    })
})
