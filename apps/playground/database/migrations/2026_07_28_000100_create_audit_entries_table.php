<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Who changed what, when, and what it was before.
 *
 * AN AUDIT TRAIL IS EVIDENCE, so the schema is shaped around being trusted later
 * rather than around being convenient now.
 *
 * IT KEEPS A NAME, NOT ONLY A FOREIGN KEY. `user_id` goes null when somebody
 * leaves, and an audit line reading "(deleted user) suspended this subscriber"
 * is worth very little six months on - which is exactly when it is read. So the
 * actor's name is copied in at write time. It is deliberately a snapshot: it
 * records who they were then, not who the row says they are now.
 *
 * THE RECORD IS POLYMORPHIC BUT NOT A RELATION IN THE USUAL SENSE. The audited
 * row may be deleted; the entry must survive it. So there is no foreign key to
 * the subject, and `auditable_type`/`auditable_id` are stored as plain values -
 * a cascade here would delete the evidence along with the thing it describes.
 *
 * `changes` HOLDS BEFORE AND AFTER, not a diff. A diff is derived and can be
 * derived again; the values cannot be recovered once lost.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('audit_entries', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            // Nullable and NOT cascading: the actor may leave, the evidence stays.
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->string('actor_name')->nullable();

            $table->string('auditable_type');
            $table->string('auditable_id');

            $table->string('event');            // created | updated | deleted | restored
            $table->json('changes')->nullable(); // {field: {from: …, to: …}}

            /*
             * WHERE FROM. An audit line without an origin answers "who" and not
             * "was that really them" - the question actually asked when a change
             * looks wrong.
             */
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();

            $table->timestamp('created_at')->nullable();

            // The timeline query is "this record, newest first".
            $table->index(['auditable_type', 'auditable_id', 'created_at']);

            // And the tenant-wide view is "everything here, newest first".
            $table->index(['tenant_id', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('audit_entries');
    }
};
