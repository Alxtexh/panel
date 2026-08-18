<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\BillingAccess;

/**
 * Billing portal empty canvas. OFF until `apps(['billing-portal'])`.
 *
 * Host implements gateway-specific data via subscription(), invoices(),
 * paymentMethods() and actions(). Mount on client or tenant panels.
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
     * Host-defined billing actions.
     *
     * @return array<string, array{label: string, href: string|null}>
     */
    public static function billingActions(Request $request): array
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        if ($panel === null) {
            return BillingAccess::defaultPortalActions();
        }

        return $panel->resolveBillingPortalActions();
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
            'billingActions' => static::billingActions($request),
        ];
    }
}
