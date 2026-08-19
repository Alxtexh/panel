<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Alxtexh\Panel\Forms\Fields\Field;
use Alxtexh\Panel\Forms\Form;
use Alxtexh\Panel\Schema\Component;
use Alxtexh\Panel\Schema\Renderable;

/**
 * Declarative layout for a custom page screen.
 *
 * Structure only, safe to cache and send to Vue. Fields nested in the tree are
 * rendered with the same controls as a resource form.
 */
final class PageLayout
{
    /**
     * @var list<Component|Renderable>
     */
    private array $nodes = [];

    public static function make(): self
    {
        return new self;
    }

    /** @param list<Component|Renderable> $nodes */
    public function schema(array $nodes): self
    {
        $this->nodes = $nodes;

        return $this;
    }

    /** @return list<Field> */
    public function fields(): array
    {
        return Component::collectFields($this->nodes);
    }

    /** Build a form definition from the layout tree. */
    public function toForm(): Form
    {
        return Form::make()->schema($this->nodes);
    }

    /** @return array<string, mixed> */
    public function toSchema(): array
    {
        return [
            'nodes' => array_map(
                static fn (Component|Renderable $node): array => $node->toSchema(),
                $this->nodes,
            ),
            'fields' => array_map(static fn (Field $field): array => $field->toSchema(), $this->fields()),
        ];
    }
}
