<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use PanelKit\Panel\Auth\Impersonation;
use RuntimeException;

/**
 * Start and stop wearing somebody else's account.
 *
 * THE CONTROLLER HOLDS NO RULES. Every refusal lives in `Impersonation`, which
 * is also what the user list asks before offering the action - one answer, given
 * in one place, to the client and to the request. A second copy of the checks
 * here is how a UI and a server drift into disagreeing.
 *
 * STOPPING IS NOT AUTHORISED, and that is deliberate. Whoever is impersonating
 * must always be able to get out, and the ability that let them in may have been
 * revoked in the meantime - by the very administrator trying to end it. A stop
 * that could itself be refused is a trap door.
 */
final class ImpersonationController extends Controller
{
    public function start(Request $request, User $user): RedirectResponse
    {
        $impersonation = app(Impersonation::class);

        /*
         * ROUTE-MODEL BINDING IS NOT A TENANT CHECK. `User` carries a tenant
         * global scope, but relying on that alone would make this endpoint's
         * safety a property of a model somebody could change. The 404 keeps an
         * out-of-tenant id indistinguishable from a missing one.
         */
        abort_unless(
            (string) $user->tenant_id === (string) $request->user()?->tenant_id,
            404,
        );

        try {
            $impersonation->start($request->user(), $user);
        } catch (RuntimeException $e) {
            return back()->withErrors(['impersonate' => $e->getMessage()]);
        }

        return redirect('/dashboard')->with('toast', [
            'type' => 'warning',
            'message' => "You are now viewing the panel as {$user->name}.",
        ]);
    }

    public function stop(Request $request): RedirectResponse
    {
        app(Impersonation::class)->stop();

        return redirect('/dashboard')->with('toast', [
            'type' => 'success',
            'message' => 'You are yourself again.',
        ]);
    }
}
