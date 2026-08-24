import PanelLayout from './layouts/PanelLayout.vue'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import type { DefineComponent } from 'vue'

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('./pages/**/*.vue', { eager: true })
        const page = pages[`./pages/${name}.vue`]
        page.default.layout ??= PanelLayout
        return page
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) }).use(plugin).mount(el)
    },
})
