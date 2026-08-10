<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * One editable row of Help, FAQ or What's-new. See the migration for the
 * shape each `kind` uses, and `EditableContent` for how rows reach the
 * screens - through the same registration seams a plugin would use, so the
 * screens themselves never learned this table exists.
 *
 * DELIBERATELY NOT TENANT-SCOPED. Content is written centrally (a superadmin
 * portal) and read from every portal; a tenant scope here would make the help
 * centre empty for everybody except whoever wrote it. `tenant_id` exists for
 * the per-tenant step and is unused until that step is taken on purpose.
 */
/**
 * THE COLUMNS, SO STATIC ANALYSIS CAN SEE THEM - see `Alerts\Announcement`.
 *
 * `tenant_id` IS NULLABLE AND NULL MEANS EVERYBODY, which is the one field on
 * this model worth reading the annotation for: it is the reason this model
 * carries no `TenantScope`, and the reason `RecordController` had to learn that
 * a `tenant_id` COLUMN is not the same as a tenant-scoped MODEL.
 *
 * @property int $id
 * @property string $kind
 * @property int|null $tenant_id
 * @property string $category
 * @property string $title
 * @property string|null $body
 * @property array<string, mixed>|null $meta
 * @property int $sort
 * @property bool $published
 * @property \Carbon\CarbonImmutable|null $created_at
 * @property \Carbon\CarbonImmutable|null $updated_at
 */
class ContentEntry extends Model
{
    public const KIND_FAQ = 'faq';

    public const KIND_ARTICLE = 'article';

    public const KIND_RELEASE = 'release';

    protected $table = 'panel_content_entries';

    protected $fillable = [
        'kind',
        'tenant_id',
        'category',
        'title',
        'body',
        'meta',
        'sort',
        'published',
    ];

    protected function casts(): array
    {
        return [
            'meta' => 'array',
            'published' => 'boolean',
            'sort' => 'integer',
        ];
    }

}
