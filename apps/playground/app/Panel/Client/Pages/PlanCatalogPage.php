<?php

declare(strict_types=1);

namespace App\Panel\Client\Pages;

use App\Models\Customer;
use App\Models\Plan;
use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\PlanCatalogPage as BasePlanCatalogPage;

/**
 * The client portal's subscription page - the purchase-side counterpart to
 * the read-only comparison table at `App\Panel\Client\Resources\PlanResource`.
 * That one is for browsing before asking to change; this one is for acting
 * on it directly.
 *
 * `customers.plan_id` IS THE LINK, and it is deliberately separate from
 * `panel_billing_states` (`Alxtexh\Panel\Billing\BillingState`): that table
 * tracks whether THIS TENANT's own subscription to PanelKit is current -
 * what `EnforceSubscriptionGate` gates on - a different question from which
 * internet plan one of the tenant's customers is on. Mixing the two would
 * show an ISP's own platform billing status on a screen selling internet
 * plans to its subscribers.
 */
final class PlanCatalogPage extends BasePlanCatalogPage
{
    protected static string $panel = 'client';

    public static function plans(Request $request): array
    {
        $currentPlanId = self::customer($request)?->plan_id;

        return Plan::query()
            ->where('is_active', true)
            ->orderBy('price_cents')
            ->get()
            ->map(static fn (Plan $plan): array => [
                'id' => (string) $plan->getKey(),
                'name' => $plan->name,
                'price' => $plan->price_cents / 100,
                'priceFormatted' => 'KES '.number_format($plan->price_cents / 100, 2),
                'interval' => 'month',
                'description' => $plan->speed_mbps !== null
                    ? "{$plan->speed_mbps} Mbps"
                    : null,
                'current' => $currentPlanId !== null && $plan->getKey() === $currentPlanId,
            ])
            ->all();
    }

    /**
     * Just `active`/no status, honestly - this demo's `Customer` tracks
     * which plan somebody is on, not a renewal date or a payment state for
     * it. Fabricating one would look more complete than the data behind it
     * actually is.
     */
    public static function subscription(Request $request): ?array
    {
        return self::customer($request)?->plan_id !== null ? ['status' => 'active'] : null;
    }

    private static function customer(Request $request): ?Customer
    {
        $user = $request->user('customers');

        return $user instanceof Customer ? $user : null;
    }
}
