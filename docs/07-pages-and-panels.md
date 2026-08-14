# 7. Pages and panels

## A custom page

```bash
php artisan make:panel-page Reports
php artisan make:panel-page Overview --dashboard   # a widget host
```

```php
final class Reports extends Page
{
    protected static string $panel = 'admin';
    protected static ?string $navigationGroup = 'Insights';
    protected static ?string $ability = 'view_reports';

    public static function props(): array
    {
        return ['rows' => Report::all()];
    }
}
```

A page declares its own ability. If that name is not in the registry it is not
in the permission matrix, `grants_all` never tops it up, and
`panel:permissions --prune` deletes it as unknown — so declare extra abilities
in `config/panel.php` under `abilities`.

## Several portals

```bash
php artisan make:panel reseller --guard=resellers --new-guard --auth
```

That writes a provider, a resource directory, a discovery entry, a line in
`bootstrap/providers.php`, an isolation test, and — with `--new-guard` — the
guard and its user provider in `config/auth.php`.

**`--new-guard` matters.** Without it, naming a guard that does not exist
produces a portal that generates cleanly, reports success, and answers its first
request with `Auth guard [resellers] is not defined.` The command now warns even
when you do not pass the flag.

The provider it writes is ordinary readable PHP, meant to be edited:

```php
Panel::make('reseller')
    ->path('reseller')
    ->guard('resellers')
    ->authMiddleware(['auth:resellers'])
    ->brandName(fn (): string => config('app.name').' - Reseller')
    ->without(['operations', 'documents'])
    ->login();
```

**Central versus tenant is asked, never guessed.** A central panel must never
have tenant scoping applied; a tenant panel must refuse to boot without a
resolved tenant. Getting it wrong is how an operator sees everyone's data, and
neither shows a symptom until somebody looks closely at a list they had no
reason to distrust. Each generated portal ships with an isolation test that
enumerates the registry, so a resource added tomorrow is covered without editing
it.

## Navigation

Entries come from resources and pages automatically. Sort and group with
`$navigationGroup`, `$navigationSort` and `$navigationIcon`.

**Groups nest** with a slash:

```php
protected static ?string $navigationGroup = 'Building/Reference';
```

Declare entries that are not resources on the panel:

```php
Panel::make('admin')->navigationItems([
    [
        'title' => 'Documentation',
        'href' => static fn (): string => route('docs'),
        'icon' => 'book-open',
        'group' => 'Building/Reference',
        'sort' => 90,
        'ability' => 'view_docs',   // optional; hides when absent
    ],
]);
```

`href` may be a closure so it resolves per request.

## The shell

`PanelShell` reads what the server already shares — navigation, brand, colours,
the account menu — so a layout is three lines:

```vue
<script setup lang="ts">
import { PanelShell } from '@alxtexh-enterprise/panel/inertia';
</script>

<template>
    <PanelShell><slot /></PanelShell>
</template>
```

Slots: `#topbar` for a heading or breadcrumbs, `#actions` for trailing controls,
`#userMenu` to replace the account menu entirely. To replace the shell, stop
importing it and write your own — the props are all on the page.

Per-panel colours are applied as CSS variables, resolved per request, so a
portal can wear the signed-in reseller's brand.

## Routes yield to yours

If your application already answers `GET /settings/profile`, the package does
not mount its own. Laravel indexes routes by method and URI, so a second
registration would **replace** yours and every `route('profile.edit')` in your
codebase would throw — from a package you installed for its screens. Skipping is
the safe direction, and it is per URL: claiming profile does not cost you the
security screen.
