<?php

use Alxtexh\Panel\Http\Controllers\AssistantSettingsController;
use App\Http\Controllers\Auth\PasswordRenewalController;
use App\Http\Controllers\Settings\ProfileController;
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
    /*
     | THE SETTINGS INDEX IS THE PACKAGE'S NOW. `PanelRoutes` registers the same
     | URL for any panel that has not claimed it, and derives every row from
     | what that panel actually routes - so a portal that dropped a screen with
     | `->without()` stops listing it without this file being edited. This
     | application's assistant entry arrives through `SettingsIndex::add()`.
     */

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    /*
     | THE SECURITY SCREEN IS THE PACKAGE'S NOW, routes and all.
     |
     | This application kept its own controller at these URLs, which meant
     | `PanelRoutes::unclaimed` yielded and the packaged one never ran here -
     | so the two drifted, and the copy that shipped was the weaker one. It
     | had no budget on the current-password prompt and did not sign other
     | sessions out after a change; the packaged one has both, and now also
     | carries the password-reuse refusal and the Fortify two-factor state
     | handling that only existed here. Deleting these routes is what lets it
     | register - see `PanelRoutes`, which mounts `settings/security`,
     | `settings/password` and the two device endpoints together.
     */

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
    /*
     | WORKSPACES ARE THE PACKAGE'S NOW. `PanelRoutes` registers the same three
     | URLs for any panel that has not claimed them, against a controller that
     | names no model - `Tenants` resolves the organisation class from
     | `panel.tenancy.model` and the membership relation by asking this app's
     | User which of three conventional names it answers to.
     */

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
