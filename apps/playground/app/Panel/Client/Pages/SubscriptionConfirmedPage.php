<?php

declare(strict_types=1);

namespace App\Panel\Client\Pages;

use App\Models\Plan;
use Illuminate\Http\Request;
use Alxtexh\Panel\Pages\Page;

/**
 * Where `ClientPanelProvider`'s demo checkout closure sends the browser -
 * the "dedicated page" half of the two ways a host can finish a plan
 * change: an external processor's hosted checkout, or (with no live
 * processor wired up yet, this demo's actual situation) a page the host
 * owns outright. `PlanCatalogPage::checkout()`'s resolver closure can
 * return either URL; PanelKit has no opinion on which, only that it never
 * collects payment details itself.
 *
 * NOT A PACKAGE SCREEN. "What happens after checkout with no processor" is
 * inherently host-specific - a support ticket, a manual invoice, a note to
 * follow up - so this lives beside the resource it demonstrates rather than
 * as an abstract base another host would subclass.
 */
final class SubscriptionConfirmedPage extends Page
{
    protected static string $panel = 'client';

    protected static string $icon = 'circle-check';

    public static function shouldShowInNavigation(): bool
    {
        return false;
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function label(): string
    {
        return 'Subscription request received';
    }

    public static function component(): string
    {
        return 'SubscriptionConfirmed';
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        $plan = Plan::query()->find((string) $request->query('plan', ''));

        return [
            'plan' => $plan === null ? null : [
                'name' => $plan->name,
                'priceFormatted' => 'KES '.number_format($plan->price_cents / 100, 2),
            ],
            'subscriptionHref' => '/client/account/subscription',
        ];
    }
}
