<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Gate;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;
use Tests\TestCase;

/**
 * Everything except creating, so the test isolates ONE ability rather than this
 * application's permission model. Same technique as `RecordActionTest`.
 */
final class DeniesCreatePolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Plan $plan): bool
    {
        return true;
    }

    public function create(User $user): bool
    {
        return false;
    }

    public function update(User $user, Plan $plan): bool
    {
        return true;
    }
}

/**
 * Validation that answers before anything is written.
 *
 * `PanelRoutes` puts `store` and `update` inside a `precognitive` group, so the
 * endpoints have been able to answer validation-only requests for as long as
 * they have existed - AND NOTHING EVER SENT ONE. The README recorded
 * Precognition as blocked on a peer dependency, which was true of a package
 * this application does not need: `laravel-precognition-vue-inertia` peers
 * `@inertiajs/vue3: ^1 || ^2`, and Inertia v3 ships the capability itself as
 * `useForm().withPrecognition()`.
 *
 * So the half that looked blocked was already present on both sides, and the
 * half nobody had checked was whether the SERVER honoured the contract. That is
 * what this file asserts, because it is the half that decides whether the
 * feature is safe: a precognitive request that WRITES is worse than no live
 * validation at all - every keystroke would create a row.
 */
final class PrecognitionTest extends TestCase
{
    use RefreshDatabase;

    private function operator(): User
    {
        $tenant = Tenant::create(['name' => 'Catalogue', 'slug' => 'catalogue']);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

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

    /** @return array<string, mixed> */
    private function validPlan(): array
    {
        return [
            'name' => 'Business 100',
            'speed_mbps' => 100,
            'price_cents' => 1_250_000,
            'is_active' => true,
            'position' => 7,
        ];
    }

    /**
     * THE ONE THAT MATTERS. Everything else here is about error messages; this
     * is about whether asking "would this be valid?" quietly answers by doing
     * it. A form validating per keystroke would otherwise write a row per
     * keystroke, and the rows would all look like ordinary operator activity.
     */
    public function test_a_precognitive_request_validates_without_writing(): void
    {
        $operator = $this->operator();

        $response = $this->actingAs($operator)
            ->withHeader('Precognition', 'true')
            ->post('/plans', $this->validPlan());

        $response->assertNoContent();

        $this->assertSame(
            0,
            Plan::withoutGlobalScopes()->where('name', 'Business 100')->count(),
            'A validation-only request created a row. Live validation would write one per keystroke.'
        );
    }

    /** The response has to identify itself, or a client cannot tell it apart. */
    public function test_the_response_is_marked_as_precognitive(): void
    {
        $response = $this->actingAs($this->operator())
            ->withHeader('Precognition', 'true')
            ->post('/plans', $this->validPlan());

        $this->assertSame('true', $response->headers->get('Precognition'));
    }

    /** Invalid input still fails, and still without writing. */
    public function test_it_reports_errors_without_writing(): void
    {
        $operator = $this->operator();

        $response = $this->actingAs($operator)
            ->withHeader('Precognition', 'true')
            ->postJson('/plans', ['name' => '', 'speed_mbps' => 100, 'price_cents' => 1]);

        $response->assertStatus(422)->assertJsonValidationErrors('name');

        $this->assertSame(0, Plan::withoutGlobalScopes()->count());
    }

    /**
     * ONE FIELD AT A TIME, which is what makes it usable on a form.
     *
     * `Precognition-Validate-Only` narrows validation to the field the person
     * just left. Without it, typing a name would immediately report every other
     * required field as missing - the form shouting about work not yet done,
     * which is the behaviour that makes people turn live validation off.
     */
    public function test_it_can_validate_a_single_field(): void
    {
        $response = $this->actingAs($this->operator())
            ->withHeaders([
                'Precognition' => 'true',
                'Precognition-Validate-Only' => 'name',
            ])
            ->postJson('/plans', ['name' => '']);

        $response->assertStatus(422)->assertJsonValidationErrors('name');

        // `speed_mbps` is required and absent, and must NOT be complained about.
        $response->assertJsonMissingValidationErrors('speed_mbps');
    }

    /**
     * THE ORDINARY REQUEST IS UNCHANGED, and this is the control.
     *
     * Every assertion above passes just as happily against an endpoint that has
     * stopped writing altogether. This is the one that says the feature is a
     * narrowing of behaviour rather than a removal of it.
     */
    public function test_a_normal_request_still_writes(): void
    {
        $this->actingAs($this->operator())->post('/plans', $this->validPlan());

        $this->assertSame(
            1,
            Plan::withoutGlobalScopes()->where('name', 'Business 100')->count(),
        );
    }

    /**
     * PRECOGNITION IS NOT A WAY IN. The header changes what a request DOES, and
     * must not change who may send it - an unauthenticated caller probing which
     * values validate is reading the rules of a form they cannot open.
     */
    public function test_a_guest_is_refused_like_any_other_request(): void
    {
        $this->withHeader('Precognition', 'true')
            ->post('/plans', $this->validPlan())
            ->assertRedirect();

        $this->assertSame(0, Plan::withoutGlobalScopes()->count());
    }

    /**
     * AUTHORISATION HAS TO RUN ON THE PRECOGNITIVE PATH TOO.
     *
     * `abort_unless($class::can('create'), 403)` used to be the first statement
     * of `RecordController::store`, and a precognitive request never enters
     * that method. Moving it into `RecordFormRequest::authorize()` is what
     * keeps it on both paths - a check that only runs when the body runs is a
     * check a `Precognition: true` header skips.
     *
     * THE POLICY IS SWAPPED RATHER THAN THE USER DOWNGRADED, because the
     * question is whether the ABILITY is consulted, not what this application's
     * permission model happens to grant. A user with no roles can still create
     * a plan here, so testing with one would prove nothing either way.
     */
    public function test_precognition_does_not_skip_authorisation(): void
    {
        $operator = $this->operator();

        Gate::policy(Plan::class, DeniesCreatePolicy::class);

        $this->actingAs($operator)
            ->withHeader('Precognition', 'true')
            ->postJson('/plans', $this->validPlan())
            ->assertForbidden();
    }
}
