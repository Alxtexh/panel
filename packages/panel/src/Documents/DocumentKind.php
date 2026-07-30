<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents;

/**
 * One sort of document that leaves the system: an invoice, a receipt, a voucher.
 *
 * WHY A DOCUMENT IS DIFFERENT FROM A SCREEN, and why only documents get a live
 * preview. A settings form for "how the panel looks" already has the panel
 * itself as its preview - you change the colour and the thing in front of you
 * repaints. A document has nothing: it is printed, handed to a customer and kept
 * in a wallet, and the first chance anybody has to see whether it was right is
 * after a hundred of them came out of a printer. That gap is what a designer
 * with a live preview closes, and it is why bolting a phone frame onto a
 * branding page was the wrong answer to the same-sounding question.
 *
 * A KIND IS A REGISTRATION, NOT AN ENTRY IN A LIST. Three ship; a plugin adds a
 * fourth by registering it, an application replaces ours by registering the same
 * id later, and both get the designer, the preview, the PDF and the doctor check
 * with no edit to this package. A designer with a hardcoded `match ($kind)` has
 * exactly the kinds somebody thought of.
 *
 * THE KIND OWNS FOUR THINGS, and the split is deliberate:
 *
 *   `fields()`   the designer's form - so a new kind gets a designer for free,
 *                built out of the same schema layer as every other form in the
 *                panel, including visual pickers and preset chips.
 *
 *   `blocks()`   settings + data => the document as a list of BLOCKS. This is
 *                where a kind differs from another kind. The client draws
 *                blocks and knows nothing about invoices.
 *
 *   `variables()` the tokens body copy may use. Declared, so `panel:doctor` can
 *                find a template still writing `@expiry` after the field was
 *                renamed - and so the designer can offer them as chips under
 *                the textarea rather than in documentation nobody opens.
 *
 *   `records()` / `data()`  how to preview against a REAL record.
 */
abstract class DocumentKind
{
    /**
     * The stable id: `invoice`, `receipt`, `voucher`.
     *
     * It is the registry key, the route segment and the `kind` column, so
     * changing it orphans every stored template of that kind.
     */
    abstract public function id(): string;

    /** What an operator calls it. */
    abstract public function label(): string;

    /** One line saying what this document is for. */
    public function description(): string
    {
        return '';
    }

    /**
     * The designer's form, as ordinary schema nodes.
     *
     * @return list<\PanelKit\Panel\Schema\Renderable>
     */
    abstract public function fields(): array;

    /**
     * The settings a brand-new template starts from.
     *
     * NOT AN EMPTY ARRAY. A designer that opens blank shows an empty preview,
     * which teaches somebody the preview is broken before they have typed
     * anything. The defaults are also what makes "reset" meaningful.
     *
     * @return array<string, mixed>
     */
    abstract public function defaults(): array;

    /**
     * The document itself: settings plus one record's data, as blocks.
     *
     * @param  array<string, mixed>  $settings  the template being previewed or printed
     * @param  array<string, mixed>  $data      one record, from `data()` or `sample()`
     * @return list<array<string, mixed>>
     */
    abstract public function blocks(array $settings, array $data): array;

    /**
     * The tokens body copy may contain, as `@token => what it means`.
     *
     * @return array<string, string>
     */
    public function variables(): array
    {
        return [];
    }

    /**
     * Invented data, for a tenant that has no records yet.
     *
     * IT IS ALWAYS LABELLED AS INVENTED where it is shown. A preview that
     * silently shows made-up figures is one somebody will quote back at you.
     *
     * @return array<string, mixed>
     */
    abstract public function sample(): array;

    /**
     * Real records this document can be previewed against.
     *
     * THE REASON THIS EXISTS AT ALL: sample data never has a 40-character
     * company name, a zero total, a missing phone number or fourteen line items.
     * Those are the things that break a layout, and they are exactly what
     * invented data is guaranteed not to contain. Previewing against a real
     * record is the difference between a template that looks right and one that
     * IS right.
     *
     * @return list<array{id: int|string, label: string}>
     */
    public function records(): array
    {
        return [];
    }

    /**
     * One real record's data, or null when it is gone or not ours.
     *
     * NULL IS A DENIAL, not an error to paper over. The id arrives from a query
     * string, so this is a place somebody can ask for another organisation's
     * record - and the answer has to be the same "no" whether it never existed
     * or belongs to somebody else.
     *
     * @return array<string, mixed>|null
     */
    public function data(int|string $id): ?array
    {
        return null;
    }
}
