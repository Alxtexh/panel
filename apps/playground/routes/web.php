<?php

use App\Http\Controllers\AppearanceController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\SearchController;
use PanelKit\Panel\Http\Controllers\BulkController;
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
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /*
     | In-panel content pages. Static, so Route::inertia is enough — they carry
     | no props and adding a controller for each would be three files that only
     | name a component.
     |
     | Declared BEFORE the resource routes: `{resource}` is constrained by
     | whereIn, so these could not be captured by it today, but the ordering
     | keeps that true if a resource is ever named `help`.
     */
    Route::inertia('help', 'support/Help')->name('support.help');
    Route::inertia('faq', 'support/Faq')->name('support.faq');
    Route::inertia('about', 'support/About')->name('support.about');
    Route::inertia('whats-new', 'support/WhatsNew')->name('support.whatsNew');

    /*
     | App screens. Under /apps/ so they never collide with the resource routes,
     | which match a bare {resource} segment.
     */
    Route::get('apps/mail', [MailController::class, 'index'])->name('apps.mail');
    Route::patch('apps/mail/{id}', [MailController::class, 'update'])->whereNumber('id')->name('apps.mail.update');

    Route::get('apps/chat', [ChatController::class, 'index'])->name('apps.chat');
    Route::post('apps/chat/{id}', [ChatController::class, 'send'])->whereNumber('id')->name('apps.chat.send');
    Route::post('apps/chat/{id}/read', [ChatController::class, 'markRead'])->whereNumber('id')->name('apps.chat.read');

    /*
     | One set of routes for every resource. Adding a screen is a PHP class.
     |
     | ORDER MATTERS: /create must be declared before /{id}, or 'create' is
     | captured as a record id and the create page 404s looking for a record
     | called "create".
     */
    Route::get('{resource}', [ResourceController::class, 'index'])
        ->whereIn('resource', $panelResources)->name('panel.resource');

    // Lean JSON diff for the poll driver. Declared before /{id} so 'updates'
    // is not captured as a record id.
    Route::get('{resource}/updates', [ResourceController::class, 'updates'])
        ->whereIn('resource', $panelResources)->name('panel.updates');

    Route::get('{resource}/field-options', [ResourceController::class, 'fieldOptions'])
        ->whereIn('resource', $panelResources)->name('panel.fieldOptions');

    Route::get('{resource}/create', [ResourceController::class, 'create'])
        ->whereIn('resource', $panelResources)->name('panel.create');

    /*
     | Bulk actions and exports. All declared before /{id} so 'bulk' and
     | 'export' are not captured as record ids — the same ordering trap the
     | create route documents.
     */
    Route::post('{resource}/bulk', [BulkController::class, 'run'])
        ->whereIn('resource', $panelResources)->name('panel.bulk');

    Route::post('{resource}/export', [BulkController::class, 'export'])
        ->whereIn('resource', $panelResources)->name('panel.export');

    Route::get('{resource}/jobs/{token}', [BulkController::class, 'status'])
        ->whereIn('resource', $panelResources)
        ->where('token', '[0-9a-fA-F-]{36}')
        ->name('panel.job');

    Route::get('{resource}/jobs/{token}/download', [BulkController::class, 'download'])
        ->whereIn('resource', $panelResources)
        ->where('token', '[0-9a-fA-F-]{36}')
        ->name('panel.job.download');

    Route::get('{resource}/{id}', [ResourceController::class, 'show'])
        ->whereIn('resource', $panelResources)->whereNumber('id')->name('panel.show');

    // Rows for a related list. Declared before /{id}/edit for the same
    // ordering reason the create route documents.
    Route::get('{resource}/{id}/relations/{relation}', [ResourceController::class, 'relation'])
        ->whereIn('resource', $panelResources)
        ->whereNumber('id')
        ->where('relation', '[a-z0-9_-]+')
        ->name('panel.relation');

    Route::get('{resource}/{id}/edit', [ResourceController::class, 'edit'])
        ->whereIn('resource', $panelResources)->whereNumber('id')->name('panel.edit');

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

    // One cell, from an editable column. Outside the precognitive group: an
    // inline edit has no form to validate ahead of, it just writes.
    Route::patch('{resource}/{id}/cell', [RecordController::class, 'updateCell'])
        ->whereIn('resource', $panelResources)->whereNumber('id')->name('panel.cell');

    Route::delete('{resource}/{id}', [RecordController::class, 'destroy'])
        ->whereIn('resource', $panelResources)->name('panel.destroy');

    // Lean JSON, not an Inertia render — the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');

    /*
     | The bell. Lean JSON too: it may be polled, and re-rendering a page to
     | answer "anything new?" is exactly the cost the live-update rules avoid.
     */
    // Display preferences, stored on the account so they follow the user to
    // another browser rather than living only in this one's localStorage.
    Route::put('settings/appearance', [AppearanceController::class, 'update'])->name('appearance.update');

    Route::get('notifications', [NotificationController::class, 'index'])->name('notifications');
    Route::post('notifications/read-all', [NotificationController::class, 'markAllRead'])
        ->name('notifications.readAll');
    Route::post('notifications/{id}/read', [NotificationController::class, 'markRead'])
        ->name('notifications.read');
    Route::delete('notifications/{id}', [NotificationController::class, 'destroy'])
        ->name('notifications.destroy');
});

require __DIR__.'/settings.php';
