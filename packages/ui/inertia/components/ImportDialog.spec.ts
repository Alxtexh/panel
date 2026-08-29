import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ref } from 'vue'

const inspectResult = {
    headers: ['name', 'phone', 'access_code', 'status', 'plan_type'],
    fields: [
        { key: 'name', label: 'Name', required: true },
        { key: 'phone', label: 'Phone', required: true },
        { key: 'access_code', label: 'Access Code', required: true },
        { key: 'status', label: 'Status', required: true },
        { key: 'plan_type', label: 'Plan type', required: true },
        { key: 'contacts', label: 'Contacts', required: false },
        { key: 'plan_id', label: 'Plan', required: false },
    ],
}

const inspect = vi.fn().mockResolvedValue(inspectResult)
const run = vi.fn()

vi.mock('../composables/useImport', () => ({
    useImport: () => ({
        busy: ref(false),
        error: ref(null),
        inspect,
        run,
    }),
}))

vi.mock('@alxtexh-enterprise/panel', () => ({
    PkButton: { template: '<button><slot /></button>' },
    PkModal: {
        props: ['open'],
        template: '<div v-if="open" role="dialog"><slot /><slot name="footer" /></div>',
    },
    PkStepIndicator: { template: '<div />' },
}))

const { default: ImportDialog } = await import('./ImportDialog.vue')

/**
 * The mapping step used to be one flat list: a bare `<option>` per field,
 * required and optional mixed in declaration order, repeated in full for
 * every CSV column - twelve choices to scan, five times, with nothing
 * saying which half of the list was the ten-second read and which was
 * "only if you have it". Grouped by `<optgroup>` and given a header row,
 * this is the same information organised instead of dumped.
 */
describe('ImportDialog - map columns step', () => {
    it('shows a CSV column / Import as header and groups fields by required', async () => {
        const wrapper = mount(ImportDialog, {
            props: { open: true, baseUrl: '/clients', resourceLabel: 'Clients' },
        })

        const file = new File(['name\nA'], 'rows.csv', { type: 'text/csv' })
        const input = wrapper.find('input[type=file]')
        Object.defineProperty(input.element, 'files', { value: [file] })
        await input.trigger('change')
        await wrapper.vm.$nextTick()
        await wrapper.vm.$nextTick()

        expect(wrapper.text()).toContain('CSV column')
        expect(wrapper.text()).toContain('Import as')

        const selects = wrapper.findAll('select')
        expect(selects).toHaveLength(5)

        const groups = selects[0].findAll('optgroup')
        expect(groups.map((g) => g.attributes('label'))).toEqual(['Required', 'Optional'])
        expect(groups[0].findAll('option')).toHaveLength(5)
        expect(groups[1].findAll('option')).toHaveLength(2)
    })
})
