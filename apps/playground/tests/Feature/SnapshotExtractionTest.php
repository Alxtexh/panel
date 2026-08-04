<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Jobs\RestoreBackup;
use Tests\TestCase;

/**
 * Opening a snapshot: the half of a restore that runs before anything is at risk.
 *
 * THIS WAS THE UNTESTED PART, and it is the part that decides whether a restore
 * is possible at all. Reading the zip off its disk, applying the archive
 * password, and finding the dump inside are three steps that produce the same
 * unhelpful outcome when any of them is wrong: "the snapshot could not be
 * extracted", from a backup that is perfectly fine.
 *
 * ENCRYPTION IS THE ONE THAT MATTERS. `BACKUP_ARCHIVE_PASSWORD` is set on
 * exactly the installations that most need a restore to work, `extractTo`
 * returns false with no explanation when the password is missing or wrong, and
 * nobody discovers any of this until the day they need the data. So there is a
 * case here that builds a real encrypted archive and opens it.
 *
 * ONLY THE DUMPS COME OUT. A snapshot also contains the whole application
 * directory; unpacking that would fill the temporary volume for no purpose,
 * since nothing here restores files.
 */
final class SnapshotExtractionTest extends TestCase
{
    private string $workspace;

    protected function setUp(): void
    {
        parent::setUp();

        if (! class_exists(\ZipArchive::class)) {
            $this->markTestSkipped('The zip extension is not installed.');
        }

        Storage::fake('local');

        $this->workspace = sys_get_temp_dir().'/panelkit-extract-'.bin2hex(random_bytes(4));
        mkdir($this->workspace, 0700, true);

        config()->set('backup.backup.temporary_directory', $this->workspace);
        config()->set('backup.backup.password', null);
    }

    protected function tearDown(): void
    {
        $this->remove($this->workspace);

        parent::tearDown();
    }

    private function remove(string $directory): void
    {
        if (! is_dir($directory)) {
            return;
        }

        $items = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($directory, \FilesystemIterator::SKIP_DOTS),
            \RecursiveIteratorIterator::CHILD_FIRST,
        );

        foreach ($items as $item) {
            $item->isDir() ? @rmdir($item->getPathname()) : @unlink($item->getPathname());
        }

        @rmdir($directory);
    }

    /**
     * Build a snapshot shaped like the ones Spatie writes, and put it on the disk.
     *
     * @param  array<string, string>  $entries
     */
    private function snapshot(array $entries, ?string $password = null): string
    {
        $local = $this->workspace.'/build-'.bin2hex(random_bytes(4)).'.zip';

        $zip = new \ZipArchive;
        $zip->open($local, \ZipArchive::CREATE);

        foreach ($entries as $name => $contents) {
            $zip->addFromString($name, $contents);

            if ($password !== null) {
                $zip->setPassword($password);
                $zip->setEncryptionName($name, \ZipArchive::EM_AES_256);
            }
        }

        $zip->close();

        $path = 'Laravel/2026-07-28-01-30-00.zip';
        Storage::disk('local')->put($path, (string) file_get_contents($local));
        @unlink($local);

        return $path;
    }

    /** Run the job's private unpack step and return the directory it produced. */
    private function extract(string $path): string
    {
        $job = new RestoreBackup($path);

        return (new \ReflectionMethod($job, 'extract'))->invoke($job, 'local', $path);
    }

    private function locateDump(string $workspace): ?string
    {
        $job = new RestoreBackup('x');

        return (new \ReflectionMethod($job, 'locateDump'))->invoke($job, $workspace);
    }

    /* ---------------------------------------------------------- the basics */

    public function test_a_snapshot_yields_its_database_dump(): void
    {
        $path = $this->snapshot([
            'db-dumps/sqlite-database.sql' => 'CREATE TABLE widgets (id INTEGER);',
            'app/Models/User.php' => '<?php // application code',
        ]);

        $directory = $this->extract($path);
        $dump = $this->locateDump($directory);

        $this->assertNotNull($dump, 'The dump was not found inside the snapshot.');
        $this->assertSame('CREATE TABLE widgets (id INTEGER);', file_get_contents($dump));
    }

    /**
     * THE APPLICATION DIRECTORY STAYS IN THE ARCHIVE.
     *
     * A real snapshot is the whole of `base_path()`. Unpacking it to reach one
     * `.sql` file would write hundreds of megabytes to the temporary volume - on
     * the machine that is mid-incident - to restore something this job does not
     * restore anyway.
     */
    public function test_only_the_dumps_are_unpacked(): void
    {
        $path = $this->snapshot([
            'db-dumps/sqlite-database.sql' => 'CREATE TABLE widgets (id INTEGER);',
            'app/Models/User.php' => '<?php // application code',
            'storage/app/private/scan.jpg' => 'not really a jpeg',
        ]);

        $directory = $this->extract($path);

        $this->assertFileExists($directory.'/db-dumps/sqlite-database.sql');
        $this->assertFileDoesNotExist($directory.'/app/Models/User.php');
        $this->assertFileDoesNotExist($directory.'/storage/app/private/scan.jpg');
    }

    /** The copy taken off the disk is not left behind next to the dump. */
    public function test_the_downloaded_archive_is_cleaned_up(): void
    {
        $path = $this->snapshot(['db-dumps/sqlite-database.sql' => 'CREATE TABLE a (b);']);

        $directory = $this->extract($path);

        $this->assertFileDoesNotExist($directory.'/snapshot.zip');
    }

    /**
     * A SNAPSHOT WITH NO DUMP IS RECOGNISED AS SUCH.
     *
     * `--only-db` in reverse: an archive of files only. The caller reports
     * "contains no database dump", which is a sentence somebody can act on -
     * unlike an import that runs against an empty file and succeeds.
     */
    public function test_a_snapshot_without_a_dump_yields_nothing(): void
    {
        $path = $this->snapshot(['app/Models/User.php' => '<?php']);

        $this->assertNull($this->locateDump($this->extract($path)));
    }

    /* -------------------------------------------------------- encryption */

    /**
     * AN ENCRYPTED SNAPSHOT OPENS WITH THE CONFIGURED PASSWORD.
     *
     * This is the case the whole file exists for. Installations that set
     * `BACKUP_ARCHIVE_PASSWORD` are the ones handling data worth encrypting, and
     * until now nothing proved their snapshots could be opened again.
     */
    public function test_an_encrypted_snapshot_opens_with_the_configured_password(): void
    {
        config()->set('backup.backup.password', 'correct horse battery staple');

        $path = $this->snapshot(
            ['db-dumps/sqlite-database.sql' => 'CREATE TABLE widgets (id INTEGER);'],
            password: 'correct horse battery staple',
        );

        $dump = $this->locateDump($this->extract($path));

        $this->assertNotNull($dump);
        $this->assertSame('CREATE TABLE widgets (id INTEGER);', file_get_contents($dump));
    }

    /**
     * THE WRONG PASSWORD FAILS LOUDLY, AND SAYS WHICH PROBLEM IT IS.
     *
     * `extractTo` returns false with no explanation when the password is wrong,
     * which reads as a corrupt backup - so somebody goes looking for a second
     * snapshot instead of for the password that changed. The message names the
     * likely cause.
     */
    public function test_the_wrong_password_is_reported_as_a_password_problem(): void
    {
        $path = $this->snapshot(
            ['db-dumps/sqlite-database.sql' => 'CREATE TABLE widgets (id INTEGER);'],
            password: 'the password it was made with',
        );

        config()->set('backup.backup.password', 'a different password entirely');

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessageMatches('/encrypted|password/i');

        $this->extract($path);
    }

    /* ------------------------------------------------------------- refusals */

    public function test_a_file_that_is_not_a_zip_is_refused(): void
    {
        $path = 'Laravel/2026-07-28-01-30-00.zip';
        Storage::disk('local')->put($path, 'this is not a zip archive at all');

        $this->expectException(\RuntimeException::class);
        $this->expectExceptionMessageMatches('/zip/i');

        $this->extract($path);
    }

    /**
     * EACH RESTORE GETS ITS OWN DIRECTORY.
     *
     * Two restores sharing a workspace would have the second reading the first's
     * dump - and on a retry that is exactly the wrong snapshot, applied
     * confidently.
     */
    public function test_two_extractions_do_not_share_a_directory(): void
    {
        $path = $this->snapshot(['db-dumps/sqlite-database.sql' => 'CREATE TABLE a (b);']);

        $this->assertNotSame($this->extract($path), $this->extract($path));
    }
}
