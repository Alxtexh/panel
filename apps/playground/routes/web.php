<?php

use App\Http\Controllers\ClientsController;
use App\Http\Controllers\PlansController;
use App\Http\Controllers\RoutersController;
use App\Http\Controllers\SearchController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    Route::get('clients', [ClientsController::class, 'index'])->name('clients.index');
    Route::get('routers', [RoutersController::class, 'index'])->name('routers.index');
    Route::get('plans', [PlansController::class, 'index'])->name('plans.index');

    // Lean JSON, not an Inertia render — the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');
});

require __DIR__.'/settings.php';
