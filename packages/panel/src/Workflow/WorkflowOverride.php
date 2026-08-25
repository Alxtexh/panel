<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Workflow;

use Illuminate\Database\Eloquent\Model;

/**
 * A persisted workflow definition that overlays the PHP default.
 *
 * One row per resource key. States, transitions, and optional canvas
 * positions are stored as JSON. States/transitions rebuild into a Workflow
 * via `Workflow::fromStored()`; positions are board-only layout metadata.
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
            'positions' => 'array',
        ];
    }

    public static function forResource(string $resourceKey): ?self
    {
        return self::query()->where('resource_key', $resourceKey)->first();
    }
}
