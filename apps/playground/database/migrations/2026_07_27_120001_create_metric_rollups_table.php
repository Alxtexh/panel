<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Pre-aggregated time series: one row per tenant, metric and bucket.
 *
 * WHY THIS TABLE EXISTS, measured rather than assumed. A 30-day sessions chart
 * read 412,034 rows to produce 30 points and took 359 ms; 90 days took ~980 ms.
 * EXPLAIN confirmed a covering index - the query was already optimal. The cost
 * is inherent: every row in the window genuinely has to be counted, and that
 * number grows with usage forever. No index fixes an aggregate; only not
 * computing it again does.
 *
 * ONE ROW PER (tenant, metric, bucket, period). Thirty points become thirty row
 * reads.
 *
 * THE UNIQUE KEY IS THE WHOLE POINT. A rollup refreshed twice must overwrite,
 * not duplicate - a double-counted day is the classic pre-aggregation bug, and
 * it is silent: the chart simply reads high. The constraint makes it
 * impossible rather than merely unlikely.
 *
 * `bucket` is a STRING in the same format the live query produces
 * (`Y-m-d`, `Y-m`), so the read path can compare rollup keys and live keys
 * without converting either.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('metric_rollups', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            // e.g. `sessions.started`, `clients.created`.
            $table->string('metric', 64);
            // day | month. The granularity this row aggregates.
            $table->string('period', 8);
            // The bucket key, in the live query's own format.
            $table->string('bucket', 24);

            $table->unsignedBigInteger('value')->default(0);
            $table->timestamp('computed_at');

            // Refreshing must overwrite, never append.
            $table->unique(['tenant_id', 'metric', 'period', 'bucket'], 'metric_rollups_unique');

            // The read: one tenant, one metric, one granularity, a bucket range.
            $table->index(['tenant_id', 'metric', 'period', 'bucket'], 'metric_rollups_read_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('metric_rollups');
    }
};
