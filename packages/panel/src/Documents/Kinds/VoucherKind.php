<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Documents\Kinds;

use Alxtexh\Panel\Forms\Fields\RepeaterField;
use Alxtexh\Panel\Forms\Fields\TextareaField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Fields\VisualSelectField;
use Alxtexh\Panel\Schema\Section;

/**
 * A code somebody types in to get something.
 *
 * THE DOCUMENT THAT MAKES THE WHOLE FEATURE WORTH BUILDING. An invoice is
 * emailed and can be re-sent; a voucher is printed in a batch of two hundred,
 * cut up, and handed out. If the code box is unreadable, the expiry wording is
 * wrong, or the steps are in the wrong order, you find out from a customer
 * holding a piece of paper - and the fix is reprinting two hundred of them.
 * There is no way to see that in advance except to look at the voucher, which is
 * exactly what a designer with a live preview is for.
 *
 * THE CODE BOX IS THE POINT OF `VisualSelectField`. Six framings - dashed,
 * solid, ticket, pill, stamp, minimal - offered as six drawings of themselves
 * with a real code inside, not as six words in a dropdown. Choosing "Ticket"
 * from a list means imagining what this company's idea of a ticket looks like;
 * choosing it from a picture means looking at it.
 */
class VoucherKind extends StandardDocumentKind
{
    public function id(): string
    {
        return 'voucher';
    }

    public function label(): string
    {
        return 'Voucher';
    }

    public function description(): string
    {
        return 'A printed code, and how to redeem it.';
    }

    public function fields(): array
    {
        return $this->standardFields([
            Section::make('Code box')
                ->description('How the code is framed on the paper. Each option is drawn as itself.')
                ->schema([
                    VisualSelectField::make('code_style')
                        ->label('Framing')
                        ->options([
                            'dashed' => 'Dashed',
                            'solid' => 'Solid',
                            'ticket' => 'Ticket',
                            'pill' => 'Pill',
                            'stamp' => 'Stamp',
                            'minimal' => 'Minimal',
                        ])
                        ->preview('voucher-code-box')
                        /*
                         * THREE ACROSS, NOT SIX. Six tiles in a form column are
                         * about 40px each, and at that size the framing - the
                         * only thing being chosen - is too small to compare
                         * against its neighbour. Two rows of three is more
                         * scrolling and an actually usable picker.
                         */
                        ->columns(3),
                    TextField::make('code_caption')
                        ->label('Caption under the code')
                        ->help('Variables are allowed.'),
                ]),

            Section::make('Redemption steps')
                ->description('Numbered on the voucher, in this order.')
                ->schema([
                    RepeaterField::make('steps')
                        ->label('Steps')
                        ->itemLabel('Step')
                        ->schema([TextField::make('text')->label('Instruction')->required()])
                        ->maxItems(6)
                        /*
                         * SIX IS A PRINTING LIMIT, not a taste one. A voucher is
                         * a few centimetres of paper; the seventh step is the one
                         * that pushes the code off the bottom, and the person who
                         * added it will not find that out until the batch is cut.
                         */
                        ->help('Up to six - more than that will not fit on a printed voucher.'),
                ]),

            Section::make('Body')
                ->schema([
                    TextareaField::make('validity')
                        ->label('Validity line')
                        ->rows(2)
                        ->help('Variables are allowed.'),
                ]),
        ]);
    }

    public function variables(): array
    {
        return [
            '@code' => 'The voucher code itself',
            '@value' => 'What the voucher is worth',
            '@expires' => 'The date it stops working',
            '@duration' => 'How long the access lasts',
        ];
    }

    public function defaults(): array
    {
        return [
            ...$this->standardDefaults(),
            'title' => 'Internet voucher',
            'subtitle' => '',
            'code_style' => 'dashed',
            'code_caption' => 'Worth @value - @duration',
            'steps' => [
                ['text' => 'Connect to the network.'],
                ['text' => 'Open any web page.'],
                ['text' => 'Enter the code above.'],
            ],
            'validity' => 'Valid until @expires. One use only.',
        ];
    }

    public function sample(): array
    {
        return [
            'code' => 'ABCD-1234-EFGH',
            'value' => 'KES 100',
            'duration' => '24 hours',
            'expires' => now()->addDays(30)->toDateString(),
        ];
    }

    public function blocks(array $settings, array $data): array
    {
        $steps = array_values(array_filter(array_map(
            static fn (mixed $step): string => is_array($step)
                ? trim((string) ($step['text'] ?? ''))
                : trim((string) $step),
            $settings['steps'] ?? [],
        ), static fn (string $t): bool => $t !== ''));

        return [
            [
                'type' => 'header',
                'title' => (string) ($settings['title'] ?? 'Voucher'),
                'subtitle' => (string) ($settings['subtitle'] ?? ''),
                'reference' => '',
                'meta' => [],
            ],
            [
                'type' => 'code',
                'style' => (string) ($settings['code_style'] ?? 'dashed'),
                'code' => (string) ($data['code'] ?? ''),
                'caption' => (string) ($settings['code_caption'] ?? ''),
            ],
            ...($steps !== []
                ? [['type' => 'steps', 'heading' => 'How to use it', 'items' => $steps]]
                : []),
            ...(trim((string) ($settings['validity'] ?? '')) !== ''
                ? [['type' => 'note', 'text' => (string) $settings['validity']]]
                : []),
            ...$this->footerBlock($settings),
        ];
    }
}
