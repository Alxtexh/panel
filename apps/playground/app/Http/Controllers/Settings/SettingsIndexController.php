<?php

declare(strict_types=1);

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use App\Support\SettingsIndex;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * Where `/settings` actually goes, now that it goes somewhere.
 *
 * IT USED TO BE A REDIRECT STRAIGHT TO PROFILE - see roadmap 3.7. That was
 * fine at three settings pages and stopped being fine the moment a fourth
 * one needed somewhere to be discovered from; the sidebar it landed on had
 * no descriptions and nothing to search. This is the page every entry point
 * into settings - the account menu, a future one - should point at instead.
 */
final class SettingsIndexController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('settings/Index', [
            'entries' => SettingsIndex::entries($request->user()),
        ]);
    }
}
