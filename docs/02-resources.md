# 2. Resources

A resource is one class describing one model's screens. Put it anywhere under a
discovered directory — `app/Panel/Resources` by default — and it becomes a list,
a form, a view screen, routes, ability names and an API endpoint.

```bash
php artisan make:panel-resource Invoice --generate
```

`--generate` introspects the table and writes columns, fields and filters that
match its real shape. Without it you get a stub to fill in.

## The whole surface

```php
final class InvoiceResource extends Resource
{
    protected static string $model = Invoice::class;

    // Optional: defaults derive from the model name.
    protected static ?string $slug = 'invoices';
    protected static ?string $navigationGroup = 'Billing';
    protected static ?string $navigationIcon = 'receipt';
    protected static ?int $navigationSort = 10;

    public static function table(Table $table): Table { /* … */ }
    public static function form(Form $form): Form { /* … */ }
}
```

**Nothing registers it.** Discovery finds the class; the navigation entry, the
routes and the abilities `view_any_invoices`, `create_invoices` and the rest all
follow from it existing.

## Why the list stays fast

Three decisions, each of which only matters once the table is big.

**Keyset pagination, not `OFFSET`.** `OFFSET 100000` makes the database walk
100,000 rows it then discards. The panel seeks instead, so the first page costs
the same on 250,000 rows as on 200 — measured at 0.44 ms against 0.48 ms.

**The count is deferred.** `COUNT(*)` over 250,000 rows takes ~17 ms, and nobody
should wait for a number they are not reading yet. Rows arrive first.

**Joins are declared, so the query count is constant.**

```php
$table
    ->query(fn ($q) => $q->leftJoin('customers', 'customers.id', '=', 'invoices.customer_id'))
    ->columns([
        TextColumn::make('customer_name')->from('customers.name'),
    ])
    ->keyColumn('invoices.id')      // qualified — see below
    ->alsoSelect(['invoices.id']);
```

> **If your table joins, qualify the key column.** The keyset tiebreaker appears
> in every `ORDER BY`, so an unqualified `id` becomes ambiguous the moment a
> second table has one.

## Nested resources

A resource can live under a parent:

```php
final class LineResource extends Resource
{
    protected static string $model = Line::class;
    protected static ?string $parentResource = InvoiceResource::class;
    protected static ?string $parentColumn = 'invoice_id';
}
```

The URL becomes `/invoices/{invoice}/lines`. The parent is resolved from the URL
and authorised — a caller must be able to `view` the parent, a mismatched
pairing is a 404, and another tenant's id is a 404 rather than a 403 because
confirming existence would itself leak.

## Relation managers

Show related records on a record's own screen:

```php
public static function relations(): array
{
    return [LinesRelationManager::class];
}
```

## Header widgets

Any resource can carry stats and charts above its table:

```php
public static function headerWidgets(): array
{
    return [
        StatWidget::make('outstanding', 'Outstanding')
            ->value(fn (): int => Invoice::whereNull('paid_at')->count()),
    ];
}
```

They render as one joined strip, the same shape a dashboard uses — see
[Dashboards and widgets](06-dashboards-and-widgets.md).

## The public API

A resource marked `documented()` also appears in `/api/v1`, with OpenAPI
generated from the same declaration. Tokens are issued by
`php artisan panel:api-token` and carry their own abilities, intersected with
the resource policy — a token cannot exceed its owner.

It is **off by default**: a resource is not an API endpoint until you say so.
