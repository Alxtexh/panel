<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Locking an organisation out of the panel.
 *
 * A TIMESTAMP, NOT A BOOLEAN, for the same reason `deleted_at` is. "Suspended"
 * is a thing that HAPPENED, and the day somebody asks how long an organisation
 * was locked out - a billing dispute, a support escalation - a boolean cannot
 * answer and a timestamp can. It costs the same byte count and closes a question
 * before it is asked.
 *
 * THE REASON IS STORED AND SHOWN. A wall that says only "suspended" produces a
 * support call to find out why; one that says "payment overdue since March"
 * produces a payment. It is also the record of what the operator was told, which
 * matters when the operator disputes it.
 *
 * NOT INDEXED. The column is read once per request through the tenant record
 * that hostname resolution has already loaded, and never used to FIND tenants -
 * so an index would be paid for on every write and used by nothing.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->timestamp('suspended_at')->nullable()->after('slug');
            $table->string('suspended_reason', 200)->nullable()->after('suspended_at');
        });
    }

    public function down(): void
    {
        Schema::table('tenants', function (Blueprint $table): void {
            $table->dropColumn(['suspended_at', 'suspended_reason']);
        });
    }
};
