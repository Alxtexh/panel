<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * THE PEOPLE WHO RUN THE INSTALLATION, in their own table.
 *
 * WHY NOT A FLAG ON `users`. Because the superadmin portal can read every
 * tenant's tickets and rewrite the content every other portal displays, and a
 * boolean column is one forgotten `where` away from handing that to an
 * operator. A separate table with a separate guard makes the mistake
 * unavailable rather than unlikely: an operator's session is on `web`, this
 * portal authenticates on `superadmins`, and Laravel keys sessions per guard -
 * so there is no query to forget.
 *
 * NO `tenant_id`, DELIBERATELY, and it is the difference between this and
 * `customers`. A superadmin belongs to the installation rather than to an
 * organisation inside it; giving the row a tenant would imply a scope the
 * portal does not have and could not honour.
 *
 * NO ROLES EITHER - see the model. This account holds every ability by
 * definition, and the portal's boundary is the small set of resources it
 * mounts, not a permission matrix nobody would ever set to anything else.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('superadmin_users', function (Blueprint $table): void {
            $table->id();
            $table->string('name');

            /*
             * GLOBALLY UNIQUE, unlike `users.email` and `customers.email`.
             * Those are unique per tenant because an address alone does not
             * identify anybody inside a multi-tenant installation. Here there
             * is no tenant, so an address does identify somebody - and the
             * index is what keeps the sign-in lookup unambiguous.
             */
            $table->string('email')->unique();
            $table->string('password');

            /*
             * ABILITIES AS A COLUMN, NOT A ROLE SYSTEM.
             *
             * NOT BLANKET-TRUE, WHICH WAS THE FIRST DRAFT. A model whose
             * `hasPermission()` returned true unconditionally made every
             * policy on this portal unfalsifiable - and a check that cannot
             * fail is a check nobody has tested. It also removes the only
             * defence left if a second, narrower superadmin account is ever
             * wanted: a support engineer who may read tickets and must not
             * rewrite the FAQ.
             *
             * NOT SPATIE EITHER. `laravel-permission` here runs with TEAMS,
             * keyed on `tenant_id`, and this account has no tenant - so its
             * grants would sit under a null team, which is the ambient-state
             * bug `Support\Ability` exists to work around. A list of strings
             * on the row answers the same question with nothing to get wrong.
             *
             * `["*"]` IS THE ORDINARY VALUE and what the seeder writes.
             */
            $table->json('abilities')->default('["*"]');

            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('superadmin_users');
    }
};
