# 18. Public landing pages

Alxtexhpanel ships **four** public landing designs as built-in kit offerings
(not optional plugins), the same posture as [auth families](09-authentication.md).

| Design | Voice | Source |
|---|---|---|
| `aurora` | Modern SaaS, proof-heavy (default) | Original kit composition |
| `editorial` | Quiet typographic magazine | Original kit composition |
| `console` | Developer-tool terminal | Original kit composition |
| `studio` | Brand-first workshop, precise and warm | Original kit composition |

Alias: `composed` → `aurora`.

The route is **off by default** so `/` stays free for host apps. When on, the
default design is a real landing (`aurora`), never an empty page.

Vue-js and shadcn-vue third-party landing ports are **not** shipped. Those
templates were removed; `/preview/marketing` and `/preview/shadcn` do not route.

## Select a variant

### Fluent API (preferred on a panel provider)

```php
use Alxtexh\Panel\Panel;

Panel::make('admin')
    ->landing(true);                 // claim / , keep config design
    // ->landing('editorial');       // claim / + set design
    // ->landing('composed');        // alias → aurora
    // ->landing(false);             // do not claim /
```

`Panel::landings()` (alias `Panel::landingDesigns()`) returns the four names.

### Config

```php
// config/panel.php
'landing' => [
    'route' => true,
    'design' => env('PANEL_LANDING', 'aurora'), // aurora|editorial|console|studio
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
PANEL_LANDING=editorial
PANEL_LANDING_PREVIEWS=true
```

## Demo URLs (playground)

With `route` and `previews` on:

| URL | What you see |
|---|---|
| `/` | Configured design (default `aurora`) |
| `/preview/aurora` | Kit aurora composition |
| `/preview/editorial` | Kit editorial composition |
| `/preview/console` | Kit console composition |
| `/preview/studio` | Kit studio composition |
| `/preview/composed` | Same as aurora (alias) |
| `/landing/{design}` | Same as preview (alias route) |

Sidebar: **Landing samples** lists aurora, editorial, console and studio. Editor:
**Landing page** under Configuration.

## What ships

All four designs use the section composer (`landing/Composed`) with kit `Pk*`
section components and design-specific backdrops.

## Edit after picking

Saved sections in the Landing page editor beat the preset for
aurora / editorial / console / studio.
