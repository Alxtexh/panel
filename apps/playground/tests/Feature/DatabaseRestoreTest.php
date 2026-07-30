<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Jobs\RestoreBackup;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Support\DatabaseRestorer;
use Tests\TestCase;

/**
 * A restore actually restores.
 *
 * THIS TEST EXISTS BECAUSE THE FAILURE MODE IS SILENCE. Every plausible mistake
 * in a restore - importing into a file nobody reads, leaving a stale write-ahead
 * log, keeping the old connection open across the swap - produces a job that
 * finishes cleanly, a page that says "succeeded", and a database that still
 * holds the data somebody was trying to replace. That is the same shape as
 * almost every other bug this project has had: it returns 200 and looks right.
 *
 * SO THE ASSERTION IS ON THE DATA, not on the exit code. A row that exists only
 * in the dump has to be readable afterwards, and a row that existed only before
 * has to be gone. Nothing weaker distinguishes a restore from a no-op.
 *
 * IT USES A REAL FILE ON DISK, not the in-memory database the rest of the suite
 * runs on - an in-memory database has nothing to rename over, which is why the
 * restorer refuses one outright rather than pretending.
 */
final class DatabaseRestoreTest extends TestCase
{
    private string $file;

    protected function setUp(): void
    {
        parent::setUp();

        $this->file = tempnam(sys_get_temp_dir(), 'panelkit-restore-').'.sqlite';

        touch($this->file);

        config()->set('database.connections.restore_target', [
            'driver' => 'sqlite',
            'database' => $this->file,
            'prefix' => '',
            'foreign_key_constraints' => true,
            /*
             * CARRIED OVER FROM THE REAL CONNECTION, exactly as an installation
             * configures it. `sqlite3` is not always on the PATH of the process
             * doing the work - that is the entire reason `dump_binary_path`
             * exists - and a test that quietly found it on PATH would pass here
             * and prove nothing about the queue worker, which is the one place
             * this has actually failed.
             */
            'dump' => config('database.connections.sqlite.dump', []),
        ]);

        config()->set('database.default', 'restore_target');

        DB::purge('restore_target');
    }

    protected function tearDown(): void
    {
        /*
         * A TEST THAT LEAVES THE APPLICATION DOWN takes every later test with
         * it, and the failure reads as something else entirely - a dozen
         * unrelated 503s with no obvious cause.
         */
        if (app()->isDownForMaintenance()) {
            Artisan::call('up');
        }

        DB::disconnect('restore_target');

        foreach ([$this->file, $this->file.'-wal', $this->file.'-shm', $this->file.'.restoring'] as $path) {
            @unlink($path);
        }

        parent::tearDown();
    }

    private function dump(string $sql): string
    {
        $path = tempnam(sys_get_temp_dir(), 'panelkit-dump-');

        file_put_contents($path, $sql);

        return $path;
    }

    /**
     * THE CENTRAL CASE. Data that exists only in the dump is readable after the
     * restore, and data that existed only before it is not.
     */
    public function test_the_database_is_replaced_by_the_dump(): void
    {
        DB::connection('restore_target')->statement('CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT)');
        DB::connection('restore_target')->table('widgets')->insert(['id' => 1, 'name' => 'before']);

        $dump = $this->dump(implode("\n", [
            'BEGIN TRANSACTION;',
            'CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT);',
            "INSERT INTO widgets VALUES(1,'restored');",
            "INSERT INTO widgets VALUES(2,'also restored');",
            'COMMIT;',
        ]));

        (new DatabaseRestorer)->restore($dump);

        $names = DB::connection('restore_target')->table('widgets')->orderBy('id')->pluck('name')->all();

        $this->assertSame(['restored', 'also restored'], $names);

        @unlink($dump);
    }

    /**
     * A BAD DUMP LEAVES THE LIVE DATABASE ALONE.
     *
     * This is what the build-alongside-then-rename approach buys. Replaying a
     * dump directly over the live file would leave it half-old and half-new, and
     * a truncated dump would leave it that way permanently - a corrupted
     * database rather than an unchanged one.
     */
    public function test_a_dump_that_fails_to_import_does_not_touch_the_live_database(): void
    {
        DB::connection('restore_target')->statement('CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT)');
        DB::connection('restore_target')->table('widgets')->insert(['id' => 1, 'name' => 'survivor']);

        $dump = $this->dump("CREATE TABLE oops (\nthis is not valid sql at all");

        try {
            (new DatabaseRestorer)->restore($dump);
            $this->fail('A malformed dump was accepted.');
        } catch (\RuntimeException) {
            // Expected.
        }

        $this->assertSame(
            'survivor',
            DB::connection('restore_target')->table('widgets')->where('id', 1)->value('name'),
        );

        @unlink($dump);
    }

    /**
     * A DUMP THAT PARTLY PARSES IS A FAILURE, NOT A PARTIAL SUCCESS.
     *
     * IT IS A DIFFERENT SHAPE FROM THE TWO ABOVE, and that is the point. Both
     * of those fail because the staged database comes out empty, which is a
     * check that cannot distinguish "nothing imported" from "half imported".
     * This dump's first two statements are valid, so the staged file is real and
     * populated - and the only thing standing between that and a reported
     * success is the client's exit code.
     *
     * The dangerous version of this bug is silent: a database missing whatever
     * came after the corruption, a screen that says "restored", and nowhere to
     * look. What is asserted is therefore the live data afterwards, not the
     * error - a restore that threw and still swapped the file would pass a
     * weaker test.
     */
    public function test_a_dump_that_only_partly_parses_is_refused(): void
    {
        DB::connection('restore_target')->statement('CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT)');
        DB::connection('restore_target')->table('widgets')->insert(['id' => 1, 'name' => 'survivor']);

        $dump = $this->dump(implode("\n", [
            'CREATE TABLE widgets (id INTEGER PRIMARY KEY, name TEXT);',
            "INSERT INTO widgets VALUES(1,'restored');",
            // Valid so far. Now something the parser rejects, as a truncated or
            // corrupt dump would produce partway through.
            'INSERT INTO widgets VALUES(2, ;;;',
            "INSERT INTO widgets VALUES(3,'never arrives');",
        ]));

        try {
            (new DatabaseRestorer)->restore($dump);
            $this->fail('A dump with a broken statement in the middle was accepted.');
        } catch (\RuntimeException) {
            // Expected.
        }

        $this->assertSame(
            'survivor',
            DB::connection('restore_target')->table('widgets')->where('id', 1)->value('name'),
            'The live database was replaced from a dump that did not fully import.',
        );

        @unlink($dump);
    }

    /** And the half-built file is not left lying beside the live one. */
    public function test_a_failed_restore_cleans_up_after_itself(): void
    {
        DB::connection('restore_target')->statement('CREATE TABLE widgets (id INTEGER PRIMARY KEY)');

        $dump = $this->dump('this is not sql');

        try {
            (new DatabaseRestorer)->restore($dump);
        } catch (\RuntimeException) {
            // Expected.
        }

        $this->assertFileDoesNotExist($this->file.'.restoring');

        @unlink($dump);
    }

    public function test_a_missing_dump_is_refused_rather_than_treated_as_empty(): void
    {
        $this->expectException(\RuntimeException::class);

        (new DatabaseRestorer)->restore('/no/such/dump.sql');
    }

    /* ------------------------------------------------- closing the panel */

    /**
     * THE PANEL IS SHUT WHILE THE SWAP HAPPENS.
     *
     * Without it a restore silently loses work: between the safety backup and
     * the rename, everybody still using the panel writes into the file that is
     * about to be renamed away. Nothing errors, the operator sees "restored",
     * and somebody else's afternoon is gone with no trace of where.
     *
     * ASSERTED FROM INSIDE THE SWAP, not around it. Checking afterwards would
     * pass on an implementation that closed and reopened the panel before
     * touching the database at all - which is the whole failure being guarded
     * against.
     */
    public function test_the_panel_is_closed_while_the_database_is_swapped(): void
    {
        $job = new RestoreBackup('x.zip', 'Tester', 'secret-token');

        $closed = new \ReflectionMethod($job, 'withPanelClosed');

        $wasDownDuring = null;

        $closed->invoke($job, function () use (&$wasDownDuring): void {
            $wasDownDuring = app()->isDownForMaintenance();
        });

        $this->assertTrue($wasDownDuring, 'The database was swapped with the panel still open.');
        $this->assertFalse(app()->isDownForMaintenance(), 'The panel was left down afterwards.');
    }

    /**
     * AND IT COMES BACK UP WHEN THE RESTORE THROWS.
     *
     * "The restore failed" is recoverable. "The restore failed and nobody can
     * sign in to find out" is an outage, and it is the state a missing `finally`
     * leaves behind.
     */
    public function test_the_panel_reopens_even_when_the_restore_fails(): void
    {
        $job = new RestoreBackup('x.zip', 'Tester', 'secret-token');

        $closed = new \ReflectionMethod($job, 'withPanelClosed');

        try {
            $closed->invoke($job, function (): void {
                throw new \RuntimeException('the import blew up');
            });

            $this->fail('The failure was swallowed.');
        } catch (\RuntimeException) {
            // Expected: the caller still learns it failed.
        }

        $this->assertFalse(app()->isDownForMaintenance(), 'The installation was left dark.');
    }

    /**
     * THE CLIENT IS ASKED TO STOP AT THE FIRST ERROR.
     *
     * WHAT THIS DOES AND DOES NOT PROVE, plainly. Without `-bail` the sqlite3
     * client reports a parse error and carries on with the remaining statements,
     * so a truncated dump builds a valid database missing whatever failed. On
     * the builds available here a parse error ALSO sets the exit code, which the
     * restorer checks - so deleting the flag left every behavioural test green,
     * and I said so rather than claiming coverage I did not have.
     *
     * This asserts the request rather than the response: that the code passes
     * `-bail`. Whether a given sqlite3 honours it is a property of that build;
     * whether we ask is a property of ours, and only one of those is ours to
     * test.
     */
    public function test_the_sqlite_import_asks_the_client_to_stop_at_the_first_error(): void
    {
        $command = (new DatabaseRestorer)->sqliteCommand('/tmp/staged.sqlite');

        $this->assertContains('-bail', $command);
        $this->assertSame('/tmp/staged.sqlite', end($command));
    }

    /** And it honours the configured binary path, like the dump side. */
    public function test_the_sqlite_binary_honours_the_configured_path(): void
    {
        config()->set('database.connections.restore_target.dump', [
            'dump_binary_path' => '/opt/sqlite/bin',
        ]);

        DB::purge('restore_target');

        $this->assertSame(
            '/opt/sqlite/bin/sqlite3',
            (new DatabaseRestorer)->sqliteCommand('/tmp/x')[0],
        );
    }

    /* ---------------------------------------------------------- mysql */

    /**
     * THE MYSQL PIPE ITSELF IS NOT TESTED, AND CANNOT BE HERE.
     *
     * There is no mysqld on this machine, no `pdo_mysql`, and no way to install
     * either without a password. Claiming coverage of the import would be a lie,
     * and the honest alternative is to test everything that decides WHAT gets
     * imported - which is where the mistakes actually live. The pipe is one
     * call; the arguments are five decisions.
     */
    public function test_the_mysql_command_names_the_right_server_and_database(): void
    {
        config()->set('database.connections.mysql_target', [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'port' => 3307,
            'database' => 'panel_production',
            'username' => 'panel',
            'password' => '',
        ]);

        config()->set('database.default', 'mysql_target');
        DB::purge('mysql_target');

        $command = (new DatabaseRestorer)->mysqlCommand();

        $this->assertContains('--host=127.0.0.1', $command);
        $this->assertContains('--port=3307', $command);
        $this->assertContains('--user=panel', $command);
        $this->assertSame('panel_production', end($command));

        // No password configured means no `--password` at all - passing an empty
        // one makes the client prompt, and a restore that blocks on a prompt in
        // a queue worker hangs until the timeout with no output.
        $this->assertEmpty(array_filter(
            $command,
            static fn (string $arg): bool => str_starts_with($arg, '--password'),
        ));
    }

    public function test_a_configured_password_is_passed(): void
    {
        config()->set('database.connections.mysql_target', [
            'driver' => 'mysql',
            'host' => 'localhost',
            'port' => 3306,
            'database' => 'panel',
            'username' => 'panel',
            'password' => 'hunter2',
        ]);

        config()->set('database.default', 'mysql_target');
        DB::purge('mysql_target');

        $this->assertContains('--password=hunter2', (new DatabaseRestorer)->mysqlCommand());
    }

    /**
     * `--` ENDS THE OPTIONS, so a database name is never read as a flag.
     *
     * Without it a name beginning with a dash comes back as "unknown option",
     * which sends whoever is mid-restore looking at their command line instead
     * of at their database name.
     */
    public function test_the_database_name_is_separated_from_the_options(): void
    {
        config()->set('database.connections.mysql_target', [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'database' => '-weird-name',
            'username' => 'root',
            'password' => '',
        ]);

        config()->set('database.default', 'mysql_target');
        DB::purge('mysql_target');

        $command = (new DatabaseRestorer)->mysqlCommand();

        $this->assertSame('--', $command[count($command) - 2]);
        $this->assertSame('-weird-name', end($command));
    }

    /**
     * IT HONOURS THE SAME BINARY PATH THE DUMP SIDE USES.
     *
     * `dump_binary_path` exists because a queue worker has a different PATH from
     * the shell. A restore that ignored it would work when tested by hand and
     * fail only from the worker - the hardest kind of failure to reproduce.
     */
    public function test_the_mysql_binary_honours_the_configured_path(): void
    {
        config()->set('database.connections.mysql_target', [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'database' => 'panel',
            'username' => 'root',
            'password' => '',
            'dump' => ['dump_binary_path' => '/opt/mysql/bin'],
        ]);

        config()->set('database.default', 'mysql_target');
        DB::purge('mysql_target');

        $this->assertSame('/opt/mysql/bin/mysql', (new DatabaseRestorer)->mysqlCommand()[0]);
    }

    /* ------------------------------------------------------------ refusals */

    /**
     * A REMOTE HOST IS REFUSED, and this is the guard that matters most.
     *
     * A panel that will restore over whatever host its config names is one
     * environment file away from replacing production with a staging snapshot.
     */
    public function test_a_remote_database_host_is_refused(): void
    {
        config()->set('database.connections.remote_target', [
            'driver' => 'mysql',
            'host' => 'db.example.com',
            'port' => 3306,
            'database' => 'panel',
            'username' => 'root',
            'password' => '',
        ]);

        config()->set('database.default', 'remote_target');
        DB::purge('remote_target');

        $refusal = (new DatabaseRestorer)->refusal();

        $this->assertNotNull($refusal);
        $this->assertStringContainsString('db.example.com', $refusal);
    }

    /** A local one is not. */
    public function test_a_local_database_host_is_permitted(): void
    {
        config()->set('database.connections.local_target', [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'port' => 3306,
            'database' => 'panel',
            'username' => 'root',
            'password' => '',
        ]);

        config()->set('database.default', 'local_target');
        DB::purge('local_target');

        $this->assertNull((new DatabaseRestorer)->refusal());
    }

    /** An in-memory database has nothing to rename over, and says so. */
    public function test_an_in_memory_database_is_refused(): void
    {
        config()->set('database.connections.memory_target', [
            'driver' => 'sqlite',
            'database' => ':memory:',
            'prefix' => '',
        ]);

        config()->set('database.default', 'memory_target');
        DB::purge('memory_target');

        $this->assertNotNull((new DatabaseRestorer)->refusal());
    }

    public function test_an_unsupported_driver_is_refused_by_name(): void
    {
        config()->set('database.connections.pg_target', [
            'driver' => 'pgsql',
            'host' => '127.0.0.1',
            'database' => 'panel',
            'username' => 'postgres',
            'password' => '',
        ]);

        config()->set('database.default', 'pg_target');
        DB::purge('pg_target');

        $this->assertStringContainsString('pgsql', (string) (new DatabaseRestorer)->refusal());
    }
}
