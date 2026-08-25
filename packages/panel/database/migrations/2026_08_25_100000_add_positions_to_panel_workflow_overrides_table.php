<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Canvas layout for the workflow board.
 *
 * Node positions are independent of states/transitions: an admin can rearrange
 * the diagram without changing the machine. Stored as JSON keyed by state id:
 * `{ "draft": { "x": 40, "y": 80 }, ... }`. Null means use the auto rank layout.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (! Schema::hasTable('panel_workflow_overrides')) {
            return;
        }

        if (Schema::hasColumn('panel_workflow_overrides', 'positions')) {
            return;
        }

        Schema::table('panel_workflow_overrides', function (Blueprint $blueprint): void {
            $blueprint->json('positions')->nullable()->after('transitions');
        });
    }

    public function down(): void
    {
        if (! Schema::hasTable('panel_workflow_overrides')) {
            return;
        }

        if (! Schema::hasColumn('panel_workflow_overrides', 'positions')) {
            return;
        }

        Schema::table('panel_workflow_overrides', function (Blueprint $blueprint): void {
            $blueprint->dropColumn('positions');
        });
    }
};
