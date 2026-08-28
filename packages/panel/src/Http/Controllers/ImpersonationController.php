<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Alxtexh\Panel\Auth\Impersonation;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelHome;

/**
 * The one half of impersonation every panel needs and none of them differ
 * on: getting back out.
 *
 * STARTING IS NOT HERE, DELIBERATELY. Becoming somebody is always an act
 * against a SPECIFIC resource's own model - `ImpersonateAction::make()`
 * builds the `RecordAction` for it, attached wherever a resource author
 * lists it, the same way `ReplicateAction` is attached rather than mounted
 * as its own route. Stopping has no such target: it is a fact about the
 * SESSION, true or false regardless of which resource anybody was looking
 * at when they started, so it is the one piece worth shipping mounted and
 * ready rather than asking every installation to write it once each.
 *
 * NOT AUTHORISED, and that is the same rule `Impersonation::stop()` already
 * documents: whoever is impersonating must always be able to get back out,
 * including after the ability that let them in was revoked in the
 * meantime - by the very administrator trying to end it. A stop that could
 * itself be refused is a trap door, not a safeguard.
 */
final class ImpersonationController extends Controller
{
    public function stop(Request $request, PanelManager $panels): RedirectResponse
    {
        app(Impersonation::class)->stop();

        return redirect(PanelHome::urlFor($panels->currentPanel()))->with('toast', [
            'type' => 'success',
            'message' => 'You are yourself again.',
        ]);
    }
}
