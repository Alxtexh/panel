<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Infolists;

use Alxtexh\Panel\Schema\Component;

/**
 * A labelled value on a dedicated view page.
 *
 * Separate from table columns so a view can show an icon, a link, or a short
 * text without reusing a list cell. The view page stays a page, never a modal.
 */
abstract class Entry extends Component
{
    protected ?string $label = null;

    protected ?string $url = null;

    final public function __construct(public readonly string $key) {}

    public static function make(string $key): static
    {
        return new static($key);
    }

    public function component(): string
    {
        return 'entry';
    }

    public function label(string $label): static
    {
        $this->label = $label;

        return $this;
    }

    /**
     * Optional href. The client renders the value as a link; the server never
     * treats this as authorisation.
     */
    public function url(?string $url): static
    {
        $this->url = $url;

        return $this;
    }

    abstract public function type(): string;

    public function toSchema(): array
    {
        return array_filter([
            'component' => 'entry',
            'key' => $this->key,
            'label' => $this->label ?? str($this->key)->headline()->value(),
            'type' => $this->type(),
            'url' => $this->url,
            'children' => [],
        ], static fn (mixed $v): bool => $v !== null && $v !== []);
    }
}
