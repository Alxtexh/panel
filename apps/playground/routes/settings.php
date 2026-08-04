<?php

use App\Http\Controllers\Auth\PasswordRenewalController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\SecurityController;
use App\Http\Controllers\Settings\SettingsIndexController;
use App\Http\Controllers\Settings\WorkspacesController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Http\Controllers\AssistantSettingsController;

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

    /*
     | Workspaces - roadmap 5.6. The workspaces this person belongs to,
     | switching between them, and starting a new one. No workspace id in the
     | switch URL's path: it arrives in the body and is checked against the
     | MEMBERSHIP PIVOT, which is the entire authorisation - see the
     | controller.
     */
    Route::get('settings/workspaces', [WorkspacesController::class, 'edit'])->name('workspaces.edit');
    Route::post('settings/workspaces', [WorkspacesController::class, 'store'])->name('workspaces.store');
    Route::put('settings/workspaces/current', [WorkspacesController::class, 'switch'])->name('workspaces.switch');

    /*
     | The assistant's provider and key - E.1. Gated inside the controller on
     | `manage_assistant`, because whoever holds it decides which AI provider
     | reads the organisation's questions. The key itself never travels back
     | out of these routes; see the controller.
     */
    Route::get('settings/assistant', [AssistantSettingsController::class, 'edit'])->name('assistant-settings.edit');
    Route::put('settings/assistant', [AssistantSettingsController::class, 'update'])->name('assistant-settings.update');
    Route::delete('settings/assistant', [AssistantSettingsController::class, 'destroy'])->name('assistant-settings.destroy');
});
