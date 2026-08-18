/**
 * Prebuilt Inertia bootstrap. Compiled into dist/kit/app.js so panel:install
 * works after Composer without npm run build.
 *
 * Hosts who customise Vue still publish app.ts and run Vite. This file is the
 * default path: kit pages, kit layout, kit CSS.
 */
import { createInertiaApp } from '@inertiajs/vue3'
import { createApp, h, type DefineComponent } from 'vue'
import { initializeAppearance, setAppearancePersister } from '../index'
import { SettingsLayout } from '../../inertia'
import PanelLayout from './PanelLayout.vue'
import './app.css'

initializeAppearance()

setAppearancePersister((patch) => {
    let prefix = ''

    try {
        const raw = document.getElementById('app')?.dataset.page
        prefix = raw ? (JSON.parse(raw)?.props?.panel?.path ?? '') : ''
    } catch {
        prefix = ''
    }

    const base = !prefix || prefix === '/' ? '' : String(prefix).replace(/\/$/, '')
    const match = document.cookie.match(/(?:^|;\s*)XSRF-TOKEN=([^;]*)/)

    fetch(`${base}/settings/appearance`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'X-XSRF-TOKEN': match ? decodeURIComponent(match[1]) : '',
        },
        credentials: 'same-origin',
        body: JSON.stringify(patch),
    }).catch(() => {
        // Offline, or a guest. The preference still applies in this browser.
    })
})

createInertiaApp({
    title: (title) => (title ? `${title} - Panel` : 'Panel'),

    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('../../inertia/pages/**/*.vue', {
            eager: true,
        })
        const page = pages[`../../inertia/pages/${name}.vue`]

        if (!page) {
            throw new Error(
                `Inertia page [${name}] is not in the published kit bundle. ` +
                    'Customise Vue with npm run build, or run panel:update.',
            )
        }

        const standalone =
            name.startsWith('panel/auth/') ||
            name.startsWith('auth/') ||
            name.startsWith('landing/') ||
            name.startsWith('errors/')

        if (standalone) {
            page.default.layout ??= undefined
        } else if (name === 'settings/Index') {
            page.default.layout ??= PanelLayout
        } else if (name.startsWith('settings/')) {
            page.default.layout ??= [PanelLayout, SettingsLayout]
        } else {
            page.default.layout ??= PanelLayout
        }

        return page
    },

    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },

    progress: { color: '#4B5563' },
})
