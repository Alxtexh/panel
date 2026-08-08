<?php

declare(strict_types=1);

namespace PanelKit\Panel\Support;

use Closure;
use DateTimeInterface;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Landing\LandingController;

/**
 * A sitemap.xml for the ONE part of an admin panel that is public: whatever
 * marketing or informational pages the installation puts in front of the
 * panel itself.
 *
 * WHAT THIS DELIBERATELY DOES NOT DO, because PanelKit is not a website
 * builder. Every general-purpose sitemap tool - the one Google itself ships
 * for WordPress, the Laravel packages, the Filament plugins - is built to
 * crawl or enumerate a multi-page PUBLIC site: a blog, a product catalogue,
 * a documentation tree. An admin panel is the opposite shape: nearly every
 * screen sits behind `auth`, and putting one of them in a public sitemap
 * would be inviting a search engine to index a login-gated URL it can never
 * actually read, which helps nobody and tells a crawler this feed cannot be
 * trusted.
 *
 * So there is no crawler, no model integration, and no per-resource sitemap
 * columns to declare. There is a REGISTRY an application adds its own public
 * URLs to, and the one thing PanelKit can already prove is public without
 * being told - the landing page, gated the same way `LandingPageResource`
 * gates its own "View the page" link - is in it automatically.
 *
 * PING ENDPOINTS ARE DELIBERATELY ABSENT. Every competing tool still ships
 * one, and it does nothing: Google deprecated the sitemap ping endpoint in
 * June 2023 and it has 404'd since - a shipped feature quietly doing nothing
 * is worse than no feature, because nobody notices it stopped working.
 * Submission now happens through Search Console or a `Sitemap:` line in
 * `robots.txt`, which this file does not write either - `robots.txt` belongs
 * to the application, and a package silently rewriting it the first time
 * this feature is used is the kind of surprise this codebase keeps finding
 * and removing.
 *
 * IMAGES, VIDEOS AND A SEPARATE NEWS FEED ARE ALSO ABSENT. Every one of those
 * assumes a content site with a content TYPE to describe, which nothing here
 * has an opinion about. `source()` is the escape hatch: an installation that
 * grows a public blog or catalogue can build any URL set it likes and hand it
 * to this class as a closure. What PanelKit ships is the mechanism and the
 * one entry it can prove; what an application is FOR is not its business.
 */
final class Sitemap
{
    /**
     * The protocol's own ceiling - sitemaps.org: 50,000 URLs, 50MB per file.
     * Below it in practice, because the byte limit is reached first for
     * almost any real payload; the count is what determines whether an
     * index is needed at all.
     */
    public const MAX_URLS_PER_FILE = 50_000;

    /** @var list<array{loc: string, lastmod: ?DateTimeInterface, changefreq: ?string, priority: ?float}> */
    private static array $entries = [];

    /** @var list<Closure(): iterable> */
    private static array $sources = [];

    private const CHANGEFREQS = ['always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'];

    /**
     * Register one URL directly - the common case, and how the landing page
     * would register itself if it were not already covered below.
     */
    public static function add(
        string $loc,
        ?DateTimeInterface $lastmod = null,
        ?string $changefreq = null,
        ?float $priority = null,
    ): void {
        self::$entries[] = compact('loc', 'lastmod', 'changefreq', 'priority');
    }

    /**
     * Register a SOURCE OF URLS rather than a URL - a closure called only when
     * the sitemap is actually resolved.
     *
     * WHY A CLOSURE AND NOT AN EAGER LIST. A public blog with a thousand posts
     * should not query them at every request that happens to load this class -
     * `urls()` is called once, at generation time or when the admin screen
     * renders, and nowhere else. Registering the QUERY rather than its result
     * is what keeps that true regardless of how many closures a plugin adds.
     *
     * Each yielded item is either a plain URL string or the same shape
     * `add()` takes as an array: `['loc' => ..., 'lastmod' => ..., 'changefreq' => ..., 'priority' => ...]`.
     *
     * @param  Closure(): iterable<string|array{loc: string, lastmod?: ?DateTimeInterface, changefreq?: ?string, priority?: ?float}>  $resolver
     */
    public static function source(Closure $resolver): void
    {
        self::$sources[] = $resolver;
    }

    /**
     * Every declared entry, normalised and de-duplicated.
     *
     * @return list<array{loc: string, lastmod: ?DateTimeInterface, changefreq: ?string, priority: ?float}>
     */
    public static function urls(): array
    {
        $raw = self::$entries;

        foreach (self::$sources as $resolver) {
            foreach ($resolver() as $item) {
                $raw[] = is_string($item) ? ['loc' => $item] : $item;
            }
        }

        $landing = LandingController::publicUrl();

        if ($landing !== null) {
            $raw[] = ['loc' => $landing, 'priority' => 1.0];
        }

        /*
         * DE-DUPLICATED BY `loc`, LAST REGISTRATION WINS. Two sources naming
         * the same URL is not a conflict worth throwing over - a plugin and
         * the application both declaring the front page, say - and "last
         * wins" means the application's own registration (evaluated after
         * the built-in landing entry above) can override the default without
         * needing to know it exists.
         */
        $normalised = [];

        foreach ($raw as $entry) {
            $loc = trim((string) ($entry['loc'] ?? ''));

            if ($loc === '') {
                continue;
            }

            /*
             * A PATH WITH NO SCHEME IS MADE ABSOLUTE, NOT REJECTED.
             *
             * `LandingController::publicUrl()` returns `/` for the ordinary
             * case - this package routing its own landing page - and `/` is
             * exactly right as an href, which is the only thing that method
             * existed to produce before this class started calling it. It is
             * not a valid `<loc>`: the protocol requires the full URL,
             * "including the protocol", and a bare path in a live sitemap
             * would be a validator error nobody asking for "the landing page"
             * would expect to cause.
             *
             * The same courtesy is extended to every registered entry, not
             * only the built-in one - `Sitemap::add('/blog/hello-world')` is
             * the form anybody will actually type, and requiring the full
             * `config('app.url').'/blog/hello-world'` from every caller would
             * be asking each of them to get this exact fix right themselves.
             */
            if (parse_url($loc, PHP_URL_SCHEME) === null) {
                $loc = url($loc);
            }

            if (filter_var($loc, FILTER_VALIDATE_URL) === false) {
                continue;
            }

            $changefreq = $entry['changefreq'] ?? null;

            $normalised[$loc] = [
                'loc' => $loc,
                'lastmod' => $entry['lastmod'] ?? null,
                'changefreq' => in_array($changefreq, self::CHANGEFREQS, true) ? $changefreq : null,
                // Clamped to the protocol's own range rather than rejected -
                // a plugin author's typo of `5` (meant as "high") becomes the
                // ceiling `1.0` instead of silently dropping the whole entry.
                'priority' => isset($entry['priority']) ? max(0.0, min(1.0, (float) $entry['priority'])) : null,
            ];
        }

        return array_values($normalised);
    }

    public static function isEmpty(): bool
    {
        return self::urls() === [];
    }

    /** Test-only. Mirrors `Changelog::forget()` for the same reason: static state outlives a test otherwise. */
    public static function forget(): void
    {
        self::$entries = [];
        self::$sources = [];
    }

    /**
     * Where the file lands, resolved once so `write()` and the admin screen
     * agree on the same path without either hardcoding it twice.
     *
     * NULL DISK MEANS THE PROJECT ROOT, DIRECTLY - the ordinary case. A
     * sitemap is expected at the domain root
     * (`https://example.com/sitemap.xml`), and a Laravel disk almost never
     * resolves there: the `public` disk is `storage/app/public`, symlinked
     * to `/storage`, not `/`. Naming a disk is for the installation that
     * genuinely serves static assets from S3 or another origin and has
     * already arranged for that origin to answer at its domain root - this
     * class does not arrange that for them.
     */
    public static function filename(): string
    {
        return (string) config('panel.sitemap.filename', 'sitemap.xml');
    }

    private static function disk(): ?string
    {
        $disk = config('panel.sitemap.disk');

        return is_string($disk) && $disk !== '' ? $disk : null;
    }

    /** Whether a file exists at the configured destination right now. */
    public static function exists(): bool
    {
        $disk = self::disk();

        return $disk !== null
            ? Storage::disk($disk)->exists(self::filename())
            : File::exists(public_path(self::filename()));
    }

    /** When the file at the configured destination was last written, if it exists. */
    public static function generatedAt(): ?DateTimeInterface
    {
        if (! self::exists()) {
            return null;
        }

        $disk = self::disk();

        $timestamp = $disk !== null
            ? Storage::disk($disk)->lastModified(self::filename())
            : File::lastModified(public_path(self::filename()));

        return \DateTimeImmutable::createFromFormat('U', (string) $timestamp) ?: null;
    }

    /**
     * Build the XML and write it to disk, splitting into an index once the
     * declared count exceeds the protocol's per-file limit.
     *
     * `XMLWriter` OVER STRING CONCATENATION, for the same reason every
     * exporter in this package uses a streaming writer rather than building a
     * string in memory: escaping is the library's job, not a `str_replace`
     * chain somebody has to get right for `&`, `<`, `>` and quotes every
     * time a new field is added.
     *
     * @return array{files: list<string>, count: int}
     */
    public static function write(): array
    {
        $urls = self::urls();
        $chunks = array_chunk($urls, self::MAX_URLS_PER_FILE);
        $written = [];

        if (count($chunks) <= 1) {
            self::put(self::filename(), self::urlset($chunks[0] ?? []));
            $written[] = self::filename();

            return ['files' => $written, 'count' => count($urls)];
        }

        /*
         * MORE THAN ONE FILE'S WORTH: THE MAIN FILENAME BECOMES AN INDEX.
         * `sitemap.xml` no longer holds URLs itself - it points at
         * `sitemap-1.xml`, `sitemap-2.xml`, ... which do. This is the shape
         * `sitemaps.org` itself specifies for exceeding the per-file limit,
         * and it is the only place in this class larger than a landing page
         * and a handful of registered URLs is likely to reach.
         */
        $base = pathinfo(self::filename(), PATHINFO_FILENAME);
        $ext = pathinfo(self::filename(), PATHINFO_EXTENSION) ?: 'xml';

        $parts = [];

        foreach ($chunks as $i => $chunk) {
            $name = sprintf('%s-%d.%s', $base, $i + 1, $ext);
            self::put($name, self::urlset($chunk));
            $written[] = $name;
            $parts[] = $name;
        }

        self::put(self::filename(), self::sitemapIndex($parts));
        $written[] = self::filename();

        return ['files' => $written, 'count' => count($urls)];
    }

    private static function put(string $name, string $contents): void
    {
        $disk = self::disk();

        if ($disk !== null) {
            Storage::disk($disk)->put($name, $contents);

            return;
        }

        File::put(public_path($name), $contents);
    }

    /** @param  list<array{loc: string, lastmod: ?DateTimeInterface, changefreq: ?string, priority: ?float}>  $urls */
    private static function urlset(array $urls): string
    {
        $writer = new \XMLWriter;
        $writer->openMemory();
        $writer->setIndent(true);
        $writer->startDocument('1.0', 'UTF-8');
        $writer->startElement('urlset');
        $writer->writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

        foreach ($urls as $url) {
            $writer->startElement('url');
            $writer->writeElement('loc', $url['loc']);

            if ($url['lastmod'] !== null) {
                $writer->writeElement('lastmod', $url['lastmod']->format(DateTimeInterface::W3C));
            }

            if ($url['changefreq'] !== null) {
                $writer->writeElement('changefreq', $url['changefreq']);
            }

            if ($url['priority'] !== null) {
                // `number_format`, not the float directly - `1.0` cast to
                // string is `"1"`, which a strict XML validator has flagged
                // as not matching the schema's decimal pattern before now.
                $writer->writeElement('priority', number_format($url['priority'], 1));
            }

            $writer->endElement();
        }

        $writer->endElement();
        $writer->endDocument();

        return $writer->outputMemory();
    }

    /** @param  list<string>  $parts */
    private static function sitemapIndex(array $parts): string
    {
        $writer = new \XMLWriter;
        $writer->openMemory();
        $writer->setIndent(true);
        $writer->startDocument('1.0', 'UTF-8');
        $writer->startElement('sitemapindex');
        $writer->writeAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

        $base = rtrim((string) config('app.url'), '/').'/';

        foreach ($parts as $part) {
            $writer->startElement('sitemap');
            $writer->writeElement('loc', $base.$part);
            $writer->writeElement('lastmod', now()->toAtomString());
            $writer->endElement();
        }

        $writer->endElement();
        $writer->endDocument();

        return $writer->outputMemory();
    }
}
