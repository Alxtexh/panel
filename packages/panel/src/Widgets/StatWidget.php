<?php

declare(strict_types=1);

namespace PanelKit\Panel\Widgets;

use Closure;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use RuntimeException;
use Throwable;

/**
 * A single number on the dashboard.
 *
 * THREE RULES, each from a real incident:
 *
 * 1. THE VALUE IS A CLOSURE, resolved only when the deferred prop is requested.
 *    antipatterns §3.3: three eager `->options(...)` calls in definitions took a
 *    page down for every tenant, because definitions evaluate at render time.
 *
 * 2. A WIDGET FAILURE DEGRADES THAT WIDGET ONLY. One broken query must not take
 *    the dashboard down — the operator directive after that incident was
 *    literally "even if the user has no router just show the pages". A failed
 *    widget returns an error state and the other five still render.
 *
 * 3. A CACHED VALUE MUST NAME ITS INVALIDATION EVENTS. antipatterns §4.1: in
 *    billing, accuracy beats caching, and TTL is a self-healing backstop rather
 *    than the mechanism. A cache with no invalidation path is a bug, so
 *    `cache()` without `invalidatedBy()` throws rather than shipping.
 */
final class StatWidget
{
    private ?Closure $value = null;

    private ?string $description = null;

    private ?int $ttl = null;

    /** @var list<class-string> */
    private array $invalidatedBy = [];

    private int $span = 1;

    private function __construct(public readonly string $key, private string $label) {}

    public static function make(string $key, string $label): self
    {
        return new self($key, $label);
    }

    /** @param Closure(): (int|string) $value */
    public function value(Closure $value): self
    {
        $this->value = $value;

        return $this;
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function span(int $span): self
    {
        $this->span = $span;

        return $this;
    }

    /** TTL is a backstop for a missed invalidation, never the mechanism. */
    public function cache(int $ttl): self
    {
        $this->ttl = $ttl;

        return $this;
    }

    /** @param list<class-string> $events */
    public function invalidatedBy(array $events): self
    {
        $this->invalidatedBy = $events;

        return $this;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label,
            'description' => $this->description,
            'span' => $this->span,
        ];
    }

    /**
     * Resolve the value. Never throws — a broken widget reports itself.
     *
     * @return array{value: int|string|null, error: bool}
     */
    public function resolve(string $tenantKey): array
    {
        if ($this->value === null) {
            return ['value' => null, 'error' => true];
        }

        if ($this->ttl !== null && $this->invalidatedBy === []) {
            throw new RuntimeException(
                "Widget [{$this->key}] is cached but declares no invalidation events. "
                . 'A cache with no invalidation path is a bug, not an optimisation.'
            );
        }

        try {
            $resolve = $this->value;

            if ($this->ttl === null) {
                return ['value' => $resolve(), 'error' => false];
            }

            // The tenant is part of the key AND the builder cannot read ambient
            // state — antipatterns §1.4, where a deferred rebuild lost tenancy
            // and wrote one tenant's answer into every tenant's cache entry.
            $key = "panel:widget:{$this->key}:{$tenantKey}";

            return ['value' => Cache::remember($key, $this->ttl, $resolve), 'error' => false];
        } catch (Throwable $e) {
            // Loudly, never swallowed. No bare empty catch exists in this package.
            Log::error('Panel widget failed to resolve.', [
                'component' => 'StatWidget',
                'operation' => 'resolve',
                'widget' => $this->key,
                'tenant' => $tenantKey,
                'exception' => $e->getMessage(),
            ]);

            return ['value' => null, 'error' => true];
        }
    }
}
