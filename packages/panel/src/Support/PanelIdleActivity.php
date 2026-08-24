<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Alxtexh\Panel\Panel;
use Symfony\Component\HttpFoundation\Response;

/**
 * Session lock: last human activity, and how a request is answered when locked.
 *
 * THE IDLE CLOCK IS NOT THE SESSION CLOCK. Background Inertia polls (the bell,
 * deferred widgets, live updates) keep Laravel's session idle timer from ever
 * firing, because every poll is a request. This clock is written only for a
 * request a person caused. Unlock must write it too, or the timestamp that
 * caused the lock is still in the past and the next page request locks again.
 *
 * BACKGROUND REQUESTS MUST NOT HARD-NAVIGATE. Every Inertia visit carries
 * `X-Inertia`, including `X-Inertia-Partial-Data` polls. Answering those with
 * 409 + `X-Inertia-Location` tells the client to tear the current page out and
 * load the lock screen, on every tick. A quiet 423 is the signal a poller can
 * ignore. A full visit may 409.
 */
final class PanelIdleActivity
{
    public const LOCKED_AT = 'panel.locked_at';

    public const ACTIVITY_AT = 'panel.idle_activity_at';

    /**
     * Route-name suffixes that must stay reachable while locked.
     *
     * MATCHED AS A SUFFIX of the panel-prefixed name (`desk.unlock`), and also
     * as a bare name (`screens.locked`) for an application that registered the
     * screen itself before the package did.
     *
     * @var list<string>
     */
    private const EXEMPT_SUFFIXES = [
        'login',
        'two-factor.login',
        'two-factor.login.store',
        'logout',
        'unlock',
        'unlock.passkey',
        'unlock.passkey.options',
        'lock',
        'screens.locked',
        'password.request',
        'password.reset',
        'social.redirect',
        'social.callback',
    ];

    public static function touch(Request $request): void
    {
        if (! $request->hasSession()) {
            return;
        }

        $request->session()->put(self::ACTIVITY_AT, time());
    }

    public static function activityAt(Request $request): ?int
    {
        if (! $request->hasSession()) {
            return null;
        }

        $value = $request->session()->get(self::ACTIVITY_AT);

        return is_numeric($value) ? (int) $value : null;
    }

    public static function isIdleExpired(Request $request, Panel $panel): bool
    {
        $minutes = $panel->idleLockMinutes();

        if ($minutes === null || $minutes <= 0) {
            return false;
        }

        $at = self::activityAt($request);

        if ($at === null) {
            return false;
        }

        return (time() - $at) >= ($minutes * 60);
    }

    /**
     * A poll or partial reload, not a navigation the person asked for.
     *
     * CHECK THIS BEFORE `X-Inertia`. The partial header is how Inertia marks a
     * background reload; the Inertia header is also on those requests, and
     * treating "has X-Inertia" as "navigate" is how a locked panel with a
     * poller hard-navigates on every tick.
     */
    public static function isBackgroundRequest(Request $request): bool
    {
        return $request->headers->has('X-Inertia-Partial-Data')
            || $request->headers->has('X-Inertia-Partial-Except');
    }

    public static function isExempt(Request $request): bool
    {
        $name = (string) $request->route()?->getName();

        foreach (self::EXEMPT_SUFFIXES as $suffix) {
            if ($name === $suffix || str_ends_with($name, '.'.$suffix)) {
                return true;
            }
        }

        $path = trim($request->path(), '/');

        return $path === 'login' || str_ends_with($path, '/login');
    }

    public static function lockScreenUrl(Panel $panel): string
    {
        $prefixed = $panel->getRouteName().'screens.locked';

        if (\Illuminate\Support\Facades\Route::has($prefixed)) {
            return route($prefixed);
        }

        if (\Illuminate\Support\Facades\Route::has('screens.locked')) {
            return route('screens.locked');
        }

        return '/'.trim($panel->getPath().'/screens/locked', '/');
    }

    public static function lockUrl(Panel $panel): ?string
    {
        $name = $panel->getRouteName().'lock';

        if (\Illuminate\Support\Facades\Route::has($name)) {
            return route($name);
        }

        if (\Illuminate\Support\Facades\Route::has('panel.lock')) {
            return route('panel.lock');
        }

        return null;
    }

    public static function markLocked(Request $request): void
    {
        if (! $request->hasSession()) {
            return;
        }

        if (! $request->session()->has(self::LOCKED_AT)) {
            $request->session()->put('url.intended', url()->previous());
        }

        $request->session()->put(self::LOCKED_AT, time());
    }

    public static function clearLock(Request $request): void
    {
        if ($request->hasSession()) {
            $request->session()->forget(self::LOCKED_AT);
        }
    }

    public static function isLocked(Request $request): bool
    {
        return $request->hasSession() && $request->session()->has(self::LOCKED_AT);
    }

    public static function isLockScreenPath(string $path): bool
    {
        $path = '/'.trim($path, '/');

        return str_contains($path, '/screens/locked') || str_ends_with($path, 'screens/locked');
    }

    public static function deny(Request $request, Panel $panel): Response
    {
        $url = self::lockScreenUrl($panel);

        /*
         * BACKGROUND FIRST. A poll carrying both `X-Inertia` and
         * `X-Inertia-Partial-Data` must not receive 409 Location.
         */
        if (self::isBackgroundRequest($request)) {
            return response()->json(['message' => 'The panel is locked.'], 423);
        }

        if ($request->header('X-Inertia')) {
            return Inertia::location($url);
        }

        if ($request->expectsJson()) {
            return response()->json(['message' => 'The panel is locked.'], 423);
        }

        return redirect($url);
    }
}
