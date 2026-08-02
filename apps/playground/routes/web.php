<?php

use App\Http\Controllers\ApiReferenceController;
use App\Http\Controllers\AppearanceController;
use App\Http\Controllers\AssistantController;
use App\Http\Controllers\AuditController;
use App\Http\Controllers\Auth\MagicLinkController;
use App\Http\Controllers\Auth\OtpPasswordResetController;
use App\Http\Controllers\Auth\SocialLoginController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\ImpersonationController;
use App\Http\Controllers\ImportController;
use App\Http\Controllers\InvoiceController;
use App\Http\Controllers\LandingController;
use App\Http\Controllers\LockController;
use App\Http\Controllers\MailController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\OperationsController;
use App\Http\Controllers\SavedViewController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\Settings\DeviceController;
use App\Support\Guide;
use App\Support\HelpArticles;
use App\Support\LandingPresets;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use PanelKit\Panel\Http\Controllers\RoleController;
use PanelKit\Panel\Http\PanelRoutes;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\Blueprint;

/*
 | Resource segments come from the registry rather than a literal list, so a
 | generated resource is routable the moment it is discovered. Without this the
 | 'no hand editing' promise of --generate is false: the class would exist, be
 | discovered, and still 404.
 */
/*
 | THIS PANEL'S RESOURCES, not every registered one.
 |
 | It used to be the whole registry, which was the same list while one panel
 | existed. With a second portal it stops being: a central-panel resource in this
 | list would be mounted at the root, reachable from a tenant-scoped URL - a
 | central-context query reached through a tenant request, which is exactly what
 | the panel split exists to prevent.
 */
$panelResources = array_keys(app(PanelManager::class)->resourcesFor('admin'));

/*
 | THE PUBLIC FACE - Part G.9. PanelKit ships SEVERAL landing designs; which
 | one an installation shows is config, and `?design=` lets this reference
 | app demonstrate all three. See LandingController.
 */
Route::get('/', LandingController::class)->name('home');

/*
| PREVIEWING THE OTHER SHIPPED DESIGNS.
|
| A PATH RATHER THAN `?design=`. The front door is a URL people share, and a
| marketing address carrying a query parameter is both ugly and misleading -
| somebody passes on `/?design=console` and the recipient sees a design the
| installation does not use. `/` is now only ever the configured design, and
| trying the others is a route of its own that says what it is.
|
| The reference app needs this to demonstrate all three; an installation that
| ships one design simply never links to it.
*/
Route::get('preview/{design}', LandingController::class)
    ->whereIn('design', LandingPresets::names())
    ->name('landing.preview');

/*
| PASSWORDLESS AND OTP AUTH.
|
| Outside the auth group - these are how somebody who is NOT signed in gets in.
|
| THROTTLED HARD, and that is the actual security on both. A six-digit code is a
| million possibilities, which is nothing to a script; a magic-link request
| endpoint with no limit is a way to flood somebody's inbox and a way to
| enumerate addresses by timing. The limits are per minute and deliberately low -
| a person asking twice is normal, a person asking twenty times is not.
*/
/*
| SIGNING IN WITH A PROVIDER, AND ATTACHING ONE.
|
| DELIBERATELY NOT INSIDE THE `guest` GROUP. The same two URLs serve both
| purposes - a signed-out person signing in, and a signed-in person connecting
| an account from their security settings - and `guest` would bounce the second
| one away from the screen that offers it. Which of the two is happening is
| decided from the session, in the controller, not from where the route sits.
|
| THROTTLED, because a callback is an authentication endpoint: it takes a code
| from a query string and can end with somebody signed in. The limit is per
| minute and generous enough that a person retrying after denying consent never
| meets it.
*/
Route::middleware('throttle:10,1')->group(function (): void {
    Route::get('auth/{provider}/redirect', [SocialLoginController::class, 'redirect'])
        ->whereIn('provider', ['google', 'github'])
        ->name('social.redirect');

    Route::get('auth/{provider}/callback', [SocialLoginController::class, 'callback'])
        ->whereIn('provider', ['google', 'github'])
        ->name('social.callback');
});

Route::middleware('guest')->group(function (): void {
    Route::post('auth/otp/send', [OtpPasswordResetController::class, 'send'])
        ->middleware('throttle:5,1')->name('otp.send');

    Route::post('auth/otp/reset', [OtpPasswordResetController::class, 'reset'])
        ->middleware('throttle:6,1')->name('otp.reset');

    Route::post('auth/magic-link', [MagicLinkController::class, 'request'])
        ->middleware('throttle:5,1')->name('magic-link.request');

    /*
     | The redeem route is signed AND throttled. The signature is the real gate;
     | the throttle stops somebody grinding at signatures.
     */
    Route::get('auth/magic-link/consume', [MagicLinkController::class, 'consume'])
        ->middleware('throttle:10,1')->name('magic-link.consume');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    /*
     | In-panel content pages. Static, so Route::inertia is enough - they carry
     | no props and adding a controller for each would be three files that only
     | name a component.
     |
     | Declared BEFORE the resource routes: `{resource}` is constrained by
     | whereIn, so these could not be captured by it today, but the ordering
     | keeps that true if a resource is ever named `help`.
     */
    /*
     | INTERFACE SCREENS.
     |
     | Lock, verification and the error states, reachable on purpose. They are
     | the hardest screens in a panel to see: an error page is by definition
     | something you cannot summon, so it is also the one that ships broken and
     | nobody notices for months. A route that renders it deliberately is how it
     | gets reviewed like any other page.
     |
     | The error previews render the SAME component the exception handler uses.
     | A separate "demo" copy would be a copy that drifts, and the drift is
     | invisible until the day it matters.
     */
    /*
     | A workbench for looking at a page at a real device width, and the
     | in-panel documentation. Both are development surfaces rather than
     | operator screens, which is why they sit under /screens and /docs rather
     | than in the resource routes.
     */
    Route::get('screens/devices', fn () => Inertia::render('DevicePreview'))
        ->name('screens.devices');

    Route::get('docs', fn () => Inertia::render('Docs'))->name('docs');

    /*
     | The OpenAPI document Scalar renders.
     |
     | A ROUTE rather than an inline object, so anything else that wants it - a
     | client generator, an HTTP client, another team - can fetch it too, and it
     | does not exist only inside one page's JavaScript.
     */
    Route::get('docs/openapi.json', [ApiReferenceController::class, 'spec'])->name('docs.spec');

    /*
     | THE DOCUMENTATION, FOR A READER THAT IS NOT A PERSON.
     |
     | An agent asked to add a screen cannot click through thirty pages; it
     | fetches a file, or it guesses - and a guess here is a hand-written
     | controller that skips the tenant scope and looks completely fine. These
     | are the same content the screens render, as plain text.
     |
     | BEHIND AUTHENTICATION, like every other panel screen. The blueprint names
     | this installation's resources and portals, which is internal detail
     | whatever else it is.
     */
    Route::get('docs/llms.txt', fn () => response(
        Guide::llmsTxt(rtrim((string) config('app.url'), '/')),
    )->header('Content-Type', 'text/plain; charset=utf-8'))->name('docs.llms');

    Route::get('docs/guide.md', fn () => response(Guide::markdown())
        ->header('Content-Type', 'text/markdown; charset=utf-8'))->name('docs.guide');

    Route::get('docs/blueprint.md', fn () => response(
        Blueprint::markdown(),
    )->header('Content-Type', 'text/markdown; charset=utf-8'))->name('docs.blueprint');

    Route::get('screens/locked', fn () => Inertia::render('auth/LockScreen'))->name('screens.locked');

    /*
     | Lock and unlock.
     |
     | The unlock attempt is THROTTLED. Without it the form is a password oracle
     | that whoever is at the keyboard can hammer - and unlike the sign-in form
     | they already know the account, so it is a single-factor guess with the
     | username removed.
     */
    Route::post('lock', [LockController::class, 'lock'])->name('panel.lock');
    Route::post('unlock', [LockController::class, 'unlock'])
        ->middleware('throttle:6,1')
        ->name('panel.unlock');
    Route::get('screens/verify', fn () => Inertia::render('auth/VerifyOtp', [
        'sentTo' => '+254 7•• ••• 195',
    ]))->name('screens.verify');

    /*
     | A REAL 419, on demand.
     |
     | Session expiry is the one state that cannot be previewed as a page,
     | because it is handled as a dialog over whatever page you were on. So the
     | preview has to be a real response with that status, which the client's
     | transport hook then notices exactly as it would in production.
     */
    Route::post('screens/expire-session', fn () => response()->noContent(419))
        ->name('screens.expireSession');

    Route::get('screens/error/{status}', fn (int $status) => Inertia::render('errors/Error', [
        'status' => $status,
    ]))->whereIn('status', ['403', '404', '429', '500', '503'])->name('screens.error');

    /*
     | The articles come FROM THE SERVER, and the page still searches them in the
     | browser. They live in `HelpArticles` because the assistant indexes the
     | same array - see `App\Knowledge\HelpSource` - and a second copy in PHP is
     | how a panel ends up answering one thing on screen and another in chat.
     */
    Route::get('help', fn () => Inertia::render('support/Help', [
        'articles' => HelpArticles::all(),
    ]))->name('support.help');
    Route::inertia('faq', 'support/Faq')->name('support.faq');
    Route::inertia('about', 'support/About')->name('support.about');

    /*
     | How to build a panel with this framework.
     |
     | IN THE PANEL RATHER THAN IN A README. Documentation in a repository is
     | read once, by whoever set the project up; documentation in the running
     | application is read by whoever is looking at the thing it describes, at
     | the moment they have the question - and it stays honest, because every
     | claim on it is one screen away from being checked.
     */
    /*
     | THE BUILD GUIDE, ONE PAGE PER SUBJECT.
     |
     | It was a single page with thirteen sections, which is an orientation
     | rather than a reference - a section inside a long page cannot be linked in
     | a review, bookmarked, or sent with "read this first". Each subject now has
     | its own URL, and the content lives in `App\Support\Guide` so a test can
     | walk it: a group naming a page that does not exist fails rather than
     | rendering a dead link.
     */
    /*
     | SEARCHING THE GUIDE.
     |
     | Declared BEFORE the page route, because `{page?}` would otherwise capture
     | `search` and answer "no such page" - the classic fixed-segment-after-
     | wildcard mistake, and one that looks like the endpoint was never written.
     |
     | ON THE SERVER rather than shipping the whole guide to every reader: it is
     | tens of kilobytes of prose, and a search nobody performs would be paid for
     | by everybody who opens the documentation to read one paragraph.
     */
    Route::get('about/building/search', fn (Request $request) => response()->json([
        'results' => Guide::search((string) $request->query('q', '')),
    ]))->name('support.building.search');

    Route::get('about/building/{page?}', function (Request $request, ?string $page = null) {
        $page ??= Guide::slugs()[0];

        abort_unless(Guide::has($page), 404);

        // The term travels with the link from a search result, so the page can
        // mark it and scroll to it - the difference between finding a page and
        // finding an answer.
        $term = (string) $request->query('q', '');

        return Inertia::render('support/BuildGuide', [
            'groups' => Guide::groups(),
            'titles' => array_map(
                static fn (array $p): string => $p['title'],
                Guide::pages(),
            ),
            'page' => Guide::page($page, $term),
            'query' => $term,
            ...Guide::neighbours($page),
        ]);
    })->name('support.building');
    Route::inertia('whats-new', 'support/WhatsNew')->name('support.whatsNew');

    /*
     | Feature requests and bug reports, filed from the dialog in the app shell.
     |
     | Throttled per USER, not per IP: an office behind one NAT address is one IP
     | and many legitimate reporters, so an IP-keyed limit punishes a whole
     | organisation for one person and misses an abuser on a home connection.
     | Twelve an hour is far above anyone reporting in good faith and far below
     | anything that fills a disk.
     */
    /*
     | The permission matrix. Guarded inside the controller by `manage_roles`
     | rather than by middleware, so the refusal sits next to the reasoning.
     */
    /*
     | User management: people and roles, one screen, two tabs. They were two
     | unrelated places and are one job - granting somebody access meant knowing
     | that two screens in different sections had to agree.
     */

    /*
     | Impersonation.
     |
     | STOP IS OUTSIDE ANY ABILITY CHECK - see the controller. Whoever is
     | impersonating must always be able to get back out, including after the
     | ability that let them in has been taken away.
     */
    Route::post('impersonate/{user}', [ImpersonationController::class, 'start'])
        ->name('impersonate.start');
    Route::post('impersonate-stop', [ImpersonationController::class, 'stop'])
        ->name('impersonate.stop');

    /*
     | The installation's own health. Guarded inside the controller by
     | `view_operations`, which is a PANEL ability rather than a resource policy
     | - none of this belongs to any one organisation.
     */
    Route::get('operations/backups', [OperationsController::class, 'backups'])
        ->name('operations.backups');
    Route::get('operations/logs', [OperationsController::class, 'logs'])
        ->name('operations.logs');

    /*
     | What the installation is running: drivers, versions, tenancy mode, and
     | whether cron is ticking at all. Read-only - see the controller.
     */
    /*
     | MONITORING, WHICH IS WHAT THIS SCREEN SHOULD ALWAYS HAVE BEEN.
     |
     | It listed versions, drivers and the tenancy mode - what the installation
     | IS - and answered nothing an operator asks while something feels wrong.
     | It now leads with load, memory, disk, database latency, queue depth,
     | failed jobs and the scheduler heartbeat, and keeps the configuration
     | underneath.
     |
     | THE OLD PATH REDIRECTS rather than 404ing. It is in runbooks and
     | bookmarks, and a monitoring page that has moved is one somebody looks for
     | at exactly the wrong moment.
     */
    Route::get('operations/monitoring', [OperationsController::class, 'monitoring'])
        ->name('operations.monitoring');

    Route::get('operations/monitoring/metrics', [OperationsController::class, 'metrics'])
        ->name('operations.metrics');

    Route::redirect('operations/platform', 'operations/monitoring')
        ->name('operations.platform');

    /*
     | Taking a backup is additive and safe to offer. There is deliberately no
     | restore route - see `RunBackupNow`.
     */
    Route::post('operations/backups/run', [OperationsController::class, 'runBackup'])
        ->middleware('throttle:6,60')
        ->name('operations.backups.run');

    /*
     | Downloading is a GET so the browser can stream it to disk; everything
     | that CHANGES something is a POST or a DELETE, guarded by
     | `manage_backups` rather than by `view_operations`. See the controller.
     |
     | The restore is throttled hardest of all. It is the only endpoint here
     | that overwrites the live database, and the realistic way it gets called
     | twice is somebody clicking again because the first attempt gave no
     | instant feedback - which is exactly when a second one must not start.
     */
    Route::get('operations/backups/download', [OperationsController::class, 'downloadBackup'])
        ->name('operations.backups.download');

    Route::delete('operations/backups', [OperationsController::class, 'deleteBackups'])
        ->name('operations.backups.delete');

    Route::post('operations/backups/restore', [OperationsController::class, 'restoreBackup'])
        ->middleware('throttle:3,60')
        ->name('operations.backups.restore');

    /*
     | THE POLICY HAS ITS OWN URL NOW, because it outgrew the dialog it used to
     | live in. Declared BEFORE the download and restore routes for no reason
     | other than reading order: get, then put, on the same path.
     */
    /*
     | NAMED `configure`, NOT `settings.edit`, and the reason is generated code.
     | `operations.backups.settings` is already the PUT that saves the policy,
     | so a nested `settings.edit` would be a property on a function - Wayfinder
     | skips it silently and the page ends up with no route helper at all.
     */
    Route::get('operations/backups/settings', [OperationsController::class, 'backupSettings'])
        ->name('operations.backups.configure');

    Route::put('operations/backups/settings', [OperationsController::class, 'saveBackupSettings'])
        ->name('operations.backups.settings');

    Route::post('operations/backups/settings/history/{history}/restore', [OperationsController::class, 'restoreBackupSettingsHistory'])
        ->whereNumber('history')
        ->name('operations.backups.settings.history.restore');

    /*
     | Trying a destination makes an outbound request per call, and the button
     | sits beside a field somebody is editing - so it is throttled harder than
     | reading a page and more gently than starting a backup.
     */
    Route::post('operations/backups/destinations/test', [OperationsController::class, 'testBackupDestination'])
        ->middleware('throttle:20,1')
        ->name('operations.backups.destinations.test');

    /*
     | THE SAME SHAPE, AND THROTTLED HARDER. This one leaves the building: each
     | press posts to Telegram, and a bot that is hammered is rate-limited for
     | every message it sends afterwards - including the alert about the incident
     | somebody was testing for.
     */
    Route::post('operations/alerts/telegram/test', [OperationsController::class, 'testTelegram'])
        ->middleware('throttle:6,1')
        ->name('operations.alerts.telegram.test');

    Route::get('settings/roles', [RoleController::class, 'index'])->name('settings.roles');
    Route::post('settings/roles', [RoleController::class, 'store'])->name('settings.roles.store');
    Route::put('settings/roles/{role}', [RoleController::class, 'update'])->name('settings.roles.update');
    Route::delete('settings/roles/{role}', [RoleController::class, 'destroy'])->name('settings.roles.destroy');

    Route::post('feedback', [FeedbackController::class, 'store'])
        ->middleware('throttle:12,60')
        ->name('feedback.store');

    /*
     | App screens. Under /apps/ so they never collide with the resource routes,
     | which match a bare {resource} segment.
     */
    // No workspace route any more: the Connections screen (two independent
    // tables on one page) was removed by the user's direct instruction -
    // Part G.3. The `Workspace` primitive stays in the package, tested
    // directly in WorkspaceTest, for consumers that want the shape.

    Route::get('apps/mail', [MailController::class, 'index'])->name('apps.mail');
    Route::get('apps/mail/{id}', [MailController::class, 'show'])->whereNumber('id')->name('apps.mail.show');
    Route::patch('apps/mail/{id}', [MailController::class, 'update'])->whereNumber('id')->name('apps.mail.update');

    Route::get('apps/chat', [ChatController::class, 'index'])->name('apps.chat');

    /*
     | The stream that answers the assistant.
     |
     | THERE IS NO PAGE ANY MORE. The assistant is a drawer in the topbar, open
     | over whatever screen somebody is already on - see `AssistantDrawer.vue`.
     | A dedicated page answered an aside by navigating away from the work that
     | prompted it, and the filters and half-typed form went with it.
     |
     | THROTTLED PER USER because a model call costs money per token and the
     | endpoint is a text box - without a limit, one person holding a key down
     | is an invoice. Twenty a minute is far above anybody asking questions in
     | good faith and far below anything expensive.
     */
    /*
     | THE HISTORY. Conversations were stored, tenant-scoped and unreachable -
     | the only way back to one was to not close the drawer, so a good answer
     | from Monday was gone by Tuesday. Both endpoints are scoped to the
     | PARTICIPANT as well as the tenant: being in the same organisation is not a
     | reason to read what a colleague asked about their own customers.
     */
    Route::get('apps/assistant/conversations', [AssistantController::class, 'conversations'])
        ->name('apps.assistant.conversations');

    Route::get('apps/assistant/conversations/{id}', [AssistantController::class, 'conversation'])
        ->name('apps.assistant.conversation');

    Route::post('apps/assistant/stream', [AssistantController::class, 'stream'])
        ->middleware('throttle:20,1')
        ->name('apps.assistant.stream');
    Route::post('apps/chat/{id}', [ChatController::class, 'send'])->whereNumber('id')->name('apps.chat.send');
    Route::post('apps/chat/{id}/read', [ChatController::class, 'markRead'])->whereNumber('id')->name('apps.chat.read');

    /*
     | THE WHOLE RESOURCE SURFACE, FROM THE PACKAGE.
     |
     | It was a hundred and seventy lines inlined here, which was fine while
     | there was one portal and became the obstacle the moment there were two:
     | a super-admin panel would have meant copying all of it with a different
     | prefix and a different guard, and the copy drifts. A route added to one
     | and not the other is a screen that works in one portal and 404s in the
     | other, with nothing to notice.
     |
     | `within()` rather than `register()` because THIS panel sits at the root,
     | inside the middleware group it shares with the application's own screens.
     | A generated portal gets `register()`, which wraps the same definitions in
     | its own prefix, middleware and route-name prefix. One definition either
     | way - see `PanelRoutes`.
     |
     | SCOPED TO THE ADMIN PANEL'S RESOURCES, not to every registered resource.
     | A shared `{resource}` pattern would let a central-panel resource resolve
     | from a tenant-scoped URL, which is a central-context query reached through
     | a tenant request.
     */
    /*
     | The resource routes are NOT declared here any more.
     |
     | `AdminPanelProvider` registers this portal, and `PanelRoutes::registerAll`
     | mounts every registered panel at its own path with its own guard - so this
     | portal and a generated one go through exactly the same code. What is left
     | below is only what this APPLICATION adds on top of the package's surface.
     */

    /*
     | Application-level extras that hang off a resource, REGISTERED FOR EVERY
     | PANEL rather than only for this one.
     |
     | They are answered by controllers in this application, so the package
     | cannot declare them - and while they were declared inline here they
     | existed for the first portal only. A generated portal got the resource
     | screens and silently lost Import: the button was simply absent, with
     | nothing to say why.
     |
     | `PanelRoutes::extend` runs this inside each panel's group, with that
     | panel's resource keys and its own route-name prefix - so `/platform`
     | gets `platform.import` over the platform's resources and nothing else.
     |
     | Declared OUTSIDE this group, at the bottom of the file, because it is a
     | registration rather than a route: putting it here would nest one panel's
     | routes inside another's middleware.
     */

    // Lean JSON, not an Inertia render - the palette fires per keystroke.
    Route::get('search', SearchController::class)->name('search');

    /*
     | The bell. Lean JSON too: it may be polled, and re-rendering a page to
     | answer "anything new?" is exactly the cost the live-update rules avoid.
     */
    // Display preferences, stored on the account so they follow the user to
    // another browser rather than living only in this one's localStorage.
    /*
     | Signed-in devices.
     |
     | Under settings because a session is a fact about YOUR account, not a
     | report about subscribers - the panel briefly had a "Sessions" screen that
     | meant client connections, which is a different thing wearing the same
     | word.
     */
    Route::delete('settings/connected-accounts/{connectedAccount}', [SocialLoginController::class, 'destroy'])
        ->name('social.destroy');

    Route::delete('settings/devices/{id}', [DeviceController::class, 'destroy'])
        ->name('settings.devices.destroy');

    Route::delete('settings/devices', [DeviceController::class, 'destroyOthers'])
        ->name('settings.devices.destroyOthers');

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

/*
|--------------------------------------------------------------------------
| Panel extensions
|--------------------------------------------------------------------------
|
| Routes this APPLICATION adds to every panel. They hang off a resource and are
| answered by controllers here, so the package cannot ship them - and declaring
| them inline gave them to the first portal only.
|
| Each is a fixed segment that `{resource}/{id}` would otherwise capture, which
| is why they carry their own constraints.
*/
PanelRoutes::extend(function (array $resources): void {
    if ($resources === []) {
        return;
    }

    Route::post('{resource}/import/inspect', [ImportController::class, 'inspect'])
        ->whereIn('resource', $resources)->name('import.inspect');

    Route::post('{resource}/import', [ImportController::class, 'store'])
        ->whereIn('resource', $resources)->name('import');

    Route::post('{resource}/views', [SavedViewController::class, 'store'])
        ->whereIn('resource', $resources)->name('views.store');

    Route::delete('{resource}/views/{view}', [SavedViewController::class, 'destroy'])
        ->whereIn('resource', $resources)->whereNumber('view')->name('views.destroy');

    Route::post('{resource}/views/{view}/default', [SavedViewController::class, 'makeDefault'])
        ->whereIn('resource', $resources)->whereNumber('view')->name('views.default');

    /* The history of one record. */
    Route::get('{resource}/{id}/audit', [AuditController::class, 'index'])
        ->whereIn('resource', $resources)->name('audit');

    /*
     | A printable invoice for one subscriber.
     |
     | GUARDED BY THE RESOURCE BEING PRESENT, because it is the one extra here
     | that names a specific resource rather than working over any of them. A
     | portal without `clients` must not get a route pointing at a controller
     | that assumes one.
     */
    if (in_array('clients', $resources, true)) {
        Route::get('clients/{client}/invoice', [InvoiceController::class, 'show'])
            ->whereNumber('client')->name('invoice');
    }
});
