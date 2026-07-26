<?php

use App\Http\Controllers\ClientsController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'Dashboard')->name('dashboard');

    Route::get('clients', [ClientsController::class, 'index'])->name('clients.index');
});

require __DIR__.'/settings.php';
