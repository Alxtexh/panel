<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * The stored path of a subscriber's ID scan.
 *
 * A PATH, NOT THE FILE. Bytes in a row make every list query that touches the
 * table drag them along, and a `SELECT *` anywhere turns a 200-byte row into a
 * two-megabyte one. The file lives on a private disk; this is the pointer.
 *
 * NOT INDEXED. Nothing looks a client up by their document path, and an index
 * exists to answer a question somebody asks.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->string('id_document')->nullable()->after('access_code');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table): void {
            $table->dropColumn('id_document');
        });
    }
};
