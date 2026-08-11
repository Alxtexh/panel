# 3. Fields

Every field is declared in `Resource::form()` and lives in
`Alxtexh\Panel\Forms\Fields`.

```php
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Form;

public static function form(Form $form): Form
{
    return $form->schema([
        TextField::make('name')->required()->placeholder('Acme Ltd'),
    ]);
}
```

**The form schema is the whitelist.** Only declared keys reach the model, so
mass assignment is bounded by what you wrote rather than by `$fillable`.

## Every field type

| Field | For |
|---|---|
| `TextField` | Single-line text |
| `TextareaField` | Multi-line text |
| `NumberField` | Numbers, with `min()` / `max()` |
| `PasswordField` | Passwords — blank means *unchanged*, never *null* |
| `SelectField` | One of a list; `searchable()` for long lists |
| `MultiSelectField` | Several of a list |
| `RadioField` | One of a few, all visible |
| `CheckboxField` | A single boolean tickbox |
| `CheckboxListField` | Several of a list, all visible |
| `ToggleField` | A boolean as a switch |
| `SliderField` | A number on a track |
| `DateField` | Dates and datetimes |
| `ColourField` | A colour picker |
| `CountryField` | An ISO country list, supplied |
| `TagsField` | Free-form repeated strings |
| `KeyValueField` | An arbitrary map |
| `CodeField` | Source, monospaced |
| `MarkdownField` | Markdown with a preview |
| `RichEditorField` | Formatted prose |
| `FileUploadField` | Files and images |
| `RepeaterField` | A repeating group of fields |
| `BuilderField` | Repeating groups of *different* shapes |
| `VisualSelectField` | A choice made by picture rather than label |
| `HiddenField` | A value submitted but not shown |

## What every field can do

These come from the shared base and work on all of them:

```php
TextField::make('reference')
    ->label('Invoice number')      // Defaults to a humanised key
    ->required()                   // Adds the validation rule
    ->placeholder('INV-0001')
    ->help('Shown under the control')
    ->disabled()
    ->span(2)                      // Columns in the form grid
    ->rules(['string', 'max:64'])  // Extra Laravel rules
    ->chips(['INV-', 'CR-'])       // One-tap values
    ->visibleWhen('type', 'invoice');  // Show only when another field matches
```

`visibleWhen()` is evaluated in the browser *and* on the server, so a hidden
field cannot be submitted by a crafted request.

## Fields worth extra care

### PasswordField

Blank means **unchanged**, which is different from writing `null` — one keeps the
stored value, the other destroys it. Any field with that shape should implement
`omitsFromStorage()`.

### FileUploadField

```php
FileUploadField::make('logo')
    ->image()
    ->accept(['png', 'jpg', 'webp'])
    ->maxKilobytes(2048)
    ->directory('logos');
```

Uploads are validated twice: the extension must be on the allow-list **and**
agree with the type sniffed from the file's own bytes. Stored names are
generated UUIDs, downloads are forced to `application/octet-stream` with
`nosniff`, and SVG is excluded deliberately — it executes script.

Stored paths are checked against the tenant prefix with `..` segments refused,
so a stored path cannot climb out of its tenant's directory.

### RepeaterField and BuilderField

`RepeaterField` repeats one shape. `BuilderField` repeats several:

```php
RepeaterField::make('lines')
    ->schema([
        TextField::make('description')->required(),
        NumberField::make('amount')->required(),
    ])
    ->minItems(1)
    ->maxItems(50)
    ->itemLabel('description');

BuilderField::make('content')
    ->block('paragraph', [RichEditorField::make('body')])
    ->block('image', [FileUploadField::make('file')->image()])
    ->maxBlocks(20);
```

### SelectField with many options

```php
SelectField::make('customer_id')
    ->options(fn () => Customer::pluck('name', 'id')->all())
    ->searchable();
```

`searchable()` moves the filtering to the server, so an option list of fifty
thousand rows does not ship to the browser.

## Layout

Fields can be grouped, and the layout components live in
`Alxtexh\Panel\Forms`:

```php
use Alxtexh\Panel\Forms\Section;

$form->schema([
    Section::make('Details')->schema([
        TextField::make('name'),
        TextField::make('email'),
    ]),
]);
```

## Custom fields, per tenant

Beyond the declared schema, an installation can let each organisation add its
own fields at runtime — see `panel_custom_fields` and the Custom Fields screen.
Those are validated and stored like any other field, without a migration.
