<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Storage;
use InvalidArgumentException;
use PanelKit\Panel\Files\FileStore;
use PanelKit\Panel\Forms\Fields\FileUploadField;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Uploads in, files out.
 *
 * THE FIELD DECIDES WHAT IS ALLOWED, NOT THE REQUEST. The upload names the
 * resource and field it is for, and the limits are read from that field's
 * definition. A request that could state its own `accept` list and size cap
 * would be a request that permits itself, which is the whole of the check.
 *
 * READING IS AUTHORIZED, NOT MERELY OBSCURE. A private disk with an unguessable
 * path is a URL away from being public - links get pasted, logged, and put in
 * referrer headers. So a download resolves the record, runs the same `view`
 * policy the detail page runs, and only then streams. The path in the URL is
 * never the authority for anything.
 *
 * NOTHING IS SERVED INLINE. Every response is an attachment with `nosniff`,
 * because the one thing worse than storing a hostile file is rendering it on
 * the panel's own origin, where it inherits the session.
 */
final class UploadController extends Controller
{
    /** Accept a file into the pending area and hand back its handle. */
    public function store(Request $request, string $resource): JsonResponse
    {
        $validated = $request->validate([
            'file' => ['required', 'file'],
            'field' => ['required', 'string', 'max:64'],
        ]);

        $class = $this->resolve($resource);

        // Uploading is part of writing. Somebody who may not create or update
        // the resource has no business putting bytes on its disk - an endpoint
        // that only checked authentication would be free storage for any
        // account that can log in.
        abort_unless($class::can('create') || $class::can('update'), 403);

        $field = $this->field($class, $validated['field']);

        try {
            $pending = FileStore::acceptPending(
                $request->file('file'),
                $field->extensions(),
                $field->limitKilobytes(),
            );
        } catch (InvalidArgumentException $e) {
            // 422 with the reason: a rejected upload has to say WHY, or the
            // user tries the same file again. The messages describe the rule,
            // never the filesystem.
            return response()->json(['message' => $e->getMessage()], 422);
        }

        return response()->json($pending->toArray(), 201);
    }

    /** Discard a pending upload the user removed before saving. */
    public function destroy(Request $request, string $resource): JsonResponse
    {
        $validated = $request->validate(['handle' => ['required', 'string', 'max:64']]);

        $class = $this->resolve($resource);
        abort_unless($class::can('create') || $class::can('update'), 403);

        $meta = FileStore::readPending($validated['handle']);

        // Only the uploader may discard it, for the same reason only the
        // uploader may promote it.
        if ($meta !== null && ($meta['owner'] ?? null) === (string) $request->user()->id) {
            FileStore::forget($validated['handle']);
        }

        return response()->json(['ok' => true]);
    }

    /**
     * Stream a stored file, after checking the caller may see the RECORD.
     */
    public function show(Request $request, string $resource, string $id, string $field): StreamedResponse
    {
        $class = $this->resolve($resource);

        $record = $class::model()::query()->whereKey($id)->first();

        // The global tenant scope has already excluded another tenant's rows,
        // so this is a 404 for them rather than a 403 - which is also the
        // answer that reveals least.
        abort_if($record === null, 404);
        abort_unless($class::can('view', $record), 403);

        $definition = $this->field($class, $field);
        $path = $record->getAttribute($definition->key);

        abort_if(! is_string($path) || $path === '', 404);

        // Belt and braces: the path came from the record, not the URL, but a
        // record carrying a path outside its tenant is corrupt data and must
        // not be served on the strength of the record check alone.
        abort_unless(FileStore::belongsToCurrentTenant($path), 404);

        $disk = Storage::disk(FileStore::disk());
        abort_unless($disk->exists($path), 404);

        $described = FileStore::describe($path);

        return $disk->download($path, $described['name'] ?? basename($path), [
            // The stored type is not trusted at read time either. Forcing a
            // generic type and an attachment disposition means a file that got
            // past the upload checks still cannot execute in the panel's
            // origin.
            'Content-Type' => 'application/octet-stream',
            'X-Content-Type-Options' => 'nosniff',
            'Content-Security-Policy' => "default-src 'none'; sandbox",
        ]);
    }

    /** @return class-string<\PanelKit\Panel\Resources\Resource> */
    private function resolve(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No resource [{$resource}].");
        }

        return $class;
    }

    /**
     * The named field, and only if it is genuinely an upload field.
     *
     * A request naming any other field would otherwise borrow this endpoint's
     * write access to put a file wherever that field's defaults pointed.
     *
     * @param  class-string<\PanelKit\Panel\Resources\Resource>  $class
     */
    private function field(string $class, string $key): FileUploadField
    {
        foreach ($class::formDefinition()->fields() as $candidate) {
            if ($candidate->key === $key && $candidate instanceof FileUploadField) {
                return $candidate;
            }
        }

        throw new NotFoundHttpException("[{$key}] is not an upload field on this resource.");
    }
}
