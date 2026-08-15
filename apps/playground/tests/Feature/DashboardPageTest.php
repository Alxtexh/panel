<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use DateTimeImmutable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Inertia\DeferProp;
use Alxtexh\Panel\Alerts\Announcement;
use Alxtexh\Panel\Pages\DashboardPage;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Widgets\ChartWidget;
use Alxtexh\Panel\Widgets\Period;
use Alxtexh\Panel\Widgets\StatWidget;
use Tests\TestCase;

/**
 * The widget host, which is the thing `StatWidget` never had.
 *
 * NINE WIDGET CLASSES SHIPPED WITH NOWHERE TO RENDER. They composed correct
 * value objects and nothing mounted them: no dashboard route, no mechanism for a
 * screen that is not a resource, and `Workspace` - the intended host -
 * referenced exactly once in the package, inside a comment.
 *
 * THE FIXTURE IS DECLARED HERE, NOT IN THE APPLICATION. The first version of
 * this test generated a real `OverviewPage` into `app/Panel/Pages` to prove the
 * host - which routed a screen nobody asked for and added an "Insights" heading
 * to the reference app's sidebar. Demonstrating a framework capability is not a
 * reason to put a page in somebody's panel. The host is exercised through its
 * own contract instead, and routing for pages in general is covered by
 * `PanelPageMechanismTest`.
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

    /**
     * @return array<string, mixed>
     */
    private function dataFor(User $user): array
    {
        $this->actingAs($user);

        /*
         * THE RESOLVER IS SET EXPLICITLY. `actingAs` binds the guard, not the
         * current request instance - so calling `data()` outside a request cycle
         * saw `$request->user()` as null and filtered out every gated widget.
         * The test would have passed for the right result and the wrong reason.
         */
        $request = request();
        $request->setUserResolver(fn (): User => $user);

        return FixtureDashboard::data($request);
    }

    /**
     * THE DECLARATIONS ARRIVE WHOLE, so the layout is on screen before anything
     * has been counted. Labels and spans are what let a card render empty.
     */
    public function test_the_declarations_travel_with_the_page(): void
    {
        $data = $this->dataFor($this->operator(['view_network_widgets']));

        $this->assertSame(['subscribers', 'active'], array_column($data['widgets'], 'key'));
        $this->assertSame(['signups'], array_column($data['charts'], 'key'));
        $this->assertSame('Subscribers', $data['widgets'][0]['label']);
    }

    /**
     * THE OTHER HALF OF ANNOUNCEMENTS, and until this release the package had
     * only one of them.
     *
     * The model, the composer screen, the Telegram delivery and the per-person
     * dismissal all shipped. The BANNER did not - it lived in the reference
     * app's own dashboard - so an installation could write a notice addressed
     * to everybody and it would appear to nobody. Every test passed, because
     * what was tested was the writing.
     *
     * SUPPLIED BY `DashboardPage`, so any dashboard gets it without asking.
     * NOT DEFERRED, unlike every widget: a banner arriving after the numbers
     * pushes the page down under somebody's cursor.
     */
    public function test_a_dashboard_carries_the_notices_for_whoever_is_signed_in(): void
    {
        $tenant = $this->tenant();

        Announcement::query()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'title' => 'Maintenance on Sunday',
            'body' => 'Between 02:00 and 04:00.',
            'severity' => 'warning',
            'display' => 'banner',
        ]);

        $data = $this->dataFor($this->operator());

        $this->assertNotInstanceOf(
            DeferProp::class,
            $data['announcements'] ?? null,
            'The banner is deferred, so it arrives after the layout and shifts it.',
        );

        $this->assertSame(
            ['Maintenance on Sunday'],
            array_column($data['announcements'], 'title'),
        );
    }

    /**
     * AND THE PREFIX TRAVELS WITH THEM, because the dismiss route is mounted
     * inside the panel's group.
     *
     * The component posted to a bare `/announcements/{id}/dismiss` while it
     * lived in the reference app, whose default panel sits at the root. That is
     * correct there and a 404 in any portal with a path - the × would appear to
     * work, because the row is hidden locally before the request, and the
     * banner would return on the next page load with nothing to explain why.
     */
    public function test_the_dismiss_prefix_travels_with_them(): void
    {
        $data = $this->dataFor($this->operator());

        $this->assertArrayHasKey('prefix', $data);
        $this->assertSame(
            rtrim((string) app(PanelManager::class)->panel(FixtureDashboard::panel())?->getPath(), '/'),
            $data['prefix'],
        );
    }

    /**
     * EACH VALUE IS ITS OWN DEFERRED PROP.
     *
     * Resolving them together would make a dashboard as slow as its worst query
     * - on real data the difference between a screen people open and one they
     * avoid - and would let one failing aggregate blank the rest.
     */
    public function test_every_widget_is_deferred_separately(): void
    {
        $data = $this->dataFor($this->operator(['view_network_widgets']));

        foreach (['stat_subscribers', 'stat_active', 'chart_signups'] as $key) {
            $this->assertArrayHasKey($key, $data);
            $this->assertInstanceOf(DeferProp::class, $data[$key]);
        }
    }

    public function test_a_hidden_chart_is_listed_but_not_deferred(): void
    {
        $user = $this->operator(['view_network_widgets']);
        $this->actingAs($user);

        $request = request();
        $request->setUserResolver(fn (): User => $user);
        $request->cookies->set('panel_dashboard_hidden', json_encode(['signups']));

        $data = FixtureDashboard::data($request);

        $this->assertSame(['signups'], array_column($data['charts'], 'key'));
        $this->assertArrayNotHasKey('chart_signups', $data);
    }

    /**
     * A WIDGET SOMEBODY MAY NOT SEE IS NEVER QUERIED AND NEVER SENT.
     *
     * The support rota needs connection counts and must not see commercial
     * figures. Filtering in the browser would ship the number to somebody
     * forbidden from it and rely on CSS to keep the secret.
     */
    public function test_a_widget_without_its_ability_is_absent_entirely(): void
    {
        $data = $this->dataFor($this->operator());

        $this->assertSame(['subscribers'], array_column($data['widgets'], 'key'));
        $this->assertArrayNotHasKey('stat_active', $data);
    }

    /** And a deferred value is a real query when it is finally asked for. */
    public function test_a_deferred_value_resolves_against_real_rows(): void
    {
        /*
         * INSERTED THROUGH THE QUERY BUILDER, not the model. `Client` fills its
         * tenant column from the panel's resolved context rather than from
         * anything a caller passes - which is the point of it, and would
         * otherwise mean standing up a whole tenant context to seed three rows.
         * The scoping has its own suite.
         */
        foreach (['A', 'B', 'C'] as $i => $suffix) {
            DB::table('clients')->insert([
                'tenant_id' => $this->tenant()->getKey(),
                'name' => "Subscriber {$suffix}",
                'phone' => '07000000'.$i,
                'access_code' => 'AC-'.$suffix,
                'status' => 'active',
                'plan_type' => 'pppoe',
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        $data = $this->dataFor($this->operator());

        // `DeferProp` is invokable; its callback is protected, by design.
        $resolved = app()->call($data['stat_subscribers']);

        $this->assertSame(3, $resolved['value']);
        $this->assertFalse($resolved['error']);
    }
}

/**
 * A dashboard that exists only for this file.
 *
 * NOT IN `app/Panel/Pages`, so nothing discovers it and nothing routes it - a
 * fixture must not become an entry in the reference app's sidebar.
 */
final class FixtureDashboard extends DashboardPage
{
    public static function stats(): array
    {
        return [
            StatWidget::make('subscribers', 'Subscribers')
                ->value(fn (): int => Client::query()->count()),

            StatWidget::make('active', 'Active')
                ->ability('view_network_widgets')
                ->value(fn (): int => Client::query()->where('status', 'active')->count()),
        ];
    }

    public static function charts(): array
    {
        return [
            ChartWidget::make('signups', 'Sign-ups')
                ->type('line')
                ->withPeriods()
                ->data(fn (Period $period, ?DateTimeImmutable $now): array => ['points' => []]),
        ];
    }
}
