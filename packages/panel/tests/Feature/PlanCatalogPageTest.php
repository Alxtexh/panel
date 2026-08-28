<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tests\Fixtures\Pages\FixturePlanCatalogPage;
use Alxtexh\Panel\Tests\Fixtures\Pages\SecondPlanCatalogPage;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * `PlanCatalogPage`: the customer-facing counterpart to `PlanSetupPage`.
 * Off until `Panel::planCatalog()`, and `checkout()` never talks to a
 * payment processor itself - it validates the chosen id and hands off to
 * whatever closure the host supplied.
 */
final class PlanCatalogPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_is_disabled_until_the_owning_panel_opts_in(): void
    {
        $this->assertFalse(FixturePlanCatalogPage::isEnabled());
    }

    public function test_plan_catalog_opts_the_panel_into_the_app_and_stores_the_resolver(): void
    {
        $resolver = static fn (): string => '/checkout';

        $panel = Panel::make('demo-plan-catalog')->planCatalog($resolver);

        $this->assertTrue($panel->offersApp('plan-checkout'));
        $this->assertSame($resolver, $panel->planCheckoutResolver());
    }

    public function test_is_enabled_once_the_owning_panel_opts_in(): void
    {
        app(PanelManager::class)->panel('admin')?->planCatalog(static fn (): string => '/x');

        $this->assertTrue(FixturePlanCatalogPage::isEnabled());
    }

    /** Open to any authenticated principal by default - see the class docblock. */
    public function test_ability_is_null_by_default(): void
    {
        $this->assertNull(FixturePlanCatalogPage::ability());
    }

    public function test_data_exposes_plans_and_a_checkout_href(): void
    {
        $data = FixturePlanCatalogPage::data(Request::create('/account/subscription'));

        $this->assertCount(2, $data['plans']);
        $this->assertSame('starter', $data['plans'][0]['id']);
        $this->assertStringEndsWith('/account/subscription/checkout', $data['checkoutHref']);
    }

    /**
     * NULL BY DEFAULT, deliberately - see the class docblock for why
     * auto-wiring `BillingStateStore` would be a category error for a host
     * whose catalogue is not the platform subscription itself.
     */
    public function test_subscription_is_null_by_default(): void
    {
        $this->assertNull(FixturePlanCatalogPage::subscription(Request::create('/account/subscription')));
        $this->assertNull(FixturePlanCatalogPage::data(Request::create('/account/subscription'))['subscription']);
    }

    public function test_checkout_requires_a_plan_id(): void
    {
        $this->expectException(ValidationException::class);

        FixturePlanCatalogPage::checkout(Request::create('/account/subscription/checkout', 'POST', []));
    }

    /**
     * `Inertia::location()` reads `Request::inertia()` off the CURRENT bound
     * request to decide between a 409 + `X-Inertia-Location` (a real Inertia
     * XHR visit, the browser case) and a plain redirect (everything else,
     * including this static call with no request bound into the container).
     * Both branches return `Redirect::away($url)`/an equivalent redirect to
     * the resolver's URL - checked here via the `Location` header, which is
     * the part both branches actually share.
     */
    public function test_checkout_calls_the_resolver_with_named_arguments_and_redirects_to_its_url(): void
    {
        $received = null;

        app(PanelManager::class)->panel('admin')?->planCatalog(
            function (Panel $panel, mixed $user, Request $request, string $planId) use (&$received): string {
                $received = $planId;

                return '/checkout/session/xyz';
            },
        );

        $response = FixturePlanCatalogPage::checkout(
            Request::create('/account/subscription/checkout', 'POST', ['plan_id' => 'pro']),
        );

        $this->assertSame('pro', $received);
        $this->assertStringEndsWith('/checkout/session/xyz', $response->headers->get('Location') ?? '');
    }

    /**
     * THE ACTUAL BROWSER CASE: an Inertia XHR visit gets 409 +
     * `X-Inertia-Location` back, which the Inertia client reads as "do a
     * real `window.location` navigation" rather than trying to follow the
     * redirect as another Inertia page - see `checkout()`'s own docblock for
     * why `redirect()->away()` would have broken this.
     */
    public function test_checkout_sends_an_inertia_location_response_to_an_inertia_request(): void
    {
        app(PanelManager::class)->panel('admin')?->planCatalog(
            static fn (): string => '/checkout/session/xyz',
        );

        $request = Request::create('/account/subscription/checkout', 'POST', ['plan_id' => 'pro']);
        $request->headers->set('X-Inertia', 'true');
        app()->instance('request', $request);

        $response = FixturePlanCatalogPage::checkout($request);

        $this->assertSame(409, $response->getStatusCode());
        $this->assertSame('/checkout/session/xyz', $response->headers->get('X-Inertia-Location'));
    }

    /**
     * A CONFIGURATION MISTAKE, NOT A SILENT NO-OP.
     *
     * `apps(['plan-checkout'])` without `planCatalog()`'s resolver is not
     * reachable through the public API (`planCatalog()` always sets both
     * together), so this reaches in past it - the same way a resource test
     * exercises a boundary the fluent builder does not normally let you hit.
     */
    public function test_checkout_404s_when_the_app_was_enabled_with_no_resolver(): void
    {
        app(PanelManager::class)->panel('second')?->apps(['plan-checkout']);

        $this->expectException(NotFoundHttpException::class);

        SecondPlanCatalogPage::checkout(
            Request::create('/account/subscription/checkout', 'POST', ['plan_id' => 'x']),
        );
    }
}
