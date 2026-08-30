import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import type { PaymentGateway } from './PaymentGateways.vue'
import PaymentGatewaySettings from './PaymentGatewaySettings.vue'

const seed: PaymentGateway[] = [
    {
        key: 'cash',
        label: 'Cash',
        caption: 'Till drawer',
        mark: 'C',
        color: '#57534e',
        connected: true,
        mode: 'test',
        methods: ['Cash'],
        enabled: true,
        isDefault: false,
    },
]

function clickNamed(label: string): void {
    const button = [...document.body.querySelectorAll('button')].find(
        (el) => el.textContent?.trim() === label,
    )
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
}

describe('PaymentGatewaySettings', () => {
    it('enables, disables and sets a default from the sheet', async () => {
        const wrapper = mount(PaymentGatewaySettings, {
            attachTo: document.body,
            props: {
                gateways: seed,
                'onUpdate:gateways': (value: PaymentGateway[]) =>
                    wrapper.setProps({ gateways: value }),
            },
        })

        clickNamed('Configure')
        await wrapper.vm.$nextTick()

        clickNamed('Disable')
        await wrapper.vm.$nextTick()

        expect(wrapper.props('gateways')[0]?.enabled).toBe(false)

        clickNamed('Enable')
        await wrapper.vm.$nextTick()

        clickNamed('Use as default')
        await wrapper.vm.$nextTick()

        expect(wrapper.props('gateways')[0]?.isDefault).toBe(true)

        wrapper.unmount()
    })
})
