<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The two JSON columns that back `RepeaterField` and `KeyValueField`.
 *
 * BOTH ARE NULLABLE AND NEITHER IS INDEXED, and that is a deliberate statement
 * about what they are for. A JSON column cannot be indexed usefully here, so the
 * moment somebody asks "how many clients have a secondary contact" or filters on
 * a metadata key, this was the wrong storage and the answer is a real table with
 * a foreign key - a relation manager, which the kit already ships.
 *
 * What they ARE for is data that is always read with its parent and never
 * queried on its own. `contacts` is the two or three numbers an installer wrote
 * down; `metadata` is the reference field one region uses and nobody else does.
 * Giving either a table means a join on every read for rows nobody searches, and
 * giving metadata a COLUMN means a migration every time an operator has an idea.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->json('contacts')->nullable()->after('phone');
            $table->json('metadata')->nullable()->after('contacts');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropColumn(['contacts', 'metadata']);
        });
    }
};
