<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Alxtexh\Panel\Actions\ExportedFile;

/**
 * Removes exports past their retention window - the row and the file together.
 *
 * AN EXPORT IS A COPY THAT LEFT THE PANEL'S OWN SCREENS. Every CSV on disk is a
 * snapshot of subscriber records that no longer moves when the records do, is
 * not covered by any policy check, and will still be there long after the person
 * who asked for it has forgotten. Keeping them forever is a growing pile of
 * stale personal data with an owner who has stopped thinking about it.
 *
 * BOTH HALVES GO, and that pairing is the whole point. Deleting rows alone
 * leaves orphaned CSVs that nothing can reach and nothing will ever collect;
 * deleting files alone leaves rows promising a download that 404s - which is the
 * exact failure the exports table was created to end.
 *
 * IT IS SAFE TO RUN AT ANY TIME. Nothing before the cutoff is touched, and the
 * download endpoint checks expiry itself - so a scheduler that stopped means old
 * files linger, not that expired ones stay downloadable.
 */
final class PruneExportsCommand extends Command
{
    protected $signature = 'panel:prune-exports';

    protected $description = 'Delete exports past their retention window, file and record together';

    public function handle(): int
    {
        $removed = ExportedFile::prune();

        $this->components->info(sprintf(
            'Removed %d expired export%s.',
            $removed,
            $removed === 1 ? '' : 's',
        ));

        return self::SUCCESS;
    }
}
