<?php

use App\Http\Controllers\Auth\PasswordRenewalController;
use App\Http\Controllers\OrganisationController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\SecurityController;
use App\Http\Controllers\Settings\SettingsIndexController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;

/*
| PASSWORD RENEWAL.
|
| OUTSIDE THE `verified` GROUP AND EXEMPT FROM THE RENEWAL MIDDLEWARE ITSELF -
| see `RequirePasswordRenewal::ALWAYS_ALLOWED`. This is the screen somebody with
| an expired password is sent to, so anything that could stop them reaching it
| turns the policy into a loop with no error and no way out.
|
| NOT BEHIND `RequirePassword` either: the form already asks for the current
| password, and asking for the same secret twice on consecutive screens teaches
| people to type it without reading.
*/
Route::middleware(['auth'])->group(function () {
    Route::get('password/change', [PasswordRenewalController::class, 'edit'])
        ->name('password.change');

    Route::put('password/change', [PasswordRenewalController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('password.change.update');
});

Route::middleware(['auth'])->group(function () {
    /*
     | ROADMAP 3.7. This used to be `Route::redirect('settings',
     | '/settings/profile')` - a fine answer at three pages and a worse one
     | every page after that, because landing directly on Profile gives
     | nowhere to discover Security or Organisation exist except a sidebar
     | with no descriptions. Now it renders a searchable index instead.
     */
    Route::get('settings', [SettingsIndexController::class, 'index'])->name('settings.index');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('settings/security', [SecurityController::class, 'edit'])
        ->middleware(RequirePassword::class)
        ->name('security.edit');

    Route::put('settings/password', [SecurityController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');

    /*
     | The organisation, not the person. No tenant id appears in any of these
     | routes on purpose - the tenant comes from context, and a route that
     | accepted one would be a route for renaming somebody else's company.
     */
    Route::get('settings/organisation', [OrganisationController::class, 'edit'])->name('organisation.edit');
    Route::put('settings/organisation', [OrganisationController::class, 'update'])->name('organisation.update');
    Route::post('settings/organisation/logo', [OrganisationController::class, 'uploadLogo'])->name('organisation.logo.upload');
    Route::get('settings/organisation/logo', [OrganisationController::class, 'logo'])->name('organisation.logo');
});

Route::get('.well-known/passkey-endpoints', function () {
    return response()->json([
        'enroll' => route('security.edit'),
        'manage' => route('security.edit'),
    ]);
})->name('well-known.passkeys');
