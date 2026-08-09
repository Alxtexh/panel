<?php

declare(strict_types=1);

namespace PanelKit\Panel\Seo;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;

/**
 * The two things an application actually calls: describe a page, and list it.
 *
 * WHY THIS EXISTS AS A SEAM. `HasSeo` gives a record its metadata and `Sitemap`
 * lists URLs, and joining them by hand is where the mistake gets made: the
 * resolver that maps records to sitemap entries is written once per project, and
 * the version that forgets `noindex` produces a sitemap advertising pages the
 * head tags ask engines to ignore. `entry()` is that mapping, written once here.
 *
 * NO FACADE, NO CONTAINER BINDING. Every method is static and pure - it reads the
 * record's own relationship and returns an array. There is nothing to resolve, so
 * there is nothing to mock, and a test can call it with a model built in memory.
 */
final class Seo
{
    /**
     * A sitemap entry for one record, with its own metadata already applied.
     *
     * `Sitemap::source()` IS WHERE THIS BELONGS, because a source is evaluated
     * lazily at generation time - so the query runs when somebody presses
     * Regenerate and never on an ordinary page load:
     *
     *     Sitemap::source(fn () => Article::published()
     *         ->with('seo')
     *         ->get()
     *         ->map(fn (Article $a) => Seo::entry($a, "/blog/{$a->slug}", $a->updated_at))
     *         ->all());
     *
     * `with('seo')` IS NOT OPTIONAL ADVICE. Without it this is one query per
     * record, and a sitemap is the one screen guaranteed to touch every published
     * row at once - the N+1 nobody notices in development and everybody notices
     * at ten thousand articles.
     *
     * @return array{loc: string, lastmod: ?DateTimeInterface, changefreq: ?string, priority: ?float, noindex: bool, canonical: string|null}
     */
    public static function entry(
        Model $record,
        string $url,
        ?DateTimeInterface $lastmod = null,
        ?string $changefreq = null,
        ?float $priority = null,
    ): array {
        $metadata = self::of($record);

        return [
            'loc' => $url,
            'lastmod' => $lastmod,
            'changefreq' => $changefreq,
            'priority' => $priority,

            /*
             * BOTH TRAVEL, and `Sitemap` decides what to do with them - see its
             * normalisation loop. Resolving them here instead would mean an
             * application that registers entries by hand gets different
             * behaviour from one that uses this helper.
             */
            'noindex' => (bool) $metadata?->noindex,
            'canonical' => self::blankToNull((string) $metadata?->canonical),
        ];
    }

    /**
     * The metadata for a record, or null when it has none.
     *
     * TOLERANT OF A MODEL WITHOUT THE TRAIT, because this is called from
     * application code and the failure mode otherwise is a fatal on a method
     * that does not exist - a worse outcome than "this page has no metadata",
     * which is a true and survivable statement about a model nobody has opted in.
     */
    public static function of(Model $record): ?SeoMetadata
    {
        if (! method_exists($record, 'seoOrNew')) {
            return null;
        }

        $metadata = $record->seoOrNew();

        return $metadata->isEmpty() && ! $metadata->exists ? null : $metadata;
    }

    /**
     * The tags to render in `<head>`, as name => content pairs.
     *
     * RETURNED AS DATA RATHER THAN AS HTML, and that is the whole design. A
     * package that returned a Blade string would decide the escaping, the tag
     * order and the attribute style for an application whose front end it has
     * never seen - and a panel's front end may be Blade, Inertia, or a separate
     * framework consuming this over the API. Pairs compose into any of them.
     *
     * THE KEYS ARE THE FINAL ATTRIBUTE VALUES, so a caller loops once without
     * knowing which are `name=` and which are `property=`. That distinction is
     * real - Open Graph is an RDFa vocabulary and uses `property` - so it is
     * carried in the shape: keys starting `og:` are properties, the rest names.
     *
     * @return array<string, string>
     */
    public static function tags(SeoMetadata $metadata, ?string $url = null): array
    {
        $tags = [];

        $title = trim((string) $metadata->title);
        $description = trim((string) $metadata->description);
        $image = trim((string) $metadata->og_image);
        $canonical = trim((string) $metadata->canonical) ?: (string) $url;

        if ($title !== '') {
            $tags['title'] = $title;
            $tags['og:title'] = $title;
            $tags['twitter:title'] = $title;
        }

        if ($description !== '') {
            $tags['description'] = $description;
            $tags['og:description'] = $description;
            $tags['twitter:description'] = $description;
        }

        $keywords = $metadata->keywordList();

        if ($keywords !== []) {
            $tags['keywords'] = implode(', ', $keywords);
        }

        if ($image !== '') {
            $tags['og:image'] = $image;
            $tags['twitter:image'] = $image;

            /*
             * A CARD TYPE IS REQUIRED FOR THE IMAGE TO BE USED AT ALL. Twitter
             * ignores `twitter:image` without it and falls back to a bare link,
             * so shipping the image and omitting this is the shape of bug where
             * everything looks configured and nothing renders.
             */
            $tags['twitter:card'] = 'summary_large_image';
        }

        if ($canonical !== '') {
            $tags['og:url'] = $canonical;
        }

        /*
         * ONLY WHEN TRUE. `robots: index` is the default for every engine, so
         * emitting it says nothing - and a tag that is always present is one
         * somebody has to read before discovering it does not matter.
         */
        if ($metadata->noindex) {
            $tags['robots'] = 'noindex, nofollow';
        }

        return $tags;
    }

    /**
     * The metadata attributes out of a form payload, with the prefix removed.
     *
     * THE OTHER HALF OF `SeoSchema`, and useless without it. The schema names its
     * fields `seo_title` and `seo_noindex` so they cannot collide with the
     * record's own columns; this turns them back into the column names the
     * metadata row actually has:
     *
     *     $record->writeSeo(Seo::fromForm($request->all()));
     *
     * KEYS NOT IN THE SET ARE DROPPED HERE TOO, so this is safe to hand a whole
     * request. `writeSeo()` filters again - two filters rather than one because
     * either may be called without the other, and the one that gets skipped is
     * always the one that mattered.
     *
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    public static function fromForm(array $payload, string $prefix = SeoSchema::PREFIX): array
    {
        $out = [];

        foreach (['title', 'description', 'keywords', 'og_image', 'canonical', 'noindex'] as $key) {
            if (array_key_exists($prefix.$key, $payload)) {
                $out[$key] = $payload[$prefix.$key];
            }
        }

        return $out;
    }

    /**
     * The same attributes, prefixed, for filling the form in.
     *
     * THE RETURN JOURNEY, and leaving it out is how an edit form comes up blank
     * on a record that has metadata - the values are there, under names the
     * fields are not looking for.
     *
     * @return array<string, mixed>
     */
    public static function toForm(?SeoMetadata $metadata, string $prefix = SeoSchema::PREFIX): array
    {
        return [
            $prefix.'title' => $metadata?->title,
            $prefix.'description' => $metadata?->description,
            $prefix.'keywords' => $metadata?->keywordList() ?? [],
            $prefix.'og_image' => $metadata?->og_image,
            $prefix.'canonical' => $metadata?->canonical,
            $prefix.'noindex' => (bool) $metadata?->noindex,
        ];
    }

    private static function blankToNull(string $value): ?string
    {
        return trim($value) === '' ? null : trim($value);
    }
}
