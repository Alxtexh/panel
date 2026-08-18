# 13. Billing webhook adapters

PanelKit does not ship a payment processor. The inbound contract is the same
for any gateway: verify a signature header, map the payload to a billing
status, persist through `BillingStateStore`.

There is no plugin marketplace. Copy the recipe. Change the header name and
the secret source.

## Endpoint

`POST /{panel}/billing/webhooks/{adapter?}`

The `{adapter}` segment is a label for your logs. It does not select a vendor.

## Hooks

```php
use Alxtexh\Panel\Billing\GenericBillingWebhookAdapter;
use Alxtexh\Panel\Panel;

Panel::make('admin')
    ->apps(['billing-portal'])
    ->billingState()
    ->billingWebhookVerifier(GenericBillingWebhookAdapter::verifier(
        (string) config('services.billing.webhook_secret'),
        'X-Webhook-Signature',
    ))
    ->billingWebhookMapper(GenericBillingWebhookAdapter::mapper());
```

- `billingWebhookVerifier`: HMAC of the **raw body** against a named header.
  Empty secret or missing header fails closed (401).
- `billingWebhookMapper`: turn the JSON into `billable_key` + `status`.
  Optional: `billable_type`, `period_end_at`, `grace_ends_at`, `provider_ref`.

Statuses the packaged wall understands: `active`, `past_due`, `suspended`,
`canceled`, `expired`.

## Generic payload (no mapping)

If your processor already posts those keys, the packaged mapper is enough:

```json
{
  "billable_type": "tenant",
  "billable_key": "42",
  "status": "past_due",
  "grace_ends_at": "2026-08-20T00:00:00Z",
  "provider_ref": "ref-100"
}
```

## Mapping a different event shape

Copy `packages/panel/examples/generic-billing-webhook.php` into a panel
provider. Match on `event` / `type`, then return the contract above.

`SignedHeaderWebhookVerifier::using($secret, $header)` is the same HMAC helper
if you want a different header without the adapter wrapper.

## Tests

```php
use Alxtexh\Panel\Testing\InteractsWithPanels;

$this->assertBillingWebhookAccepted([
    'billable_type' => 'tenant',
    'billable_key' => (string) $tenant->id,
    'status' => 'active',
]);

$this->assertBillingSuspendedRedirect($this->operator, '/invoices');
$this->assertSuspendedPageRenders($this->operator);
$this->assertBillingAllows($this->operator, '/account/suspended');
```

See [Tests](tests.md) and [Built-in screens](10-built-in-screens.md).
