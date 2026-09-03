<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Jobs;

use Alxtexh\Panel\Actions\ExportedFile;
use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Imports\ImportFailure;
use Alxtexh\Panel\Imports\ImportRetry;
use Alxtexh\Panel\Imports\Importer;
use Alxtexh\Panel\Imports\RowsReader;
use Alxtexh\Panel\Support\TenantContext;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\QueryException;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Storage;
use Throwable;

/**
 * Queued CSV import for one resource. Failures become a downloadable CSV.
 */
final class ImportRecords implements ShouldQueue
{
    use ActsAsPanelUser;
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public int $tries = 3;

    public array|int $backoff = [30, 120];

    public int $timeout = 900;

    /**
     * @param  array<string, string>  $mapping
     */
    public function __construct(
        private readonly string $resource,
        private readonly string $path,
        private readonly array $mapping,
        private readonly int|string $userId,
        private readonly string $token,
        private readonly bool $dryRun = false,
        private readonly bool $retainSource = false,
        /** @var list<int> */
        private readonly array $onlyLines = [],
        private readonly ?string $retryToken = null,
    ) {}

    public function handle(): void
    {
        $preserveSource = $this->retainSource;

        try {
            $class = $this->actAs($this->userId, $this->resource);

            if (! $class::importable() || ! $class::can('create')) {
                throw new \RuntimeException("Not authorized to import [{$this->resource}].");
            }

            if (RowsReader::isExcel($this->path) && ! $class::excelImport()) {
                throw new \RuntimeException('This resource imports CSV only.');
            }

            $form = $class::importForm();
            $importer = new Importer($form, $this->mapping);
            $reader = RowsReader::open($this->path);
            $result = $importer->process($reader->rows());

            if ($this->onlyLines !== []) {
                $wanted = array_fill_keys($this->onlyLines, true);
                $result = new \Alxtexh\Panel\Imports\ImportResult(
                    array_values(array_filter(
                        $result->prepared,
                        static fn ($row): bool => isset($wanted[$row->line]),
                    )),
                    array_values(array_filter(
                        $result->failures,
                        static fn ($failure): bool => isset($wanted[$failure->line]),
                    )),
                );
            }

            $saveFailures = [];
            $status = JobStatus::get($this->token, $this->userId) ?? [];
            $written = (int) ($status['done'] ?? 0);
            $processedLines = array_fill_keys(
                array_map('intval', (array) ($status['checkpoint'] ?? [])),
                true,
            );

            if (! $this->dryRun) {
                $model = $class::model();

                /*
                 * ONE BAD ROW MUST NOT ABORT THE BATCH - `Importer`'s own rule,
                 * and it held for a bad phone number, not for a duplicate
                 * access code. A unique-constraint violation is invisible to
                 * form validation (it has no query to check against) and only
                 * shows up here, at `save()` - so this is where it has to be
                 * caught, per row, or one collision undoes every row already
                 * written in the same batch and hands the operator a raw SQL
                 * message instead of "line 4: this access code is already in
                 * use."
                 */
                foreach ($result->prepared as $row) {
                    if (JobStatus::isCanceled($this->token)) {
                        return;
                    }

                    if (isset($processedLines[$row->line])) {
                        continue;
                    }

                    try {
                        $record = new $model;
                        $record->forceFill($row->data);
                        $this->applyTenant($record);
                        $record->save();
                        $written++;
                    } catch (Throwable $e) {
                        $saveFailures[] = new ImportFailure(
                            line: $row->line,
                            messages: [self::friendlySaveError($e)],
                        );
                    }

                    $processedLines[$row->line] = true;
                    JobStatus::checkpoint($this->token, array_keys($processedLines));

                    JobStatus::progress($this->token, $written, $result->importable());
                }
            }

            if (JobStatus::isCanceled($this->token)) {
                return;
            }

            $failures = [...$result->failures, ...$saveFailures];

            $failurePath = $this->writeFailures($failures);

            if ($failures !== []) {
                ImportRetry::store(
                    $this->token,
                    $this->userId,
                    $this->resource,
                    $this->path,
                    $this->mapping,
                    array_map(static fn (ImportFailure $failure): int => $failure->line, $failures),
                );

                if ($this->retryToken !== null) {
                    ImportRetry::forget($this->retryToken);
                }
            } elseif ($this->retryToken !== null) {
                ImportRetry::forget($this->retryToken);
                $preserveSource = false;
            }

            JobStatus::finish($this->token, [
                'done' => $written,
                'total' => $result->importable(),
                'importable' => $result->importable() - count($saveFailures),
                'failed' => count($failures),
                'failures' => array_map(
                    static fn ($f): array => $f->toArray(),
                    array_slice($failures, 0, 50),
                ),
                'truncated' => count($failures) > 50,
                'written' => $written,
                'file' => $failurePath,
            ]);

            if ($failurePath !== null) {
                ExportedFile::record(
                    token: $this->token,
                    ownerId: $this->userId,
                    resource: $this->resource,
                    disk: config('panel.exports.disk', 'local'),
                    path: $failurePath,
                    rows: $result->failed(),
                );
            }
        } catch (Throwable $e) {
            JobStatus::fail($this->token, $e->getMessage());

            throw $e;
        } finally {
            if (! $preserveSource && ! ImportRetry::find($this->token, $this->userId)) {
                @unlink($this->path);
            }
        }
    }

    public function failed(Throwable $e): void
    {
        JobStatus::fail($this->token, $e->getMessage());

        if (! $this->retainSource) {
            @unlink($this->path);
        }
    }

    /**
     * @param  list<\Alxtexh\Panel\Imports\ImportFailure>  $failures
     */
    private function writeFailures(array $failures): ?string
    {
        if ($failures === []) {
            return null;
        }

        $disk = Storage::disk(config('panel.exports.disk', 'local'));
        $path = "panel-imports/{$this->token}-failures.csv";
        $disk->makeDirectory('panel-imports');
        $absolute = $disk->path($path);
        $handle = fopen($absolute, 'w');

        if ($handle === false) {
            return null;
        }

        fwrite($handle, "\xEF\xBB\xBF");
        fputcsv($handle, ['line', 'errors']);

        foreach ($failures as $failure) {
            fputcsv($handle, [(string) $failure->line, implode('; ', $failure->messages)]);
        }

        fclose($handle);

        return $path;
    }

    /**
     * A DB-level save failure, worded for the operator rather than logged
     * for a developer.
     *
     * A UNIQUE VIOLATION IS BY FAR THE COMMON CASE - the form's own rules
     * validated everything they know how to; a duplicate access code, email
     * or slug is invisible to them because checking it means a query, not a
     * regex. `QueryException::errorInfo` carries the driver's own SQLSTATE
     * (`23000`, portable across MySQL/Postgres/SQLite) precisely so this does
     * not have to string-match a vendor-specific message. Anything else
     * (a NOT NULL column no field maps, a foreign key with no matching row)
     * is rarer and gets its own generic line rather than the SQL itself -
     * the raw text default names the column, the table and the values,
     * which read as fine detail to whoever wrote the migration and as noise
     * to whoever is looking at a spreadsheet.
     */
    private static function friendlySaveError(Throwable $e): string
    {
        if ($e instanceof QueryException && ($e->errorInfo[0] ?? null) === '23000') {
            return 'This row duplicates a value that must be unique (for example, an access code or email already in use).';
        }

        return 'This row could not be saved.';
    }

    private function applyTenant(Model $record): void
    {
        $context = app(TenantContext::class);

        if (! $context->shouldScopeByColumn()) {
            return;
        }

        if (! Schema::hasColumn($record->getTable(), $context->column())) {
            return;
        }

        if (! $record->hasGlobalScope(\Alxtexh\Panel\Models\Scopes\TenantScope::class)) {
            return;
        }

        $key = $context->currentKey();

        if ($key === null) {
            throw new \RuntimeException('No tenant resolved; refusing to import an unscoped record.');
        }

        $record->setAttribute($context->column(), $key);
    }
}
