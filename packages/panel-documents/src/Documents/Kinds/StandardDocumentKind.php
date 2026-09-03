<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Documents\Kinds;

use Alxtexh\Panel\Documents\DocumentKind;
use Alxtexh\Panel\Forms\Fields\ColourField;
use Alxtexh\Panel\Forms\Fields\TextareaField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Fields\VisualSelectField;
use Alxtexh\Panel\Schema\Renderable;
use Alxtexh\Panel\Schema\Section;

/**
 * The parts every printed document has, so three kinds do not write them thrice.
 *
 * How it prints, a title, and a footer with somebody to call. A voucher and an
 * invoice disagree about almost everything in between and agree completely about
 * these, and a kind that had to redeclare them would be one where the invoice
 * designer and the receipt designer slowly stopped matching.
 *
 * THE LETTERHEAD IS NOT HERE, and that is a decision rather than an omission.
 * The company name and logo live on the organisation's settings screen and
 * arrive through `DocumentBranding`; a template that carried its own copy would
 * be a second answer to a question already answered.
 *
 * A BASE CLASS RATHER THAN A TRAIT, because these are not just fields: the
 * footer BLOCK is built here too, and the two have to agree. A trait supplying
 * fields whose values nothing read would be the same bug as a settings page
 * wired to nothing.
 */
abstract class StandardDocumentKind extends DocumentKind
{
    /**
     * Printing, header and footer, in that order.
     *
     * SUBCLASSES SPLICE THEIR OWN SECTIONS INTO THE MIDDLE - the document's own
     * body sits between letterhead and footer on the page, so it reads in the
     * same order in the form. A designer whose fields run in a different order
     * from the document they describe makes somebody scroll to check.
     *
     * @param  list<Renderable>  $body
     * @return list<Renderable>
     */
    protected function standardFields(array $body): array
    {
        return [
            /*
             * NO COMPANY NAME AND NO LOGO FIELD HERE, and their absence is the
             * point.
             *
             * Both already exist on the organisation's own settings screen. A
             * template that asked again would produce two answers to one
             * question - the invoice saying "Your company" while the sidebar
             * says the real name - and a rename would be three templates to
             * remember, with the forgotten one going to a customer.
             *
             * What is left is genuinely about PRINTING rather than identity: an
             * accent for paper, and whether the office prints in colour at all.
             * A teal that reads well on a monitor can be unreadable on a
             * monochrome laser printer, which is a different decision from the
             * one made on the appearance screen.
             */
            Section::make('Printing')
                ->description(
                    'How this document is printed. The company name and logo come from '
                    .'your organisation settings - they are not repeated here.'
                )
                ->columns(2)
                ->schema([
                    ColourField::make('accent')
                        ->label('Accent colour')
                        ->help('Rules, headings and the total line.')
                        /*
                         * AGAINST WHITE, BECAUSE THAT IS THE ONLY SURFACE THIS
                         * COLOUR EVER RENDERS ON - see `PkDocument.vue`, which
                         * draws every document on a fixed white page. A pale
                         * accent that looks fine as a small swatch in this
                         * form can be nearly invisible as the total line on
                         * an actual printed invoice - roadmap 7.1.
                         */
                        ->checkContrastAgainst('#ffffff'),
                    /*
                     * SEGMENTED, because this is one decision with two answers.
                     * As two tiles it took a quarter of the form and read as a
                     * six-option picker missing four options.
                     */
                    VisualSelectField::make('colour_mode')
                        ->label('Colour')
                        /*
                         * "B & W" rather than "Black & white". A segmented
                         * control is read at a glance, and one segment three
                         * times the width of the other stops being a switch and
                         * becomes two buttons.
                         */
                        ->options(['colour' => 'Colour', 'mono' => 'B & W'])
                        ->preview('document-colour-mode')
                        ->segmented()
                        ->help('Most offices print in black and white. Choosing it here shows you what that looks like.'),
                ]),

            Section::make('Header')
                ->columns(2)
                ->schema([
                    TextField::make('title')->label('Title')->required(),
                    TextField::make('subtitle')->label('Subtitle'),
                ]),

            ...$body,

            Section::make('Footer')
                ->description('Who to contact when something on this document is wrong.')
                ->columns(2)
                ->schema([
                    TextField::make('support_phone')->label('Support phone'),
                    TextField::make('support_email')->label('Support email'),
                    TextareaField::make('footer_text')->label('Footer text')->rows(2)->span(2),
                ]),
        ];
    }

    /** @return array<string, mixed> */
    protected function standardDefaults(): array
    {
        return [
            /*
             * A VISIBLE COLOUR, not near-black.
             *
             * This was `#0f172a` - slate ink, perfectly reasonable on paper and
             * indistinguishable from the body text, so an operator opening the
             * designer saw an "Accent colour" field that appeared to change
             * nothing and reasonably concluded it was broken. A default that
             * demonstrates the control is worth more than a default that is
             * marginally more conservative, and anyone who wants ink can type it.
             */
            'accent' => '#0f766e',
            'colour_mode' => 'colour',
            'support_phone' => '',
            'support_email' => '',
            'footer_text' => '',
        ];
    }

    /**
     * The footer block, or nothing when there is nothing to say.
     *
     * AN EMPTY FOOTER IS OMITTED rather than rendered blank. A rule across the
     * page with nothing under it reads as a document that lost its last line.
     *
     * @param  array<string, mixed>  $settings
     * @return list<array<string, mixed>>
     */
    protected function footerBlock(array $settings): array
    {
        $contacts = array_values(array_filter([
            $settings['support_phone'] ?? null,
            $settings['support_email'] ?? null,
        ], static fn (mixed $v): bool => is_string($v) && trim($v) !== ''));

        $text = trim((string) ($settings['footer_text'] ?? ''));

        if ($contacts === [] && $text === '') {
            return [];
        }

        return [['type' => 'footer', 'text' => $text, 'contacts' => $contacts]];
    }
}
