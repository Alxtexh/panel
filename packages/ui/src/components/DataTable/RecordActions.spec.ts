import { DOMWrapper, mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { ICON_PATHS } from '../primitives/icons'
import RecordActions from './RecordActions.vue'

function openMenu(wrapper: ReturnType<typeof mount>) {
    return wrapper.find('button[aria-haspopup="menu"]').trigger('click')
}

const body = () => new DOMWrapper(document.body)

afterEach(() => {
    document.body.innerHTML = ''
})

describe('RecordActions icons', () => {
    it('draws coins and log-in for recharge / impersonate without declared icons', async () => {
        const wrapper = mount(RecordActions, {
            props: {
                title: 'Ada',
                groups: [
                    {
                        actions: [
                            {
                                key: 'recharge-credits',
                                label: 'Recharge Credits',
                                color: 'success',
                            },
                            {
                                key: 'impersonate',
                                label: 'Log in as user',
                            },
                            {
                                key: '__delete',
                                label: 'Delete',
                                destructive: true,
                            },
                        ],
                    },
                ],
            },
            attachTo: document.body,
        })

        await openMenu(wrapper)

        const paths = body()
            .findAll('[role="menuitem"] path')
            .map((node) => node.attributes('d'))

        expect(paths).toContain(ICON_PATHS.coins)
        expect(paths).toContain(ICON_PATHS['log-in'])
        expect(paths).toContain(ICON_PATHS.trash)
        expect(paths.every((d) => d !== ICON_PATHS.dot)).toBe(true)
    })
})
