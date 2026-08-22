<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Auth\OneTimeCredential;
use Alxtexh\Panel\Mail\AuthPlainMail;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\URL;

/**
 * Passwordless sign-in by emailed link on a generated portal.
 *
 * ALMOST EVERY TEST HERE IS A REFUSAL, because a magic link is a way to obtain
 * a session without a password and the interesting question is whether a used
 * link works twice, whether an expired link still signs you in, and whether the
 * request endpoint reveals who has an account.
 */
final class MagicLinkTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        Mail::fake();

        config([
            'panel.auth.magic_link' => true,
            'panel.auth.magic_link_table' => 'one_time_credentials',
        ]);

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'correct-horse',
            'email_verified_at' => now(),
        ]);
    }

    public function test_magic_link_is_absent_when_the_portal_has_not_opted_in(): void
    {
        config(['panel.auth.magic_link' => true]);

        $this->post('/magic-link', ['email' => $this->user->email])->assertNotFound();
    }

    public function test_magic_link_is_absent_when_config_is_off(): void
    {
        config(['panel.auth.magic_link' => false]);

        $this->post('/second/magic-link', ['email' => $this->user->email])->assertNotFound();
    }

    public function test_the_login_screen_offers_magic_link_when_enabled(): void
    {
        $this->get('/second/login')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('panel/auth/Login', false)
                ->where('magicLinkUrl', '/second/magic-link'));
    }

    public function test_a_link_signs_the_person_in(): void
    {
        $this->get($this->magicUrl())->assertRedirect('/second');

        $this->assertAuthenticatedAs($this->user);
    }

    public function test_a_link_cannot_be_used_twice(): void
    {
        $url = $this->magicUrl();

        $this->get($url)->assertRedirect('/second');
        auth()->logout();

        $this->get($url)->assertRedirect('/second/login');
        $this->assertGuest();
    }

    public function test_an_unsigned_url_is_refused(): void
    {
        $token = (new OneTimeCredential('one_time_credentials', 10))
            ->issue($this->user->email, null, numeric: false);

        $this->get("/second/magic-link/consume?email={$this->user->email}&token={$token}")
            ->assertStatus(401);

        $this->assertGuest();
    }

    public function test_an_expired_link_is_refused(): void
    {
        $url = $this->magicUrl();

        $this->travel(30)->minutes();

        $this->get($url)->assertStatus(401);
        $this->assertGuest();
    }

    public function test_requesting_a_link_says_nothing_about_the_address(): void
    {
        $known = $this->post('/second/magic-link', ['email' => $this->user->email]);
        $unknown = $this->post('/second/magic-link', ['email' => 'nobody@example.test']);

        $this->assertSame($known->getStatusCode(), $unknown->getStatusCode());
        $known->assertSessionHas('status');
        $unknown->assertSessionHas('status');
        $this->assertSame(0, DB::table('one_time_credentials')->where('email', 'nobody@example.test')->count());
        Mail::assertSent(AuthPlainMail::class, 1);
    }

    private function magicUrl(): string
    {
        $token = (new OneTimeCredential('one_time_credentials', 10))
            ->issue($this->user->email, null, numeric: false);

        return URL::temporarySignedRoute(
            'second.magic-link.consume',
            now()->addMinutes(10),
            ['email' => $this->user->email, 'token' => $token],
        );
    }
}
