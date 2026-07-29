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
so without these two lines every utility used *only* inside the packages is
purged — and the failure is partial and silent, because classes your own code
also uses survive. You get a panel with a styled table inside an unstyled page.

```css
@source '../../node_modules/@panelkit/ui/src/**/*.{vue,ts}';
@source '../../node_modules/@panelkit/inertia/src/**/*.{vue,ts}';
```

**The theme tokens.** The components style with tokens (`bg-primary`,
`text-muted-foreground`) rather than values, so they take your theme. If you have
no theme, import the one the UI package ships:

```css
@import '@panelkit/ui/theme/tokens.css';
```

**Toasts.** Successful actions report through `vue-sonner`. Mount `<Toaster />`
once in your layout, or nothing confirms a save.

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

| Export | What it is |
| --- | --- |
| `ResourceIndex`, `ResourceForm`, `ResourceView`, `Trash`, `PanelHome` | The five screens |
| `AuditTimeline` | A record's history, loaded on demand |
| `useListTable` | Sorting, filtering, paging and selection against the panel's list endpoint |
| `useBulkJob` | A queued bulk action, with progress |
| `useTranslations` | `t('actions.save')` against the messages the server shares |
| `PANEL_PAGES` | Name → component, for an application that writes its own `resolve` |
