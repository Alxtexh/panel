<?php

declare(strict_types=1);

namespace PanelKit\Panel\Forms\Fields;

use Illuminate\Validation\Rule;

/**
 * One choice from a handful, where each option is drawn as the thing it does.
 *
 * THE RULE THIS EXISTS FOR: when a choice changes appearance, the option must
 * show the appearance. A select listing "Dashed / Solid / Ticket / Pill" asks
 * somebody to hold four imagined borders in their head and pick between them;
 * four small drawings of those borders asks them to look. Every visual choice in
 * this panel used to be a label in a segmented control, which is the same
 * mistake wearing better clothes.
 *
 * WHY NOT JUST PUT THE MARKUP IN THE OPTION LABEL. Because that is a class
 * string in PHP, and a CSS purge silently dropped PHP-authored utility classes
 * once already - with *partial* survival hiding it. The schema carries a
 * RENDERER NAME, which is a semantic value; the client decides what a
 * `voucher-code-box` looks like, and Tailwind sees those classes in a `.vue`
 * file where it is actually looking.
 *
 * THE RENDERER IS RESOLVED THROUGH A REGISTRY, the same shape as
 * `registerFieldControl`. So a plugin ships a seventh code-box style without
 * touching this package, an application overrides ours with its own, and the
 * picker is available to every form in every panel rather than to the one screen
 * somebody hardcoded it into. A designer that hardcodes its option list cannot
 * do any of that.
 *
 * IT VALIDATES EXACTLY LIKE A RADIO, through `Rule::in` over the resolved
 * options - including when the list resolves EMPTY, which rejects everything
 * rather than accepting anything.
 */
final class VisualSelectField extends Field
{
    use HasChoices;

    private ?string $preview = null;

    private int $columns = 3;

    /**
     * Name the client-side renderer that draws each option.
     *
     * The renderer receives the option's `value` and `label` and draws whatever
     * that value means - it is the only thing that knows a `dashed` code box has
     * a dashed border. Registering happens on the client:
     *
     *     registerOptionPreview('voucher-code-box', VoucherCodeBox)
     *
     * OPTIONAL, AND ITS ABSENCE IS A REAL MODE. A visual select with no renderer
     * still draws its options as a grid of tiles rather than a dropdown, which is
     * the right control for "six choices, all worth seeing" even when there is
     * nothing to draw. What is NOT a real mode is naming a renderer that nothing
     * registered - the client says so in the tile rather than quietly falling
     * back, because a silent fallback here looks exactly like a picker somebody
     * decided to keep plain.
     */
    public function preview(string $renderer): static
    {
        $this->preview = $renderer;

        return $this;
    }

    /**
     * How many options sit across one row.
     *
     * A COUNT, NOT A WIDTH. The schema says "three across" and the client decides
     * what that means at 390px - which is usually two, or one. A field that
     * declared `w-1/3` would be wrong on a phone and there would be nothing the
     * client could do about it.
     */
    public function columns(int $columns): static
    {
        $this->columns = max(1, $columns);

        return $this;
    }

    public function type(): string
    {
        return 'visual-select';
    }

    protected function typeRules(): array
    {
        return [Rule::in(array_keys($this->resolvedOptionMap()))];
    }

    public function toSchema(): array
    {
        return [
            ...parent::toSchema(),
            'preview' => $this->preview,
            'columns' => $this->columns,
        ];
    }
}
