<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms;

use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Forms\Fields\Field;
use PanelKit\Panel\Schema\Component;
use PanelKit\Panel\Schema\Renderable;

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
    /**
     * The schema TREE — layout components and fields, mixed and nested.
     *
     * @var list<Component|Renderable>
     */
    private array $nodes = [];

    private int $columns = 1;

    public static function make(): self
    {
        return new self();
    }

    /** @param list<Component|Renderable> $nodes */
    public function schema(array $nodes): self
    {
        $this->nodes = $nodes;

        return $this;
    }

    public function columns(int $columns): self
    {
        $this->columns = $columns;

        return $this;
    }

    /**
     * Every field, at any nesting depth.
     *
     * Validation, sanitisation and hydration all use this rather than the top
     * level, so a field inside a collapsed section or an unopened tab behaves
     * exactly like a visible one. Anything else would let a required field be
     * skipped by never opening its tab — a correctness hole, not a layout quirk.
     *
     * @return list<Field>
     */
    public function fields(): array
    {
        return Component::collectFields($this->nodes);
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
            // The TREE, so the client can render layout. Fields are leaves.
            'nodes' => array_map(
                static fn (Component|Renderable $n): array => $n->toSchema(),
                $this->nodes,
            ),
            // Flat list too: some consumers only need to know which fields
            // exist, and re-walking the tree client-side to find out is waste.
            'fields' => array_map(static fn (Field $f): array => $f->toSchema(), $this->fields()),
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

        foreach ($this->fields() as $field) {
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

        foreach ($this->fields() as $field) {
            $rules[$field->key] = $field->rules();

            // Fields that validate more than their own key — a multi-select
            // has to constrain each MEMBER, not merely assert an array.
            foreach ($field->additionalRules() as $key => $extra) {
                $rules[$key] = $extra;
            }
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
        $keys = array_map(static fn (Field $f): string => $f->key, $this->fields());

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

        foreach ($this->fields() as $field) {
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
