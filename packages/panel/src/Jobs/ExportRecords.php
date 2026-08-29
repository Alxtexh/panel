<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Alxtexh\Panel\Actions\ExportedFile;
use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Tables\Columns\Column;
use Throwable;

/**
 * Exports the CURRENT FILTERED VIEW to CSV, per addendum C.
 *
 * "Current filtered view" is the whole requirement. An export button that
 * ignores the filters and dumps the table is not the same feature: the operator
 * filtered to 43 overdue accounts and expects 43 rows, and silently receiving
 * 100,000 is both useless and a data-minimisation problem.
 *
 * WRITTEN IN CHUNKS, NEVER ASSEMBLED IN MEMORY. Building the CSV as a string
 * and writing it once needs the whole result set resident - 100k rows is
 * hundreds of megabytes and the worker dies with an allocation error, which
 * looks like an infrastructure problem rather than an export that was written
 * wrong. Rows stream to an open handle a chunk at a time, so memory is flat
 * whatever the row count.
 *
 * The file is keyed ONLY by the job token, so a filename can never be steered
 * by user input into a path traversal.
 */
final class ExportRecords implements ShouldQueue
{
    use ActsAsPanelUser;
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public int $tries = 1;

    public int $timeout = 900;

    private const CHUNK = 2000;

    /**
     * @param  array<string, mixed>  $query
     * @param  list<int|string>|null  $ids
     */
    /**
     * @param  string|null  $downloadPath  Where the notification should link.
     *
     * PASSED IN RATHER THAN BUILT HERE, because a queued job has no request and
     * therefore no idea which portal the export was started from. Building
     * "/{resource}/jobs/{token}/download" in this class sent every reseller and
     * platform export to a path that portal does not serve - a notification that
     * 404s, stored permanently, for a file that exists.
     */
    public function __construct(
        private readonly string $resource,
        private readonly array $query,
        private readonly ?array $ids,
        private readonly int|string $userId,
        private readonly string $token,
        private readonly ?string $downloadPath = null,
    ) {}

    public function handle(): void
    {
        $handle = null;
        $path = null;

        try {
            $class = $this->actAs($this->userId, $this->resource);

            if (! $class::can('viewAny')) {
                throw new \RuntimeException("Not authorized to export [{$this->resource}].");
            }

            $definition = $class::definition();
            $columns = $definition->getColumns();

            $disk = Storage::disk(config('panel.exports.disk', 'local'));
            $path = "panel-exports/{$this->token}.csv";

            // A real local path, because fputcsv needs a stream. Cloud disks
            // would need a temporary file first; the local disk is the default
            // and the only one this writes directly.
            $disk->makeDirectory('panel-exports');
            $absolute = $disk->path($path);

            $handle = fopen($absolute, 'w');

            if ($handle === false) {
                throw new \RuntimeException("Could not open [{$path}] for writing.");
            }

            /*
             * A BOM, so Excel reads UTF-8.
             *
             * Without it Excel assumes the local codepage and mangles every
             * non-ASCII name - which in this domain means most of them. The
             * file is not corrupt and no error appears anywhere; the customer
             * simply sees "Amina Achieng" spelled wrongly.
             */
            fwrite($handle, "\xEF\xBB\xBF");

            // Through toArray(): `label` is protected on Column, and the array
            // form is also what the client renders, so the CSV header and the
            // on-screen header cannot drift apart.
            $described = array_map(
                static fn (Column $c): array => $c->toArray(),
                $columns,
            );

            fputcsv($handle, array_map(
                static fn (array $c): string => (string) ($c['label'] ?? $c['key']),
                $described,
            ));

            $keys = array_map(static fn (array $c): string => (string) $c['key'], $described);

            $written = $definition->toListQuery($class::model())->eachMatching(
                Request::create('/', 'GET', $this->query),
                $this->ids,
                self::CHUNK,
                function (array $rows) use ($handle, $keys): void {
                    foreach ($rows as $row) {
                        fputcsv($handle, array_map(
                            static fn (string $key): string => self::stringify($row[$key] ?? null),
                            $keys,
                        ));
                    }
                },
            );

            fclose($handle);
            $handle = null;

            JobStatus::finish($this->token, ['done' => $written, 'total' => $written, 'file' => $path]);

            /*
             * RECORDED WHERE IT OUTLIVES THE CACHE. `JobStatus` is a one-hour
             * cache entry and this file is not - so an export downloaded an hour
             * later used to 404 while the CSV sat on disk, including from the
             * notification below, which is stored until somebody reads it.
             */
            ExportedFile::record(
                token: $this->token,
                ownerId: $this->userId,
                resource: $this->resource,
                disk: config('panel.exports.disk', 'local'),
                path: $path,
                rows: $written,
            );

            $this->notifyActor(
                'Your export is ready',
                number_format($written).' '.($written === 1 ? 'row' : 'rows').' exported from '.$this->resource.'.',
                $this->downloadPath ?? "/{$this->resource}/jobs/{$this->token}/download",
            );
        } catch (Throwable $e) {
            if (is_resource($handle)) {
                fclose($handle);
            }

            // A half-written CSV is worse than none: it looks complete and is
            // silently truncated.
            if ($path !== null) {
                Storage::disk(config('panel.exports.disk', 'local'))->delete($path);
            }

            JobStatus::fail($this->token, $e->getMessage());

            $this->notifyActor('Your export failed', $e->getMessage(), null, 'danger');

            throw $e;
        }
    }

    /**
     * Flatten a cell for CSV.
     *
     * A leading `=`, `+`, `-` or `@` is prefixed with a quote, because
     * spreadsheet software treats such a cell as a FORMULA. A stored value like
     * `=HYPERLINK(...)` becomes executable content in the recipient's
     * spreadsheet - CSV injection, and the panel would be the delivery
     * mechanism for data an operator typed in themselves.
     */
    private static function stringify(mixed $value): string
    {
        if ($value === null) {
            return '';
        }

        if (is_bool($value)) {
            return $value ? 'yes' : 'no';
        }

        if (is_array($value)) {
            $value = implode(', ', array_map(static fn ($v): string => (string) $v, $value));
        }

        $value = (string) $value;

        return preg_match('/^[=+\-@\t\r]/', $value) === 1 ? "'".$value : $value;
    }

    public function failed(Throwable $e): void
    {
        JobStatus::fail($this->token, $e->getMessage());
    }
}
