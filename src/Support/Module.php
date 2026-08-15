<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Closure;
use InvalidArgumentException;

/**
 * One product module a SaaS panel may sell access to.
 *
 * Register on the panel (arrays still work):
 *
 *     Panel::make('admin')->modules([
 *         Module::make('campaigns')
 *             ->label('Campaigns')
 *             ->description('Outbound campaigns')
 *             ->planLimit(kind: 'number')
 *             ->usage(fn (): int => Campaign::query()->count()),
 *     ]);
 *
 * Then set `ModuleRegistry::grants()` from the subscriber plan. Without
 * grants(), every registered module is treated as enabled.
 */
final class Module
{
    private ?string $label = null;

    private ?string $description = null;

    private ?string $limitKind = null;

    private ?string $limitLabel = null;

    private float|int|null $limitStep = null;

    private ?string $limitHint = null;

    private ?Closure $usage = null;

    private function __construct(private readonly string $key) {}

    public static function make(string $key): self
    {
        return new self($key);
    }

    public function label(string $label): self
    {
        $this->label = $label;

        return $this;
    }

    public function description(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * How this module appears in the plan editor's perks column.
     *
     * `number` is a cap (-1 = Unlimited). `toggle` is included or not.
     *
     * @param  'number'|'toggle'  $kind
     */
    public function planLimit(string $kind = 'number', ?string $label = null, float|int|null $step = null, ?string $hint = null): self
    {
        if (! in_array($kind, ['number', 'toggle'], true)) {
            throw new InvalidArgumentException("planLimit kind must be 'number' or 'toggle', got [{$kind}].");
        }

        $this->limitKind = $kind;
        $this->limitLabel = $label;
        $this->limitStep = $step;
        $this->limitHint = $hint;

        return $this;
    }

    /** @param  Closure(): (int|float)  $usage */
    public function usage(Closure $usage): self
    {
        $this->usage = $usage;

        return $this;
    }

    public function key(): string
    {
        return $this->key;
    }

    /**
     * @return array{
     *     key: string,
     *     label: string,
     *     description: string|null,
     *     limitKind: string|null,
     *     limitLabel: string|null,
     *     limitStep: float|int|null,
     *     limitHint: string|null,
     *     usage: Closure|null
     * }
     */
    public function toDefinition(): array
    {
        return [
            'key' => $this->key,
            'label' => $this->label ?? str($this->key)->headline()->value(),
            'description' => $this->description,
            'limitKind' => $this->limitKind,
            'limitLabel' => $this->limitLabel,
            'limitStep' => $this->limitStep,
            'limitHint' => $this->limitHint,
            'usage' => $this->usage,
        ];
    }
}
