<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Alxtexh\Panel\Auth\PasswordPolicy;
use Symfony\Component\HttpFoundation\Response;

/**
 * Send somebody with an expired password to change it, and nowhere else.
 *
 * THE WHOLE DIFFICULTY IS NOT LOCKING THEM OUT OF THE FIX. A redirect that
 * applies to every route includes the change-password screen itself, and the
 * result is a loop the person cannot leave and cannot report - the panel is
 * simply broken for them, with no error and no way back. Every exemption below
 * exists to keep one door open.
 *
 * IT IS A REDIRECT, NOT A 403. This is not "you may not"; it is "not until you
 * do this first", and a refusal would read as a permissions fault and be
 * reported as one.
 *
 * IT NEVER APPLIES TO A GUEST, and never to somebody being impersonated: an
 * expired password belongs to the account, and an administrator wearing it did
 * not set it and cannot be asked to change it. Prompting there would either
 * change somebody else's credential or dead-end the impersonation.
 */
final class RequirePasswordRenewal
{
    /**
     * Routes that must stay reachable with an expired password.
     *
     * NAMED, NOT PATTERN-MATCHED. A prefix rule like "anything under
     * /settings" is one refactor away from exempting the whole settings area,
     * and the failure would be silent: the policy simply stops applying to a
     * screen somebody moved.
     *
     * @var list<string>
     */
    private const ALWAYS_ALLOWED = [
        // The screen this middleware sends people to, and the endpoint it posts
        // to. Without both, the redirect is a loop.
        'password.change',
        'password.change.update',
        // The settings screen's own password form, which is a legitimate way to
        // satisfy the policy for somebody who happened to be there already.
        'user-password.update',

        // Getting OUT is always allowed. Somebody who would rather sign out
        // than change their password now must be able to, or the only exit is
        // clearing cookies.
        'logout',

        // Locking the screen is not using the panel, and an expired password
        // must not stop somebody protecting their desk when they walk away.
        'panel.lock',
        'panel.unlock',

        // Stopping an impersonation. Whoever is impersonating must always be
        // able to get back out - see `Impersonation`.
        'impersonate.stop',
    ];

    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user === null) {
            return $next($request);
        }

        /*
         * IMPERSONATION IS EXEMPT ENTIRELY. The expired password belongs to the
         * account being worn, not to the person wearing it; prompting would
         * either change somebody else's credential or leave the impersonation
         * with nowhere to go.
         */
        if ($request->session()->has('panel.impersonator')) {
            return $next($request);
        }

        if (! PasswordPolicy::fromConfig()->mustChange($user)) {
            return $next($request);
        }

        $name = (string) $request->route()?->getName();

        if (in_array($name, self::ALWAYS_ALLOWED, true)) {
            return $next($request);
        }

        /*
         * A NON-PAGE REQUEST IS REFUSED RATHER THAN REDIRECTED. Inertia follows
         * a redirect and swaps the page, which is right for a navigation and
         * wrong for a background poll - the operator would be thrown off the
         * screen they were reading by a notification check. 409 is what Inertia
         * already understands as "go somewhere else".
         */
        if ($request->expectsJson() && ! $request->header('X-Inertia')) {
            abort(423, 'This password must be changed before continuing.');
        }

        return redirect()
            ->route('password.change')
            ->with('toast', [
                'type' => 'warning',
                'message' => 'Your password has expired. Choose a new one to carry on.',
            ]);
    }
}
