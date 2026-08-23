<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Documents\Kinds;

use Alxtexh\Panel\Forms\Fields\TextareaField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Schema\Section;

/**
 * Proof that money arrived.
 *
 * NEARLY AN INVOICE, AND NOT AN INVOICE. Both list what was charged, so the
 * temptation is one kind with a `paid` flag - and that is wrong in the way that
 * matters. An invoice is a demand and looks forward: it has a due date and terms
 * about what happens if you ignore it. A receipt is evidence and looks back: it
 * has a payment method, a reference somebody will quote in a dispute, and no due
 * date at all. Merging them produces a document with a due date on something
 * already paid, which is the kind of detail a customer emails about.
 */
class ReceiptKind extends StandardDocumentKind
{
    public function id(): string
    {
        return 'receipt';
    }

    public function label(): string
    {
        return 'Receipt';
    }

    public function description(): string
    {
        return 'Proof that a payment was received.';
    }

    public function fields(): array
    {
        return $this->standardFields([
            Section::make('Body')
                ->schema([
                    TextField::make('paid_by_heading')->label('Payer heading'),
                    TextField::make('thanks')->label('Acknowledgement line'),
                    TextareaField::make('terms')
                        ->label('Small print')
                        ->rows(2)
                        ->help('Printed under the total. Variables are allowed.'),
                ]),
        ]);
    }

    public function variables(): array
    {
        return [
            '@number' => 'The receipt number',
            '@customer' => "The payer's name",
            '@paid' => 'The date the payment was received',
            '@total' => 'The amount received, formatted',
            '@method' => 'How it was paid',
        ];
    }

    public function defaults(): array
    {
        return [
            ...$this->standardDefaults(),
            'title' => 'Receipt',
            'subtitle' => '',
            'paid_by_heading' => 'Received from',
            'thanks' => 'Thank you - this account is paid up to date.',
            'terms' => 'Keep this receipt. Quote @number in any query about this payment.',
        ];
    }

    public function sample(): array
    {
        return [
            'number' => 'RCT-000000',
            'customer' => 'Sample Customer Ltd',
            'phone' => '+254 700 000 000',
            'reference' => 'SAMPLE-REF',
            'paid' => now()->toDateString(),
            'method' => 'M-Pesa',
            'currency' => 'KES',
            'lines' => [
                ['description' => 'Monthly subscription', 'detail' => 'March', 'quantity' => 1, 'unit' => '2,900.00', 'amount' => '2,900.00'],
            ],
            'total' => '2,900.00',
        ];
    }

    public function blocks(array $settings, array $data): array
    {
        return [
            [
                'type' => 'header',
                'title' => (string) ($settings['title'] ?? 'Receipt'),
                'subtitle' => (string) ($settings['subtitle'] ?? ''),
                'reference' => (string) ($data['number'] ?? ''),
                'meta' => [
                    ['label' => 'Paid', 'value' => (string) ($data['paid'] ?? '')],
                    ['label' => 'Method', 'value' => (string) ($data['method'] ?? '')],
                ],
            ],
            [
                'type' => 'party',
                'heading' => (string) ($settings['paid_by_heading'] ?? 'Received from'),
                'name' => (string) ($data['customer'] ?? ''),
                'lines' => array_values(array_filter([
                    $data['phone'] ?? null,
                    $data['reference'] ?? null,
                ])),
            ],
            [
                'type' => 'lines',
                'columns' => ['Description', 'Qty', 'Unit', 'Amount'],
                'rows' => array_map(static fn (array $line): array => [
                    'description' => (string) ($line['description'] ?? ''),
                    'detail' => (string) ($line['detail'] ?? ''),
                    'cells' => [
                        (string) ($line['quantity'] ?? ''),
                        (string) ($line['unit'] ?? ''),
                        (string) ($line['amount'] ?? ''),
                    ],
                ], $data['lines'] ?? []),
                'empty' => 'This receipt has no lines.',
                'totals' => [[
                    'label' => 'Paid',
                    'value' => trim(($data['currency'] ?? '').' '.($data['total'] ?? '')),
                    'strong' => true,
                ]],
            ],
            ...(trim((string) ($settings['thanks'] ?? '')) !== ''
                ? [['type' => 'note', 'text' => (string) $settings['thanks'], 'emphasis' => true]]
                : []),
            ...(trim((string) ($settings['terms'] ?? '')) !== ''
                ? [['type' => 'note', 'text' => (string) $settings['terms']]]
                : []),
            ...$this->footerBlock($settings),
        ];
    }
}
