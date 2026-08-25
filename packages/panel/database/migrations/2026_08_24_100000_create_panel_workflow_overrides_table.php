<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Persisted workflow definitions that overlay the PHP defaults.
 *
 * When an admin edits states or transitions on the workflow board and saves,
 * the result lands here. At runtime the DB row wins over the PHP definition
 * for states and transitions; column and model still come from PHP.
 *
 * `resource_key` is unique per row. Multi-panel installations share the same
 * workflow definition per resource key, which matches how the PHP definition
 * works (one `Resource::workflow()` per class, not per panel).
 */
return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('panel_workflow_overrides')) {
            return;
        }

        Schema::create('panel_workflow_overrides', function (Blueprint $blueprint): void {
            $blueprint->id();
            $blueprint->string('resource_key', 64)->unique();
            $blueprint->string('column', 64);
            $blueprint->string('group_label', 64)->default('Status');
            $blueprint->json('states');
            $blueprint->json('transitions');
            $blueprint->json('positions')->nullable();
            $blueprint->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_workflow_overrides');
    }
};
