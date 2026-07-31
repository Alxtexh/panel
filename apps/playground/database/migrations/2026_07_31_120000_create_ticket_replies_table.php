<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * THE THREAD - and a correction to what the tickets table said about it.
 *
 * `tickets.conversation_id` pointed at the chat thread, on the reasoning that
 * chat already stores messages and a second messaging system would be one more
 * thing to keep in step. That reasoning was right in general and wrong here,
 * and it is worth saying why rather than quietly changing it.
 *
 * `chat_messages` HAS NO AUTHOR AND NO VISIBILITY. It carries `direction` -
 * in or out - which is all a one-to-one contact chat needs, and it is exactly
 * the two things a ticket thread cannot do without:
 *
 *   WHO WROTE IT. A queue is worked by a rota, so "out" is not a person. "Who
 *   answered this and what did they promise" is the first question asked when
 *   a ticket goes wrong, and `direction` cannot answer it.
 *
 *   WHO MAY READ IT. An internal note - "customer has been through this three
 *   times, escalate" - is written on the ticket and must never reach the
 *   person who opened it. A table with no visibility column has one answer for
 *   everybody, and the failure mode is the worst one in a support system.
 *
 * Bending chat to carry both would make every chat query answer a question it
 * does not have, for the benefit of a feature it does not serve. So the thread
 * is its own table, and `tickets.conversation_id` goes: a seam pointing at the
 * wrong thing is worse than no seam.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ticket_replies', function (Blueprint $table): void {
            $table->id();

            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            // The thread dies with the ticket. There is no such thing as a
            // reply to a ticket that no longer exists.
            $table->foreignId('ticket_id')->constrained()->cascadeOnDelete();

            /*
             * WHO WROTE IT, and not nullable. Every reply has an author; a
             * null one would be a message the audit trail cannot explain.
             * `nullOnDelete` would be worse - it turns a deleted operator's
             * promises into anonymous ones.
             */
            $table->foreignId('author_id')->constrained('users')->cascadeOnDelete();

            /*
             * PUBLIC OR INTERNAL, and the default is INTERNAL.
             *
             * A default of 'public' means any code path that forgets to set
             * this publishes a note to the customer. A default of 'internal'
             * means the same mistake hides a reply, which somebody notices and
             * nobody is harmed by. Defaults should fail in the direction you
             * can recover from.
             */
            $table->string('visibility', 10)->default('internal');

            $table->text('body');

            /*
             * FILES BY REFERENCE, on the private disk behind the panel's own
             * authenticated route - never a public URL. An attachment on a
             * support ticket is a photo of somebody's router with their
             * address on the label.
             */
            $table->json('attachments')->nullable();

            $table->timestamps();

            // The one read this table gets: a ticket's thread, oldest first.
            $table->index(['ticket_id', 'created_at']);
        });

        Schema::table('tickets', function (Blueprint $table): void {
            /*
             * WHEN SOMEBODY FIRST ANSWERED, stamped from the first PUBLIC
             * operator reply - see the model. It is the number a support desk
             * is actually judged on, and it cannot be derived later once
             * replies start being edited or deleted.
             */
            $table->timestamp('first_response_at')->nullable()->after('resolved_at');

            // Denormalised so the queue can sort and show "last activity"
            // without a subquery per row.
            $table->timestamp('last_reply_at')->nullable()->after('first_response_at');
        });

        Schema::table('tickets', function (Blueprint $table): void {
            $table->dropConstrainedForeignId('conversation_id');
        });
    }

    public function down(): void
    {
        Schema::table('tickets', function (Blueprint $table): void {
            $table->dropColumn(['first_response_at', 'last_reply_at']);
            $table->foreignId('conversation_id')->nullable()
                ->constrained('chat_conversations')->nullOnDelete();
        });

        Schema::dropIfExists('ticket_replies');
    }
};
