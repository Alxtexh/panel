<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Give the AI SDK's conversation tables a tenant.
 *
 * THEY ARRIVE WITHOUT ONE, by `vendor:publish`, and that is not an oversight on
 * the SDK's part - it has no idea this application is multi-tenant. It links a
 * conversation to a `participant` (the user) and stops there, which is correct
 * for a single-tenant app and insufficient here: every query for conversations
 * would have to remember to join `users` to find out whose organisation they
 * belong to, and the first one that forgets is a cross-tenant leak.
 *
 * A CHAT HISTORY IS AMONG THE MOST SENSITIVE THINGS IN THE PANEL. It is a
 * transcript of what somebody asked about their own customers, in their own
 * words, including the questions they thought better of. It deserves the same
 * column and the same global scope as the subscriber records it discusses.
 *
 * NULLABLE, because the tables may already hold rows from before this ran and a
 * NOT NULL column cannot be added to them. New rows are stamped by the observer
 * in `TenantScopedConversations`; the scope treats a null tenant as invisible,
 * which is the safe reading of "we do not know whose this is".
 */
return new class extends Migration
{
    public function up(): void
    {
        $conversations = config('ai.conversations.tables.conversations', 'agent_conversations');
        $messages = config('ai.conversations.tables.messages', 'agent_conversation_messages');

        Schema::table($conversations, function (Blueprint $table): void {
            $table->unsignedBigInteger('tenant_id')->nullable()->after('id')->index();
        });

        Schema::table($messages, function (Blueprint $table): void {
            $table->unsignedBigInteger('tenant_id')->nullable()->after('id')->index();
        });
    }

    public function down(): void
    {
        $conversations = config('ai.conversations.tables.conversations', 'agent_conversations');
        $messages = config('ai.conversations.tables.messages', 'agent_conversation_messages');

        Schema::table($conversations, fn (Blueprint $t) => $t->dropColumn('tenant_id'));
        Schema::table($messages, fn (Blueprint $t) => $t->dropColumn('tenant_id'));
    }
};
