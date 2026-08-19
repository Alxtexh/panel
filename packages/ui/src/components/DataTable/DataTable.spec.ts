import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import DataTable from './DataTable.vue'

const columns = [{ key: 'name', label: 'Name' }]

const rows = [
    { id: 1, name: 'Amina' },
    { id: 2, name: 'Brian' },
    { id: 3, name: 'Chi' },
    { id: 4, name: 'Daria' },
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

        expect(boxes).toHaveLength(4)

        await boxes[1].trigger('click')

        expect(wrapper.emitted('toggle-row')).toEqual([[2]])
        expect(wrapper.emitted('toggle-page')).toBeFalsy()

        await wrapper.setProps({ selected: new Set([2]) })

        const after = wrapper.findAll('tbody input[type="checkbox"]')

        expect((after[0].element as HTMLInputElement).checked).toBe(false)
        expect((after[1].element as HTMLInputElement).checked).toBe(true)
        expect((after[2].element as HTMLInputElement).checked).toBe(false)
        expect((after[3].element as HTMLInputElement).checked).toBe(false)
        expect(wrapper.text()).not.toContain(`${rows.length} records`)
    })

    it('gives every row checkbox its own id and value', () => {
        const wrapper = mountTable()
        const boxes = wrapper.findAll('tbody input[type="checkbox"]')
        const ids = boxes.map((box) => box.attributes('id'))
        const values = boxes.map((box) => box.attributes('value'))

        expect(new Set(ids).size).toBe(boxes.length)
        expect(values).toEqual(['1', '2', '3', '4'])
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

        await boxes[0].trigger('click')

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

    it('shift-click selects the range between last selected and clicked row (current page only)', async () => {
        const wrapper = mountTable(new Set())
        const boxes = wrapper.findAll('tbody input[type="checkbox"]')

        // Establish the shift anchor.
        await boxes[1].trigger('click') // id=2
        expect(wrapper.emitted('toggle-row')).toEqual([[2]])

        await wrapper.setProps({ selected: new Set([2]) })

        // Select range: ids 2..4. id=2 is already selected, so toggles should
        // only cover 3 and 4.
        await boxes[3].trigger('click', { shiftKey: true }) // id=4

        const emissions = wrapper.emitted('toggle-row') as Array<Array<string | number>>
        expect(emissions.slice(1)).toEqual([[3], [4]])

        await wrapper.setProps({ selected: new Set([2, 3, 4]) })
        const after = wrapper.findAll('tbody input[type="checkbox"]')

        expect((after[0].element as HTMLInputElement).checked).toBe(false)
        expect((after[1].element as HTMLInputElement).checked).toBe(true)
        expect((after[2].element as HTMLInputElement).checked).toBe(true)
        expect((after[3].element as HTMLInputElement).checked).toBe(true)
    })

    it('shift-click falls back to single-row toggle when the anchor id is not on this page', async () => {
        const page1 = [
            { id: 1, name: 'Amina' },
            { id: 2, name: 'Brian' },
            { id: 3, name: 'Chi' },
            { id: 4, name: 'Daria' },
        ]
        const page2 = [
            { id: 5, name: 'Elias' },
            { id: 6, name: 'Faye' },
            { id: 7, name: 'Gina' },
            { id: 8, name: 'Hana' },
        ]

        const wrapper = mount(DataTable, {
            props: {
                columns,
                rows: page1,
                selectable: true,
                selected: new Set(),
            },
        })

        const boxesPage1 = wrapper.findAll('tbody input[type="checkbox"]')

        await boxesPage1[1].trigger('click') // anchor id=2
        expect(wrapper.emitted('toggle-row')).toEqual([[2]])

        await wrapper.setProps({ rows: page2, selected: new Set() })

        const boxesPage2 = wrapper.findAll('tbody input[type="checkbox"]')

        // No range selection is possible when the anchor id is not loaded.
        await boxesPage2[0].trigger('click', { shiftKey: true }) // clicked id=5

        const emissions = wrapper.emitted('toggle-row') as Array<Array<string | number>>
        expect(emissions.slice(1)).toEqual([[5]])
    })
})

describe('DataTable grouping', () => {
    const groupedRows = [
        { id: 1, name: 'Amina', status: 'draft', __group: 'draft', __groupTitle: 'Status: draft' },
        { id: 2, name: 'Brian', status: 'draft', __group: 'draft', __groupTitle: 'Status: draft' },
        { id: 3, name: 'Chi', status: 'published', __group: 'published', __groupTitle: 'Status: published' },
    ]

    it('renders a heading when the group value changes', () => {
        const wrapper = mount(DataTable, {
            props: {
                columns,
                rows: groupedRows,
                groupBy: { key: 'status', label: 'Status', collapsible: false },
            },
        })

        expect(wrapper.text()).toContain('Status: draft')
        expect(wrapper.text()).toContain('Status: published')
        expect(wrapper.text()).toContain('Amina')
    })

    it('collapses rows under a heading without dropping the heading', async () => {
        const wrapper = mount(DataTable, {
            props: {
                columns,
                rows: groupedRows,
                groupBy: { key: 'status', label: 'Status', collapsible: true },
            },
        })

        await wrapper.get('[dusk="group-header-draft"]').trigger('click')

        expect(wrapper.text()).toContain('Status: draft')
        expect(wrapper.text()).not.toContain('Amina')
        expect(wrapper.text()).toContain('Chi')
    })
})
