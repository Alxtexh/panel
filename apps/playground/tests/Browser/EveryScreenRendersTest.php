<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\DuskTestCase;
use Tests\Support\PanelScreens;

/**
 * EVERY SCREEN IN THE APPLICATION IS OPENED IN A REAL BROWSER, ONCE.
 *
 * WHY THIS EXISTS, AND IT IS THE SAME REASON FOUR TIMES. The browser suite
 * used to visit fifteen URLs. The application has more than fifty screens. So
 * roughly two thirds of the panel had never been drawn by anything except a
 * person, and every single defect found in this codebase's last four sessions
 * lived in that gap:
 *
 *   - `MoneyColumn` showed `2,500.00` in the list and `250000` on the record
 *     page. Two orders of magnitude, on the screen an operator opens to see
 *     what a customer owes. It passed 1,700 tests.
 *   - `QueryBuilderFilter` shipped with twelve passing server tests and a Vue
 *     component that NOTHING MOUNTED. The label rendered; nothing was under it.
 *   - `ScatterChart` shipped tested, exported, and impossible to declare.
 *   - `HiddenField` was a fatal - an incompatible `label()` override - and no
 *     screen declared one, so nothing ever loaded the class.
 *
 * Every one of those is the same shape: SOMETHING WITH A UNIT TEST AND NO
 * CONSUMER. The unit tests were all green. The only instrument that would have
 * caught any of them is a browser opening the page.
 *
 * THE LIST COMES FROM `PanelScreens`, WHICH READS THE ROUTER. A list of URLs
 * typed into a test covers what somebody remembered on the day they typed it,
 * and a screen added next month is not in it - which is precisely how the
 * fifteen stayed fifteen while the application grew past fifty.
 *
 * IT IS SHARED WITH `EveryScreenRespondsTest` rather than copied, because two
 * hand-maintained copies of the same list diverge, and the screen that ends up
 * in only one of them is covered by only one of two different questions. That
 * class explains the split; the short version is that a blank page answers 200
 * and a 404 page is full of text, so neither test can see what the other does.
 *
 * ONE BROWSER SESSION, NOT ONE PER SCREEN. Fifty logins would put this suite
 * past ten minutes and it would be excluded from the default run within a
 * month, which is a slower way of deleting it. Failures are COLLECTED and
 * asserted at the end, so one run names every broken screen instead of
 * stopping at the first.
 */
final class EveryScreenRendersTest extends DuskTestCase
{
    use DatabaseTruncation;

    private int|string|null $operatorId = null;

    /**
     * An operator holding a role, with one record of each shape to look at.
     *
     * THE ROLE IS NOT OPTIONAL. The panel denies any ability whose model has no
     * grant, so a roleless operator sees an empty state on every list - and
     * this test would then be asserting that fifty permission failures look
     * like fifty working screens.
     */
    private function seedOperator(): void
    {
        $tenant = Tenant::create(['name' => 'Lakeside Fibre', 'slug' => 'lakeside-sweep']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        // The team is set before the role is assigned - roles are team-scoped
        // by `tenant_id`, read from a registrar that a REQUEST populates and a
        // test does not.
        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        $this->operatorId = $user->getKey();

        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => 'Home 20',
            'speed_mbps' => 20,
            'price_cents' => 250_000,
            'position' => 1,
            'is_active' => true,
        ]);

        $unique = uniqid('sweep', true);

        Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->id,
            'plan_id' => $plan->id,
            'name' => 'Grace Wanjiru',
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'plan_type' => 'pppoe',
            'status' => 'active',
            'expiry_date' => '2026-12-31',
        ]);
    }

    /**
     * NO SCREEN IN THE APPLICATION IS BLANK, AND NONE THROWS IN THE BROWSER.
     *
     * The assertions are deliberately shallow, and that is the point rather
     * than a shortcut. This does not test what a screen contains - feature
     * tests own that, and there are 1,700 of them. It asks the one question
     * nothing else in the suite asks: DID IT DRAW.
     *
     * A Vue SFC with no `<template>` compiles to a component with no render
     * function. Vue mounts it and emits an empty comment node. It type-checks,
     * it builds, the chunk contains the entire real component, and in a
     * production build there is no warning of any kind. The server is perfect
     * throughout - it sent the right component and the right props - so every
     * server-side test passes while the operator looks at nothing.
     */
    public function test_every_screen_draws_something(): void
    {
        $this->seedOperator();

        $screens = PanelScreens::all();

        $this->assertGreaterThan(
            30,
            count($screens),
            'The router returned almost no screens, so this test was about to pass without opening anything.',
        );

        $failures = [];

        $this->browse(function (Browser $browser) use ($screens, &$failures): void {
            $browser->loginAs($this->operatorId);

            foreach ($screens as $uri) {
                try {
                    $browser->visit($uri);

                    /*
                     * `main` WHEN THERE IS ONE, THE WHOLE BODY WHEN THERE IS NOT.
                     *
                     * This test first waited for `main` on every screen and
                     * reported four false failures, because the auth-shaped
                     * screens - lock, verify, the login preview - are centred
                     * cards with no application shell around them. There is no
                     * `main` to find and nothing wrong with them.
                     *
                     * The distinction matters in the other direction too, and
                     * that is the reason for preferring `main` rather than
                     * always reading the body. Inside the shell, the sidebar and
                     * header are drawn by the LAYOUT - so a screen component
                     * that renders nothing at all still leaves several hundred
                     * characters of chrome in `document.body`. Reading the body
                     * there would pass every blank page in the application,
                     * which is the one bug this test exists to catch.
                     */
                    $readable = 'const el = document.querySelector("main") || document.body;'
                        .' return (el.innerText || "").trim();';

                    $browser->waitUsing(15, 250, fn () => strlen($browser->driver->executeScript($readable)) >= 20);

                    $body = $browser->driver->executeScript($readable);

                    if (strlen(trim($body)) < 20) {
                        $failures[] = "{$uri} - rendered a shell with no content (".strlen(trim($body)).' chars)';
                    }

                    /*
                     * The error boundary is a FEATURE - a widget that throws is
                     * contained rather than taking the page down - which also
                     * means a thrown widget looks like a working screen to any
                     * test that only checks the response. So its text is looked
                     * for explicitly.
                     */
                    foreach (['Something went wrong', 'This section could not load'] as $boundary) {
                        if (str_contains($body, $boundary)) {
                            $failures[] = "{$uri} - an error boundary caught something: {$boundary}";
                        }
                    }
                } catch (\Throwable $e) {
                    /*
                     * THE LANDING URL IS PART OF THE FAILURE, because half of
                     * these turn out to be redirects. `/whats-new` reported
                     * "waited 15 seconds" and the useful fact was that the
                     * browser was sitting on a 404 for a destination that was
                     * never routed. Without the URL, that reads as a slow page.
                     */
                    $landed = rescue(fn () => $browser->driver->getCurrentURL(), '(url unavailable)', false);

                    $failures[] = "{$uri} - landed on {$landed} - "
                        .str_replace("\n", ' ', substr($e->getMessage(), 0, 140));
                }
            }
        });

        $this->assertSame(
            [],
            $failures,
            "These screens are routed and do not draw.\n\n".implode("\n", $failures)."\n",
        );
    }
}
