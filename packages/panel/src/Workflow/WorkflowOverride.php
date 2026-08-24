<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Workflow;

use Illuminate\Database\Eloquent\Model;

/**
 * A persisted workflow definition that overlays the PHP default.
 *
 * One row per resource key. States and transitions are stored as JSON and
 * rebuilt into a Workflow instance at runtime via `Workflow::fromStored()`.
 */
final class WorkflowOverride extends Model
{
    protected $table = 'panel_workflow_overrides';

    protected $guarded = [];

    /** @return array<string, string> */
    protected function casts(): array
    {
        return [
            'states' => 'array',
            'transitions' => 'array',
        ];
    }

    public static function forResource(string $resourceKey): ?self
    {
        return self::query()->where('resource_key', $resourceKey)->first();
    }
}
