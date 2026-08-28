<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Widgets;

/**
 * Where a widget sits in the dashboard grid: how wide, and in what order.
 *
 * SPAN IS RESPONSIVE, NOT ONE NUMBER. A card declared `span(2)` at a fixed
 * width either wastes half a phone screen or crowds three onto a narrow
 * tablet - there is no single number that is right at every breakpoint. An
 * array keyed by breakpoint (`default`, `sm`, `md`, `lg`, `xl`) lets a widget
 * say "one column on a phone, two from `sm` up, three from `lg`", the same
 * shape Filament's `columnSpan()` takes. A bare int is still accepted and
 * means "this many columns at every breakpoint" - the common case stays a
 * one-argument call.
 *
 * SORT IS EXPLICIT, NOT DECLARATION ORDER. Reordering widgets used to mean
 * reordering the array literal in `headerWidgets()`/`widgets()`, which reads
 * as a diff touching every widget in the set for a change to one of them.
 * `sort()` makes "this one goes first" a property of the widget being moved,
 * not of the six lines around it. Lower runs first; ties keep declaration
 * order (`WidgetSet::props()` sorts with a stable sort).
 */
trait HasLayout
{
    /** @var int|array<string, int> */
    private int|array $span = 1;

    private int $sort = 0;

    /** @param int|array<string, int> $span A bare int, or `['default' => 1, 'sm' => 2, 'lg' => 3]`. */
    public function span(int|array $span): static
    {
        $this->span = $span;

        return $this;
    }

    /** Lower sorts first. Ties keep declaration order. */
    public function sort(int $sort): static
    {
        $this->sort = $sort;

        return $this;
    }

    public function sortOrder(): int
    {
        return $this->sort;
    }

    /** @return array{span: int|array<string, int>, sort: int} */
    protected function layoutToArray(): array
    {
        return [
            'span' => $this->span,
            'sort' => $this->sort,
        ];
    }
}
