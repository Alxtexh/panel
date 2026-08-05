<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\Support\PanelScreens;
use Tests\TestCase;

/**
 * EVERY ROUTED SCREEN ANSWERS. Not "renders" - answers.
 *
 * THE BUG THAT MADE THIS NECESSARY was a link to nothing. This application
 * routed `/whats-new` as a redirect to `/changelog`, and no route in the
 * application or the package has ever served `/changelog`. So the entry went
 * to a 404. It also occupied the URI the packaged `ChangelogPage` declares as
 * its slug, which meant the real screen could never take it: a dead link and
 * an unreachable feature at the same address.
 *
 * It survived 1,700 tests because NOTHING LINKED TO IT. No page rendered the
 * route, so nothing ever opened it, so nothing ever failed. The only way to
 * find a URL that nobody visits is to visit all of them.
 *
 * WHY THIS IS SEPARATE FROM THE BROWSER SWEEP. `EveryScreenRendersTest` opens
 * the same list in Chrome and asks whether anything was drawn. That is a
 * different question and neither test covers the other:
 *
 *   - A BLANK SCREEN IS A 200. The server is perfect - right component, right
 *     props - and the browser draws an empty comment node. This test passes it.
 *   - A 404 PAGE IS FULL OF TEXT. The browser sweep reads the error page,
 *     finds plenty of content, and passes it. This test catches it.
 *
 * This one is also several hundred times faster, so it runs in the default
 * suite while the browser sweep runs in Dusk. A guard that only exists in the
 * slow suite is a guard that gets skipped when somebody is in a hurry.
 */
final class EveryScreenRespondsTest extends TestCase
{
    use RefreshDatabase;

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Responds', 'slug' => 'responds']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        // Roles are team-scoped by `tenant_id`, read from a registrar that a
        // REQUEST populates and a test does not.
        $registrar = app(PermissionRegistrar::class);
        $previous = $registrar->getPermissionsTeamId();
        $registrar->setPermissionsTeamId($tenant->id);

        try {
            $user->assignRole(Role::findOrCreate('Administrator', 'web'));
        } finally {
            $registrar->setPermissionsTeamId($previous);
        }

        return $user;
    }

    /**
     * NO SCREEN 404s, 500s, OR REDIRECTS TO SOMETHING THAT DOES.
     *
     * Redirects are FOLLOWED rather than accepted, which is the assertion that
     * would have caught the dead link. `/whats-new` answered a perfectly valid
     * 302; the destination was the 404. A test asserting "not an error status"
     * without following would have passed it every time.
     */
    public function test_every_screen_answers_without_an_error(): void
    {
        $operator = $this->operator();
        $screens = PanelScreens::all();

        $this->assertGreaterThan(
            30,
            count($screens),
            'The router returned almost no screens, so this test was about to pass without checking anything.',
        );

        $failures = [];

        foreach ($screens as $uri) {
            $response = $this->actingAs($operator)->get($uri);
            $status = $response->getStatusCode();
            $trail = $uri;

            // Follow the chain rather than trusting the first hop. A capped
            // depth because a redirect loop is itself a defect, and an
            // uncapped follow would hang the suite rather than report it.
            $hops = 0;

            while ($status >= 300 && $status < 400 && $hops < 5) {
                $location = $response->headers->get('Location') ?? '';
                $trail .= " -> {$location}";

                $response = $this->actingAs($operator)->get($location);
                $status = $response->getStatusCode();
                $hops++;
            }

            if ($status >= 300 && $status < 400) {
                $failures[] = "{$trail} - still redirecting after 5 hops, so this is a loop.";

                continue;
            }

            if ($status >= 400) {
                $failures[] = "{$trail} - answered {$status}.";
            }
        }

        $this->assertSame(
            [],
            $failures,
            "These URLs are routed and do not answer.\n\n".implode("\n", $failures)."\n",
        );
    }
}
