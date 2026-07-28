<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Threads, recipients and categories.
 *
 * The first cut modelled a mailbox as a flat list of messages, which is what a
 * LIST needs but not what a mailbox is: opening "Important Account Update" has
 * to show the reply underneath it, and a reply has no meaning without a
 * recipient. Both were missing, so the detail view could only ever render one
 * message with no "to" line.
 *
 * THREAD_ID IS THE ROOT'S OWN ID, which keeps threading a single column rather
 * than a parent pointer that has to be walked. A message with no reply is a
 * thread of one, so there is no special case at read time.
 *
 * CATEGORY IS A LABEL, NOT A FOLDER. A message lives in exactly one folder and
 * may carry a label; conflating them is what forces "it is in Inbox and in
 * Security" to become two rows.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('mail_messages', function (Blueprint $table): void {
            $table->unsignedBigInteger('thread_id')->nullable()->after('folder');
            $table->string('to_name')->nullable()->after('from_email');
            $table->string('to_email')->nullable()->after('to_name');
            $table->string('category', 20)->nullable()->after('subject');
            $table->boolean('is_important')->default(false)->after('is_starred');
        });

        // Existing rows are threads of one. Done before the index so the column
        // is never left half-null under a query that assumes otherwise.
        DB::statement('UPDATE mail_messages SET thread_id = id WHERE thread_id IS NULL');

        Schema::table('mail_messages', function (Blueprint $table): void {
            // Reading a thread: every message for one root, oldest first.
            $table->index(['user_id', 'thread_id', 'received_at'], 'mail_user_thread_idx');
            // The category rail, which is the same access shape as a folder.
            $table->index(['user_id', 'category', 'received_at', 'id'], 'mail_user_category_idx');
        });
    }

    public function down(): void
    {
        Schema::table('mail_messages', function (Blueprint $table): void {
            $table->dropIndex('mail_user_thread_idx');
            $table->dropIndex('mail_user_category_idx');
            $table->dropColumn(['thread_id', 'to_name', 'to_email', 'category', 'is_important']);
        });
    }
};
