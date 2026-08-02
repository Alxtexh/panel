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
 * VALID, DISCOVERED without a registration line, and AUTHORIZED - the panel
 * denies any ability whose model has no policy, so a generator that skipped the
 * policy would emit a resource rendering an empty table with no explanation.
 */
final class GeneratorTest extends TestCase
{
    use RefreshDatabase;

    private string $resourcePath;

    private string $policyPath;

    /**
     * Anything that was already at those paths, held for restoration.
     *
     * @var array<string, string>
     */
    private array $preserved = [];

    protected function setUp(): void
    {
        parent::setUp();

        $this->resourcePath = app_path('Panel/Resources/UserResource.php');
        $this->policyPath = app_path('Policies/UserPolicy.php');

        /*
         * THIS TEST WRITES INTO THE APPLICATION'S OWN SOURCE TREE, because that
         * is where the generator writes and there is no honest way to test it
         * elsewhere. Which means its fixture paths are REAL paths that real code
         * can legitimately occupy.
         *
         * It did. `UserResource` was written as an actual resource, and this
         * test deleted it - twice - because `cleanUp()` removed the path in both
         * setUp and tearDown without ever asking whether something was there.
         * Nothing failed: the suite passed, the file was gone, and the panel
         * simply stopped having a users screen.
         *
         * So the contents are preserved and put back. A test may own a path for
         * the length of a test; it may not own it permanently.
         */
        $this->preserve($this->resourcePath);
        $this->preserve($this->policyPath);

        $this->cleanUp();
    }

    protected function tearDown(): void
    {
        $this->cleanUp();
        $this->restore();

        parent::tearDown();
    }

    private function preserve(string $path): void
    {
        if (File::exists($path)) {
            $this->preserved[$path] = File::get($path);
        }
    }

    private function restore(): void
    {
        foreach ($this->preserved as $path => $contents) {
            File::ensureDirectoryExists(dirname($path));
            File::put($path, $contents);
        }

        $this->preserved = [];
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
        $this->assertStringContainsString('protected static string $model = User::class;', $code);

        // Introspected from the real users table.
        $this->assertStringContainsString("TextColumn::make('name')", $code);
        $this->assertStringContainsString("TextColumn::make('email')", $code);
    }

    /** A generated file that does not parse is worse than no file. */
    public function test_the_generated_class_is_valid_php(): void
    {
        $this->artisan('make:panel-resource', ['model' => 'User', '--generate' => true])->assertSuccessful();

        exec('php -l '.escapeshellarg($this->resourcePath).' 2>&1', $output, $status);

        $this->assertSame(0, $status, 'Generated resource has a syntax error: '.implode("\n", $output));
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

        /*
         * IT IS NOT AN ACCIDENTAL GRANT, and this assertion changed shape once
         * the package began shipping a base policy.
         *
         * The stub used to write five methods that all `return true` and a
         * warning telling you to review it. This test then asserted the WARNING
         * was present - guarding the apology rather than the behaviour - and a
         * generated resource really was readable by every authenticated user
         * until somebody acted on a line of console output.
         *
         * Extending `TenantResourcePolicy` makes it deny by construction:
         * tenancy and the role are both checked, and the abilities do not exist
         * until `panel:permissions sync` creates them. So what is pinned now is
         * the base class and the ABSENCE of a blanket allow.
         */
        $this->assertStringContainsString('extends TenantResourcePolicy', $policy);

        $this->assertStringNotContainsString(
            'return true;',
            $policy,
            'The generated policy grants something unconditionally.',
        );
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

    /**
     * THE COMMENTED ACTIONS COMPILE WHEN UNCOMMENTED.
     *
     * A stub whose whole promise is "uncomment this" fails in exactly one way:
     * it sits somewhere the chain cannot take it, and the person following the
     * instruction gets a parse error from a file the generator wrote. That is a
     * worse first hour than no example at all, and nothing else would catch it -
     * a comment is valid PHP however wrong it is.
     */
    public function test_the_commented_actions_are_valid_where_they_sit(): void
    {
        $this->artisan('make:panel-resource User --generate --force')->assertSuccessful();

        $code = (string) file_get_contents(app_path('Panel/Resources/UserResource.php'));

        /*
         * WHAT THE INSTRUCTION SAYS TO DO, mechanically: take the block's
         * example lines, drop the ` * ` each carries, and leave them where the
         * comment sat. Only the example is touched - the prose around it is
         * dropped with the comment markers, exactly as a person would.
         */
        $pattern = '/^([ ]*)\/\*\n(?:[ ]*\*.*\n)*?[ ]*\* '
            .'(->recordActions.*\n(?:[ ]*\*.*\n)*?[ ]*\* \]\)\n)'
            // The blank comment line that ends the example and starts the
            // prose - without it the lazy match stops at the FIRST `])` and
            // the bulk half is silently dropped from what gets compiled.
            .'[ ]*\*\n(?:[ ]*\*.*\n)*?[ ]*\*\/\n/m';

        $this->assertSame(
            1,
            preg_match($pattern, $code, $block),
            'The generated resource carries no commented action example where one is expected.',
        );

        $uncommented = str_replace(
            $block[0],
            preg_replace('/^ *\* ?/m', $block[1], rtrim($block[2]))."\n",
            $code,
        );

        $this->assertStringContainsString('->recordActions([', $uncommented);
        $this->assertStringContainsString('->bulkActions([', $uncommented);

        $file = tempnam(sys_get_temp_dir(), 'panelkit').'.php';
        file_put_contents($file, $uncommented);

        exec('php -l '.escapeshellarg($file).' 2>&1', $output, $status);
        unlink($file);

        $this->assertSame(
            0,
            $status,
            "Uncommenting the generated example does not parse:\n".implode("\n", $output),
        );
    }
}
