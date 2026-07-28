<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

use PanelKit\Panel\Forms\Fields\Field;

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

    abstract public function component(): string;

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
}
