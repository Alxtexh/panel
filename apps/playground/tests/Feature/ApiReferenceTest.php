<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use App\Panel\Resources\ActivityResource;
use App\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

/**
 * The API reference describes the endpoints that exist, and only those.
 *
 * A REFERENCE FAILS QUIETLY OR NOT AT ALL. It renders, it looks authoritative,
 * and somebody writes an integration against an operation the server refuses -
 * finding out at runtime, in their code rather than ours. So what is asserted
 * here is agreement with the registry: the operations a resource declares, the
 * columns it will actually sort by, the filters it accepts.
 *
 * THE TWO FAILURES ARE OPPOSITE AND BOTH REAL. Documenting what does not exist
 * sends people down a path that ends in a 403; omitting what does exist means
 * they never find it and reach for the database instead.
 */
final class ApiReferenceTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        $this->user = User::factory()->create([
            'tenant_id' => $tenant->id,
            'email_verified_at' => now(),
        ]);
    }

    /** @return array<string, mixed> */
    private function spec(): array
    {
        return $this->actingAs($this->user)->getJson('/docs/openapi.json')->json();
    }

    /** @return array<string, array<string, mixed>> */
    private function queryParams(string $path): array
    {
        $spec = $this->spec();

        $this->assertArrayHasKey($path, $spec['paths'], "{$path} is not in the reference.");

        $out = [];

        foreach ($spec['paths'][$path]['get']['parameters'] ?? [] as $parameter) {
            if (($parameter['in'] ?? '') === 'query') {
                $out[$parameter['name']] = $parameter;
            }
        }

        return $out;
    }

    /* ---------------------------------------------------- what is documented */

    /**
     * A RESOURCE THAT OPTS OUT IS ABSENT ENTIRELY.
     *
     * The activity trail is read-only, rendered on one screen, and of no use to
     * anybody integrating - so it lengthened the document without helping
     * anybody find what they came for. Its endpoints still exist and still work;
     * this is an editorial decision, not a routing one.
     */
    public function test_a_resource_that_opts_out_is_not_listed(): void
    {
        $this->assertFalse(ActivityResource::documented());

        $paths = array_keys($this->spec()['paths']);

        foreach ($paths as $path) {
            $this->assertStringNotContainsString('/activities', $path);
        }
    }

    public function test_resources_that_do_not_opt_out_are_listed(): void
    {
        $this->assertTrue(ClientResource::documented());

        $this->assertArrayHasKey('/clients', $this->spec()['paths']);
    }

    /* -------------------------------------------------------- query strings */

    /**
     * THE SORTABLE COLUMNS ARE ENUMERATED, not merely mentioned.
     *
     * "There is a `sort` parameter" is true of every resource and useful for
     * none - the reader still has to open the resource class to learn what it
     * takes, at which point the reference has failed at its one job.
     */
    public function test_the_sort_parameter_lists_the_columns_that_really_sort(): void
    {
        $sortable = [];

        foreach (ClientResource::definition()->getColumns() as $column) {
            if ($column->isSortable()) {
                $sortable[] = $column->resolvedSortKey();
            }
        }

        $this->assertNotEmpty($sortable, 'No column is sortable, so this test proves nothing.');

        $this->assertSame($sortable, $this->queryParams('/clients')['sort']['schema']['enum']);
    }

    /** And the page sizes, which the server refuses rather than clamps. */
    public function test_the_page_size_parameter_lists_the_sizes_that_are_accepted(): void
    {
        $declared = array_map('strval', ClientResource::definition()->toSchema()['perPageOptions']);

        $this->assertSame($declared, $this->queryParams('/clients')['perPage']['schema']['enum']);
    }

    /**
     * FILTERS WERE MISSING ENTIRELY, and they are most of what a real request
     * carries. Each appears under its own key, so the document says
     * `?status=active` rather than describing a mechanism.
     */
    public function test_every_declared_filter_appears_as_its_own_parameter(): void
    {
        $filters = ClientResource::definition()->getFilters();

        $this->assertNotEmpty($filters, 'The resource declares no filters, so this proves nothing.');

        $documented = $this->queryParams('/clients');

        foreach ($filters as $filter) {
            $key = $filter->toSchema()['key'];

            $this->assertArrayHasKey($key, $documented, "The `{$key}` filter is undocumented.");
        }
    }

    /**
     * OPTION LISTS STAY OUT. They are one organisation's plan names and status
     * labels - tenant data - and this document is generated once and read by
     * everybody who can open it.
     */
    public function test_filter_options_are_not_baked_into_the_document(): void
    {
        $documented = $this->queryParams('/clients');
        $filterKeys = array_map(
            static fn ($filter): string => (string) $filter->toSchema()['key'],
            ClientResource::definition()->getFilters(),
        );

        foreach ($filterKeys as $key) {
            $this->assertArrayNotHasKey(
                'enum',
                $documented[$key]['schema'],
                "The `{$key}` filter published its option values, which are tenant data.",
            );
        }
    }

    /** Search names the columns it searches, or it is a parameter with no shape. */
    public function test_the_search_parameter_names_the_searchable_columns(): void
    {
        $searchable = [];

        foreach (ClientResource::definition()->getColumns() as $column) {
            if ($column->isSearchable()) {
                $searchable[] = $column->key;
            }
        }

        $this->assertNotEmpty($searchable);

        $description = $this->queryParams('/clients')['search']['description'];

        foreach ($searchable as $key) {
            $this->assertStringContainsString($key, $description);
        }
    }

    /* ------------------------------------------------------------- bodies */

    /**
     * EVERY OPERATION USED TO SAY "No Body".
     *
     * The document described paths, verbs and the query string, then went silent
     * about the one thing an integrator has to get right. A reference that stops
     * there is a table of contents.
     */
    public function test_a_create_documents_what_it_accepts(): void
    {
        $body = $this->spec()['paths']['/clients']['post']['requestBody'] ?? null;

        $this->assertNotNull($body, 'Creating a client documents no request body.');

        $properties = $body['content']['application/json']['schema']['properties'];

        // Derived from the form, so the document and the validator are reading
        // one declaration rather than two copies of it.
        foreach (ClientResource::formDefinition()->fields() as $field) {
            $this->assertArrayHasKey(
                $field->key,
                $properties,
                "The `{$field->key}` field is accepted and undocumented.",
            );
        }
    }

    /** And required means what the form means by required. */
    public function test_required_attributes_match_the_form(): void
    {
        $expected = [];

        foreach (ClientResource::formDefinition()->fields() as $field) {
            if (($field->toSchema()['required'] ?? false) === true) {
                $expected[] = $field->key;
            }
        }

        $this->assertNotEmpty($expected, 'No field is required, so this proves nothing.');

        $documented = $this->spec()['paths']['/clients']['post']['requestBody']
            ['content']['application/json']['schema']['required'] ?? [];

        sort($expected);
        sort($documented);

        $this->assertSame($expected, $documented);
    }

    /**
     * AN UPDATE REQUIRES NOTHING, and saying otherwise would document an
     * endpoint that refuses requests it actually accepts - sending the reader
     * off to submit fields they never meant to change.
     */
    public function test_an_update_requires_nothing(): void
    {
        $schema = $this->spec()['paths']['/clients/{id}']['put']['requestBody']
            ['content']['application/json']['schema'];

        $this->assertArrayNotHasKey('required', $schema);
        $this->assertNotEmpty($schema['properties']);
    }

    public function test_a_list_documents_the_page_it_returns(): void
    {
        $schema = $this->spec()['paths']['/clients']['get']['responses']['200']
            ['content']['application/json']['schema'];

        $this->assertSame(['rows', 'nextCursor', 'total'], array_keys($schema['properties']));

        $row = $schema['properties']['rows']['items']['properties'];

        // `id` is never a declared column - the table selects it as the key -
        // so a schema built from columns alone would omit the one field every
        // caller needs.
        $this->assertArrayHasKey('id', $row);

        foreach (ClientResource::definition()->getColumns() as $column) {
            $this->assertArrayHasKey($column->key, $row, "Column `{$column->key}` is undocumented.");
        }
    }

    /**
     * THE ERROR SHAPE IS DOCUMENTED TOO. The happy path gets guessed correctly;
     * a 422 whose body nobody expected reads as a server fault, and the bug
     * report that follows is about the wrong thing.
     */
    public function test_validation_failures_have_a_documented_shape(): void
    {
        $schema = $this->spec()['paths']['/clients']['post']['responses']['422']
            ['content']['application/json']['schema'];

        $this->assertSame(['message', 'errors'], array_keys($schema['properties']));
    }

    /**
     * A BULK REQUEST NAMES A KEY AND A SELECTION, never an attribute set - what
     * the action does lives on the server, and a request that could describe the
     * change would be a request that could describe any change.
     */
    public function test_the_bulk_body_offers_only_declared_action_keys(): void
    {
        $schema = $this->spec()['paths']['/clients/bulk']['post']['requestBody']
            ['content']['application/json']['schema'];

        $declared = array_map(
            static fn ($action): string => (string) $action->toArray()['key'],
            ClientResource::definition()->getBulkActions(),
        );

        $this->assertNotEmpty($declared);
        $this->assertSame($declared, $schema['properties']['action']['enum']);
        $this->assertArrayNotHasKey('attributes', $schema['properties']);
    }

    /**
     * RECORD ACTIONS INSIDE A GROUP STILL COUNT.
     *
     * `getRecordActions()` returns a mix of actions and `ActionGroup`s, and a
     * group has no key of its own - mapping over the list blindly is how this
     * first threw. The keys are read from the same flattened schema the client
     * walks, so the document cannot offer a different set from the screen.
     */
    public function test_record_action_keys_include_grouped_ones(): void
    {
        $schema = $this->spec()['paths']['/clients/{id}/action']['post']['requestBody']
            ['content']['application/json']['schema'];

        $expected = [];

        foreach (ClientResource::definition()->toSchema()['recordActions'] as $entry) {
            foreach ($entry['actions'] as $action) {
                $expected[] = $action['key'];
            }
        }

        $this->assertNotEmpty($expected);
        $this->assertSame($expected, $schema['properties']['action']['enum']);
    }

    /**
     * NO TENANT DATA REACHES THE DOCUMENT. It is generated once and read by
     * everybody who can open it; one organisation's plan names are not part of
     * the contract, and neither is any record's value.
     */
    public function test_no_record_values_appear_in_the_document(): void
    {
        // forceCreate, because tenant_id is guarded - it is set by the scope on
        // a normal write, and this test needs the row to exist rather than to
        // exercise that path.
        \App\Models\Client::query()->forceCreate([
            'tenant_id' => $this->user->tenant_id,
            'name' => 'Wanjiku Distinctive Name',
            'access_code' => 'DISTINCT-1',
            'status' => 'active',
            'plan_type' => 'fibre',
            'phone' => '+254700000001',
            'expiry_date' => now()->addYear(),
        ]);

        $this->assertStringNotContainsString(
            'Wanjiku Distinctive Name',
            json_encode($this->spec()),
        );
    }

    /* -------------------------------------------------------- the operations */

    /**
     * A READ-ONLY RESOURCE PUBLISHES NO WRITES.
     *
     * Every resource used to get the full CRUD set regardless, so a read-only
     * one advertised `POST`, `PUT` and `DELETE` that its own policy refuses
     * unconditionally.
     */
    public function test_the_documented_verbs_match_what_the_resource_declares(): void
    {
        $spec = $this->spec();

        $verbs = array_keys($spec['paths']['/clients/{id}']);

        sort($verbs);

        $this->assertSame(['delete', 'get', 'put'], $verbs);
    }
}
