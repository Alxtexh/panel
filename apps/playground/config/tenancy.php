<?php

declare(strict_types=1);

use App\Models\Tenant;
use PanelKit\Panel\Tenancy\ConditionalDatabaseBootstrapper;
use Stancl\Tenancy\Bootstrappers\CacheTenancyBootstrapper;
use Stancl\Tenancy\Bootstrappers\FilesystemTenancyBootstrapper;
use Stancl\Tenancy\Bootstrappers\QueueTenancyBootstrapper;
use Stancl\Tenancy\Database\Models\Domain;
use Stancl\Tenancy\TenantDatabaseManagers\MySQLDatabaseManager;
use Stancl\Tenancy\TenantDatabaseManagers\PostgreSQLDatabaseManager;
use Stancl\Tenancy\TenantDatabaseManagers\SQLiteDatabaseManager;
use Stancl\Tenancy\UUIDGenerator;

return [
    'tenant_model' => Tenant::class,
    'id_generator' => UUIDGenerator::class,

    'domain_model' => Domain::class,

    /**
     * The list of domains hosting your central app.
     *
     * Only relevant if you're using the domain or subdomain identification middleware.
     */
    'central_domains' => [
        '127.0.0.1',
        'localhost',
    ],

    /**
     * Tenancy bootstrappers are executed when tenancy is initialized.
     * Their responsibility is making Laravel features tenant-aware.
     *
     * To configure their behavior, see the config keys below.
     */
    'bootstrappers' => [
        /*
         * DatabaseTenancyBootstrapper is DELIBERATELY OFF.
         *
         * This panel runs single-database tenancy: one database, isolated by a
         * `tenant_id` column and PanelKit's global scope. That bootstrapper is
         * for the other mode - it switches the connection to a per-tenant
         * database, which single-database tenancy never creates.
         *
         * stancl ships it enabled because multi-database is what most people
         * install the package for, so this is the one line to change on the way
         * in. Leaving it on produces `Database tenant42 does not exist` on the
         * first request, which says nothing about the actual mistake; PanelKit
         * now detects the contradiction and says so in as many words.
         *
         * Switching this panel to multi-database means re-enabling this line AND
         * setting panel.tenancy.mode to `database` - one without the other is
         * broken in one direction or the other.
         *
         * SUPERSEDED by the hybrid arrangement below: the panel now runs
         * `hybrid`, where the mode is a property of the TENANT rather than of
         * the installation. The reasoning above still applies to stancl's own
         * bootstrapper, which is why it stays commented out.
         */
        /*
         * HYBRID: PanelKit's subclass, not stancl's own.
         *
         * stancl's switches the connection for EVERY tenant, so enabling it in
         * an installation where only some tenants have a database throws
         * `Database tenant42 does not exist` on the first shared tenant. The
         * subclass asks the tenant first and leaves the shared ones on the
         * central connection, where the panel's column scope constrains them.
         *
         * The commented-out line below is stancl's, kept visible because an
         * installation where EVERY tenant is database-isolated should use it -
         * there is no per-tenant question to ask, and the subclass would only
         * add a check that is always true.
         */
        // Stancl\Tenancy\Bootstrappers\DatabaseTenancyBootstrapper::class,
        ConditionalDatabaseBootstrapper::class,
        /*
         * Cache: KEPT. Tags every cache key with the tenant, so a memoized
         * count or a cached schema cannot be served to the wrong organisation.
         * That is a correctness property, not an optimisation.
         */
        CacheTenancyBootstrapper::class,

        /*
         * Filesystem: OFF for this panel, deliberately.
         *
         * It repoints disks per tenant AND suffixes `storage_path()` itself,
         * which moves logs, sessions, compiled views and the framework cache
         * into `storage/tenant{id}/` as well. That is the right trade for an
         * app whose tenants upload freely to a shared disk. It is the wrong one
         * here for two reasons:
         *
         *   PanelKit already prefixes every stored file with `tenants/{key}/`,
         *   and that prefix is not decoration - `FileStore::belongsToCurrentTenant()`
         *   checks it before serving anything. Enabling this bootstrapper adds a
         *   second, redundant layer of the same isolation.
         *
         *   Suffixing `storage_path()` splits logs and framework caches per
         *   tenant, which is a surprise on a panel with shared workers: one
         *   worker serving many tenants writes its log lines to a different
         *   directory for every job.
         *
         * Re-enable it if uploads ever move to a shared disk with no path
         * prefixing of their own. The multi-database test suite turns it on
         * explicitly to cover that arrangement.
         */
        // FilesystemTenancyBootstrapper::class,

        /*
         * Queue: KEPT, and it is what makes SHARED WORKERS correct.
         *
         * It writes the tenant id into every job payload at dispatch time and
         * re-initialises tenancy from that payload when the job runs - so one
         * pool of workers serves every tenant, and each job runs as the tenant
         * that queued it. The alternative is a worker per tenant, which does
         * not scale past a few dozen and idles most of them most of the time.
         *
         * It also ENDS tenancy between jobs, which is the half that matters:
         * without it, worker memory carries tenant A into the next job.
         */
        QueueTenancyBootstrapper::class,
        // Stancl\Tenancy\Bootstrappers\RedisTenancyBootstrapper::class, // Note: phpredis is needed
    ],

    /**
     * Database tenancy config. Used by DatabaseTenancyBootstrapper.
     */
    'database' => [
        'central_connection' => env('DB_CONNECTION', 'central'),

        /**
         * Connection used as a "template" for the dynamically created tenant database connection.
         * Note: don't name your template connection tenant. That name is reserved by package.
         */
        'template_tenant_connection' => null,

        /**
         * Tenant database names are created like this:
         * prefix + tenant_id + suffix.
         */
        'prefix' => 'tenant',
        'suffix' => '',

        /**
         * TenantDatabaseManagers are classes that handle the creation & deletion of tenant databases.
         */
        'managers' => [
            'sqlite' => SQLiteDatabaseManager::class,
            'mysql' => MySQLDatabaseManager::class,
            'mariadb' => MySQLDatabaseManager::class,
            'pgsql' => PostgreSQLDatabaseManager::class,

        /**
         * Use this database manager for MySQL to have a DB user created for each tenant database.
         * You can customize the grants given to these users by changing the $grants property.
         */
            // 'mysql' => Stancl\Tenancy\TenantDatabaseManagers\PermissionControlledMySQLDatabaseManager::class,

        /**
         * Disable the pgsql manager above, and enable the one below if you
         * want to separate tenant DBs by schemas rather than databases.
         */
            // 'pgsql' => Stancl\Tenancy\TenantDatabaseManagers\PostgreSQLSchemaManager::class, // Separate by schema instead of database
        ],
    ],

    /**
     * Cache tenancy config. Used by CacheTenancyBootstrapper.
     *
     * This works for all Cache facade calls, cache() helper
     * calls and direct calls to injected cache stores.
     *
     * Each key in cache will have a tag applied on it. This tag is used to
     * scope the cache both when writing to it and when reading from it.
     *
     * You can clear cache selectively by specifying the tag.
     */
    'cache' => [
        'tag_base' => 'tenant', // This tag_base, followed by the tenant_id, will form a tag that will be applied on each cache call.
    ],

    /**
     * Filesystem tenancy config. Used by FilesystemTenancyBootstrapper.
     * https://tenancyforlaravel.com/docs/v3/tenancy-bootstrappers/#filesystem-tenancy-boostrapper.
     */
    'filesystem' => [
        /**
         * Each disk listed in the 'disks' array will be suffixed by the suffix_base, followed by the tenant_id.
         */
        'suffix_base' => 'tenant',
        'disks' => [
            'local',
            'public',
            // 's3',
        ],

        /**
         * Use this for local disks.
         *
         * See https://tenancyforlaravel.com/docs/v3/tenancy-bootstrappers/#filesystem-tenancy-boostrapper
         */
        'root_override' => [
            // Disks whose roots should be overridden after storage_path() is suffixed.
            'local' => '%storage_path%/app/',
            'public' => '%storage_path%/app/public/',
        ],

        /**
         * Should storage_path() be suffixed.
         *
         * Note: Disabling this will likely break local disk tenancy. Only disable this if you're using an external file storage service like S3.
         *
         * For the vast majority of applications, this feature should be enabled. But in some
         * edge cases, it can cause issues (like using Passport with Vapor - see #196), so
         * you may want to disable this if you are experiencing these edge case issues.
         */
        'suffix_storage_path' => true,

        /**
         * By default, asset() calls are made multi-tenant too. You can use global_asset() and mix()
         * for global, non-tenant-specific assets. However, you might have some issues when using
         * packages that use asset() calls inside the tenant app. To avoid such issues, you can
         * disable asset() helper tenancy and explicitly use tenant_asset() calls in places
         * where you want to use tenant-specific assets (product images, avatars, etc).
         */
        'asset_helper_tenancy' => true,
    ],

    /**
     * Redis tenancy config. Used by RedisTenancyBootstrapper.
     *
     * Note: You need phpredis to use Redis tenancy.
     *
     * Note: You don't need to use this if you're using Redis only for cache.
     * Redis tenancy is only relevant if you're making direct Redis calls,
     * either using the Redis facade or by injecting it as a dependency.
     */
    'redis' => [
        'prefix_base' => 'tenant', // Each key in Redis will be prepended by this prefix_base, followed by the tenant id.
        'prefixed_connections' => [ // Redis connections whose keys are prefixed, to separate one tenant's keys from another.
            // 'default',
        ],
    ],

    /**
     * Features are classes that provide additional functionality
     * not needed for tenancy to be bootstrapped. They are run
     * regardless of whether tenancy has been initialized.
     *
     * See the documentation page for each class to
     * understand which ones you want to enable.
     */
    'features' => [
        // Stancl\Tenancy\Features\UserImpersonation::class,
        // Stancl\Tenancy\Features\TelescopeTags::class,
        // Stancl\Tenancy\Features\UniversalRoutes::class,
        // Stancl\Tenancy\Features\TenantConfig::class, // https://tenancyforlaravel.com/docs/v3/features/tenant-config
        // Stancl\Tenancy\Features\CrossDomainRedirect::class, // https://tenancyforlaravel.com/docs/v3/features/cross-domain-redirect
        // Stancl\Tenancy\Features\ViteBundler::class,
    ],

    /**
     * Should tenancy routes be registered.
     *
     * Tenancy routes include tenant asset routes. By default, this route is
     * enabled. But it may be useful to disable them if you use external
     * storage (e.g. S3 / Dropbox) or have a custom asset controller.
     */
    'routes' => true,

    /**
     * Parameters used by the tenants:migrate command.
     */
    'migration_parameters' => [
        '--force' => true, // This needs to be true to run migrations in production.
        '--path' => [database_path('migrations/tenant')],
        '--realpath' => true,
    ],

    /**
     * Parameters used by the tenants:seed command.
     */
    'seeder_parameters' => [
        '--class' => 'DatabaseSeeder', // root seeder class
        // '--force' => true, // This needs to be true to seed tenant databases in production
    ],
];
