<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Http\Middleware\HandleInertiaRequests;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Support\Abilities;
use Tests\TestCase;

/**
 * A dashboard is not one secret.
 *
 * THE QUESTION THIS ANSWERS WAS ASKED PLAINLY: somebody needs the dashboard but
 * must not see the commercial figures. While visibility was all-or-nothing the
 * only replies were "show them the revenue" or "take the dashboard away", and
 * both are the wrong answer to a real distinction - a support rota needs the
 * connection counts and has no business seeing what the company earns.
 *
 * WHAT IS ASSERTED IS THE PAYLOAD, NOT THE RENDERING. A hidden card is not a
 * permission: the number still travels in the page props for anybody who opens
 * the network tab, and the query still runs, so it is not even cheaper. These
 * tests read the props directly for that reason - if a guarded widget's key
 * appears there at all, it has leaked, whatever the screen draws.
 */
final class WidgetVisibilityTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /** @return array{stats: list<string>, charts: list<string>, props: array<string, mixed>} */
    private function dashboardFor(User $user): array
    {
        $props = $this->actingAs($user)->get('/dashboard')->viewData('page')['props'];

        return [
            'stats' => array_column($props['widgets'], 'key'),
            'charts' => array_column($props['charts'], 'key'),
            'props' => $props,
        ];
    }

    /* ------------------------------------------------------------ the split */

    public function test_somebody_without_the_commercial_ability_does_not_get_those_widgets(): void
    {
        $user = $this->operator(['view_any_clients', 'view_network_widgets']);

        $dashboard = $this->dashboardFor($user);

        $this->assertNotContains('clients_new', $dashboard['stats'], 'Sign-up figures leaked.');
        $this->assertNotContains('signups', $dashboard['charts']);
        $this->assertNotContains('customer_summary', $dashboard['charts']);
        $this->assertNotContains('plan_type', $dashboard['charts']);
    }

    /** And still gets the ones they are entitled to, or the split is just a wall. */
    public function test_they_still_get_the_network_widgets(): void
    {
        $user = $this->operator(['view_any_clients', 'view_network_widgets']);

        $dashboard = $this->dashboardFor($user);

        $this->assertContains('sessions_live', $dashboard['stats']);
        $this->assertContains('routers_online', $dashboard['stats']);
        $this->assertContains('system_status', $dashboard['charts']);
    }

    public function test_the_reverse_split_holds_too(): void
    {
        $user = $this->operator(['view_any_clients', 'view_commercial_widgets']);

        $dashboard = $this->dashboardFor($user);

        $this->assertContains('clients_new', $dashboard['stats']);
        $this->assertNotContains('sessions_live', $dashboard['stats'], 'Network figures leaked.');
        $this->assertNotContains('system_status', $dashboard['charts']);
    }

    /**
     * UNGUARDED WIDGETS REACH EVERYBODY, and the default direction is
     * deliberate. A dashboard whose widgets default to hidden empties itself
     * silently as widgets are added, and a blank screen with no error reads as a
     * broken page rather than as a permissions decision.
     */
    public function test_a_widget_with_no_ability_is_shown_to_anybody(): void
    {
        $dashboard = $this->dashboardFor($this->operator(['view_any_clients']));

        $this->assertContains('clients_total', $dashboard['stats']);
        $this->assertContains('status', $dashboard['charts']);
    }

    public function test_somebody_with_everything_sees_everything(): void
    {
        $dashboard = $this->dashboardFor($this->operator(Abilities::all()));

        foreach (['clients_new', 'sessions_live', 'routers_online'] as $key) {
            $this->assertContains($key, $dashboard['stats']);
        }

        foreach (['signups', 'system_status', 'customer_summary'] as $key) {
            $this->assertContains($key, $dashboard['charts']);
        }
    }

    /**
     * A partial reload's props, which is where a deferred prop actually appears.
     *
     * @return array<string, mixed>
     */
    private function partial(User $user, string $prop): array
    {
        return (array) $this->actingAs($user)->get('/dashboard', [
            'X-Inertia' => 'true',
            'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
            'X-Inertia-Partial-Component' => 'PanelDashboard',
            'X-Inertia-Partial-Data' => $prop,
        ])->json('props');
    }

    /* ----------------------------------------------------------- the leaks */

    /**
     * THE VALUE NEVER TRAVELS EITHER.
     *
     * Each widget is a deferred prop registered by key. Filtering the list but
     * still registering the prop would leave the number in the payload of the
     * very next partial reload - hidden on screen, present on the wire, and the
     * query run to produce it.
     */
    public function test_a_hidden_widget_registers_no_deferred_prop(): void
    {
        $user = $this->operator(['view_any_clients', 'view_network_widgets']);

        $props = $this->dashboardFor($user)['props'];

        foreach (['stat_clients_new', 'chart_signups', 'chart_customer_summary'] as $key) {
            $this->assertArrayNotHasKey($key, $props, "{$key} was registered for somebody who may not see it.");
        }
    }

    /**
     * AND ASKING FOR IT DIRECTLY DOES NOT WORK.
     *
     * A partial reload names the props it wants. If the filter ran only over the
     * list used for rendering, a client that asked for `stat_clients_new` by
     * name would be handed it - the check has to be on what is REGISTERED, not
     * on what is drawn.
     */
    public function test_asking_for_a_hidden_widget_by_name_returns_nothing(): void
    {
        $user = $this->operator(['view_any_clients', 'view_network_widgets']);

        $response = $this->actingAs($user)->get('/dashboard', [
            'X-Inertia' => 'true',
            // The real asset version: a mismatch is answered with a 409 and a
            // redirect, which would make this test pass without ever reaching
            // the prop it is about.
            'X-Inertia-Version' => (string) (new HandleInertiaRequests)->version(request()),
            'X-Inertia-Partial-Component' => 'PanelDashboard',
            'X-Inertia-Partial-Data' => 'stat_clients_new',
        ]);

        $response->assertOk();

        $this->assertArrayNotHasKey('stat_clients_new', $response->json('props'));
    }

    /**
     * THE SESSION STRIP IS GATED TOO.
     *
     * It is its own deferred prop rather than a widget, and it was reaching a
     * commercial-only role while every individual session widget was being
     * filtered out. Splitting a screen by permission and leaving one prop
     * ungated is the same as not splitting it - the numbers are still on the
     * wire, and the query still runs to produce them.
     */
    public function test_the_session_strip_follows_the_network_ability(): void
    {
        /*
         * ASKED FOR BY NAME, because the strip is a DEFERRED prop - it is absent
         * from the first render for everybody, so a plain check of the initial
         * payload would pass whether or not the gate exists. The partial reload
         * is the request that would actually leak it.
         */
        $with = $this->partial(
            $this->operator(['view_any_clients', 'view_network_widgets']),
            'strip',
        );

        $without = $this->partial(
            $this->operator(['view_any_clients', 'view_commercial_widgets']),
            'strip',
        );

        $this->assertArrayHasKey('strip', $with);
        $this->assertArrayNotHasKey('strip', $without, 'Session counts reached a commercial-only role.');
    }

    /* ------------------------------------------------------- the ability set */

    /**
     * THE NAMES ARE REAL, which is what makes them grantable at all.
     *
     * An ability the registry does not know about is refused by
     * `Abilities::all()`, pruned by `panel:permissions sync`, and not covered by
     * a superuser role - so a widget guarded by an unregistered name would be
     * invisible to everybody, on a page that still renders, with no error.
     */
    public function test_the_widget_abilities_are_registered(): void
    {
        foreach (['view_commercial_widgets', 'view_network_widgets'] as $ability) {
            $this->assertContains($ability, Abilities::all(), "{$ability} is not a real ability.");
        }
    }

    /** And they appear on the permission matrix with words, not with their keys. */
    public function test_the_widget_abilities_are_labelled_on_the_matrix(): void
    {
        $labels = Abilities::panelLabelled();

        $this->assertArrayHasKey('view_commercial_widgets', $labels);
        $this->assertNotSame('view_commercial_widgets', $labels['view_commercial_widgets']);
    }
}
