<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Schema;

use Alxtexh\Panel\Forms\Fields\Field;

/**
 * A node in a form or view schema.
 *
 * Layout is a TREE, not a flat list. Filament ships 23 layout components and we
 * had none, which is why a twenty-field form was an undifferentiated wall and a
 * view page could not have tabs.
 *
 * Every node serialises with a `component` discriminator so the client can walk
 * the tree without guessing:
 *
 *   {"component": "section", "label": "Identity", "children": [...]}
 *   {"component": "tabs",    "tabs": [{"label": "…", "children": [...]}]}
 *   {"component": "field",   "type": "text", ...}
 *
 * Layout carries NO tenant data and NO CSS classes, exactly like columns and
 * fields - it says `columns: 2` and `collapsible: true`, and Vue decides what
 * that looks like (antipatterns §6.1).
 */
abstract class Component
{
    /** @var list<Component|Renderable> */
    protected array $children = [];

    /**
     * @var array{0: string, 1: mixed}|null
     *
     * Base-class storage rather than `Section`-only, so `isVisible()` and
     * `visibleFields()` below work uniformly over any node - only `Section`
     * exposes a public setter for now (see its own note), but nothing here
     * assumes that stays true.
     */
    protected ?array $visibleWhen = null;

    abstract public function component(): string;

    /** @return array{0: string, 1: mixed}|null */
    public function visibilityCondition(): ?array
    {
        return $this->visibleWhen;
    }

    /**
     * Whether this node's own condition is met against $values - NOT whether
     * an ancestor's is. `visibleFields()` below is what makes ancestry matter,
     * by never recursing into a node this returns false for.
     *
     * LOOSE COMPARISON, matching the client's own `conditionMet()` and
     * `Field::presenceRule()`'s boolean handling: a value arriving from a
     * submitted request body is a string ("1") where a resource declared the
     * condition as a native bool (true), and strict equality would silently
     * never match.
     *
     * @param  array<string, mixed>  $values
     */
    public function isVisible(array $values): bool
    {
        if ($this->visibleWhen === null) {
            return true;
        }

        [$field, $expected] = $this->visibleWhen;

        return array_key_exists($field, $values) && $values[$field] == $expected;
    }

    /** @param list<Component|Renderable> $children */
    public function schema(array $children): static
    {
        $this->children = $children;

        return $this;
    }

    /** @return list<Component|Renderable> */
    public function children(): array
    {
        return $this->children;
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            'component' => $this->component(),
            'children' => array_map(
                static fn (Component|Renderable $child): array => $child->toSchema(),
                $this->children,
            ),
        ];
    }

    /**
     * Every Field anywhere beneath this node, at any depth.
     *
     * Validation, sanitisation and value hydration all need the flat field list
     * regardless of how deeply layout nests them. Walking the tree in one place
     * is what stops a field inside a tab being silently unvalidated - which is
     * the failure that would make layout a security problem rather than a
     * presentation one.
     *
     * @param  list<Component|Renderable>  $nodes
     * @return list<Field>
     */
    public static function collectFields(array $nodes): array
    {
        $fields = [];

        foreach ($nodes as $node) {
            if ($node instanceof Field) {
                $fields[] = $node;

                continue;
            }

            $fields = [...$fields, ...self::collectFields($node->children())];
        }

        return $fields;
    }

    /**
     * Every Field beneath this node whose enclosing chain of conditions is
     * met against $values.
     *
     * NOT `collectFields()` filtered afterwards. A node this method never
     * recurses into contributes NO fields at any depth, rather than fields
     * with relaxed rules - the difference between a hidden section's fields
     * being absent from what `sanitize()` ever considers and merely being
     * optional. `collectFields()` itself is untouched and still walks
     * everything unconditionally: the cached schema and `valuesFor()` both
     * need every field regardless of any section's condition, so that
     * flipping the condition back on shows the record's real stored value
     * rather than a blank.
     *
     * @param  list<Component|Renderable>  $nodes
     * @param  array<string, mixed>  $values
     * @return list<Field>
     */
    public static function visibleFields(array $nodes, array $values): array
    {
        $fields = [];

        foreach ($nodes as $node) {
            if ($node instanceof Field) {
                $fields[] = $node;

                continue;
            }

            if (! $node->isVisible($values)) {
                continue;
            }

            $fields = [...$fields, ...self::visibleFields($node->children(), $values)];
        }

        return $fields;
    }
}
