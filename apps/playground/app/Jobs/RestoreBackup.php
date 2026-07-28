<?php

declare(strict_types=1);

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Support\BackupArchive;
use PanelKit\Panel\Support\BackupSettings;
use PanelKit\Panel\Support\InstallationState;
use PanelKit\Panel\Support\DatabaseRestorer;

/**
 * Put a snapshot's DATABASE back.
 *
 * THIS IS THE ONE ACTION ON THE OPERATIONS SCREEN THAT DESTROYS DATA, and the
 * previous position here was that it should not exist at all - that a restore
 * belongs to somebody with a shell who has decided which snapshot and why. That
 * position was argued and overruled: an operator who can see the snapshots and
 * cannot use them is being shown a fire extinguisher behind glass with no
 * hammer. So it exists, and everything below is what makes it survivable.
 *
 * THE DATABASE ONLY. Not application files, and the omission is deliberate
 * rather than unfinished. The snapshot contains `base_path()`, which is the code
 * currently executing this job; unpacking it over itself mid-request is how an
 * installation is bricked by a button. Uploaded documents are not restored for a
 * quieter reason - a database restore does not delete them, so they are still
 * there afterwards, and overwriting the current uploads with an older set would
 * destroy files the restore was never asked to touch. A full disaster recovery
 * is a shell and the downloaded zip, which is why Download sits next to this.
 *
 * A SAFETY BACKUP IS TAKEN FIRST, AND A FAILURE TO TAKE ONE ABORTS. Restoring is
 * the moment somebody is under pressure and choosing between two snapshots; the
 * one thing that makes the wrong choice recoverable is that the state they just
 * overwrote is itself a snapshot. Proceeding without it would be trading the
 * only undo for a few minutes.
 *
 * LOCAL DATABASES ONLY, checked against the connection rather than trusted.
 * Nothing in this application may point a destructive operation at a remote
 * host, and a restore is the most destructive operation it has.
 *
 * IT HOLDS THE SAME LOCK AS `RunBackupNow`, so a restore cannot begin while a
 * backup is being written and vice versa. Both read and write the same files;
 * concurrently they produce a snapshot that is half of two databases.
 */
final class RestoreBackup implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /** Where the page looks for what happened. */
    public const STATE_KEY = 'panel:backup:restore';

    private const LOCK_SECONDS = 3600;

    public int $timeout = 3600;

    /** No retries. A half-applied restore must not be attempted twice. */
    public int $tries = 1;

    public function __construct(
        public readonly string $path,
        public readonly ?string $startedBy = null,
        /**
         * A single-use maintenance bypass, minted by the controller.
         *
         * IT HAS TO EXIST BEFORE THE PANEL CLOSES, which is why it is not
         * generated in here. The job runs on a worker minutes later; by the time
         * it could hand a secret to anybody, everybody is already looking at a
         * 503. Minting it at the click means the operator is told the bypass
         * link in the same response that says "restore started" - the one moment
         * they can still read anything.
         */
        public readonly ?string $bypass = null,
    ) {}

    public function handle(): void
    {
        /*
         * AN INSTALLATION-WIDE LOCK, NOT A CACHE ONE.
         *
         * `Cache::lock` looked right and was per-TENANT: the tenancy
         * bootstrapper prefixes every cache key with the current organisation,
         * so two tenants' administrators could each start a backup and each
         * acquire "the" lock at the same moment - which is exactly the event
         * this exists to prevent. A backup covers every tenant at once; so must
         * the thing that serialises it.
         */
        $state = app(InstallationState::class);

        if (! $state->acquire('backup:running', self::LOCK_SECONDS)) {
            $this->record('skipped', 'A backup or restore is already running.');

            return;
        }

        try {
            BackupSettings::load()->apply();

            $this->run();
        } catch (\Throwable $e) {
            report($e);
            $this->record('failed', $e->getMessage());
        } finally {
            $state->release('backup:running');
        }
    }

    private function run(): void
    {
        $archive = new BackupArchive;

        /*
         * RE-RESOLVED HERE, not trusted from the request that queued this. The
         * snapshot may have been deleted between the click and the worker
         * picking the job up, and a path that no longer matches anything must
         * not become a path that gets concatenated into a disk root.
         */
        if ($archive->resolve($this->path) === null) {
            $this->record('failed', 'That snapshot no longer exists.');

            return;
        }

        if (($refusal = (new DatabaseRestorer)->refusal()) !== null) {
            $this->record('refused', $refusal);

            return;
        }

        $this->record('running', 'Taking a safety backup before restoring.');

        if (Artisan::call('backup:run') !== 0) {
            $this->record('failed', 'The safety backup failed, so nothing was restored.');

            return;
        }

        $this->record('running', 'Restoring the database.');

        /*
         * UNPACKED BEFORE THE DOORS CLOSE. Copying a snapshot off an off-site
         * disk and unzipping it can take minutes, and none of it touches the
         * database - holding the panel shut for that is downtime bought for
         * nothing. Maintenance starts at the last possible moment.
         */
        $workspace = $this->extract($archive->diskName(), $this->path);

        try {
            $dump = $this->locateDump($workspace);

            if ($dump === null) {
                $this->record('failed', 'That snapshot contains no database dump.');

                return;
            }

            $this->withPanelClosed(function () use ($dump): void {
                (new DatabaseRestorer)->restore($dump);
            });

            $this->record('succeeded', 'The database was restored from '.basename($this->path).'.');
        } finally {
            $this->removeDirectory($workspace);
        }
    }

    /**
     * Run `$body` with the panel shut to everybody.
     *
     * WITHOUT THIS, A RESTORE SILENTLY LOSES WORK. Between the safety backup
     * and the swap, everybody still using the panel keeps writing to the
     * database that is about to be replaced - and those writes go into the file
     * that gets renamed away. Nothing errors. The operator sees "restored", and
     * an hour of somebody else's afternoon is gone with no trace of where.
     *
     * IT IS WORSE ON MYSQL than on SQLite, which is why this is not optional for
     * one driver. A SQLite restore builds alongside and renames, so the window
     * is a single syscall; a MySQL import replays statement by statement, so
     * concurrent requests read a database that is half one snapshot and half
     * another for the whole duration.
     *
     * THE PANEL COMES BACK UP WHATEVER HAPPENS. A restore that throws must not
     * leave the installation dark - "the restore failed" is recoverable, "the
     * restore failed and nobody can sign in to find out" is an outage. Hence the
     * finally, and hence `down` failing is not fatal: an installation that
     * cannot write its own maintenance file should still get its data back.
     */
    private function withPanelClosed(callable $body): void
    {
        $closed = false;

        try {
            /*
             * `--secret` LETS THE OPERATOR WATCH. Whoever pressed Restore is
             * the one person who needs the panel while it runs, and locking them
             * out means the only way to find out what happened is the server
             * log. It is minted per restore at the click - see the constructor -
             * so it is single-use rather than a standing bypass, and it stops
             * working the moment `up` runs.
             */
            Artisan::call('down', array_filter([
                '--secret' => $this->bypass,
                '--retry' => 60,
            ]));

            $closed = true;
        } catch (\Throwable $e) {
            /*
             * REPORTED, NOT FATAL. Refusing to restore because maintenance mode
             * is unavailable would mean an installation with a read-only
             * `storage/` can never recover its data - and the restore is the
             * more important of the two.
             */
            report($e);
            $this->record('running', 'Restoring without maintenance mode: the panel could not be closed.');
        }

        try {
            $body();
        } finally {
            if ($closed) {
                Artisan::call('up');
            }
        }
    }


    /**
     * Unpack the snapshot into a temporary directory and return its path.
     *
     * COPIED TO LOCAL DISK FIRST. The snapshot may live on an off-site disk with
     * no local path at all, and `ZipArchive` cannot open a stream.
     */
    private function extract(string $disk, string $path): string
    {
        if (! class_exists(\ZipArchive::class)) {
            throw new \RuntimeException('The zip extension is not installed, so a snapshot cannot be opened.');
        }

        $workspace = rtrim((string) config('backup.backup.temporary_directory', storage_path('app/backup-temp')), '/')
            .'/restore-'.bin2hex(random_bytes(6));

        if (! mkdir($workspace, 0700, true) && ! is_dir($workspace)) {
            throw new \RuntimeException('Could not create a temporary directory for the restore.');
        }

        $local = $workspace.'/snapshot.zip';

        $stream = Storage::disk($disk)->readStream($path);

        if ($stream === null) {
            throw new \RuntimeException('The snapshot could not be read from its disk.');
        }

        $out = fopen($local, 'wb');
        stream_copy_to_stream($stream, $out);
        fclose($out);
        fclose($stream);

        $zip = new \ZipArchive;

        if ($zip->open($local) !== true) {
            throw new \RuntimeException('The snapshot could not be opened as a zip archive.');
        }

        /*
         * The archive password, when one is configured. Without it `extractTo`
         * returns false with no explanation, which reads as a corrupt backup.
         */
        $password = config('backup.backup.password');

        if (is_string($password) && $password !== '') {
            $zip->setPassword($password);
        }

        /*
         * ONLY THE DUMPS ARE EXTRACTED. The archive also contains the whole
         * application directory; unpacking that would fill the temporary volume
         * for no purpose, since nothing here restores files.
         */
        $wanted = [];

        for ($i = 0; $i < $zip->numFiles; $i++) {
            $name = (string) $zip->getNameIndex($i);

            if (str_starts_with($name, 'db-dumps/')) {
                $wanted[] = $name;
            }
        }

        if ($wanted !== [] && ! $zip->extractTo($workspace, $wanted)) {
            $zip->close();

            throw new \RuntimeException(
                'The snapshot could not be extracted; it may be encrypted with a different password.'
            );
        }

        $zip->close();
        @unlink($local);

        return $workspace;
    }

    private function locateDump(string $workspace): ?string
    {
        foreach (glob($workspace.'/db-dumps/*') ?: [] as $file) {
            if (is_file($file)) {
                return $file;
            }
        }

        return null;
    }

    private function removeDirectory(string $directory): void
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

    /** A failed job must still leave a trace, or the page reports "running" forever. */
    public function failed(\Throwable $e): void
    {
        $this->record('failed', $e->getMessage());
    }

    private function record(string $state, string $message): void
    {
        app(InstallationState::class)->put(self::STATE_KEY, [
            'state' => $state,
            'message' => $message,
            'at' => now()->toIso8601String(),
            'by' => $this->startedBy,
            'snapshot' => $this->path,
        ], seconds: 86_400);
    }
}
