<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

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
}
