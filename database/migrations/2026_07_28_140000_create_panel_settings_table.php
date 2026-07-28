<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Settings that belong to the INSTALLATION, not to a tenant and not to a person.
 *
 * THERE IS NO `tenant_id` HERE ON PURPOSE. What lives in this table is how often
 * the server backs itself up, where the copies go, and who is told when one
 * fails - facts about the machine, true for every organisation on it at once. A
 * tenant column would invite one customer's admin to set a retention policy that
 * silently governs everybody else's data.
 *
 * A KEY/VALUE TABLE RATHER THAN A COLUMN PER SETTING, because the alternative is
 * a migration every time an operator wants a new knob, and knobs of this kind
 * arrive one at a time forever. The cost is that nothing is validated by the
 * schema - so the reader casts and defaults, and a value written by an older
 * version of the code is treated as absent rather than trusted.
 *
 * IT IS NOT CONFIG, AND THAT DISTINCTION IS THE POINT. `config/backup.php` is
 * deployed code: changing it needs a shell, an editor and a release. These are
 * decisions an operator makes at 2am from the panel, and they have to survive
 * `config:cache`, which anything read from `env()` at runtime does not.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_settings', function (Blueprint $table): void {
            // The key IS the identity. An auto-increment id would permit two
            // rows claiming the same setting, and the reader would pick one.
            $table->string('key')->primary();

            /*
             * JSON, so a setting can be a scalar today and a shape tomorrow
             * without a migration. Read through `PanelSettings`, which decodes
             * and casts - never through a raw query that assumes a string.
             */
            $table->json('value');

            // WHO and WHEN, because a retention policy that quietly changed is
            // the sort of thing somebody has to be able to account for later.
            $table->string('updated_by')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_settings');
    }
};
