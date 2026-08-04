# @panelkit/inertia

The screens `panelkit/panel` renders: the resource list, the create/edit form, the
record page, the trash, and a portal's home.

```bash
npm install @panelkit/ui @panelkit/inertia
php artisan panel:install
```

`panel:install` writes one file per screen into `resources/js/pages`. That is the
whole client-side installation.

---

## Why the page files exist

Inertia resolves a page name by globbing `resources/js/pages/**`, so a screen that
lives in `node_modules` is a screen it cannot find. Each file is one line:

```vue
<script lang="ts">
export { default } from '@panelkit/inertia/pages/ResourceIndex.vue'
</script>
```

**That file is also where you override the screen.** Replace the line with your own
component and nothing else changes — no resolver config, no fork, no ejecting.

## What the application still provides

**A layout.** These pages name none, deliberately: the shell — sidebar, header,
account menu — belongs to your application, which already has one. Apply it the way
you apply it to your own pages:

```ts
createInertiaApp({
    layout: (name) => (name.startsWith('auth/') ? AuthLayout : AppLayout),
})
```

**Tailwind, pointed at these packages.** Tailwind does not scan `node_modules`,
so without these two lines every utility used _only_ inside the packages is
purged — and the failure is partial and silent, because classes your own code
also uses survive. You get a panel with a styled table inside an unstyled page.

```css
@source '../../node_modules/@panelkit/ui/dist/**/*.js';
@source '../../node_modules/@panelkit/inertia/src/**/*.{vue,ts}';
```

**The theme tokens.** The components style with tokens (`bg-primary`,
`text-muted-foreground`) rather than values, so they take your theme. If you have
no theme, `php artisan panel:install` merges a complete `@theme` block into your
`resources/css/app.css` — every token the components actually ask for, light and
dark. Without them the utilities are all generated and resolve to nothing, which
renders a correctly structured panel you cannot read.

This used to say `@import '@panelkit/ui/theme/tokens.css'`. That file has never
existed: the export was dead, the import would have failed, and the tokens have
always come from the installer.

**Toasts.** Successful actions report through `vue-sonner`. Mount `<Toaster />`
once in your layout, or nothing confirms a save.

## If you install it by path

Consuming this package from a local checkout rather than from npm — a `file:`
dependency, a workspace link — means Node resolves its imports from the
package's own directory, so it finds its own copy of `vue` and
`@inertiajs/vue3` instead of yours. Two Vue instances break reactivity in ways
that look like random components not updating; two Inertia instances mean the
packaged pages call `usePage` against a provider your `createInertiaApp` never
installed, which fails server-side rendering with an error naming an internal.

```ts
// vite.config.ts
resolve: {
    dedupe: ['vue', '@inertiajs/vue3'],
},
```

Installing from npm hoists one copy of each and needs none of this.

## What it does not need

No shadcn install, no `reka-ui`, no `class-variance-authority`. The two primitives
these screens use — a button and a badge — ship in `@panelkit/ui` with shadcn's
variant names and shadcn's classes, so an application that has shadcn sees its own
button and one that does not sees a button.

## Why this is not part of `@panelkit/ui`

`@panelkit/ui` is transport-agnostic: nothing in it imports Inertia, which is what
lets its table and form components run under Livewire, a plain SPA, or in a test
with no router at all. These pages are Inertia to their bones — `useForm`, `Link`,
partial reloads by prop name — so putting them there would cost every consumer that
property.

## Exports

| Export                                                                | What it is                                                                 |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `ResourceIndex`, `ResourceForm`, `ResourceView`, `Trash`, `PanelHome` | The five screens                                                           |
| `AuditTimeline`                                                       | A record's history, loaded on demand                                       |
| `useListTable`                                                        | Sorting, filtering, paging and selection against the panel's list endpoint |
| `useBulkJob`                                                          | A queued bulk action, with progress                                        |
| `useTranslations`                                                     | `t('actions.save')` against the messages the server shares                 |
| `PANEL_PAGES`                                                         | Name → component, for an application that writes its own `resolve`         |
