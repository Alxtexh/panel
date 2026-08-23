# 18. Public landing pages

Alxtexhpanel ships **five** public landing designs as built-in kit offerings
(not optional plugins), the same posture as [auth families](09-authentication.md).

| Design | Voice | Inspiration (reimplemented, not vendored) |
|---|---|---|
| `aurora` | Modern SaaS, proof-heavy (default) | Original kit composition |
| `editorial` | Quiet typographic magazine | Original kit composition |
| `console` | Developer-tool terminal | Original kit composition |
| `marketing` | Classic marketing site | [vue-js-landing-page](https://github.com/younusaliakash/vue-js-landing-page) |
| `shadcn` | Product landing on kit tokens | [shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page) |

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

| URL | What you see |
|---|---|
| `/` | Configured design (default `aurora`) |
| `/preview/{design}` | Shipped preset for that name |
| `/landing/{design}` | Same as preview (alias route) |

Sidebar: **Landing samples** lists all five. Editor: **Landing page** under
Configuration.

## What ships in each marketing design

**marketing:** hero (brand-first, full-bleed), features, showcase, advantages,
pricing, testimonials, stats, articles, contact, CTA.

**shadcn:** hero, logos (sponsors), benefits, bento features, steps, testimonials,
team, community CTA, pricing, contact, FAQ, closing CTA.

Section types in the library: `hero`, `logos`, `features`, `bento`, `showcase`,
`steps`, `stats`, `testimonials`, `team`, `articles`, `contact`, `pricing`,
`faq`, `cta`.

## Deferred from the source repos

Intentionally **not** vendored or required of consumers:

- Bootstrap, jQuery, Owl Carousel, Fancybox, AOS from vue-js-landing-page
- Cloning either GitHub repo at install time
- `npx shadcn-vue add` / vendored shadcn-vue UI primitives
- Magenta-to-primary gradient hero (adapted to kit teal/slate tokens)
- Live contact form POST (display + mailto only; hosts wire their own endpoint)
- Real blog CMS / YouTube embeds / stock headshots (initials until you replace them)
- Landing-only theme toggle (kit appearance already covers light/dark)

## Edit after picking

Saved sections in the Landing page editor beat the preset. Clearing every block
falls back to the configured design rather than serving a blank site.
