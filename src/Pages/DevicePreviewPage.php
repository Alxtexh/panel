<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;

/**
 * The panel, inside a device frame. Empty URL falls back to this portal's home.
 *
 * OPT-IN BY SUBCLASSING. `make:panel-page Preview --device-preview` writes an
 * empty stub. Override `previewUrl()` to point at a specific screen.
 */
abstract class DevicePreviewPage extends Page
{
    protected static string $icon = 'smartphone';

    public static function component(): string
    {
        return 'DevicePreview';
    }

    /**
     * What the iframe loads. Empty string means this panel's home.
     */
    public static function previewUrl(): string
    {
        $panel = app(PanelManager::class)->panel(static::panel());
        $path = trim((string) ($panel?->getPath() ?? ''), '/');

        return $path === '' ? '/' : '/'.$path;
    }

    /**
     * @return array<string, mixed>
     */
    public static function data(Request $request): array
    {
        return [
            'url' => static::previewUrl(),
        ];
    }
}
