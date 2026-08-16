import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { SidebarProvider } from '../shadcn/sidebar'
import PkSiteHeader from './PkSiteHeader.vue'

describe('PkSiteHeader', () => {
    it('renders the sidebar trigger, breadcrumb slot, and trailing slot', () => {
        const wrapper = mount({
            components: { SidebarProvider, PkSiteHeader },
            template: `
                    <SidebarProvider>
                        <PkSiteHeader>
                            <nav data-slot="crumbs">Home</nav>
                            <template #trailing>
                                <button type="button" data-slot="trailing-action">Save</button>
                            </template>
                        </PkSiteHeader>
                    </SidebarProvider>
                `,
        })

        expect(wrapper.get('[data-slot="site-header"]').exists()).toBe(true)
        expect(wrapper.get('[data-slot="sidebar-trigger"]').exists()).toBe(true)
        expect(wrapper.get('[data-slot="crumbs"]').text()).toBe('Home')
        expect(wrapper.get('[data-slot="trailing-action"]').text()).toBe('Save')
        expect(wrapper.get('[data-slot="separator"]').exists()).toBe(true)
    })

    it('mirrors the row when the sidebar is on the right', () => {
        const wrapper = mount({
            components: { SidebarProvider, PkSiteHeader },
            template: `
                    <SidebarProvider>
                        <PkSiteHeader mirrored />
                    </SidebarProvider>
                `,
        })

        expect(wrapper.get('[data-slot="site-header"]').classes()).toContain('flex-row-reverse')
    })
})
