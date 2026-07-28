<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;

/**
 * Step 1 of 3: get out of Spatie's way without losing anything.
 *
 * THE HAND-ROLLED `roles` TABLE IS RENAMED, NOT DROPPED, because the next
 * migration copies its contents into Spatie's schema and a drop here would make
 * that impossible. It is removed in step 3, once the data is across.
 *
 * TIMESTAMPED BEFORE Spatie's published migration on purpose - that file creates
 * a table called `roles`, and with ours still in place it fails on "table already
 * exists" with nothing to indicate that the fix is a rename.
 *
 * WHY MIGRATE AT ALL. The panel's own roles table stored permissions as a JSON
 * array and hung a single `role_id` off each user - one role per person, which
 * cannot express "Grace is Support and Billing" without inventing a role for
 * every combination. Spatie models it as a many-to-many, which is the actual
 * shape of the problem.
 */
return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('roles') && ! Schema::hasTable('panel_legacy_roles')) {
            Schema::rename('roles', 'panel_legacy_roles');
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('panel_legacy_roles') && ! Schema::hasTable('roles')) {
            Schema::rename('panel_legacy_roles', 'roles');
        }
    }
};
