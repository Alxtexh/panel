# Alxtexhpanel documentation

A schema-driven admin panel for Laravel. You describe a screen in one PHP class;
the panel sends that description to the browser once, and every interaction
afterwards moves data only.

These pages are the catalogue: what ships, and how to switch each part on.

| Page | What it covers |
|---|---|
| [1. Install](01-install.md) | Getting a working panel on a fresh or existing app |
| [2. Resources](02-resources.md) | Tables, forms, and the one class that declares both |
| [3. Fields](03-fields.md) | All 24 form field types |
| [4. Columns and filters](04-columns-and-filters.md) | All 12 column types, 6 filters |
| [5. Actions](05-actions.md) | Record actions, bulk actions, exports, imports |
| [6. Dashboards and widgets](06-dashboards-and-widgets.md) | Stats, 17 chart types, filters, strips |
| [7. Pages and panels](07-pages-and-panels.md) | Custom pages, multiple portals, navigation |
| [8. Authorisation and tenancy](08-authorisation-and-tenancy.md) | Policies, abilities, multi-tenancy |
| [9. Authentication](09-authentication.md) | Sign-in, passkeys, 2FA, social, impersonation |
| [10. Built-in screens](10-built-in-screens.md) | Operations, trash, documents, help — and why you may not see them |
| [11. Commands](11-commands.md) | Every artisan command |
| [12. Going to production](12-production.md) | Queues, sockets, SSR, backups |
| [Tests](tests.md) | `InteractsWithPanels`: isolation, form-state, attach, import, toasts |

## The shortest useful thing

One file. No Vue.

```php
namespace App\Panel\Resources;

use App\Models\Invoice;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;

final class InvoiceResource extends Resource
{
    protected static string $model = Invoice::class;

    public static function table(Table $table): Table
    {
        return $table->columns([
            TextColumn::make('reference')->sortable()->searchable(),
            TextColumn::make('customer_name')->copyable(),
        ]);
    }
}
```

That is a working list at `/invoices` — sortable, searchable, paginated, scoped
to the signed-in tenant, and fast on a table with a million rows.

**It will show nothing until a policy exists.** That is deliberate; see
[Authorisation](08-authorisation-and-tenancy.md).

## Two rules worth knowing before you start

**Nothing is registered by hand.** A resource class in a discovered directory
becomes a route, a navigation entry, a set of ability names and an API endpoint.
There is no `routes/panel.php` to edit.

**A missing policy denies rather than allows.** Every failure in this package is
designed to be loud. A resource with no policy shows an empty screen instead of
somebody else's data, and `panel:doctor` tells you which are missing.

## This is not tied to any industry

The reference application under `apps/playground` is an ISP billing system, and
that is a fixture rather than the product. Two test suites enforce it — one over
the Vue, one over the PHP — so no shipped string can assume a business. Build a
veterinary practice, a law firm or a warehouse on the same package.
