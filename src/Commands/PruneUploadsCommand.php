<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Files\FileStore;

/**
 * Deletes pending uploads nobody ever saved.
 *
 * THE COST OF THE TWO-PHASE DESIGN, and it has to be paid deliberately. A file
 * is accepted before the form it belongs to is submitted, so every abandoned
 * form - a closed tab, a change of mind, a session that timed out - leaves
 * bytes on the disk that no record points at and nothing will ever collect.
 * Without this the panel has a slow leak whose size is "however many people
 * started attaching something and stopped".
 *
 * ONLY THE PENDING AREA IS TOUCHED. A file that has been promoted belongs to a
 * record, and a job that decided which of those were unreferenced would be a
 * job that deletes a customer's ID scan because a query missed a column. That
 * is a different and far more dangerous piece of work; this one only removes
 * files that were never claimed in the first place.
 */
final class PruneUploadsCommand extends Command
{
    protected $signature = 'panel:prune-uploads
                            {--hours=24 : How long an unclaimed upload may sit}
                            {--dry-run : List what would go, delete nothing}';

    protected $description = 'Delete pending uploads that were never saved to a record';

    public function handle(): int
    {
        $hours = (int) $this->option('hours');

        if ($hours < 1) {
            $this->components->error('Nothing to prune: --hours must be at least 1.');

            return self::FAILURE;
        }

        $disk = Storage::disk(FileStore::disk());
        $cutoff = now()->subHours($hours)->getTimestamp();
        $dryRun = (bool) $this->option('dry-run');

        $removed = 0;
        $bytes = 0;

        /*
         * Walked per tenant rather than with one recursive listing, because
         * `allFiles()` over a bucket with a million stored documents is a
         * million-key listing to find a handful of pending ones. The pending
         * directory is a known, small place; the stored directories are not.
         */
        foreach ($disk->directories('tenants') as $tenant) {
            $pending = $tenant.'/pending';

            if (! $disk->directoryExists($pending)) {
                continue;
            }

            foreach ($disk->files($pending) as $file) {
                // The sidecar goes with its file, not on its own schedule.
                if (str_ends_with($file, '.json')) {
                    continue;
                }

                if ($disk->lastModified($file) > $cutoff) {
                    continue;
                }

                $size = $disk->size($file);

                if (! $dryRun) {
                    $disk->delete([$file, $file.'.json']);
                }

                $removed++;
                $bytes += $size;
            }
        }

        $this->components->info(sprintf(
            '%s %d unclaimed upload%s (%s).',
            $dryRun ? 'Would remove' : 'Removed',
            $removed,
            $removed === 1 ? '' : 's',
            $this->humanBytes($bytes),
        ));

        return self::SUCCESS;
    }

    private function humanBytes(int $bytes): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        $size = (float) $bytes;
        $unit = 0;

        while ($size >= 1024 && $unit < count($units) - 1) {
            $size /= 1024;
            $unit++;
        }

        return round($size, $unit > 0 ? 1 : 0).' '.$units[$unit];
    }
}
