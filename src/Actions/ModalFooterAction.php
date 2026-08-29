<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Actions;

use InvalidArgumentException;

/**
 * A button beside Cancel/Submit in a `RecordAction`'s own modal - a link,
 * never a second thing to POST.
 *
 * A LINK, DELIBERATELY, NOT A SECOND `handle()`. Filament's own
 * `extraModalFooterActions()` accepts a full nested `Action`, closures and
 * all - which given this modal already runs one POST to one endpoint, a
 * second one wired the same way would need its own execution engine: a
 * result to reconcile against the first action's, a state for "which of two
 * things submitted", a second wizard-step machine if either has one. The
 * genuinely common footer button (Filament's own examples reach for this
 * first) is not a second mutation at all - "read the docs", "open this in
 * Stripe", "see the full audit log" - and that is exactly what a link needs:
 * a label and somewhere to go.
 *
 * STATIC, NOT PER-ROW. `RecordAction::link()` resolves a URL from the row
 * because the WHOLE action is a link with nowhere else to carry that
 * closure; a footer action is declared once on the action and rendered
 * identically for every row's copy of the same modal, so a plain string is
 * the honest shape - a per-record destination is what `link()` itself is
 * for.
 */
final class ModalFooterAction
{
    public const COLORS = RecordAction::COLORS;

    private ?string $url = null;

    private ?string $color = null;

    private ?string $icon = null;

    private function __construct(
        public readonly string $label,
    ) {}

    public static function make(string $label): self
    {
        return new self($label);
    }

    /** Opens in a new tab - this modal stays open behind it. */
    public function url(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function color(string $color): self
    {
        if (! in_array($color, self::COLORS, true)) {
            throw new InvalidArgumentException(
                "Modal footer action [{$this->label}] has unknown colour [{$color}]. One of: "
                .implode(', ', self::COLORS).'.'
            );
        }

        $this->color = $color;

        return $this;
    }

    /** Lucide icon name, shown beside the label. */
    public function icon(string $icon): self
    {
        $this->icon = $icon;

        return $this;
    }

    /** @return array{label: string, url: string|null, color: string|null, icon: string|null} */
    public function toArray(): array
    {
        return [
            'label' => $this->label,
            'url' => $this->url,
            'color' => $this->color,
            'icon' => $this->icon,
        ];
    }
}
