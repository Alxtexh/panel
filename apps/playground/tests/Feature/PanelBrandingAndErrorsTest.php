<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * THE LAST TWO PLACES A PORTAL COULD NOT SPEAK FOR ITSELF.
 *
 * BOTH BORROWED FROM FILAMENT v5 - `HasFavicon` and `HasErrorNotifications` -
 * after comparing its 34 panel concerns against ours. They were the only two
 * gaps that were both small and things this project had already complained
 * about.
 *
 * THE FAVICON WAS THE LAST BRANDING LEAK. Sign-in, colours and brand name were
 * all per-panel; every browser tab still looked identical. That matters most
 * for the portal you are least likely to have open on purpose - a superadmin
 * tab indistinguishable from a tenant tab is the one you type into by mistake.
 *
 * THE 419 COPY IS NOT COSMETIC. `panel.auth.session.max_hours` ends a session
 * at an absolute ceiling however active it has been - deliberately, so a tab
 * left open on a wall cannot stay signed in forever. The screen somebody meets
 * when that fires said "Page expired", which describes a CSRF token and tells
 * an operator nothing about what to do.
 */
final class PanelBrandingAndErrorsTest extends TestCase
{
    use RefreshDatabase;

    /**
     * IN THE MARKUP, NOT IN A PROP, and asserted from the HTML for that reason:
     * a favicon set from JavaScript after mount means the WRONG icon is what
     * somebody sees while the page loads - which is exactly when they are
     * looking at the tab strip.
     */
    public function test_a_portal_renders_its_own_favicon_in_the_head(): void
    {
        $html = $this->get('/superadmin/login')->assertOk()->getContent();

        $this->assertStringContainsString('data:image/svg+xml,', (string) $html);
    }

    /** A portal that declares none keeps whatever the layout ships. */
    public function test_a_portal_without_one_keeps_the_application_favicon(): void
    {
        $html = (string) $this->get('/login')->assertOk()->getContent();

        $this->assertStringContainsString('/favicon.ico', $html);
        $this->assertStringNotContainsString('data:image/svg+xml,', $html);
    }

    public function test_a_portal_can_reword_an_error_for_its_own_operators(): void
    {
        $panel = app(PanelManager::class)->panel('superadmin');

        $this->assertNotNull($panel);

        $notification = $panel->getErrorNotification(419);

        $this->assertSame('Your session ended', $notification['title'] ?? null);
        $this->assertStringContainsString(
            'Sign in again',
            (string) ($notification['body'] ?? ''),
            'The 419 copy exists to say what to DO, which "Page expired" never did.',
        );
    }

    /**
     * A STATUS NOBODY REWORDED FALLS BACK, which is what keeps the packaged
     * screens the default rather than a thing every portal must re-specify.
     */
    public function test_an_unregistered_status_falls_back_to_the_packaged_copy(): void
    {
        $panel = app(PanelManager::class)->panel('superadmin');

        $this->assertNull($panel?->getErrorNotification(404));
    }

    /**
     * 403 IS DELIBERATELY LEFT VAGUE AND SHOULD STAY THAT WAY. An error naming
     * the missing permission tells whoever probed for it exactly what to ask
     * for next; this mechanism exists so an installation can be KINDER, not
     * more specific.
     */
    public function test_no_portal_reworded_403_into_something_specific(): void
    {
        foreach (app(PanelManager::class)->panels() as $panel) {
            $this->assertNull(
                $panel->getErrorNotification(403),
                "Panel [{$panel->id}] reworded 403. If that is deliberate, make sure it does not name "
                .'the permission - a helpful 403 is a reconnaissance tool.',
            );
        }
    }
}
