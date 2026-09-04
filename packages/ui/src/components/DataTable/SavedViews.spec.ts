import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import SavedViews, { type SavedTableView } from './SavedViews.vue'

const view: SavedTableView = {
    name: 'Online routers',
    search: 'router',
    filters: { status: 'online' },
    sort: 'name',
    direction: 'asc',
    perPage: 25,
    tab: 'online',
    group: null,
    lens: null,
    hidden: ['ip'],
    layout: 'table',
}

describe('SavedViews', () => {
    it('saves a named view and resets the form', async () => {
        const wrapper = mount(SavedViews, { props: { views: [] } })
        const input = wrapper.get('input[name="name"]')

        await input.setValue('My routers')
        await wrapper.get('form').trigger('submit')

        expect(wrapper.emitted('save')).toEqual([['My routers']])
        expect((input.element as HTMLInputElement).value).toBe('')
    })

    it('emits apply and remove for an existing view', async () => {
        const wrapper = mount(SavedViews, { props: { views: [view], active: view.name } })

        await wrapper.get('button.truncate').trigger('click')
        await wrapper.get('button[aria-label="Delete saved view Online routers"]').trigger('click')

        expect(wrapper.emitted('apply')).toEqual([[view]])
        expect(wrapper.emitted('remove')).toEqual([[view.name]])
        expect(wrapper.text()).toContain('Online routers')
    })
})
