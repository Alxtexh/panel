<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\Support\Locale;
use Symfony\Component\HttpFoundation\Response;

/**
 * Put the panel into the acting person's language.
 *
 * THE ORDER OF PREFERENCE IS DELIBERATE: the person, then the organisation, then
 * the installation. Somebody working in Arabic at an English-speaking ISP should
 * see Arabic, and the organisation's choice should still be the default for
 * everybody who has not expressed one.
 *
 * `Accept-Language` IS NOT CONSULTED, and that is a choice rather than an
 * omission. It reflects the browser's configuration, which is frequently the
 * language of the country the laptop was bought in - so honouring it silently
 * flips a panel to a language nobody selected, and the setting that would fix it
 * is now written in that language. An explicit choice or nothing.
 *
 * THE LOCALE MUST BE ONE WE HAVE. A stored value is data, and data can name a
 * language whose files were removed - which would otherwise render the whole
 * panel as raw translation keys.
 */
final class SetPanelLocale
{
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $this->preferred($request);

        if ($locale !== null) {
            app()->setLocale($locale);
        }

        return $next($request);
    }

    private function preferred(Request $request): ?string
    {
        $available = Locale::available();

        $candidates = [
            $request->user()?->getAttribute('locale'),
            $request->user()?->getAttribute('tenant')?->getAttribute('locale'),
        ];

        foreach ($candidates as $candidate) {
            if (is_string($candidate) && in_array($candidate, $available, true)) {
                return $candidate;
            }
        }

        return null;
    }
}
