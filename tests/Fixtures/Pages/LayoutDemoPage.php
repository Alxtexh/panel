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
use Alxtexh\Panel\Support\InstallationState;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

/** Fixture for page layout schema serialization and render tests. */
final class LayoutDemoPage extends Page
{
    private const STATE_KEY = 'layout-demo:values';

    protected static string $panel = 'admin';

    public static function ability(): ?string
    {
        return null;
    }

    public static function component(): string
    {
        return 'PanelPage';
    }

    public static function actions(): array
    {
        return [
            'save' => static::ability(),
        ];
    }

    public static function actionMethods(): array
    {
        return [
            'save' => 'put',
        ];
    }

    public static function actionUris(): array
    {
        return [
            'save' => '',
        ];
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
        /** @var array<string, mixed> $stored */
        $stored = (array) app(InstallationState::class)->get(self::STATE_KEY, []);

        return [
            'values' => [
                'headline' => (string) ($stored['headline'] ?? 'Demo'),
                'left_note' => (string) ($stored['left_note'] ?? 'Left side'),
                'right_note' => (string) ($stored['right_note'] ?? 'Right side'),
            ],
        ];
    }

    public static function save(Request $request): RedirectResponse
    {
        $form = static::layoutForm();

        abort_if($form === null, 404);

        $validated = $request->validate($form->rules());
        $values = $form->sanitize($validated);

        app(InstallationState::class)->put(self::STATE_KEY, $values);

        return redirect()->back()->with('success', 'Layout saved.');
    }
}
