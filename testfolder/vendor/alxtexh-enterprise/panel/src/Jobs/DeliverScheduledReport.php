<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Mail\ScheduledReportMail;
use Alxtexh\Panel\Reports\ScheduledReport;
use Throwable;

/**
 * Run one scheduled report and email the result.
 *
 * IT REUSES `ExportRecords` RATHER THAN EXPORTING AGAIN. The chunked writer, the
 * BOM that stops Excel mangling every non-ASCII name, the policy check, the
 * tenant scope and the "act as this person" machinery all already exist and are
 * all already tested. A second export path would be a second set of the same
 * bugs, and the one that matters - a scope applied in one and forgotten in the
 * other - produces a CSV of somebody else's records in an email to an external
 * address.
 *
 * IT RUNS THE EXPORT SYNCHRONOUSLY inside this job. Dispatching another queued
 * job and waiting for it would mean polling a status key, and this job is
 * already on the queue - there is nothing to keep responsive.
 *
 * A REPORT WITH NO ROWS IS STILL SENT, and that is deliberate. "No overdue
 * accounts this week" is the answer somebody is waiting for, and silence is
 * indistinguishable from a scheduler that stopped - which is the failure this
 * whole feature is most likely to have.
 *
 * THE OUTCOME IS RECORDED WHETHER OR NOT IT WORKED. A report that quietly stops
 * arriving is the thing nobody chases; `last_result` is what the screen shows so
 * somebody can notice.
 */
final class DeliverScheduledReport implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public int $tries = 1;

    public int $timeout = 900;

    public function __construct(private readonly int $reportId) {}

    public function handle(): void
    {
        $report = ScheduledReport::query()->find($this->reportId);

        if ($report === null) {
            return;
        }

        /*
         * MARKED AS SENT BEFORE THE WORK, not after.
         *
         * The scheduler asks "is this due" every minute, and a long export would
         * still be running on the next tick - so a report that stamps itself
         * afterwards is dispatched again while the first is in flight, and the
         * recipient gets it twice. Claiming the minute first makes a failure
         * mean "no email until the next slot", which is the safer wrong answer.
         */
        $report->forceFill(['last_sent_at' => now()])->save();

        $token = (string) Str::uuid();

        /*
         * THE STATUS IS OPENED BEFORE THE EXPORT RUNS.
         *
         * `ExportRecords` reports its outcome through `JobStatus`, and
         * `JobStatus::finish` writes nothing for a token that was never started
         * - so an export dispatched without this succeeds, records nothing, and
         * this job concludes "the export produced no file". The panel's own
         * export endpoint opens the status before dispatching for the same
         * reason; running the job from somewhere else means doing the same.
         */
        JobStatus::start($token, $report->user_id, 'export');

        try {
            /*
             * SYNCHRONOUSLY, inside this job. It applies the owner's policies
             * and the tenant scope itself - see `ExportRecords::actAs` - so
             * nothing here needs to establish either, and nothing here can get
             * either wrong.
             */
            ExportRecords::dispatchSync(
                $report->resource,
                (array) $report->state,
                null,
                $report->user_id,
                $token,
            );

            /*
             * THE OWNER IS PASSED, because `JobStatus::get` refuses to answer
             * about somebody else's job - a status endpoint that told any caller
             * about any token would be an enumeration oracle over other people's
             * exports. This job IS the owner, so it says so.
             */
            $status = JobStatus::get($token, $report->user_id);
            $path = $status['file'] ?? null;

            if ($path === null) {
                throw new \RuntimeException('The export produced no file.');
            }

            $disk = Storage::disk((string) config('panel.exports.disk', 'local'));

            /*
             * THE FILE IS READ AND ATTACHED RATHER THAN LINKED. A link would need
             * a signed public URL, and the recipient is deliberately somebody
             * without a panel account - an external accountant, a finance
             * mailbox. A URL that works for them works for anybody who receives
             * a forward of that email.
             */
            Mail::to($report->recipients)->send(new ScheduledReportMail(
                $report,
                (string) $disk->get($path),
                $status['done'] ?? 0,
            ));

            $report->forceFill([
                'last_result' => 'Sent '.number_format((int) ($status['done'] ?? 0)).' row(s) to '
                    .count((array) $report->recipients).' recipient(s).',
            ])->save();

            // The export file has been delivered; leaving it would accumulate a
            // copy of every report ever run on the panel's own disk.
            $disk->delete($path);
        } catch (Throwable $e) {
            report($e);

            $report->forceFill(['last_result' => 'Failed: '.$e->getMessage()])->save();
        }
    }

    /** A failed job must still leave a trace, or the screen shows the last success forever. */
    public function failed(Throwable $e): void
    {
        ScheduledReport::query()
            ->whereKey($this->reportId)
            ->update(['last_result' => 'Failed: '.$e->getMessage()]);
    }
}
