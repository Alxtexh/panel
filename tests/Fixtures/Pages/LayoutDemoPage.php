<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Fixtures\Pages;

use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Pages\Page;
use Alxtexh\Panel\Pages\PageLayout;
use Alxtexh\Panel\Schema\Card;
use Alxtexh\Panel\Schema\Column;
use Alxtexh\Panel\Schema\Columns;
use Alxtexh\Panel\Schema\Section;
use Illuminate\Http\Request;

/** Fixture for page layout schema serialization and render tests. */
final class LayoutDemoPage extends Page
{
    protected static string $panel = 'admin';

    public static function ability(): ?string
    {
        return null;
    }

    public static function component(): string
    {
        return 'PanelPage';
    }

    public static function layout(): ?PageLayout
    {
        return PageLayout::make()->schema([
            Section::make('Overview')->schema([
                TextField::make('headline')->required(),
            ]),
            Columns::make([
                Column::make()->schema([
                    Card::make('Left')->schema([
                        TextField::make('left_note'),
                    ]),
                ]),
                Column::make()->schema([
                    Card::make('Right')->schema([
                        TextField::make('right_note'),
                    ]),
                ]),
            ]),
        ]);
    }

    public static function data(Request $request): array
    {
        return [
            'values' => [
                'headline' => 'Demo',
                'left_note' => 'Left side',
                'right_note' => 'Right side',
            ],
        ];
    }
}
