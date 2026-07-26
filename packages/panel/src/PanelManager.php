<?php

declare(strict_types=1);

namespace PanelKit\Panel;

/**
 * Holds the registered panels.
 *
 * Phase 0 is a placeholder — Panel registration, resource discovery, and schema
 * resolution land in Phases 4 and 7. What matters now is the state discipline,
 * because it is far cheaper to establish than to retrofit.
 *
 * Spec §9: "No mutable static state that holds request or tenant data." The
 * failure mode is tenant A briefly seeing tenant B's data under load, and it
 * does not reproduce on `php artisan serve`, so it will not be caught by hand.
 *
 * The rule this class follows:
 *
 *   - Per-request or per-tenant state lives on the INSTANCE, which is a scoped
 *     binding and therefore reset between requests.
 *   - Only genuinely immutable, tenant-independent data may live in a static —
 *     currently nothing. The discovered class list (Phase 4) will qualify;
 *     anything derived from it that depends on tenant or user will not.
 */
final class PanelManager
{
    /** @var array<string, mixed> Per-request memoization. Instance state, never static. */
    private array $memo = [];

    /**
     * Cleared by the Octane flush listener in PanelServiceProvider.
     *
     * Static because the listener has no instance to reach, and empty because
     * nothing tenant-derived is permitted in a static in the first place. It
     * exists so that when Phase 4 adds process-level caches there is already a
     * single, obvious place to clear them.
     */
    public static function flushMemoization(): void
    {
        // Intentionally empty in Phase 0. See the class docblock.
    }

    public function remember(string $key, \Closure $resolve): mixed
    {
        return $this->memo[$key] ??= $resolve();
    }
}
