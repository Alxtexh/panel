# Tests

`InteractsWithPanels` is the trait for tests you write against a panel. Every
helper goes through HTTP, because calling a resource's methods directly proves
the class works and says nothing about the route, the middleware, the panel,
the guard and the policy.

```php
use Alxtexh\Panel\Testing\InteractsWithPanels;

final class InvoiceResourceTest extends TestCase
{
    use InteractsWithPanels;
}
```

Tenant isolation is still the first assertion for any tenant resource:
`assertTenantIsolation` checks the list and the record URL.

## Live form-state

`live()` POSTs `{ field, values }` to `{resource}/form-state`. The server
returns `{ options, schema, values }`.

```php
$payload = $this->assertFormState($this->operator, 'invoices', [
    'field' => 'customer_id',
    'values' => ['customer_id' => $customer->id],
]);

$this->assertArrayHasKey('plan_id', $payload['options']);
```

Nested resources pass the parent in the suffix:

```php
$this->assertFormState(
    $this->operator,
    'invoices',
    ['field' => 'body', 'values' => ['body' => 'Hello']],
    $invoice->id.'/lines/form-state',
);
```

## Nested attach and detach

BelongsToMany attach is a dedicated page at `/{parent}/{id}/{child}/attach`.
Detach is a row action on the nested index. Not a modal.

```php
$this->assertNestedAttach($this->operator, 'articles', $article, 'tags', $tag->id);
$this->assertNestedDetach($this->operator, 'articles', $article, 'tags', $tag);
```

## Infolist actions

Click POSTs `{ action }` to `{resource}/{id}/infolist-action`. The view stays
a dedicated page.

```php
$this->assertInfolistAction($this->operator, 'articles', $article, 'copy');
```

## Import

`importable()` is opt-in. A resource that did not opt in 404s. CSV import can
fail rows; those rows are downloadable.

```php
$this->assertNotImportable($this->operator, 'posts');

$dry = $this->assertPanelImports(
    $this->operator,
    'articles',
    "title,status\nOne,draft\n",
    ['title' => 'title', 'status' => 'status'],
    dryRun: true,
);

$failed = $this->assertPanelImports(
    $this->operator,
    'articles',
    "title,status\n,draft\n",
    ['title' => 'title', 'status' => 'status'],
);

$this->assertImportFailuresDownload($this->operator, 'articles', $failed);
```

## Empty-grants hint

A signed-in account with no abilities still opens the dashboard. The shared
props say so, and name the commands that grant a role.

```php
Gate::before(fn () => false);

$this->assertEmptyGrantsHint($this->operator);
```

## Toasts

`Notification::make()->title('Saved')->success()->send()` flashes the same
Inertia toast the shell already shows. Optional `->bell()` also writes
`BellText`.

```php
Notification::make()->title('Saved')->success()->send();

$this->assertPanelToast('Saved');
```

## Billing access and inbound webhooks

The packaged wall redirects blocked accounts to `{panel}/account/suspended`.
Inbound webhooks POST `{panel}/billing/webhooks/{adapter?}`. Helpers go
through HTTP, same as the rest of the trait.

```php
app(PanelManager::class)->panel('admin')
    ->billingState(fn (): array => ['status' => 'suspended']);

$this->assertBillingSuspendedRedirect($this->operator, '/invoices');
$this->assertSuspendedPageRenders($this->operator);
$this->assertBillingAllows($this->operator, '/account/suspended');

$this->assertBillingWebhookAccepted([
    'billable_type' => 'tenant',
    'billable_key' => (string) $tenant->id,
    'status' => 'past_due',
]);
```

`assertBillingAllows` is the inverse of the redirect: the URL renders 200.
Pass a full path as `$expected` to `assertBillingSuspendedRedirect` when the
portal is prefixed (`/reseller/account/suspended`).

