<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * HOW MANY HTTP REQUESTS THE DASHBOARD COSTS TO OPEN.
 *
 * INERTIA FETCHES DEFERRED PROPS ONE REQUEST PER GROUP, so the group map in
 * the page object IS the round-trip count - which makes it assertable, and
 * this file exists because it was never asserted. Every stat and every chart
 * passed its OWN key as its group, so a dashboard with seven stats and a dozen
 * charts opened with about twenty requests, each paying for a full middleware
 * stack, session read, tenant resolution and permission load to return one
 * number.
 *
 * THE ASSERTION IS ON GROUPS, NOT ON A TIMING. A test that measured
 * milliseconds would be flaky and would not say what went wrong; the group
 * count says exactly what regressed and why.
 *
 * WHAT THIS DELIBERATELY DOES NOT ASSERT: that any particular widget exists.
 * The dashboard's widgets are the reference application's, and pinning them
 * here would make this file fail every time somebody adds a tile - which is
 * how a round-trip guard gets deleted rather than fixed.
 */
final class DashboardDeferGroupsTest extends TestCase
{
    use RefreshDatabase;

    private function admin(): User
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        return User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @return array<string, list<string>> */
    private function deferred(): array
    {
        $page = $this->actingAs($this->admin(), 'web')
            ->get('/dashboard')
            ->assertOk()
            ->viewData('page');

        return $page['deferredProps'] ?? [];
    }

    /**
     * THE ONE THAT WOULD HAVE CAUGHT IT. Group names are shared, so the count
     * stays flat as widgets are added rather than growing one-for-one.
     */
    public function test_the_dashboard_opens_in_a_handful_of_requests_not_one_per_widget(): void
    {
        $groups = $this->deferred();

        $this->assertNotSame([], $groups, 'The dashboard defers its widgets; something is wrong if it defers nothing.');

        $this->assertLessThanOrEqual(
            6,
            count($groups),
            'Each deferred GROUP is one HTTP request on first paint. Passing a widget its own '
            .'key as its group is what made this ~20; groups must be shared across widgets. Got: '
            .implode(', ', array_keys($groups)),
        );
    }

    /**
     * STATS AND CHARTS ARE BATCHED SEPARATELY, on purpose: charts are slower
     * and their costs differ, so folding them together would make the numbers
     * wait for the heaviest chart.
     */
    public function test_stats_and_charts_are_batched_but_not_batched_together(): void
    {
        $groups = $this->deferred();

        foreach (['stats' => 'stat_', 'charts' => 'chart_'] as $group => $prefix) {
            if (! isset($groups[$group])) {
                continue;
            }

            foreach ($groups[$group] as $prop) {
                $this->assertStringStartsWith(
                    $prefix,
                    $prop,
                    "The [{$group}] group must hold only {$prefix}* props, or a slow chart gates the numbers.",
                );
            }
        }

        /*
         * NO PER-WIDGET PROP SITS ALONE IN A GROUP NAMED AFTER ITSELF, which
         * is precisely the shape that produced one request per widget.
         *
         * `strip` AND `checklist` ARE EXEMPT AND ARE NOT THE SAME THING. Each
         * is a SINGLE prop that already aggregates its whole surface - the
         * strip returns four numbers from four cheap reads in one payload - so
         * one group is one request for one prop, which is the floor rather
         * than the bug. The bug was `stat_*` and `chart_*`, where the prop
         * count grows with the dashboard.
         */
        foreach ($groups as $group => $props) {
            if (! str_starts_with($group, 'stat_') && ! str_starts_with($group, 'chart_')) {
                continue;
            }

            $this->fail(
                "The prop [{$group}] has a group to itself - that is one HTTP request per widget, "
                .'which is what this test exists to prevent.',
            );
        }

        $this->assertTrue(true);
    }

    /**
     * THE SAME RULE ON A LIST SCREEN, which is the surface it costs most on:
     * there is one dashboard and one list per resource, opened all day.
     *
     * `total`, `tabCounts` AND `summary` ARE ONE REQUEST. All three are
     * aggregates of the same cost class over the SAME filtered set - a COUNT,
     * one query covering every tab, and one query of aggregate expressions -
     * so a group each would be three round trips for three numbers that the
     * database answers from the same rows. `summary` used to name its own
     * group and bought exactly that.
     *
     * Contrast the dashboard above, where stats and charts stay apart on
     * purpose: there the costs genuinely differ.
     */
    public function test_a_list_screen_defers_into_a_single_request(): void
    {
        $page = $this->actingAs($this->admin(), 'web')
            ->get('/clients')
            ->assertOk()
            ->viewData('page');

        $groups = $page['deferredProps'] ?? [];

        /*
         * THE AGGREGATES ARE ONE GROUP. `total`, `tabCounts` and `summary` are
         * a COUNT, one query covering every tab, and one query of aggregate
         * expressions - all over the same filtered set, all the same cost
         * class, so a group each would be three round trips for three numbers
         * the database answers from the same rows.
         */
        $this->assertContains('total', $groups['default'] ?? []);

        /*
         * WIDGETS ARE THEIR OWN GROUP, DELIBERATELY, and this assertion used to
         * forbid that by counting groups rather than naming them.
         *
         * A resource's header widgets are a DIFFERENT cost class from the list
         * aggregates - arbitrary declared queries rather than counts over the
         * rows already being fetched - so folding them in would make the row
         * count wait for the slowest widget. It is the same call the dashboard
         * makes in keeping `stats` and `charts` apart, and the rule is cost
         * class rather than tidiness.
         *
         * WHAT IS STILL FORBIDDEN is a group PER WIDGET, which is the defect
         * this file exists for. `ResourceWidgetsTest` asserts that directly.
         */
        foreach (array_keys($groups) as $group) {
            $this->assertFalse(
                str_starts_with($group, 'header_stat_'),
                "[{$group}] has a group to itself - that is one HTTP request per widget.",
            );
        }
    }
}
