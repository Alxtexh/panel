<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Widgets\StatWidget;
use RuntimeException;
use Tests\TestCase;

/**
 * Phase 8 acceptance: the dashboard shell paints before any widget query runs,
 * and widgets fill in independently.
 */
final class DashboardWidgetTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Tenant A', 'slug' => 'tenant-a']);
        $this->user = User::factory()->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    /**
     * §10: "The page shell must paint before any widget query runs. No widget
     * may block first paint."
     *
     * The strongest form of that is measurable: the initial response must run NO
     * aggregate query at all.
     */
    public function test_the_initial_response_runs_no_widget_query(): void
    {
        DB::flushQueryLog();
        DB::enableQueryLog();

        $props = $this->actingAs($this->user)->get('/dashboard')->assertOk()
            ->viewData('page')['props'];

        $queries = array_column(DB::getQueryLog(), 'query');

        /*
         * The notifications table is EXEMPT, and deliberately named rather than
         * matched loosely.
         *
         * This guard is about the LIST query: a COUNT over a resource table is
         * unbounded, grows with the tenant, and is what §10 forbids in front of
         * rows. The unread-badge count is a different shape - one user's inbox,
         * hit through the morph index, bounded by what that person has been
         * sent. Excluding it by name keeps the guard sharp; broadening the
         * pattern to "ignore counts we expect" would let a real one back in.
         *
         * `tickets` IS THE SAME SHAPE. The header's quick-create menu asks
         * every creatable resource `can('create')`, on every page - Ticket's
         * own answer is rate-limited (`TicketPolicy::create()`), so it costs
         * one query, bounded by one person's own tickets in the last day, not
         * by tenant size.
         */
        $queries = array_filter(
            $queries,
            static fn (string $sql): bool => ! str_contains($sql, 'notifications')
                && ! str_contains($sql, 'tickets'),
        );

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase(
                'count(',
                $sql,
                "A widget aggregate ran during first paint: {$sql}"
            );
        }

        /*
         * The widget LIST is present so the shell can render a skeleton of the
         * right shape for each; the values are not.
         *
         * SEVEN, NOT EIGHT: the deliberately-broken demonstration card is off by
         * default now - see `panel.demo.broken_widget`. Counted rather than
         * named because the number is the thing this assertion is about, and a
         * widget quietly disappearing would otherwise go unnoticed.
         */
        $this->assertCount(7, $props['widgets']);
        $this->assertArrayNotHasKey('stat_clients_total', $props);
    }

    public function test_a_deferred_widget_resolves_on_request(): void
    {
        DB::table('clients')->insert([
            'tenant_id' => $this->user->tenant_id,
            'name' => 'A', 'phone' => '+1', 'access_code' => 'A1',
            'status' => 'active', 'plan_type' => 'pppoe',
            'expiry_date' => now(), 'created_at' => now(), 'updated_at' => now(),
        ]);

        $response = $this->actingAs($this->user)->get('/dashboard', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
            'X-Inertia-Partial-Component' => 'PanelDashboard',
            'X-Inertia-Partial-Data' => 'stat_clients_total',
        ])->assertOk();

        $this->assertSame(1, $response->json('props.stat_clients_total.value'));
        $this->assertFalse($response->json('props.stat_clients_total.error'));
    }

    /**
     * antipatterns §3.3: an eager query in one definition took a whole page down
     * for every tenant. The operator directive afterwards was literally "even if
     * the user has no router just show the pages".
     *
     * So a widget that throws must report ITSELF as failed and leave the rest of
     * the dashboard intact.
     */
    public function test_a_failing_widget_degrades_only_itself(): void
    {
        $broken = StatWidget::make('broken', 'Broken')
            ->value(fn (): int => throw new RuntimeException('boom'));

        $working = StatWidget::make('working', 'Working')->value(fn (): int => 42);

        // The envelope always carries trend and sparkline slots, declared or
        // not, so a card renders the same shape either way.
        $this->assertSame(
            ['value' => null, 'error' => true, 'trend' => null, 'sparkline' => null],
            $broken->resolve('tenant-1'),
        );
        $this->assertSame(
            ['value' => 42, 'error' => false, 'trend' => null, 'sparkline' => null],
            $working->resolve('tenant-1'),
        );
    }

    /**
     * The whole page must still render with a broken widget on it.
     *
     * THE DEMONSTRATION CARD IS OFF BY DEFAULT NOW, so this test turns it on.
     * It used to ship enabled: a permanently red card on the reference
     * dashboard, which teaches every reader to ignore a red card. The behaviour
     * still has to be proved - that is what this is - it just no longer has to
     * be proved on everybody's screen.
     */
    public function test_the_dashboard_renders_despite_a_broken_widget(): void
    {
        config()->set('panel.demo.broken_widget', true);

        $this->actingAs($this->user)->get('/dashboard')->assertOk();

        $response = $this->actingAs($this->user)->get('/dashboard', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
            'X-Inertia-Partial-Component' => 'PanelDashboard',
            'X-Inertia-Partial-Data' => 'stat_deliberately_broken',
        ])->assertOk();

        $this->assertTrue($response->json('props.stat_deliberately_broken.error'));
    }

    /**
     * antipatterns §4.1: "a cache with no invalidation path is a bug, not an
     * optimisation". TTL is a self-healing backstop, never the mechanism, so a
     * cached widget that names no invalidation events must refuse to run.
     */
    public function test_a_cached_widget_without_invalidation_events_throws(): void
    {
        $widget = StatWidget::make('bad', 'Bad')->value(fn (): int => 1)->cache(300);

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('declares no invalidation events');

        $widget->resolve('tenant-1');
    }

    public function test_a_cached_widget_with_invalidation_events_is_allowed(): void
    {
        $widget = StatWidget::make('good', 'Good')
            ->value(fn (): int => 7)
            ->cache(300)
            ->invalidatedBy(['App\Events\ClientSaved']);

        $this->assertSame(
            ['value' => 7, 'error' => false, 'trend' => null, 'sparkline' => null],
            $widget->resolve('tenant-1'),
        );
    }
}
