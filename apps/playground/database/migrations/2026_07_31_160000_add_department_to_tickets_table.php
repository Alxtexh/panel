<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * WHICH DESK THIS IS FOR - roadmap H.5.
 *
 * A COLUMN, NOT A TABLE, and that is the whole design decision here.
 *
 * The obvious shape is a `departments` table with a screen to manage it, and
 * the plugin this was compared against does exactly that. What it buys is
 * departments an operator can rename at runtime. What it costs is a second
 * CRUD screen, a foreign key, a join on every queue render, an empty state to
 * design, and the question "what happens to tickets when a department is
 * deleted" - all to model a list that changes about once a year.
 *
 * SO IT IS CONFIGURED, in `panel.ticketing.departments`. An installation
 * edits one array. The day somebody genuinely needs per-tenant departments
 * this becomes a table, and the column is already the right shape to point at
 * one - a string key rather than a label, so nothing stored has to change
 * when the labels do.
 *
 * NULLABLE, because "not triaged yet" is a real state and the honest default
 * for every ticket that existed before this column did. A NOT NULL column
 * with a default of 'support' would silently claim that every historical
 * ticket was triaged to the support desk.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tickets', function (Blueprint $table): void {
            $table->string('department', 40)->nullable()->after('priority');

            /*
             * THE SHAPE A DEPARTMENT'S QUEUE READS: this desk's unresolved
             * tickets, oldest first. Without it, routing tickets makes the
             * screen slower rather than faster - each desk would filter the
             * whole organisation's tickets to find its own.
             */
            $table->index(['tenant_id', 'department', 'status']);
        });
    }

    public function down(): void
    {
        Schema::table('tickets', function (Blueprint $table): void {
            $table->dropIndex(['tenant_id', 'department', 'status']);
            $table->dropColumn('department');
        });
    }
};
