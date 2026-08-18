<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Grouping\Group;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tables\ViewState;
use Alxtexh\Panel\Tests\Fixtures\Models\Post;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Table grouping as an object: collapsible headings, date clusters, a picker,
 * and a keyset cursor that still seeks after the extra ORDER BY term.
 */
final class TableGroupingTest extends TestCase
{
    use RefreshDatabase;

    private function table(bool $picker = false): Table
    {
        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable()->searchable(),
                TextColumn::make('status')->from('posts.status')->sortable(),
                DateColumn::make('created_at')->from('posts.created_at')->sortable()->withTime(),
            ])
            ->groupBy(Group::make('status')->collapsible()->label('Workflow'))
            ->keyColumn('posts.id')
            ->perPage(10)
            ->perPageOptions([10, 25]);

        if ($picker) {
            $table->groups([
                Group::make('status')->collapsible()->label('Workflow'),
                Group::make('created_at')->date()->label('Created date'),
            ]);
        }

        return $table;
    }

    public function test_group_by_string_still_clusters_and_is_a_group_object(): void
    {
        $schema = Table::make()->groupBy('status', 'State')->toSchema();

        $this->assertSame('status', $schema['groupBy']['key']);
        $this->assertSame('State', $schema['groupBy']['label']);
        $this->assertFalse($schema['groupBy']['collapsible']);
        $this->assertSame([], $schema['groups']);
    }

    public function test_group_schema_carries_collapse_and_date_and_the_picker(): void
    {
        $schema = $this->table(picker: true)
            ->collapsedGroupsByDefault()
            ->toSchema();

        $this->assertTrue($schema['groupBy']['collapsible']);
        $this->assertSame('Workflow', $schema['groupBy']['label']);
        $this->assertTrue($schema['collapsedGroupsByDefault']);
        $this->assertCount(2, $schema['groups']);
        $this->assertTrue($schema['groups'][1]['date']);
    }

    public function test_rows_arrive_clustered_with_a_heading_key(): void
    {
        $this->insertPosts(6);

        $result = $this->table()->toListQuery(Post::class)->run(Request::create('/posts'));
        $statuses = array_column($result->records, 'status');

        $this->assertSame($statuses, $this->clustered($statuses));
        $this->assertSame($result->records[0]['status'], $result->records[0]['__group']);
        $this->assertStringContainsString('Workflow:', $result->records[0]['__groupTitle']);
        $this->assertTrue($result->groupBy['collapsible']);
    }

    public function test_a_custom_title_replaces_the_raw_value(): void
    {
        $this->insertPosts(3);

        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable(),
                TextColumn::make('status')->from('posts.status')->sortable(),
                DateColumn::make('created_at')->from('posts.created_at')->sortable(),
            ])
            ->groupBy(
                Group::make('status')
                    ->titlePrefixedWithLabel(false)
                    ->titleUsing(fn (mixed $value): string => strtoupper((string) $value)),
            )
            ->keyColumn('posts.id');

        $result = $table->toListQuery(Post::class)->run(Request::create('/posts'));

        $this->assertSame(strtoupper((string) $result->records[0]['status']), $result->records[0]['__groupTitle']);
    }

    public function test_date_grouping_clusters_by_calendar_day(): void
    {
        DB::table('posts')->insert([
            ['title' => 'A', 'status' => 'draft', 'views' => 0, 'is_featured' => false, 'created_at' => '2026-01-01 08:00:00', 'updated_at' => '2026-01-01 08:00:00'],
            ['title' => 'B', 'status' => 'draft', 'views' => 0, 'is_featured' => false, 'created_at' => '2026-01-01 18:00:00', 'updated_at' => '2026-01-01 18:00:00'],
            ['title' => 'C', 'status' => 'draft', 'views' => 0, 'is_featured' => false, 'created_at' => '2026-01-02 09:00:00', 'updated_at' => '2026-01-02 09:00:00'],
        ]);

        $table = Table::make()
            ->columns([
                TextColumn::make('title')->from('posts.title')->sortable(),
                DateColumn::make('created_at')->from('posts.created_at')->sortable(),
            ])
            ->groupBy(Group::make('created_at')->date()->label('Day'))
            ->defaultSort('title', 'asc')
            ->keyColumn('posts.id');

        $result = $table->toListQuery(Post::class)->run(Request::create('/posts', 'GET', [
            'sort' => 'title',
            'direction' => 'asc',
        ]));

        $days = array_column($result->records, '__group');

        $this->assertSame(['2026-01-01', '2026-01-01', '2026-01-02'], $days);
        $this->assertSame(['A', 'B', 'C'], array_column($result->records, 'title'));
    }

    public function test_the_picker_switches_grouping_and_unknown_keys_fall_back(): void
    {
        $this->insertPosts(3);

        $query = $this->table(picker: true)->toListQuery(Post::class);

        $byDate = $query->run(Request::create('/posts', 'GET', ['group' => 'created_at']));
        $this->assertSame('created_at', $byDate->groupBy['key']);
        $this->assertTrue($byDate->groupBy['date']);

        $unknown = $query->run(Request::create('/posts', 'GET', ['group' => 'not-a-column']));
        $this->assertSame('status', $unknown->groupBy['key']);

        $none = $query->run(Request::create('/posts', 'GET', ['group' => '-']));
        $this->assertNull($none->groupBy);
        $this->assertArrayNotHasKey('__group', $none->records[0]);
    }

    public function test_a_picker_param_is_ignored_when_the_table_did_not_offer_one(): void
    {
        $this->insertPosts(3);

        $result = $this->table()->toListQuery(Post::class)->run(
            Request::create('/posts', 'GET', ['group' => '-']),
        );

        $this->assertSame('status', $result->groupBy['key']);
    }

    public function test_keyset_pagination_does_not_repeat_or_drop_rows_when_grouped(): void
    {
        $this->insertPosts(25);

        $query = $this->table()->toListQuery(Post::class);
        $ids = [];
        $cursor = null;

        for ($page = 0; $page < 4; $page++) {
            $params = ['perPage' => 10];

            if ($cursor !== null) {
                $params['cursor'] = $cursor;
            }

            $result = $query->run(Request::create('/posts', 'GET', $params));
            $pageIds = array_column($result->records, 'id');
            $ids = [...$ids, ...$pageIds];
            $cursor = $result->nextCursor;

            if ($cursor === null) {
                break;
            }
        }

        $this->assertCount(25, $ids);
        $this->assertCount(25, array_unique($ids));
        $this->assertNull($cursor);
    }

    public function test_view_state_keeps_a_declared_group_and_drops_an_unknown_one(): void
    {
        $table = $this->table(picker: true);

        $this->assertSame('created_at', ViewState::sanitize(['group' => 'created_at'], $table)['group']);
        $this->assertSame('-', ViewState::sanitize(['group' => '-'], $table)['group']);
        $this->assertArrayNotHasKey('group', ViewState::sanitize(['group' => 'secret'], $table));
    }

    private function insertPosts(int $count): void
    {
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $rows[] = [
                'title' => sprintf('Post %04d', $i),
                'status' => ['draft', 'published', 'archived'][$i % 3],
                'views' => $i,
                'is_featured' => false,
                'created_at' => now()->subMinutes($i),
                'updated_at' => now()->subMinutes($i),
            ];
        }

        DB::table('posts')->insert($rows);
    }

    /** @param  list<mixed>  $values */
    private function clustered(array $values): array
    {
        $seen = [];
        $last = null;

        foreach ($values as $value) {
            if ($value !== $last) {
                $this->assertArrayNotHasKey($value, $seen, 'A group resumed after another group had started.');
                $seen[$value] = true;
                $last = $value;
            }
        }

        return $values;
    }
}
