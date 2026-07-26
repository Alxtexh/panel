<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\File;
use Tests\TestCase;

/**
 * Spec §7 acceptance: `make:panel-resource {Model} --generate` produces a
 * working screen with no hand editing.
 *
 * "No hand editing" is the part worth testing, and it has three parts that are
 * easy to get individually right and collectively wrong: the class must be
 * VALID, DISCOVERED without a registration line, and AUTHORIZED — the panel
 * denies any ability whose model has no policy, so a generator that skipped the
 * policy would emit a resource rendering an empty table with no explanation.
 */
final class GeneratorTest extends TestCase
{
    use RefreshDatabase;

    private string $resourcePath;

    private string $policyPath;

    protected function setUp(): void
    {
        parent::setUp();

        $this->resourcePath = app_path('Panel/Resources/UserResource.php');
        $this->policyPath = app_path('Policies/UserPolicy.php');

        $this->cleanUp();
    }

    protected function tearDown(): void
    {
        $this->cleanUp();

        parent::tearDown();
    }

    private function cleanUp(): void
    {
        File::delete($this->resourcePath);
        File::delete($this->policyPath);
    }

    public function test_it_generates_a_resource_from_a_real_table(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])
            ->assertSuccessful();

        $this->assertFileExists($this->resourcePath);

        $code = File::get($this->resourcePath);

        $this->assertStringContainsString('final class UserResource extends Resource', $code);
        $this->assertStringContainsString("protected static string \$model = User::class;", $code);

        // Introspected from the real users table.
        $this->assertStringContainsString("TextColumn::make('name')", $code);
        $this->assertStringContainsString("TextColumn::make('email')", $code);
    }

    /** A generated file that does not parse is worse than no file. */
    public function test_the_generated_class_is_valid_php(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        exec('php -l ' . escapeshellarg($this->resourcePath) . ' 2>&1', $output, $status);

        $this->assertSame(0, $status, 'Generated resource has a syntax error: ' . implode("\n", $output));
    }

    /**
     * Secrets must never be introspected onto a screen. `password` and
     * `remember_token` are on the users table, and a generator that emitted a
     * column for either would put a hash in front of every operator.
     */
    public function test_it_never_generates_columns_for_secrets(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        $code = File::get($this->resourcePath);

        foreach (['password', 'remember_token'] as $secret) {
            $this->assertStringNotContainsString("make('{$secret}')", $code, "Generated a column for [{$secret}].");
        }
    }

    /**
     * `tenant_id` is set from request context. A generated form field for it
     * would be a supported way to write a record into another tenant.
     */
    public function test_it_never_generates_a_tenant_id_field(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        $this->assertStringNotContainsString("make('tenant_id')", File::get($this->resourcePath));
    }

    /**
     * The default sort must reference a column the class actually declares, or
     * ListQuery throws on the first request. This was a real bug: timestamps
     * were excluded from the table while `defaultSort('created_at')` was still
     * emitted.
     */
    public function test_the_default_sort_column_is_declared(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        $code = File::get($this->resourcePath);

        preg_match("/defaultSort\('([^']+)'/", $code, $matches);
        $this->assertNotEmpty($matches, 'No default sort was generated.');

        $this->assertStringContainsString(
            "make('{$matches[1]}')",
            $code,
            "Default sort [{$matches[1]}] is not declared as a column, so the resource throws on load."
        );
    }

    /** Without a policy the panel denies, and the screen renders nothing. */
    public function test_it_generates_a_policy_so_the_resource_is_authorized(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        $this->assertFileExists($this->policyPath);

        $policy = File::get($this->policyPath);

        $this->assertStringContainsString('final class UserPolicy', $policy);
        // The stub must say plainly that it needs review, or it becomes an
        // accidental grant nobody revisits.
        $this->assertStringContainsString('REVIEW THIS', $policy);
    }

    public function test_it_refuses_to_overwrite_without_force(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();
        $this->artisan('make:panel-resource', ['model' => 'User'])->assertFailed();
        $this->artisan('make:panel-resource', ['model' => 'User', '--force' => true])->assertSuccessful();
    }

    public function test_it_fails_clearly_for_a_missing_model(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'NoSuchModel'])->assertFailed();
    }
}
