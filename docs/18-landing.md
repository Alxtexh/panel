# 18. Public landing pages

Alxtexhpanel ships **five** public landing designs as built-in kit offerings
(not optional plugins), the same posture as [auth families](09-authentication.md).

| Design | Voice | Source |
|---|---|---|
| `aurora` | Modern SaaS, proof-heavy (default) | Original kit composition |
| `editorial` | Quiet typographic magazine | Original kit composition |
| `console` | Developer-tool terminal | Original kit composition |
| `marketing` | Classic marketing site | Ported SFCs from [vue-js-landing-page](https://github.com/younusaliakash/vue-js-landing-page) |
| `shadcn` | Product landing (orange shadcn theme) | Ported SFCs from [shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page) (MIT) |

Aliases: `composed` → `aurora`, `vue-marketing` / `vue-js` → `marketing`,
`shadcn-vue` → `shadcn`.

The route is **off by default** so `/` stays free for host apps. When on, the
default design is a real landing (`aurora`), never an empty page.

## Select a variant

### Fluent API (preferred on a panel provider)

```php
use Alxtexh\Panel\Panel;

Panel::make('admin')
    ->landing(true);                 // claim / , keep config design
    // ->landing('shadcn');          // claim / + set design
    // ->landing('vue-marketing');   // alias → marketing
    // ->landing('composed');        // alias → aurora
    // ->landing(false);             // do not claim /
```

`Panel::landings()` (alias `Panel::landingDesigns()`) returns the five names.

### Config

```php
// config/panel.php
'landing' => [
    'route' => true,
    'design' => env('PANEL_LANDING', 'aurora'), // aurora|editorial|console|marketing|shadcn
    'brand' => env('PANEL_LANDING_BRAND', config('app.name')),
    'tagline' => 'Built with Laravel, Inertia and Vue.',
    'footer_links' => [
        ['label' => 'Docs', 'href' => '/about'],
    ],
    'previews' => false, // true only on demos: switcher + /preview/{design}
    'editor' => true,
    'url' => null, // set when you route the page yourself
],
```

Or `.env`:

```env
PANEL_LANDING_ROUTE=true
PANEL_LANDING=shadcn
PANEL_LANDING_PREVIEWS=true
```

## Demo URLs (playground)

With `route` and `previews` on:

| URL | What you see | Source intent |
|---|---|---|
| `/` | Configured design (default `aurora`) | Kit aurora |
| `/preview/marketing` | Ported Colorlib-style Vue landing | [vue-js-landing-page](https://github.com/younusaliakash/vue-js-landing-page) |
| `/preview/vue-js` | Same as marketing (alias) | same |
| `/preview/shadcn` | Ported shadcn-vue orange landing | [shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page) |
| `/preview/shadcn-vue` | Same as shadcn (alias) | same |
| `/preview/{design}` | Shipped preset / template for that name | |
| `/landing/{design}` | Same as preview (alias route) | |

Sidebar: **Landing samples** lists all five. Editor: **Landing page** under
Configuration.

## What ships

**aurora / editorial / console:** section composer (`landing/Composed`) with
kit `Pk*` section components.

**marketing (`landing/VueJs`):** actual SFCs from vue-js-landing-page
(Header, Hero, Service1/2, Feature, Pricing, Advantage, Testimonial, About,
Blog, Contact, Footer) plus that repo's Bootstrap/style CSS and images.
Inertia only wires brand / sign-in / register hrefs.

**shadcn (`landing/ShadcnVue`):** actual SFCs from shadcn-vue-landing-page
(Navbar through FAQ/Footer) plus ported UI primitives. Imports adapted for
`reka-ui` and `@lucide/vue`. MIT attribution in
`packages/ui/inertia/pages/landing/templates/shadcn-vue/NOTICE`.

Research clones (not committed as remotes) live under
`temp/vendor-research/` while integrating.

## Attribution

- shadcn-vue-landing-page: MIT, Copyright (c) 2024 Leopoldo Miranda
- vue-js-landing-page: see upstream README; Colorlib-style assets retained

## Edit after picking

Saved sections in the Landing page editor beat the preset for
aurora / editorial / console. Marketing and shadcn public routes always render
the ported templates (editor presets remain available for hosts that compose
sections themselves).
