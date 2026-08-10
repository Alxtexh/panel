<?php

declare(strict_types=1);

namespace PanelKit\Panel\Documents;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use PanelKit\Panel\Support\TenantContext;

/**
 * One organisation's design for one kind of document.
 *
 * TENANT-SCOPED LIKE EVERYTHING ELSE, with the usual rule: no tenant means no
 * rows rather than all of them. A template carries a logo, a company name and a
 * support phone number - leaking one across the boundary puts another
 * organisation's letterhead on your invoice.
 *
 * @property int $id
 * @property string $kind
 * @property string $name
 * @property array<string, mixed> $settings
 * @property int $version
 */
/**
 * THE COLUMNS, SO STATIC ANALYSIS CAN SEE THEM - see `Alerts\Announcement`.
 *
 * `version` IS AN INTEGER BY CAST AND `unsignedInteger` BY COLUMN, which agree
 * - worth checking rather than assuming, because a cast that disagrees with its
 * column is a bug an annotation would otherwise enshrine.
 *
 * @property int $id
 * @property int $tenant_id
 * @property string $kind
 * @property string $name
 * @property array<string, mixed> $settings
 * @property int $version
 * @property int|null $updated_by
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 */
final class DocumentTemplate extends Model
{
    protected $table = 'panel_document_templates';

    protected $guarded = [];

    protected $casts = [
        'settings' => 'array',
        'version' => 'integer',
    ];

    protected static function booted(): void
    {
        /*
         * SCOPED ON READ AND STAMPED ON WRITE, so neither a query nor a create
         * can forget. `null` denies rather than matching everything - the rule
         * every scope in this panel follows, and the one that makes a
         * misconfigured resolver render nothing rather than somebody else's
         * letterhead.
         */
        self::addGlobalScope('tenant', static function (Builder $builder): void {
            $context = app(TenantContext::class);

            if (! $context->shouldScopeByColumn()) {
                return;
            }

            $builder->where(
                $builder->getModel()->getTable().'.tenant_id',
                $context->currentKey() ?? -1,
            );
        });

        self::creating(static function (self $template): void {
            if ($template->tenant_id === null) {
                $template->tenant_id = app(TenantContext::class)->currentKey();
            }
        });
    }

    /**
     * This organisation's template for a kind, or an unsaved one on its defaults.
     *
     * NEVER NULL, and never an empty template. A designer that opens blank makes
     * somebody think the preview is broken before they have typed anything, and
     * a render path that has to cope with "no template yet" grows a second set of
     * defaults that drift from the first. One place decides what a new template
     * looks like: the kind.
     *
     * The returned model may be unsaved - `exists` is false until somebody
     * presses save - which is deliberate. Opening a designer should not write a
     * row; a tenant who looked at the invoice designer once and closed it has no
     * template, and that is the truth.
     */
    public static function forKind(DocumentKind $kind): self
    {
        $existing = self::query()->where('kind', $kind->id())->first();

        if ($existing !== null) {
            return $existing;
        }

        return new self([
            'kind' => $kind->id(),
            'name' => $kind->label(),
            'settings' => $kind->defaults(),
            'version' => 1,
        ]);
    }

    /**
     * Save new settings and count the change.
     *
     * MERGED OVER THE DEFAULTS, not replaced by the submitted payload. A form
     * that omits a field - because it was conditional, or because a kind gained
     * a setting since this template was last saved - would otherwise silently
     * drop it to null, and the document would lose its footer the first time
     * somebody edited its header.
     *
     * @param  array<string, mixed>  $settings
     */
    public function applySettings(DocumentKind $kind, array $settings, int|string|null $userId = null): self
    {
        $this->settings = [...$kind->defaults(), ...$this->settings ?? [], ...$settings];
        $this->kind = $kind->id();
        $this->updated_by = $userId;

        // Only a SAVED template has a version worth advancing. Bumping on first
        // save would produce a version 2 that nothing ever printed.
        if ($this->exists) {
            $this->version = $this->version + 1;
        }

        $this->save();

        return $this;
    }
}
