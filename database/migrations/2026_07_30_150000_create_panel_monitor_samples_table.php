<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * What `MonitorSampler` writes - roadmap 5.3.
 *
 * ONE ROW PER SAMPLE, COMPACT NUMBERS ONLY. The monitoring page's live view
 * keeps its full detail (paths, error strings, per-process figures); history
 * needs the handful of numbers a trend is drawn from, and storing the whole
 * report every five minutes would grow a JSON column nobody charts.
 *
 * NO TENANT COLUMN: these are HOST metrics - disk, memory, the queue - and
 * a host is shared by every tenant on it. Scoping them would show each
 * organisation a fraction of a machine none of them own.
 *
 * EVERY METRIC IS NULLABLE because every measurement can individually be
 * unavailable (see HealthReport's own note) - and a monitor that stores an
 * invented zero for "could not read" draws a reassuring flatline through an
 * outage.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_monitor_samples', function (Blueprint $table): void {
            $table->id();
            $table->unsignedTinyInteger('cpu_pct')->nullable();
            $table->unsignedTinyInteger('memory_pct')->nullable();
            $table->unsignedTinyInteger('disk_pct')->nullable();
            $table->unsignedInteger('queue_waiting')->nullable();
            $table->unsignedInteger('failed_jobs')->nullable();
            $table->decimal('db_ms', 8, 2)->nullable();
            $table->timestamp('created_at');

            // The only query shape: "the last N hours, in order".
            $table->index('created_at');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_monitor_samples');
    }
};
