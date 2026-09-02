<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Schema\Step;
use Alxtexh\Panel\Schema\Wizard;
use Alxtexh\Panel\Support\OnboardingSteps;
use Alxtexh\Panel\Support\SetupWizard;
use Alxtexh\Panel\Support\SetupWizardCompletion;
use Alxtexh\Panel\Support\SetupWizardState;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * The full-screen first-run wizard: one submit, real persistence, separate
 * from `OnboardingGuideTest`'s dashboard checklist entirely.
 */
final class SetupWizardTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    /** @var list<string> */
    private array $received = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    private function panel(): \Alxtexh\Panel\Panel
    {
        return app(PanelManager::class)->panel('admin');
    }

    private function enableWizard(): void
    {
        $this->panel()->setupWizard(function (): SetupWizard {
            return SetupWizard::make()
                ->wizard(Wizard::make()->steps([
                    Step::make('Workspace')
                        ->description('Name this workspace')
                        ->schema([TextField::make('workspace_name')->required()]),
                ]))
                ->submit(function (array $values): void {
                    $this->received[] = $values['workspace_name'];
                })
                ->completion(
                    SetupWizardCompletion::make()
                        ->heading('All set')
                        ->summary(fn (): array => [['label' => 'Workspace named']])
                );
        });
    }

    public function test_it_is_off_by_default(): void
    {
        $this->assertFalse($this->panel()->offersSetupWizard());
    }

    public function test_offers_respects_without(): void
    {
        $this->enableWizard();

        $this->assertTrue($this->panel()->offersSetupWizard());

        $this->panel()->without(['setup-wizard']);

        $this->assertFalse($this->panel()->offersSetupWizard());
    }

    public function test_the_route_does_not_exist_when_no_resolver_is_declared(): void
    {
        $this->actingAs($this->user)->get('/setup-wizard')->assertNotFound();
    }

    public function test_get_redirects_away_once_already_done(): void
    {
        $this->enableWizard();

        $this->user->appearance = [SetupWizardState::APPEARANCE_KEY => true];
        $this->user->save();

        $this->actingAs($this->user->fresh())
            ->get('/setup-wizard')
            ->assertRedirect();
    }

    public function test_shows_the_wizard_schema_on_a_fresh_visit(): void
    {
        $this->enableWizard();

        $props = $this->actingAs($this->user)
            ->get('/setup-wizard')
            ->assertOk()
            ->viewData('page')['props'];

        $this->assertFalse($props['completed']);
        $this->assertNotEmpty($props['wizard']['nodes'] ?? null);
    }

    public function test_invalid_payload_redirects_back_with_errors_and_never_submits(): void
    {
        $this->enableWizard();

        $this->actingAs($this->user)
            ->post('/setup-wizard', [])
            ->assertRedirect()
            ->assertSessionHasErrors('workspace_name');

        $this->assertSame([], $this->received);
        $this->assertFalse(SetupWizardState::isDone($this->makeRequestFor($this->user)));
    }

    public function test_valid_payload_submits_once_marks_done_and_redirects_to_complete(): void
    {
        $this->enableWizard();

        $this->actingAs($this->user)
            ->post('/setup-wizard', ['workspace_name' => 'Acme'])
            ->assertRedirect(route('panel.setup-wizard.complete'));

        $this->assertSame(['Acme'], $this->received);

        $fresh = $this->user->fresh();
        $this->assertTrue($fresh->appearance[SetupWizardState::APPEARANCE_KEY] ?? false);
    }

    public function test_skip_marks_done_without_running_the_submit_handler(): void
    {
        $this->enableWizard();

        $this->actingAs($this->user)
            ->post('/setup-wizard/skip')
            ->assertRedirect();

        $this->assertSame([], $this->received);

        $fresh = $this->user->fresh();
        $this->assertTrue($fresh->appearance[SetupWizardState::APPEARANCE_KEY] ?? false);
    }

    public function test_middleware_redirects_an_unfinished_user_away_from_an_arbitrary_panel_route(): void
    {
        $this->enableWizard();

        $this->actingAs($this->user)
            ->get('/dashboard')
            ->assertRedirect(route('panel.setup-wizard'));
    }

    public function test_middleware_does_not_apply_once_the_wizard_is_done(): void
    {
        $this->enableWizard();

        $this->user->appearance = [SetupWizardState::APPEARANCE_KEY => true];
        $this->user->save();

        $this->actingAs($this->user->fresh())
            ->get('/dashboard')
            ->assertOk();
    }

    public function test_middleware_exempts_an_impersonated_session(): void
    {
        $this->enableWizard();

        $this->actingAs($this->user)
            ->withSession(['panel.impersonator' => 999])
            ->get('/dashboard')
            ->assertOk();
    }

    public function test_finishing_the_wizard_does_not_mark_the_dashboard_checklist_done(): void
    {
        $this->enableWizard();
        $this->panel()->onboarding();

        $this->actingAs($this->user)
            ->post('/setup-wizard', ['workspace_name' => 'Acme'])
            ->assertRedirect();

        $fresh = $this->user->fresh();
        $this->assertTrue($fresh->appearance[SetupWizardState::APPEARANCE_KEY] ?? false);
        $this->assertArrayNotHasKey(OnboardingSteps::APPEARANCE_KEY, $fresh->appearance);
    }

    private function makeRequestFor(User $user): \Illuminate\Http\Request
    {
        $request = \Illuminate\Http\Request::create('/setup-wizard');
        $request->setUserResolver(fn () => $user->fresh());

        return $request;
    }
}
