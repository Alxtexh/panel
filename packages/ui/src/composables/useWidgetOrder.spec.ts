import { describe, it, expect, beforeEach } from 'vitest'
import { useWidgetOrder } from './useWidgetOrder'

describe('useWidgetOrder', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('returns items in original order when no preference stored', () => {
        const items = [
            { key: 'revenue', label: 'Revenue' },
            { key: 'users', label: 'Users' },
            { key: 'orders', label: 'Orders' },
        ]
        const { ordered } = useWidgetOrder('test.widgets', () => items)
        expect(ordered.value.map((i) => i.key)).toEqual(['revenue', 'users', 'orders'])
    })

    it('reorders based on stored preference', () => {
        localStorage.setItem('test.widgets', JSON.stringify(['orders', 'revenue', 'users']))
        const items = [
            { key: 'revenue', label: 'Revenue' },
            { key: 'users', label: 'Users' },
            { key: 'orders', label: 'Orders' },
        ]
        const { ordered } = useWidgetOrder('test.widgets', () => items)
        expect(ordered.value.map((i) => i.key)).toEqual(['orders', 'revenue', 'users'])
    })

    it('appends new items not in stored order', () => {
        localStorage.setItem('test.widgets', JSON.stringify(['orders', 'revenue']))
        const items = [
            { key: 'revenue', label: 'Revenue' },
            { key: 'users', label: 'Users' },
            { key: 'orders', label: 'Orders' },
        ]
        const { ordered } = useWidgetOrder('test.widgets', () => items)
        expect(ordered.value.map((i) => i.key)).toEqual(['orders', 'revenue', 'users'])
    })

    it('reset clears stored order', () => {
        localStorage.setItem('test.widgets', JSON.stringify(['orders', 'revenue']))
        const items = [
            { key: 'revenue', label: 'Revenue' },
            { key: 'orders', label: 'Orders' },
        ]
        const { ordered, reset } = useWidgetOrder('test.widgets', () => items)
        expect(ordered.value[0].key).toBe('orders')
        reset()
        expect(ordered.value[0].key).toBe('revenue')
        expect(localStorage.getItem('test.widgets')).toBeNull()
    })
})
