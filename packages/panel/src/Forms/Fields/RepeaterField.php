<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use InvalidArgumentException;

/**
 * A repeating group of fields, stored as a JSON array of objects.
 *
 * FOR THE ONE-TO-MANY THAT DOES NOT DESERVE A TABLE. A client's several contact
 * numbers, the two or three notes attached to an installation - data that is
 * always read with its parent, never queried on its own, and never counted.
 * Give it a table and every read becomes a join for rows nobody searches.
 *
 * THE HONEST LIMIT, stated once: anything you will ever FILTER, SORT, COUNT or
 * report on belongs in a table. A JSON array cannot be indexed usefully, so the
 * moment somebody asks "how many clients have a secondary contact" this was the
 * wrong choice - and it will be a migration to undo. Use a relation manager
 * instead; that is what it is for.
 *
 * EVERY CHILD FIELD VALIDATES ITSELF, at `key.*.child`. This is the whole point
 * of composing real Field objects rather than accepting a shape: `array` on the
 * outside proves nothing about what is inside, and a repeater is precisely a
 * place where arbitrary nested input arrives from a browser.
 *
 * CHILDREN ARE LEAVES ONLY. A repeater inside a repeater is a data model
 * pretending to be a form: the validation keys become `a.*.b.*.c`, the UI needs
 * two levels of add/remove, and what is actually being described is a table
 * with a foreign key. Refused at declaration time rather than discovered later.
 */
final class RepeaterField extends Field
{
    /** @var list<Field> */
    private array $children = [];

    private ?int $minItems = null;

    private ?int $maxItems = null;

    private ?string $itemLabel = null;

    private bool $collapsible = false;

    public function type(): string
    {
        return 'repeater';
    }

    /**
     * The shape of one row.
     *
     * @param  list<Field>  $fields
     */
    public function schema(array $fields): self
    {
        foreach ($fields as $field) {
            if (! $field instanceof Field) {
                throw new InvalidArgumentException('A repeater schema may only contain fields.');
            }

            if ($field instanceof self || $field instanceof KeyValueField) {
                throw new InvalidArgumentException(
                    "[{$field->key}] cannot be nested inside a repeater. A repeating group of "
                    .'repeating groups is a table with a foreign key - use a relation manager.'
                );
            }
        }

        $this->children = array_values($fields);

        return $this;
    }

    public function minItems(int $min): self
    {
        $this->minItems = $min;

        return $this;
    }

    public function maxItems(int $max): self
    {
        $this->maxItems = $max;

        return $this;
    }

    /** What one row is called, for the add button and the row headings. */
    public function itemLabel(string $label): self
    {
        $this->itemLabel = $label;

        return $this;
    }

    /**
     * Let a row fold down to one line - its ordinal, and the first child's
     * value if it has one - showing only the field being worked on rather
     * than every row's full set of inputs at once. Off by default: a
     * repeater short enough to not need this is the common case, and a
     * fold state nobody asked for is one more thing to notice is there.
     */
    public function collapsible(bool $collapsible = true): self
    {
        $this->collapsible = $collapsible;

        return $this;
    }

    /** @return list<Field> */
    public function children(): array
    {
        return $this->children;
    }

    /** @return list<mixed> */
    protected function typeRules(): array
    {
        return array_values(array_filter([
            'array',
            $this->minItems !== null ? "min:{$this->minItems}" : null,
            $this->maxItems !== null ? "max:{$this->maxItems}" : null,
        ]));
    }

    /**
     * Each child's own rules, applied to every row.
     *
     * @return array<string, list<mixed>>
     */
    public function additionalRules(): array
    {
        $rules = [];

        foreach ($this->children as $child) {
            $rules["{$this->key}.*.{$child->key}"] = $child->rules();

            /*
             * A child's own additional rules are rebased under the wildcard.
             *
             * A multi-select inside a repeater needs `contacts.*.tags.*`, and
             * the child only knows to ask for `tags.*` - it has no idea it is
             * nested. Rewriting the prefix here is what lets a child field be
             * written once and used at either level.
             */
            foreach ($child->additionalRules() as $key => $extra) {
                $rules["{$this->key}.*.".$key] = $extra;
            }
        }

        return $rules;
    }

    /**
     * Keep only declared child keys, and drop rows that are entirely empty.
     *
     * THE FILTER IS THE SANITISER. Without it a request can attach any key it
     * likes to a row and have it stored verbatim in the JSON - this column is
     * the one place in the form layer where a caller could otherwise write a
     * shape the resource never declared.
     *
     * Empty rows are dropped because "add" creates one before it is filled in,
     * and saving with a blank row at the bottom should not persist a blank row.
     */
    public function transformForStorage(mixed $value): mixed
    {
        if (! is_array($value)) {
            return null;
        }

        $keys = array_map(static fn (Field $f): string => $f->key, $this->children);
        $out = [];

        foreach ($value as $row) {
            if (! is_array($row)) {
                continue;
            }

            $clean = [];
            $hasValue = false;

            foreach ($keys as $key) {
                $entry = $row[$key] ?? null;

                $clean[$key] = $entry;

                if ($entry !== null && $entry !== '' && $entry !== []) {
                    $hasValue = true;
                }
            }

            if ($hasValue) {
                $out[] = $clean;
            }
        }

        return $out === [] ? null : $out;
    }

    /** @return array<string, mixed> Structure only; children as their own schema. */
    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'itemLabel' => $this->itemLabel ?? 'Item',
            'minItems' => $this->minItems,
            'maxItems' => $this->maxItems,
            'collapsible' => $this->collapsible,
            'children' => array_map(static fn (Field $f): array => $f->toSchema(), $this->children),
        ];
    }

    /**
     * Child option lists, resolved when the DATA payload is assembled.
     *
     * Same rule as everywhere else: a select inside a repeater may be backed by
     * a tenant's own rows, and tenant data never enters the cached schema.
     *
     * @return array<string, list<array{value: mixed, label: string}>>
     */
    public function childOptions(): array
    {
        $out = [];

        foreach ($this->children as $child) {
            $options = $child->resolveOptions();

            if ($options !== null) {
                $out[$child->key] = $options;
            }
        }

        return $out;
    }
}
