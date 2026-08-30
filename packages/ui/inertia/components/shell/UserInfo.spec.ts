import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'

vi.mock('@alxtexh-enterprise/panel', () => ({
    Avatar: {
        inheritAttrs: false,
        template: '<div data-slot="user-avatar" v-bind="$attrs"><slot /></div>',
    },
    AvatarImage: {
        props: ['src', 'alt'],
        template: '<img data-slot="avatar-image" :src="src" :alt="alt" />',
    },
    AvatarFallback: {
        inheritAttrs: false,
        template: '<div data-slot="avatar-fallback" v-bind="$attrs"><slot /></div>',
    },
}))

const { default: UserInfo } = await import('./UserInfo.vue')

describe('UserInfo', () => {
    it('renders a circular initials avatar from the name', () => {
        const wrapper = mount(UserInfo, {
            props: { user: { name: 'Admin Example', email: 'admin@example.com' } },
        })

        expect(wrapper.get('[data-slot="user-avatar"]').classes()).toContain('rounded-full')
        expect(wrapper.get('[data-slot="avatar-fallback"]').classes()).toContain('rounded-full')
        expect(wrapper.get('[data-slot="avatar-fallback"]').classes()).not.toContain('rounded-lg')
        expect(wrapper.get('[data-slot="avatar-fallback"]').text()).toBe('AE')
        expect(wrapper.text()).toContain('Admin Example')
    })

    it('falls back to the email initial when there is no name', () => {
        const wrapper = mount(UserInfo, {
            props: { user: { email: 'admin@example.com' }, showName: false },
        })

        expect(wrapper.get('[data-slot="avatar-fallback"]').text()).toBe('A')
        expect(wrapper.text()).not.toContain('admin@example.com')
    })
})
