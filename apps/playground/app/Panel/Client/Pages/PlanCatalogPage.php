<?php

declare(strict_types=1);

namespace App\Panel\Client\Pages;

use App\Models\Plan;
use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\PlanCatalogPage as BasePlanCatalogPage;

/**
 * "Choose a plan" on the client portal - the purchase-side counterpart to
 * the read-only comparison table at `App\Panel\Client\Resources\PlanResource`.
 * That one is for browsing before asking to change; this one is for acting
 * on it directly.
 *
 * NO "CURRENT PLAN" BADGE HERE, and that omission is deliberate rather than
 * an oversight: nothing in this demo's schema links a `Customer` to the
 * `Plan` they are actually on (no `plan_id`, no subscription pivot). A host
 * wiring this against a real subscription would resolve that here and mark
 * one plan `current: true` - faking it in a fixture would be worse than
 * leaving it off.
 */
final class PlanCatalogPage extends BasePlanCatalogPage
{
    protected static string $panel = 'client';

    public static function plans(Request $request): array
    {
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
            ])
            ->all();
    }
}
