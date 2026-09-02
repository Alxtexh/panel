<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\SetupWizardState;
use Symfony\Component\HttpFoundation\Response;

/**
 * Send somebody through the first-run setup wizard, and nowhere else, until
 * they finish or skip it.
 *
 * SAME SHAPE AS `RequirePasswordRenewal` - a redirect, not a 403 (this is
 * "not until you do this first", not "you may not"), guest- and
 * impersonation-exempt for the same reasons, and a named allow-list rather
 * than a path prefix so a screen moved out from under a prefix rule cannot
 * silently stop being exempt.
 *
 * SELF-GATING, NOT CONDITIONALLY WIRED. This is always present in
 * `Panel::getMiddleware()`'s stack; `offersSetupWizard()` makes it a no-op
 * for every panel that never called `Panel::setupWizard()`, the same way
 * every other entry in that fixed list decides for itself whether it applies.
 */
final class RedirectToSetupWizard
{
    /**
     * Routes that must stay reachable while the wizard is unfinished.
     *
     * @var list<string>
     */
    private const ALWAYS_ALLOWED = [
        // The wizard itself, and everything it posts to. Without all four,
        // the redirect is a loop.
        'setup-wizard',
        'setup-wizard.store',
        'setup-wizard.skip',
        'setup-wizard.complete',

        // Getting out is always allowed.
        'logout',

        // Locking the screen is not using the panel.
        'unlock',
        'lock',
        'screens.locked',
        'panel.unlock',
        'panel.lock',

        // Stopping an impersonation must always be reachable.
        'impersonate.stop',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user === null) {
            return $next($request);
        }

        /*
         * THE WIZARD BELONGS TO THE ACCOUNT BEING WORN, NOT THE ADMINISTRATOR
         * WEARING IT - same reasoning as `RequirePasswordRenewal`. An operator
         * impersonating a tenant to help them did not skip that tenant's own
         * setup, and forcing the wizard on them mid-impersonation would either
         * write setup data as the wrong account or dead-end the impersonation.
         */
        if ($request->session()->has('panel.impersonator')) {
            return $next($request);
        }

        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null || ! $panel->offersSetupWizard()) {
            return $next($request);
        }

        if (SetupWizardState::isDone($request)) {
            return $next($request);
        }

        $name = (string) $request->route()?->getName();

        if (self::routeIsAllowed($name)) {
            return $next($request);
        }

        if ($request->expectsJson() && ! $request->header('X-Inertia')) {
            abort(423, 'Finish the setup wizard before continuing.');
        }

        return redirect()->route($panel->getRouteName().'setup-wizard');
    }

    private static function routeIsAllowed(string $name): bool
    {
        foreach (self::ALWAYS_ALLOWED as $allowed) {
            if ($name === $allowed || str_ends_with($name, '.'.$allowed)) {
                return true;
            }
        }

        return false;
    }
}
