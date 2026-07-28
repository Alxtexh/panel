<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Database\Eloquent\Model;

/**
 * The value must reference a record THIS TENANT can see.
 *
 * Laravel's `exists:plans,id` queries the raw table and knows nothing about
 * global scopes, so it happily confirms another tenant's row. That is not a
 * theoretical concern: introducing a searchable select with `exists:plans,id`
 * immediately reopened a cross-tenant write the suite had been guarding, and
 * the test caught it on the first run.
 *
 * This asks the MODEL instead, so every global scope - tenancy above all -
 * applies. A record the acting tenant cannot read is a record they cannot
 * reference.
 */
final class ExistsInScope implements ValidationRule
{
    /** @param class-string<Model> $model */
    public function __construct(private readonly string $model) {}

    /** @param class-string<Model> $model */
    public static function of(string $model): self
    {
        return new self($model);
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if ($value === null || $value === '') {
            return; // `nullable` or `required` decides that, not this rule.
        }

        if (! $this->model::query()->whereKey($value)->exists()) {
            // Deliberately vague. "The selected plan is invalid" is all the
            // caller needs; confirming the row exists but belongs to someone
            // else would itself leak.
            $fail('The selected :attribute is invalid.');
        }
    }
}
