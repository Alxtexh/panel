<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Artisan;
use Alxtexh\Panel\Support\BackupSettings;
use Alxtexh\Panel\Support\InstallationState;
use Alxtexh\Panel\Support\TenantBackup;
use Alxtexh\Panel\Support\Tenants;

/**
 * Take a backup on demand, from the panel.
 *
 * QUEUED, BECAUSE A BACKUP IS NOT A REQUEST. Dumping a database and zipping the
 * application takes minutes on anything real; running it inline gives the
 * operator a spinner until their browser times out, and then no way to tell
 * whether it finished. The button starts a job and the page reports on it.
 *
 * ONE AT A TIME, ENFORCED BY A LOCK rather than by hiding the button. Two
 * concurrent `backup:run`s write into the same destination and compete for the
 * same disk, and the second is started by whoever clicks twice because the first
 * gave no immediate feedback - which is exactly the situation this creates.
 *
 * IT DOES NOT RESTORE. Taking a backup is additive; putting one back is
 * destructive and irreversible, so it is a separate job with its own guards -
 * see `RestoreBackup`. The two share this lock, because a restore running while
 * a backup is written produces a snapshot that is half of two databases.
 *
 * THE OUTCOME IS RECORDED WHERE THE PAGE CAN SEE IT. A job that fails silently
 * is worse than no button: the operator believes a backup exists.
 */
final class RunBackupNow implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    /** Where the page looks for what happened. */
    public const STATE_KEY = 'panel:backup:manual-run';

    /** Long enough for a large install; short enough that a crash unblocks. */
    private const LOCK_SECONDS = 3600;

    /**
     * ONE ATTEMPT, matching `RestoreBackup`.
     *
     * Without this the job inherits the worker's `--tries=3`, so a backup that
     * failed half way through writing a snapshot is attempted twice more -
     * three partial archives in the destination, and the newest of them is
     * what the staleness check will report on. Its sibling made this choice
     * deliberately; this one simply had not.
     */
    public int $tries = 1;

    public int $timeout = 3600;

    public function __construct(
        public readonly ?string $startedBy = null,
        public readonly string|int|null $tenantId = null,
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
            $this->record('skipped', 'A backup is already running.');

            return;
        }

        $this->record('running', 'Started'.($this->startedBy ? " by {$this->startedBy}" : '').'.');

        try {
            /*
             * THE OPERATOR'S SETTINGS, READ NOW. A queue worker boots once and
             * then runs for hours; the destinations and alert routing it picked
             * up at boot are the policy as it stood then. Applying here is what
             * makes a destination added five minutes ago actually receive this
             * snapshot.
             */
            BackupSettings::load()->apply();

            if ($this->tenantId !== null && $this->tenantId !== '') {
                $tenant = Tenants::find($this->tenantId);

                if ($tenant === null) {
                    $this->record('failed', 'No tenant matched that backup request.');

                    return;
                }

                $written = (new TenantBackup)->write($tenant);
                $label = $tenant->name ?? (string) $tenant->getKey();

                $this->record(
                    'succeeded',
                    "Completed tenant backup for {$label} ({$written['path']}).",
                );

                return;
            }

            /*
             * `--only-db` IS NOT USED. A database-only snapshot restores a panel
             * with no uploaded documents, which for this application means every
             * subscriber's ID scan is gone - and nobody discovers that until the
             * restore.
             */
            $exit = Artisan::call('backup:run');

            $this->record(
                $exit === 0 ? 'succeeded' : 'failed',
                $exit === 0 ? 'Completed.' : 'The backup command exited with '.$exit.'.',
            );
        } catch (\Throwable $e) {
            report($e);
            $this->record('failed', $e->getMessage());
        } finally {
            $state->release('backup:running');
        }
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
        ], seconds: 86_400);
    }
}
