<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Refuse a request when the current plan does not include a declared module.
 *
 * FOUNDATION ONLY. Register it on YOUR product routes, not on PanelKit:
 *
 *     Route::middleware(['auth', 'panel.module:devices'])->group(...);
 *
 * The alias is `panel.module`. Passing an unknown key is still a deny. This
 * is the same idea as WhatsML `access_module:{slug}`: the plan lists modules,
 * middleware checks the list, the product stays out of the kit.
 */
final class EnsureModule
{
    public function handle(Request $request, Closure $next, string $module): Response
    {
        abort_unless(moduleEnabled($module), 403);

        return $next($request);
    }
}
