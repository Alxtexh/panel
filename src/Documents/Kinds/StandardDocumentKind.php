<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents\Kinds;

use PanelKit\Panel\Documents\DocumentKind;
use PanelKit\Panel\Forms\Fields\ColourField;
use PanelKit\Panel\Forms\Fields\TextareaField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Fields\VisualSelectField;
use PanelKit\Panel\Schema\Section;

/**
 * The parts every printed document has, so three kinds do not write them thrice.
 *
 * Letterhead, a title, a footer with somebody to call. A voucher and an invoice
 * disagree about almost everything in between and agree completely about these,
 * and a kind that had to redeclare them would be one where the invoice designer
 * and the receipt designer slowly stopped matching.
 *
 * A BASE CLASS RATHER THAN A TRAIT, because these are not just fields: the
 * header and footer BLOCKS are built here too, and the two have to agree. A
 * trait supplying fields whose values nothing read would be the same bug as a
 * settings page wired to nothing.
 */
abstract class StandardDocumentKind extends DocumentKind
{
    /**
     * Branding, header and footer, in that order.
     *
     * SUBCLASSES SPLICE THEIR OWN SECTIONS INTO THE MIDDLE - the document's own
     * body sits between letterhead and footer on the page, so it reads in the
     * same order in the form. A designer whose fields run in a different order
     * from the document they describe makes somebody scroll to check.
     *
     * @param  list<\PanelKit\Panel\Schema\Renderable>  $body
     * @return list<\PanelKit\Panel\Schema\Renderable>
     */
    protected function standardFields(array $body): array
    {
        return [
            Section::make('Branding')
                ->description('The letterhead. Everything here appears on every document of this kind.')
                ->columns(2)
                ->schema([
                    TextField::make('company')->label('Company name')->required(),
                    TextField::make('logo_url')
                        ->label('Logo URL')
                        ->help('Left empty, the company name is used as the letterhead.'),
                    ColourField::make('accent')
                        ->label('Accent colour')
                        ->help('Rules, headings and the total line.'),
                    VisualSelectField::make('colour_mode')
                        ->label('Printing')
                        ->options(['colour' => 'Colour', 'mono' => 'Black & white'])
                        ->preview('document-colour-mode')
                        ->columns(2)
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
            'company' => 'Your company',
            'logo_url' => null,
            'accent' => '#0f172a',
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
