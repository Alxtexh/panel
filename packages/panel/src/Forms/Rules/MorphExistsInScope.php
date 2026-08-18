<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Rules;

use Closure;
use Illuminate\Contracts\Validation\DataAwareRule;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

/**
 * The morph id must exist on the selected type, through that model's scopes.
 *
 * A MorphTo field submits `{ type, id }`. Laravel's `exists:table,id` does
 * not know which table, and would not apply tenant scopes if it did. This
 * reads the sibling type from the same payload and asks that model.
 *
 * @phpstan-type morphMap array<class-string<Model>, string>
 */
final class MorphExistsInScope implements DataAwareRule, ValidationRule
{
    /** @var array<string, mixed> */
    private array $data = [];

    /**
     * @param  morphMap  $types
     */
    public function __construct(
        private readonly array $types,
        private readonly string $field,
    ) {}

    /** @param  array<string, mixed>  $data */
    public function setData(array $data): static
    {
        $this->data = $data;

        return $this;
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if ($value === null || $value === '') {
            return;
        }

        $type = Arr::get($this->data, $this->field.'.type');

        if (! is_string($type) || ! isset($this->types[$type])) {
            $fail('The selected :attribute is invalid.');

            return;
        }

        $model = $type;

        if (! $model::query()->whereKey($value)->exists()) {
            $fail('The selected :attribute is invalid.');
        }
    }
}
