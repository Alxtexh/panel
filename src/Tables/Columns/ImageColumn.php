<?php

declare(strict_types=1);

namespace PanelKit\Panel\Tables\Columns;

/**
 * An avatar or logo in a cell.
 *
 * THE CELL VALUE IS A URL FROM THE DATABASE, which makes this the one column
 * type whose content is attacker-influenced whenever users can set their own
 * avatar. The client checks the scheme before it renders — `javascript:` and
 * `data:` are refused and fall back to initials — because "the browser ignores
 * a javascript: URL in an img src" is true today and is not a thing to depend
 * on across every element this value might later be pasted into.
 *
 * A ROW HEIGHT THAT DEPENDS ON DATA IS A LAYOUT BUG. The size is fixed here and
 * enforced in CSS, so a 4000px logo and a missing image occupy identical space
 * and the table does not reflow as rows stream in.
 *
 * `fallback('initials')` matters more than it looks: an empty avatar cell reads
 * as a rendering failure, while initials read as "no picture set".
 */
final class ImageColumn extends Column
{
    private bool $rounded = true;

    private string $size = 'md';

    private string $fallback = 'initials';

    private ?string $fallbackFrom = null;

    public function type(): string
    {
        return 'image';
    }

    /** Circular for people, square for logos and screenshots. */
    public function rounded(bool $rounded = true): self
    {
        $this->rounded = $rounded;

        return $this;
    }

    public function square(): self
    {
        return $this->rounded(false);
    }

    /** sm | md | lg — fixed sizes, never a pixel value from data. */
    public function size(string $size): self
    {
        $this->size = in_array($size, ['sm', 'md', 'lg'], true) ? $size : 'md';

        return $this;
    }

    /**
     * Which column supplies the initials when there is no image.
     *
     * Defaults to `name` because that is what an avatar almost always stands in
     * for, but a resource without one says so rather than rendering a blank
     * circle.
     */
    public function fallbackFrom(string $key): self
    {
        $this->fallbackFrom = $key;

        return $this;
    }

    /** initials | icon | none */
    public function fallback(string $fallback): self
    {
        $this->fallback = in_array($fallback, ['initials', 'icon', 'none'], true) ? $fallback : 'initials';

        return $this;
    }

    /** @return array<string, mixed> */
    public function toArray(): array
    {
        return [
            ...parent::toArray(),
            'rounded' => $this->rounded,
            'size' => $this->size,
            'fallback' => $this->fallback,
            'fallbackFrom' => $this->fallbackFrom ?? 'name',
        ];
    }
}
