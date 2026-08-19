<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Route;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\OnboardingSteps;

/**
 * First-run setup guide: dismiss once, or reopen from What's new.
 *
 * PER PERSON, not per installation. The cookie and the account's appearance
 * JSON are what stop the card reopening on every login.
 */
final class OnboardingController extends Controller
{
    public function dismiss(Request $request): RedirectResponse
    {
        abort_if($request->user() === null, 401);

        OnboardingSteps::persistDone($request);

        return back()->withCookie(OnboardingSteps::doneCookie(true));
    }

    public function reset(Request $request): RedirectResponse
    {
        abort_if($request->user() === null, 401);

        OnboardingSteps::persistOpen($request);

        $panel = app(PanelManager::class)->currentPanel();
        $home = $panel !== null && Route::has($panel->getRouteName().'pages.dashboard')
            ? route($panel->getRouteName().'pages.dashboard')
            : url('/dashboard');

        return redirect($home)->withCookie(OnboardingSteps::doneCookie(false));
    }
}
