<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

/**
 * The defaults nobody changed, which is how an installation announces that it
 * is still somebody's laptop.
 *
 * NONE OF THESE BREAK ANYTHING, and that is exactly why they reach production:
 * everything works, so nothing prompts anybody to look. They are found later by
 * whoever receives an email from "Laravel", or by whoever reads a stack trace on
 * a public error page.
 *
 * THE SEVERITY DEPENDS ON THE ENVIRONMENT, which is the interesting part of this
 * file. A seeded account on a laptop is furniture; the same account in
 * production is a published password. The same fact is a note in one and a
 * problem in the other, and both directions are asserted.
 */
final class DoctorShippedDefaultsTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        // Doctor must not read this machine's backup destination - a stale
        // snapshot would put an unrelated finding in every assertion here.
        Storage::fake('doctor-defaults-has-no-backups');
        config(['backup.backup.destination.disks' => ['doctor-defaults-has-no-backups']]);
    }

    /**
     * Doctor's output, with its line wrapping flattened.
     *
     * THE CONSOLE WRAPS AT THE TERMINAL WIDTH, so a phrase this file asserts on
     * can be split across a newline - "2 exist" arrived as "2\n exist" and the
     * assertion failed on formatting rather than on behaviour. Collapsing
     * whitespace asserts what the message SAYS instead of how it was laid out.
     */
    private function doctor(): string
    {
        Artisan::call('panel:doctor');

        return (string) preg_replace('/\s+/', ' ', Artisan::output());
    }

    /* ---------------------------------------------------------- the name */

    public function test_it_says_when_the_application_is_still_called_laravel(): void
    {
        config(['app.name' => 'Laravel']);

        $this->assertStringContainsString('still called "Laravel"', $this->doctor());
    }

    public function test_it_says_nothing_once_the_application_has_a_name(): void
    {
        config(['app.name' => 'Nairobi Fibre']);

        $this->assertStringNotContainsString('still called', $this->doctor());
    }

    /* ------------------------------------------------------- seeded accounts */

    /**
     * A `.test` ADDRESS CANNOT BE A COLLEAGUE. The TLD is reserved, so nobody
     * receives mail there and an account holding one came from a seeder whose
     * password is in the repository.
     */
    public function test_a_seeded_account_is_reported_with_how_many_there_are(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        foreach (['one@demo.test', 'two@demo.test'] as $email) {
            User::factory()->create(['tenant_id' => $tenant->id, 'email' => $email]);
        }

        $output = $this->doctor();

        $this->assertStringContainsString('Seeded demo accounts', $output);
        $this->assertStringContainsString('2 exist', $output);
    }

    /** A real address is not mistaken for one. */
    public function test_a_real_address_is_not_reported(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        User::factory()->create(['tenant_id' => $tenant->id, 'email' => 'grace@acme.co.ke']);

        $this->assertStringNotContainsString('Seeded demo accounts', $this->doctor());
    }

    /* ------------------------------------------------- severity by environment */

    /**
     * THE SAME FACT, REPORTED DIFFERENTLY. On a laptop a seeded account is
     * furniture and doctor should not cry wolf; in production it is a password
     * anybody can read in the repository, and doctor exits non-zero so a deploy
     * check can refuse.
     */
    public function test_a_seeded_account_becomes_a_problem_in_production(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        User::factory()->create(['tenant_id' => $tenant->id, 'email' => 'seed@demo.test']);

        app()->detectEnvironment(static fn (): string => 'production');

        $this->assertStringContainsString('can still sign in', $this->doctor());
    }

    /**
     * DEBUG IN PRODUCTION IS THE ONE EMERGENCY HERE. Laravel's error page prints
     * environment variables, which includes the database password and APP_KEY,
     * to whoever triggered the error.
     */
    public function test_debug_mode_in_production_is_a_problem(): void
    {
        config(['app.debug' => true]);
        app()->detectEnvironment(static fn (): string => 'production');

        $this->assertStringContainsString('Debug mode is on in production', $this->doctor());
    }

    /** And is not mentioned on a development machine, where it is correct. */
    public function test_debug_mode_locally_is_not_reported(): void
    {
        config(['app.debug' => true]);

        $this->assertStringNotContainsString('Debug mode is on', $this->doctor());
    }
}
