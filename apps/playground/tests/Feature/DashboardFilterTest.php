<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use DateTimeImmutable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use PanelKit\Panel\Widgets\Bucket;
use PanelKit\Panel\Widgets\DashboardFilters;
use PanelKit\Panel\Widgets\Period;
use PanelKit\Panel\Widgets\Window;
use Tests\TestCase;

/**
 * The dashboard-wide filter.
 *
 * The date arithmetic carries the interesting failures here: an off-by-one at
 * either boundary produces a chart that is quietly missing a day, which nobody
 * notices until they reconcile a total against something else.
 */
final class DashboardFilterTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Router $routerA;

    private Router $routerB;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->routerA = $this->makeRouter('Router A');
        $this->routerB = $this->makeRouter('Router B');

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------- the window */

    /**
     * THE BUG THIS GUARDS. `to` is a date a person picked, so choosing today
     * means "including today". Treating it as an exclusive instant dropped the
     * final day of every range and the chart just appeared to stop early.
     */
    public function test_the_end_date_is_inclusive(): void
    {
        $window = Window::between(
            new DateTimeImmutable('2026-07-21'),
            new DateTimeImmutable('2026-07-27'),
        );

        $this->assertSame('2026-07-21 00:00:00', $window->start->format('Y-m-d H:i:s'));
        // Exclusive end = the start of the day AFTER the chosen one.
        $this->assertSame('2026-07-28 00:00:00', $window->end->format('Y-m-d H:i:s'));
        $this->assertStringContainsString('27 Jul', $window->label());
    }

    /** One day picked in both fields means that whole day, not nothing. */
    public function test_a_single_day_range_covers_that_day(): void
    {
        $window = Window::between(
            new DateTimeImmutable('2026-07-27'),
            new DateTimeImmutable('2026-07-27'),
        );

        $this->assertSame(86400, $window->end->getTimestamp() - $window->start->getTimestamp());
    }

    /** A reversed range is a mis-entry, not a request for an empty window. */
    public function test_a_reversed_range_does_not_produce_an_empty_window(): void
    {
        $window = Window::between(
            new DateTimeImmutable('2026-07-27'),
            new DateTimeImmutable('2026-07-01'),
        );

        $this->assertTrue($window->end > $window->start);
    }

    /**
     * The bucket follows the span, because a person picking dates has no reason
     * to think about granularity - and picking wrong gives 17,000 points or one.
     */
    public function test_the_bucket_is_chosen_from_the_span(): void
    {
        $day = new DateTimeImmutable('2026-07-27');

        $this->assertSame(Bucket::Hour, Window::between($day->modify('-1 day'), $day)->bucket);
        $this->assertSame(Bucket::Day, Window::between($day->modify('-30 days'), $day)->bucket);
        $this->assertSame(Bucket::Month, Window::between($day->modify('-2 years'), $day)->bucket);
    }

    /** The comparison window is equal in LENGTH and adjacent. */
    public function test_the_previous_window_is_adjacent_and_equal(): void
    {
        $window = Window::between(new DateTimeImmutable('2026-07-21'), new DateTimeImmutable('2026-07-27'));
        $previous = $window->previous();

        $this->assertEquals($window->start, $previous->end);
        $this->assertSame(
            $window->end->getTimestamp() - $window->start->getTimestamp(),
            $previous->end->getTimestamp() - $previous->start->getTimestamp(),
        );
    }

    /* ------------------------------------------------------------ the parsing */

    /** A stale bookmark must render an unfiltered dashboard, not a 500. */
    public function test_an_unparseable_date_is_dropped_rather_than_fatal(): void
    {
        $filters = DashboardFilters::fromRequest(
            Request::create('/', 'GET', ['from' => 'not-a-date', 'to' => "'; DROP TABLE clients;--"]),
            new DateTimeImmutable('2026-07-27'),
        );

        $this->assertNull($filters->window);
        $this->assertFalse($filters->isActive());
    }

    public function test_router_ids_are_coerced_and_bounded(): void
    {
        $filters = DashboardFilters::fromRequest(
            Request::create('/', 'GET', ['routers' => '3,abc,-1,3,7']),
            new DateTimeImmutable('2026-07-27'),
        );

        // Numeric only, de-duplicated, negatives dropped.
        $this->assertSame([3, 7], $filters->routers);
    }

    public function test_an_open_ended_range_means_since_then(): void
    {
        $now = new DateTimeImmutable('2026-07-27 14:00:00');

        $filters = DashboardFilters::fromRequest(
            Request::create('/', 'GET', ['from' => '2026-07-01']),
            $now,
        );

        $this->assertNotNull($filters->window);
        $this->assertSame('2026-07-01', $filters->window->start->format('Y-m-d'));
        $this->assertTrue($filters->window->end > $now);
    }

    /** A filter, once set, overrides a chart's own period. */
    public function test_a_filter_window_overrides_the_chart_period(): void
    {
        $now = new DateTimeImmutable('2026-07-27');

        $filtered = DashboardFilters::fromRequest(
            Request::create('/', 'GET', ['from' => '2026-07-01', 'to' => '2026-07-10']),
            $now,
        );
        $unfiltered = DashboardFilters::fromRequest(Request::create('/', 'GET'), $now);

        $this->assertSame('2026-07-01', $filtered->windowFor(Period::Days90, $now)->start->format('Y-m-d'));
        // With no filter, the chart's own period decides.
        $this->assertSame(
            Period::Days90->start($now)->format('Y-m-d'),
            $unfiltered->windowFor(Period::Days90, $now)->start->format('Y-m-d'),
        );
    }

    /* -------------------------------------------------------------- the page */

    public function test_the_dashboard_echoes_the_applied_filters(): void
    {
        $this->get('/dashboard?from=2026-07-01&to=2026-07-10&routers='.$this->routerA->id)
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->where('filters.from', '2026-07-01')
                ->where('filters.to', '2026-07-10')
                ->where('filters.active', true)
                ->has('filterOptions.routers', 2));
    }

    /**
     * The router filter must narrow the WIDGETS, not merely appear in the URL.
     *
     * Asserted through the deferred prop, because that is where the query
     * actually runs - a filter echoed back but never applied would pass a
     * check on the props alone.
     */
    public function test_the_router_filter_narrows_a_widget(): void
    {
        $this->seedClients($this->routerA, 6);
        $this->seedClients($this->routerB, 4);

        $all = $this->deferredStat('/dashboard', 'clients_total');
        $onlyA = $this->deferredStat('/dashboard?routers='.$this->routerA->id, 'clients_total');

        $this->assertSame(10, $all['value']);
        $this->assertSame(6, $onlyA['value']);
    }

    /* ---------------------------------------------------------------- setup */

    /** @return array<string, mixed> */
    private function deferredStat(string $url, string $key): array
    {
        $props = $this
            ->withHeaders([
                'X-Inertia' => 'true',
                'X-Inertia-Version' => (string) app(HandleInertiaRequests::class)->version(request()),
                'X-Inertia-Partial-Component' => 'Dashboard',
                'X-Inertia-Partial-Data' => "stat_{$key}",
            ])
            ->getJson($url)
            ->assertOk()
            ->json('props');

        return $props["stat_{$key}"];
    }

    private function makeRouter(string $name): Router
    {
        return Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => $name,
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);
    }

    private function seedClients(Router $router, int $count): void
    {
        $plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => "Plan {$router->id}",
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        for ($i = 0; $i < $count; $i++) {
            $unique = uniqid((string) $router->id, true);

            Client::withoutGlobalScopes()->forceCreate([
                'tenant_id' => $this->tenant->id,
                'plan_id' => $plan->id,
                'router_id' => $router->id,
                'name' => "Client {$unique}",
                'phone' => '+254'.substr((string) crc32($unique), 0, 9),
                'access_code' => strtoupper(substr(md5($unique), 0, 10)),
                'status' => 'active',
                'plan_type' => 'pppoe',
                'expiry_date' => '2026-12-31',
            ]);
        }
    }
}
