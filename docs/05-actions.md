# 5. Actions

## Presentation: pages first, overlays for secondary work

Create, edit, and view are **dedicated pages** by default. Do not open full CRUD
in a modal unless the resource opts in:

```php
ArticleResource::configure()
    ->createUsing('modal') // or 'page' (default)
    ->editUsing('page')
    ->viewUsing('page');
```

Use slide-overs and dense modals for **secondary** flows only:

| Flow | UI |
| --- | --- |
| Record action with `->form([...])` | Dense `PkModal` (`size="form"`) by default; `->slideOver()` uses `PkSlideover` |
| Bulk action with `->form([...])` | Dense `PkModal` (`size="form"`) by default; `->slideOver()` uses `PkSlideover` |
| Confirm-only actions / delete | Dense `PkModal` (`size="confirm"`) |
| Dashboard / catalogue filters | `PkSlideover` |
| Notifications, inspect drawers | `PkSlideover` |
| Opt-in CRUD modal | `PkSlideover` via `ResourceCrudModal` |

Page `FORM_MEASURE` (`max-w-7xl`) is for dedicated create/edit/view pages.
Overlays use `OVERLAY_FORM_MEASURE` inside the panel. See
[Design layout](14-design-layout.md).

## Record actions

One declared action against one record:

```php
use Alxtexh\Panel\Actions\RecordAction;

$table->actions([
    RecordAction::make('send', 'Send')
        ->icon('mail')
        ->authorize('update')
        ->confirm('Send this invoice to the customer?')
        ->visible(fn (array $row): bool => $row['status'] !== 'sent')
        ->handle(fn (Invoice $invoice) => $invoice->send()),
]);
```

Every action passes three gates:

1. **The key must be declared on this table.** The request names a key, and only
   a key the table declared resolves: the endpoint cannot be talked into
   calling a method the resource did not offer.
2. **The ability is the action's own, checked against this record.**
   `ReplicateAction` asks for `create`, not `update`: it produces a new row, and
   somebody who may edit but not add must not add one through a menu item.
3. **`visible()` is re-evaluated on the server.** Hiding is not enforcement: a
   client that skips the UI and posts the key still has to satisfy it.

An action may collect input first:

```php
RecordAction::make('refund', 'Refund')
    ->form([NumberField::make('amount')->required()])
    ->handle(fn (Invoice $i, array $data) => $i->refund($data['amount']));
```

The form's declaration is the authority: rules come from the declared fields and
everything else is discarded, so an action form is not a mass-assignment
endpoint with a nicer label.

Use `->slideOver()` when the form needs more horizontal room than a centred modal:

```php
RecordAction::make('assign', 'Assign')
    ->form([SelectField::make('owner_id')->required()])
    ->slideOver()
    ->handle(fn (Task $task, array $data) => $task->update($data));
```

Group related actions with `ActionGroup`.

By default a successful action reloads the current list in place. `->redirect()`
sends the browser somewhere else instead — useful for anything that produces or
opens a different record:

```php
use Alxtexh\Panel\Actions\ReplicateAction;

ReplicateAction::make()->toAction()
    ->redirect(fn (Invoice $invoice, array $result): string => "/invoices/{$result['id']}/edit");
```

The closure's second argument is whatever `handle()` returned — the same array
sent to the client as `values` — not the original `$record`. A closure cannot
rebind the caller's variable, so an action whose `handle()` creates a different
row (like `ReplicateAction`, which returns `['id' => $copy->getKey()]`) has no
other way to hand the new one back. A plain string works for the common case,
where every run goes to the same fixed place:

```php
RecordAction::make('start-onboarding', 'Start onboarding')
    ->redirect('/onboarding');
```

## Workflow transitions

Declare a workflow on the resource to generate transition actions from a status
column. See [16. Workflows](16-workflows.md).

```php
RecordAction::make('publish', 'Publish')
    ->authorize('update')
    ->transitionTo('published', 'status', Article::class);
```

`transitionTo()` pairs with `HasStateTransitions` on the model so disallowed hops
are refused at execution time and recorded in the audit trail.

## Infolist actions

```php
use Alxtexh\Panel\Actions\Action;
use Alxtexh\Panel\Infolists\TextEntry;

TextEntry::make('email')->action(
    Action::make('copy')->handle(fn (Invoice $invoice) => $invoice->touch()),
);
```

Click POSTs `{ action }` to `{resource}/{id}/infolist-action`. Same gates as a
table `RecordAction`: the key must be declared, the ability is checked against
this record. `Entry::url()` remains. The view page stays dedicated.

## Bulk actions

```php
use Alxtexh\Panel\Actions\BulkAction;

$table->bulkActions([
    BulkAction::make('mark-paid', 'Mark paid')
        ->authorize('update')
        ->queueThreshold(100)
        ->handle(fn ($query) => $query->update(['paid_at' => now()])),
]);
```

A bulk action may collect input once before the selection is touched, the same
way a record action does:

```php
BulkAction::make('assign', 'Assign')
    ->form(fn (Form $form): Form => $form->schema([
        SelectField::make('owner_id')->required(),
    ]))
    ->slideOver()
    ->handle(fn ($records, array $data) => $records->each->update($data));
```

`->slideOver()` is opt-in and mirrors `RecordAction::slideOver()`: the index
opens `PkSlideover` instead of the dense centred modal. Page-first CRUD stays
the default; use slide-over for secondary bulk forms that need more horizontal
room.

**Queueing is automatic.** Past a row count the action stops running in the web
request and becomes a job, with progress reported back:

```php
// config/panel.php
'bulk' => ['queue_threshold' => 250],
```

The action may override it: cost is a property of what the action *does*, not
of how many rows were ticked: two hundred rows through a handler that sends a
message is slower than a thousand through a column update.

Select-all sends the **filters**, not the ids, so a selection of everything is
not a request carrying half a million integers. An explicit selection past the
threshold sends its ids with the job, because re-deriving them from filters
would apply the action to a different set than the one that was ticked.

`BulkRunner` walks the selection in keyset chunks and counts before it commits.

## Export

Any list exports to CSV, respecting the current filters, the tenant scope and
the per-resource `viewAny` ability, re-checked inside the worker, not only at
dispatch. The finished file is owner-checked with a constant-time comparison
and pruned by `panel:prune-exports`.

## Import

`ImportController` maps a CSV's columns to declared fields, validates each row
against the same rules the form uses, and stamps the tenant from context after
the mapped row rather than from the file: a CSV column named `tenant_id`
cannot move records between organisations.

Import is opt-in (`Resource::importable()`). `php artisan make:panel-importer Order`
writes an empty importer class the resource can name:

```php
public static function importable(): bool|string
{
    return OrderImporter::class;
}
```

Failed rows download as CSV. Excel is optional, not a kit dependency:
`Resource::excelImport()` plus `composer require phpoffice/phpspreadsheet`.
CSV stays the default path. Assert the 404 vs CSV vs failures download with
`assertNotImportable`, `assertPanelImports` and `assertImportFailuresDownload`
from [Tests](tests.md).

## Toasts

```php
use Alxtexh\Panel\Actions\Action;
use Alxtexh\Panel\Notifications\Notification;

Notification::make()->title('Saved')->success()->send();

Notification::make()
    ->title('Invoice posted')
    ->success()
    ->actions([
        Action::make('view')->url($url),
        Action::make('download')->url($download)->openUrlInNewTab(),
        Action::make('approve')->url(route('invoices.approve', $invoice))->method('post'),
    ])
    ->send();
```

This flashes the existing Inertia toast (`{ type, message }`, optional
`actions`). `->bell()` also writes a `BellText` row the topbar already renders.
There is no Livewire toast stack. URL actions are hrefs on the toast and the
bell. `method('post')` POSTs that href with the same CSRF the infolist uses.
`assertPanelToast('Saved')` checks the flash.
