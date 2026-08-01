/**
 * The screens PanelKit's PHP half renders.
 *
 * WHY THIS PACKAGE EXISTS. `panelkit/panel` answers five requests with
 * `Inertia::render('ResourceIndex')`, `'ResourceForm'`, `'ResourceView'`,
 * `'Trash'` and `'PanelHome'` - and shipped no Vue at all. So a fresh
 * `composer require panelkit/panel` produced routes that resolved to components
 * that did not exist: a white page and a console error naming a file the
 * developer had never heard of, on the very first screen they visited. The PHP
 * half was installable and the panel was not.
 *
 * WHY A PACKAGE RATHER THAN PUBLISHED STUBS. Publishing 3,000 lines of Vue into
 * an application makes every fix a manual re-publish, and re-publishing
 * overwrites whatever the application changed. A package upgrades with
 * `npm update`, and an application that wants to change a screen still can - it
 * owns the one-line page file that imports from here, so replacing a screen
 * means editing that file rather than forking a tree.
 *
 * WHY IT IS SEPARATE FROM `@panelkit/ui`. That package is deliberately
 * transport-agnostic: nothing in it imports Inertia, which is what lets its
 * table and form components run under Livewire, a plain SPA, or in a test with
 * no router at all. These pages are Inertia to their bones - `useForm`, `Link`,
 * `router.reload`, partial reloads by prop name - so putting them there would
 * have cost that property for every consumer.
 *
 * WHAT AN APPLICATION MUST STILL PROVIDE: a layout. These pages name none, so
 * the shell - sidebar, header, account menu - stays the application's. See the
 * README.
 */

export { default as ResourceIndex } from './pages/ResourceIndex.vue'
export { default as ResourceForm } from './pages/ResourceForm.vue'
export { default as ResourceView } from './pages/ResourceView.vue'
export { default as Trash } from './pages/Trash.vue'
export { default as PanelHome } from './pages/PanelHome.vue'
export { default as Roles } from './pages/settings/Roles.vue'
export { default as DocumentTemplates } from './pages/documents/Templates.vue'
export { default as DocumentTemplateDesigner } from './pages/documents/TemplateDesigner.vue'
export { default as DocumentPrint } from './pages/documents/DocumentPrint.vue'

export { default as AuditTimeline } from './components/AuditTimeline.vue'

export { useListTable, type ListPageProps } from './composables/useListTable'
export { useBulkJob } from './composables/useBulkJob'
export { useTranslations } from './composables/useTranslations'

/**
 * The page names the PHP half renders, and the component each one means.
 *
 * FOR AN APPLICATION THAT RESOLVES PAGES ITSELF. Inertia's Vite plugin globs
 * `resources/js/pages/**` and knows nothing about a package, so the supported
 * arrangement is a one-line page file per screen - which is what
 * `php artisan panel:install --js` writes. An application with a hand-written
 * `resolve` can use this map instead and skip the files entirely:
 *
 * ```ts
 * resolve: (name) => PANEL_PAGES[name] ?? resolvePageComponent(...)
 * ```
 *
 * KEYED BY THE NAME THE SERVER SENDS, not by file path, because the server is
 * the only side that decides it. A rename here without a rename in
 * `ResourceController` is a white page, so the panel's own test walks both.
 */
export const PANEL_PAGES = {
    ResourceIndex: () => import('./pages/ResourceIndex.vue'),
    ResourceForm: () => import('./pages/ResourceForm.vue'),
    ResourceView: () => import('./pages/ResourceView.vue'),
    Trash: () => import('./pages/Trash.vue'),
    PanelHome: () => import('./pages/PanelHome.vue'),

    /*
     * The document designer. Nested names, because the server sends
     * `documents/TemplateDesigner` - a flat key here would not match and the
     * failure is a white page.
     */
    'documents/Templates': () => import('./pages/documents/Templates.vue'),
    'documents/TemplateDesigner': () => import('./pages/documents/TemplateDesigner.vue'),
    'documents/DocumentPrint': () => import('./pages/documents/DocumentPrint.vue'),

    // The permission matrix - the package owns the roles system now.
    'settings/Roles': () => import('./pages/settings/Roles.vue'),
} as const

/*
 | RENDER HOOKS - roadmap 4.4. `RenderHook` is dropped at named positions
 | inside the packaged pages; an application registers which components a
 | plugin is allowed to mount, because a name from the server that resolved
 | to any component in the bundle would be a plugin mounting anything
 | anywhere.
 */
export { default as RenderHook } from './components/RenderHook.vue'
export {
    registerRenderHookComponent,
    resolveRenderHookComponent,
} from './components/renderHookRegistry'
