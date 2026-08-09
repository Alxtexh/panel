<?php

declare(strict_types=1);

namespace PanelKit\Panel\Seo;

use Illuminate\Database\Eloquent\Relations\MorphOne;

/**
 * Put this on a model whose records are public pages.
 *
 * ONE TRAIT, ONE RELATIONSHIP, NO CONFIGURATION - which is the thing
 * `ralphjsmit/laravel-seo` gets right and is worth copying exactly. A consumer
 * adds `use HasSeo;` and the record has metadata; nothing else is registered,
 * published or wired.
 *
 * `seo()` ALWAYS ANSWERS, AND THAT IS THE POINT of `seoOrNew()`. A record that
 * has never been saved with SEO has no row, so every caller would otherwise
 * write `$record->seo?->title ?? ''` and the one that forgets the `?` throws on
 * exactly the records nobody has got to yet. The unsaved instance is not
 * persisted until something writes to it.
 *
 * DELETING THE RECORD DELETES THE METADATA, via the model event rather than a
 * database cascade. A cascade would need the constraint to exist, and a morph
 * cannot have one - `seoable_id` points at a different table depending on the
 * row. Doing it in PHP is the only place it CAN be done, and leaving it out is
 * how a table accumulates rows describing records that no longer exist.
 */
trait HasSeo
{
    /** @return MorphOne<SeoMetadata, $this> */
    public function seo(): MorphOne
    {
        return $this->morphOne(SeoMetadata::class, 'seoable');
    }

    /**
     * The metadata, or an unsaved one shaped for this record.
     *
     * NOT `firstOrCreate`, deliberately. Reading a record's SEO on a list screen
     * must not write to the database - a GET that inserts rows is a GET that
     * fails on a read replica and inflates the table by being looked at.
     */
    public function seoOrNew(): SeoMetadata
    {
        $existing = $this->seo;

        if ($existing instanceof SeoMetadata) {
            return $existing;
        }

        $metadata = new SeoMetadata;
        $metadata->seoable_type = $this->getMorphClass();
        $metadata->seoable_id = $this->getKey();

        return $metadata;
    }

    /**
     * Write metadata for this record, creating the row if it is the first time.
     *
     * KEYS ARE FILTERED AGAINST THE KNOWN SET rather than passed through. The
     * caller is a form endpoint, so the payload is whatever arrived - and
     * `$guarded = []` on the model means an unfiltered `fill()` would let a
     * request set `seoable_type` and reassign the row to another record.
     *
     * @param  array<string, mixed>  $attributes
     */
    public function writeSeo(array $attributes): SeoMetadata
    {
        $metadata = $this->seoOrNew();

        $metadata->fill(array_intersect_key($attributes, array_flip([
            'title',
            'description',
            'keywords',
            'og_image',
            'canonical',
            'noindex',
        ])));

        $metadata->save();

        // The relation was loaded before the write; without this the caller
        // still sees the old instance, or none at all on a first save.
        $this->setRelation('seo', $metadata);

        return $metadata;
    }

    /** Registered by Eloquent on boot - see the class note on cascades. */
    public static function bootHasSeo(): void
    {
        static::deleted(function ($record): void {
            /*
             * A SOFT DELETE IS NOT A DELETE, and the metadata has to survive it.
             * The record is restorable, so discarding its SEO here would mean a
             * restore silently brought back a page with no title - and nothing
             * would report it, because the row simply would not be there.
             */
            if (method_exists($record, 'isForceDeleting') && ! $record->isForceDeleting()) {
                return;
            }

            $record->seo()->delete();
        });
    }
}
