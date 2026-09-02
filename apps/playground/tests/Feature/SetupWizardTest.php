<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Alxtexh\Panel\Support\SetupWizardState;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The real, playground-wired setup wizard: Localization, Location, Splash
 * page, Data plan, all in one submit. See AdminPanelProvider for the
 * declaration and packages/panel/tests/Feature/SetupWizardTest.php for the
 * framework-level behaviour (validation, skip, the redirect middleware)
 * this file does not re-prove against a fixture panel.
 */
final class SetupWizardTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Placeholder', 'slug' => 'placeholder']);

        $this->user = User::factory()->create(['tenant_id' => $this->tenant->id]);

        /*
         * THE FACTORY'S DEFAULT MARKS THE WIZARD ALREADY DONE (see its own
         * docblock) - right for the rest of the suite, wrong for a test of
         * the wizard itself.
         */
        $this->user->forceFill(['appearance' => []])->save();
    }

    private function payload(): array
    {
        return [
            'timezone' => 'Africa/Nairobi',
            'date_format' => 'Y-m-d',
            'currency' => 'KES',
            'name' => 'Nairobi Fibre',
            'splash_mode' => 'auto',
            'plan_name' => 'Home 20',
        ];
    }

    public function test_a_fresh_operator_is_redirected_to_the_wizard_before_the_dashboard(): void
    {
        $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertRedirect(route('panel.setup-wizard'));
    }

    public function test_submitting_all_four_steps_writes_the_tenant_and_a_plan_in_one_request(): void
    {
        $this->actingAs($this->user)
            ->post('/setup-wizard', $this->payload())
            ->assertRedirect(route('panel.setup-wizard.complete'));

        $tenant = $this->tenant->fresh();
        $this->assertSame('Nairobi Fibre', $tenant->name);
        $this->assertSame('Africa/Nairobi', $tenant->settings['timezone'] ?? null);
        $this->assertSame('Y-m-d', $tenant->settings['date_format'] ?? null);
        $this->assertSame('KES', $tenant->settings['currency'] ?? null);
        $this->assertSame('auto', $tenant->settings['splash_mode'] ?? null);

        $plan = Plan::query()->where('tenant_id', $tenant->id)->first();
        $this->assertNotNull($plan);
        $this->assertSame('Home 20', $plan->name);
        $this->assertSame(20, $plan->speed_mbps);
        $this->assertTrue($plan->is_active);

        $this->assertTrue(SetupWizardState::isDone($this->makeRequestFor($this->user)));
    }

    public function test_auto_splash_mode_does_not_require_the_custom_fields(): void
    {
        $this->actingAs($this->user)
            ->post('/setup-wizard', $this->payload())
            ->assertSessionHasNoErrors();
    }

    public function test_custom_splash_mode_requires_a_headline(): void
    {
        $payload = [...$this->payload(), 'splash_mode' => 'custom'];
        unset($payload['splash_headline']);

        $this->actingAs($this->user)
            ->post('/setup-wizard', $payload)
            ->assertSessionHasErrors('splash_headline');
    }

    public function test_custom_splash_mode_with_a_headline_succeeds(): void
    {
        $payload = [
            ...$this->payload(),
            'splash_mode' => 'custom',
            'splash_headline' => 'Welcome to Nairobi Fibre',
        ];

        $this->actingAs($this->user)
            ->post('/setup-wizard', $payload)
            ->assertSessionHasNoErrors();

        $tenant = $this->tenant->fresh();
        $this->assertSame('Welcome to Nairobi Fibre', $tenant->settings['splash_headline'] ?? null);
    }

    public function test_the_completion_screen_reflects_the_data_just_written(): void
    {
        $this->actingAs($this->user)->post('/setup-wizard', $this->payload());

        $props = $this->actingAs($this->user->fresh())
            ->get('/setup-wizard/complete')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertTrue($props['completed']);
        $summary = collect($props['completion']['summary']);
        $this->assertTrue($summary->contains(fn (array $item): bool => str_contains((string) ($item['detail'] ?? ''), 'Nairobi Fibre')));

        $actions = collect($props['completion']['actions']);
        $this->assertTrue($actions->contains('label', 'Go to dashboard'));
        $this->assertTrue($actions->firstWhere('label', 'Go to dashboard')['primary'] ?? false);
    }

    private function makeRequestFor(User $user): \Illuminate\Http\Request
    {
        $request = \Illuminate\Http\Request::create('/setup-wizard');
        $request->setUserResolver(fn () => $user->fresh());

        return $request;
    }
}
