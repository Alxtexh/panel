<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Hostnames that identify a tenant.
 *
 * WRITTEN HERE RATHER THAN PUBLISHED from stancl. Its migration ships alongside
 * a `create_tenants_table` that would collide with the one this app already
 * has, and it declares `tenant_id` as a STRING because its own tenants use uuid
 * keys. This app's tenants are auto-incrementing integers, and a string column
 * pointing at a bigint primary key is a foreign key that some engines accept,
 * some reject, and all of them index badly.
 *
 * ONE DOMAIN BELONGS TO ONE TENANT - the unique constraint is the whole point.
 * Without it two rows can claim `acme.example.com` and identification silently
 * resolves to whichever the database returns first, which is a cross-tenant
 * leak decided by row order.
 *
 * A TENANT MAY HAVE SEVERAL. An apex domain, a subdomain, and whatever they had
 * before they were acquired - so the relation is one-to-many and the tenant key
 * is deliberately NOT unique.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('domains', function (Blueprint $table): void {
            $table->id();

            // Identification reads this on every request, so it is the lookup
            // key as well as the constraint.
            $table->string('domain', 255)->unique();

            $table->foreignId('tenant_id')->constrained()->cascadeOnDelete();

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('domains');
    }
};
