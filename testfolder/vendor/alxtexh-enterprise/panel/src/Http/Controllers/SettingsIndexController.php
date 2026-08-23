<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use Alxtexh\Panel\Support\SettingsIndex;

/**
 * What there is under Settings.
 *
 * NO ABILITY GATES THE SCREEN ITSELF, because it lists only what the reader can
 * already open - `SettingsIndex` omits every entry whose route is unregistered
 * or whose permission they lack. Gating the index as well would hide the list
 * from somebody who has exactly one thing on it, which is the person who most
 * needs telling where it is.
 */
final class SettingsIndexController
{
    public function __invoke(Request $request): Response
    {
        return Inertia::render('settings/Index', [
            'entries' => SettingsIndex::entries($request),
        ]);
    }
}
