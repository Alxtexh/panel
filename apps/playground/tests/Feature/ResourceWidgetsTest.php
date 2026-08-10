<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Alxtexh\Panel\Widgets\StatWidget;
use Alxtexh\Panel\Widgets\WidgetSet;
use Tests\TestCase;

/**
 * WIDGETS SOMEWHERE THAT IS NOT THE DASHBOARD.
 *
 * `Panel::widgets()` made widgets registerable and `DashboardPage` remained the
 * only screen that resolved them - so "put the open-ticket count above the
 * ticket list" meant a custom page reimplementing the list. A widget system
 * with exactly one host is a dashboard feature wearing a framework's name.
 *
 * THIS TESTS `WidgetSet` DIRECTLY, and that is a deliberate downgrade from the
 * first version. That one added a `public static array $testWidgets` seam to
 * `ClientResource` so a static declaration could be injected over HTTP - test
 * scaffolding living permanently in the reference application, on a class that
 * ships as an example for people to copy. The seam was worse than the coverage
 * was good.
 *
 * WHAT IS LOST AND WHAT IS NOT. The HTTP round trip is no longer asserted here;
 * `ResourceController` spreading these props is one line, and the props' SHAPE
 * - which is where every interesting rule lives - is asserted below. What is
 * kept is the part that would actually hurt:
 *
 *   - a widget the viewer may not see is NEVER RETURNED, so its query never
 *     runs and its number is not in the payload for whoever opens the network
 *     tab
 *   - the whole row is ONE deferred group, not one per card - the defect that
 *     made the dashboard cost twenty-seven round trips to open, and far more
 *     expensive repeated on every list screen
 *   - an empty set contributes NO KEYS AT ALL, so a resource declaring no
 *     widgets is byte-identical to before
 */
final class ResourceWidgetsTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /**
     * THE COMMON CASE, AND THE ONE THAT MUST NOT CHANGE. A screen draws its
     * widget row only when the prop is present; empty arrays would render a
     * container with spacing around nothing on every list in the panel.
     */
    public function test_no_widgets_contributes_no_props_at_all(): void
    {
        $this->assertSame([], WidgetSet::props([], $this->operator));
    }

    public function test_declarations_travel_eagerly_so_the_row_can_render_before_any_count(): void
    {
        $props = WidgetSet::props([
            StatWidget::make('open_tickets', 'Open tickets')->value(static fn (): int => 3),
        ], $this->operator);

        $this->assertSame(
            ['open_tickets'],
            array_column($props['headerWidgets'], 'key'),
            'The label and span must arrive with the page, or the row cannot draw until the number does.',
        );

        $this->assertArrayHasKey('header_stat_open_tickets', $props);
    }

    /**
     * ONE REQUEST FOR THE WHOLE ROW. Inertia fetches deferred props one request
     * per GROUP, so a group each is a round trip each.
     */
    public function test_every_widget_in_a_set_shares_one_deferred_group(): void
    {
        $props = WidgetSet::props([
            StatWidget::make('a', 'A')->value(static fn (): int => 1),
            StatWidget::make('b', 'B')->value(static fn (): int => 2),
            StatWidget::make('c', 'C')->value(static fn (): int => 3),
        ], $this->operator);

        $groups = [];

        foreach (['a', 'b', 'c'] as $key) {
            $groups[] = $props['header_stat_'.$key]->group();
        }

        $this->assertSame(
            ['header-widgets'],
            array_values(array_unique($groups)),
            'Three widgets in three groups is three HTTP requests for three numbers.',
        );
    }

    /**
     * THE ASSERTION THAT MATTERS MOST. Not hidden, not blanked - ABSENT, so the
     * query never runs and the value is not in the payload.
     */
    public function test_a_widget_the_viewer_may_not_see_is_never_returned(): void
    {
        $props = WidgetSet::props([
            StatWidget::make('revenue', 'Revenue')
                ->value(static fn (): int => 999_999)
                ->ability('an_ability_nobody_holds'),
        ], $this->operator);

        $this->assertSame([], $props);
    }

    /**
     * THE PREFIX NAMESPACES A SET, so one screen can host a header row and a
     * footer row without their deferred props colliding into one another.
     */
    public function test_a_second_set_on_the_same_screen_does_not_collide(): void
    {
        $props = WidgetSet::props(
            [StatWidget::make('total', 'Total')->value(static fn (): int => 1)],
            $this->operator,
            'footer',
        );

        $this->assertArrayHasKey('footerWidgets', $props);
        $this->assertArrayHasKey('footer_stat_total', $props);
        $this->assertArrayNotHasKey('headerWidgets', $props);
    }
}
