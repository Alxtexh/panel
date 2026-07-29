<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Notices addressed to everybody working in an organisation.
 *
 * AN ANNOUNCEMENT IS NOT AN ALERT AND NOT A NOTIFICATION, and this table exists
 * because it is neither:
 *
 *   An ALERT is DERIVED - "six routers are offline" - recomputed on every read
 *   and gone when the condition clears. Nobody writes one and nobody dismisses
 *   one; you fix it.
 *
 *   A NOTIFICATION is addressed to ONE PERSON about something that happened to
 *   them. "Your export is ready" means nothing to a colleague.
 *
 *   An ANNOUNCEMENT is WRITTEN BY A PERSON, addressed to everybody, and true
 *   until it stops being scheduled. "Maintenance on Sunday", "the new billing
 *   run starts Monday". None of that is derivable and none of it belongs in one
 *   inbox.
 *
 * IT APPEARS AT THE TOP OF THE DASHBOARD rather than on a page of its own. A
 * page called Announcements is a page nobody opens, so the notice everybody
 * needed to read is the one nobody read - which is the whole reason this exists
 * as a banner.
 *
 * DISMISSAL IS PER PERSON, in a separate table. It cannot be a column here: one
 * announcement is shown to everybody, and a single `dismissed_at` would mean the
 * first person to close it hid it from the entire organisation.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_announcements', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('tenant_id')->index();

            $table->string('title');
            $table->text('body')->nullable();

            /*
             * WHAT KIND OF NOTICE IT IS. This decides the colour and, with
             * `display` below, whether it interrupts: an outage is not the same
             * as a new feature, and rendering both in amber teaches people to
             * ignore amber.
             */
            $table->string('severity', 16)->default('info');

            /*
             * BANNER OR TOAST, and the difference is how long somebody has to
             * read it. A banner persists until dismissed and is right for
             * anything with a consequence - maintenance, an outage, a bill. A
             * toast is transient and right for something pleasant that nobody
             * needs to act on; using one for an outage means whoever was making
             * coffee never learns about it.
             */
            $table->string('display', 16)->default('banner');

            // An optional call to action. Both or neither - a label with no
            // link is a button that does nothing.
            $table->string('action_label')->nullable();
            $table->string('action_url')->nullable();

            /*
             * WHEN IT IS TRUE. `starts_at` lets somebody write Monday's notice
             * on Friday, which is the difference between an announcement system
             * and a reminder to log in early. `ends_at` is what stops last
             * month's maintenance window sitting on the dashboard forever,
             * because nobody ever goes back to delete one.
             */
            $table->timestamp('starts_at')->nullable()->index();
            $table->timestamp('ends_at')->nullable()->index();

            $table->unsignedBigInteger('created_by')->nullable();

            $table->timestamps();
        });

        Schema::create('panel_announcement_dismissals', function (Blueprint $table): void {
            $table->id();

            $table->unsignedBigInteger('announcement_id')->index();
            $table->string('user_id', 64);

            $table->timestamp('created_at')->nullable();

            // One dismissal per person per announcement: a double click must not
            // be able to write two rows and make the count meaningless.
            $table->unique(['announcement_id', 'user_id']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_announcement_dismissals');
        Schema::dropIfExists('panel_announcements');
    }
};
