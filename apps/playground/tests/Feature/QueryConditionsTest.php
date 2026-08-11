<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Demo\Models\Router;
use App\Models\Tenant;
use App\Models\User;
use App\Demo\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;
use Alxtexh\Panel\Tables\QueryConditions;
use Tests\TestCase;

/**
 * Nested AND/OR conditions composed in the UI.
 *
 * THE CLIENT SENDS A TREE, NEVER AN EXPRESSION, and every test here is about
 * that line. A "query builder" that accepts anything resembling SQL has handed
 * the client SQL; what arrives is data - `{field, operator, value}` - where the
 * field is checked against declared filters and the operator against a fixed
 * list. Nothing in the payload becomes syntax.
 */
final class QueryConditionsTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private User $user;

    private Plan $plan;

    private Router $router;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'A', 'slug' => 'a']);
        $this->user = User::factory()->create([
            'tenant_id' => $this->tenant->id,
            'email_verified_at' => now(),
        ]);

        $this->plan = Plan::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Plan',
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        $this->router = Router::withoutGlobalScopes()->create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Router',
            'ip_address' => '10.0.0.1',
            'model' => 'RB750',
            'status' => 'online',
        ]);

        $this->actingAs($this->user);
    }

    /* ------------------------------------------------------------ refusals */

    /**
     * THE CENTRAL GUARD. A field the resource never declared as filterable
     * cannot be queried on - including one that plainly exists on the table.
     */
    public function test_an_undeclared_field_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/cannot be filtered on/');

        $this->conditions()->apply(
            Client::query()->toBase(),
            $this->group([['field' => 'access_code', 'operator' => 'equals', 'value' => ['x']]]),
        );
    }

    /** And `tenant_id` least of all, whatever else is true. */
    public function test_the_tenant_column_cannot_be_filtered_on(): void
    {
        $this->expectException(InvalidArgumentException::class);

        $this->conditions()->apply(
            Client::query()->toBase(),
            $this->group([['field' => 'tenant_id', 'operator' => 'equals', 'value' => [99]]]),
        );
    }

    /** An operator outside the fixed list never reaches the query. */
    public function test_an_unknown_operator_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/is not a known operator/');

        $this->conditions()->apply(
            Client::query()->toBase(),
            $this->group([['field' => 'status', 'operator' => 'raw_sql', 'value' => ['1=1']]]),
        );
    }

    /**
     * DEPTH IS BOUNDED. A tree three hundred levels deep is cheap to send and
     * expensive to receive - a stack overflow during compilation, before any
     * query runs.
     */
    public function test_a_tree_nested_too_deeply_is_refused(): void
    {
        $tree = ['conjunction' => 'and', 'children' => []];
        $node = &$tree;

        for ($i = 0; $i < QueryConditions::MAX_DEPTH + 3; $i++) {
            $node['children'] = [['type' => 'group', 'conjunction' => 'and', 'children' => []]];
            $node = &$node['children'][0];
        }

        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/nested too deeply/');

        $this->conditions()->apply(Client::query()->toBase(), $tree);
    }

    /**
     * THE SIZE IS CHECKED BEFORE ANYTHING IS COMPILED, so an over-large tree is
     * refused whole rather than applying fifty conditions and then throwing -
     * which would leave the caller holding a partial query and an error.
     */
    public function test_too_many_conditions_are_refused_before_any_are_applied(): void
    {
        $children = [];

        for ($i = 0; $i <= QueryConditions::MAX_CONDITIONS; $i++) {
            $children[] = ['field' => 'status', 'operator' => 'equals', 'value' => ['active']];
        }

        $query = Client::query()->toBase();

        try {
            $this->conditions()->apply($query, $this->group($children));
            $this->fail('Expected the tree to be refused.');
        } catch (InvalidArgumentException) {
            $this->assertStringNotContainsString(
                'status',
                $query->toSql(),
                'Nothing may be applied when the tree is refused.',
            );
        }
    }

    /** An operator that needs two values is refused with one. */
    public function test_between_needs_two_values(): void
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessageMatches('/needs 2 value/');

        $this->conditions()->apply(
            Client::query()->toBase(),
            $this->group([['field' => 'status', 'operator' => 'between', 'value' => ['a']]]),
        );
    }

    /* -------------------------------------------------------------- results */

    public function test_a_simple_condition_filters(): void
    {
        $this->makeClient('active');
        $this->makeClient('suspended');

        $query = Client::query()->toBase();

        $this->conditions()->apply(
            $query,
            $this->group([['field' => 'status', 'operator' => 'equals', 'value' => ['active']]]),
        );

        $this->assertSame(1, $query->count());
    }

    /**
     * NESTED GROUPS BECOME NESTED CLOSURES, which is what makes precedence
     * correct. Flattening `a AND (b OR c)` into a sequence of wheres produces
     * `a AND b OR c` - a different question, silently answered.
     */
    public function test_a_nested_or_group_keeps_its_precedence(): void
    {
        $this->makeClient('active', 'pppoe');
        $this->makeClient('active', 'hotspot');
        $this->makeClient('suspended', 'pppoe');

        $query = Client::query()->toBase();

        // status = active AND (plan_type = pppoe OR plan_type = hotspot)
        $this->conditions()->apply($query, [
            'conjunction' => 'and',
            'children' => [
                ['field' => 'status', 'operator' => 'equals', 'value' => ['active']],
                [
                    'type' => 'group',
                    'conjunction' => 'or',
                    'children' => [
                        ['field' => 'planType', 'operator' => 'equals', 'value' => ['pppoe']],
                        ['field' => 'planType', 'operator' => 'equals', 'value' => ['hotspot']],
                    ],
                ],
            ],
        ]);

        // Two, not three: the suspended pppoe row must not slip in through the
        // OR, which is exactly what a flattened tree would allow.
        $this->assertSame(2, $query->count());
    }

    /**
     * LIKE SYNTAX IN A VALUE IS TEXT, not syntax. Without escaping, a search for
     * "50%" matches everything - which reads as a broken filter rather than as
     * an escaping bug.
     */
    public function test_like_wildcards_in_a_value_are_escaped(): void
    {
        $this->makeClient('active');

        $query = Client::query()->toBase();

        $this->conditions()->apply(
            $query,
            $this->group([['field' => 'status', 'operator' => 'contains', 'value' => ['%']]]),
        );

        $this->assertSame(0, $query->count(), 'A literal percent matches nothing here.');
    }

    /** The pattern is BUILT, so a caller cannot turn a prefix seek into a scan. */
    public function test_starts_with_anchors_the_pattern(): void
    {
        $query = Client::query()->toBase();

        $this->conditions()->apply(
            $query,
            $this->group([['field' => 'status', 'operator' => 'starts_with', 'value' => ['act']]]),
        );

        $this->assertSame(['act%'], array_slice($query->getBindings(), -1));
    }

    /* -------------------------------------------------------------- schema */

    /** The client is told what it may offer, so the UI cannot invent anything. */
    public function test_the_schema_lists_only_declared_fields_and_fixed_operators(): void
    {
        $schema = $this->conditions()->toSchema();

        $this->assertContains('status', $schema['fields']);
        $this->assertNotContains('access_code', $schema['fields']);
        $this->assertArrayHasKey('between', $schema['operators']);
        $this->assertSame(2, $schema['operators']['between']['values']);
    }

    /* ---------------------------------------------------------------- setup */

    private function conditions(): QueryConditions
    {
        return QueryConditions::forTable(ClientResource::definition());
    }

    /** @param list<array<string, mixed>> $children */
    private function group(array $children): array
    {
        return ['conjunction' => 'and', 'children' => $children];
    }

    private function makeClient(string $status, string $planType = 'pppoe'): Client
    {
        $unique = uniqid('c', true);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $this->tenant->id,
            'plan_id' => $this->plan->id,
            'router_id' => $this->router->id,
            'name' => "Client {$unique}",
            'phone' => '+254'.substr((string) crc32($unique), 0, 9),
            'access_code' => strtoupper(substr(md5($unique), 0, 10)),
            'status' => $status,
            'plan_type' => $planType,
            'expiry_date' => '2026-12-31',
        ]);
    }
}
