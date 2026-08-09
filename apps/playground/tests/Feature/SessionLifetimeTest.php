<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Http\Middleware\EnforceSessionLifetime;
use Tests\TestCase;

/**
 * A session ends after a fixed time, whether or not anybody was using it.
 *
 * THE HOLE THIS CLOSES IS SPECIFIC TO A PANEL. `SESSION_LIFETIME` is an IDLE
 * timer, and this panel polls: live updates every ten seconds, the bell, a
 * dashboard reloading its widgets. Machine traffic keeps the session
 * perpetually "in use", so a tab open on an unattended screen never expires -
 * and nothing warns, because from the framework's side the session genuinely
 * is busy. The ceiling below is the thing a poll cannot push back.
 */
final class SessionLifetimeTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);
    }

    /** Off by default: a package does not sign everybody out on a schedule. */
    public function test_no_ceiling_is_applied_when_unset(): void
    {
        config()->set('panel.auth.session.max_hours', 0);

        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => time() - 86_400 * 30])
            ->get('/dashboard')
            ->assertOk();
    }

    /** Within the window, nothing changes. */
    public function test_a_recent_session_is_untouched(): void
    {
        config()->set('panel.auth.session.max_hours', 8);

        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => time() - 3600])
            ->get('/dashboard')
            ->assertOk();

        $this->assertAuthenticated();
    }

    /**
     * PAST THE CEILING, THE SESSION IS OVER - and this is the assertion the
     * whole feature exists for.
     */
    public function test_a_session_past_the_ceiling_is_ended(): void
    {
        config()->set('panel.auth.session.max_hours', 8);

        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => time() - (9 * 3600)])
            ->get('/dashboard')
            ->assertRedirect();

        $this->assertGuest();
    }

    /**
     * A POLL IS NOT A PERSON, so it cannot push the ceiling back.
     *
     * This is the difference between an absolute ceiling and the idle timer it
     * exists to backstop: requests keep arriving, the clock keeps running.
     */
    public function test_repeated_requests_do_not_extend_the_ceiling(): void
    {
        config()->set('panel.auth.session.max_hours', 8);

        $startedAt = time() - (7 * 3600);

        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => $startedAt])
            ->get('/dashboard')
            ->assertOk();

        // Another request an hour later, exactly as a poll would arrive. The
        // start time is unchanged, so the ceiling still lands.
        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => $startedAt - 3600])
            ->get('/dashboard')
            ->assertRedirect();

        $this->assertGuest();
    }

    /**
     * A POLL GETS 401, NOT A LOGIN PAGE. The requests that kept the session
     * alive are JSON; answering one with a 302 to HTML has the client parse a
     * sign-in form as data.
     */
    public function test_an_expired_json_request_is_refused_rather_than_redirected(): void
    {
        config()->set('panel.auth.session.max_hours', 8);

        $this->actingAs($this->operator)
            ->withSession([EnforceSessionLifetime::STARTED_AT => time() - (9 * 3600)])
            ->getJson('/panel-search?q=amina')
            ->assertStatus(401);
    }

    /**
     * A SESSION WITH NO RECORDED START GETS ONE, rather than being exempt
     * forever - which is what sessions predating this middleware would be.
     */
    public function test_a_session_without_a_start_is_stamped(): void
    {
        config()->set('panel.auth.session.max_hours', 8);

        $this->actingAs($this->operator)->get('/dashboard')->assertOk();

        $this->assertNotNull(session(EnforceSessionLifetime::STARTED_AT));
    }
}
