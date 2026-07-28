<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Actions\BulkRunner;
use PanelKit\Panel\Actions\JobStatus;
use PanelKit\Panel\Jobs\ExportRecords;
use PanelKit\Panel\Jobs\RunBulkAction;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use Symfony\Component\HttpFoundation\StreamedResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Bulk mutations and exports.
 *
 * THE INLINE / QUEUED SPLIT IS DECIDED BY WHETHER THE SET IS BOUNDED, not by a
 * row-count guess:
 *
 *   explicit ids       bounded by what a person can tick on screen → inline,
 *                      because a round trip that finishes in 40 ms should not
 *                      be handed to a worker and then polled for.
 *   select-all-matching unbounded → queued, because it can be the whole table.
 *
 * Counting first to choose would mean a full `COUNT(*)` on a filtered set
 * before doing any work, which is the blocking count §10 rejects everywhere
 * else in this codebase.
 *
 * NOTHING ABOUT WHAT AN ACTION DOES COMES FROM THE REQUEST. The client sends a
 * key; the mutation lives in the resource definition. This is the difference
 * between a bulk action and an arbitrary-write endpoint.
 */
final class BulkController extends Controller
{
    /** An explicit selection cannot exceed this; beyond it, select-all is the tool. */
    private const MAX_EXPLICIT_IDS = 1000;

    public function run(Request $request, string $resource, BulkRunner $runner): JsonResponse
    {
        $class = $this->guard($resource);

        $validated = $request->validate([
            'action' => ['required', 'string', 'max:64'],
            'all' => ['sometimes', 'boolean'],
            'ids' => ['sometimes', 'array', 'max:'.self::MAX_EXPLICIT_IDS],
            'ids.*' => ['required'],
        ]);

        $definition = $class::definition();
        $action = $definition->bulkAction($validated['action']);

        if ($action === null || ! $action->isRunnable()) {
            throw new NotFoundHttpException("No bulk action [{$validated['action']}] on [{$resource}].");
        }

        // Deny-by-default: the ability is declared by the action and resolved
        // against the resource policy, exactly like a single-record write.
        abort_unless($class::can($action->getAbility()), 403);

        $all = (bool) ($validated['all'] ?? false);
        $ids = $this->ids($validated);

        if (! $all && $ids === []) {
            return response()->json(['message' => 'Nothing was selected.'], 422);
        }

        if ($all) {
            $token = JobStatus::token();
            JobStatus::start($token, $this->actorId(), "bulk:{$action->key}");

            RunBulkAction::dispatch(
                $resource,
                $action->key,
                // The FILTERS travel, not the ids - see the job.
                $this->filterParameters($request),
                $this->actorId(),
                $token,
            );

            return response()->json(['status' => JobStatus::PENDING, 'token' => $token]);
        }

        $list = $definition->toListQuery($class::model());

        $affected = $runner->run(
            $action,
            $list->matching($request, $ids),
            $class::model(),
            $list->keyColumnName(),
        );

        return response()->json(['status' => JobStatus::DONE, 'affected' => $affected]);
    }

    /** Export the current filtered view. Always queued (addendum C). */
    public function export(Request $request, string $resource): JsonResponse
    {
        $class = $this->guard($resource);

        abort_unless($class::can('viewAny'), 403);

        $validated = $request->validate([
            'all' => ['sometimes', 'boolean'],
            'ids' => ['sometimes', 'array', 'max:'.self::MAX_EXPLICIT_IDS],
            'ids.*' => ['required'],
        ]);

        $ids = $this->ids($validated);
        $token = JobStatus::token();

        JobStatus::start($token, $this->actorId(), 'export');

        ExportRecords::dispatch(
            $resource,
            $this->filterParameters($request),
            ($validated['all'] ?? false) ? null : ($ids === [] ? null : $ids),
            $this->actorId(),
            $token,
        );

        return response()->json(['status' => JobStatus::PENDING, 'token' => $token]);
    }

    /** Progress for a queued job. Owner-checked, so a leaked token is inert. */
    public function status(Request $request, string $resource, string $token): JsonResponse
    {
        $this->guard($resource);

        $state = JobStatus::get($token, $this->actorId());

        if ($state === null) {
            throw new NotFoundHttpException('No such job.');
        }

        return response()->json([
            'status' => $state['status'],
            'done' => $state['done'],
            'total' => $state['total'],
            'error' => $state['error'],
            'downloadable' => $state['file'] !== null,
        ]);
    }

    /**
     * Download a finished export.
     *
     * The path is derived from the TOKEN alone and the token is owner-checked,
     * so there is no user-controlled component in the filename and nothing to
     * traverse with.
     */
    public function download(Request $request, string $resource, string $token): StreamedResponse
    {
        $class = $this->guard($resource);

        abort_unless($class::can('viewAny'), 403);

        $state = JobStatus::get($token, $this->actorId());

        if ($state === null || $state['status'] !== JobStatus::DONE || $state['file'] === null) {
            throw new NotFoundHttpException('No such export.');
        }

        $disk = Storage::disk(config('panel.exports.disk', 'local'));

        if (! $disk->exists($state['file'])) {
            throw new NotFoundHttpException('That export has expired.');
        }

        return $disk->download($state['file'], $class::key().'-'.now()->format('Y-m-d').'.csv');
    }

    /**
     * The parameters that describe the current view.
     *
     * Only the query string - a body cannot smuggle a filter the table never
     * offered, and pagination is dropped because a bulk action applies to the
     * whole filtered set rather than to the visible page.
     *
     * @return array<string, mixed>
     */
    private function filterParameters(Request $request): array
    {
        return array_diff_key($request->query(), array_flip(['cursor', 'page', 'per_page']));
    }

    /**
     * @param  array<string, mixed>  $validated
     * @return list<int|string>
     */
    private function ids(array $validated): array
    {
        return array_values(array_filter(
            array_map(
                static fn ($id): int|string => is_numeric($id) ? (int) $id : (string) $id,
                (array) ($validated['ids'] ?? []),
            ),
            static fn ($id): bool => $id !== '' && $id !== 0,
        ));
    }

    private function actorId(): int|string
    {
        $id = Auth::id();

        abort_if($id === null, 401);

        return $id;
    }

    /** @return class-string<resource> */
    private function guard(string $resource): string
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null || ! $class::isEnabled()) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        return $class;
    }
}
