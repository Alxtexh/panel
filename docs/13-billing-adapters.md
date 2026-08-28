# 13. Billing adapters

PanelKit does not ship a payment processor. Both directions of the story stay
adapter-shaped: **inbound**, a webhook tells you billing state changed (verify
a signature, map the payload, persist through `BillingStateStore` - this
page); **outbound**, a customer picks a plan and you need to send them to a
checkout (a closure creates the session, this page's last section).

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

## Outbound: a customer chooses a plan

`PlanSetupPage` is the admin/superadmin side: an operator edits the
catalogue. `PlanCatalogPage` is the other half - a customer browses it and
buys, on the `client` panel (or wherever your customers sign in). Both are
opt-in subclasses over the same idea: this class owns nothing about your
plans or your processor, it owns the screen.

```php
use App\Models\Plan;
use Alxtexh\Panel\Panel;

Panel::make('client')
    ->planCatalog(function (Panel $panel, ?Authenticatable $user, Request $request, string $planId) {
        // Create a real checkout session with whatever you use - Stripe,
        // Paddle, Chargebee - and return ITS url. This is the purchase-side
        // equivalent of billingWebhookMapper() above: PanelKit stays out of
        // the vendor, the shape is a closure.
        $session = Stripe::checkout()->sessions()->create([
            'customer' => $user->stripe_id,
            'line_items' => [['price' => Plan::find($planId)->stripe_price_id, 'quantity' => 1]],
            'mode' => 'subscription',
            'success_url' => url('/client/account/billing'),
        ]);

        return $session->url;
    });
```

```php
namespace App\Panel\Client\Pages;

use App\Models\Plan;
use Alxtexh\Panel\Pages\PlanCatalogPage as BasePlanCatalogPage;

final class PlanCatalogPage extends BasePlanCatalogPage
{
    protected static string $panel = 'client';

    public static function plans(Request $request): array
    {
        return Plan::query()->where('is_active', true)->get()
            ->map(fn (Plan $plan) => [
                'id' => (string) $plan->id,
                'name' => $plan->name,
                'price' => $plan->price_cents / 100,
                'priceFormatted' => 'KES '.number_format($plan->price_cents / 100, 2),
                'current' => $plan->id === $request->user()->plan_id,
            ])
            ->all();
    }
}
```

The card's button never collects a card number - clicking it POSTs the
chosen plan's id to the page's `checkout` action, which validates it, runs
the closure above, and redirects the browser to whatever URL it returned
(`Inertia::location()`, so this works whether the visit came in as a normal
page load or an Inertia XHR). This is also how production SaaS billing
overwhelmingly works: Stripe Checkout, Paddle's overlay and Chargebee's
hosted page are all "redirect to a session URL", not a card form embedded in
somebody else's app.

Mark the caller's own plan `current: true` yourself, same reasoning as
`BillingPortalPage::subscription()` being a host hook: this class has no
subscription model of its own to compare against. A plan with `annualPrice`
set gets a monthly/annual toggle, same interaction as the public `PkPricing`
landing component - hidden entirely when no plan has one, since a switch
that changes nothing is a dead control.
