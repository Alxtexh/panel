<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Models\Concerns;

use Illuminate\Validation\ValidationException;

/**
 * Guarded status changes on an Eloquent model.
 *
 * Declare allowed edges once on the model. Pair with
 * `RecordAction::transitionTo()` so row actions refuse disallowed hops at
 * execution time, and opt into `Auditable` so each hop lands in the audit trail.
 */
trait HasStateTransitions
{
    /** @return string Column that holds the workflow state. */
    public function stateColumn(): string
    {
        if (property_exists($this, 'stateColumn') && is_string($this->stateColumn)) {
            return $this->stateColumn;
        }

        return 'status';
    }

    /**
     * Allowed transitions keyed by the current state.
     *
     * @return array<string, list<string>>
     */
    public function stateTransitions(): array
    {
        if (property_exists($this, 'transitions') && is_array($this->transitions)) {
            return $this->transitions;
        }

        return [];
    }

    public function currentState(): string
    {
        return (string) $this->getAttribute($this->stateColumn());
    }

    public function canTransitionTo(string $to, ?string $column = null): bool
    {
        $column = $column ?? $this->stateColumn();
        $from = (string) $this->getAttribute($column);
        $allowed = $this->stateTransitions()[$from] ?? [];

        return in_array($to, $allowed, true);
    }

    /**
     * @param  array<string, mixed>  $attributes  Row attributes from a list query.
     */
    public static function canTransitionFromAttributes(array $attributes, string $to, ?string $column = null): bool
    {
        $instance = new static;
        $column = $column ?? $instance->stateColumn();
        $from = (string) ($attributes[$column] ?? '');
        $allowed = $instance->stateTransitions()[$from] ?? [];

        return in_array($to, $allowed, true);
    }

    public function assertCanTransitionTo(string $to, ?string $column = null): void
    {
        if ($this->canTransitionTo($to, $column)) {
            return;
        }

        $column = $column ?? $this->stateColumn();

        throw ValidationException::withMessages([
            $column => ["Cannot move from [{$this->currentState()}] to [{$to}]."],
        ]);
    }
}
