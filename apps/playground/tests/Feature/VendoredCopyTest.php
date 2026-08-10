<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Support\VendoredCopy;
use Tests\TestCase;

/**
 * A path-installed package composer COPIED instead of symlinking.
 *
 * REPORTED FROM A REAL PORT. `"symlink": true` is composer's default where
 * symlinks work and it falls back to copying WITHOUT FAILING where they do not
 * - Windows without developer mode, a bind mount, a CI runner. The two are
 * indistinguishable from the application: classes autoload, pages return 200,
 * tests pass. What differs is everything after the first install, because the
 * running code is a snapshot.
 *
 * THE REFERENCE APP CANNOT DEMONSTRATE THIS. It symlinks, so the check is
 * silent here by design - which is exactly the condition under which a check
 * quietly stops working. These build both arrangements on disk instead.
 */
final class VendoredCopyTest extends TestCase
{
    private string $root;

    protected function setUp(): void
    {
        parent::setUp();

        $this->root = sys_get_temp_dir().'/alxtexhpanel-vendored-'.bin2hex(random_bytes(6));

        mkdir($this->root.'/source/src', recursive: true);
        mkdir($this->root.'/app/vendor/alxtexhpanel', recursive: true);

        file_put_contents(
            $this->root.'/source/composer.json',
            json_encode(['name' => 'alxtexh-enterprise/panel']),
        );
        file_put_contents($this->root.'/source/src/Thing.php', '<?php // v1');
    }

    protected function tearDown(): void
    {
        exec('rm -rf '.escapeshellarg($this->root));

        parent::tearDown();
    }

    /** The path repository is found, however the url is written. */
    public function test_it_finds_the_source_behind_a_path_repository(): void
    {
        $found = VendoredCopy::sourceFor(
            ['repositories' => [['type' => 'path', 'url' => 'source']]],
            $this->root,
            'alxtexh-enterprise/panel',
        );

        $this->assertSame($this->root.'/source', $found);
    }

    /**
     * INCLUDING A GLOB, which is the monorepo idiom - `packages/*` is one
     * repository entry covering every package in the tree, and reading it as a
     * literal directory finds nothing while looking like a package installed
     * from Packagist.
     */
    public function test_it_expands_a_glob_url(): void
    {
        rename($this->root.'/source', $this->root.'/packages-panel');
        mkdir($this->root.'/packages', recursive: true);
        rename($this->root.'/packages-panel', $this->root.'/packages/panel');

        $this->assertSame(
            $this->root.'/packages/panel',
            VendoredCopy::sourceFor(
                ['repositories' => [['type' => 'path', 'url' => 'packages/*']]],
                $this->root,
                'alxtexh-enterprise/panel',
            ),
        );
    }

    /** An ordinary install names no path repository and is not asked about. */
    public function test_a_packagist_install_has_no_source(): void
    {
        $this->assertNull(
            VendoredCopy::sourceFor(['require' => ['alxtexh-enterprise/panel' => '^0.5']], $this->root, 'alxtexh-enterprise/panel'),
        );
    }

    /**
     * A COPY THE SOURCE HAS MOVED PAST IS STALE. This is the whole failure: the
     * fix is in `source`, the application is running `vendor`, and every visible
     * signal says the fix is applied.
     */
    public function test_a_copy_older_than_its_source_is_stale(): void
    {
        $vendor = $this->root.'/app/vendor/alxtexh-enterprise/panel';

        mkdir($vendor.'/src', recursive: true);
        file_put_contents($vendor.'/src/Thing.php', '<?php // v1');
        touch($vendor.'/src/Thing.php', time() - 600);

        $this->assertTrue(VendoredCopy::isStale($this->root.'/source', $vendor));
    }

    /** A copy taken after the last edit is current, and says nothing. */
    public function test_a_current_copy_is_not_stale(): void
    {
        $vendor = $this->root.'/app/vendor/alxtexh-enterprise/panel';

        mkdir($vendor.'/src', recursive: true);
        touch($this->root.'/source/src/Thing.php', time() - 600);
        file_put_contents($vendor.'/src/Thing.php', '<?php // v1');

        $this->assertFalse(VendoredCopy::isStale($this->root.'/source', $vendor));
    }

    /**
     * AND A SYMLINK IS NEVER STALE - there is one copy, so comparing it with
     * itself would be a coin toss on timestamp resolution and would report the
     * arrangement that CANNOT have this problem.
     */
    public function test_a_symlinked_install_is_never_stale(): void
    {
        $vendor = $this->root.'/app/vendor/alxtexh-enterprise/panel';

        /*
         * CREATING A SYMLINK IS A PRIVILEGE ON WINDOWS, not a file operation.
         * Without Developer Mode or an elevated shell `symlink()` fails with
         * "Permission denied", and the test then errored on its own fixture -
         * reporting a defect in the code where there was only a machine that
         * will not hand out that privilege. Skipping says which it is.
         */
        if (@symlink($this->root.'/source', $vendor) === false) {
            $this->markTestSkipped(
                'This machine does not permit creating symlinks (Windows needs Developer Mode '
                .'or an elevated shell). The junction case is covered by '
                .'test_the_reference_apps_own_install_is_resolved_and_symlinked.',
            );
        }

        touch($this->root.'/source/src/Thing.php', time() + 600);

        $this->assertFalse(VendoredCopy::isStale($this->root.'/source', $vendor));
    }

    /**
     * AND IT RESOLVES THIS APPLICATION'S OWN PATH REPOSITORY.
     *
     * The check is silent here, and there are two reasons it could be: the
     * install is symlinked, or `sourceFor()` never found the source and every
     * install looks like Packagist. Only the first is correct, and from the
     * report they are identical - which is the failure mode this whole file is
     * about, arriving one level up.
     */
    public function test_the_reference_apps_own_install_is_resolved_and_symlinked(): void
    {
        $composer = json_decode((string) file_get_contents(base_path('composer.json')), true);

        $source = VendoredCopy::sourceFor((array) $composer, base_path(), 'alxtexh-enterprise/panel');

        $this->assertNotNull($source, 'The path repository is no longer found, so the check cannot fire.');
        $this->assertFileExists($source.'/src/PanelServiceProvider.php');

        /*
         * ASKED AS "IS IT THE SAME DIRECTORY", NOT "IS IT A SYMLINK". Composer
         * links with a JUNCTION on Windows and `is_link()` reports false for
         * every junction, so this assertion failed on a checkout that was
         * linked exactly as intended - the healthy arrangement accused of being
         * the broken one.
         */
        $this->assertTrue(
            VendoredCopy::isLinked($source, base_path('vendor/alxtexh-enterprise/panel')),
            'This checkout vendors a COPY of the package, so edits to packages/panel are not what runs.',
        );
    }

    /**
     * A WORKING TREE CARRIES THINGS `vendor/` NEVER RECEIVES - a `.git`
     * directory, `node_modules`, a coverage report - and comparing those would
     * report a stale copy on every run where somebody merely ran the tests.
     */
    public function test_a_non_php_file_in_the_source_is_not_a_change(): void
    {
        $vendor = $this->root.'/app/vendor/alxtexh-enterprise/panel';

        mkdir($vendor.'/src', recursive: true);
        touch($this->root.'/source/src/Thing.php', time() - 600);
        file_put_contents($vendor.'/src/Thing.php', '<?php // v1');

        mkdir($this->root.'/source/node_modules', recursive: true);
        file_put_contents($this->root.'/source/node_modules/index.js', 'noise');

        $this->assertFalse(VendoredCopy::isStale($this->root.'/source', $vendor));
    }
}
