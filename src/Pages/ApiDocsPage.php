<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\OpenApiSpec;

/**
 * Scalar API reference. OFF until `Panel::apiDocs()` or `apps(['api-docs'])`.
 *
 * Serves a generated OpenAPI document at `{page}/openapi.json`, or uses a URL
 * configured on the panel. The Vue screen embeds Scalar against that URL.
 */
class ApiDocsPage extends Page
{
    protected static string $icon = 'book-open';

    protected static ?string $group = 'Developer';

    public static function uri(): string
    {
        return 'apps/api-docs';
    }

    public static function label(): string
    {
        return 'API docs';
    }

    public static function component(): string
    {
        return 'ApiDocs';
    }

    public static function isEnabled(): bool
    {
        $panel = app(PanelManager::class)->panel(static::panel());

        return $panel !== null && $panel->offersApp('api-docs');
    }

    /**
     * Any signed-in operator may read the reference for their portal.
     */
    public static function ability(): ?string
    {
        return null;
    }

    /**
     * @return array<string, string|null>
     */
    public static function actions(): array
    {
        // Same rule as ability(): any signed-in operator may fetch the document.
        return [
            'spec' => null,
        ];
    }

    public static function actionUris(): array
    {
        return [
            'spec' => 'openapi.json',
        ];
    }

    public static function actionMethods(): array
    {
        return [
            'spec' => 'get',
        ];
    }

    /**
     * @return array{openapiUrl: string|null}
     */
    public static function data(Request $request): array
    {
        $panel = app(PanelManager::class)->panel(static::panel());
        $configured = $panel?->getOpenapiUrl();

        if (is_string($configured) && $configured !== '') {
            return ['openapiUrl' => $configured];
        }

        return ['openapiUrl' => static::specHref()];
    }

    public static function spec(Request $request): JsonResponse
    {
        return response()->json(OpenApiSpec::document());
    }

    protected static function specHref(): string
    {
        $path = '/'.trim(static::navigationPath(), '/').'/openapi.json';
        $prefix = app(PanelManager::class)->currentPanel()?->getPath() ?? '';

        if ($prefix !== '' && $prefix !== '/') {
            $path = rtrim($prefix, '/').$path;
        }

        if (! str_starts_with($path, '/')) {
            $path = '/'.$path;
        }

        return $path;
    }
}
