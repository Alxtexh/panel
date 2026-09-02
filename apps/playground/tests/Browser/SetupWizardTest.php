<?php

declare(strict_types=1);

namespace Tests\Browser;

use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use Alxtexh\Panel\Support\SetupWizardState;
use Illuminate\Foundation\Testing\DatabaseTruncation;
use Laravel\Dusk\Browser;
use Tests\DuskTestCase;

/**
 * The full-screen setup wizard, in a real browser: a first login lands here
 * before the dashboard, walking all four steps writes real data, and a
 * second login does not show it again.
 *
 * `#f-{key}`, NOT A BARE FIELD NAME. Every form control here carries an
 * `id="f-{key}"` and no `name` attribute at all (see FormFieldControl.vue /
 * PkRadioGroup.vue) - Dusk's `type()`/`select()` resolve a bare string
 * against `[name=]` first, which never matches.
 *
 * EVERY FRESH LOGIN CLEARS `panel_setup_wizard_done` FIRST. `DatabaseTruncation`
 * empties the tables between test methods but this class's browser (and its
 * cookie jar) is not torn down between them, so a cookie an earlier method's
 * completed run left behind survives into the next one's brand-new tenant and
 * user - see `SetupWizardState`'s own docblock: with no `appearance` opinion
 * yet (a genuinely fresh account), `isDone()` falls back to trusting that
 * cookie, and a stale `1` skips straight past a wizard this method never ran.
 */
final class SetupWizardTest extends DuskTestCase
{
    use DatabaseTruncation;

    private function seedFreshOperator(): int|string
    {
        $tenant = Tenant::create(['name' => 'Placeholder', 'slug' => 'placeholder-'.uniqid()]);

        $user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);

        // The factory's own default marks the wizard already done - wrong
        // for a test of the wizard itself. See UserFactory's docblock.
        $user->forceFill(['appearance' => []])->save();

        return $user->getKey();
    }

    private function loginFreshOperator(Browser $browser, int|string $operatorId): Browser
    {
        $browser->loginAs($operatorId);

        $browser->driver->manage()->deleteCookieNamed(SetupWizardState::COOKIE);

        return $browser;
    }

    private function walkToCompletion(Browser $browser, string $locationName): Browser
    {
        return $browser
            ->waitForText('Localization', 10)
            ->select('#f-timezone', 'Africa/Nairobi')
            ->select('#f-date_format', 'Y-m-d')
            ->select('#f-currency', 'KES')
            ->press('Next')

            ->waitForText('Location', 5)
            ->type('#f-name', $locationName)
            ->press('Next')

            ->waitForText('Splash page', 5)
            ->click('input[value="auto"]')
            ->press('Next')

            ->waitForText('Data plan', 5)
            ->type('#f-plan_name', 'Home 20')

            ->press('Finish setup')
            ->waitForText('Initial setup completed', 10);
    }

    public function test_a_fresh_login_lands_on_the_wizard_not_the_dashboard(): void
    {
        $operatorId = $this->seedFreshOperator();

        $this->browse(function (Browser $browser) use ($operatorId): void {
            $this->loginFreshOperator($browser, $operatorId)
                ->visit('/dashboard')
                ->waitForLocation('/setup-wizard', 10)
                ->assertSee('Localization');
        });
    }

    public function test_walking_all_four_steps_finishes_and_writes_real_data(): void
    {
        $operatorId = $this->seedFreshOperator();

        $this->browse(function (Browser $browser) use ($operatorId): void {
            $this->loginFreshOperator($browser, $operatorId)->visit('/setup-wizard');

            $this->walkToCompletion($browser, 'Nairobi Fibre')
                ->assertSee('Nairobi Fibre')
                ->assertSee('Go to dashboard');

            $browser->screenshot('setup-wizard-complete');
        });

        /*
         * THE TENANT ROW ONLY, NOT `Plan`. `Tenant` stays on the CENTRAL
         * connection (`Concerns\CentralConnection`), reachable from this
         * process without going through the request lifecycle that
         * initialises tenancy - `Plan` does not, and this process never ran
         * `InitializeTenancyForUser` the way the browser's own request to
         * the `artisan serve` process did. Full data-correctness coverage,
         * `Plan` included, lives in the Feature test
         * (apps/playground/tests/Feature/SetupWizardTest.php), which runs
         * through that same middleware stack; this one is about what a
         * person actually sees.
         */
        \Illuminate\Support\Facades\DB::purge('sqlite');

        $tenant = Tenant::query()->where('name', 'Nairobi Fibre')->firstOrFail();
        $this->assertSame('Africa/Nairobi', $tenant->settings['timezone'] ?? null);
    }

    public function test_back_preserves_the_values_already_typed(): void
    {
        $operatorId = $this->seedFreshOperator();

        $this->browse(function (Browser $browser) use ($operatorId): void {
            $this->loginFreshOperator($browser, $operatorId)
                ->visit('/setup-wizard')
                ->waitForText('Localization', 10)
                ->select('#f-timezone', 'Africa/Nairobi')
                ->select('#f-date_format', 'Y-m-d')
                ->select('#f-currency', 'KES')
                ->press('Next');

            /*
             * `waitFor('#f-name')`, NOT `waitForText('Location')`. Every
             * step stays mounted with `v-show` (see SchemaNode.vue's own
             * comment on the wizard branch), so all four step labels sit in
             * the indicator strip the whole time - "Location" is on screen
             * before this click, so it proves nothing. Its own field only
             * becomes interactable once its step is the active one.
             */
            $browser->waitFor('#f-name', 5)
                ->type('#f-name', 'Back Button Fibre')
                ->press('Back')
                ->waitFor('#f-timezone', 5)
                ->assertSelected('#f-timezone', 'Africa/Nairobi')
                ->assertSelected('#f-date_format', 'Y-m-d')
                ->assertSelected('#f-currency', 'KES')
                ->press('Next')
                ->waitFor('#f-name', 5)
                ->assertInputValue('#f-name', 'Back Button Fibre');
        });
    }

    public function test_skip_goes_straight_to_the_dashboard(): void
    {
        $operatorId = $this->seedFreshOperator();

        $this->browse(function (Browser $browser) use ($operatorId): void {
            $this->loginFreshOperator($browser, $operatorId)
                ->visit('/setup-wizard')
                ->waitForText('Localization', 10)
                ->click('@skip-setup-wizard')
                ->waitForLocation('/dashboard', 10)
                ->assertPathIs('/dashboard');
        });
    }

    public function test_a_second_login_after_finishing_does_not_show_the_wizard_again(): void
    {
        $operatorId = $this->seedFreshOperator();

        $this->browse(function (Browser $browser) use ($operatorId): void {
            $this->loginFreshOperator($browser, $operatorId)->visit('/setup-wizard');

            $this->walkToCompletion($browser, 'Second Login Fibre');

            $browser->logout()
                ->loginAs($operatorId)
                ->visit('/dashboard')
                ->waitForLocation('/dashboard', 10)
                ->assertPathIs('/dashboard');
        });
    }
}
