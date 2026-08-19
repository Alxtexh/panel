<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelAccess;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * After authentication: this person may use THIS panel.
 *
 * Guests are the auth middleware's problem. A signed-in user who fails
 * `canAccessPanel()` or `Panel::canAccess()` gets 403, not an empty shell.
 */
final class EnsureCanAccessPanel
{
    public function handle(Request $request, Closure $next): Response
    {
        $panel = app(PanelManager::class)->currentPanel();

        if ($panel === null) {
            return $next($request);
        }

        $user = $panel->user();

        if ($user === null) {
            return $next($request);
        }

        abort_unless(PanelAccess::allows($panel, $user), 403);

        return $next($request);
    }
}
