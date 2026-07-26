<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Closure;
use Illuminate\Validation\Rule;

/**
 * A single-choice field.
 *
 * Options may be a literal list (structure — safe to cache) or a Closure
 * (tenant data — resolved only when the form's data payload is assembled).
 * Either way the SUBMITTED value is validated against the resolved list by an
 * `in:` rule, so the allowlist is enforced server-side rather than trusted from
 * the client.
 */
final class SelectField extends Field
{
    /** @var array<string|int, string>|Closure(): array<string|int, string> */
    private array|Closure $options = [];

    private ?array $resolved = null;

    /** @param array<string|int, string>|Closure(): array<string|int, string> $options */
    public function options(array|Closure $options): static
    {
        $this->options = $options;

        return $this;
    }

    /** @return array<string|int, string> value => label */
    public function resolvedOptionMap(): array
    {
        return $this->resolved ??= ($this->options instanceof Closure ? ($this->options)() : $this->options);
    }

    public function type(): string
    {
        return 'select';
    }

    /**
     * `in:` from the resolved options. ALWAYS, even when the list is empty.
     *
     * This is the one place a Closure-backed option list is touched during
     * validation, and it has to be: without it the client could submit any value
     * and the option list would be decoration.
     *
     * Emitting nothing when the list resolves EMPTY was a real hole. `plan_id`
     * is populated from a tenant-scoped query, so an empty result is exactly
     * what a caller without a resolvable tenant sees — and the field then
     * accepted any integer, including another tenant's plan id. Rule::in([])
     * rejects every non-null value instead, which is the correct reading of
     * "there is nothing you may choose".
     */
    protected function typeRules(): array
    {
        return [Rule::in(array_keys($this->resolvedOptionMap()))];
    }

    public function resolveOptions(): ?array
    {
        $out = [];

        foreach ($this->resolvedOptionMap() as $value => $label) {
            $out[] = ['value' => $value, 'label' => $label];
        }

        return $out;
    }
}
