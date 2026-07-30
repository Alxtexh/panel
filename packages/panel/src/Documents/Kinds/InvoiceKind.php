<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents\Kinds;

use PanelKit\Panel\Forms\Fields\TextareaField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Fields\ToggleField;
use PanelKit\Panel\Schema\Section;

/**
 * A bill: who owes what, for what, by when.
 *
 * IT SHIPS WITH SAMPLE DATA AND NO RECORDS, deliberately. This package has never
 * heard of your invoices table, so it cannot list real ones - and a designer that
 * only worked once somebody wired it up would be a designer nobody ever saw
 * working. An application subclasses this, adds `records()` and `data()`, and
 * registers it under the same id; the registry's last-write-wins is the
 * documented way to do that.
 */
class InvoiceKind extends StandardDocumentKind
{
    public function id(): string
    {
        return 'invoice';
    }

    public function label(): string
    {
        return 'Invoice';
    }

    public function description(): string
    {
        return 'What a customer owes, and by when.';
    }

    public function fields(): array
    {
        return $this->standardFields([
            Section::make('Body')
                ->description('The wording between the line items and the footer.')
                ->schema([
                    TextField::make('bill_to_heading')->label('Recipient heading'),
                    ToggleField::make('show_tax')
                        ->label('Show a tax line')
                        ->help('Off, the total is the sum of the lines with no tax shown at all.'),
                    TextareaField::make('terms')
                        ->label('Payment terms')
                        ->rows(2)
                        ->help('Printed under the total. Variables are allowed.'),
                ]),
        ]);
    }

    public function variables(): array
    {
        return [
            '@number' => 'The invoice number',
            '@customer' => "The recipient's name",
            '@due' => 'The date payment is due',
            '@total' => 'The amount payable, formatted',
        ];
    }

    public function defaults(): array
    {
        return [
            ...$this->standardDefaults(),
            'title' => 'Invoice',
            'subtitle' => '',
            'bill_to_heading' => 'Billed to',
            'show_tax' => true,
            'terms' => 'Payment due by @due. Service may be suspended on overdue accounts.',
        ];
    }

    public function sample(): array
    {
        return [
            'number' => 'INV-000000',
            'customer' => 'Sample Customer Ltd',
            'phone' => '+254 700 000 000',
            'reference' => 'SAMPLE-REF',
            'issued' => now()->toDateString(),
            'due' => now()->addDays(14)->toDateString(),
            'currency' => 'KES',
            'lines' => [
                ['description' => 'Monthly subscription', 'detail' => '20 Mbps', 'quantity' => 1, 'unit' => '2,500.00', 'amount' => '2,500.00'],
            ],
            'subtotal' => '2,500.00',
            'tax' => '400.00',
            'taxLabel' => 'VAT (16%)',
            'total' => '2,900.00',
        ];
    }

    public function blocks(array $settings, array $data): array
    {
        $totals = [['label' => 'Subtotal', 'value' => (string) ($data['subtotal'] ?? '')]];

        if (($settings['show_tax'] ?? true) && ($data['tax'] ?? null) !== null) {
            $totals[] = ['label' => (string) ($data['taxLabel'] ?? 'Tax'), 'value' => (string) $data['tax']];
        }

        $totals[] = [
            'label' => 'Total',
            'value' => trim(($data['currency'] ?? '').' '.($data['total'] ?? '')),
            'strong' => true,
        ];

        return [
            [
                'type' => 'header',
                'title' => (string) ($settings['title'] ?? 'Invoice'),
                'subtitle' => (string) ($settings['subtitle'] ?? ''),
                'reference' => (string) ($data['number'] ?? ''),
                'meta' => [
                    ['label' => 'Issued', 'value' => (string) ($data['issued'] ?? '')],
                    ['label' => 'Due', 'value' => (string) ($data['due'] ?? '')],
                ],
            ],
            [
                'type' => 'party',
                'heading' => (string) ($settings['bill_to_heading'] ?? 'Billed to'),
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
                'empty' => 'Nothing to bill on this invoice.',
                'totals' => $totals,
            ],
            ...(trim((string) ($settings['terms'] ?? '')) !== ''
                ? [['type' => 'note', 'text' => (string) $settings['terms']]]
                : []),
            ...$this->footerBlock($settings),
        ];
    }
}
