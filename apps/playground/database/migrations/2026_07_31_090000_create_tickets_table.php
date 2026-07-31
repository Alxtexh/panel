<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Roadmap 6.2: a ticket is a conversation with two ends.
 *
 * THE TWO COLUMNS THAT MATTER ARE `tenant_id` AND `opened_by`, because they
 * are the two halves of the policy. The tenant column is the boundary every
 * record in this panel has; `opened_by` is what makes a ticket different from
 * every other record - the opener may read THEIR OWN even where they may not
 * read the organisation's, and the operator reads the organisation's without
 * having opened any of them. See `TicketPolicy` for the matrix, which was
 * written before this table had a screen.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tickets', function (Blueprint $table): void {
            $table->id();

            // The organisation this ticket belongs to. Every read is scoped by
            // it, and a null tenant denies rather than matching everything.
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            /*
             * WHO OPENED IT, and it is not nullable. A ticket with no opener
             * is a ticket the "read your own" half of the policy cannot
             * evaluate - it would fall through to the operator rule and be
             * visible to more people than intended, silently.
             */
            $table->foreignId('opened_by')->constrained('users')->cascadeOnDelete();

            /*
             * WHO IS HANDLING IT, and this one IS nullable: an unassigned
             * ticket is the normal state of a new one, and a queue with no
             * concept of unassigned is a queue that lies about its backlog.
             */
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete();

            $table->string('subject', 160);
            $table->string('status', 20)->default('open');
            $table->string('priority', 20)->default('normal');

            /*
             * THE CONVERSATION IS THE CHAT THREAD, not a column here. Chat
             * already stores messages, read state and delivery; duplicating
             * that inside tickets would be a second messaging system to keep
             * in step. This is the record AROUND the thread.
             */
            $table->foreignId('conversation_id')->nullable()
                ->constrained('chat_conversations')->nullOnDelete();

            $table->timestamp('resolved_at')->nullable();
            $table->timestamps();

            /*
             * THE TWO SHAPES THE QUEUES ACTUALLY READ. The operator's list is
             * "this organisation's open tickets, newest first"; the opener's
             * is "mine". Both are covered here rather than discovered as a
             * table scan on the day somebody has a thousand.
             */
            $table->index(['tenant_id', 'status', 'created_at']);
            $table->index(['tenant_id', 'opened_by', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tickets');
    }
};
