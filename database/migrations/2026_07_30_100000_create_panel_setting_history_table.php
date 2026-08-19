<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Every value a `panel_settings` key has held, oldest first - roadmap 7.2.
 *
 * APPEND-ONLY, AND NOTHING ELSE WRITES TO IT. `PanelSettings::put()` is the
 * only caller, so a row here is always a value that was genuinely saved,
 * never a guess reconstructed after the fact. `panel_settings` still holds
 * the CURRENT value - this table exists purely so "what did it say before"
 * has an answer, and "put it back" has something to read.
 *
 * AN AUTO-INCREMENT ID, UNLIKE `panel_settings`'s key-as-primary-key. Two
 * rows for the same key are the entire point here - the id is what a
 * restore action names, since "the value from Tuesday" has no other handle.
 *
 * BOUNDED PER KEY, not indefinite. `PanelSettings::put()` prunes older rows
 * once a key passes its cap - see the class's own note on why an unbounded
 * table was never actually needed for what this answers.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_setting_history', function (Blueprint $table): void {
            $table->id();
            $table->string('key');
            $table->json('value');
            $table->string('changed_by')->nullable();
            $table->timestamp('created_at')->nullable();

            $table->index(['key', 'created_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_setting_history');
    }
};
