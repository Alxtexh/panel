<?php

use App\Http\Controllers\SearchController;
use PanelKit\Panel\Http\Controllers\RecordController;
use PanelKit\Panel\Http\Controllers\ResourceController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    // One route for every resource. Adding a screen is a PHP class, not a
    // route, a controller and a Vue file.
    Route::get('{resource}', [ResourceController::class, 'index'])
        ->whereIn('resource', ['clients', 'routers', 'plans'])
        ->name('panel.resource');

    // Writes. The precognitive middleware is registered so the endpoint can
    // answer validation-only requests, but no client uses it yet: the official
    // Precognition Vue/Inertia client peers on Inertia ^1 || ^2 and this app is
    // on Inertia 3. Rules still live in exactly one place either way.
    Route::middleware('precognitive')->group(function () {
        Route::post('{resource}', [RecordController::class, 'store'])
            ->whereIn('resource', ['clients', 'routers', 'plans'])->name('panel.store');
        Route::put('{resource}/{id}', [RecordController::class, 'update'])
            ->whereIn('resource', ['clients', 'routers', 'plans'])->name('panel.update');
    });

    Route::delete('{resource}/{id}', [RecordController::class, 'destroy'])
        ->whereIn('resource', ['clients', 'routers', 'plans'])->name('panel.destroy');

    // Lean JSON, not an Inertia render — the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');
});

require __DIR__.'/settings.php';
