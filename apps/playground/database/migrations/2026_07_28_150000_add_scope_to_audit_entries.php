<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Whether an audit entry describes ONE organisation or the whole installation.
 *
 * BECAUSE THE TRAIL HAD ONLY ONE SHAPE AND NOW HAS TWO. Every entry until now
 * described a change to a tenant's own records, so `tenant_id` was the whole
 * story. Backups are not: a snapshot covers every organisation at once, and the
 * entry recording who deleted one landed in whichever tenant the operator
 * happened to be signed into. Nothing was lost - the actor, the time and the
 * address were all there - but it was filed under an organisation that had
 * nothing to do with it, and no other organisation could see it had happened.
 *
 * `tenant_id` STAYS AND STAYS REQUIRED. It is still true and still useful: it
 * says which organisation the person was working in when they did it. What was
 * missing is the second fact - that the effect was not confined there - and a
 * column that says so is smaller and more honest than a second table.
 *
 * DEFAULT `tenant`, so every existing row means exactly what it meant before.
 * A backfill would be guessing.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('audit_entries', function (Blueprint $table): void {
            $table->string('scope', 16)->default('tenant')->after('tenant_id');

            /*
             * INDEXED WITH THE TIMESTAMP, because the only query that uses this
             * column is "the installation-wide entries, newest first" - the
             * backup history on the operations screen. A bare index on `scope`
             * would be two values across the whole table and would not be used.
             */
            $table->index(['scope', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::table('audit_entries', function (Blueprint $table): void {
            $table->dropIndex(['scope', 'created_at']);
            $table->dropColumn('scope');
        });
    }
};
