<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Seo;

use Alxtexh\Panel\Forms\Fields\Field;

/**
 * A field that stores nothing and draws what the others will look like.
 *
 * WHY A FIELD AND NOT MARKUP IN THE SCREEN. A resource declares its form in PHP
 * and the packaged Vue renders whatever that declaration says - there is no seam
 * for "put this component here" short of forking the form. Coming through the
 * field registry means the preview sits exactly where the schema puts it, in any
 * resource, with no screen edited.
 *
 * IT WRITES NOTHING. `Form::sanitize()` keys the write payload off the schema, so
 * a read-only field would otherwise arrive as a null column - `dehydrated()`
 * below is what keeps it out of the payload entirely rather than relying on the
 * model's `$fillable` to catch it.
 *
 * THE LIMITS TRAVEL WITH IT, taken from `SeoAnalyser`'s own constants rather than
 * repeated in the Vue. A preview that says "60 characters" while the analyser
 * warns at 55 is worse than no preview: two components disagreeing about the one
 * number the operator is trying to hit. There is one source, and it is the class
 * that does the analysis.
 */
final class SeoPreviewField extends Field
{
    /** @var array{title: string, description: string} */
    private array $watch = ['title' => 'seo_title', 'description' => 'seo_description'];

    private ?string $siteUrl = null;

    private string $path = '/';

    public function type(): string
    {
        return 'seo-preview';
    }

    /**
     * Which sibling fields hold the title and description.
     *
     * CONFIGURABLE BECAUSE THE PREFIX IS. A resource that already has a `title`
     * column will not want `seo_title` shadowing it in the same form, so
     * `SeoSchema` can be given another prefix - and the preview has to follow,
     * or it silently previews two fields nobody is editing.
     */
    public function watch(string $titleKey, string $descriptionKey): static
    {
        $this->watch = ['title' => $titleKey, 'description' => $descriptionKey];

        return $this;
    }

    /** The domain the result is drawn under. Defaults to the application's. */
    public function siteUrl(?string $url): static
    {
        $this->siteUrl = $url;

        return $this;
    }

    /** The path shown in the breadcrumb, for a record with a known URL. */
    public function path(string $path): static
    {
        $this->path = $path;

        return $this;
    }

    /**
     * NEVER PART OF THE WRITE, whatever arrives under this key.
     *
     * `omitsFromStorage` IS THE EXISTING HOOK for exactly this - the same one a
     * file field uses to mean "keep what is stored". Omitting is not writing
     * null: one leaves the record alone, the other would try to write a column
     * that does not exist and fail the save on a field that stores nothing.
     */
    public function omitsFromStorage(mixed $value): bool
    {
        return true;
    }

    protected function typeRules(): array
    {
        return [];
    }

    public function toSchema(): array
    {
        return array_merge(parent::toSchema(), [
            'watch' => $this->watch,
            'siteUrl' => $this->siteUrl ?? (string) config('app.url'),
            'path' => $this->path,

            /*
             * THE THRESHOLDS, FROM THE ANALYSER. Sent rather than hardcoded in
             * the component so the colour the operator sees and the severity the
             * server reports are the same rule - see the class note.
             */
            'limits' => [
                'titleMax' => SeoAnalyser::TITLE_MAX,
                'titleMin' => SeoAnalyser::TITLE_MIN,
                'descriptionMax' => SeoAnalyser::DESCRIPTION_MAX,
                'descriptionMin' => SeoAnalyser::DESCRIPTION_MIN,
            ],
        ]);
    }
}
