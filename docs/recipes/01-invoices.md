# Starter recipe: Invoices

Copyable, non-ISP. This is the official next step after `panel:install` and
the Get started card. It is not Nairobi Fibre and not the playground demo.

```bash
php artisan make:panel-recipe Invoices
# alias: php artisan panel:recipe invoices
```

## What it writes

- `app/Panel/Resources/InvoiceResource.php` (number, status, total, dated_at)
- `app/Models/Invoice.php`
- `app/Policies/InvoicePolicy.php` (denies until `panel:permissions sync`)
- `database/migrations/*_create_invoices_table.php`
- `docs/recipes/01-invoices.md` in the host app

Dashboard is already empty from install. Vue is kit `ResourceIndex` /
`ResourceForm` / `ResourceView`. No custom Vue page. No Livewire. No Stripe.

Default: **no rows**. Pass `--seed` for three fake records. Pass `--migrate`
to create the table, or run `php artisan migrate` yourself.

Discovery: after `panel:install`, `AdminPanelProvider` already watches
`app/Panel/Resources`. Nothing to register by hand.

Visit `/invoices` once permissions are synced.

## Optional packaged billing wall

Not Stripe. Uncomment on the panel provider:

```php
->apps(['billing-portal'])
->billingState()
```

That enables the empty billing portal and the packaged suspended-access
screen. See [13. Billing adapters](../13-billing-adapters.md) for inbound
webhooks.

## Nested lines (optional)

```bash
php artisan make:panel-relation-manager Invoice InvoiceItem
```

That writes `InvoiceItemResource` with `$parent` and dedicated child pages,
not a modal.
