<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Closure;
use Illuminate\Support\Facades\Auth;
use RuntimeException;

/**
 * Resolves "which tenant is this request for" without binding the package to any
 * particular tenancy library.
 *
 * There are two fundamentally different ways to isolate tenants, and they need
 * opposite behaviour from the panel — getting this wrong in either direction is
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
 *     all. The panel MUST NOT add a column constraint — doing so produces
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
    public const MODE_COLUMN = 'column';

    public const MODE_DATABASE = 'database';

    public const MODE_NONE = 'none';

    public function mode(): string
    {
        $mode = config('panel.tenancy.mode', self::MODE_COLUMN);

        if (! in_array($mode, [self::MODE_COLUMN, self::MODE_DATABASE, self::MODE_NONE], true)) {
            throw new RuntimeException("Unknown panel tenancy mode [{$mode}].");
        }

        return $mode;
    }

    public function column(): string
    {
        return (string) config('panel.tenancy.column', 'tenant_id');
    }

    /**
     * Whether a query against a tenant-owned model needs a column constraint.
     *
     * False in database mode — the connection already isolates, and adding a
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

    private function fromAuth(): int|string|null
    {
        $user = Auth::user();

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

        throw new RuntimeException('Tenant key must be an int or string, got ' . get_debug_type($key) . '.');
    }
}
