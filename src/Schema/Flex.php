<?php

declare(strict_types=1);

namespace PanelKit\Panel\Schema;

/**
 * A row. Children sit side by side and wrap when they run out of width.
 *
 * DIFFERENT FROM `Grid`, AND THE DIFFERENCE IS WHICH ONE LIES. A grid gives
 * every child the same width, which is right for form fields and wrong for a
 * row of things that are not the same size - a short code beside a long
 * description, three buttons, a label and a badge. In a grid those get equal
 * columns and the short one floats in whitespace.
 *
 * `align` is the cross-axis, because that is the one people actually reach for:
 * a row of inputs wants `end` so their labels do not push the controls out of
 * line with each other.
 */
final class Flex extends Component
{
    private string $align = 'start';

    private string $gap = 'md';

    private bool $wrap = true;

    private function __construct() {}

    public static function make(): self
    {
        return new self;
    }

    /** `start`, `center`, `end`, `stretch` or `baseline`. */
    public function align(string $align): self
    {
        $this->align = $align;

        return $this;
    }

    /** `sm`, `md` or `lg`. */
    public function gap(string $gap): self
    {
        $this->gap = $gap;

        return $this;
    }

    /**
     * WRAPPING IS THE DEFAULT, and turning it off is a decision about small
     * screens. A row that refuses to wrap either overflows or squeezes its
     * children to unusable widths on a phone, so `->wrap(false)` should mean
     * "these genuinely cannot be stacked", not "this looks tidier on my laptop".
     */
    public function wrap(bool $wrap = true): self
    {
        $this->wrap = $wrap;

        return $this;
    }

    public function component(): string
    {
        return 'flex';
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'align' => $this->align,
            'gap' => $this->gap,
            'wrap' => $this->wrap,
        ];
    }
}
