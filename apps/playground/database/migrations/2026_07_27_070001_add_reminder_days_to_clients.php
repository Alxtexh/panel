<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * When to remind a subscriber before their subscription lapses.
 *
 * JSON rather than a pivot table: this is a short list of scalars owned
 * entirely by one client, never queried across clients, and never joined. A
 * pivot would add a table and a relation to express "a handful of numbers",
 * and the only thing it would buy is a query nobody needs.
 *
 * NOT INDEXED, deliberately. The reminder scheduler will read it per client
 * while walking clients that are expiring — which is already an indexed scan on
 * `expiry_date` — so an index here would be written on every save and read by
 * nothing.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->json('reminder_days')->nullable()->after('expiry_date');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropColumn('reminder_days');
        });
    }
};
