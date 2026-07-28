<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;
use PanelKit\Panel\Support\SchemaCache;
use Tests\TestCase;

/**
 * The three hooks that make tenant-defined fields an ADDITIVE change later.
 *
 * NONE OF THIS IS THE FEATURE. There is no way to define a custom field, and
 * these tests are careful not to pretend otherwise. What they lock in is the
 * shape, because the two assumptions custom fields break - that a schema is
 * identical for every tenant, and that a column names a real database column -
 * are cheap to change now and expensive once more resources exist.
 *
 * THE PROPERTY THAT MATTERS MOST IS THAT NOTHING CHANGED FOR ANYBODY NOT USING
 * IT. A hook that quietly divided the schema cache by tenant would cost every
 * installation a hundredfold more cache entries in exchange for a feature none
 * of them have switched on, so the first test asserts the key is byte-identical
 * to what it was.
 */
final class CustomFieldHooksTest extends TestCase
{
    use RefreshDatabase;

    /* ------------------------------------------------------------ cache key */

    /**
     * NO CUSTOM FIELDS, NO CHANGE. The fingerprint is empty and drops out of the
     * key entirely, so every tenant keeps sharing one entry per permission set.
     */
    public function test_the_key_is_unchanged_without_custom_fields(): void
    {
        $cache = app(SchemaCache::class);

        $this->assertSame(
            $cache->key('admin', 'clients', 'perm-hash'),
            $cache->key('admin', 'clients', 'perm-hash', ''),
            'An empty fingerprint must not appear in the key at all.',
        );
    }

    /** And a defined set gives that tenant its own entry, as it must. */
    public function test_a_structure_fingerprint_separates_the_entry(): void
    {
        $cache = app(SchemaCache::class);

        $plain = $cache->key('admin', 'clients', 'perm-hash');
        $custom = $cache->key('admin', 'clients', 'perm-hash', 'abc123');

        $this->assertNotSame($plain, $custom);
        $this->assertStringContainsString('abc123', $custom);
    }

    /**
     * TWO DIFFERENT DEFINITIONS DO NOT COLLIDE. Sharing an entry between two
     * tenants' field sets is the leak this whole mechanism exists to prevent -
     * one organisation would receive the other's field definitions, from cache,
     * with a 200 and no error anywhere.
     */
    public function test_two_different_structures_never_share_an_entry(): void
    {
        $cache = app(SchemaCache::class);

        $this->assertNotSame(
            $cache->key('admin', 'clients', 'perm-hash', 'aaa'),
            $cache->key('admin', 'clients', 'perm-hash', 'bbb'),
        );
    }

    /** The empty-permissions guard still throws - the new argument did not weaken it. */
    public function test_an_empty_permissions_fingerprint_is_still_refused(): void
    {
        $this->expectException(\RuntimeException::class);

        app(SchemaCache::class)->key('admin', 'clients', '', 'abc');
    }

    /* --------------------------------------------------------------- the seam */

    /**
     * THE SEAM RETURNS NOTHING AND THE SCHEMA IS UNAFFECTED. A resource that
     * declares no custom fields must produce exactly the schema it produced
     * before the seam existed.
     */
    public function test_the_seam_adds_nothing_by_default(): void
    {
        $schema = ClientResource::schema();

        $this->assertSame('clients', $schema['key']);
        $this->assertArrayHasKey('table', $schema);
        $this->assertArrayHasKey('form', $schema);
    }

    /* ------------------------------------------------------------- the column */

    /**
     * RESERVED ON TENANT-OWNED TABLES ONLY. Adding it later to `clients` at a
     * million rows is a table rewrite; adding it now is instant.
     */
    public function test_tenant_owned_tables_have_somewhere_to_put_them(): void
    {
        foreach (['clients', 'routers', 'plans'] as $table) {
            $this->assertTrue(
                Schema::hasColumn($table, 'custom'),
                "[{$table}] has nowhere to store tenant-defined fields.",
            );
        }
    }

    /**
     * `users` IS EXCLUDED ON PURPOSE. An account is panel machinery, not an
     * organisation's own record, and a tenant extending it would be adding
     * fields to something they do not own.
     */
    public function test_accounts_are_not_extensible(): void
    {
        $this->assertFalse(Schema::hasColumn('users', 'custom'));
    }

    /**
     * IT IS NOT MASS ASSIGNABLE. A JSON column reachable from a request is a way
     * to write arbitrary structure into a record; whatever eventually writes to
     * this will do so explicitly, from a validated definition.
     */
    public function test_the_column_is_not_mass_assignable(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        /*
         * Built through `fill()` so this really is MASS ASSIGNMENT - the thing
         * under test - with `tenant_id` force-filled separately because it comes
         * from request context rather than from an array, which is the point of
         * the tenant scope.
         */
        $client = new Client;
        $client->fill([
            'name' => 'Grace',
            'access_code' => 'AC-TEST01',
            'phone' => '+254700000000',
            'status' => 'active',
            'plan_type' => 'pppoe',
            'custom' => ['smuggled' => 'value'],
        ]);
        $client->forceFill(['tenant_id' => $tenant->id])->save();

        $this->assertNull(
            $client->fresh()->getAttribute('custom'),
            'A crafted request could write arbitrary structure into the record.',
        );
    }

    /** Null rather than an empty object: "never asked" is not "asked, none". */
    public function test_it_defaults_to_null_rather_than_an_empty_object(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $client = new Client;
        $client->fill([
            'name' => 'Grace',
            'access_code' => 'AC-TEST02',
            'phone' => '+254700000001',
            'status' => 'active',
            'plan_type' => 'pppoe',
        ]);
        $client->forceFill(['tenant_id' => $tenant->id])->save();

        $this->assertNull($client->fresh()->getAttribute('custom'));
    }
}
