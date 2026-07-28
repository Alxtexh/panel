<?php

declare(strict_types=1);

namespace App\Ai\Middleware;

use Closure;
use Illuminate\Support\Facades\RateLimiter;
// The prompt object is passed straight through, so it is typed loosely: the
// SDK is 0.x and the concrete class has moved between releases. Nothing here
// reads it.
use PanelKit\Panel\Support\TenantContext;
use RuntimeException;

/**
 * One organisation cannot spend another's budget.
 *
 * KEYED BY TENANT, NOT BY USER OR IP. A per-user limit is trivially widened by
 * adding colleagues, and an IP limit punishes a whole office behind one NAT
 * address while missing somebody on a home connection. The unit that pays the
 * bill is the organisation, so the organisation is the unit that is limited.
 *
 * NO TENANT MEANS NO PROMPT. Every other guard in this panel treats a missing
 * tenant as deny, and a language model call is the most expensive thing here to
 * treat as "probably fine" - an unattributed prompt is one nobody is billed for
 * and nobody notices.
 *
 * IT FAILS LOUDLY, unlike the audit recorder which deliberately does not. The
 * difference is what happens next: a lost audit entry costs a record of
 * something that already happened, while an unmetered prompt costs money and
 * keeps costing it. Refusing is the cheaper mistake.
 */
final class MeterPerTenant
{
    public function handle(object $prompt, Closure $next)
    {
        $tenant = app(TenantContext::class)->currentKey();

        if ($tenant === null) {
            throw new RuntimeException(
                'No organisation is resolved, so this prompt cannot be attributed or billed.'
            );
        }

        $perHour = (int) config('panel.ai.prompts_per_hour', 120);

        if ($perHour > 0) {
            $key = "panel-ai:{$tenant}";

            if (RateLimiter::tooManyAttempts($key, $perHour)) {
                $seconds = RateLimiter::availableIn($key);

                throw new RuntimeException(
                    'This organisation has reached its assistant limit for now. '
                    ."Try again in about ".ceil($seconds / 60).' minutes.'
                );
            }

            RateLimiter::hit($key, 3600);
        }

        return $next($prompt);
    }
}
