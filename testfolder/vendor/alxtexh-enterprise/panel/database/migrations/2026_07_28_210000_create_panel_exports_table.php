<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * A finished export, recorded where it will still be tomorrow.
 *
 * THIS TABLE EXISTS BECAUSE THE DOWNLOAD LINK DIED AND THE FILE DID NOT.
 *
 * Everything the download endpoint needed - who owns this export, which file it
 * is - lived only in `JobStatus`, which is a CACHE ENTRY with a one-hour TTL.
 * The CSV, meanwhile, sat on disk indefinitely. So an hour after the export
 * finished the endpoint could no longer answer "whose is this", and answered 404
 * instead - for a file that was still right there.
 *
 * THE WORST PART WAS WHERE THE LINK LIVED. "Your export is ready" is also a
 * NOTIFICATION, stored in the database, kept until somebody reads it. A
 * permanent record pointing at something guaranteed to stop working within the
 * hour - and the failure is a 404 page in a new tab, which reads as a broken
 * panel rather than as an expired link.
 *
 * A CACHE IS THE RIGHT PLACE FOR PROGRESS and the wrong place for ownership.
 * Progress is worthless once the job ends; ownership is what the download is
 * checked against, and it has to last exactly as long as the file. Both now do:
 * `expires_at` is written here, and the pruner deletes the row and the bytes
 * together so neither can outlive the other.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_exports', function (Blueprint $table): void {
            // The job token, which is what the URL carries. Primary key because
            // there is exactly one file per token and no other way to name it.
            $table->uuid('token')->primary();

            $table->unsignedBigInteger('tenant_id')->nullable()->index();

            /*
             * STRING, because the panel's actor id is `int|string` - an
             * application may key users by ULID. Compared with `hash_equals`
             * rather than `==`, which would make `0` match `"admin"`.
             */
            $table->string('user_id', 64)->index();

            $table->string('resource', 64);

            /*
             * THE DISK IS RECORDED, not read from config at download time.
             * Changing `panel.exports.disk` would otherwise make every existing
             * export unreachable while its file still exists - the same failure
             * this table was created to end, one config edit later.
             */
            $table->string('disk', 32);
            $table->string('path');

            $table->unsignedBigInteger('rows')->default(0);

            /*
             * WHEN IT STOPS BEING OFFERED. An export is a copy of records taken
             * outside the panel's own screens, so it should not sit on disk
             * forever - but it must outlive the notification somebody will open
             * tomorrow morning rather than expire while they are at lunch.
             */
            $table->timestamp('expires_at')->index();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_exports');
    }
};
