<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Alxtexh\Panel\Jobs\DeliverScheduledReport;
use Alxtexh\Panel\Reports\ScheduledReport;

/**
 * Dispatch whichever reports are due this minute.
 *
 * ONE COMMAND ON A ONE-MINUTE SCHEDULE, rather than a scheduler entry per
 * report. Reports are DATA - created and deleted from a screen by operators -
 * and Laravel's schedule is CODE, fixed at boot. A schedule built from rows
 * would be a schedule that is wrong until the next deploy, which for something
 * created five minutes ago means it never runs at all.
 *
 * SO THE SCHEDULER ASKS EVERY MINUTE AND THE ROWS DECIDE. The question is one
 * indexed read and almost always answers with nothing.
 *
 * ONE CLOCK FOR THE WHOLE TICK. Reading `now()` per report would let two
 * evaluated either side of a minute boundary disagree about what time it is -
 * so one is skipped and the other sent twice, on a boundary that only occurs
 * under load.
 *
 * DISPATCHED, NEVER RUN INLINE. An export of a large table takes minutes and
 * this runs every minute; doing the work here would have the scheduler overlap
 * itself and eventually stop running anything else.
 */
final class DispatchScheduledReportsCommand extends Command
{
    protected $signature = 'panel:reports-due
        {--now= : Evaluate as though it were this time, e.g. "2026-07-28 07:00". For testing a schedule without waiting for it}';

    protected $description = 'Dispatch any scheduled reports that are due';

    public function handle(): int
    {
        $now = $this->option('now') !== null
            ? Carbon::parse((string) $this->option('now'))
            : now();

        $dispatched = 0;

        /*
         * CHUNKED, because this is every report on the installation across every
         * organisation. It is a small table today and it is the kind of table
         * that is small until one customer discovers the feature.
         */
        ScheduledReport::query()
            ->where('is_active', true)
            ->orderBy('id')
            ->chunkById(200, function ($reports) use ($now, &$dispatched): void {
                foreach ($reports as $report) {
                    if (! $report->isDue($now)) {
                        continue;
                    }

                    DeliverScheduledReport::dispatch($report->id);

                    $dispatched++;
                }
            });

        /*
         * SILENT WHEN NOTHING IS DUE, which is most minutes. A line every minute
         * is a log nobody reads, and a log nobody reads is where the one real
         * failure goes unnoticed.
         */
        if ($dispatched > 0) {
            $this->components->info("Dispatched {$dispatched} report(s).");
        }

        return self::SUCCESS;
    }
}
