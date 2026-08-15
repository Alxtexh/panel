<?php

declare(strict_types=1);

namespace App\Panel;

use Alxtexh\Panel\Support\Module;

/**
 * Hardcoded merchandising and till rows for the Kit showcase pages.
 *
 * FAKE ON PURPOSE. These screens exist so a copier can see CatalogGrid,
 * LineItems and PkStatusBadge without standing up a POS or rental schema.
 */
final class KitDemo
{
    /**
     * @return list<array<string, mixed>>
     */
    public static function products(): array
    {
        return [
            [
                'key' => 'sku-blend',
                'kind' => 'product',
                'sku' => 'SKU-1041',
                'label' => 'House espresso',
                'caption' => 'SKU-1041 · 250g',
                'price' => 'KES 850',
                'status' => 'in-stock',
                'stock' => 42,
                'image' => self::photo('espresso', 0),
                'images' => [self::photo('espresso', 1)],
                'metrics' => ['price' => 850],
                'facets' => ['category' => 'coffee', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-filter',
                'kind' => 'product',
                'sku' => 'SKU-1042',
                'label' => 'Paper filters',
                'caption' => 'SKU-1042 · pack of 100',
                'price' => 'KES 320',
                'status' => 'low',
                'stock' => 8,
                'image' => self::photo('filters', 0),
                'progress' => ['value' => 8, 'total' => 40, 'tone' => 'warning'],
                'metrics' => ['price' => 320],
                'facets' => ['category' => 'supplies', 'stock' => 'low'],
            ],
            [
                'key' => 'sku-mug',
                'kind' => 'product',
                'sku' => 'SKU-2210',
                'label' => 'Stoneware mug',
                'caption' => 'SKU-2210 · 300ml',
                'price' => 'KES 1,200',
                'status' => 'in-stock',
                'stock' => 18,
                'image' => self::photo('mug', 0),
                'images' => [self::photo('mug', 1), self::photo('mug', 2)],
                'metrics' => ['price' => 1200],
                'facets' => ['category' => 'merch', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-syrup',
                'kind' => 'product',
                'sku' => 'SKU-3304',
                'label' => 'Vanilla syrup',
                'caption' => 'SKU-3304 · 1L',
                'price' => 'KES 980',
                'status' => 'out-of-stock',
                'stock' => 0,
                'image' => self::photo('syrup', 0),
                'progress' => ['value' => 0, 'total' => 24, 'tone' => 'danger'],
                'metrics' => ['price' => 980],
                'facets' => ['category' => 'supplies', 'stock' => 'out-of-stock'],
            ],
            [
                'key' => 'sku-beans',
                'kind' => 'product',
                'sku' => 'SKU-1188',
                'label' => 'Single origin bag',
                'caption' => 'SKU-1188 · Nyeri',
                'price' => 'KES 1,450',
                'status' => 'in-stock',
                'stock' => 24,
                'image' => self::photo('beans', 0),
                'images' => [self::photo('beans', 1)],
                'metrics' => ['price' => 1450],
                'facets' => ['category' => 'coffee', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-tin',
                'kind' => 'product',
                'sku' => 'SKU-4401',
                'label' => 'Travel tin',
                'caption' => 'SKU-4401 · merch',
                'price' => 'KES 650',
                'status' => 'low',
                'stock' => 3,
                'image' => self::photo('tin', 0),
                'progress' => ['value' => 3, 'total' => 20, 'tone' => 'warning'],
                'metrics' => ['price' => 650],
                'facets' => ['category' => 'merch', 'stock' => 'low'],
            ],
            [
                'key' => 'sku-decaf',
                'kind' => 'product',
                'sku' => 'SKU-1190',
                'label' => 'Decaf espresso',
                'caption' => 'SKU-1190 · 250g',
                'price' => 'KES 890',
                'status' => 'in-stock',
                'stock' => 16,
                'image' => self::photo('decaf', 0),
                'metrics' => ['price' => 890],
                'facets' => ['category' => 'coffee', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-cups',
                'kind' => 'product',
                'sku' => 'SKU-5102',
                'label' => 'Takeaway cups',
                'caption' => 'SKU-5102 · sleeve of 50',
                'price' => 'KES 540',
                'status' => 'in-stock',
                'stock' => 60,
                'image' => self::photo('cups', 0),
                'metrics' => ['price' => 540],
                'facets' => ['category' => 'supplies', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-apron',
                'kind' => 'product',
                'sku' => 'SKU-4408',
                'label' => 'Barista apron',
                'caption' => 'SKU-4408 · merch',
                'price' => 'KES 1,800',
                'status' => 'low',
                'stock' => 4,
                'image' => self::photo('apron', 0),
                'progress' => ['value' => 4, 'total' => 20, 'tone' => 'warning'],
                'metrics' => ['price' => 1800],
                'facets' => ['category' => 'merch', 'stock' => 'low'],
            ],
            [
                'key' => 'sku-drip',
                'kind' => 'product',
                'sku' => 'SKU-1182',
                'label' => 'Filter roast',
                'caption' => 'SKU-1182 · 500g',
                'price' => 'KES 1,650',
                'status' => 'in-stock',
                'stock' => 11,
                'image' => self::photo('drip', 0),
                'metrics' => ['price' => 1650],
                'facets' => ['category' => 'coffee', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-lids',
                'kind' => 'product',
                'sku' => 'SKU-5108',
                'label' => 'Cup lids',
                'caption' => 'SKU-5108 · pack of 50',
                'price' => 'KES 280',
                'status' => 'in-stock',
                'stock' => 90,
                'image' => self::photo('lids', 0),
                'metrics' => ['price' => 280],
                'facets' => ['category' => 'supplies', 'stock' => 'in-stock'],
            ],
            [
                'key' => 'sku-tote',
                'kind' => 'product',
                'sku' => 'SKU-4412',
                'label' => 'Canvas tote',
                'caption' => 'SKU-4412 · merch',
                'price' => 'KES 950',
                'status' => 'in-stock',
                'stock' => 22,
                'image' => self::photo('tote', 0),
                'metrics' => ['price' => 950],
                'facets' => ['category' => 'merch', 'stock' => 'in-stock'],
            ],
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function units(): array
    {
        return [
            [
                'key' => 'unit-riverside',
                'kind' => 'unit',
                'label' => '12 Riverside Drive',
                'caption' => 'Apartment · Westlands',
                'price' => 'KES 85,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('riverside', 0),
                'images' => [self::photo('riverside', 1)],
                'facts' => ['2 bed', '1 bath', '78 m²'],
                'progress' => ['value' => 80, 'total' => 100, 'tone' => 'success'],
                'metrics' => ['rent' => 85000, 'beds' => 2],
                'facets' => ['type' => 'apartment', 'occupancy' => 'occupied', 'beds' => '2'],
            ],
            [
                'key' => 'unit-kilimani',
                'kind' => 'unit',
                'label' => 'Argwings Court B4',
                'caption' => 'Apartment · Kilimani',
                'price' => 'KES 62,000 / mo',
                'status' => 'vacant',
                'image' => self::photo('kilimani', 0),
                'facts' => ['1 bed', '1 bath', '52 m²'],
                'progress' => ['value' => 0, 'total' => 100, 'tone' => 'info'],
                'metrics' => ['rent' => 62000, 'beds' => 1],
                'facets' => ['type' => 'apartment', 'occupancy' => 'vacant', 'beds' => '1'],
            ],
            [
                'key' => 'unit-lavington',
                'kind' => 'unit',
                'label' => 'Lavington Green house',
                'caption' => 'House · Lavington',
                'price' => 'KES 180,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('lavington', 0),
                'images' => [self::photo('lavington', 1)],
                'facts' => ['3 bed', '2 bath', 'garden'],
                'progress' => ['value' => 100, 'total' => 100, 'tone' => 'success'],
                'metrics' => ['rent' => 180000, 'beds' => 3],
                'facets' => ['type' => 'house', 'occupancy' => 'occupied', 'beds' => '3'],
            ],
            [
                'key' => 'unit-kileleshwa',
                'kind' => 'unit',
                'label' => 'Studio 7, Othaya Rd',
                'caption' => 'Studio · Kileleshwa',
                'price' => 'KES 48,000 / mo',
                'status' => 'vacant',
                'image' => self::photo('studio', 0),
                'facts' => ['studio', '1 bath', 'furnished'],
                'progress' => ['value' => 15, 'total' => 100, 'tone' => 'info'],
                'metrics' => ['rent' => 48000, 'beds' => 0],
                'facets' => ['type' => 'studio', 'occupancy' => 'vacant', 'beds' => '0'],
            ],
            [
                'key' => 'unit-townhouse',
                'kind' => 'unit',
                'label' => 'Riverside townhouse 2',
                'caption' => 'Townhouse · Westlands',
                'price' => 'KES 145,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('townhouse', 0),
                'images' => [self::photo('townhouse', 1)],
                'facts' => ['2 bed', '2.5 bath', 'parking'],
                'progress' => ['value' => 62, 'total' => 100, 'tone' => 'warning'],
                'metrics' => ['rent' => 145000, 'beds' => 2],
                'facets' => ['type' => 'house', 'occupancy' => 'occupied', 'beds' => '2'],
            ],
            [
                'key' => 'unit-karen',
                'kind' => 'unit',
                'label' => 'Karen Hardy bungalow',
                'caption' => 'House · Karen',
                'price' => 'KES 220,000 / mo',
                'status' => 'vacant',
                'image' => self::photo('karen', 0),
                'images' => [self::photo('karen', 1)],
                'facts' => ['4 bed', '3 bath', '1,200 m² plot'],
                'progress' => ['value' => 0, 'total' => 100, 'tone' => 'info'],
                'metrics' => ['rent' => 220000, 'beds' => 4],
                'facets' => ['type' => 'house', 'occupancy' => 'vacant', 'beds' => '4'],
            ],
            [
                'key' => 'unit-parklands',
                'kind' => 'unit',
                'label' => 'Parklands Court 9',
                'caption' => 'Apartment · Parklands',
                'price' => 'KES 55,000 / mo',
                'status' => 'vacant',
                'image' => self::photo('parklands', 0),
                'facts' => ['1 bed', '1 bath', '48 m²'],
                'progress' => ['value' => 0, 'total' => 100, 'tone' => 'info'],
                'metrics' => ['rent' => 55000, 'beds' => 1],
                'facets' => ['type' => 'apartment', 'occupancy' => 'vacant', 'beds' => '1'],
            ],
            [
                'key' => 'unit-ngara',
                'kind' => 'unit',
                'label' => 'Ngara loft 3',
                'caption' => 'Studio · Ngara',
                'price' => 'KES 38,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('ngara', 0),
                'facts' => ['studio', '1 bath'],
                'progress' => ['value' => 100, 'total' => 100, 'tone' => 'success'],
                'metrics' => ['rent' => 38000, 'beds' => 0],
                'facets' => ['type' => 'studio', 'occupancy' => 'occupied', 'beds' => '0'],
            ],
            [
                'key' => 'unit-runda',
                'kind' => 'unit',
                'label' => 'Runda close 14',
                'caption' => 'House · Runda',
                'price' => 'KES 310,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('runda', 0),
                'facts' => ['5 bed', '4 bath', 'garden'],
                'progress' => ['value' => 90, 'total' => 100, 'tone' => 'success'],
                'metrics' => ['rent' => 310000, 'beds' => 5],
                'facets' => ['type' => 'house', 'occupancy' => 'occupied', 'beds' => '5'],
            ],
            [
                'key' => 'unit-southb',
                'kind' => 'unit',
                'label' => 'South B maisonette',
                'caption' => 'House · South B',
                'price' => 'KES 95,000 / mo',
                'status' => 'vacant',
                'image' => self::photo('southb', 0),
                'facts' => ['3 bed', '2 bath'],
                'progress' => ['value' => 0, 'total' => 100, 'tone' => 'info'],
                'metrics' => ['rent' => 95000, 'beds' => 3],
                'facets' => ['type' => 'house', 'occupancy' => 'vacant', 'beds' => '3'],
            ],
            [
                'key' => 'unit-westie',
                'kind' => 'unit',
                'label' => 'Westlands penthouse',
                'caption' => 'Apartment · Westlands',
                'price' => 'KES 250,000 / mo',
                'status' => 'occupied',
                'image' => self::photo('penthouse', 0),
                'facts' => ['3 bed', '3 bath', 'view'],
                'progress' => ['value' => 70, 'total' => 100, 'tone' => 'warning'],
                'metrics' => ['rent' => 250000, 'beds' => 3],
                'facets' => ['type' => 'apartment', 'occupancy' => 'occupied', 'beds' => '3'],
            ],
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function lines(): array
    {
        return [
            [
                'key' => 'line-1',
                'label' => 'House espresso',
                'detail' => 'SKU-1041',
                'qty' => 2,
                'amount' => 'KES 1,700',
                'status' => 'paid',
            ],
            [
                'key' => 'line-2',
                'label' => 'Stoneware mug',
                'detail' => 'SKU-2210',
                'qty' => 1,
                'amount' => 'KES 1,200',
                'status' => 'unpaid',
            ],
            [
                'key' => 'line-3',
                'label' => 'Oak table',
                'detail' => 'Due today 18:00',
                'qty' => 1,
                'amount' => 'KES 1,800',
                'status' => 'due',
            ],
            [
                'key' => 'line-4',
                'label' => 'Loft 2',
                'detail' => 'Invoice #1048',
                'qty' => 1,
                'amount' => 'KES 8,200',
                'status' => 'overdue',
            ],
            [
                'key' => 'line-5',
                'label' => 'Paper filters',
                'detail' => 'SKU-1042',
                'qty' => 3,
                'amount' => 'KES 960',
                'status' => 'paid',
            ],
        ];
    }

    /**
     * @return list<string>
     */
    public static function statuses(): array
    {
        return [
            'paid',
            'unpaid',
            'overdue',
            'in-stock',
            'out-of-stock',
            'occupied',
            'vacant',
            'online',
            'offline',
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function gateways(): array
    {
        return [
            [
                'key' => 'mpesa',
                'label' => 'M-Pesa',
                'caption' => 'Safaricom STK / C2B till',
                'mark' => 'M',
                'color' => '#00A651',
                'connected' => true,
                'enabled' => true,
                'isDefault' => true,
                'mode' => 'test',
                'methods' => ['STK Push', 'Paybill', 'Till'],
            ],
            [
                'key' => 'cards',
                'label' => 'Cards',
                'caption' => 'Visa / Mastercard, Stripe-shaped',
                'mark' => 'C',
                'color' => '#635BFF',
                'connected' => true,
                'enabled' => true,
                'isDefault' => false,
                'mode' => 'live',
                'methods' => ['Card', 'Apple Pay lookalike'],
            ],
            [
                'key' => 'cash',
                'label' => 'Cash',
                'caption' => 'Drawer at the till',
                'mark' => 'K',
                'color' => '#57534e',
                'connected' => true,
                'enabled' => true,
                'isDefault' => false,
                'mode' => 'live',
                'methods' => ['Cash'],
            ],
            [
                'key' => 'bank',
                'label' => 'Bank transfer',
                'caption' => 'EFT / RTGS reference',
                'mark' => 'B',
                'color' => '#1d4ed8',
                'connected' => false,
                'enabled' => false,
                'isDefault' => false,
                'mode' => null,
                'methods' => ['EFT', 'RTGS'],
            ],
            [
                'key' => 'airtel',
                'label' => 'Airtel Money',
                'caption' => 'Airtel Kenya wallet',
                'mark' => 'A',
                'color' => '#E8112D',
                'connected' => false,
                'enabled' => false,
                'isDefault' => false,
                'mode' => null,
                'methods' => ['Wallet'],
            ],
            [
                'key' => 'pesapal',
                'label' => 'Pesapal',
                'caption' => 'Aggregator, mimic',
                'mark' => 'P',
                'color' => '#0f766e',
                'connected' => false,
                'enabled' => false,
                'isDefault' => false,
                'mode' => null,
                'methods' => ['Card', 'Mobile money'],
            ],
            [
                'key' => 'flutterwave',
                'label' => 'Flutterwave',
                'caption' => 'Aggregator, mimic',
                'mark' => 'F',
                'color' => '#FB9129',
                'connected' => true,
                'enabled' => true,
                'isDefault' => false,
                'mode' => 'test',
                'methods' => ['Card', 'Bank', 'Mobile money'],
            ],
            [
                'key' => 'paypal',
                'label' => 'PayPal',
                'caption' => 'Checkout, mimic',
                'mark' => 'PP',
                'color' => '#003087',
                'connected' => false,
                'enabled' => false,
                'isDefault' => false,
                'mode' => null,
                'methods' => ['Wallet'],
            ],
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function leases(): array
    {
        return [
            [
                'id' => 'lease-1',
                'tenant' => 'Amina Otieno',
                'unit' => '12 Riverside Drive',
                'start' => '2025-01-01',
                'end' => '2026-12-31',
                'rent' => 'KES 85,000',
                'deposit' => 'KES 170,000',
                'status' => 'active',
            ],
            [
                'id' => 'lease-2',
                'tenant' => 'Brian Mwangi',
                'unit' => 'Argwings Court B4',
                'start' => '2024-06-01',
                'end' => '2026-08-31',
                'rent' => 'KES 62,000',
                'deposit' => 'KES 124,000',
                'status' => 'ending',
            ],
            [
                'id' => 'lease-3',
                'tenant' => 'Chen Wanjiku',
                'unit' => 'Lavington Green house',
                'start' => '2023-03-15',
                'end' => '2027-03-14',
                'rent' => 'KES 180,000',
                'deposit' => 'KES 360,000',
                'status' => 'active',
            ],
            [
                'id' => 'lease-4',
                'tenant' => 'David Kariuki',
                'unit' => 'Studio 7, Othaya Rd',
                'start' => '2025-09-01',
                'end' => '2026-08-31',
                'rent' => 'KES 48,000',
                'deposit' => 'KES 96,000',
                'status' => 'overdue',
            ],
            [
                'id' => 'lease-5',
                'tenant' => 'Esther Njeri',
                'unit' => 'Riverside townhouse 2',
                'start' => '2024-11-01',
                'end' => '2026-10-31',
                'rent' => 'KES 145,000',
                'deposit' => 'KES 290,000',
                'status' => 'active',
            ],
            [
                'id' => 'lease-6',
                'tenant' => 'Farah Hassan',
                'unit' => 'Karen Hardy bungalow',
                'start' => '2022-04-01',
                'end' => '2026-03-31',
                'rent' => 'KES 220,000',
                'deposit' => 'KES 440,000',
                'status' => 'ending',
            ],
        ];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function leaseCards(): array
    {
        $photos = ['riverside', 'kilimani', 'lavington', 'studio', 'townhouse', 'karen'];
        $cards = [];
        $unitKeyByLabel = [];

        foreach (self::units() as $unit) {
            $unitKeyByLabel[$unit['label']] = $unit['key'];
        }

        foreach (self::leases() as $i => $lease) {
            $cards[] = [
                'key' => $unitKeyByLabel[$lease['unit']] ?? $lease['id'],
                'kind' => 'unit',
                'label' => $lease['unit'],
                'caption' => $lease['tenant'],
                'price' => $lease['rent'].' / mo',
                'status' => $lease['status'],
                'image' => self::photo($photos[$i % count($photos)], 0),
                'facts' => [
                    $lease['start'].' → '.$lease['end'],
                    'Deposit '.$lease['deposit'],
                ],
                'facets' => ['status' => $lease['status']],
            ];
        }

        return $cards;
    }

    /**
     * @return array<string, mixed>
     */
    public static function sampleContract(): array
    {
        return [
            'kindLabel' => 'Lease',
            'version' => 1,
            'sample' => true,
            'branding' => [
                'company' => 'Westlands Estates',
                'logoUrl' => null,
                'accent' => '#1d4ed8',
                'mono' => false,
            ],
            'blocks' => [
                [
                    'type' => 'header',
                    'title' => 'Tenancy agreement',
                    'subtitle' => 'Residential lease — sample',
                    'reference' => 'LSE-2210',
                    'meta' => [
                        ['label' => 'Start', 'value' => '1 Jan 2025'],
                        ['label' => 'End', 'value' => '31 Dec 2026'],
                    ],
                ],
                [
                    'type' => 'party',
                    'heading' => 'Landlord',
                    'name' => 'Westlands Estates Ltd',
                    'lines' => ['P.O. Box 100, Nairobi'],
                ],
                [
                    'type' => 'party',
                    'heading' => 'Tenant',
                    'name' => 'Amina Otieno',
                    'lines' => ['12 Riverside Drive, Westlands'],
                ],
                [
                    'type' => 'note',
                    'text' => 'The tenant shall pay rent of KES 85,000 on the first of each month. Deposit KES 170,000 held against dilapidations.',
                    'emphasis' => false,
                ],
                [
                    'type' => 'steps',
                    'heading' => 'The parties agree',
                    'items' => [
                        'Quiet enjoyment of the unit for the term.',
                        'Rent paid in advance, without deduction.',
                        'No structural alteration without written consent.',
                    ],
                ],
                [
                    'type' => 'footer',
                    'text' => 'Sample wording — not a legal instrument.',
                    'contacts' => [],
                ],
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    public static function sampleInvoice(): array
    {
        return [
            'kindLabel' => 'Invoice',
            'version' => 1,
            'sample' => true,
            'branding' => [
                'company' => 'Westlands Estates',
                'logoUrl' => null,
                'accent' => '#0f766e',
                'mono' => false,
            ],
            'blocks' => [
                [
                    'type' => 'header',
                    'title' => 'Invoice',
                    'subtitle' => 'Tenancy invoice',
                    'reference' => 'INV-1048',
                    'meta' => [
                        ['label' => 'Issued', 'value' => '15 Aug 2026'],
                        ['label' => 'Due', 'value' => '1 Sep 2026'],
                    ],
                ],
                [
                    'type' => 'party',
                    'heading' => 'Bill to',
                    'name' => 'Amina Otieno',
                    'lines' => ['12 Riverside Drive', 'Westlands, Nairobi'],
                ],
                [
                    'type' => 'lines',
                    'columns' => ['Description', 'Amount'],
                    'empty' => 'No lines',
                    'rows' => [
                        [
                            'description' => 'Rent — September 2026',
                            'detail' => '12 Riverside Drive',
                            'cells' => ['KES 85,000'],
                        ],
                        [
                            'description' => 'Service charge',
                            'detail' => '',
                            'cells' => ['KES 4,500'],
                        ],
                    ],
                    'totals' => [
                        ['label' => 'Subtotal', 'value' => 'KES 89,500'],
                        ['label' => 'Total due', 'value' => 'KES 89,500', 'strong' => true],
                    ],
                ],
                [
                    'type' => 'note',
                    'text' => 'This preview is layout only. Signatures and stamps sit below the printed body.',
                    'emphasis' => false,
                ],
                [
                    'type' => 'footer',
                    'text' => 'Westlands Estates · not a live billing run',
                    'contacts' => ['accounts@example.test'],
                ],
            ],
        ];
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function item(string $key): ?array
    {
        foreach ([...self::products(), ...self::units()] as $row) {
            if (($row['key'] ?? null) === $key) {
                return $row;
            }
        }

        return null;
    }

    /**
     * CatalogBrowser tabs for the merchandising demo. Facet labels are the
     * coffee/rental showcase; a POS copies the shape, not the SKUs.
     *
     * @return list<array<string, mixed>>
     */
    public static function catalogTabs(): array
    {
        return [
            [
                'key' => 'products',
                'label' => 'Products',
                'items' => self::products(),
                'searchPlaceholder' => 'Search products…',
                'filterTitle' => 'Filter products',
                'facets' => [
                    [
                        'key' => 'category',
                        'label' => 'Category',
                        'options' => [
                            ['value' => 'coffee', 'label' => 'Coffee'],
                            ['value' => 'supplies', 'label' => 'Supplies'],
                            ['value' => 'merch', 'label' => 'Merch'],
                        ],
                    ],
                    [
                        'key' => 'stock',
                        'label' => 'Stock',
                        'options' => [
                            ['value' => 'in-stock', 'label' => 'In stock'],
                            ['value' => 'low', 'label' => 'Low'],
                            ['value' => 'out-of-stock', 'label' => 'Out of stock'],
                        ],
                    ],
                    ['key' => 'price', 'label' => 'Price (KES)', 'kind' => 'range'],
                ],
            ],
            [
                'key' => 'units',
                'label' => 'Units',
                'items' => self::units(),
                'searchPlaceholder' => 'Search units…',
                'filterTitle' => 'Filter units',
                'facets' => [
                    [
                        'key' => 'type',
                        'label' => 'Type',
                        'options' => [
                            ['value' => 'apartment', 'label' => 'Apartment'],
                            ['value' => 'house', 'label' => 'House'],
                            ['value' => 'studio', 'label' => 'Studio'],
                        ],
                    ],
                    [
                        'key' => 'occupancy',
                        'label' => 'Status',
                        'options' => [
                            ['value' => 'vacant', 'label' => 'Vacant'],
                            ['value' => 'occupied', 'label' => 'Occupied'],
                        ],
                    ],
                    ['key' => 'beds', 'label' => 'Beds', 'kind' => 'range'],
                    ['key' => 'rent', 'label' => 'Rent (KES)', 'kind' => 'range'],
                ],
            ],
        ];
    }

    /**
     * Fake SaaS catalogue for PlanSetupPage. Generic module names; a WhatsML
     * install would swap in its own keys here only. Kit showcase pages stay
     * always-on (no `$module`) so the ISP demo does not hide behind perks.
     *
     * @return list<Module>
     */
    public static function saasModules(): array
    {
        return [
            Module::make('devices')->label('Devices')->description('Linked endpoints')->planLimit(kind: 'number'),
            Module::make('storage')->label('Storage')->description('File quota')->planLimit(kind: 'number', label: 'Storage (GB)', step: 0.01),
            Module::make('workspaces')->label('Workspaces')->description('Organisation workspaces')->planLimit(kind: 'number'),
            Module::make('credits')->label('Credits')->description('Usage credits')->planLimit(kind: 'number'),
            Module::make('campaigns')->label('Campaigns')->description('Outbound campaigns')->planLimit(kind: 'number'),
        ];
    }

    /**
     * @return list<array{key: string, label: string, kind: string, hint?: string, step?: float}>
     */
    public static function saasLimits(): array
    {
        return [
            ['key' => 'devices', 'label' => 'Devices', 'kind' => 'number'],
            ['key' => 'storage', 'label' => 'Storage (GB)', 'kind' => 'number', 'step' => 0.01],
            ['key' => 'workspaces', 'label' => 'Workspaces', 'kind' => 'number'],
            ['key' => 'credits', 'label' => 'Credits', 'kind' => 'number'],
            ['key' => 'campaigns', 'label' => 'Campaigns', 'kind' => 'number'],
        ];
    }

    /**
     * Fake selected plan for grants(). Defaults to Pro (every module) so the
     * playground does not lock itself. Session `kit_saas_selected_plan` may
     * be starter / pro / enterprise.
     *
     * @return list<string>
     */
    public static function grantedSaasModules(): array
    {
        $value = self::selectedSaasPlan()['perks']['modules']['value'] ?? [];

        return is_array($value) ? array_values(array_map('strval', $value)) : [];
    }

    /**
     * @return array<string, int|float>
     */
    public static function saasCaps(): array
    {
        $caps = [];

        foreach (self::selectedSaasPlan()['perks'] ?? [] as $key => $perk) {
            if ($key === 'modules' || ! is_array($perk) || ! array_key_exists('value', $perk)) {
                continue;
            }

            if (is_numeric($perk['value'])) {
                $caps[(string) $key] = $perk['value'] + 0;
            }
        }

        return $caps;
    }

    /**
     * @return array<string, mixed>
     */
    public static function selectedSaasPlan(): array
    {
        $id = 'pro';

        if (app()->bound('request') && request()->hasSession()) {
            $id = (string) request()->session()->get('kit_saas_selected_plan', 'pro');
        }

        foreach (self::saasPlans() as $plan) {
            if ((string) ($plan['id'] ?? '') === $id) {
                return $plan;
            }
        }

        return self::saasPlans()[1];
    }

    /**
     * @return list<array<string, mixed>>
     */
    public static function saasPlans(): array
    {
        return [
            [
                'id' => 'starter',
                'name' => 'Starter',
                'shortDescription' => 'For an organisation getting started',
                'description' => 'Core modules with modest limits for one company.',
                'days' => 30,
                'price' => 9,
                'priceFormatted' => '$9',
                'activeUsers' => 4,
                'featured' => false,
                'recommended' => false,
                'trial' => true,
                'trialDays' => 14,
                'active' => true,
                'perks' => [
                    'modules' => ['value' => ['devices', 'storage'], 'overview' => 'Devices and storage'],
                    'devices' => ['value' => 3, 'overview' => 'Three endpoints'],
                    'storage' => ['value' => 5, 'overview' => 'Five gigabytes'],
                    'workspaces' => ['value' => 1, 'overview' => 'One workspace'],
                    'credits' => ['value' => 500, 'overview' => 'Five hundred credits'],
                    'campaigns' => ['value' => 0, 'overview' => 'Not included'],
                ],
                'extraPerks' => [['key' => 'Email support', 'value' => '48 hours']],
            ],
            [
                'id' => 'pro',
                'name' => 'Pro',
                'shortDescription' => 'The usual choice as the company grows',
                'description' => 'Every module, higher limits, billed to the organisation.',
                'days' => 30,
                'price' => 29,
                'priceFormatted' => '$29',
                'activeUsers' => 18,
                'featured' => true,
                'recommended' => true,
                'trial' => false,
                'trialDays' => 0,
                'active' => true,
                'perks' => [
                    'modules' => ['value' => ['devices', 'storage', 'workspaces', 'credits', 'campaigns'], 'overview' => 'All modules'],
                    'devices' => ['value' => 25, 'overview' => 'Twenty-five endpoints'],
                    'storage' => ['value' => 100, 'overview' => 'One hundred gigabytes'],
                    'workspaces' => ['value' => 10, 'overview' => 'Ten workspaces'],
                    'credits' => ['value' => -1, 'overview' => 'Unlimited credits'],
                    'campaigns' => ['value' => 50, 'overview' => 'Fifty campaigns'],
                ],
                'extraPerks' => [['key' => 'Priority support', 'value' => 'Same day']],
            ],
            [
                'id' => 'enterprise',
                'name' => 'Enterprise',
                'shortDescription' => 'No caps, yearly billing',
                'description' => 'Unlimited usage for the whole organisation.',
                'days' => 365,
                'price' => 299,
                'priceFormatted' => '$299',
                'activeUsers' => 0,
                'featured' => false,
                'recommended' => false,
                'trial' => false,
                'active' => true,
                'perks' => [
                    'modules' => ['value' => ['devices', 'storage', 'workspaces', 'credits', 'campaigns'], 'overview' => 'All modules'],
                    'devices' => ['value' => -1, 'overview' => 'Unlimited devices'],
                    'storage' => ['value' => -1, 'overview' => 'Unlimited storage'],
                    'workspaces' => ['value' => -1, 'overview' => 'Unlimited workspaces'],
                    'credits' => ['value' => -1, 'overview' => 'Unlimited credits'],
                    'campaigns' => ['value' => -1, 'overview' => 'Unlimited campaigns'],
                ],
                'extraPerks' => [['key' => 'Named CSM', 'value' => 'Included']],
            ],
        ];
    }

    /** HTTPS placeholder; CatalogCard refuses anything else. */
    private static function photo(string $seed, int $index): string
    {
        $palette = ['1c1917', '44403c', '57534e', '0f766e', '1d4ed8', '9a3412'];
        $bg = $palette[$index % count($palette)];

        return "https://placehold.co/640x480/{$bg}/fafafa.png?text=".rawurlencode($seed.' '.($index + 1));
    }
}
