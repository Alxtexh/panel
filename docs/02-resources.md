# 2. Resources

A resource is one class describing one model's screens. Put it anywhere under a
discovered directory (`app/Panel/Resources` by default) and it becomes a list,
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

## Create / edit / view: pages first

Dedicated create, edit, and view pages are the default. Slide-overs and dense
modals are for **secondary** work (record action forms, filters, confirmations).
Opt into a CRUD slide-over per operation when you need it:

```php
InvoiceResource::configure()
    ->createUsing('modal') // default remains 'page'
    ->editUsing('page')
    ->viewUsing('page');
```

See [Actions](05-actions.md) and [Design layout](14-design-layout.md).

## Why the list stays fast

Three decisions, each of which only matters once the table is big.

**Keyset pagination, not `OFFSET`.** `OFFSET 100000` makes the database walk
100,000 rows it then discards. The panel seeks instead, so the first page costs
the same on 250,000 rows as on 200, measured at 0.44 ms against 0.48 ms.

**The count is deferred.** `COUNT(*)` over 250,000 rows takes ~17 ms, and nobody
should wait for a number they are not reading yet. Rows arrive first.

**Joins are declared, so the query count is constant.**

```php
$table
    ->query(fn ($q) => $q->leftJoin('customers', 'customers.id', '=', 'invoices.customer_id'))
    ->columns([
        TextColumn::make('customer_name')->from('customers.name'),
    ])
    ->keyColumn('invoices.id')      // qualified: see below
    ->alsoSelect(['invoices.id']);
```

> **If your table joins, qualify the key column.** The keyset tiebreaker appears
> in every `ORDER BY`, so an unqualified `id` becomes ambiguous the moment a
> second table has one.

## Nested resources

A resource can live under a parent. Create, edit and view are dedicated pages
(the Filament `CreateRecord` / `EditRecord` model), never a modal.

```php
final class LineResource extends Resource
{
    protected static string $model = Line::class;
    protected static ?string $parent = InvoiceResource::class;
    protected static ?string $parentColumn = 'invoice_id';
}
```

The URL becomes `/invoices/{invoice}/lines`, plus `/create` and `/{id}/edit`.
The parent is resolved from the URL and authorised: a caller must be able to
`view` the parent, a mismatched pairing is a 404, and another tenant's id is a
404 rather than a 403 because confirming existence would itself leak. Writes
stamp the parent from the URL, so a submitted foreign key cannot move the row.

BelongsToMany: set `$relationship` to the parent model's method. Attach is a
dedicated page at `/{parent}/{id}/{child}/attach`. Detach is a row action on
the nested index. Not a modal, not Livewire.

`pivotColumns()` declares extra fields that live on the pivot table itself,
not on the related model:

```php
final class TagResource extends Resource
{
    protected static ?string $parent = ArticleResource::class;
    protected static ?string $relationship = 'tags';

    public static function pivotColumns(): array
    {
        return [TextField::make('note')];
    }
}
```

The attach page collects them once and applies the same values to every id in
that submission - not a separate form per selected row. `Edit pivot` is then
an auto-registered row action next to `Detach` for changing them afterwards,
via `updateExistingPivot()`, without detaching and reattaching. Each declared
field also appears as its own `pivot_{key}` column on the nested list, on
both the resource's dedicated nested page and a `RelationManager` tab
embedding the same resource - read through a correlated subquery per column,
not a join, so a pair with more than one pivot row still reads one value
rather than multiplying the list's rows.

## Relation managers

The tab on the parent view page is a summary. It links to the nested pages
above. Do not implement Filament's modal CRUD here.

```php
public static function relations(): array
{
    return [
        RelationManager::make('lines', 'Lines')
            ->resource(LineResource::class)
            ->table(fn (Table $t) => $t->columns([
                TextColumn::make('name')->from('lines.name'),
            ])->keyColumn('lines.id')),
    ];
}
```

`php artisan make:panel-relation-manager Invoice Line` writes the nested
resource and a factory that returns that `RelationManager`.

`->readOnly()` turns off inline create and the edit affordance on THIS tab -
scoped to what a relation manager actually owns, the summary tab on the
parent page. It does not lock the nested resource's own dedicated pages;
`LineResource`'s `attach`/`detach`/edit routes still resolve against that
resource's own `create`/`update` abilities, independently of any tab that
happens to link to them. A relation genuinely meant to be read-only
everywhere gates that on the nested resource itself, not here.

## Infolists

The dedicated view page can declare entries instead of reusing every table
column:

```php
use Alxtexh\Panel\Actions\Action;
use Alxtexh\Panel\Infolists\BadgeEntry;
use Alxtexh\Panel\Infolists\CodeEntry;
use Alxtexh\Panel\Infolists\ColorEntry;
use Alxtexh\Panel\Infolists\DateTimeEntry;
use Alxtexh\Panel\Infolists\IconEntry;
use Alxtexh\Panel\Infolists\ImageEntry;
use Alxtexh\Panel\Infolists\KeyValueEntry;
use Alxtexh\Panel\Infolists\MoneyEntry;
use Alxtexh\Panel\Infolists\RepeatableEntry;
use Alxtexh\Panel\Infolists\TextEntry;
use Alxtexh\Panel\Infolists\ViewEntry;

public static function infolist(): array
{
    return [
        TextEntry::make('title'),
        ImageEntry::make('cover'),
        KeyValueEntry::make('meta')->labels('Key', 'Value'),
        ColorEntry::make('accent'),
        CodeEntry::make('snippet')->language('json'),
        RepeatableEntry::make('extras')->schema([
            TextEntry::make('label'),
            TextEntry::make('url'),
        ]),
        IconEntry::make('status')->icons(['published' => 'check'])->colors(['published' => 'success']),
        BadgeEntry::make('status')
            ->colors(['draft' => 'neutral', 'published' => 'success', 'archived' => 'warning'])
            ->defaultColor('neutral'),
        DateTimeEntry::make('created_at'),
        DateTimeEntry::make('published_at')->date(),
        MoneyEntry::make('price')->currency('USD')->divideBy(100),
        ViewEntry::make('preview')->view('invoice-summary'),
        TextEntry::make('email')->action(
            Action::make('copy')->handle(fn ($record) => $record->touch()),
        ),
    ];
}
```

`ViewEntry` names a host-registered Vue view. In the application entry
(for example `resources/js/app.ts`):

```ts
import { registerEntryView } from '@alxtexh-enterprise/panel'
import InvoiceSummary from './infolists/InvoiceSummary.vue'

registerEntryView('invoice-summary', InvoiceSummary)
```

The Vue component receives `node`, `record`, and `value` (`record[key]`).
A missing registration shows a diagnostic on the view page rather than
rendering blank. Empty `infolist()` still falls back to table columns on the
view page.

Click POSTs `{ action }` to `{resource}/{id}/infolist-action`. `Entry::url()` remains a plain link. The view page stays a dedicated page.

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

They render as one joined strip, the same shape a dashboard uses. See
[Dashboards and widgets](06-dashboards-and-widgets.md).

## Kanban board (opt-in)

Declare `board()` on a resource. Until you do, `GET {resource}/board` and
`POST {resource}/board-move` answer 404 (routes exist; the actions refuse).

```php
use Alxtexh\Panel\Resources\Board;

public static function board(): ?Board
{
    return Board::make('status')
        ->columns([
            'open' => 'Open',
            'doing' => 'In progress',
            'done' => 'Done',
        ])
        ->title('name')
        ->description('notes');
}
```

That mounts `ResourceKanban` at `{resource}/board` and accepts
`POST {resource}/board-move` with `{ id, column }` against the declared
allowlist. Nested resources use the same paths under the parent prefix
(`/{parent}/{id}/{resource}/board`). Run `php artisan panel:update` so hosts
get the Vite page stub.

## Table chrome Pro (opt-in)

Sticky first column, column resize, and a table/cards toggle stay off until
you ask:

```php
public static function table(Table $table): Table
{
    return $table
        ->stickyFirstColumn()
        ->resizableColumns()
        ->layouts(['table', 'cards'])
        ->columns([/* … */]);
}
```

Widths and layout may also ride in saved views (`ViewState` keys `widths`,
`layout`). Local prefs mirror them under `alxtexhpanel.{key}.widths` /
`.layout`.

## The public API

A resource that answers `documented()` (true by default; return `false` to
opt out) appears in `/api/v1`, with OpenAPI generated from the same declaration.
Tokens are issued by `php artisan panel:api-token` (or the Api keys screen) and
carry their abilities intersected with the resource policy.

```php
public static function documented(): bool
{
    return true; // default; return false to hide from /api/v1 and Scalar
}
```

OpenAPI covers list/create/read/update/delete, bulk and record actions when
declared, import when `importable()`, relation routes from `relations()`, and
bearer auth via `/api/v1` in the generated document. Enable Scalar with
`Panel::apiDocs()` or `apps(['api-docs'])`.
