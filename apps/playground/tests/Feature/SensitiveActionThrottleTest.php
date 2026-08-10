<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Testing\TestResponse;
use Tests\TestCase;

/**
 * Confirming your current password has a budget, as signing in does.
 *
 * THE HOLE WAS THE SAME QUESTION THROUGH A DIFFERENT DOOR. Sign-in has been
 * throttled since the beginning; changing a password asks for the CURRENT one
 * first - correctly - and nothing counted the attempts. Anybody who reaches an
 * authenticated session (a borrowed laptop, a session left open, a stolen
 * cookie) could sit there guessing the password itself as fast as the server
 * answered, with nothing recording it.
 */
final class SensitiveActionThrottleTest extends TestCase
{
    use RefreshDatabase;

    private User $operator;

    protected function setUp(): void
    {
        parent::setUp();

        RateLimiter::clear('panel:password.confirm|1|127.0.0.1');

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->operator = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
            'password' => Hash::make('the-real-password'),
        ]);
    }

    private function attempt(string $current): TestResponse
    {
        /*
         * A GENERATED PORTAL'S ROUTE, not the root panel's. This application
         * mounts its own Fortify-backed password screen at `/settings/password`
         * and the root panel yields to it - so the packaged controller, which
         * is what every generated portal uses and what this throttle lives in,
         * is only reachable under a portal prefix.
         */
        return $this->actingAs($this->operator)->put('/platform/settings/password', [
            'current_password' => $current,
            'password' => 'a-brand-new-password-1',
            'password_confirmation' => 'a-brand-new-password-1',
        ]);
    }

    public function test_repeated_wrong_guesses_are_eventually_refused(): void
    {
        config()->set('panel.auth.sensitive.max_attempts', 3);

        for ($i = 0; $i < 3; $i++) {
            $this->attempt('wrong-'.$i)->assertSessionHasErrors('current_password');
        }

        // The fourth is refused by the budget rather than answered by the
        // password check - which is the difference between a lock and an
        // oracle.
        $this->attempt('wrong-again')->assertSessionHasErrors('current_password');

        $errors = session('errors')->get('current_password');

        $this->assertStringContainsString(
            'seconds',
            strtolower(implode(' ', $errors)),
            'Past the budget the answer must be a wait, not another verdict on the guess.',
        );
    }

    /**
     * A CORRECT ANSWER CLEARS THE BUDGET. Somebody who proves the thing the
     * budget protects must not then be locked out of their own settings.
     */
    public function test_a_correct_password_clears_the_budget(): void
    {
        config()->set('panel.auth.sensitive.max_attempts', 3);

        $this->attempt('wrong-once')->assertSessionHasErrors('current_password');

        $this->attempt('the-real-password')->assertSessionHasNoErrors();

        // Fresh budget: a later mistake is answered on its merits again.
        $this->attempt('wrong-after-success')->assertSessionHasErrors('current_password');

        $errors = session('errors')->get('current_password');

        $this->assertStringNotContainsString(
            'seconds',
            strtolower(implode(' ', $errors)),
            'The budget should have reset, so this is a wrong password rather than a wait.',
        );
    }

    /** The password really does change when the current one is right. */
    public function test_the_password_changes_on_a_correct_confirmation(): void
    {
        $this->attempt('the-real-password')->assertSessionHasNoErrors();

        $this->assertTrue(
            Hash::check('a-brand-new-password-1', $this->operator->fresh()->getAuthPassword()),
        );
    }
}
