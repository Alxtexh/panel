<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Media;

use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property int $tenant_id
 * @property string $folder
 * @property string $path
 * @property string $name
 * @property string|null $mime
 * @property int $size
 * @property int|null $uploaded_by
 */
final class PanelMediaItem extends Model
{
    protected $table = 'panel_media_items';

    protected $guarded = [];
}
