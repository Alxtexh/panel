import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Sidebar from './Sidebar.vue'
import SidebarProvider from './SidebarProvider.vue'

describe('Sidebar variants', () => {
    it('keeps inset as a data-variant distinct from floating', () => {
        const inset = mount({
            components: { SidebarProvider, Sidebar },
            template: `
                <SidebarProvider>
                    <Sidebar variant="inset" collapsible="icon" />
                </SidebarProvider>
            `,
        })
        const floating = mount({
            components: { SidebarProvider, Sidebar },
            template: `
                <SidebarProvider>
                    <Sidebar variant="floating" collapsible="icon" />
                </SidebarProvider>
            `,
        })

        expect(inset.get('[data-slot="sidebar"]').attributes('data-variant')).toBe('inset')
        expect(floating.get('[data-slot="sidebar"]').attributes('data-variant')).toBe('floating')
        expect(floating.html()).toContain('group-data-[variant=floating]:rounded-lg')
        expect(floating.html()).toContain('group-data-[variant=floating]:border')
        expect(inset.html()).not.toContain('data-variant="floating"')
    })
})
