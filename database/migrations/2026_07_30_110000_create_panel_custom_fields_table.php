<?php

declare(strict_types=1);

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * What `Resource::customFields()` reads - roadmap 5.1.
 *
 * INSTALLATION-WIDE, NOT PER TENANT, and that follows directly from
 * `Resource::schema()`'s own invariant: the schema is identical for every
 * tenant, cached once per panel and permission set, with no tenant column
 * anywhere in the key. A field definition that varied by tenant would break
 * that cache the same way a tenant-varying column list would - two
 * organisations sharing one cache entry would see whichever set of fields
 * warmed it first. What a tenant enters INTO a custom field is theirs and
 * lives in that record's own `custom` column; which fields EXIST on a
 * resource is a decision the installation makes once, the same as adding a
 * declared field to a `Resource::table()` override would be.
 *
 * `resource` NAMES THE TARGET RATHER THAN A FOREIGN KEY, because a
 * `Resource` is a PHP class, not a database row - there is nothing to point
 * a foreign key at. It is validated against the reserved-storage list
 * (`reserve_custom_field_storage`) at the point a definition is saved, not
 * by a constraint here.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('panel_custom_fields', function (Blueprint $table): void {
            $table->id();
            $table->string('resource');
            $table->string('key');
            $table->string('type');
            $table->string('label');
            $table->boolean('required')->default(false);
            /*
             * value => label pairs, for a `select` field's choices. Null for
             * every other type - an unused column is cheaper than a second
             * table for the one type that needs it.
             */
            $table->json('options')->nullable();
            $table->unsignedInteger('sort')->default(0);
            $table->timestamps();

            // One definition per name per resource - two fields both called
            // `notes` on Clients would collide in the same `custom` object.
            $table->unique(['resource', 'key']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('panel_custom_fields');
    }
};
