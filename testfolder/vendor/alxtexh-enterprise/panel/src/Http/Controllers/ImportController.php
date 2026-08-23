<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Alxtexh\Panel\Actions\ExportedFile;
use Alxtexh\Panel\Actions\JobStatus;
use Alxtexh\Panel\Imports\CsvReader;
use Alxtexh\Panel\Imports\Importer;
use Alxtexh\Panel\Jobs\ImportRecords;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Opt-in CSV import. Inspect, dry-run, queue the write, download failed rows.
 */
final class ImportController extends Controller
{
    public function inspect(Request $request, string $resource): JsonResponse
    {
        $class = $this->guard($resource);
        $path = $this->uploadedPath($request);

        try {
            $headers = (new CsvReader($path))->headers();
        } finally {
            @unlink($path);
        }

        $fields = array_map(
            static fn ($field): array => [
                'key' => $field->key,
                'label' => $field->resolvedLabel(),
                'required' => $field->isRequired(),
            ],
            $class::formDefinition()->fields(),
        );

        return response()->json(['headers' => $headers, 'fields' => $fields]);
    }

    public function store(Request $request, string $resource): JsonResponse
    {
        $class = $this->guard($resource);

        $validated = $request->validate([
            'file' => ['required', 'file'],
            'mapping' => ['required', 'array'],
            'mapping.*' => ['required', 'string'],
            'dryRun' => ['sometimes'],
        ]);

        $dryRun = filter_var($validated['dryRun'] ?? false, FILTER_VALIDATE_BOOLEAN);
        $mapping = array_filter(
            $validated['mapping'],
            static fn (string $field): bool => $field !== '',
        );

        $path = $this->uploadedPath($request);

        if ($dryRun) {
            try {
                $result = (new Importer($class::formDefinition(), $mapping))
                    ->process((new CsvReader($path))->rows());
            } finally {
                @unlink($path);
            }

            return response()->json($result->toArray());
        }

        $stored = $this->keepUpload($path);
        $token = JobStatus::token();
        $userId = Auth::id();

        abort_if($userId === null, 403);

        JobStatus::start($token, $userId, 'import');

        ImportRecords::dispatch($resource, $stored, $mapping, $userId, $token, false);

        $state = JobStatus::get($token, $userId);

        if ($state !== null && $state['status'] === JobStatus::DONE) {
            return response()->json([
                'importable' => $state['importable'] ?? 0,
                'failed' => $state['failed'] ?? 0,
                'failures' => $state['failures'] ?? [],
                'truncated' => $state['truncated'] ?? false,
                'written' => $state['written'] ?? 0,
                'token' => $token,
                'failuresDownload' => ($state['file'] ?? null) === null
                    ? null
                    : $class::baseUrl("import/failures/{$token}"),
            ]);
        }

        return response()->json([
            'queued' => true,
            'token' => $token,
            'status' => $state['status'] ?? JobStatus::PENDING,
        ]);
    }

    public function failures(Request $request, string $resource, string $token): StreamedResponse
    {
        $class = $this->guard($resource);
        abort_unless($class::can('create'), 403);

        $userId = Auth::id();
        abort_if($userId === null, 403);

        $export = ExportedFile::find($token, $userId);

        if ($export === null) {
            throw new NotFoundHttpException('No such import report.');
        }

        $disk = Storage::disk($export['disk']);

        if (! $disk->exists($export['path'])) {
            throw new NotFoundHttpException('That report is no longer available.');
        }

        return $disk->download($export['path'], 'import-failures.csv');
    }

    /** @return class-string<resource> */
    private function guard(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null || ! $class::isEnabled()) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        abort_unless($class::isAccessible(), 403);
        abort_unless($class::importable() && $class::can('create'), 404);

        return $class;
    }

    private function uploadedPath(Request $request): string
    {
        $file = $request->file('file');

        abort_if($file === null || ! $file->isValid(), 422, 'A CSV file is required.');

        $path = $file->getRealPath();

        abort_if($path === false, 422, 'That file could not be read.');

        $copy = sys_get_temp_dir().'/panel-import-'.uniqid('', true).'.csv';
        copy($path, $copy);

        return $copy;
    }

    private function keepUpload(string $path): string
    {
        $disk = Storage::disk(config('panel.exports.disk', 'local'));
        $disk->makeDirectory('panel-imports');
        $stored = 'panel-imports/pending-'.uniqid('', true).'.csv';
        $disk->put($stored, (string) file_get_contents($path));
        @unlink($path);

        return $disk->path($stored);
    }
}
