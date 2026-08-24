<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;

/**
 * Kit-only demo of fields, columns, and widgets. No host domain content.
 *
 * OFF until `Panel::kitShowcase()` or `apps(['showcase'])`. Use this to verify
 * a fresh install shows the same chrome as the published kit, without the
 * playground's vertical demo.
 */
class ShowcasePage extends Page
{
    protected static string $icon = 'layout-template';

    protected static ?string $group = 'Developer';

    protected static ?int $sort = 90;

    public static function uri(): string
    {
        return 'apps/showcase';
    }

    public static function label(): string
    {
        return 'Showcase';
    }

    public static function component(): string
    {
        return 'Showcase';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('showcase');
    }

    public static function ability(): ?string
    {
        return null;
    }

    public static function heading(): ?string
    {
        return 'Kit showcase';
    }

    public static function description(): ?string
    {
        return 'Fields, table columns, and widgets from the package. Domain-neutral sample data only.';
    }

    /**
     * @return array{
     *     samples: array{
     *         fields: list<array{label: string, type: string, hint: string}>,
     *         columns: list<array{key: string, label: string, type: string, group?: string, limit?: int}>,
     *         rows: list<array<string, mixed>>,
     *         widgets: list<array{label: string, type: string, hint: string}>
     *     }
     * }
     */
    public static function data(Request $request): array
    {
        return [
            'samples' => [
                'fields' => [
                    ['label' => 'Text', 'type' => 'text', 'hint' => 'TextField::make()'],
                    ['label' => 'Select', 'type' => 'select', 'hint' => 'SelectField::make()->options()'],
                    ['label' => 'Toggle buttons', 'type' => 'toggle-buttons', 'hint' => 'ToggleButtonsField::make()->options()'],
                    ['label' => 'Toggle', 'type' => 'toggle', 'hint' => 'ToggleField::make()'],
                    ['label' => 'Date', 'type' => 'date', 'hint' => 'DateField::make()'],
                    ['label' => 'Map', 'type' => 'map', 'hint' => 'MapField::make()->latLng()'],
                    ['label' => 'QR / Barcode', 'type' => 'code', 'hint' => 'QrCodeField / BarcodeField'],
                ],
                'columns' => [
                    ['key' => 'name', 'label' => 'Name', 'type' => 'text'],
                    ['key' => 'email', 'label' => 'Email', 'type' => 'text', 'group' => 'Contact'],
                    ['key' => 'phone', 'label' => 'Phone', 'type' => 'text', 'group' => 'Contact'],
                    ['key' => 'status', 'label' => 'Status', 'type' => 'badge'],
                    ['key' => 'tags', 'label' => 'Tags', 'type' => 'tags', 'limit' => 3],
                ],
                'rows' => [
                    [
                        'id' => 1,
                        'name' => 'Ada Lovelace',
                        'email' => 'ada@example.test',
                        'phone' => '+44 20 0000',
                        'status' => 'active',
                        'tags' => ['math', 'engine', 'notes'],
                    ],
                    [
                        'id' => 2,
                        'name' => 'Grace Hopper',
                        'email' => 'grace@example.test',
                        'phone' => '+1 202 0000',
                        'status' => 'active',
                        'tags' => ['cobol', 'compiler', 'navy', 'standards'],
                    ],
                    [
                        'id' => 3,
                        'name' => 'Alan Turing',
                        'email' => 'alan@example.test',
                        'phone' => '+44 161 0000',
                        'status' => 'draft',
                        'tags' => ['enigma'],
                    ],
                ],
                'widgets' => [
                    ['label' => 'Stat strip', 'type' => 'stat', 'hint' => 'StatWidget::make()->poll() / ->live()'],
                    ['label' => 'Chart', 'type' => 'chart', 'hint' => 'ChartWidget::make()->type()'],
                    ['label' => 'Map', 'type' => 'map', 'hint' => 'MapWidget::make()->markers()'],
                    ['label' => 'Calendar', 'type' => 'calendar', 'hint' => 'CalendarWidget::make()->events()'],
                    ['label' => 'Table widget', 'type' => 'table', 'hint' => 'TableWidget::make()->resource()'],
                ],
            ],
        ];
    }
}
