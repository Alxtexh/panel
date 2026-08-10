<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests;

use Alxtexh\Panel\PanelServiceProvider;
use Alxtexh\Panel\Tests\Fixtures\Providers\FixturePanelProvider;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Inertia\Inertia;
use Illuminate\Contracts\Config\Repository;
use Inertia\ServiceProvider as InertiaServiceProvider;
use Orchestra\Testbench\TestCase as BaseTestCase;
use Spatie\Permission\PermissionServiceProvider;

/**
 * The package's own test host, standing up without the reference application.
 *
 * IT DID NOT EXIST, AND THE COMPOSER FILE SAID IT SHOULD. `require-dev` has
 * carried `orchestra/testbench` and `pestphp/pest` and `autoload-dev` has
 * mapped `Alxtexh\Panel\Tests\` at `tests/` for as long as this package has
 * existed - and there was no `tests/` directory. Every one of the 207 test
 * files lived in `apps/playground` and ran against that application's ISP
 * models: `Client`, `Router`, `ClientSession`.
 *
 * WHY THAT IS THE PROBLEM AND NOT A DETAIL. A framework tested only inside one
 * application cannot tell its own behaviour apart from that application's. It
 * is the blind spot `STARTER_PLAN.md` names for the installer - "every existing
 * test runs inside the playground, which already has the config, the layout,
 * the Tailwind sources and the guards" - and it is what hid the `auth/Login`
 * collision for a release. The same shape hid the announcements plugin being
 * ungated: found by installing into a bare app, not by any of the 207.
 *
 * FILAMENT'S ANSWER IS THIS FILE. Its framework tests run on Testbench against
 * `tests/src/Fixtures/Models` - Post, Team, Company, Product - which are
 * deliberately generic and belong to nobody's business. It ships no Eloquent
 * models at all; the seven files under its `src/Models` are contracts. So the
 * demo can be as elaborate as it likes without the framework depending on a
 * single one of its tables.
 *
 * THE DEMO IS NOT DELETED AND IS NOT THE POINT. `apps/playground` stays as the
 * reference the README tells people to copy. What moves out is the framework's
 * DEPENDENCE on it: a test that belongs to the package registers a fixture
 * resource over a fixture model here, and passes or fails on its own terms.
 */
abstract class TestCase extends BaseTestCase
{
    protected function getPackageProviders($app): array
    {
        return [
            InertiaServiceProvider::class,
            PermissionServiceProvider::class,
            PanelServiceProvider::class,
            FixturePanelProvider::class,
        ];
    }

    /**
     * A SQLite file in memory, and the permission tables the panel assumes.
     *
     * `spatie/laravel-permission` is a hard requirement of this package rather
     * than a suggestion - the ability checks go through its guard - so a host
     * that has not migrated its tables fails in the gate rather than in a
     * place that names the cause.
     */
    protected function defineEnvironment($app): void
    {
        tap($app->make(Repository::class), static function (Repository $config): void {
            $config->set('database.default', 'testing');
            $config->set('database.connections.testing', [
                'driver' => 'sqlite',
                'database' => ':memory:',
                'prefix' => '',
            ]);

            // The panel denies when no tenant resolves, so a fixture panel
            // declaring no tenancy has to say so rather than inherit a mode
            // that expects a `tenant_id` these fixtures do not carry.
            $config->set('panel.tenancy.mode', 'column');
            $config->set('panel.default', 'admin');

            // The fixture User, not the app's - Testbench's default points at
            // a model this package does not ship.
            $config->set('auth.providers.users.model', User::class);
            $config->set('session.driver', 'array');
            $config->set('view.paths', [__DIR__.'/resources/views']);
        });
    }

    /**
     * A ROOT VIEW, because every panel screen is an Inertia response.
     *
     * Without one `Inertia::render` throws about a missing `app` view, which
     * reads as the panel being broken rather than as the host never having
     * declared where to render into.
     */
    protected function setUp(): void
    {
        parent::setUp();

        Inertia::setRootView('app');
    }

    protected function defineDatabaseMigrations(): void
    {
        $this->loadMigrationsFrom(__DIR__.'/database/migrations');
    }
}
