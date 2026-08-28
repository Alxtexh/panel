<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Actions\ImpersonateAction;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Validation\ValidationException;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

/**
 * `ImpersonateAction` - the `RecordAction` wrapper around `Impersonation`,
 * the same relationship `ReplicateAction` has to `replicate()`.
 *
 * `Impersonation` ITSELF IS NOT RE-TESTED HERE - see ImpersonationTest for
 * the safety model (never upward, never across tenants, never nested). This
 * file only proves the WIRING: that `visible()` asks the same question the
 * server enforces, and that `handle()` reaches `Impersonation::start()`
 * rather than reimplementing any part of it.
 */
final class ImpersonateActionTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $actor;

    private User $target;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->actor = $this->user('actor@example.test', $this->mine);
        $this->target = $this->user('target@example.test', $this->mine);

        $role = Role::findOrCreate('impersonator', 'web');
        $role->givePermissionTo(Permission::findOrCreate('impersonate_users', 'web'));

        $this->actor->assignRole($role);
        $this->actor = $this->actor->fresh();

        $this->actingAs($this->actor);

        /*
         * A REQUEST WITH A SESSION, because `Impersonation` lives in one -
         * see `ImpersonationTest` for the same setup. `ImpersonateAction`
         * resolves `Impersonation` via `app()`, which reaches whatever
         * `request()` the container already has; a bare test request has no
         * session store attached until this runs.
         */
        $request = request();

        if (! $request->hasSession()) {
            $request->setLaravelSession(app('session.store'));
        }
    }

    private function user(string $email, Tenant $tenant): User
    {
        return User::create([
            'tenant_id' => $tenant->id,
            'name' => $email,
            'email' => $email,
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    public function test_it_builds_a_record_action_with_the_expected_shape(): void
    {
        $payload = ImpersonateAction::make()->toAction()->toArray();

        $this->assertSame('impersonate', $payload['key']);
        $this->assertSame('Impersonate', $payload['label']);
        $this->assertSame('warning', $payload['color']);
        $this->assertNotEmpty($payload['confirmation']);
    }

    public function test_label_and_confirm_are_overridable(): void
    {
        $payload = ImpersonateAction::make('become')
            ->label('Sign in as this customer')
            ->confirm('Sure?')
            ->toAction()
            ->toArray();

        $this->assertSame('become', $payload['key']);
        $this->assertSame('Sign in as this customer', $payload['label']);
        $this->assertSame('Sure?', $payload['confirmation']);
    }

    public function test_confirm_null_drops_the_confirmation(): void
    {
        $payload = ImpersonateAction::make()->confirm(null)->toAction()->toArray();

        $this->assertArrayNotHasKey('confirmation', $payload);
    }

    public function test_visible_matches_what_impersonation_allows(): void
    {
        $action = ImpersonateAction::make()->toAction();

        $this->assertTrue($action->appliesTo($this->target->getAttributes()));
    }

    public function test_visible_is_false_for_a_row_the_actor_may_not_become(): void
    {
        $action = ImpersonateAction::make()->toAction();

        // Nobody, not even the actor, may impersonate themselves.
        $this->assertFalse($action->appliesTo($this->actor->getAttributes()));
    }

    public function test_visible_is_false_for_another_organisations_row(): void
    {
        $theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);
        $foreign = $this->user('foreign@example.test', $theirs);

        $action = ImpersonateAction::make()->toAction();

        $this->assertFalse($action->appliesTo($foreign->getAttributes()));
    }

    public function test_handle_reaches_impersonation_start_and_swaps_the_session(): void
    {
        $action = ImpersonateAction::make()->toAction();

        $action->run($this->target);

        $this->assertSame($this->target->getKey(), auth()->id());
    }

    /**
     * THE BACKSTOP, for a request that skipped the menu `visible()` draws.
     * `handle()` must refuse again rather than trust the client already
     * checked - see the class note on why this is a validation error, not a
     * crash.
     */
    public function test_handle_refuses_a_disallowed_target_even_when_forced(): void
    {
        $theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);
        $foreign = $this->user('foreign@example.test', $theirs);

        $action = ImpersonateAction::make()->toAction();

        $this->expectException(ValidationException::class);

        $action->run($foreign);
    }

    public function test_stop_route_hands_the_session_back(): void
    {
        ImpersonateAction::make()->toAction()->run($this->target);
        $this->assertSame($this->target->getKey(), auth()->id());

        $this->post('/impersonate/stop')->assertRedirect();

        $this->assertSame($this->actor->getKey(), auth()->id());
    }
}
