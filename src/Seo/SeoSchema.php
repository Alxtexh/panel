<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Seo;

use Alxtexh\Panel\Forms\Fields\TagsField;
use Alxtexh\Panel\Forms\Fields\TextareaField;
use Alxtexh\Panel\Forms\Fields\TextField;
use Alxtexh\Panel\Forms\Fields\ToggleField;
use Alxtexh\Panel\Schema\Section;

/**
 * The whole SEO form, as one line in a resource.
 *
 *     public static function form(): array
 *     {
 *         return [
 *             Section::make('Details')->schema([...]),
 *             SeoSchema::make(),
 *         ];
 *     }
 *
 * THE ONE THING `ralphjsmit/laravel-seo` GETS RIGHT AND IS WORTH COPYING
 * EXACTLY. Its `SEO::make()` is a single call that produces a working group of
 * fields with no configuration, and that is most of why it is the most used of
 * the three plugins this was drawn from. A component that needs six lines of
 * setup is one people paste wrong.
 *
 * KEYS ARE PREFIXED, AND THE PREFIX IS THE POINT. `seo_title` rather than
 * `title` because a resource almost certainly has a `title` or `name` of its own,
 * and two fields with one key in a single form is a silent overwrite - the SEO
 * title would be saved into the record's own column. `Seo::fromForm()` strips the
 * prefix again on the way to the metadata row.
 *
 * COLLAPSED BY DEFAULT. Search metadata is not what somebody opened the record to
 * edit; expanded, it doubles the length of every form for a field set most
 * records never use.
 */
final class SeoSchema
{
    public const PREFIX = 'seo_';

    /**
     * @param  string  $prefix  Override only if `seo_` collides with real columns.
     */
    public static function make(string $label = 'Search engines', string $prefix = self::PREFIX): Section
    {
        return Section::make($label)
            ->description('How this page appears in search results and when shared.')
            ->collapsible(true, collapsed: true)
            ->schema([
                /*
                 * THE PREVIEW COMES FIRST, above the inputs it describes. Below
                 * them it is a result nobody looks at; above, it is the thing
                 * being edited - which is the whole reason a live preview beats a
                 * character counter.
                 */
                SeoPreviewField::make($prefix.'preview')
                    ->label('Preview')
                    ->watch($prefix.'title', $prefix.'description'),

                TextField::make($prefix.'title')
                    ->label('Title')
                    ->max(SeoAnalyser::TITLE_MAX + 20)
                    ->help('Around '.SeoAnalyser::TITLE_MAX.' characters. Longer is truncated in results.'),

                TextareaField::make($prefix.'description')
                    ->label('Description')
                    ->help('Around '.SeoAnalyser::DESCRIPTION_MAX.' characters. This is the sentence under the link.'),

                TagsField::make($prefix.'keywords')
                    ->label('Keywords')
                    ->help('Optional. Google ignores these; several other engines do not.'),

                TextField::make($prefix.'og_image')
                    ->label('Social image')
                    ->as('url')
                    ->help('Shown when the page is shared to a chat or a timeline.'),

                TextField::make($prefix.'canonical')
                    ->label('Canonical URL')
                    ->as('url')
                    ->help('Where the definitive version of this page lives, if not here.'),

                ToggleField::make($prefix.'noindex')
                    ->label('Hide from search engines')
                    ->help('Also removes it from sitemap.xml.'),
            ]);
    }
}
