<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\Forms\Fields\Field;
use Alxtexh\Panel\Imports\CsvReader;
use Alxtexh\Panel\Imports\Importer;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\TenantContext;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Import records from a CSV, in two steps.
 *
 * TWO STEPS BECAUSE A MAPPING CANNOT BE GUESSED. A spreadsheet's headers are
 * whatever somebody typed - "Mobile", "Phone No.", "Tel" - and matching them to
 * fields by string similarity is a heuristic that is right often enough to be
 * trusted and wrong often enough to import phone numbers into the name column.
 * So: read the headers, let the operator map them, then import.
 *
 * THE DRY RUN IS THE SAME CODE PATH as the real one. It validates and maps
 * everything and writes nothing. A separate "check" implementation would be a
 * second thing to keep in step, and it would eventually approve a file the real
 * import then rejects - which is worse than no preview at all, because the
 * operator has been told it is fine.
 *
 * TENANT AND TIMESTAMPS COME FROM CONTEXT, never from the file. A CSV column
 * called `tenant_id` maps to nothing, because `Importer` refuses a mapping to a
 * field the form does not declare - and no form declares that one.
 */
final class ImportController extends Controller
{
    /** Rows written per insert. Bounded so a large file does not build one huge query. */
    private const CHUNK = 500;

    /** The file's headers, so a mapping can be chosen. */
    public function inspect(Request $request, string $resource): JsonResponse
    {
        $class = $this->resourceFor($resource);

        abort_unless($class::can('create'), 403);

        $request->validate([
            'file' => ['required', 'file', 'mimes:csv,txt', 'max:20480'],
        ]);

        $reader = new CsvReader($request->file('file')->getRealPath());

        return response()->json([
            'headers' => $reader->headers(),
            // The fields available to map ONTO, so the client never has to know
            // the form's shape independently.
            'fields' => array_map(
                static fn (Field $f): array => [
                    'key' => $f->key,
                    'label' => $f->toSchema()['label'] ?? $f->key,
                    'required' => in_array('required', $f->rules(), true),
                ],
                $class::formDefinition()->fields(),
            ),
        ]);
    }

    /**
     * Validate the file, and write it unless this is a dry run.
     */
    public function store(Request $request, string $resource): JsonResponse
    {
        $class = $this->resourceFor($resource);

        abort_unless($class::can('create'), 403);

        $validated = $request->validate([
            'file' => ['required', 'file', 'mimes:csv,txt', 'max:20480'],
            'mapping' => ['required', 'array', 'min:1'],
            'mapping.*' => ['required', 'string'],
            'dryRun' => ['boolean'],
        ]);

        $importer = new Importer($class::formDefinition(), $validated['mapping']);
        $reader = new CsvReader($request->file('file')->getRealPath());

        $result = $importer->process($reader->rows());

        if ($validated['dryRun'] ?? false) {
            return response()->json($result->toArray());
        }

        /*
         * NOTHING IS WRITTEN WHEN ANYTHING FAILED.
         *
         * The dry run exists so the operator sees the failures and fixes them;
         * writing the good rows anyway would mean a partial import they then
         * have to reconcile - and re-uploading the corrected file would
         * duplicate everything that succeeded the first time. All or nothing is
         * the safe default here precisely BECAUSE rows are validated
         * independently: they already know exactly what to fix.
         */
        if ($result->failed() > 0) {
            return response()->json([
                ...$result->toArray(),
                'written' => 0,
                'message' => 'Nothing was imported. Fix the rows below and try again.',
            ], 422);
        }

        $written = $this->write($class, $result->prepared);

        return response()->json([...$result->toArray(), 'written' => $written]);
    }

    /**
     * Bulk-insert the prepared rows, chunked.
     *
     * @param  class-string<\Alxtexh\Panel\Resources\Resource>  $class
     * @param  list<array<string, mixed>>  $rows
     */
    private function write(string $class, array $rows): int
    {
        if ($rows === []) {
            return 0;
        }

        $context = app(TenantContext::class);
        $model = $class::model();
        $now = now();

        $stamped = array_map(static function (array $row) use ($context, $now): array {
            $row['created_at'] = $now;
            $row['updated_at'] = $now;

            /*
             * The tenant comes from CONTEXT, and only in column mode.
             *
             * In dedicated-database mode the column does not exist and naming it
             * is a SQL error - the same rule every query in the kit follows.
             */
            if ($context->shouldScopeByColumn()) {
                $row[$context->column()] = $context->currentKey();
            }

            return $row;
        }, $rows);

        $written = 0;

        DB::transaction(function () use ($model, $stamped, &$written): void {
            foreach (array_chunk($stamped, self::CHUNK) as $chunk) {
                $model::query()->withoutGlobalScopes()->insert($chunk);
                $written += count($chunk);
            }
        });

        return $written;
    }

    /** @return class-string<\Alxtexh\Panel\Resources\Resource> */
    private function resourceFor(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        if ($class::formDefinition()->fields() === []) {
            throw new NotFoundHttpException("Resource [{$resource}] has no form to import into.");
        }

        return $class;
    }
}
