<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/** Enforce an application-level request body ceiling before controller work. */
final class PayloadLimit
{
    public function handle(Request $request, Closure $next): Response
    {
        $limit = (int) config('panel.security.max_payload_kilobytes', 0);
        $lengthHeader = $request->headers->get('Content-Length');
        $length = $lengthHeader === null ? null : (int) $lengthHeader;

        if ($limit > 0 && $length !== null && $length > $limit * 1024) {
            return response()->json([
                'message' => 'The request payload is too large.',
                'maxKilobytes' => $limit,
            ], 413);
        }

        return $next($request);
    }
}
