<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Formatted notes about a subscriber.
 *
 * `text`, not `string`: a note is prose plus its markup, and the markup is a
 * meaningful fraction of the length. A 255-character column would truncate a
 * paragraph mid-tag and store markup that no longer parses.
 *
 * NOT SEARCHABLE, deliberately. Searching inside stored HTML matches tag names
 * and attribute values as readily as words - a search for "code" would find
 * every note containing a `<code>` block. If notes need to be searchable, they
 * need a stripped plain-text shadow column to search against, which is a
 * decision to take when somebody actually asks for it.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->text('notes')->nullable()->after('metadata');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropColumn('notes');
        });
    }
};
