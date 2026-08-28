<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;
use Alxtexh\Panel\PanelManager;

/**
 * ONE subscription page - status at the top, the plan picker below - not two
 * separate screens. This is the customer-facing counterpart to
 * `PlanSetupPage` (that page EDITS the catalogue; this one SELLS from it),
 * shaped after how production Filament billing plugins actually do it
 * (`tomatophp/filament-subscriptions`' single "Billing" page, "like [Laravel]
 * Spark"; `ihor-k/subkit`'s pricing table + subscription dashboard pairing):
 * one screen shows what you have and what you could have instead, so
 * changing plans is not a hunt across two unrelated menu entries.
 *
 * THE CARD'S BUTTON OPENS A CONFIRM MODAL, IT NEVER COLLECTS A CARD NUMBER
 * ITSELF. Filament's own convention is the same two-step split: a "Change
 * Subscription" modal confirms WHICH plan, then Stripe Checkout (hosted,
 * off-site) collects payment. `checkout()` calls the host's
 * `Panel::planCatalog()` closure, which creates a checkout session with
 * whatever Stripe/Paddle/Chargebee/etc the host actually uses and returns
 * the URL to send the browser to - or, for a host with no live processor
 * yet, the URL of their own dedicated confirmation page. Either way PanelKit
 * ships no payment processor (docs/13-billing-adapters.md) - the same
 * posture the billing WEBHOOK adapter already takes for the inbound half of
 * this story.
 *
 * OPT-IN, LIKE `BillingPortalPage`: `isEnabled()` checks
 * `offersApp('plan-checkout')`, set by `Panel::planCatalog()`.
 *
 * OPT-IN BY SUBCLASSING, LIKE `PlanSetupPage`. Fill `plans()`, mark whichever
 * one is `current: true` yourself - this class has no idea what "your
 * current plan" means for your billing model, the same reason
 * `subscription()` defaults to null rather than reading `BillingStateStore`
 * itself: that store tracks whether a TENANT's own subscription to the
 * platform is current (what `EnforceSubscriptionGate`/`BillingPortalPage`
 * gate on) - a different question from "which plan is THIS host's own
 * product catalogue selling", which is exactly what this page is generic
 * enough to be used for instead (an ISP selling internet plans to ITS
 * customers, say). Wiring the two together by default would show a
 * tenant's platform billing status on a screen selling something else
 * entirely. A host whose catalogue genuinely IS the platform subscription
 * overrides `subscription()` with `BillingStateStore::forCurrentContext()`
 * itself - one line, and now it says so on purpose.
 */
abstract class PlanCatalogPage extends Page
{
    protected static string $icon = 'credit-card';

    protected static ?string $group = 'Account';

    public static function uri(): string
    {
        return 'account/subscription';
    }

    public static function label(): string
    {
        return __('panel::billing.subscription.label');
    }

    public static function component(): string
    {
        return 'Subscription';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('plan-checkout');
    }

    /**
     * OPEN TO ANY AUTHENTICATED PRINCIPAL BY DEFAULT, unlike most pages'
     * slug-derived ability. The panel-level opt-in (`Panel::planCatalog()`)
     * is the real gate here - a panel that should not offer this simply
     * never calls it. A guard model with no ability system at all (a plain
     * `Customer`, holding no Spatie roles) must not be locked out of a
     * screen whose whole purpose is letting them act on their own account;
     * `Ability::allows()` falls back to `Gate::can()`, which denies any
     * ability nobody defined. A host that wants this narrower overrides
     * `ability()` on its subclass, same as any other page.
     */
    public static function ability(): ?string
    {
        return null;
    }

    /**
     * Purchasable plans. Mark the caller's own plan `current: true` - this
     * class has no billing model of its own to compare against.
     *
     * `annualPrice` is optional and mirrors `PkPricing`'s marketing tiers:
     * the monthly/annual toggle only appears at all once some plan declares
     * one (`PkPricing.vue`'s own rule - a switch that changes nothing is a
     * dead control). `priceFormatted`/`annualPriceFormatted` win over the
     * raw numbers when present, so a host with locale-specific currency
     * formatting is not fighting this class's own guess at it.
     *
     * @return list<array{
     *     id: string,
     *     name: string,
     *     price: int|float,
     *     priceFormatted?: string,
     *     annualPrice?: int|float,
     *     annualPriceFormatted?: string,
     *     currency?: string,
     *     interval?: string,
     *     description?: string,
     *     features?: list<string>,
     *     current?: bool,
     *     recommended?: bool,
     * }>
     */
    abstract public static function plans(Request $request): array;

    /**
     * The caller's current subscription status, for the summary at the top
     * of the page. Null renders no summary at all - a page with plans to
     * choose from but nothing to say about "your current plan" yet.
     *
     * NULL BY DEFAULT, deliberately not `BillingStateStore::forCurrentContext()`
     * - see the class docblock for why auto-wiring that would be a category
     * error for a host whose catalogue is not the platform subscription
     * itself. Override with that call, or with your own query, once you
     * know which one this page is selling.
     *
     * @return array{status?: string, period_end_at?: string|null, grace_ends_at?: string|null}|null
     */
    public static function subscription(Request $request): ?array
    {
        return null;
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'subscription' => static::subscription($request),
            'plans' => static::plans($request),
            'checkoutHref' => static::indexHref().'/checkout',
        ];
    }

    /** @return array<string, string|null> */
    public static function actions(): array
    {
        return ['checkout' => static::ability()];
    }

    /** @return array<string, string> */
    public static function actionUris(): array
    {
        return ['checkout' => 'checkout'];
    }

    public static function indexHref(): string
    {
        $index = '/'.trim(static::navigationPath(), '/');
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        if ($prefix !== '' && $prefix !== '/') {
            $index = rtrim($prefix, '/').$index;
        }

        if (! str_starts_with($index, '/')) {
            $index = '/'.$index;
        }

        return $index;
    }

    /**
     * Hand the chosen plan to the host's checkout resolver and follow the
     * URL it returns.
     *
     * `Inertia::location()`, NOT `redirect()->away()`. The request that hit
     * this action came from Inertia's own XHR visit, which follows an
     * ordinary redirect response by re-fetching it as if it were another
     * Inertia page - fine for a same-app redirect, broken for a processor's
     * checkout page on somebody else's domain (wrong content type, and nine
     * times out of ten a CORS failure before it even gets that far).
     * `Inertia::location()` instead sends `X-Inertia-Location`, which the
     * client reads as an instruction to do a real `window.location`
     * navigation - see `PanelIdleActivity.php`'s own use of the same call
     * for the same reason.
     *
     * NO RESOLVER IS A 404, NOT A SILENT NO-OP. `isEnabled()` already keeps
     * this route unreachable unless `planCatalog()` was called, so reaching
     * here with no resolver means the panel enabled the app but never
     * supplied one - a configuration mistake worth failing loudly on rather
     * than pretending to complete a purchase that went nowhere.
     */
    public static function checkout(Request $request): Response
    {
        $validated = $request->validate([
            'plan_id' => ['required', 'string', 'max:64'],
        ]);

        $panel = app(PanelManager::class)->panel(static::panel());
        $resolver = $panel?->planCheckoutResolver();

        abort_if($resolver === null, 404);

        $url = app()->call($resolver, [
            'panel' => $panel,
            'user' => $request->user(),
            'request' => $request,
            'planId' => $validated['plan_id'],
        ]);

        abort_unless(
            is_string($url) && $url !== '',
            500,
            'The plan checkout resolver returned no redirect target.',
        );

        return Inertia::location($url);
    }
}
