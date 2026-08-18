<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;

/**
 * Billing portal empty canvas. OFF until `apps(['billing-portal'])`.
 *
 * Host implements Stripe/Cashier/M-Pesa via subscription(), invoices(),
 * paymentMethods() and actions(). Mount on client/tenant panels.
 */
class BillingPortalPage extends Page
{
    protected static string $icon = 'credit-card';

    protected static ?string $group = 'Account';

    public static function uri(): string
    {
        return 'account/billing';
    }

    public static function label(): string
    {
        return 'Billing';
    }

    public static function component(): string
    {
        return 'BillingPortal';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('billing-portal');
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function subscription(Request $request): ?array
    {
        return null;
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function invoices(Request $request): array
    {
        return [];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function paymentMethods(Request $request): array
    {
        return [];
    }

    /**
     * Host-defined billing actions (checkout, portal, cancel, etc.).
     *
     * @return array<string, string|null>
     */
    public static function billingActions(): array
    {
        return [];
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'subscription' => static::subscription($request),
            'invoices' => static::invoices($request),
            'paymentMethods' => static::paymentMethods($request),
            'billingActions' => array_keys(static::billingActions()),
        ];
    }
}
