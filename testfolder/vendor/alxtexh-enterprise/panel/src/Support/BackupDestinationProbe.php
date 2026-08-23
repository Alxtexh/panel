<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Storage;

/**
 * Does this disk actually accept a backup?
 *
 * BECAUSE "CONFIGURED" AND "WORKING" ARE DIFFERENT QUESTIONS, and only the
 * second one matters. An `s3` entry in `filesystems.php` with empty credentials
 * is a perfectly valid disk name: it passes every check a settings form can
 * make, saves without complaint, and then fails on the first nightly run. With
 * `continue_on_failure` false that failure takes the WHOLE backup down - so
 * adding an off-site copy silently removes the local one, and the installation
 * has no backups at all until somebody reads the log.
 *
 * WRITE, READ BACK, DELETE. Not `exists()`, not a directory listing: a disk can
 * be listable and not writable, writable and not readable, and cloud drivers
 * routinely fail on delete permissions alone - which matters here, because the
 * retention policy is a delete. The probe does the three things a backup does.
 *
 * THE CONTENTS ARE VERIFIED, not just the write. A misconfigured proxy that
 * accepts a PUT and returns something else on GET is not a working destination,
 * and it is exactly the failure a "did the write throw?" check reports as
 * healthy.
 *
 * IT NEVER THROWS. This runs from a settings screen and from a doctor command;
 * a probe that raises turns "your second destination is misconfigured" into a
 * 500 on the page you would use to fix it.
 */
final class BackupDestinationProbe
{
    /** Bytes written. Small on purpose - some destinations bill per request. */
    private const CONTENTS = 'alxtexhpanel-destination-probe';

    /**
     * @return array{ok: bool, disk: string, message: string, ms: int}
     */
    public function check(string $disk): array
    {
        $known = array_keys((array) config('filesystems.disks', []));

        if (! in_array($disk, $known, true)) {
            return $this->result($disk, false, 'No such disk is configured.', 0);
        }

        /*
         * A UNIQUE NAME PER PROBE. Two operators testing at once would otherwise
         * delete each other's file and each conclude the destination is broken -
         * and the second one to look would be wrong.
         */
        $path = '.alxtexhpanel-probe/'.bin2hex(random_bytes(8));

        $started = microtime(true);

        try {
            $filesystem = Storage::disk($disk);

            if (! $filesystem->put($path, self::CONTENTS)) {
                return $this->result($disk, false, 'The disk refused the write.', $this->since($started));
            }

            $read = $filesystem->get($path);

            if ($read !== self::CONTENTS) {
                // Written, and something else came back. A destination that
                // cannot return what it was given cannot restore a snapshot.
                $filesystem->delete($path);

                return $this->result($disk, false, 'What was written did not read back.', $this->since($started));
            }

            if (! $filesystem->delete($path)) {
                /*
                 * A WARNING RATHER THAN A FAILURE, because backups would still
                 * be written - but the retention policy is a delete, so this
                 * disk fills up forever and nothing says why.
                 */
                return $this->result(
                    $disk,
                    true,
                    'Writable, but the probe file could not be deleted - old backups will not be cleaned up.',
                    $this->since($started),
                );
            }

            return $this->result($disk, true, 'Wrote, read back and deleted a test file.', $this->since($started));
        } catch (\Throwable $e) {
            report($e);

            /*
             * THE DRIVER'S OWN WORDS. "Could not connect" is what tells an
             * operator whether to fix a credential, a bucket name or a firewall;
             * a generic "destination failed" sends them to the logs to find this
             * exact sentence.
             */
            return $this->result($disk, false, $this->reason($e), $this->since($started));
        }
    }

    /**
     * @param  list<string>  $disks
     * @return list<array{ok: bool, disk: string, message: string, ms: int}>
     */
    public function checkAll(array $disks): array
    {
        return array_values(array_map(fn (string $disk): array => $this->check($disk), $disks));
    }

    /** @return array{ok: bool, disk: string, message: string, ms: int} */
    private function result(string $disk, bool $ok, string $message, int $ms): array
    {
        return ['ok' => $ok, 'disk' => $disk, 'message' => $message, 'ms' => $ms];
    }

    private function since(float $started): int
    {
        return (int) round((microtime(true) - $started) * 1000);
    }

    /**
     * A message that fits on a line and gives nothing away.
     *
     * TRUNCATED AND STRIPPED OF NEWLINES, because driver exceptions carry entire
     * XML error documents and signed URLs. The first line is the part with the
     * cause in it; the rest belongs in the log, where `report()` has just put it.
     */
    private function reason(\Throwable $e): string
    {
        $first = trim(strtok($e->getMessage(), "\n") ?: '');

        if ($first === '') {
            return 'The disk could not be reached.';
        }

        return mb_strimwidth($first, 0, 160, '…');
    }
}
