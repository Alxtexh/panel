<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Jobs;

use Alxtexh\Panel\Actions\ExportedFile;
use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Imports\Importer;
use Alxtexh\Panel\Support\TenantContext;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Eloquent\Model;
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

    public int $tries = 1;

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
    ) {}

    public function handle(): void
    {
        try {
            $class = $this->actAs($this->userId, $this->resource);

            if (! $class::importable() || ! $class::can('create')) {
                throw new \RuntimeException("Not authorized to import [{$this->resource}].");
            }

            $form = $class::formDefinition();
            $importer = new Importer($form, $this->mapping);
            $reader = new \Alxtexh\Panel\Imports\CsvReader($this->path);
            $result = $importer->process($reader->rows());

            $written = 0;

            if (! $this->dryRun) {
                $model = $class::model();

                foreach ($result->prepared as $row) {
                    $record = new $model;
                    $record->forceFill($form->sanitize($row));
                    $this->applyTenant($record);
                    $record->save();
                    $written++;
                    JobStatus::progress($this->token, $written, $result->importable());
                }
            }

            $failurePath = $this->writeFailures($result->failures);

            JobStatus::finish($this->token, [
                'done' => $written,
                'total' => $result->importable(),
                'importable' => $result->importable(),
                'failed' => $result->failed(),
                'failures' => array_map(
                    static fn ($f): array => $f->toArray(),
                    array_slice($result->failures, 0, 50),
                ),
                'truncated' => $result->failed() > 50,
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
            @unlink($this->path);
        }
    }

    public function failed(Throwable $e): void
    {
        JobStatus::fail($this->token, $e->getMessage());
        @unlink($this->path);
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
