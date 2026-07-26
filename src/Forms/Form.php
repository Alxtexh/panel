<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms;

use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Forms\Fields\Field;

/**
 * Declarative form definition.
 *
 * Two things it exists to guarantee:
 *
 * 1. VALIDATION HAS ONE SOURCE. `rules()` builds the Laravel array the server
 *    enforces, and Precognition replays the same rules for live feedback. The
 *    client never carries its own copy to drift out of step.
 *
 * 2. MASS ASSIGNMENT IS CLOSED BY CONSTRUCTION. `sanitize()` returns only keys
 *    this form declares, so a request cannot write a column the form does not
 *    mention — including `tenant_id`. `$request->all()` never reaches a model.
 *    A `$fillable` list can be forgotten when a column is added; a form that
 *    does not mention a field simply cannot submit it.
 */
final class Form
{
    /** @var list<Field> */
    private array $fields = [];

    private int $columns = 1;

    public static function make(): self
    {
        return new self();
    }

    /** @param list<Field> $fields */
    public function schema(array $fields): self
    {
        $this->fields = $fields;

        return $this;
    }

    public function columns(int $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    /** @return list<Field> */
    public function fields(): array
    {
        return $this->fields;
    }

    /**
     * Structure only, safe to cache. Never resolves an option closure.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        return [
            'columns' => $this->columns,
            'fields' => array_map(static fn (Field $f): array => $f->toSchema(), $this->fields),
        ];
    }

    /**
     * Tenant-varying option lists, for the data payload.
     *
     * @return array<string, list<array{value: mixed, label: string}>>
     */
    public function resolveOptions(): array
    {
        $options = [];

        foreach ($this->fields as $field) {
            $resolved = $field->resolveOptions();

            if ($resolved !== null) {
                $options[$field->key] = $resolved;
            }
        }

        return $options;
    }

    /** @return array<string, list<string>> */
    public function rules(): array
    {
        $rules = [];

        foreach ($this->fields as $field) {
            $rules[$field->key] = $field->rules();
        }

        return $rules;
    }

    /**
     * Reduce request input to the fields this form declares.
     *
     * @param  array<string, mixed>  $input
     * @return array<string, mixed>
     */
    public function sanitize(array $input): array
    {
        $keys = array_map(static fn (Field $f): string => $f->key, $this->fields);

        return array_intersect_key($input, array_flip($keys));
    }

    /**
     * Current values for editing.
     *
     * @return array<string, mixed>
     */
    public function valuesFor(?Model $record): array
    {
        $values = [];

        foreach ($this->fields as $field) {
            $value = $record?->getAttribute($field->key);

            // Dates serialise to ISO so the client can parse them without
            // guessing a format; a locale-formatted string here would be
            // unparseable and is a localisation trap (addendum D2).
            $values[$field->key] = $value instanceof \DateTimeInterface
                ? $value->format(str_contains($field->type(), 'time') ? 'Y-m-d\TH:i' : 'Y-m-d')
                : $value;
        }

        return $values;
    }
}
