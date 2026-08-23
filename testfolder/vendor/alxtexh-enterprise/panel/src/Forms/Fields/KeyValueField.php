<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use InvalidArgumentException;

/**
 * Arbitrary labelled values, stored as one JSON object.
 *
 * FOR THE THINGS A SCHEMA CANNOT ANTICIPATE - an installer's own reference
 * numbers, a per-customer note field somebody's process needs, the odd flag a
 * region uses and nobody else does. The alternative is a column per idea, which
 * means a migration every time an operator has one.
 *
 * THE SHAPE IS VALIDATED, NOT JUST THE CONTAINER. `array` alone accepts
 * `{"a": {"b": ["c"]}}` - the array is an array - and a nested structure in a
 * column everything treats as flat is the kind of thing that renders as
 * `[object Object]` in one place and throws in another. So keys are constrained
 * to a safe character set and values to scalars.
 *
 * KEYS ARE NOT COLUMN NAMES, and the character restriction is why. A key
 * reaches JSON paths, form input names and `data-*` attributes; allowing dots
 * and brackets means a key that reads as a path expression somewhere
 * downstream. Letters, digits, underscore, dash - enough for anything a person
 * would type as a label, nothing that parses as syntax.
 *
 * RESERVED KEYS EXIST because this blob sits on the same model as real columns,
 * and a metadata key called `id` or `tenant_id` invites exactly one bug: code
 * that merges metadata into an array of attributes and silently overwrites the
 * thing that identifies the row.
 */
final class KeyValueField extends Field
{
    private ?int $maxPairs = null;

    private string $keyLabel = 'Key';

    private string $valueLabel = 'Value';

    /** @var list<string> */
    private array $reserved = [];

    public function type(): string
    {
        return 'keyvalue';
    }

    public function maxPairs(int $max): self
    {
        $this->maxPairs = $max;

        return $this;
    }

    /** What the two columns are called, when "Key" and "Value" are not the words. */
    public function labels(string $key, string $value): self
    {
        $this->keyLabel = $key;
        $this->valueLabel = $value;

        return $this;
    }

    /**
     * Keys this field refuses.
     *
     * @param  list<string>  $keys
     */
    public function reserved(array $keys): self
    {
        foreach ($keys as $key) {
            if (! is_string($key)) {
                throw new InvalidArgumentException('Reserved keys must be strings.');
            }
        }

        $this->reserved = array_values($keys);

        return $this;
    }

    /** @return list<mixed> */
    protected function typeRules(): array
    {
        return array_values(array_filter([
            'array',
            $this->maxPairs !== null ? "max:{$this->maxPairs}" : null,
        ]));
    }

    /**
     * EVERY VALUE, and every KEY.
     *
     * Laravel validates values with `field.*`; keys have no wildcard of their
     * own, so they are checked by a closure over the whole array. Both halves
     * are needed - a rule on values alone leaves the keys unconstrained, and
     * they are the half that becomes a path expression downstream.
     *
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        $reserved = $this->reserved;

        return [
            // Scalars only: a nested structure here renders as [object Object]
            // in one place and throws in another.
            "{$this->key}.*" => ['nullable', 'string', 'max:1000'],

            $this->key => [
                'nullable',
                'array',
                function (string $attribute, mixed $value, callable $fail) use ($reserved): void {
                    if (! is_array($value)) {
                        return;
                    }

                    foreach (array_keys($value) as $key) {
                        $key = (string) $key;

                        if (preg_match('/^[A-Za-z0-9_-]{1,64}$/', $key) !== 1) {
                            $fail("[{$key}] may only contain letters, numbers, underscores and dashes.");

                            return;
                        }

                        if (in_array($key, $reserved, true)) {
                            $fail("[{$key}] is reserved and cannot be used as a key.");

                            return;
                        }
                    }
                },
            ],
        ];
    }

    /**
     * Stored as an object, edited as a LIST of pairs.
     *
     * An object cannot express "a row the user has started but not named yet",
     * and it silently loses duplicates while they are being typed - rename one
     * key to match another and one of them vanishes mid-edit. The client works
     * on an ordered list and this collapses it on the way in.
     */
    public function transformForStorage(mixed $value): mixed
    {
        if (! is_array($value)) {
            return null;
        }

        $out = [];

        foreach ($value as $key => $entry) {
            $key = trim((string) $key);

            // A pair with no key is a row somebody started and abandoned.
            if ($key === '') {
                continue;
            }

            $out[$key] = $entry === null ? '' : (string) $entry;
        }

        return $out === [] ? null : $out;
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'keyLabel' => $this->keyLabel,
            'valueLabel' => $this->valueLabel,
            'maxPairs' => $this->maxPairs,
        ];
    }
}
