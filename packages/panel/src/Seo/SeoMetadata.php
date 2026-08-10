<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Seo;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

/**
 * One record's - or one keyed page's - search metadata.
 *
 * THE TABLE NAME COMES FROM CONFIG, the same rule the ticket tables follow and
 * for the same reason: `seo_metadata` is a name an application may already have
 * taken, and a migration that succeeds against somebody else's table is worse
 * than one that collides loudly.
 *
 * NO TENANT COLUMN, AND THAT IS NOT AN OVERSIGHT. A row is reached only through
 * its `seoable`, which is itself tenant-scoped by whatever policy governs it -
 * so the isolation is inherited rather than duplicated. A tenant column here
 * would be a second source of truth that could disagree with the parent, which
 * is the shape of every cross-tenant leak this codebase has had. Keyed rows
 * (`settings_key`) are installation-wide by definition: a landing page is not
 * one tenant's.
 */
/**
 * THE COLUMNS, SO STATIC ANALYSIS CAN SEE THEM - see `Alerts\Announcement`.
 *
 * ALMOST EVERYTHING IS NULLABLE HERE, AND THAT IS THE MODEL'S WHOLE POINT: a
 * row exists to override the defaults for ONE page, and every field it does not
 * set falls back. A non-null annotation on any of these would be a lie the
 * analyser then enforces on the callers.
 *
 * `seoable_type`/`seoable_id` COME FROM `nullableMorphs`, so both are nullable
 * together - a row keyed by `settings_key` instead is the site-wide default.
 *
 * @property int $id
 * @property string|null $seoable_type
 * @property int|null $seoable_id
 * @property string|null $settings_key
 * @property string|null $title
 * @property string|null $description
 * @property list<string>|null $keywords
 * @property string|null $og_image
 * @property string|null $canonical
 * @property bool $noindex
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 */
final class SeoMetadata extends Model
{
    protected $guarded = [];

    protected $casts = [
        'keywords' => 'array',
        'noindex' => 'boolean',
    ];

    public function getTable(): string
    {
        return (string) config('panel.seo.table', 'panel_seo_metadata');
    }

    /** @return MorphTo<Model, $this> */
    public function seoable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * The keywords, as a list of trimmed non-empty strings.
     *
     * NORMALISED ON READ RATHER THAN TRUSTED. The column is json and the form
     * sends whatever the operator typed, so a stray empty entry or a value with
     * surrounding whitespace is expected input, not a bug to guard against
     * elsewhere. Doing it here means every reader - the analyser, the head tags,
     * the API - gets the same answer.
     *
     * @return list<string>
     */
    public function keywordList(): array
    {
        $keywords = $this->keywords;

        if (! is_array($keywords)) {
            return [];
        }

        return array_values(array_filter(
            array_map(static fn ($word): string => trim((string) $word), $keywords),
            static fn (string $word): bool => $word !== '',
        ));
    }

    /**
     * Whether anything has actually been written here.
     *
     * A ROW CAN EXIST AND SAY NOTHING, because the trait creates one the first
     * time a form is saved even if every field was left blank. "Has a row" is
     * therefore not the same question as "has metadata", and the screens that
     * report coverage need the second one.
     */
    public function isEmpty(): bool
    {
        return trim((string) $this->title) === ''
            && trim((string) $this->description) === ''
            && $this->keywordList() === []
            && trim((string) $this->og_image) === ''
            && trim((string) $this->canonical) === '';
    }
}
