<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Demo\Models\Client;
use App\Models\Plan;
use App\Models\Tenant;
use App\Models\User;
use App\Demo\Panel\Resources\ClientResource;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Tests\TestCase;

/**
 * The command palette's endpoint, which is the one surface a person points at
 * arbitrary strings.
 *
 * THAT IS WHY THE ISOLATION TESTS COME FIRST. A list screen shows what a filter
 * asked for; a palette shows what somebody GUESSED at, and it does it across
 * every resource at once. If any check is going to be missing, this is the
 * endpoint where its absence is worth the most to an attacker and costs the
 * most to the person whose data leaks.
 *
 * IT REUSES EACH RESOURCE'S OWN SEARCH rather than implementing a second one -
 * so what the palette finds is what the list finds, and a column marked
 * searchable tomorrow is searchable here with nothing else edited.
 */
final class PanelSearchTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private Tenant $rival;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        config(['panel.tenancy.resolver' => fn () => $this->tenant->getKey()]);
    }

    private function client(Tenant $tenant, string $name, string $code): Client
    {
        $plan = Plan::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'name' => 'Basic '.$code,
            'speed_mbps' => 10,
            'price_cents' => 1000,
        ]);

        return Client::withoutGlobalScopes()->forceCreate([
            'tenant_id' => $tenant->getKey(),
            'plan_id' => $plan->getKey(),
            'name' => $name,
            'phone' => '+2547'.substr((string) crc32($code), 0, 8),
            'access_code' => $code,
            'status' => 'active',
            'plan_type' => 'pppoe',
            'expiry_date' => '2026-12-31',
        ]);
    }

    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->getKey(), 'email_verified_at' => now()]);
    }

    /** The ordinary case: it finds what you can see. */
    public function test_it_finds_a_record_by_name(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH1');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $this->getJson('/panel-search?q=Amina')
            ->assertOk()
            ->assertJsonPath('groups.0.items.0.title', 'Amina Achieng');
    }

    /**
     * ANOTHER ORGANISATION'S RECORD IS NOT FOUND, whatever is typed.
     *
     * This is the assertion the whole endpoint is judged on. The tenant scope
     * comes from the resource's own list query rather than from a `where`
     * written here - which is the point of reusing it, because a second query
     * is a second place for the scope to be forgotten.
     */
    public function test_it_never_returns_another_tenants_record(): void
    {
        $this->client($this->rival, 'Rival Customer', 'SEARCH2');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $response = $this->getJson('/panel-search?q=Rival')->assertOk();

        $this->assertSame(
            [],
            $response->json('groups'),
            'The palette returned a record belonging to another organisation.',
        );
    }

    /**
     * AND A RESOURCE SOMEBODY MAY NOT VIEW IS NOT SEARCHED.
     *
     * Typing part of a name and reading the answer IS reading the record,
     * whatever the list screen says - so the ability the list page asks for is
     * the ability this asks for.
     */
    public function test_it_skips_a_resource_the_person_cannot_view(): void
    {
        $this->client($this->tenant, 'Hidden Person', 'SEARCH3');

        // An operator with no client abilities at all.
        $this->actingAs($this->operator(['view_any_routers']));

        $response = $this->getJson('/panel-search?q=Hidden')->assertOk();

        $this->assertSame([], $response->json('groups'));
    }

    /**
     * A ONE-LETTER TERM ASKS NOTHING. Every keystroke is a request, and a
     * prefix that matches a third of the table is a scan nobody reads.
     */
    public function test_a_short_term_returns_nothing(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH4');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $this->getJson('/panel-search?q=A')->assertOk()->assertJsonPath('groups', []);
    }

    /**
     * THE LINK CARRIES THE PANEL'S PREFIX. A palette on a portal mounted at
     * `/reseller` that returned `/clients/5` sends somebody to a route that
     * portal does not serve - the same silent failure the sidebar had.
     */
    public function test_results_link_inside_the_current_panel(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SEARCH5');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $href = $this->getJson('/panel-search?q=Amina')->json('groups.0.items.0.href');

        $this->assertStringStartsWith('/clients/', (string) $href);
    }

    /**
     * TWO SAME-TITLED RESULTS ARE TOLD APART BY THE SUBTITLE.
     *
     * The endpoint used to send `subtitle: null` for every row, so two clients
     * both named "Amina Achieng" rendered as identical lines - a list you can
     * only choose from by clicking one and hoping. The subtitle is the next
     * sensible text column after the title, and must never be a timestamp,
     * which is the same rule that keeps the title itself readable.
     */
    public function test_same_titled_results_carry_distinguishing_subtitles(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'TWIN1');
        $this->client($this->tenant, 'Amina Achieng', 'TWIN2');

        $this->actingAs($this->operator(['view_any_clients', 'view_clients']));

        $items = $this->getJson('/panel-search?q=Amina')->assertOk()->json('groups.0.items');

        $this->assertCount(2, $items);
        $this->assertNotNull($items[0]['subtitle']);
        $this->assertNotNull($items[1]['subtitle']);
        $this->assertNotSame(
            $items[0]['subtitle'],
            $items[1]['subtitle'],
            'Two same-titled rows must be distinguishable by their subtitles.',
        );

        foreach ($items as $item) {
            $this->assertDoesNotMatchRegularExpression(
                '/^\d{4}-\d{2}-\d{2}/',
                (string) $item['subtitle'],
                'A timestamp distinguishes nothing a person recognises.',
            );
        }
    }

    /**
     * THE CALLER'S ELOQUENT HOOK NARROWS WITHOUT TOUCHING THE DEFINITION.
     *
     * This is the seam `Resource::modifySearchQuery()` travels through: applied
     * before scopes resolve, after the table's own constraint, so a palette can
     * be tightened while the list screen underneath stays exactly as declared.
     */
    public function test_modify_eloquent_narrows_the_query(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'HOOK1');
        $expired = $this->client($this->tenant, 'Amina Otieno', 'HOOK2');
        $expired->forceFill(['status' => 'expired'])->save();

        $result = ClientResource::definition()
            ->toListQuery(Client::class)
            ->modifyEloquent(static fn ($query) => $query->where('status', 'expired'))
            ->run(Request::create('/', 'GET', ['search' => 'Amina']));

        $names = array_column($result->records, 'name');

        $this->assertSame(['Amina Otieno'], $names);
    }

    /**
     * THE GROUP SOMEBODY WANTED IS THE ONE ARROW-DOWN LANDS IN.
     *
     * Groups came back in whatever order discovery globbed the directory, so
     * the activity trail - rows that are timestamps - could sit above the
     * customers somebody typed a name to find. `searchSort()` makes that a
     * declaration instead of an accident: Clients say -10, Activity says 100.
     */
    public function test_result_groups_follow_the_declared_search_order(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SORT1');

        $labels = array_column(
            $this->actingAs($this->operator([
                'view_any_clients', 'view_clients',
                'view_any_activities', 'view_activities',
            ]))->getJson('/panel-search?q=Amina')->assertOk()->json('groups'),
            'label',
        );

        $this->assertNotEmpty($labels);
        $this->assertSame(
            'Clients',
            $labels[0],
            'The group a person searched for must lead, whatever order discovery found the resources in.',
        );
    }

    /**
     * SPLITTING IS WRONG FOR AN IDENTIFIER THAT CONTAINS A SPACE.
     *
     * ANDing the words is what finds a person across two columns; for a
     * reference like `INV 2026 0042` it requires each fragment to match on its
     * own, which is not what the number printed on the paper means.
     */
    public function test_a_table_can_take_a_multi_word_term_whole(): void
    {
        $this->client($this->tenant, 'Amina Achieng', 'SPLIT1');

        $whole = fn (bool $split) => ClientResource::definition()
            ->splitsSearchTerms($split)
            ->toListQuery(Client::class)
            ->run(Request::create('/', 'GET', ['search' => 'Amina SPLIT1']));

        // Split: the words may match different columns, so this finds them.
        $this->assertCount(1, $whole(true)->records);

        // Whole: no single column holds "Amina SPLIT1", so nothing matches -
        // which is exactly right for a term meant to be one atom.
        $this->assertSame([], $whole(false)->records);
    }

    /**
     * A RECORD IS FOUND BY THE OTHER SIDE OF ITS RELATION.
     *
     * The thing printed on the paper in front of somebody is usually related
     * data - an invoice carries the customer's name, a client carries the
     * plan's. Searchable columns could only ever be the model's own, so the
     * most natural search anybody types found nothing. `searchesRelation`
     * answers it through an EXISTS subquery: no join, so a has-many cannot
     * duplicate rows and keyset pagination keeps its invariants.
     *
     * AND THE WORDS STILL AND TOGETHER ACROSS THE BOUNDARY. "Amina Basic" is
     * one client on one plan - a word may match a column or a relation, but
     * every word must match something, or typing more would widen the answer.
     */
    public function test_a_record_is_found_through_a_declared_relation(): void
    {
        // client() names plans "Basic <code>", so REL1's plan is "Basic REL1".
        $this->client($this->tenant, 'Amina Achieng', 'REL1');
        $this->client($this->tenant, 'Grace Wanjiru', 'REL2');

        $query = fn (string $term) => ClientResource::definition()
            ->searchesRelation('plan', ['name'])
            ->toListQuery(Client::class)
            ->run(Request::create('/', 'GET', ['search' => $term]));

        // By the plan's name alone - a column the clients table does not hold.
        $this->assertSame(
            ['Amina Achieng'],
            array_column($query('REL1')->records, 'name'),
            'A client must be findable by the name of the plan they are on.',
        );

        // A client word AND a relation word, one record.
        $this->assertSame(
            ['Amina Achieng'],
            array_column($query('Amina Basic')->records, 'name'),
        );

        // A relation word that matches nobody's plan removes everything.
        $this->assertSame([], $query('Amina NOSUCHPLAN')->records);
    }
}
