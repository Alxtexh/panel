<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use App\Panel\Pages\OverviewPage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * The widget host, which is the thing `StatWidget` never had.
 *
 * NINE WIDGET CLASSES SHIPPED WITH NOWHERE TO RENDER. They composed correct
 * value objects and nothing mounted them: no dashboard route, no mechanism for a
 * screen that is not a resource, and `Workspace` - the intended host -
 * referenced exactly once in the package, inside a comment. `panel:blueprint`
 * listed all nine as things an agent could build with, which is how the gap was
 * noticed: somebody could have written a dashboard that was clean, tested and
 * invisible.
 *
 * WHAT IS ASSERTED IS NOT "a page renders". It is that a declaration produces a
 * routed screen, that each widget arrives as its OWN deferred prop, and that a
 * widget the signed-in operator may not see is never resolved at all - the three
 * properties that make this a host rather than a template.
 */
final class DashboardPageTest extends TestCase
{
    use RefreshDatabase;

    private function tenant(): Tenant
    {
        return Tenant::query()->first() ?? Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities = []): User
    {
        $tenant = $this->tenant();

        return $abilities === []
            ? User::factory()->roleless()->create(['tenant_id' => $tenant->getKey()])
            : User::factory()->withAbilities($abilities)->create(['tenant_id' => $tenant->getKey()]);
    }

    private function props(User $user): array
    {
        return $this->actingAs($user)->get('/overview')->assertOk()->viewData('page')['props'];
    }

    /** A dashboard is three declarations, and the screen follows. */
    public function test_a_declared_dashboard_is_routed_and_renders_the_packaged_screen(): void
    {
        $page = $this->actingAs($this->operator())->get('/overview')->assertOk()->viewData('page');

        $this->assertSame('PanelDashboard', $page['component']);
    }

    /**
     * THE DECLARATIONS TRAVEL WITH THE PAGE, so the layout is on screen before
     * anything has been counted. Labels and spans are what a card needs to
     * render empty; the number arrives afterwards.
     */
    public function test_the_widget_declarations_arrive_immediately(): void
    {
        $props = $this->props($this->operator(['view_network_widgets']));

        $this->assertSame(
            ['subscribers', 'active'],
            array_column($props['widgets'], 'key'),
        );

        $this->assertSame(['signups'], array_column($props['charts'], 'key'));
        $this->assertSame('Subscribers', $props['widgets'][0]['label']);
    }

    /**
     * EACH VALUE IS ITS OWN DEFERRED PROP, in its own group.
     *
     * Resolving them together would make the dashboard as slow as its worst
     * query - on real data the difference between a screen people open and one
     * they avoid - and would let a single failing aggregate blank the rest.
     */
    public function test_every_widget_resolves_as_a_separate_deferred_prop(): void
    {
        $page = $this->actingAs($this->operator(['view_network_widgets']))
            ->get('/overview')
            ->viewData('page');

        $deferred = collect($page['deferredProps'] ?? [])->flatten()->all();

        $this->assertContains('stat_subscribers', $deferred);
        $this->assertContains('stat_active', $deferred);
        $this->assertContains('chart_signups', $deferred);
    }

    /**
     * A WIDGET SOMEBODY MAY NOT SEE IS NEVER QUERIED AND NEVER SENT.
     *
     * This is the half a dashboard cannot do without: the support rota needs
     * connection counts and must not see commercial figures. Filtering in the
     * browser would ship the number to somebody forbidden from it and rely on
     * CSS to keep the secret.
     */
    public function test_a_widget_without_its_ability_is_absent_entirely(): void
    {
        $props = $this->props($this->operator());

        $keys = array_column($props['widgets'], 'key');

        $this->assertContains('subscribers', $keys);
        $this->assertNotContains('active', $keys, 'A gated widget was sent to somebody without its ability.');
        $this->assertArrayNotHasKey('stat_active', $props);
    }

    /** And a deferred value is a real query when it is finally asked for. */
    public function test_a_deferred_value_resolves_against_real_rows(): void
    {
        /*
         * INSERTED THROUGH THE QUERY BUILDER, not the model.
         *
         * `Client` fills its tenant column from the panel's resolved context
         * rather than from anything a caller passes - which is the point of it,
         * and would otherwise mean standing up a whole tenant context to seed
         * three rows. The scoping has its own suite; what is under test here is
         * that the widget's closure runs and returns the count.
         */
        $tenant = $this->tenant();

        foreach (['A', 'B', 'C'] as $i => $suffix) {
            DB::table('clients')->insert([
                'tenant_id' => $tenant->getKey(),
                'name' => "Subscriber {$suffix}",
                'phone' => '07000000'.$i,
                'access_code' => 'AC-'.$suffix,
                'status' => 'active',
                'plan_type' => 'pppoe',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        /*
         * THE CLOSURE IS INVOKED DIRECTLY rather than through a partial reload.
         * Hand-writing Inertia's protocol headers to trigger one produced a 409
         * on the asset version - a test failing on the wire format rather than
         * on the thing it is about.
         */
        $this->actingAs($this->operator());

        $data = OverviewPage::data(request());

        // `DeferProp` is invokable; its callback is protected, by design.
        $resolved = app()->call($data['stat_subscribers']);

        $this->assertSame(3, $resolved['value']);
        $this->assertFalse($resolved['error']);
    }

    /** The page places itself, like any other declared page. */
    public function test_it_appears_in_the_navigation(): void
    {
        $titles = array_column(
            app(PanelManager::class)->panelPages(),
            'title',
        );

        $this->assertContains(OverviewPage::label(), $titles);
    }
}
