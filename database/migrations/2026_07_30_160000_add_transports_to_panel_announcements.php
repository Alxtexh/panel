<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Which transports an announcement rides - roadmap 5.4.
 *
 * The banner was the only delivery; these two make the composer a
 * composer: the same notice can also land in everyone's bell and in the
 * operations Telegram chat, chosen at compose time. Stored on the row so
 * the edit screen can show what was chosen, even though delivery itself
 * happens once, on create - see AnnouncementDelivery.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('panel_announcements', function (Blueprint $table): void {
            $table->boolean('notify_bell')->default(false);
            $table->boolean('notify_telegram')->default(false);
        });
    }

    public function down(): void
    {
        Schema::table('panel_announcements', function (Blueprint $table): void {
            $table->dropColumn(['notify_bell', 'notify_telegram']);
        });
    }
};
