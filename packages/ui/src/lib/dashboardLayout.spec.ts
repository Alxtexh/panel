import { describe, expect, it } from 'vitest'
import {
    mergeLayoutItems,
    parseWidgetId,
    toPersistedLayout,
    widgetId,
} from './dashboardLayout'

describe('dashboardLayout', () => {
    it('parses and builds widget ids', () => {
        expect(widgetId('chart', 'sessions')).toBe('chart:sessions')
        expect(parseWidgetId('stat:users')).toEqual({ kind: 'stat', key: 'users' })
        expect(parseWidgetId('evil:x')).toBeNull()
    })

    it('orders across kinds from a saved layout and appends new widgets', () => {
        const stats = [
            { key: 'people', span: 1, label: 'People' },
            { key: 'plans', span: 1, label: 'Plans' },
        ]
        const charts = [
            { key: 'sessions', span: 2, label: 'Sessions' },
            { key: 'signups', span: 1, label: 'Signups' },
        ]
        const tables = [{ key: 'recent', span: 2, label: 'Recent' }]

        const merged = mergeLayoutItems(stats, charts, tables, {
            widgets: [
                { id: 'chart:sessions', span: 1, hidden: false },
                { id: 'stat:people', span: 2, hidden: true },
                { id: 'table:recent', span: 2, hidden: false },
            ],
        })

        expect(merged.map((item) => item.id)).toEqual([
            'chart:sessions',
            'stat:people',
            'table:recent',
            'stat:plans',
            'chart:signups',
        ])
        expect(merged[0].span).toBe(1)
        expect(merged[1].hidden).toBe(true)
        expect(merged[1].span).toBe(2)
        expect(merged[3].id).toBe('stat:plans')
    })

    it('falls back to declaration order when layout is empty', () => {
        const merged = mergeLayoutItems(
            [{ key: 'a' }],
            [{ key: 'b', span: 2 }],
            [{ key: 'c' }],
            { widgets: [] },
        )

        expect(merged.map((item) => item.id)).toEqual(['stat:a', 'chart:b', 'table:c'])
        expect(merged[1].span).toBe(2)
    })

    it('serializes the layout for appearance persistence', () => {
        expect(
            toPersistedLayout([
                { id: 'Chart:Sessions', span: 9, hidden: true },
                { id: 'stat:people', span: 1, hidden: false },
            ]),
        ).toEqual({
            widgets: [
                { id: 'chart:sessions', span: 2, hidden: true },
                { id: 'stat:people', span: 1, hidden: false },
            ],
        })
    })
})
