<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Documents;

/**
 * Turns a template and a record into the document the client draws.
 *
 * ONE PATH, USED BY EVERYTHING. The designer's live preview, the printable page
 * and anything that later emails or publishes a copy all come through here. That
 * is the whole reason it exists as a class rather than as a method on the
 * controller: the moment the preview computes its own version of the document,
 * the preview and the print stop agreeing, and the one they disagree about is
 * the one that already went to a customer.
 *
 * IT RETURNS BLOCKS, NOT HTML. The client knows how to draw a header, a table of
 * lines, a code box, a numbered list; it does not know what an invoice is. So a
 * kind registered by a plugin renders correctly in a component that was written
 * before that kind existed - and no markup or class name crosses from PHP, which
 * is the rule a CSS purge broke once already.
 */
final class DocumentRenderer
{
    /*
     * `$brand`, not `$branding`, because there is a `branding()` method below.
     * PHP keeps properties and methods in separate namespaces so both forms
     * resolve - and a reader hitting `$this->branding` two lines from
     * `$this->branding(...)` has to work out which is which every time.
     */
    public function __construct(private readonly DocumentBranding $brand) {}

    /**
     * The rendered document.
     *
     * @param  int|string|null  $recordId  a real record, or null for sample data
     * @return array{
     *     kind: string,
     *     kindLabel: string,
     *     version: int,
     *     sample: bool,
     *     recordId: int|string|null,
     *     blocks: list<array<string, mixed>>,
     *     branding: array<string, mixed>,
     * }
     */
    public function render(
        DocumentKind $kind,
        DocumentTemplate $template,
        int|string|null $recordId = null,
        ?array $settingsOverride = null,
    ): array {
        /*
         * THE OVERRIDE IS WHAT MAKES THE PREVIEW LIVE. The designer sends the
         * form's CURRENT values - unsaved - and gets the document they describe.
         * Rendering the stored settings instead would give a preview that lags
         * one save behind, which is worse than no preview: it looks live and is
         * not.
         */
        $settings = [...$kind->defaults(), ...($settingsOverride ?? $template->settings ?? [])];

        /*
         * A REQUESTED RECORD THAT DOES NOT RESOLVE FALLS BACK TO SAMPLE, and the
         * document says so. The id arrives from a query string, so "not found"
         * covers a deleted record and another organisation's record alike -
         * both must produce the same harmless preview rather than an error page
         * that distinguishes them.
         */
        $data = null;
        if ($recordId !== null) {
            $data = $kind->data($recordId);
        }

        $sample = $data === null;
        $data ??= $kind->sample();

        return [
            'kind' => $kind->id(),
            'kindLabel' => $kind->label(),
            'version' => (int) ($template->version ?? 1),
            'sample' => $sample,
            'recordId' => $sample ? null : $recordId,
            'blocks' => $kind->blocks($this->substitute($settings, $data), $data),
            'branding' => $this->branding($settings),
        ];
    }

    /**
     * Replace `@token` in every string setting.
     *
     * DONE ONCE, HERE, rather than in each kind's `blocks()`. Otherwise every
     * kind reimplements it and one of them forgets the footer.
     *
     * UNKNOWN TOKENS ARE LEFT ALONE rather than blanked. `@expiry_date` after
     * the field was renamed to `@expires_at` becomes a visible `@expiry_date` on
     * the document, which somebody notices; blanking it produces "Valid until ."
     * and nobody notices until a customer asks. `panel:doctor` finds these
     * before a printer does.
     *
     * @param  array<string, mixed>  $settings
     * @param  array<string, mixed>  $data
     * @return array<string, mixed>
     */
    private function substitute(array $settings, array $data): array
    {
        $tokens = [];

        foreach ($data as $key => $value) {
            if (is_scalar($value) || $value === null) {
                $tokens['@'.$key] = (string) $value;
            }
        }

        if ($tokens === []) {
            return $settings;
        }

        return array_map(
            static fn (mixed $value): mixed => is_string($value)
                ? strtr($value, $tokens)
                : $value,
            $settings,
        );
    }

    /**
     * The look every block shares.
     *
     * THE NAME AND THE LOGO DO NOT COME FROM THE TEMPLATE. They come from the
     * organisation, because that is where they already are - one settings screen
     * with the name and an uploaded mark. A template that carried its own copy
     * would let the invoice say "Your company" while the sidebar says the real
     * name, and a rename would be three templates to remember with the forgotten
     * one going to a customer.
     *
     * WHAT DOES BELONG TO THE TEMPLATE is how the document is PRINTED: the
     * accent colour and whether the office prints in colour at all. A screen
     * accent and a paper accent are not the same decision - a teal that reads
     * well on a monitor can be unreadable on a monochrome laser printer, which
     * is exactly why `colour_mode` exists.
     *
     * SEMANTIC VALUES ONLY. `accent` is a colour an operator picked, so it
     * reaches the client as a value it puts in a style attribute - the one thing
     * that cannot be a class, because Tailwind never saw it. `mono` is intent,
     * not a class name: the client decides what "print without colour" means.
     *
     * @param  array<string, mixed>  $settings
     * @return array<string, mixed>
     */
    private function branding(array $settings): array
    {
        return [
            'company' => $this->brand->company(),
            'logoUrl' => $this->brand->logoUrl(),
            'accent' => (string) ($settings['accent'] ?? '#0f172a'),
            'mono' => ($settings['colour_mode'] ?? 'colour') === 'mono',
        ];
    }
}
