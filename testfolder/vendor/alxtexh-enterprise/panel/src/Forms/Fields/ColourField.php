<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Forms\Fields;

use Alxtexh\Panel\Support\Contrast;

/**
 * A colour, stored as a hex string.
 *
 * THE VALIDATION IS THE WHOLE REASON THIS IS NOT A TEXT FIELD. A colour usually
 * ends up in a `style` attribute or a CSS custom property - tenant branding is
 * exactly that - and an unvalidated string there is a stylesheet somebody else
 * writes: `red; background: url(https://…)` is a perfectly good "colour" to a
 * text input. A strict hex pattern is what makes the value safe to interpolate,
 * and it is enforced on the server where the client cannot skip it.
 *
 * HEX RATHER THAN "ANY CSS COLOUR". `oklch()`, `color-mix()` and named colours
 * are all legitimate CSS and all impossible to validate with a pattern anybody
 * can read - and the moment the rule is a loose one, the field stops being a
 * guarantee. Everything a panel needs from a colour picker fits in six digits.
 *
 * PRESETS ARE OFFERED, NOT ENFORCED. They are how somebody picks the brand
 * colour in one click instead of pasting it from a document; a field that
 * refused anything else would be a select with a nicer control.
 */
final class ColourField extends Field
{
    /** `#rgb` or `#rrggbb`, and nothing else at all. */
    private const PATTERN = '/^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/';

    /** @var list<string> */
    private array $presets = [];

    private ?string $contrastBackground = null;

    private float $contrastMinRatio = Contrast::AA_NORMAL;

    /** @param list<string> $presets */
    public function presets(array $presets): static
    {
        // Filtered rather than trusted: a preset that fails the field's own rule
        // is a swatch that cannot be saved after it is clicked.
        $this->presets = array_values(array_filter(
            $presets,
            static fn (string $colour): bool => preg_match(self::PATTERN, $colour) === 1,
        ));

        return $this;
    }

    /**
     * Warn when the chosen colour is unreadable against `$background` -
     * roadmap 7.1. NOT a validation rule: a colour that fails contrast is
     * still a valid colour, and this is the operator's own letterhead to
     * choose badly if they insist. `PkColourPicker` computes the live
     * ratio and shows the warning; this only declares what to check it
     * against, the same way `presets` only declares what to offer.
     */
    public function checkContrastAgainst(string $background = '#ffffff', float $minRatio = Contrast::AA_NORMAL): static
    {
        $this->contrastBackground = $background;
        $this->contrastMinRatio = $minRatio;

        return $this;
    }

    public function type(): string
    {
        return 'colour';
    }

    protected function typeRules(): array
    {
        return ['string', 'regex:'.self::PATTERN];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'presets' => $this->presets,
            'contrastBackground' => $this->contrastBackground,
            'contrastMinRatio' => $this->contrastMinRatio,
        ];
    }
}
