<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Auth\PasskeyUnlock;
use Alxtexh\Panel\Panel;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelHome;
use Alxtexh\Panel\Support\PanelIdleActivity;

/**
 * Locking and unlocking one panel.
 *
 * THE PASSWORD CHECK IS THROTTLED on the route. Without it the unlock form is
 * a password oracle that anybody at the keyboard can hammer, and unlike sign-in
 * they already know the account.
 *
 * UNLOCK MUST RESET THE IDLE CLOCK before the redirect. The timestamp that
 * caused the lock is, by construction, already past the idle window. Leaving it
 * in place means the next authenticated request locks again immediately.
 *
 * THE REDIRECT TARGET IS THE SESSION'S, never a `?next=` from the form.
 */
final class PanelLockController extends Controller
{
    public function show(Request $request): Response|RedirectResponse
    {
        $panel = $this->panel();

        if (! PanelIdleActivity::isLocked($request)) {
            return redirect(PanelHome::urlFor($panel));
        }

        return Inertia::render('auth/LockScreen', [
            'action' => $this->url($panel, 'unlock'),
            'logoutUrl' => $this->logoutUrl($panel),
            'status' => $request->session()->get('status'),
            'passkeys' => PasskeyUnlock::offered(
                $request->user($panel->getGuard()),
                $this->named($panel, 'unlock.passkey.options'),
                $this->named($panel, 'unlock.passkey'),
            ),
        ]);
    }

    public function lock(Request $request): RedirectResponse
    {
        $panel = $this->panel();

        $request->session()->put('url.intended', url()->previous());
        $request->session()->put(PanelIdleActivity::LOCKED_AT, time());

        return redirect(PanelIdleActivity::lockScreenUrl($panel));
    }

    public function unlock(Request $request): RedirectResponse
    {
        $panel = $this->panel();

        $validated = $request->validate([
            'password' => ['required', 'string'],
        ]);

        $user = $request->user($panel->getGuard());

        if ($user === null || ! Hash::check($validated['password'], (string) $user->getAuthPassword())) {
            throw ValidationException::withMessages([
                'password' => 'That password is not correct.',
            ]);
        }

        PanelIdleActivity::clearLock($request);

        /*
         * BEFORE THE REDIRECT, and before regenerate copies the bag. The idle
         * middleware reads this on the next request; a stale value re-locks.
         */
        PanelIdleActivity::touch($request);

        $request->session()->regenerate();

        return redirect()->intended(PanelHome::urlFor($panel));
    }

    public function passkeyOptions(Request $request): JsonResponse
    {
        $panel = $this->panel();
        $user = $request->user($panel->getGuard());

        abort_if($user === null, 401);

        return PasskeyUnlock::optionsResponse($request, $user);
    }

    public function passkeyUnlock(Request $request): JsonResponse
    {
        $panel = $this->panel();
        $user = $request->user($panel->getGuard());

        abort_if($user === null, 401);

        PasskeyUnlock::verify($request, $user);

        PanelIdleActivity::clearLock($request);
        PanelIdleActivity::touch($request);
        $request->session()->regenerate();

        return response()->json([
            'redirect' => redirect()->intended(PanelHome::urlFor($panel))->getTargetUrl(),
        ]);
    }

    private function panel(): Panel
    {
        $panel = app(PanelManager::class)->currentPanel();

        abort_if($panel === null, 404);

        return $panel;
    }

    private function url(Panel $panel, string $path): string
    {
        return '/'.trim(trim($panel->getPath(), '/').'/'.$path, '/');
    }

    private function named(Panel $panel, string $suffix): ?string
    {
        $name = $panel->getRouteName().$suffix;

        return Route::has($name) ? route($name) : null;
    }

    private function logoutUrl(Panel $panel): ?string
    {
        $name = $panel->getRouteName().'logout';

        if (Route::has($name)) {
            return route($name);
        }

        if (Route::has('logout')) {
            return route('logout');
        }

        return null;
    }
}
