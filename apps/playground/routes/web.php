<?php

use App\Http\Controllers\SearchController;
use PanelKit\Panel\Http\Controllers\RecordController;
use PanelKit\Panel\Http\Controllers\ResourceController;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\PanelManager;

/*
 | Resource segments come from the registry rather than a literal list, so a
 | generated resource is routable the moment it is discovered. Without this the
 | 'no hand editing' promise of --generate is false: the class would exist, be
 | discovered, and still 404.
 */
$panelResources = array_keys(app(PanelManager::class)->resources());

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () use ($panelResources) {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    // One route for every resource. Adding a screen is a PHP class, not a
    // route, a controller and a Vue file.
    Route::get('{resource}', [ResourceController::class, 'index'])
        ->whereIn('resource', $panelResources)
        ->name('panel.resource');

    // Writes. The precognitive middleware is registered so the endpoint can
    // answer validation-only requests, but no client uses it yet: the official
    // Precognition Vue/Inertia client peers on Inertia ^1 || ^2 and this app is
    // on Inertia 3. Rules still live in exactly one place either way.
    Route::middleware('precognitive')->group(function () use ($panelResources) {
        Route::post('{resource}', [RecordController::class, 'store'])
            ->whereIn('resource', $panelResources)->name('panel.store');
        Route::put('{resource}/{id}', [RecordController::class, 'update'])
            ->whereIn('resource', $panelResources)->name('panel.update');
    });

    Route::delete('{resource}/{id}', [RecordController::class, 'destroy'])
        ->whereIn('resource', $panelResources)->name('panel.destroy');

    // Lean JSON, not an Inertia render — the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');
});

require __DIR__.'/settings.php';
