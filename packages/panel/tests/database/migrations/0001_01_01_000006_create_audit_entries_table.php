<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * THE HOST OWNS THIS TABLE, like `one_time_credentials`.
 *
 * `AuditRecorder` writes to `audit_entries` but the package ships no migration
 * for it - the reference application does. So this is the fixture's copy, and
 * its existence is also what lets the "no table, no exception" property be
 * asserted: a consumer who never created it must still be able to save a
 * record.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_entries', function (Blueprint $table): void {
            $table->id();
            $table->unsignedBigInteger('tenant_id');
            $table->string('scope')->default('tenant');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('actor_name')->nullable();
            $table->string('auditable_type');
            $table->string('auditable_id');
            $table->string('auditable_label')->nullable();
            $table->string('event');
            $table->json('changes')->nullable();
            $table->string('ip_address', 45)->nullable();
            $table->string('user_agent', 500)->nullable();
            $table->timestamp('created_at')->nullable();

            $table->index(['tenant_id', 'auditable_type', 'auditable_id']);
        });
    }
};
