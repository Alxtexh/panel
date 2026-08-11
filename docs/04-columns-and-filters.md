# 4. Columns and filters

## Every column type

From `Alxtexh\Panel\Tables\Columns`:

| Column | Shows |
|---|---|
| `TextColumn` | Text, with `->prefix()`, `->suffix()`, `->copyable()` |
| `BadgeColumn` | A pill, coloured per value |
| `MoneyColumn` | Minor units as currency: `->currency('KES')` |
| `DateColumn` | Dates, relative or absolute |
| `IconColumn` | An icon per value |
| `ImageColumn` | A thumbnail |
| `ColourColumn` | A colour swatch |
| `CodeColumn` | Monospaced |
| `KeyValueColumn` | A map, summarised |
| `CheckboxColumn` | A read-only tick |
| `ToggleColumn` | A switch that **writes** on click |
| `SelectColumn` | A dropdown that **writes** on change |
| `EditableColumn` | Base for the two above |

```php
$table->columns([
    TextColumn::make('reference')->sortable()->searchable()->locked(),
    BadgeColumn::make('status')
        ->colours(['paid' => 'success', 'overdue' => 'danger']),
    MoneyColumn::make('total_cents')->label('Total')->currency('KES')->sortable(),
    DateColumn::make('created_at')->sortable()->muted(),
]);
```

`locked()` keeps a column visible when the person hides others.

### Editable columns write, so they are guarded

`ToggleColumn` and `SelectColumn` post a single cell. That endpoint accepts
**only** a column the resource declared as editable, and the value is validated
by the column itself — a select accepts only its own options. Without that check
it would write any attribute on any visible record, which is mass assignment
wearing an inline-edit costume.

## Every filter type

From `Alxtexh\Panel\Tables\Filters`:

| Filter | For |
|---|---|
| `SelectFilter` | One of a list |
| `MultiSelectFilter` | Several of a list |
| `BooleanFilter` | Yes / no / either |
| `DateRangeFilter` | Between two dates |
| `TrashedFilter` | With, without, or only deleted |
| `QueryBuilderFilter` | Arbitrary nested AND/OR conditions |

```php
$table->filters([
    SelectFilter::make('status')->options(['paid' => 'Paid', 'overdue' => 'Overdue']),
    BooleanFilter::make('active')->label('Availability')->column('invoices.is_active'),
    DateRangeFilter::make('created_at')->label('Raised'),
]);
```

## Search

`searchable()` on a column includes it in the search box. Search runs
server-side against the declared columns only — never `SELECT *` with a
`LIKE` over everything — and the sortable column list is an allow-list, so a
crafted `sort` parameter cannot inject an identifier.

## Grouping, summaries and reorder

```php
$table
    ->groupBy('status')
    ->summarise(['total_cents' => 'sum'])
    ->reorderable('position');
```

`reorderable()` adds drag-and-drop that writes a position column; the write is
scoped to the tenant and to the nested parent, like every other write.
