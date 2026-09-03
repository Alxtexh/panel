<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tables\DataProvider;
use Alxtexh\Panel\Tables\DataProviderResult;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\Fixtures\Resources\PostResource;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

/**
 * The list surface, tested without borrowing anybody's domain.
 *
 * MIGRATED FROM `ClientsListTest` IN THE REFERENCE APP, which is twenty-two
 * tests over an ISP subscriber - a model carrying a tenant, a plan, a router,
 * an access code and an expiry. Perhaps four of those tests are about
 * subscribers. The rest are about SORTING, SEARCHING, FILTERING and PAGING,
 * and they were unable to say so: a failure in "search matches the start of
 * any word" could equally have been the tenant scope, the plan join, or the
 * demo's seeder.
 *
 * WHAT STAYED BEHIND: the tenancy assertions. Those need a tenant-bearing
 * fixture, which arrives with the tenancy migration rather than being faked
 * here - a half-modelled tenant would prove less than the app's real one.
 */
final class TableQueryTest extends TestCase
{
    use RefreshDatabase;

    private User $user;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::create([
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);
    }

    /**
     * @param  list<array<string, mixed>>|int  $spec
     */
    private function makePosts(int $count, string $prefix = 'Post'): void
    {
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $rows[] = [
                'title' => sprintf('%s %04d', $prefix, $i),
                'status' => ['draft', 'published', 'archived'][$i % 3],
                'views' => $i * 10,
                'is_featured' => $i % 2 === 0,
                'created_at' => now()->subMinutes($i),
                'updated_at' => now()->subMinutes($i),
            ];
        }

        foreach (array_chunk($rows, 500) as $chunk) {
            DB::table('posts')->insert($chunk);
        }
    }

    public function test_it_lists_records(): void
    {
        $this->makePosts(3);

        $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->has('records', 3));
    }

    /**
     * AN UNKNOWN SORT COLUMN FALLS BACK RATHER THAN REACHING SQL.
     *
     * The value is a query parameter, so it is attacker-controlled; a table
     * that passed it through would be an ORDER BY injection on every list
     * screen in every installation. The assertion that the table still has its
     * rows afterwards is the half that would catch a statement getting through.
     */
    public function test_an_unknown_sort_column_falls_back_instead_of_reaching_sql(): void
    {
        $this->makePosts(3);

        $this->actingAs($this->user)
            ->get('/posts?sort='.urlencode('id; drop table posts--'))
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('sort', 'created_at'));

        $this->assertDatabaseCount('posts', 3);
    }

    public function test_it_sorts_by_a_declared_column(): void
    {
        $this->makePosts(5, 'Alpha');

        $response = $this->actingAs($this->user)
            ->get('/posts?sort=title&direction=asc')
            ->assertOk();

        $titles = array_column($response->viewData('page')['props']['records'], 'title');

        $sorted = $titles;
        sort($sorted);

        $this->assertSame($sorted, $titles);
    }

    /**
     * TEN, NOT TWENTY-FIVE, and the difference is the point of this file.
     *
     * The same assertion in the reference app expects 25 - that application's
     * configured page size, which reads there as though it were the
     * framework's. It is not: an installation that configures nothing gets 10.
     * A test inside one application cannot tell its own configuration apart
     * from the default it overrides.
     */
    public function test_an_out_of_range_per_page_falls_back_to_the_default(): void
    {
        $this->makePosts(3);

        $this->actingAs($this->user)
            ->get('/posts?perPage=9999')
            ->assertOk()
            ->assertInertia(fn ($page) => $page->where('perPage', 10));
    }

    public function test_guests_cannot_read_the_list(): void
    {
        $this->makePosts(1);

        $this->get('/posts')->assertRedirect();
    }

    /**
     * THE ROW KEY IS ON THE ROW EVEN WHEN IT IS NOT A COLUMN.
     *
     * PostResource shows title, status and created_at, never `id`. A SELECT
     * built only from visible columns used to omit the key, so every checkbox
     * keyed on `undefined` and ticking one row selected the page.
     */
    public function test_list_rows_include_unique_ids_when_id_is_not_a_column(): void
    {
        $this->makePosts(3);

        $records = $this->actingAs($this->user)
            ->get('/posts')
            ->assertOk()
            ->viewData('page')['props']['records'];

        $ids = array_column($records, 'id');

        $this->assertCount(3, $ids);
        $this->assertCount(3, array_unique($ids));
        $this->assertNotContains(null, $ids);
        $this->assertTrue(
            collect($ids)->every(fn (mixed $id): bool => is_int($id) || is_string($id)),
        );
    }

    public function test_the_list_select_includes_the_key_column(): void
    {
        $columns = PostResource::table(Table::make())->toListQuery(Post::class)->selectedColumns();

        $this->assertTrue(
            collect($columns)->contains(
                fn (mixed $column): bool => is_string($column)
                    && ($column === 'id' || str_ends_with($column, '.id') || str_contains(strtolower($column), ' as id')),
            ),
            'List SELECT must include the row key. Got: '.implode(', ', array_map('strval', $columns)),
        );
    }

    public function test_exact_search_mode_matches_the_complete_declared_value(): void
    {
        $this->makePosts(0);
        DB::table('posts')->insert([
            ['title' => 'Alpha', 'status' => 'draft', 'views' => 1, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Alpha Extended', 'status' => 'draft', 'views' => 2, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
        ]);

        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable()->searchable(),
                TextColumn::make('created_at')->from('posts.created_at')->sortable(),
            ])
            ->searchMode('exact');

        $result = $table->toListQuery(Post::class)->run(Request::create('/posts', 'GET', ['search' => 'Alpha']));

        $this->assertSame(['Alpha'], array_column($result->records, 'title'));
    }

    public function test_relevance_search_prioritises_an_exact_value(): void
    {
        DB::table('posts')->insert([
            ['title' => 'Alpha Extended', 'status' => 'draft', 'views' => 1, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'Alpha', 'status' => 'draft', 'views' => 2, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
        ]);

        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable()->searchable(),
                TextColumn::make('created_at')->from('posts.created_at')->sortable(),
            ])
            ->searchMode('relevance');

        $result = $table->toListQuery(Post::class)->run(Request::create('/posts', 'GET', ['search' => 'Alpha']));

        $this->assertSame('Alpha', $result->records[0]['title']);
    }

    public function test_a_custom_provider_can_supply_a_read_only_page_without_eloquent(): void
    {
        $provider = new class implements DataProvider {
            public function provide(Request $request, array $state, int $perPage): DataProviderResult
            {
                return new DataProviderResult(
                    records: [['id' => 'external-1', 'title' => 'From an API']],
                    hasMore: false,
                    nextCursor: null,
                    total: 1,
                );
            }
        };

        $result = Table::make()
            ->dataProvider($provider)
            ->toListQuery(Post::class)
            ->run(Request::create('/external', 'GET', ['search' => 'anything']));

        $this->assertSame('From an API', $result->records[0]['title']);
        $this->assertSame(1, ($result->total)());
        $this->assertSame('exact', $result->countStrategy);
    }

    public function test_custom_provider_operations_fail_explicitly_instead_of_falling_back_to_eloquent(): void
    {
        $provider = new class implements DataProvider {
            public function provide(Request $request, array $state, int $perPage): DataProviderResult
            {
                return new DataProviderResult([], false, null, 0);
            }
        };

        $query = Table::make()->dataProvider($provider)->toListQuery(Post::class);

        $this->expectException(\InvalidArgumentException::class);
        $this->expectExceptionMessage('read-only');
        $query->matching(Request::create('/external'));
    }
}
