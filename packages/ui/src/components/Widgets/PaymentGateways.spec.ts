import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import PaymentGateways from './PaymentGateways.vue'

describe('PaymentGateways', () => {
    it('renders connected state and emits configure', async () => {
        const wrapper = mount(PaymentGateways, {
            props: {
                gateways: [
                    {
                        key: 'mpesa',
                        label: 'M-Pesa',
                        caption: 'Safaricom till',
                        mark: 'M',
                        color: '#00A651',
                        connected: true,
                        mode: 'test',
                        methods: ['STK'],
                        enabled: true,
                        isDefault: true,
                    },
                    {
                        key: 'cash',
                        label: 'Cash',
                        caption: 'Till drawer',
                        mark: 'C',
                        color: '#57534e',
                        connected: false,
                        mode: null,
                        methods: ['Cash'],
                        enabled: false,
                        isDefault: false,
                    },
                ],
            },
        })

        expect(wrapper.text()).toContain('1 of 2 connected')
        expect(wrapper.text()).toContain('Connected')
        expect(wrapper.text()).toContain('Not connected')
        expect(wrapper.get('[data-slot="payment-gateways"] .grid').classes()).toEqual(
            expect.arrayContaining(['grid-cols-1', 'sm:grid-cols-2', 'xl:grid-cols-3']),
        )

        await wrapper.get('button').trigger('click')
        expect(wrapper.emitted('configure')?.[0]).toEqual(['mpesa'])
    })
})
