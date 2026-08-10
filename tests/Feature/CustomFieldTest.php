<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\CustomFields\CustomField;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\ArticleResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Fields an installation adds without a migration.
 *
 * THEY LAND IN ONE JSON COLUMN, which is what makes them possible at all - a
 * migration per definition would put schema changes in the hands of whoever
 * fills in a form. It also means the ALLOWLIST matters more than usual: the
 * column will accept any key at all, so the only thing standing between the
 * request body and arbitrary stored data is `Form::sanitize()` checking each
 * custom key against a DEFINITION.
 *
 * A DEFINITION CHANGES THE SCHEMA, so it changes the schema CACHE KEY. That
 * fingerprint is asserted here because the empty case is the load-bearing one:
 * a resource nobody has added a field to must stay on the shared cache entry
 * every tenant already warms, or custom fields would quietly cost every
 * resource in the installation a cache miss.
 */
final class CustomFieldTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);
    }

    private function define(string $key, string $type = 'text'): CustomField
    {
        return CustomField::create([
            'resource' => 'articles',
            'key' => $key,
            'type' => $type,
            'label' => ucfirst(str_replace('_', ' ', $key)),
            'required' => false,
            'sort' => 0,
        ]);
    }

    public function test_a_definition_appends_a_form_field_and_a_table_column(): void
    {
        $this->define('shelf_code');

        $schema = ArticleResource::schema();

        $this->assertContains('custom_shelf_code', array_column($schema['form']['fields'], 'key'));
        $this->assertContains('custom_shelf_code', array_column($schema['table']['columns'], 'key'));
    }

    /**
     * NO DEFINITIONS MEANS NO FINGERPRINT, which is what keeps the schema
     * cache key unchanged for the resources nobody has customised - which is
     * most of them, most of the time.
     */
    public function test_a_resource_with_no_custom_fields_has_an_empty_fingerprint(): void
    {
        $method = new \ReflectionMethod(ArticleResource::class, 'customFieldsFingerprint');
        $method->setAccessible(true);

        $this->assertSame('', $method->invoke(null));

        $this->define('shelf_code');

        $this->assertNotSame(
            '',
            $method->invoke(null),
            'A definition did not change the fingerprint, so the schema cache would serve a stale shape.',
        );
    }

    public function test_a_submitted_custom_value_is_stored_under_the_custom_column(): void
    {
        $this->define('shelf_code');

        $this->post('/articles', [
            'title' => 'With a custom value',
            'status' => 'draft',
            'custom_shelf_code' => 'SC-1234',
        ])->assertRedirect();

        $article = Article::query()->where('title', 'With a custom value')->firstOrFail();

        $this->assertSame(['shelf_code' => 'SC-1234'], $article->custom);
    }

    /**
     * AN UNDECLARED CUSTOM KEY IS DROPPED.
     *
     * The JSON column accepts anything, so without this the create form is a
     * way to write arbitrary keys into a record's storage - invisible on every
     * screen, and read back by whatever later trusts that column.
     */
    public function test_an_undeclared_custom_key_is_dropped(): void
    {
        $this->define('shelf_code');

        $this->post('/articles', [
            'title' => 'Smuggling',
            'status' => 'draft',
            'custom_shelf_code' => 'SC-1234',
            'custom_not_declared' => 'should not be stored',
        ])->assertRedirect();

        $article = Article::query()->where('title', 'Smuggling')->firstOrFail();

        $this->assertSame(['shelf_code' => 'SC-1234'], $article->custom);
        $this->assertArrayNotHasKey('not_declared', $article->custom);
    }

    /**
     * AN UPDATE PRESERVES A VALUE THE FORM DID NOT CARRY.
     *
     * The column is written whole, so a partial form that rewrote it would
     * silently drop every custom value it did not happen to include - a data
     * loss with no error and no visible cause.
     */
    public function test_updating_preserves_a_custom_value_the_form_did_not_send(): void
    {
        $this->define('shelf_code');
        $this->define('archive_ref');

        $article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'title' => 'Existing',
            'status' => 'draft',
            'custom' => ['shelf_code' => 'SC-1', 'archive_ref' => 'AR-9'],
        ]);

        $this->put("/articles/{$article->getKey()}", [
            'title' => 'Renamed',
            'status' => 'draft',
            'custom_shelf_code' => 'SC-2',
            // `archive_ref` deliberately absent.
        ])->assertRedirect();

        $this->assertSame(
            ['shelf_code' => 'SC-2', 'archive_ref' => 'AR-9'],
            $article->fresh()->custom,
        );
    }
}
