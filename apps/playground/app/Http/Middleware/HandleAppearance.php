<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Symfony\Component\HttpFoundation\Response;

class HandleAppearance
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        /*
         * LIGHT WHEN NOTHING HAS BEEN CHOSEN. The fallback was `system`, which
         * the pre-paint script resolved against `prefers-color-scheme` - so a
         * first visit on a dark-mode laptop opened a dark panel nobody had
         * asked for, and no setting anywhere said why.
         */
        View::share('appearance', $request->cookie('appearance') ?? 'light');

        return $next($request);
    }
}
