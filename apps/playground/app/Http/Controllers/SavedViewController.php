<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\SavedView;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tables\ViewState;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

/**
 * Create, update and delete one person's saved table settings.
 *
 * THE STATE IS SANITISED ON THE WAY IN, against the resource's own declared
 * columns and filters - see `ViewState`. Storing it verbatim would make this a
 * durable way to smuggle a sort column into an ORDER BY: unlike a query string,
 * a stored view is read back from the database and feels like it has already
 * been checked.
 *
 * OWNERSHIP IS A QUERY CONSTRAINT, NOT A POLICY CHECK. Every lookup here is
 * `where('user_id', $me)` on a tenant-scoped model, so another person's view is
 * not merely forbidden - it is not found. A policy would be a second place to
 * get the same rule right.
 */
final class SavedViewController extends Controller
{
    public function store(Request $request, string $resource): RedirectResponse
    {
        $table = $this->tableFor($resource);

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:80'],
            /*
             * PRESENT, not REQUIRED. Laravel treats an empty array as absent
             * for `required`, and an empty state is a legitimate view - "no
             * filters, default sort, all columns" is exactly what somebody
             * saves as "Everything". Requiring content would refuse the one
             * view that is easiest to describe.
             */
            'state' => ['present', 'array'],
            'is_default' => ['boolean'],
        ]);

        $user = $request->user();

        DB::transaction(function () use ($validated, $user, $resource, $table): void {
            /*
             * FOUND AND FILLED EXPLICITLY, not `updateOrCreate`.
             *
             * `tenant_id` and `user_id` are deliberately absent from `$fillable`
             * - they come from the acting context and a form field for either
             * would be a way to save a view into somebody else's account. Mass
             * assignment therefore DROPS them, silently, and the insert fails on
             * a NOT NULL constraint that says nothing about the actual cause.
             *
             * `forceFill` is right here for the same reason it is right in a
             * record action: these values come from the server's own context,
             * and the guard exists to protect against request input.
             */
            $view = SavedView::query()->firstOrNew([
                // The unique key. Saving twice under one name UPDATES rather
                // than failing on the constraint - which is what somebody means
                // by saving "Overdue" again after changing a filter.
                'user_id' => $user->id,
                'resource' => $resource,
                'name' => $validated['name'],
            ]);

            $view->forceFill([
                'tenant_id' => $user->tenant_id,
                'user_id' => $user->id,
                'resource' => $resource,
                'name' => $validated['name'],
                'state' => ViewState::sanitize($validated['state'], $table),
                'is_default' => (bool) ($validated['is_default'] ?? false),
            ])->save();

            if ($view->is_default) {
                $this->clearOtherDefaults($view);
            }
        });

        return back()->with('success', 'View saved.');
    }

    public function destroy(Request $request, string $resource, SavedView $view): RedirectResponse
    {
        $this->assertOwned($request, $resource, $view);

        $view->delete();

        return back()->with('success', 'View deleted.');
    }

    /** Make one view the default, and unmake every other. */
    public function makeDefault(Request $request, string $resource, SavedView $view): RedirectResponse
    {
        $this->assertOwned($request, $resource, $view);

        DB::transaction(function () use ($view): void {
            $view->forceFill(['is_default' => true])->save();

            $this->clearOtherDefaults($view);
        });

        return back();
    }

    /**
     * At most one default per user per resource.
     *
     * Enforced here rather than by a partial unique index, whose syntax differs
     * across engines. Inside the same transaction as the set, so a crash cannot
     * leave two defaults - which would make "the default" mean whichever row the
     * database happened to return first.
     */
    private function clearOtherDefaults(SavedView $view): void
    {
        SavedView::query()
            ->where('user_id', $view->user_id)
            ->where('resource', $view->resource)
            ->whereKeyNot($view->getKey())
            ->update(['is_default' => false]);
    }

    /**
     * NOT FOUND rather than forbidden, and the query is what decides.
     *
     * Route-model binding resolves through the tenant scope, so another
     * organisation's view never arrives here at all. This closes the remaining
     * case: a colleague in the SAME organisation, whose views are none of this
     * user's business either.
     */
    private function assertOwned(Request $request, string $resource, SavedView $view): void
    {
        if ($view->user_id !== $request->user()->id || $view->resource !== $resource) {
            throw new NotFoundHttpException('No such view.');
        }
    }

    private function tableFor(string $resource): Table
    {
        $class = app(PanelManager::class)->resource($resource);

        if ($class === null) {
            throw new NotFoundHttpException("No panel resource registered for [{$resource}].");
        }

        return $class::definition();
    }
}
