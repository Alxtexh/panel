<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Support\DatabaseRestorer;
use Symfony\Component\Process\Process;
use Tests\TestCase;

/**
 * The MySQL restore, actually run.
 *
 * IT WAS THE LONGEST-STANDING HOLE IN THIS FEATURE, and I said so repeatedly:
 * `restoreMysql()` was written, reviewed and never once executed, because this
 * machine had no mysqld, no `pdo_mysql` and no passwordless sudo. Command
 * construction was tested; the pipe was not. It is the code most likely to be
 * wrong and least likely to be noticed, because the person who needs it is
 * mid-incident.
 *
 * SO A SERVER GETS INSTALLED WITHOUT ROOT. `apt-get download` needs no
 * privileges, and a `.deb` is an archive - unpacked into a user prefix, MariaDB
 * runs perfectly well on a high port bound to 127.0.0.1. See
 * `tests/bin/mysql-fixture.sh`. Nothing here touches a system service and
 * nothing reaches a remote host.
 *
 * IT SKIPS RATHER THAN FAILS when that server is not running. A test that
 * demands infrastructure nobody else has is a test that gets deleted; one that
 * says why it skipped is one somebody can choose to satisfy. The skip message
 * names the script.
 *
 * WHAT IT ASSERTS IS THE DATA. Every plausible mistake in a restore - importing
 * into the wrong database, a dump that half-applies, a connection that keeps
 * serving the old rows - finishes cleanly and reports success. Only reading the
 * rows afterwards distinguishes a restore from a no-op.
 */
final class MysqlRestoreTest extends TestCase
{
    private const HOST = '127.0.0.1';

    private const PORT = 3399;

    private const DATABASE = 'alxtexhpanel_restore';

    private string $client;

    protected function setUp(): void
    {
        parent::setUp();

        if (! extension_loaded('pdo_mysql')) {
            /*
             * THE COMMAND MATTERS, AND IT IS NOT `artisan test`.
             *
             * This message used to name one, and following it could never
             * work: `artisan test` re-spawns PHPUnit as a SUBPROCESS, so the
             * `-d extension=` flags that load pdo_mysql are consumed by the
             * artisan process and never reach the one running the tests. The
             * suite skipped, the message said how to fix it, doing what the
             * message said changed nothing, and there was no way to tell which
             * of the two had gone wrong.
             *
             * A skip is only useful if the instruction in it works. This one
             * runs PHPUnit directly, which is where the extension has to land.
             */
            $this->markTestSkipped(
                'pdo_mysql is not loaded. Start the fixture and run PHPUnit directly - '
                .'`artisan test` re-spawns PHPUnit and loses the -d flags: '
                .'eval "$(tests/bin/mysql-fixture.sh env)" && '
                .'php $ALXTEXHPANEL_PHP_FLAGS vendor/bin/phpunit --filter=MysqlRestore'
            );
        }

        $this->client = (string) (getenv('ALXTEXHPANEL_MYSQL_BIN') ?: 'mysql');

        if (! $this->serverIsUp()) {
            $this->markTestSkipped(
                'No MariaDB on 127.0.0.1:'.self::PORT.'. Start one with '
                .'`tests/bin/mysql-fixture.sh start`, then run PHPUnit directly.'
            );
        }

        /*
         * A CONNECTION THAT REALLY POINTS AT IT. The restorer reads the ACTIVE
         * connection rather than `.env` - that is the guard against restoring
         * over the wrong host - so the test has to make the connection real
         * rather than describe one.
         */
        config()->set('database.connections.mysql_fixture', [
            'driver' => 'mysql',
            'host' => self::HOST,
            'port' => self::PORT,
            'database' => self::DATABASE,
            'username' => 'root',
            'password' => '',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            // The same setting the dump side uses, so the restore looks for the
            // client where a queue worker would find it.
            'dump' => ['dump_binary_path' => dirname($this->client)],
        ]);

        config()->set('database.default', 'mysql_fixture');
        DB::purge('mysql_fixture');

        $this->sql('DROP TABLE IF EXISTS widgets');
    }

    protected function tearDown(): void
    {
        if (extension_loaded('pdo_mysql') && $this->serverIsUp()) {
            $this->sql('DROP TABLE IF EXISTS widgets');
        }

        DB::disconnect('mysql_fixture');

        parent::tearDown();
    }

    private function serverIsUp(): bool
    {
        $probe = new Process([$this->client, '-h', self::HOST, '-P', (string) self::PORT, '-u', 'root', '-e', 'SELECT 1']);
        $probe->setTimeout(5);
        $probe->run();

        return $probe->isSuccessful();
    }

    /** Run a statement through the CLIENT, not through Eloquent. */
    private function sql(string $statement): string
    {
        $process = new Process([
            $this->client, '-h', self::HOST, '-P', (string) self::PORT,
            '-u', 'root', '--batch', '--skip-column-names', '--', self::DATABASE,
        ]);

        $process->setInput($statement);
        $process->setTimeout(30);
        $process->run();

        return trim($process->getOutput());
    }

    private function dump(string $sql): string
    {
        $path = tempnam(sys_get_temp_dir(), 'alxtexhpanel-mysql-dump-');

        file_put_contents($path, $sql);

        return $path;
    }

    /* ------------------------------------------------------------ the pipe */

    /**
     * THE CENTRAL CASE, AND THE ONE THAT HAS NEVER RUN UNTIL NOW. Data that
     * exists only in the dump is readable afterwards, and data that existed only
     * before it is gone.
     */
    public function test_the_database_is_replaced_by_the_dump(): void
    {
        $this->sql('CREATE TABLE widgets (id INT PRIMARY KEY, name VARCHAR(64))');
        $this->sql("INSERT INTO widgets VALUES (1, 'before')");

        $dump = $this->dump(implode("\n", [
            'DROP TABLE IF EXISTS widgets;',
            'CREATE TABLE widgets (id INT PRIMARY KEY, name VARCHAR(64));',
            "INSERT INTO widgets VALUES (1, 'restored');",
            "INSERT INTO widgets VALUES (2, 'also restored');",
        ]));

        (new DatabaseRestorer)->restore($dump);

        $this->assertSame(
            "restored\nalso restored",
            $this->sql('SELECT name FROM widgets ORDER BY id'),
        );

        @unlink($dump);
    }

    /**
     * IT IMPORTS INTO THE NAMED DATABASE, not into whatever the client defaults
     * to. Omitting the database argument makes `mysql` use none and every
     * unqualified statement fail - or worse, use one left over from a config
     * file and restore a snapshot into somebody else's schema.
     */
    public function test_it_imports_into_the_configured_database(): void
    {
        $this->sql('DROP TABLE IF EXISTS widgets');

        $dump = $this->dump('CREATE TABLE widgets (id INT PRIMARY KEY);');

        (new DatabaseRestorer)->restore($dump);

        $this->assertSame(
            'widgets',
            $this->sql("SELECT table_name FROM information_schema.tables WHERE table_schema = '".self::DATABASE."' AND table_name = 'widgets'"),
        );

        @unlink($dump);
    }

    /**
     * A BROKEN DUMP FAILS LOUDLY. `mysql` exits non-zero on a syntax error, and
     * the restorer turns that into an exception rather than a reported success -
     * which is the difference between "the restore failed" and a database
     * missing whatever came after the corruption.
     */
    public function test_a_malformed_dump_is_refused(): void
    {
        $dump = $this->dump('CREATE TABLE widgets (this is not valid sql');

        $this->expectException(\RuntimeException::class);

        try {
            (new DatabaseRestorer)->restore($dump);
        } finally {
            @unlink($dump);
        }
    }

    /**
     * THE CONNECTION IS DROPPED AFTERWARDS.
     *
     * Without it the pooled connection keeps serving whatever it had open, so
     * the first read after a restore can return the data that was just
     * replaced - a successful restore that appears to have done nothing, which
     * is the most confusing possible outcome.
     */
    public function test_the_connection_is_reopened_so_reads_see_the_restored_data(): void
    {
        $this->sql('CREATE TABLE widgets (id INT PRIMARY KEY, name VARCHAR(64))');
        $this->sql("INSERT INTO widgets VALUES (1, 'before')");

        // Open a connection BEFORE the restore, so there is a live one to go
        // stale - the situation a real request is in.
        $this->assertSame('before', DB::connection('mysql_fixture')->table('widgets')->value('name'));

        $dump = $this->dump(implode("\n", [
            'DROP TABLE IF EXISTS widgets;',
            'CREATE TABLE widgets (id INT PRIMARY KEY, name VARCHAR(64));',
            "INSERT INTO widgets VALUES (1, 'after');",
        ]));

        (new DatabaseRestorer)->restore($dump);

        $this->assertSame('after', DB::connection('mysql_fixture')->table('widgets')->value('name'));

        @unlink($dump);
    }

    /**
     * AND THE REMOTE REFUSAL STILL HOLDS AGAINST A REAL MYSQL CONNECTION.
     *
     * It was only ever asserted against a connection that could not be opened;
     * proving it with a working driver is what makes it a guard rather than a
     * side effect of the connection failing anyway.
     */
    public function test_a_remote_host_is_still_refused(): void
    {
        config()->set('database.connections.mysql_fixture.host', 'db.example.com');
        DB::purge('mysql_fixture');

        $refusal = (new DatabaseRestorer)->refusal();

        $this->assertNotNull($refusal);
        $this->assertStringContainsString('db.example.com', $refusal);
    }
}
