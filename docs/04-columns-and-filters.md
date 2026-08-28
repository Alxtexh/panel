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
| `TagsColumn` | Chips from an array, JSON array string, or separator-split string |
| `CheckboxColumn` | A read-only tick |
| `ToggleColumn` | A switch that **writes** on click |
| `SelectColumn` | A dropdown that **writes** on change |
| `TextInputColumn` | Short text that **writes** on blur/Enter, validated by `->rules()` |
| `EditableColumn` | Base for the three above |

```php
use Alxtexh\Panel\Tables\Columns\{TextColumn, BadgeColumn, ColumnGroup, TagsColumn, MoneyColumn, DateColumn};

$table->columns([
    TextColumn::make('reference')->sortable()->searchable()->locked(),
    ColumnGroup::make('Contact', [
        TextColumn::make('email')->sortable(),
        TextColumn::make('phone'),
    ]),
    TagsColumn::make('tags')->limit(3),
    BadgeColumn::make('status')
        ->colours(['paid' => 'success', 'overdue' => 'danger']),
    MoneyColumn::make('total_cents')->label('Total')->currency('KES')->sortable(),
    DateColumn::make('created_at')->sortable()->muted(),
]);
```

`ColumnGroup::make('Contact', [...])` is layout only: the nested columns still
query and render as a flat list, with a two-row header when any group is
present. `TagsColumn` accepts arrays, JSON array strings, or
`->separator(',')` split strings; relation labels belong in the row payload
(transform / cast / `fromRaw()`), not in the schema.

`locked()` keeps a column visible when the person hides others.

### Editable columns write, so they are guarded

`ToggleColumn`, `SelectColumn`, and `TextInputColumn` post a single cell. That
endpoint accepts **only** a column the resource declared as editable, and the
value is validated by the column itself — a select accepts only its own
options, a toggle only a real boolean. Without that check it would write any
attribute on any visible record, which is mass assignment wearing an
inline-edit costume.

`TextInputColumn` is the free-text one, so it is the only one that needs its
own fence — `->rules([...])` runs Laravel's own validator against the incoming
value before it is written:

```php
use Alxtexh\Panel\Tables\Columns\TextInputColumn;

TextInputColumn::make('reference')
    ->rules(['required', 'max:20', 'alpha_dash'])
    ->placeholder('e.g. REF-1024');
```

For anything longer than a short reference code or note, edit it on the record
form instead — an editable cell is a full write with a smaller control, not a
smaller commitment.

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

`groupBy('status')` still works. A `Group` object is the same thing with a
label, collapsible headings, or clustering by calendar date:

```php
use Alxtexh\Panel\Tables\Grouping\Group;

$table
    ->groupBy(Group::make('status')->collapsible()->label('Workflow'))
    ->groups([
        Group::make('status')->collapsible()->label('Workflow'),
        Group::make('created_at')->date()->label('Created date'),
    ])
    ->collapsedGroupsByDefault();
```

`groups()` is the picker, and it only appears on the table toolbar that already
hosts search and filters. Without it, grouping stays on. `?group=` is
allowlisted against those keys; unknown values fall back to the default, and
`group=-` means none, only when a picker exists.

Keyset pagination still seeks on `(group, sort, id)`. A group may span a page
and is shown continuing rather than restarted.

`reorderable()` adds drag-and-drop that writes a position column; the write is
scoped to the tenant and to the nested parent, like every other write.

## Filter chips

Applied filters appear as chips under the toolbar, with a clear control per
chip and Clear all when more than one is active. They are the same query
string the filter panel already writes, so dismissing a chip and Reset cannot
disagree.

```php
SelectFilter::make('status')
    ->options(['paid' => 'Paid', 'overdue' => 'Overdue'])
    ->indicateUsing(fn (mixed $value) => 'Only '.$value);

// Related model options (BelongsTo-style FK), tenant-scoped:
SelectFilter::make('article_id')
    ->relationship(Article::class, 'title');
```
