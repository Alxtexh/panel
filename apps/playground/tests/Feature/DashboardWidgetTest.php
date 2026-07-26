<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Widgets\StatWidget;
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

        foreach ($queries as $sql) {
            $this->assertStringNotContainsStringIgnoringCase(
                'count(',
                $sql,
                "A widget aggregate ran during first paint: {$sql}"
            );
        }

        // The widget LIST is present so the shell can render six skeletons of
        // the right shape; the values are not.
        $this->assertCount(6, $props['widgets']);
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
            'X-Inertia-Version' => (string) (new HandleInertiaRequests())->version(request()),
            'X-Inertia-Partial-Component' => 'Dashboard',
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

        $this->assertSame(['value' => null, 'error' => true], $broken->resolve('tenant-1'));
        $this->assertSame(['value' => 42, 'error' => false], $working->resolve('tenant-1'));
    }

    /** The whole page must still render with a broken widget on it. */
    public function test_the_dashboard_renders_despite_a_broken_widget(): void
    {
        $this->actingAs($this->user)->get('/dashboard')->assertOk();

        $response = $this->actingAs($this->user)->get('/dashboard', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests())->version(request()),
            'X-Inertia-Partial-Component' => 'Dashboard',
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

        $this->assertSame(['value' => 7, 'error' => false], $widget->resolve('tenant-1'));
    }
}
