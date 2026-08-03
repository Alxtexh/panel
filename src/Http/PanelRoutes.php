<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http;

use Illuminate\Support\Facades\Route;
use PanelKit\Panel\Auth\Passkeys;
use PanelKit\Panel\Http\Controllers\BulkController;
use PanelKit\Panel\Http\Controllers\RecordController;
use PanelKit\Panel\Http\Controllers\ResourceController;
use PanelKit\Panel\Http\Controllers\UploadController;
use PanelKit\Panel\Panel;
use PanelKit\Panel\PanelManager;

/**
 * Every route a panel needs, mounted at that panel's path.
 *
 * IT EXISTS BECAUSE A SECOND PORTAL MEANT COPYING A HUNDRED AND SEVENTY LINES.
 * The resource routes lived inline in the application's `web.php`, mounted at
 * the root, against one flat registry. Adding a super-admin portal would have
 * meant duplicating all of it with a different prefix and a different guard, and
 * the copy would drift: a route added to one and not the other is a screen that
 * works in one portal and 404s in the other, with nothing to notice.
 *
 * SO A PANEL IS A REGISTRATION, NOT A ROUTE FILE. `PanelServiceProvider` calls
 * this once per registered panel; the path, the middleware and the resource set
 * all come from the `Panel` object. Running `make:panel` therefore produces a
 * working portal without anybody editing routes.
 *
 * THE RESOURCE SEGMENT IS CONSTRAINED TO *THIS PANEL'S* RESOURCES, and that is
 * the security property rather than a tidiness one. A shared `{resource}`
 * pattern would let `/app/tenants` resolve the super admin's Tenants resource
 * from inside a tenant-scoped request - a central-context query reached through
 * a tenant URL, which is the exact leak the multi-panel split exists to prevent.
 *
 * ROUTE NAMES ARE PREFIXED WITH THE PANEL ID. Two panels both naming a route
 * `panel.resource` would have the second silently overwrite the first, and every
 * generated URL in the first portal would point into the second.
 *
 * ORDERING IS LOAD-BEARING THROUGHOUT: every fixed segment - `create`, `bulk`,
 * `views`, `uploads` - must be declared before `{id}`, or it is captured as a
 * record id and the page 404s looking for a record called "create".
 */
final class PanelRoutes
{
    /**
     * Mount every panel that has been registered.
     *
     * CALLED FROM THE PROVIDER'S `boot`, so a panel added by a command is
     * routable on the next request with no route file edited. Resources are
     * discovered lazily, so this does not force discovery at boot - see
     * `PanelManager::resources`.
     */
    public static function registerAll(): void
    {
        // Once for the installation, not once per portal - the path is fixed by
        // the spec and a second registration would collide.
        self::wellKnown();

        foreach (app(PanelManager::class)->panels() as $panel) {
            self::register($panel);
        }
    }

    /**
     * Routes an APPLICATION wants inside every panel.
     *
     * THE EXTENSION POINT EXISTS BECAUSE SOME ROUTES CANNOT LIVE IN THE PACKAGE.
     * Import, saved views and the audit trail hang off a resource and are
     * answered by controllers in the application, so the package cannot declare
     * them - and while they were declared in `web.php` they existed for the
     * first portal only. A generated portal got the resource screens and
     * silently lost Import, with nothing to say why the button was missing.
     *
     * Registered once per application, called inside every panel's group with
     * that panel's resource keys.
     *
     * HELD IN THE CONTAINER, NOT IN A STATIC, and the difference is not
     * stylistic. A static list is appended to every time the route file loads
     * and never cleared - so across a test suite that boots the application a
     * thousand times it grew to a thousand copies of the same closure, each
     * registering the same routes for each of three panels. Nothing failed. The
     * suite simply went from forty-eight seconds to four minutes, which reads as
     * "the tests got slower" rather than as a leak.
     *
     * A container binding is rebuilt with the application, so a fresh boot gets
     * a fresh list. That is the same reason `PanelManager` is scoped.
     */
    private const EXTENSIONS = 'panelkit.route-extensions';

    /** @param callable(list<string>, Panel): void $routes */
    /**
     * The passkey discovery document, served once for the installation.
     *
     * OUTSIDE ANY PANEL PREFIX, because the spec fixes the path: a password
     * manager looks for `/.well-known/passkey-endpoints` and nowhere else, so it
     * cannot live inside `/admin` or `/platform`.
     *
     * REGISTERED EVEN WITHOUT FORTIFY, answering with an empty document rather
     * than a 404. A 404 tells a client the site is broken; an empty document
     * tells it there is nothing here to enrol, which is the true answer.
     */
    public static function wellKnown(): void
    {
        Route::get('.well-known/passkey-endpoints', static fn () => response()->json(
            Passkeys::available() ? Passkeys::endpoints() : []
        ))->name('panel.well-known.passkeys');
    }

    public static function extend(callable $routes): void
    {
        $extensions = app()->bound(self::EXTENSIONS) ? app(self::EXTENSIONS) : [];

        $extensions[] = $routes;

        app()->instance(self::EXTENSIONS, $extensions);
    }

    /** @return list<callable(list<string>, Panel): void> */
    private static function extensions(): array
    {
        return app()->bound(self::EXTENSIONS) ? (array) app(self::EXTENSIONS) : [];
    }

    public static function register(Panel $panel): void
    {
        $keys = array_keys(app(PanelManager::class)->resourcesFor($panel->id));

        /*
         * A PANEL WITH NO RESOURCES REGISTERS NOTHING BUT ITS HOME. `whereIn`
         * with an empty list matches nothing in some drivers and everything in
         * others; rather than depend on which, a portal with no resources yet
         * has no resource routes - and `make:panel-resource` gives it some.
         */

        /*
         * `UsePanel` FIRST, AHEAD OF EVERYTHING INCLUDING `auth`.
         *
         * IT WAS WRITTEN AND NEVER ATTACHED, which meant the panel serving a
         * request was always the default - so a central portal's routes ran
         * WITH tenant scoping and showed an operator's own organisation instead
         * of every organisation. Nothing failed; the list was simply wrong, and
         * on a platform screen "wrong" looks like "there is only one tenant".
         *
         * The id is a literal fixed at boot, so nothing a client sends can
         * influence which panel - and therefore which scoping - is in force.
         * Even the guard used to authenticate is a property of the panel, which
         * is why this runs before `auth` rather than after it.
         */
        Route::middleware([
            Middleware\UsePanel::class.':'.$panel->id,
            ...$panel->getMiddleware(),

            /*
             * THE SHARED PROPS - the sidebar, the panel and the signed-in
             * person. AFTER `UsePanel`, which is what makes "the current panel"
             * a fact rather than a guess, and after the application's own
             * middleware so anything it shares still wins.
             *
             * IN THE PACKAGE BECAUSE EVERY CONSUMER WAS WRITING IT. The registry
             * and `panelPages()` have always existed server-side and nothing
             * handed them to Inertia, so each application rebuilt the sidebar -
             * including the panel prefix and the ability filter, which are the
             * two parts whose failure is silent.
             */
            Middleware\SharePanelProps::class,
        ])
            ->prefix($panel->getPath())
            ->name($panel->getRouteName())
            ->group(function () use ($keys, $panel): void {
                /*
                 * THE HOME SCREEN, AND IT IS NOT DECORATION. A portal mounted at
                 * `/platform` whose only routes are `/platform/tenants` answers
                 * its own root with a 404 - so the first thing anybody does with
                 * a portal they just generated is hit an error page. It lists
                 * what the portal contains, which for a portal with nothing in
                 * it yet is the most useful thing it can say.
                 */
                /*
                 * NOT FOR A PANEL MOUNTED AT THE ROOT. That portal IS the
                 * application, and `/` already belongs to it - a marketing page,
                 * a redirect, whatever the app decided. Claiming it here would
                 * put a resource directory over somebody's landing page, and the
                 * two would race on declaration order.
                 */
                if (trim($panel->getPath(), '/') !== '') {
                    Route::get('/', [Controllers\PanelHomeController::class, 'index'])->name('home');
                }

                /*
                 * SINGULAR RESOURCES FIRST - roadmap 4.3. Each mounts at a
                 * FIXED segment, and fixed segments must be declared before
                 * the `{resource}` patterns or `/billing-settings` is
                 * captured as a resource key and 404s inside the controller
                 * instead of reaching its screen.
                 */
                foreach (app(PanelManager::class)->singularsFor($panel->id) as $key => $class) {
                    Route::get($key, [Controllers\SingularController::class, 'edit'])
                        ->defaults('singular', $key)
                        ->name('singular.'.$key);

                    Route::put($key.'/current', [Controllers\SingularController::class, 'update'])
                        ->defaults('singular', $key)
                        ->name('singular.'.$key.'.update');
                }

                /*
                 * DEFINING A CUSTOM FIELD - Part G.4. The dedicated screen is
                 * gone; the record forms' "+ Add a field" dialog posts here,
                 * and this is the only write path a definition has. A fixed
                 * segment, so it must precede the `{resource}` patterns.
                 */
                Route::post('custom-fields', [Controllers\CustomFieldController::class, 'store'])
                    ->name('custom-fields.store');

                /*
                 * PAGES FIRST, BEFORE THE `{resource}` PATTERNS, and the order
                 * is the whole correctness of it.
                 *
                 * Resource routes match through a `{resource}` placeholder
                 * constrained by `whereIn`, so `/settings` would be tried
                 * against that list before ever reaching a literal `settings`
                 * route declared afterwards. Registering pages second means any
                 * page whose slug the constraint happens to accept is
                 * unreachable, with a navigation entry still pointing at it -
                 * absent rather than 404, which is the hardest kind to notice.
                 *
                 * A SLUG THAT CLASHES CANNOT REACH HERE ANYWAY: `registerPages`
                 * throws when a page and a resource claim the same name. This
                 * ordering is the second line, for the case where the two are
                 * registered against different panels and the constraint is
                 * still wide enough to overlap.
                 */
                foreach (app(PanelManager::class)->pagesFor($panel->id) as $slug => $class) {
                    Route::get($class::uri(), [Controllers\PageController::class, 'show'])
                        ->defaults('page', $slug)
                        ->name('pages.'.$slug);

                    foreach ($class::actions() as $action => $ability) {
                        $method = strtolower($class::actionMethods()[$action] ?? 'post');
                        $suffix = $class::actionUris()[$action] ?? $action;

                        // An empty suffix puts the action on the page's own URI -
                        // `PUT /settings/organisation`, the ordinary save.
                        $uri = $suffix === ''
                            ? $class::uri()
                            : rtrim($class::uri(), '/').'/'.$suffix;

                        Route::{$method}($uri, [Controllers\PageController::class, 'action'])
                            ->defaults('page', $slug)
                            ->defaults('action', $action)
                            ->name('pages.'.$slug.'.'.$action);
                    }
                }

                if ($keys !== []) {
                    self::within($keys);
                }

                /*
                 * THE BIN, per portal.
                 *
                 * DECLARED HERE RATHER THAN IN `within()` because it takes no
                 * `{resource}` segment - it is the one screen that spans all of
                 * them - and because a portal whose resources are all
                 * hard-deleting still routes it, showing an empty bin rather
                 * than a 404.
                 */
                /*
                 * THE PERMISSION MATRIX, mounted by default.
                 *
                 * A framework that ships roles, a roles model and a reconciler
                 * and then leaves the SCREEN unrouted has shipped a permission
                 * system nobody can operate without writing a controller first.
                 * So it routes itself, beside trash, for the same reason: it
                 * takes no `{resource}` segment because it spans all of them.
                 *
                 * TURNED OFF BY AN APPLICATION THAT MOUNTS ITS OWN. The
                 * reference app puts this under `/settings/roles`, where its
                 * operators look for it, and two URLs rendering one screen is
                 * a way to make a bookmark disagree with a menu.
                 */
                // THE GLOBAL SWITCH AND THE PANEL'S OWN, both honoured. The
                // config key turns the matrix off everywhere; `->without()`
                // drops it from one portal, which is what a customer-facing
                // panel needs - its readers do not administer anybody's roles.
                if (config('panel.routes.roles', true) && $panel->offers('roles')) {
                    /*
                     * THE SAME COLLISION, FAILING THE SAME WAY.
                     *
                     * A resource keyed `roles` takes this URL - resource routes
                     * register first - and the permission matrix becomes
                     * unreachable with no error to notice. `registerPages()`
                     * throws for exactly this between a page and a resource;
                     * this route is not a page, so it has to say so itself, or
                     * the identical fault has two different outcomes depending
                     * on which screen happens to lose.
                     *
                     * `panel.routes.roles => false` is the escape: mount
                     * `RoleController` wherever you like and keep your resource.
                     */
                    if (array_key_exists('roles', app(PanelManager::class)->resources())) {
                        throw new \RuntimeException(
                            'A resource keyed [roles] collides with the panel\'s permission matrix at '
                            .'/roles, which would leave the matrix unreachable. Rename the resource, or '
                            .'set panel.routes.roles to false and mount RoleController at a path of your own.'
                        );
                    }

                    Route::get('roles', [Controllers\RoleController::class, 'index'])->name('roles');
                    Route::post('roles', [Controllers\RoleController::class, 'store'])->name('roles.store');
                    Route::put('roles/{role}', [Controllers\RoleController::class, 'update'])->name('roles.update');
                    Route::delete('roles/{role}', [Controllers\RoleController::class, 'destroy'])->name('roles.destroy');
                }

                /*
                 * THE BIN, ON PANELS THAT ASKED FOR IT. `->without(['trash'])`
                 * drops the ROUTE and not just the menu entry: hiding the entry
                 * would leave the URL answering, and a customer portal whose
                 * readers never delete anything does not need a recovery screen
                 * for records they cannot see.
                 */
                /*
                 * WHAT THE COMMAND PALETTE ASKS. A lean JSON endpoint rather
                 * than an Inertia render, because it fires on keystrokes - see
                 * the controller. Mounted per panel, so a portal searches its
                 * own resources and no others.
                 */
                Route::get('panel-search', Controllers\SearchController::class)->name('search');

                /*
                 * THE BELL. Also lean JSON and for the same reason - it may be
                 * polled, and re-rendering a page to answer "anything new?" is
                 * the cost this package exists to avoid.
                 *
                 * `read-all` IS DECLARED BEFORE `{id}/read` on purpose. It is
                 * not ambiguous with it - the segments differ - but the two
                 * sitting apart is how the pair ends up wrong when somebody
                 * later adds `notifications/{id}` as a POST.
                 */
                Route::get('notifications', [Controllers\NotificationController::class, 'index'])
                    ->name('notifications');
                Route::post('notifications/read-all', [Controllers\NotificationController::class, 'markAllRead'])
                    ->name('notifications.readAll');
                Route::post('notifications/{id}/read', [Controllers\NotificationController::class, 'markRead'])
                    ->name('notifications.read');
                Route::delete('notifications/{id}', [Controllers\NotificationController::class, 'destroy'])
                    ->name('notifications.destroy');

                if ($panel->offers('trash')) {
                    Route::get('trash', [Controllers\TrashController::class, 'index'])->name('trash');

                    /*
                     * BULK RESTORE AND BULK DESTROY. Emptying a bin one row at a
                     * time is forty requests and forty confirmations, so people
                     * either do not do it or write a script - and the second is
                     * worse. Both check the policy PER RECORD; the endpoint is a
                     * convenience, not a shortcut past the gate.
                     */
                    Route::post('trash/restore', [Controllers\TrashController::class, 'restore'])
                        ->name('trash.restore');

                    Route::delete('trash', [Controllers\TrashController::class, 'destroy'])
                        ->name('trash.destroy');

                    // How long the bin keeps things - an operational decision, so a
                    // setting rather than a deploy. Clamped server-side.
                    Route::patch('trash/settings', [Controllers\TrashController::class, 'updateSettings'])
                        ->name('trash.settings');
                }

                /*
                 * CLOSING AN ANNOUNCEMENT BANNER. Per person, and it writes the
                 * notice into that person's notifications rather than deleting
                 * it - somebody closes a banner because it is in the way, not
                 * because they are finished with it.
                 */
                Route::post('announcements/{id}/dismiss', [Controllers\AnnouncementController::class, 'dismiss'])
                    ->whereNumber('id')
                    ->name('announcements.dismiss');

                /*
                 * DESIGNING THE DOCUMENTS THAT LEAVE THE SYSTEM.
                 *
                 * DECLARED HERE RATHER THAN IN `within()`, like trash, because
                 * none of it takes a `{resource}` segment: a document kind is
                 * not a resource and a template is not one of its records.
                 *
                 * `{kind}` IS CONSTRAINED so it cannot swallow the resource
                 * routes below. Without the pattern, `documents/print` would
                 * match a kind called "print", and the failure would be a page
                 * that renders the wrong thing rather than a 404.
                 */
                /*
                 * DOCUMENT TEMPLATES, on panels that asked for them. A portal
                 * whose readers receive invoices has no business designing the
                 * letterhead they arrive on.
                 */
                if ($panel->offers('documents')) {
                    Route::prefix('documents')->name('documents.')->group(function (): void {
                        Route::get('/', [Controllers\DocumentTemplateController::class, 'index'])
                            ->name('index');

                        Route::get('{kind}', [Controllers\DocumentTemplateController::class, 'edit'])
                            ->where('kind', '[a-z0-9_-]+')
                            ->name('edit');

                        Route::put('{kind}', [Controllers\DocumentTemplateController::class, 'update'])
                            ->where('kind', '[a-z0-9_-]+')
                            ->name('update');

                        /*
                         * THE PREVIEW IS A POST, and not because it changes
                         * anything - it changes nothing. It carries the whole
                         * unsaved template, which is far past what belongs in a
                         * query string, and a GET would put a tenant's letterhead,
                         * support number and body copy into every access log and
                         * browser history entry on the way past.
                         */
                        Route::post('{kind}/preview', [Controllers\DocumentTemplateController::class, 'preview'])
                            ->where('kind', '[a-z0-9_-]+')
                            ->name('preview');

                        Route::get('{kind}/print', [Controllers\DocumentTemplateController::class, 'print'])
                            ->where('kind', '[a-z0-9_-]+')
                            ->name('print');
                    });
                }

                foreach (self::extensions() as $extension) {
                    $extension($keys, $panel);
                }

                /*
                 * PLUGIN ROUTES, INSIDE THE PANEL'S GROUP.
                 *
                 * That placement is the whole value: a plugin route gets the
                 * portal's prefix, middleware, guard and route-name prefix
                 * already applied, so it is authenticated and tenant-scoped
                 * exactly like a built-in one. A plugin registering routes from
                 * its own service provider would get none of that - and an
                 * unauthenticated route into a tenant's records is not something
                 * anybody spots while reviewing a package they did not write.
                 */
                foreach (app(PanelManager::class)->pluginRoutes($panel->id) as $routes) {
                    $routes($panel);
                }
            });
    }

    /**
     * The routes themselves, without the group.
     *
     * PUBLIC SO AN APPLICATION CAN MOUNT THEM INSIDE ITS OWN GROUP. The
     * playground's first panel sits at the root, inside a middleware group it
     * shares with its own screens - so it needs the definitions without the
     * prefix, while a generated portal needs the whole thing. One definition
     * either way, which is the entire reason this class exists: the alternative
     * was the second portal copying a hundred and seventy lines that then drift.
     *
     * @param  list<string>  $keys  Resource keys this mount may resolve.
     */
    public static function within(array $keys): void
    {
        /*
         * NESTED RESOURCES MOUNT UNDER THEIR PARENT, AND ONLY THERE - roadmap
         * 4.2. A resource declaring `$parent` gets the same CRUD surface at
         * `{parent}/{parentId}/{resource}` and is EXCLUDED from the flat set,
         * so `/sessions` does not route at all: the parent segment is the
         * authorisation context, and a flat spelling would be a way to reach
         * the rows without naming - and passing the policy of - the record
         * they belong to. One group per parent key, so the constraint can be
         * a literal.
         */
        $registry = app(PanelManager::class)->resources();

        $flat = [];
        $nested = [];

        foreach ($keys as $key) {
            $class = $registry[$key] ?? null;
            $parent = $class === null ? null : $class::parentResource();

            if ($parent === null) {
                $flat[] = $key;
            } else {
                $nested[$parent::key()][] = $key;
            }
        }

        foreach ($nested as $parentKey => $childKeys) {
            Route::prefix('{parent}/{parentId}')
                ->where(['parent' => $parentKey, 'parentId' => '[0-9]+'])
                // Pockets the prefix's parameters as request attributes and
                // forgets them from the route BEFORE controllers bind - see
                // the middleware for the positional-binding trap it defuses.
                ->middleware(Middleware\MountNestedResource::class)
                ->name('nested.'.$parentKey.'.')
                ->group(static fn () => self::crud($childKeys));
        }

        self::crud($flat);
    }

    /**
     * The CRUD surface for one set of resource keys - flat at the panel root,
     * or once per parent under a nested prefix. The controllers are the same
     * either way; a nested mount adds `{parent}` and `{parentId}` route
     * parameters, which `NestedContext` turns into a resolved, authorised
     * parent record.
     *
     * @param  list<string>  $keys
     */
    private static function crud(array $keys): void
    {
        if ($keys === []) {
            return;
        }

        /*
         * READS BEFORE WRITES, and fixed segments before `{id}` throughout.
         * The grouping below follows the order the routes must be declared in,
         * not the order they are conceptually related in - the constraint is the
         * router's, and rearranging for readability is how `create` becomes a
         * record id again.
         */
        Route::get('{resource}', [ResourceController::class, 'index'])
            ->whereIn('resource', $keys)->name('resource');

        // Lean JSON diff for the poll driver, not an Inertia render: it may be
        // asked every few seconds and usually answers with an empty array.
        Route::get('{resource}/updates', [ResourceController::class, 'updates'])
            ->whereIn('resource', $keys)->name('updates');

        Route::get('{resource}/field-options', [ResourceController::class, 'fieldOptions'])
            ->whereIn('resource', $keys)->name('fieldOptions');

        Route::get('{resource}/create', [ResourceController::class, 'create'])
            ->whereIn('resource', $keys)->name('create');

        Route::post('{resource}/bulk', [BulkController::class, 'run'])
            ->whereIn('resource', $keys)->name('bulk');

        Route::post('{resource}/export', [BulkController::class, 'export'])
            ->whereIn('resource', $keys)->name('export');

        Route::get('{resource}/jobs/{token}', [BulkController::class, 'status'])
            ->whereIn('resource', $keys)
            ->where('token', '[0-9a-fA-F-]{36}')
            ->name('job');

        Route::get('{resource}/jobs/{token}/download', [BulkController::class, 'download'])
            ->whereIn('resource', $keys)
            ->where('token', '[0-9a-fA-F-]{36}')
            ->name('job.download');

        /*
         * The upload endpoint takes the resource but no record: a file is chosen
         * before the record it belongs to exists. The DOWNLOAD takes both,
         * because that is what makes authorization possible - there is a record
         * to run a policy against.
         */
        Route::post('{resource}/uploads', [UploadController::class, 'store'])
            ->whereIn('resource', $keys)->name('upload');

        Route::delete('{resource}/uploads', [UploadController::class, 'destroy'])
            ->whereIn('resource', $keys)->name('upload.discard');

        Route::post('{resource}/reorder', [RecordController::class, 'reorder'])
            ->whereIn('resource', $keys)->name('reorder');

        Route::get('{resource}/{id}/file/{field}', [UploadController::class, 'show'])
            ->whereIn('resource', $keys)
            ->whereNumber('id')
            ->where('field', '[a-z0-9_]+')
            ->name('file');

        Route::get('{resource}/{id}', [ResourceController::class, 'show'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('show');

        Route::get('{resource}/{id}/relations/{relation}', [ResourceController::class, 'relation'])
            ->whereIn('resource', $keys)
            ->whereNumber('id')
            ->where('relation', '[a-z0-9_-]+')
            ->name('relation');

        Route::get('{resource}/{id}/edit', [ResourceController::class, 'edit'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('edit');

        /*
         * Writes. `precognitive` is registered so the endpoints can answer
         * validation-only requests; the rules live in one place either way.
         */
        Route::middleware('precognitive')->group(function () use ($keys): void {
            Route::post('{resource}', [RecordController::class, 'store'])
                ->whereIn('resource', $keys)->name('store');

            Route::put('{resource}/{id}', [RecordController::class, 'update'])
                ->whereIn('resource', $keys)->name('update');
        });

        /*
         * One declared action against one record. The request names a KEY; only
         * a key the resource's table declared resolves, so the endpoint can
         * never be talked into calling something the resource did not offer.
         */
        Route::post('{resource}/{id}/action', [RecordController::class, 'runAction'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('action');

        // One cell, from an editable column. Outside the precognitive group: an
        // inline edit has no form to validate ahead of, it just writes.
        Route::patch('{resource}/{id}/cell', [RecordController::class, 'updateCell'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('cell');

        /*
         * Restore and permanent delete are separate routes because they are
         * different acts with different permissions - and one of them cannot be
         * undone.
         */
        Route::post('{resource}/{id}/restore', [RecordController::class, 'restore'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('restore');

        Route::delete('{resource}/{id}/force', [RecordController::class, 'forceDestroy'])
            ->whereIn('resource', $keys)->whereNumber('id')->name('forceDestroy');

        Route::delete('{resource}/{id}', [RecordController::class, 'destroy'])
            ->whereIn('resource', $keys)->name('destroy');
    }
}
