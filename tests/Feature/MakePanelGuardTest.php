<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\TestCase;

/**
 * `make:panel --new-guard`, and the silent breakage it exists to end.
 *
 * A PORTAL IS TWO HALVES AND THE COMMAND ONLY EVER WROTE ONE. The generated
 * provider declares `->guard('resellers')` and `auth:resellers`; Laravel
 * resolves that name out of `config/auth.php`, which the generator never
 * touched. So `make:panel reseller --guard=resellers` reported success, printed
 * `Guard  resellers` in its summary as though stating a fact, and the portal
 * answered its first request with `Auth guard [resellers] is not defined.`
 *
 * THE REFERENCE APPLICATION SHOWS THE SHAPE OF THE MISSING WORK: its `customers`
 * and `superadmins` guards, and their two providers, are hand-written into
 * `config/auth.php` because there was no other way to get them.
 *
 * These tests write to a REAL config file in a temporary directory and read it
 * back through PHP's own parser. String surgery on somebody's config is the kind
 * of thing that looks right and produces a file that no longer parses, and an
 * assertion on the file's TEXT would not notice.
 */
final class MakePanelGuardTest extends TestCase
{
    private string $config;

    /**
     * THE SKELETON'S OWN `config/auth.php`, PUT BACK EXACTLY.
     *
     * An earlier version of this file `unlink`ed the config in `tearDown`, on
     * the assumption that it had created it. It had not - Testbench ships one,
     * and every test in the package boots against it. Deleting it left
     * `auth.defaults.guard` empty and 189 of 333 tests failed with
     * `Auth guard [] is not defined.`, in files that have nothing to do with
     * this one.
     *
     * IT SURVIVED A FULL GREEN RUN BEFORE DOING THAT, because the damage lands
     * on the NEXT run rather than the one that causes it - and `vendor/` is
     * gitignored, so there is no diff to notice and no checkout to restore from.
     * It took a `composer reinstall` to undo.
     *
     * So: snapshot, restore, never delete.
     */
    private ?string $originalConfig = null;

    protected function setUp(): void
    {
        parent::setUp();

        $this->config = config_path('auth.php');

        if (! is_dir(dirname($this->config))) {
            mkdir(dirname($this->config), 0777, true);
        }

        $this->originalConfig = file_exists($this->config)
            ? (string) file_get_contents($this->config)
            : null;

        /*
         * THE SKELETON IS SHARED AND IT DOES NOT RESET ITSELF. Testbench runs
         * against one application directory inside `vendor/`, so anything a
         * generator writes there is still there for the next test, the next
         * file, and the next run of the suite.
         *
         * THAT IS NOT A TIDINESS POINT. `make:panel` refuses to overwrite an
         * existing provider - correctly - so the second test to generate the
         * same portal got `already exists` and a non-zero exit. Every assertion
         * in this file failed that way before the cleanup existed, and would
         * have passed on a fresh checkout and failed on a second run, which is
         * the worst way for a test to be wrong.
         *
         * CLEANED BEFORE AS WELL AS AFTER, because a run killed part-way leaves
         * the same debris and a suite that only tidies up on exit inherits it.
         */
        $this->cleanSkeleton();

        file_put_contents($this->config, $this->stockAuthConfig());
    }

    protected function tearDown(): void
    {
        if ($this->originalConfig !== null) {
            file_put_contents($this->config, $this->originalConfig);
        } elseif (file_exists($this->config)) {
            unlink($this->config);
        }

        $this->cleanSkeleton();

        parent::tearDown();
    }

    /** Everything `make:panel` writes, for the portals this file generates. */
    private function cleanSkeleton(): void
    {
        foreach (['Reseller', 'Platform', 'Ops', 'Admin'] as $studly) {
            @unlink(app_path("Providers/Panels/{$studly}PanelProvider.php"));
            @unlink(base_path("tests/Feature/{$studly}PanelIsolationTest.php"));
            @unlink(app_path("Panel/{$studly}/Pages/DirectoryPage.php"));

            $resources = app_path("Panel/{$studly}");

            if (is_dir($resources)) {
                @rmdir($resources.'/Pages');
                @rmdir($resources.'/Resources');
                @rmdir($resources.'/Widgets');
                @rmdir($resources);
            }
        }

        @unlink(app_path('Panel/Pages/DirectoryPage.php'));

        /*
         * `bootstrap/providers.php` IS APPENDED TO, so left alone it accumulates
         * references to provider classes this method has just deleted - and the
         * skeleton then boots them for every OTHER test in the package.
         */
        $providers = base_path('bootstrap/providers.php');

        if (file_exists($providers)) {
            file_put_contents($providers, "<?php\n\nreturn [\n    //\n];\n");
        }
    }

    /** The Laravel skeleton's shape, trimmed to the two arrays that matter. */
    private function stockAuthConfig(): string
    {
        return <<<'PHP'
<?php

return [
    'defaults' => [
        'guard' => 'web',
        'passwords' => 'users',
    ],

    'guards' => [
        'web' => [
            'driver' => 'session',
            'provider' => 'users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => App\Models\User::class,
        ],
    ],
];
PHP;
    }

    /** @return array<string, mixed> */
    private function written(): array
    {
        /*
         * READ BACK THROUGH PHP'S PARSER, not through a regex. A config this
         * command has edited into a syntax error is the failure that matters,
         * and it is invisible to any assertion on the file's text.
         */
        return require $this->config;
    }

    public function test_it_writes_both_the_guard_and_its_provider(): void
    {
        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'resellers', '--new-guard' => true])
            ->assertSuccessful();

        $auth = $this->written();

        /*
         * BOTH, OR THE PORTAL IS EXACTLY AS BROKEN. A guard naming a provider
         * that does not exist fails at the same moment with a near-identical
         * message - `Auth user provider [resellers] is not defined.` - so the
         * half-written outcome is the one to assert against.
         */
        $this->assertSame(
            ['driver' => 'session', 'provider' => 'resellers'],
            $auth['guards']['resellers'] ?? null,
        );

        $this->assertSame(
            'App\Models\User',
            $auth['providers']['resellers']['model'] ?? null,
        );
    }

    /** What was already in the file has to survive being edited around. */
    public function test_it_leaves_the_existing_guard_alone(): void
    {
        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'resellers', '--new-guard' => true])
            ->assertSuccessful();

        $auth = $this->written();

        $this->assertSame(['driver' => 'session', 'provider' => 'users'], $auth['guards']['web'] ?? null);
        $this->assertSame('App\Models\User', $auth['providers']['users']['model'] ?? null);
        $this->assertSame('web', $auth['defaults']['guard'] ?? null);
    }

    /**
     * A TENANT PORTAL GETS `panel-tenant`, AND THE DEFAULT IS THE POINT.
     *
     * `eloquent` on a tenant-scoped portal looks credentials up across EVERY
     * organisation, so a password valid in one opens the portal against
     * another. It shows no symptom - signing in is what it looks like.
     * `panel-tenant` finds nobody when no tenant resolves, which is loud and
     * safe. Defaulting to the leak would make the flag worse than no flag.
     */
    public function test_a_tenant_portal_looks_users_up_within_its_tenant(): void
    {
        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'resellers', '--new-guard' => true])
            ->assertSuccessful();

        $this->assertSame('panel-tenant', $this->written()['providers']['resellers']['driver'] ?? null);
    }

    /** A central portal is meant to see across, so `eloquent` is correct there. */
    public function test_a_central_portal_looks_users_up_across_organisations(): void
    {
        $this->artisan('make:panel', [
            'id' => 'platform', '--guard' => 'operators', '--new-guard' => true, '--central' => true,
        ])->assertSuccessful();

        $this->assertSame('eloquent', $this->written()['providers']['operators']['driver'] ?? null);
    }

    public function test_the_model_can_be_named(): void
    {
        $this->artisan('make:panel', [
            'id' => 'reseller',
            '--guard' => 'resellers',
            '--new-guard' => true,
            '--guard-model' => 'App\Models\Reseller',
        ])->assertSuccessful();

        $this->assertSame('App\Models\Reseller', $this->written()['providers']['resellers']['model'] ?? null);
    }

    /**
     * RE-RUNNING MUST NOT APPEND A SECOND KEY. PHP keeps the LAST duplicate in
     * an array literal, so a second write would silently replace a guard
     * somebody had since hand-edited - the generator quietly undoing their work
     * on a command they ran for an unrelated reason.
     */
    public function test_running_twice_does_not_duplicate_the_guard(): void
    {
        foreach ([false, true] as $force) {
            $this->artisan('make:panel', array_filter([
                'id' => 'reseller', '--guard' => 'resellers', '--new-guard' => true, '--force' => $force,
            ]))->assertSuccessful();
        }

        /*
         * TWO, NOT ONE: the key appears once under `guards` and once under
         * `providers`, which is the matched pair a guard is made of. Before the
         * duplicate check worked this was FOUR - both blocks written again on
         * the second run.
         */
        $this->assertSame(
            2,
            substr_count((string) file_get_contents($this->config), "'resellers' => ["),
            'The blocks were written twice. PHP keeps the last duplicate, so a hand-edited guard would be replaced.'
        );

        // And the file still means what it should, rather than merely parsing.
        $auth = $this->written();
        $this->assertSame('resellers', $auth['guards']['resellers']['provider'] ?? null);
        $this->assertSame('panel-tenant', $auth['providers']['resellers']['driver'] ?? null);
    }

    /**
     * THE WARNING IS THE HALF THAT HELPS SOMEBODY WHO NEVER HEARD OF THE FLAG,
     * and they are the person the old output misled: the summary printed the
     * guard's name, which reads as confirmation it exists.
     */
    public function test_it_warns_when_the_named_guard_does_not_exist(): void
    {
        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'resellers'])
            ->expectsOutputToContain('auth.guards.resellers does not exist')
            ->assertSuccessful();

        $this->assertArrayNotHasKey(
            'resellers',
            $this->written()['guards'],
            'Without --new-guard the command must warn, not write.'
        );
    }

    /** An existing guard is the ordinary case and must stay quiet. */
    public function test_it_says_nothing_when_the_guard_already_exists(): void
    {
        $this->artisan('make:panel', ['id' => 'ops', '--guard' => 'web'])
            ->doesntExpectOutputToContain('does not exist')
            ->assertSuccessful();
    }

    /**
     * A FILE IT DOES NOT RECOGNISE IS A REFUSAL PLUS INSTRUCTIONS, never a
     * guess. Appending to a restructured config would produce something that no
     * longer parses, and the application would be down rather than incomplete -
     * strictly worse than four lines telling somebody what to paste.
     */
    public function test_an_unrecognised_config_is_refused_with_instructions(): void
    {
        file_put_contents($this->config, "<?php\n\nreturn ['defaults' => ['guard' => 'web']];\n");

        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'resellers', '--new-guard' => true])
            ->expectsOutputToContain('Could not add the [resellers] guard automatically')
            ->assertSuccessful();

        // Still parses, and still says exactly what it said before.
        $this->assertSame(['defaults' => ['guard' => 'web']], $this->written());
    }

    public function test_admin_keeps_operations_and_extra_portals_drop_them(): void
    {
        $this->artisan('make:panel', ['id' => 'admin', '--force' => true])
            ->assertSuccessful();

        $admin = (string) file_get_contents(app_path('Providers/Panels/AdminPanelProvider.php'));

        $this->assertStringContainsString("'assistant-settings'", $admin);
        $this->assertStringNotContainsString("'operations',", $admin);
        $this->assertStringNotContainsString("'documents',", $admin);

        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'web', '--force' => true])
            ->assertSuccessful();

        $reseller = (string) file_get_contents(app_path('Providers/Panels/ResellerPanelProvider.php'));

        $this->assertStringContainsString("'operations',", $reseller);
        $this->assertStringContainsString("'documents',", $reseller);
        $this->assertStringContainsString("'trash',", $reseller);
    }

    public function test_extra_portals_get_a_chrome_directory_page(): void
    {
        $this->artisan('make:panel', ['id' => 'reseller', '--guard' => 'web', '--force' => true])
            ->assertSuccessful();

        $path = app_path('Panel/Reseller/Pages/DirectoryPage.php');

        $this->assertFileExists($path);

        $contents = (string) file_get_contents($path);

        $this->assertStringContainsString('extends AlxtexhpanelDirectory', $contents);
        $this->assertStringContainsString("protected static string \$panel = 'reseller'", $contents);
        $this->assertStringContainsString('chromeSections()', $contents);
        $this->assertStringNotContainsString('extends Page', $contents);
        $this->assertStringNotContainsString("'/clients'", $contents);
        $this->assertStringNotContainsString("'/routers'", $contents);

        $provider = (string) file_get_contents(app_path('Providers/Panels/ResellerPanelProvider.php'));

        $this->assertStringContainsString('discoverPages', $provider);
        $this->assertStringContainsString('Panel/Reseller/Pages', $provider);
    }

    public function test_admin_directory_uses_shared_pages_tree(): void
    {
        $this->artisan('make:panel', ['id' => 'admin', '--force' => true])
            ->assertSuccessful();

        $path = app_path('Panel/Pages/DirectoryPage.php');

        $this->assertFileExists($path);
        $this->assertStringContainsString("protected static string \$panel = 'admin'", (string) file_get_contents($path));

        $provider = (string) file_get_contents(app_path('Providers/Panels/AdminPanelProvider.php'));

        $this->assertStringNotContainsString('discoverPages', $provider);
    }
}
