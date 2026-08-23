<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Pages;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Alxtexh\Panel\Support\Sitemap;

/**
 * The public sitemap - what it currently declares, and a button to write it.
 *
 * ABSENT UNTIL THERE IS SOMETHING TO GENERATE, the same rule `ChangelogPage`
 * and `EnvironmentPage` follow. `Sitemap::isEmpty()` is true for an
 * installation with no public landing page and nothing registered through
 * `Sitemap::add()`/`source()` - and a settings screen offering to build a
 * sitemap with zero URLs in it is a button that does nothing, reachable from
 * a menu entry that should not exist.
 *
 * SEEING AND GENERATING ARE SEPARATE GRANTS, same reasoning as every other
 * packaged page with an action: an operator confirming the sitemap looks
 * right is not the same person who should be able to rewrite a file the web
 * server serves to the public internet.
 */
final class SitemapPage extends Page
{
    protected static string $icon = 'map';

    protected static ?string $group = 'Settings';

    public static function slug(): string
    {
        return 'sitemap';
    }

    public static function label(): string
    {
        return 'Sitemap';
    }

    public static function ability(): ?string
    {
        return 'view_sitemap';
    }

    public static function actions(): array
    {
        return ['generate' => 'manage_sitemap'];
    }

    public static function actionMethods(): array
    {
        return ['generate' => 'post'];
    }

    public static function actionUris(): array
    {
        return ['generate' => 'generate'];
    }

    public static function isEnabled(): bool
    {
        return ! Sitemap::isEmpty();
    }

    public static function component(): string
    {
        return 'Sitemap';
    }

    public static function heading(): ?string
    {
        return 'Sitemap';
    }

    public static function description(): ?string
    {
        return 'What this installation tells search engines is public, and when it was last written.';
    }

    public static function data(Request $request): array
    {
        $urls = Sitemap::urls();
        $generatedAt = Sitemap::generatedAt();

        return [
            /*
             * BOTH LISTS TRAVEL, AND THEY CAN DISAGREE. `urls` is what is
             * DECLARED right now; `generatedAt` is when the file on disk was
             * last WRITTEN. Somebody who added a URL and has not clicked
             * regenerate should see that the file is stale, not a screen that
             * implies the two are always the same thing.
             */
            'urls' => array_map(
                static fn (array $u): array => [
                    'loc' => $u['loc'],
                    'lastmod' => $u['lastmod']?->format(\DateTimeInterface::ATOM),
                    'changefreq' => $u['changefreq'],
                    'priority' => $u['priority'],
                ],
                $urls,
            ),
            'exists' => Sitemap::exists(),
            'generatedAt' => $generatedAt?->format(\DateTimeInterface::ATOM),
            'filename' => Sitemap::filename(),
            'maxPerFile' => Sitemap::MAX_URLS_PER_FILE,
            'willSplit' => count($urls) > Sitemap::MAX_URLS_PER_FILE,
            'robotsTxtReferencesIt' => Sitemap::robotsTxtReferencesIt(),
            'indexNowConfigured' => Sitemap::indexNowConfigured(),
        ];
    }

    public static function generate(Request $request): RedirectResponse
    {
        $result = Sitemap::write();

        $message = $result['count'] === 1
            ? "Sitemap written with 1 URL ({$result['files'][0]})."
            : sprintf('Sitemap written with %d URLs across %d file(s).', $result['count'], count($result['files']));

        if ($result['robotsTxtUpdated']) {
            $message .= ' Referenced it from robots.txt.';
        }

        if ($result['indexNow'] === 'notified') {
            $message .= ' Notified IndexNow.';
        }

        return back()->with('success', $message);
    }
}
