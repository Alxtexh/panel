<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\DB;
use Symfony\Component\Process\Process;

/**
 * Replay a database dump over the current connection.
 *
 * SEPARATED FROM THE JOB SO IT CAN BE TESTED. The queued restore takes a safety
 * backup, unpacks a zip and cleans up after itself; none of that is the part
 * that can silently do nothing, and all of it makes the part that can
 * impractical to exercise. A restore that reports success and leaves the old
 * data in place is this feature's characteristic failure - the same shape as
 * every other bug in this codebase, a 200 that looks right - so the code that
 * would produce it is reachable on its own.
 *
 * LOCAL CONNECTIONS ONLY, AND ASKED OF THE CONNECTION rather than of `.env`.
 * The environment file describes what was configured; the connection describes
 * what the application is talking to right now. A panel that will restore over
 * whatever host its config names is one environment file away from replacing
 * production with a staging snapshot, and that mistake is made by tired people
 * at 3am rather than by attackers.
 */
final class DatabaseRestorer
{
    /**
     * Why a restore must not proceed, or null.
     *
     * A SENTENCE RATHER THAN A BOOLEAN, because every one of these has to be
     * shown to somebody. "Restore refused" sends an operator to the logs; the
     * host name that was rejected ends the question.
     */
    public function refusal(): ?string
    {
        $connection = DB::connection();
        $driver = $connection->getDriverName();

        if (! in_array($driver, ['sqlite', 'mysql', 'mariadb'], true)) {
            return "Restoring a {$driver} database is not supported from the panel.";
        }

        if ($driver === 'sqlite') {
            return (string) $connection->getConfig('database') === ':memory:'
                ? 'An in-memory database cannot be restored into.'
                : null;
        }

        $host = (string) $connection->getConfig('host');

        return in_array($host, ['127.0.0.1', 'localhost', '::1', ''], true)
            ? null
            : "Refusing to restore over a remote database host ({$host}).";
    }

    /** @throws \RuntimeException when the restore did not happen */
    public function restore(string $dump): void
    {
        if (($refusal = $this->refusal()) !== null) {
            throw new \RuntimeException($refusal);
        }

        if (! is_file($dump)) {
            throw new \RuntimeException('The dump file is missing.');
        }

        match (DB::connection()->getDriverName()) {
            'sqlite' => $this->restoreSqlite($dump),
            default => $this->restoreMysql($dump),
        };
    }

    /**
     * Build a fresh database beside the live one, then move it into place.
     *
     * NOT AN IN-PLACE IMPORT. Replaying a dump over the live file leaves the
     * database half-old and half-new for the duration, and if the dump turns out
     * to be truncated it stays that way - the failure mode is a corrupted
     * database rather than an unchanged one. Building alongside means the only
     * destructive step is a rename, which either happens or does not.
     */
    private function restoreSqlite(string $dump): void
    {
        $live = (string) DB::connection()->getConfig('database');
        $staged = $live.'.restoring';

        @unlink($staged);

        try {
            /*
             * `-bail` STOPS AT THE FIRST ERROR instead of carrying on.
             *
             * Without it the client reports a parse error and then keeps
             * executing the remaining statements, so a truncated dump builds a
             * perfectly valid database missing whatever failed to parse. The
             * exit code is what this method actually checks, and on the sqlite3
             * builds tested here a parse error already sets it - but "already"
             * is a property of one version, and the flag is what makes the
             * behaviour something this code chose rather than inherited.
             *
             * IT IS NOT THE ONLY GUARD, deliberately. The size check below
             * catches a dump that produced nothing at all, which is what a
             * zero-exit client would leave behind.
             */
            $this->run($this->sqliteCommand($staged), (string) file_get_contents($dump));

            if (! is_file($staged) || filesize($staged) === 0) {
                throw new \RuntimeException('The restored database came out empty; nothing was replaced.');
            }
        } catch (\Throwable $e) {
            // The half-built file must not be left beside the live database,
            // where the next attempt would find it and the next person would
            // wonder which of the two is real.
            @unlink($staged);

            throw $e;
        }

        /*
         * DISCONNECT BEFORE THE SWAP. SQLite keeps the file handle open, and the
         * old inode stays live for this process - so queries after the rename
         * would read the database that was just replaced, reporting a successful
         * restore that changed nothing.
         */
        DB::disconnect();

        if (! rename($staged, $live)) {
            @unlink($staged);

            throw new \RuntimeException('The restored database could not be moved into place.');
        }

        // The write-ahead log belongs to the file that was just replaced. Left
        // behind, it replays the OLD database's uncommitted pages over the new
        // one - a restore that half-undoes itself on the next connection.
        @unlink($live.'-wal');
        @unlink($live.'-shm');
    }

    /**
     * The `sqlite3` invocation, as a separate step so it can be examined.
     *
     * `-bail` STOPS AT THE FIRST ERROR instead of carrying on. Without it the
     * client reports a parse error and keeps executing the remaining statements,
     * so a truncated dump builds a perfectly valid database missing whatever
     * failed to parse - and the exit code is what this method actually checks.
     *
     * I COULD NOT PROVE IT BEHAVIOURALLY AND SAID SO. On the sqlite3 builds here
     * a parse error already sets the exit code, so deleting the flag left every
     * test green - and a guard whose removal changes nothing is not yet a guard.
     * What this seam buys is an assertion that the flag is PASSED, which is the
     * honest half: it does not prove the client stops early, it proves this code
     * asked it to. The behaviour is a property of sqlite3's version; the request
     * is a property of ours, and only one of those is ours to test.
     *
     * @return list<string>
     */
    public function sqliteCommand(string $target): array
    {
        return [$this->binary('sqlite3'), '-bail', $target];
    }

    private function restoreMysql(string $dump): void
    {
        $this->run($this->mysqlCommand(), (string) file_get_contents($dump));

        DB::disconnect();
    }

    /**
     * The `mysql` invocation, as a separate step so it can be examined.
     *
     * SPLIT OUT BECAUSE THIS MACHINE CANNOT RUN IT. There is no mysqld here, no
     * `pdo_mysql`, and no way to install either without a password - so the pipe
     * itself is genuinely untested and saying otherwise would be a lie. What CAN
     * be tested is everything that decides what gets piped: the host, the port,
     * the credentials, which database is named, and whether the password is
     * passed at all. Those are where the mistakes live; the pipe is one call.
     *
     * ARGUMENTS, NOT A SHELL STRING. `Process` takes an array and never invokes a
     * shell, so a database named `foo; DROP DATABASE bar` is one argument rather
     * than two commands. Building this by concatenation is the version that
     * works on every name anybody has tried and fails on the first one with a
     * space in it.
     *
     * @return list<string>
     */
    public function mysqlCommand(): array
    {
        $config = DB::connection()->getConfig();

        $command = [
            $this->binary('mysql'),
            '--host='.($config['host'] ?? '127.0.0.1'),
            '--port='.($config['port'] ?? 3306),
            '--user='.($config['username'] ?? 'root'),
        ];

        if (($config['password'] ?? '') !== '') {
            /*
             * Passed as an argument because `mysql` offers no stdin route for it
             * and stdin is already carrying the dump. It is visible in the
             * process list for the duration - which is part of why a remote host
             * is refused outright; the alternative is a temporary defaults file,
             * which is visible on disk instead.
             */
            $command[] = '--password='.$config['password'];
        }

        /*
         * `--` ENDS THE OPTIONS. Without it a database whose name begins with a
         * dash is read as a flag, and the error that comes back is about an
         * unknown option rather than about the database - which sends whoever is
         * mid-restore looking in entirely the wrong place.
         */
        $command[] = '--';
        $command[] = (string) ($config['database'] ?? '');

        return $command;
    }

    /** @param list<string> $command */
    private function run(array $command, string $input): void
    {
        $process = new Process($command);
        $process->setInput($input);
        $process->setTimeout(3000);
        $process->run();

        if (! $process->isSuccessful()) {
            throw new \RuntimeException(trim($process->getErrorOutput()) ?: 'The database import failed.');
        }
    }

    /**
     * The client binary, honouring the same path setting the DUMP side uses.
     *
     * ONE SETTING FOR BOTH DIRECTIONS. `dump_binary_path` exists because a queue
     * worker has a different PATH from the shell; a restore that ignored it
     * would work when tested by hand and fail only from the worker, which is the
     * hardest kind of failure to reproduce.
     */
    private function binary(string $name): string
    {
        /*
         * READ FROM THE ACTIVE CONNECTION, not from `database.default`. They are
         * usually the same and occasionally are not - a job that switched
         * connections, a tenant on its own database - and reading the name
         * instead of the thing is how a restore ends up looking for the client
         * binary configured for a database it is not touching.
         */
        $dump = (array) (DB::connection()->getConfig('dump') ?? []);
        $path = (string) ($dump['dump_binary_path'] ?? '');

        return $path === '' ? $name : rtrim($path, '/').'/'.$name;
    }
}
