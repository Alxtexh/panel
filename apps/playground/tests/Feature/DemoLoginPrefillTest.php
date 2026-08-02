<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Support\DemoLogin;
use Tests\TestCase;

/**
 * The sign-in form fills itself in, and the reasons that is not reckless.
 *
 * IT TYPES A PUBLIC PASSWORD INTO A LOCAL FORM. `panel:seed-reference` creates
 * operator accounts whose password is the literal string "password", written in
 * that command and readable by anybody with the repository. On a developer's
 * machine, prefilling it saves the twentieth restart of the day; it reveals
 * nothing that reading one file would not.
 *
 * THAT ARGUMENT IS ENTIRELY ABOUT THE ENVIRONMENT, which is why the environment
 * is checked in code rather than through a config key. `.env` files are copied
 * between machines, and the one being copied from is usually a laptop - so the
 * failure this guards is not somebody choosing wrongly, it is somebody
 * inheriting a choice. A deployed panel cannot turn this on.
 *
 * These tests are therefore mostly about it being OFF.
 */
final class DemoLoginPrefillTest extends TestCase
{
    private function configure(bool $prefill, string $environment = 'local'): void
    {
        config(['demo.login.prefill' => $prefill]);
        app()->detectEnvironment(fn (): string => $environment);
    }

    /* ----------------------------------------------------------- refusals */

    /**
     * NOT IN PRODUCTION, WHATEVER THE CONFIG SAYS. The single most important
     * assertion in this file: a copied `.env` with the flag on still gets
     * nothing.
     */
    public function test_it_is_off_in_production_even_when_configured_on(): void
    {
        $this->configure(prefill: true, environment: 'production');

        $this->assertFalse(DemoLogin::enabled());
        $this->assertNull(DemoLogin::credentials());
    }

    /** And not in staging either - `local` is the allowlist, not a denylist. */
    public function test_it_is_off_in_any_environment_that_is_not_local(): void
    {
        foreach (['production', 'staging', 'testing', 'demo'] as $environment) {
            $this->configure(prefill: true, environment: $environment);

            $this->assertNull(
                DemoLogin::credentials(),
                "Credentials were prefilled in the [{$environment}] environment.",
            );
        }
    }

    /** Off by default locally too: filling in a password is opt-in. */
    public function test_it_is_off_locally_until_somebody_asks_for_it(): void
    {
        $this->configure(prefill: false);

        $this->assertNull(DemoLogin::credentials());
    }

    /* ------------------------------------------------------- what it does */

    public function test_it_supplies_the_seeded_account_when_asked_locally(): void
    {
        $this->configure(prefill: true);
        config(['demo.login.email' => 'admin@nairobi-fibre.test']);

        $this->assertSame(
            ['email' => 'admin@nairobi-fibre.test', 'password' => 'password'],
            DemoLogin::credentials(),
        );
    }

    /* --------------------------------------------------------- the screen */

    /**
     * THE PROP IS ABSENT RATHER THAN EMPTY on a real sign-in page. A password
     * that reaches the browser is a password in the page source, in the browser
     * history and in anything that logged the response - "" would be harmless
     * and null is the shape that stays harmless when somebody later changes
     * what fills it.
     */
    public function test_the_login_screen_carries_no_credentials_by_default(): void
    {
        $this->configure(prefill: false);

        $props = $this->get('/login')->assertOk()->viewData('page')['props'];

        $this->assertNull($props['prefill'] ?? null, 'The sign-in page shipped a password.');
    }

    public function test_the_login_screen_carries_them_when_enabled_locally(): void
    {
        $this->configure(prefill: true);

        $props = $this->get('/login')->assertOk()->viewData('page')['props'];

        $this->assertSame('admin@nairobi-fibre.test', $props['prefill']['email']);
    }

    /**
     * AND THE PASSWORD IS THE SEEDER'S, NOT A NEW ONE.
     *
     * The whole justification collapses if this ever becomes a credential that
     * only exists because this feature invented it - at that point the panel is
     * creating a known-password administrator, which is a different and much
     * worse thing than echoing one that is already published.
     */
    public function test_the_password_is_the_one_the_seeder_publishes(): void
    {
        $seeder = (string) file_get_contents(
            base_path('app/Console/Commands/SeedReferenceCommand.php'),
        );

        $this->assertStringContainsString(
            "bcrypt('password')",
            $seeder,
            'The prefill password is no longer the seeded one, so it is a credential this feature invented.',
        );
    }
}
