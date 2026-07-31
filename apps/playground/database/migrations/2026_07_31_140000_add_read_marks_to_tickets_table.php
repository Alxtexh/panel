<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * WHO HAS SEEN THE LATEST MESSAGE - roadmap H.2.
 *
 * TWO COLUMNS, NOT A PIVOT TABLE, and that is a deliberate limit. The general
 * shape - a row per user per ticket - answers "has Amina read this", and
 * nobody asks that. A ticket has two SIDES: the person who opened it and the
 * desk. What a rota needs to know is "has anybody here looked at this since
 * the customer last wrote", and one timestamp per side answers it in a column
 * the list query already has.
 *
 * The pivot version would be a table growing at replies × operators, joined
 * on every list render, to answer a question with no consumer.
 *
 * NULL MEANS NEVER READ, which is why these are nullable rather than
 * defaulting to now(): a ticket created and never opened is unread, and a
 * default would mark every historical ticket as seen by a desk that has not
 * seen it.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('tickets', function (Blueprint $table): void {
            $table->timestamp('desk_read_at')->nullable()->after('last_reply_at');
            $table->timestamp('opener_read_at')->nullable()->after('desk_read_at');
        });
    }

    public function down(): void
    {
        Schema::table('tickets', function (Blueprint $table): void {
            $table->dropColumn(['desk_read_at', 'opener_read_at']);
        });
    }
};
