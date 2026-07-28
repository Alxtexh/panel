<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Closure;
use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\PanelManager;
use RuntimeException;

/**
 * Resolves "which tenant is this request for" without binding the package to any
 * particular tenancy library.
 *
 * There are two fundamentally different ways to isolate tenants, and they need
 * opposite behaviour from the panel - getting this wrong in either direction is
 * a data leak or a total outage:
 *
 *   MODE_COLUMN ("shared" / single-database)
 *     Every tenant's rows live in one database, separated by a tenant_id column.
 *     The panel MUST add `where tenant_id = ?` to every query. This is
 *     stancl/tenancy's single-database tenancy, and the default here.
 *
 *   MODE_DATABASE ("dedicated" / multi-database)
 *     Each tenant has its own database, and stancl/tenancy switches the
 *     connection during bootstrapping. The rows carry no tenant_id column at
 *     all. The panel MUST NOT add a column constraint - doing so produces
 *     "column tenant_id does not exist" on every query. Isolation is the
 *     connection's job, and it is already done before the panel sees the request.
 *
 *   MODE_NONE
 *     Single-tenant application. No scoping.
 *
 * Instance state only, resolved per call. Spec §9: a static holding a tenant id
 * survives the request under Octane and serves tenant A's id to tenant B on the
 * same worker.
 *
 * stancl/tenancy is NOT a dependency. It is detected at runtime through the
 * container, so an application that does not use it pays nothing.
 */
final class TenantContext
{
    /**
     * The resolved tenant record for THIS request.
     *
     * Addendum Part A: "resolve tenancy once per request". Branding, feature
     * flags and the nav each need the tenant, and three separate lazy loads is
     * three queries for one fact. Instance state on a scoped binding, so it
     * cannot survive into another request (S9).
     *
     * `false` distinguishes "not looked up yet" from "looked up, found nothing".
     */
    private mixed $tenantRecord = false;

    /** Memoized so the consistency check below runs once per request, not per query. */
    private ?string $mode = null;

    public const MODE_COLUMN = 'column';

    public const MODE_DATABASE = 'database';

    public const MODE_NONE = 'none';

    public const MODE_HYBRID = 'hybrid';

    public function mode(): string
    {
        if ($this->mode !== null) {
            return $this->mode;
        }

        $mode = config('panel.tenancy.mode', self::MODE_COLUMN);

        if (! in_array($mode, [self::MODE_COLUMN, self::MODE_DATABASE, self::MODE_NONE, self::MODE_HYBRID], true)) {
            throw new RuntimeException("Unknown panel tenancy mode [{$mode}].");
        }

        /*
         * HYBRID RESOLVES PER TENANT, and it is the mode a real SaaS ends up in.
         *
         * Most tenants share one database and are separated by a column; one or
         * two - the largest, the regulated, the ones who asked - get a database
         * of their own. The reference application makes this mandatory rather
         * than optional, and its reasoning is worth repeating: a resource that
         * works on a shared tenant and throws on a dedicated one has hardcoded
         * `where('tenant_id')` somewhere. Running both in one application is the
         * only way to find out.
         *
         * The tenant itself decides, by having a database or not having one.
         * A per-tenant CONFIG FLAG would be a second source of truth that can
         * disagree with reality; the presence of the database cannot.
         */
        /*
         * DELIBERATELY NOT MEMOIZED. The answer depends on WHICH TENANT is
         * active, and a queue worker switches tenants many times inside one
         * container lifetime. Caching the first job's answer would apply a
         * shared-database tenant's column constraint to a dedicated-database
         * tenant that has no such column - or, far worse, drop the constraint
         * for a shared tenant because the previous job's tenant had its own
         * database.
         *
         * The cost is a `tenant()` lookup per call, which is itself memoized by
         * stancl. The saving from caching this was never the expensive part.
         */
        if ($mode === self::MODE_HYBRID) {
            return $this->hasDedicatedDatabase() ? self::MODE_DATABASE : self::MODE_COLUMN;
        }

        $this->assertConsistentWithStancl($mode);

        return $this->mode = $mode;
    }

    /**
     * Whether the ACTIVE tenant has a database of its own.
     *
     * Asked of stancl rather than of a column on our own tenant model, because
     * stancl is what actually switches the connection - if it thinks the tenant
     * has a database and we think otherwise, its answer is the one that is true.
     *
     * FALSE WHEN NOTHING IS INITIALISED. That resolves to column mode, which
     * applies a constraint. Answering "database" instead would drop the column
     * constraint on the assumption that a connection is isolating - and if
     * nothing initialised, nothing is.
     */
    private function hasDedicatedDatabase(): bool
    {
        if (! $this->stanclInitialised()) {
            return false;
        }

        $tenant = $this->tenant();

        if ($tenant === null) {
            return false;
        }

        // stancl marks a tenant as database-backed by implementing this
        // contract; a tenant model without it never gets its own connection.
        if (! $tenant instanceof \Stancl\Tenancy\Contracts\TenantWithDatabase) {
            return false;
        }

        /*
         * `tenancy_db_name` ONLY - never `database()->getName()`.
         *
         * The first version asked both, which looked more thorough and was
         * catastrophically wrong: `getName()` falls back to a GENERATED name
         * (`tenant<id>`) for any tenant, whether or not a database was ever
         * created for it. So it is never null, every tenant resolved to database
         * mode, and the column constraint was dropped for all of them.
         *
         * A test caught it on the first run. Had it not, the symptom would have
         * been every tenant seeing every other tenant's rows - from a check
         * written to be careful.
         *
         * The internal key is set only when a tenant is deliberately given its
         * own database, which is exactly the question being asked.
         */
        return $tenant->getInternal('db_name') !== null;
    }

    /**
     * Catch the one configuration that is silently, catastrophically wrong.
     *
     * stancl's published config enables `DatabaseTenancyBootstrapper` by
     * default, because multi-database is the shape most people install it for.
     * Someone who then runs the panel in COLUMN mode has told the two halves
     * opposite things: stancl switches the connection to a per-tenant database
     * that was never created, while the panel expects one shared database with
     * a tenant_id column.
     *
     * The symptom is `Database tenant42 does not exist` thrown from deep inside
     * a bootstrapper on the first request, which says nothing about the actual
     * mistake and sends people to look at their database server. Naming it here
     * costs one array scan per request and saves an afternoon.
     *
     * DIAGNOSTIC ONLY. It refuses a combination that cannot work; it never
     * changes behaviour, and a panel not using stancl never reaches it.
     */
    private function assertConsistentWithStancl(string $mode): void
    {
        if ($mode !== self::MODE_COLUMN || ! class_exists('Stancl\\Tenancy\\Tenancy')) {
            return;
        }

        $bootstrappers = (array) config('tenancy.bootstrappers', []);

        if (! in_array('Stancl\\Tenancy\\Bootstrappers\\DatabaseTenancyBootstrapper', $bootstrappers, true)) {
            return;
        }

        throw new RuntimeException(
            'Conflicting tenancy configuration: panel.tenancy.mode is [column] (one shared '
            .'database, scoped by a tenant_id column) but stancl\'s DatabaseTenancyBootstrapper '
            .'is enabled, which switches to a separate database per tenant. Remove that '
            .'bootstrapper from config/tenancy.php for single-database tenancy, or set '
            .'panel.tenancy.mode to [database].'
        );
    }

    public function column(): string
    {
        return (string) config('panel.tenancy.column', 'tenant_id');
    }

    /**
     * Whether a query against a tenant-owned model needs a column constraint.
     *
     * False in database mode - the connection already isolates, and adding a
     * constraint would reference a column that does not exist there.
     */
    public function shouldScopeByColumn(): bool
    {
        return $this->mode() === self::MODE_COLUMN;
    }

    /**
     * The active tenant key, or null if none could be resolved.
     *
     * Null is a deny signal, never an "all tenants" signal. Callers must fail
     * closed on it.
     */
    public function currentKey(): int|string|null
    {
        $resolver = config('panel.tenancy.resolver');

        if ($resolver instanceof Closure) {
            $key = $resolver();

            return $key === null ? null : $this->normalise($key);
        }

        return match ($resolver) {
            'auth' => $this->fromAuth(),
            'stancl' => $this->fromStancl(),
            default => $this->fromStancl() ?? $this->fromAuth(),
        };
    }

    /**
     * True when isolation is actually in force right now.
     *
     * In database mode this asks stancl whether tenancy was initialised. A panel
     * request that reaches the central (landlord) database because tenancy never
     * bootstrapped would read every tenant's data at once, so the panel refuses
     * rather than serving it.
     */
    public function isIsolated(): bool
    {
        return match ($this->mode()) {
            self::MODE_NONE => true,
            self::MODE_COLUMN => $this->currentKey() !== null,
            self::MODE_DATABASE => $this->stanclInitialised(),
        };
    }

    /**
     * Whether the panel serving this request is deliberately UNSCOPED.
     *
     * THE MOST DANGEROUS METHOD IN THE PACKAGE, and it is written to be dull.
     * A super admin genuinely needs to query across every tenant - that is what
     * the panel is for - so tenancy has to become conditional. The whole risk of
     * that change is turning "deny by default" into "deny unless a flag says
     * otherwise", where any bug in evaluating the flag is a cross-tenant leak.
     *
     * Three properties keep it safe, and all three are asserted by test:
     *
     *   1. FALSE IS THE DEFAULT AND THE FALLBACK. No panels registered, no
     *      current panel, an unknown id - every one of those paths answers
     *      false, meaning "apply the scope".
     *   2. IT IS A SINGLE EXPRESSION with no negation to misread. A caller
     *      writes `if ($context->isCentralPanel()) return;`, never
     *      `if (! $something)`.
     *   3. ONLY AN EXPLICIT DECLARATION turns it on: a registered `Panel` whose
     *      context was set to `central` in application code, and which the panel
     *      middleware made current for this request.
     *
     * Nothing derived from a REQUEST - a header, a query parameter, a subdomain
     * - can reach this. The panel is chosen by the route, which is fixed at boot.
     */
    public function isCentralPanel(): bool
    {
        return app(PanelManager::class)->inCentralContext();
    }

    /**
     * Per-tenant feature flags.
     *
     * Resolved from the tenant record when one is reachable. Returns an empty
     * set rather than throwing, because "no flags" and "no tenant" both mean
     * the same thing here - nothing is enabled - and a feature check is not the
     * right place to blow up a request.
     *
     * @return array<string, bool>
     */
    public function features(): array
    {
        $resolver = config('panel.tenancy.features');

        if ($resolver instanceof Closure) {
            return (array) $resolver();
        }

        return (array) ($this->tenant()?->features ?? []);
    }

    /** The tenant record, loaded at most once per request. */
    public function tenant(): mixed
    {
        if ($this->tenantRecord !== false) {
            return $this->tenantRecord;
        }

        /*
         * STANCL FIRST, and this ordering is what makes multi-database work.
         *
         * The fallback below reaches the tenant through `$user->tenant`, which
         * assumes a relation from the user to a tenants table on the SAME
         * connection. Under stancl's multi-database tenancy that assumption is
         * false in both halves: the users table lives in the tenant's own
         * database, and the central `tenants` table is not on that connection
         * at all - so the relation either does not exist or resolves against
         * the wrong database.
         *
         * When tenancy has been initialised the current tenant is already a
         * resolved model in the container. Asking for it is both correct and
         * free; re-deriving it from the signed-in user is neither.
         */
        if ($this->stanclInitialised()) {
            return $this->tenantRecord = app('Stancl\Tenancy\Contracts\Tenant');
        }

        /*
         * ALREADY-RESOLVED USER ONLY, for the reason spelled out on
         * `fromAuth()` below: asking the guard to load one re-enters the panel's
         * user provider, which comes back here for the tenant.
         *
         * NOT MEMOISED WHEN THERE IS NO USER YET. `$tenantRecord` is cached for
         * the whole request, so caching a null taken mid-resolution would pin
         * "no tenant" for every later call in that request - the loop traded for
         * a wrong answer, which is worse because it returns 200.
         */
        $guard = Auth::guard();

        if (method_exists($guard, 'hasUser') && ! $guard->hasUser()) {
            return null;
        }

        $user = $guard->user();

        return $this->tenantRecord = ($user !== null && method_exists($user, 'tenant'))
            ? $user->tenant
            : null;
    }

    /**
     * The tenant of the signed-in user - READ, never resolved.
     *
     * THIS METHOD MUST NOT ASK THE GUARD TO LOAD A USER, and that is the whole
     * reason it is written this way rather than as a plain `Auth::user()`.
     *
     * The panel's user provider scopes its lookup to the current tenant, so it
     * calls this method. If this method calls `Auth::user()` while no user is
     * resolved yet, the guard goes to the provider, the provider comes back
     * here for the tenant, and the two call each other until PHP's execution
     * limit kills the request - 30 seconds, then a 500 with an empty body,
     * because a fatal error is not an exception and never reaches Laravel's
     * handler.
     *
     * IT ONLY EVER BIT THE CENTRAL HOST. On a per-tenant hostname `fromStancl()`
     * answers first and this is never reached, so every tenant subdomain worked
     * perfectly while plain `localhost` hung - the failure looked like a broken
     * login page rather than a loop.
     *
     * `hasUser()` is the difference: it reports whether a user is ALREADY in
     * memory and never triggers a lookup. Returning null mid-resolution is
     * correct - it means "no tenant known yet", the provider adds no constraint
     * for that one query, and every call after the user lands answers properly.
     * (`ScopeSessionToTenant` is what actually keeps a session and its tenant
     * agreeing; this was never the guard.)
     */
    private function fromAuth(): int|string|null
    {
        $guard = Auth::guard();

        if (method_exists($guard, 'hasUser') && ! $guard->hasUser()) {
            return null;
        }

        $user = $guard->user();

        if ($user === null) {
            return null;
        }

        $column = $this->column();

        if (! array_key_exists($column, $user->getAttributes())) {
            return null;
        }

        $key = $user->getAttribute($column);

        return $key === null ? null : $this->normalise($key);
    }

    /**
     * stancl/tenancy exposes the current tenant through the `tenant()` helper
     * and binds `Stancl\Tenancy\Contracts\Tenant` in the container. Resolved
     * through the container rather than the helper so this stays testable and
     * does not fatal when the package is absent.
     */
    private function fromStancl(): int|string|null
    {
        if (! $this->stanclInitialised()) {
            return null;
        }

        $tenant = app('Stancl\Tenancy\Contracts\Tenant');

        return $this->normalise($tenant->getTenantKey());
    }

    private function stanclInitialised(): bool
    {
        if (! app()->bound('Stancl\Tenancy\Contracts\Tenant')) {
            return false;
        }

        // Bound but null happens between requests under a long-lived worker.
        return app('Stancl\Tenancy\Contracts\Tenant') !== null;
    }

    private function normalise(mixed $key): int|string
    {
        if (is_int($key) || is_string($key)) {
            return $key;
        }

        if (is_numeric($key)) {
            return (int) $key;
        }

        throw new RuntimeException('Tenant key must be an int or string, got '.get_debug_type($key).'.');
    }
}
