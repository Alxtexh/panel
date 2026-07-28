<?php

declare(strict_types=1);

namespace PanelKit\Panel\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use PanelKit\Panel\Actions\BulkRunner;
use PanelKit\Panel\Actions\JobStatus;
use RuntimeException;
use Throwable;

/**
 * A bulk action over "everything matching the current filters".
 *
 * QUEUED BECAUSE THE SET IS UNBOUNDED. An explicit selection is bounded by what
 * a person can tick on screen and runs inline; select-all-matching can be every
 * row in the table, and a request that updates 400,000 rows will hit the PHP
 * time limit somewhere in the middle - leaving a partial write with no record
 * of where it stopped.
 *
 * The FILTERS travel, not the ids. Serialising 400,000 identifiers into the
 * jobs table to describe "all of them" is a payload bigger than the work; the
 * query is re-derived from the same parameters the table used.
 *
 * That does mean the set is evaluated when the job RUNS, not when it was
 * queued, so rows created in between are included. For "suspend every expired
 * client" that is the desired reading - and the alternative, freezing a
 * snapshot of hundreds of thousands of ids, is worse in both size and staleness.
 */
final class RunBulkAction implements ShouldQueue
{
    use ActsAsPanelUser;
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public int $tries = 1;

    /**
     * @param  array<string, mixed>  $query  The filter parameters from the table.
     */
    public function __construct(
        private readonly string $resource,
        private readonly string $actionKey,
        private readonly array $query,
        private readonly int|string $userId,
        private readonly string $token,
    ) {}

    public function handle(BulkRunner $runner): void
    {
        try {
            $class = $this->actAs($this->userId, $this->resource);

            $definition = $class::definition();
            $action = $definition->bulkAction($this->actionKey);

            if ($action === null || ! $action->isRunnable()) {
                throw new RuntimeException("Unknown bulk action [{$this->actionKey}].");
            }

            // Re-checked at execution time, not merely at dispatch.
            if (! $class::can($action->getAbility())) {
                throw new RuntimeException("Not authorized to run [{$this->actionKey}].");
            }

            $list = $definition->toListQuery($class::model());
            $request = Request::create('/', 'GET', $this->query);

            $affected = $runner->run(
                $action,
                $list->matching($request),
                $class::model(),
                $list->keyColumnName(),
                fn (int $done) => JobStatus::progress($this->token, $done),
            );

            JobStatus::finish($this->token, ['done' => $affected]);

            $this->notifyActor(
                'Bulk action finished',
                number_format($affected).' records updated by "'.$this->actionKey.'".',
                "/{$this->resource}",
            );
        } catch (Throwable $e) {
            // Recorded for the operator watching the progress bar, then
            // rethrown so it reaches failed_jobs and the logs like any other
            // job failure. Swallowing it would leave the UI saying "failed"
            // with nothing anywhere explaining why.
            JobStatus::fail($this->token, $e->getMessage());

            $this->notifyActor('Bulk action failed', $e->getMessage(), "/{$this->resource}", 'danger');

            throw $e;
        }
    }

    public function failed(Throwable $e): void
    {
        JobStatus::fail($this->token, $e->getMessage());
    }
}
