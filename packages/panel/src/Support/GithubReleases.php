<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Support;

use Illuminate\Support\Facades\Http;
use Throwable;

/**
 * Optional What's new source: public GitHub releases.
 *
 * A BUTTON, NOT A FEED. Portals that never configure a repo never call this.
 * A failed request returns an empty list so locally edited rows stay put.
 */
final class GithubReleases
{
    /**
     * Tags that restored the v1.0.9 tree under later numbers. They remain on
     * GitHub (not deleted) so Composer `^1.0` still prefers them. What's new
     * must not advertise them as newer product.
     *
     * @var list<string>
     */
    private const HIDDEN = ['1.0.10', '1.0.11', '1.0.12', '1.0.13', '1.0.14', '1.0.15'];

    /**
     * @return list<array{version: string, date: string, highlight: string}>
     */
    public static function fetch(string $repository): array
    {
        $repo = self::normalise($repository);

        if ($repo === null) {
            return [];
        }

        try {
            $response = Http::acceptJson()
                ->timeout(8)
                ->withHeaders(['User-Agent' => 'Alxtexhpanel'])
                ->get('https://api.github.com/repos/'.$repo.'/releases', [
                    'per_page' => 20,
                ]);
        } catch (Throwable) {
            return [];
        }

        if (! $response->successful()) {
            return [];
        }

        $out = [];

        foreach ((array) $response->json() as $release) {
            if (! is_array($release)) {
                continue;
            }

            $version = ltrim((string) ($release['tag_name'] ?? $release['name'] ?? ''), 'v');

            if ($version === '' || in_array($version, self::HIDDEN, true)) {
                continue;
            }

            $published = (string) ($release['published_at'] ?? $release['created_at'] ?? '');
            $date = $published !== '' ? date('j F Y', strtotime($published) ?: time()) : '';

            $out[] = [
                'version' => $version,
                'date' => $date,
                'highlight' => trim((string) ($release['name'] ?? $release['body'] ?? '')),
            ];
        }

        return $out;
    }

    public static function normalise(string $repository): ?string
    {
        $repository = trim($repository);

        if (preg_match('~github\\.com[:/]([^/]+/[^/.]+?)(?:\\.git)?(?:/|$)~i', $repository, $matches) === 1) {
            return $matches[1];
        }

        if (preg_match('#^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$#', $repository) === 1) {
            return $repository;
        }

        return null;
    }
}
