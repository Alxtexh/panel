import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import DataTable from './DataTable.vue'

const columns = [{ key: 'name', label: 'Name' }]

const rows = [
    { id: 1, name: 'Amina' },
    { id: 2, name: 'Brian' },
    { id: 3, name: 'Chi' },
]

function mountTable(selected: Set<string | number> = new Set()) {
    return mount(DataTable, {
        props: {
            columns,
            rows,
            selectable: true,
            selected,
        },
    })
}

describe('DataTable row selection', () => {
    it('selects only the clicked row', async () => {
        const selected = ref(new Set<string | number>())
        const wrapper = mount(DataTable, {
            props: {
                columns,
                rows,
                selectable: true,
                selected: selected.value,
            },
        })

        const boxes = wrapper.findAll('tbody input[type="checkbox"]')

        expect(boxes).toHaveLength(3)

        await boxes[1].trigger('change')

        expect(wrapper.emitted('toggle-row')).toEqual([[2]])
        expect(wrapper.emitted('toggle-page')).toBeFalsy()

        await wrapper.setProps({ selected: new Set([2]) })

        const after = wrapper.findAll('tbody input[type="checkbox"]')

        expect((after[0].element as HTMLInputElement).checked).toBe(false)
        expect((after[1].element as HTMLInputElement).checked).toBe(true)
        expect((after[2].element as HTMLInputElement).checked).toBe(false)
        expect(wrapper.text()).not.toContain('3 records')
    })

    it('gives every row checkbox its own id and value', () => {
        const wrapper = mountTable()
        const boxes = wrapper.findAll('tbody input[type="checkbox"]')
        const ids = boxes.map((box) => box.attributes('id'))
        const values = boxes.map((box) => box.attributes('value'))

        expect(new Set(ids).size).toBe(boxes.length)
        expect(values).toEqual(['1', '2', '3'])
    })

    it('does not treat missing row ids as one shared selection', async () => {
        const wrapper = mount(DataTable, {
            props: {
                columns,
                rows: [{ name: 'Amina' }, { name: 'Brian' }, { name: 'Chi' }],
                selectable: true,
                selected: new Set(),
            },
        })

        const boxes = wrapper.findAll('tbody input[type="checkbox"]')

        expect(boxes.every((box) => (box.element as HTMLInputElement).disabled)).toBe(true)

        await boxes[0].trigger('change')

        expect(wrapper.emitted('toggle-row')).toBeFalsy()
        expect(boxes.every((box) => (box.element as HTMLInputElement).checked)).toBe(false)
    })

    it('header checkbox asks to select the current page, not a single shared boolean', async () => {
        const wrapper = mountTable()
        const header = wrapper.get('thead input[type="checkbox"]')

        await header.trigger('change')

        expect(wrapper.emitted('toggle-page')).toEqual([[true]])
        expect(wrapper.emitted('toggle-row')).toBeFalsy()
    })
})
