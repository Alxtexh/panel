<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Unit;

use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tables\Tabs;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Database\Query\Builder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * `Tabs::modifyQuery()` replaces one tab's plain `column = value` match with
 * a closure - a date range, a second column, a join. Covers `apply()`
 * honouring the modifier, `counts()`'s partition (one grouped query for
 * every PLAIN tab, one dedicated query per MODIFIED tab, `all` summing
 * both), and `Table::tabs()`'s configure closure actually reaching the
 * `Tabs` instance the query runs against - not a second, unconfigured one.
 */
final class TabsQueryModifierTest extends TestCase
{
    use RefreshDatabase;

    public function test_apply_runs_the_modifier_instead_of_the_plain_match(): void
    {
        $this->seedPosts();

        $tabs = Tabs::make('status', ['draft', 'published', 'trending']);
        $tabs->modifyQuery('trending', function (Builder $query): void {
            $query->where('status', 'published')->where('views', '>', 10);
        });

        $query = DB::table('posts');
        $tabs->apply($query, 'trending');

        $this->assertSame(2, $query->count());
    }

    public function test_apply_still_does_a_plain_match_for_an_unmodified_value(): void
    {
        $this->seedPosts();

        $tabs = Tabs::make('status', ['draft', 'published']);

        $query = DB::table('posts');
        $tabs->apply($query, 'draft');

        $this->assertSame(3, $query->count());
    }

    public function test_counts_partitions_plain_and_modified_tabs(): void
    {
        $this->seedPosts();

        $tabs = Tabs::make('status', ['draft', 'published', 'trending']);
        $tabs->modifyQuery('trending', function (Builder $query): void {
            $query->where('status', 'published')->where('views', '>', 10);
        });

        $counts = $tabs->counts(Post::query()->toBase());

        $this->assertSame(3, $counts['draft']);
        $this->assertSame(3, $counts['published']);
        $this->assertSame(2, $counts['trending']);

        // "all" is a true COUNT(*) of the base query, not a sum of the tab
        // counts - "trending" overlaps "published" (every trending row is
        // also published), and summing would over-report the total.
        $this->assertSame(6, $counts['all']);
    }

    public function test_counts_backfills_zero_for_a_plain_tab_with_no_rows(): void
    {
        $this->seedPosts();

        $tabs = Tabs::make('status', ['draft', 'published', 'archived']);

        $counts = $tabs->counts(Post::query()->toBase());

        $this->assertSame(0, $counts['archived']);
    }

    public function test_a_query_all_of_whose_tabs_are_modified_skips_the_grouped_query_entirely(): void
    {
        $this->seedPosts();

        $tabs = Tabs::make('status', ['trending']);
        $tabs->modifyQuery('trending', function (Builder $query): void {
            $query->where('status', 'published')->where('views', '>', 10);
        });

        $counts = $tabs->counts(Post::query()->toBase());

        // "all" is every row in view (6), not just the ones the sole
        // declared tab happens to match (2) - a modifier can be arbitrarily
        // narrow, and "all" still means "everything".
        $this->assertSame(['all' => 6, 'trending' => 2], $counts);
    }

    public function test_table_tabs_configure_closure_reaches_the_instance_the_query_runs_against(): void
    {
        $this->seedPosts();

        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable(),
                TextColumn::make('status')->from('posts.status')->sortable(),
            ])
            ->keyColumn('posts.id')
            ->defaultSort('title', 'asc')
            ->tabs('status', ['draft', 'published', 'trending'], function (Tabs $tabs): void {
                $tabs->modifyQuery('trending', function (Builder $query): void {
                    $query->where('status', 'published')->where('views', '>', 10);
                });
            });

        $result = $table->toListQuery(Post::class)->run(
            Request::create('/posts', 'GET', ['tab' => 'trending']),
        );

        $this->assertCount(2, $result->records);

        $counts = ($result->tabCounts)();
        $this->assertSame(2, $counts['trending']);
        $this->assertSame(6, $counts['all']);
    }

    private function seedPosts(): void
    {
        DB::table('posts')->insert([
            ['title' => 'D1', 'status' => 'draft', 'views' => 1, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'D2', 'status' => 'draft', 'views' => 2, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'D3', 'status' => 'draft', 'views' => 3, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'P1', 'status' => 'published', 'views' => 50, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'P2', 'status' => 'published', 'views' => 20, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
            ['title' => 'P3', 'status' => 'published', 'views' => 5, 'is_featured' => false, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}
