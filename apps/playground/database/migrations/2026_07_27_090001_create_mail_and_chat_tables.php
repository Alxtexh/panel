<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Mail and chat, as real tables rather than fixtures in a Vue file.
 *
 * A screen backed by a hardcoded array demonstrates a layout and nothing else -
 * it cannot be filtered, searched, paginated or measured, which is most of what
 * these screens are actually for. The Help page was rebuilt for exactly this
 * reason; starting these the same way would repeat it.
 *
 * INDEXES ARE JUSTIFIED PER QUERY SHAPE, as everywhere else (spec §10):
 *
 *   mail   - the list is always "one folder, one user, newest first", so the
 *            index is (user_id, folder, received_at). Anything narrower makes
 *            the sort a filesort.
 *   chat   - messages are always read as "one conversation, oldest first", and
 *            conversations as "mine, most recent activity first".
 *
 * `id` trails every sort index because keyset pagination compares the tuple
 * (sort_column, id) and needs the tiebreaker inside the index.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('mail_messages', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            $table->string('folder', 20)->default('inbox');
            $table->string('from_name');
            $table->string('from_email');
            $table->string('subject');
            $table->text('preview');
            $table->text('body');
            $table->boolean('is_read')->default(false);
            $table->boolean('is_starred')->default(false);
            $table->boolean('has_attachment')->default(false);
            $table->timestamp('received_at');
            $table->timestamps();

            // The list query: one user, one folder, newest first.
            $table->index(['user_id', 'folder', 'received_at', 'id'], 'mail_user_folder_received_idx');
            // The unread badge per folder.
            $table->index(['user_id', 'folder', 'is_read'], 'mail_user_folder_read_idx');
            $table->index(['tenant_id'], 'mail_tenant_idx');
        });

        Schema::create('chat_conversations', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            $table->string('contact_name');
            $table->string('contact_email')->nullable();
            $table->string('contact_avatar')->nullable();
            $table->string('status', 20)->default('offline');
            $table->text('last_message')->nullable();
            $table->timestamp('last_message_at')->nullable();
            $table->unsignedInteger('unread_count')->default(0);
            $table->timestamps();

            $table->index(['user_id', 'last_message_at', 'id'], 'chat_user_recent_idx');
            $table->index(['tenant_id'], 'chat_conv_tenant_idx');
        });

        Schema::create('chat_messages', function (Blueprint $table): void {
            $table->id();
            $table->foreignId('conversation_id')->constrained('chat_conversations')->cascadeOnDelete();
            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            // Who said it. `outgoing` is the panel user; `incoming` is the contact.
            $table->string('direction', 10)->default('incoming');
            $table->text('body');
            $table->timestamp('sent_at');
            $table->timestamps();

            $table->index(['conversation_id', 'sent_at', 'id'], 'chat_thread_idx');
            $table->index(['tenant_id'], 'chat_msg_tenant_idx');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('chat_messages');
        Schema::dropIfExists('chat_conversations');
        Schema::dropIfExists('mail_messages');
    }
};
