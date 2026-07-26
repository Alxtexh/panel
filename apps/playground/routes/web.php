<?php

use App\Http\Controllers\SearchController;
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

    // Lean JSON, not an Inertia render — the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');
});

require __DIR__.'/settings.php';
