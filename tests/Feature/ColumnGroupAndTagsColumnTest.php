<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Columns\ColumnGroup;
use Alxtexh\Panel\Tables\Columns\TagsColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tests\TestCase;

final class ColumnGroupAndTagsColumnTest extends TestCase
{
    public function test_column_group_flattens_into_schema_with_group_stamp(): void
    {
        $table = Table::make()->columns([
            TextColumn::make('name'),
            ColumnGroup::make('Contact', [
                TextColumn::make('email')->sortable(),
                TextColumn::make('phone'),
            ]),
            TagsColumn::make('tags')->limit(3),
        ]);

        $columns = $table->getColumns();
        $this->assertCount(4, $columns);
        $this->assertSame(['name', 'email', 'phone', 'tags'], array_map(
            static fn ($c): string => $c->key,
            $columns,
        ));

        $schema = $table->toSchema();
        $byKey = array_column($schema['columns'], null, 'key');

        $this->assertArrayNotHasKey('group', $byKey['name']);
        $this->assertSame('Contact', $byKey['email']['group']);
        $this->assertSame('Contact', $byKey['phone']['group']);
        $this->assertSame('tags', $byKey['tags']['type']);
        $this->assertSame(3, $byKey['tags']['limit']);

        $this->assertSame(
            [['label' => 'Contact', 'columns' => ['email', 'phone']]],
            $schema['columnGroups'],
        );
    }

    public function test_column_group_make_accepts_chained_columns(): void
    {
        $group = ColumnGroup::make('Meta')->columns([
            TextColumn::make('a'),
            TextColumn::make('b'),
        ]);

        $this->assertSame('Meta', $group->getLabel());
        $this->assertCount(2, $group->getColumns());
    }

    public function test_tags_column_schema_defaults(): void
    {
        $plain = TagsColumn::make('labels')->toArray();

        $this->assertSame('tags', $plain['type']);
        $this->assertSame(',', $plain['separator']);
        $this->assertArrayNotHasKey('limit', $plain);

        $limited = TagsColumn::make('labels')->limit(2)->separator(';')->toArray();
        $this->assertSame(2, $limited['limit']);
        $this->assertSame(';', $limited['separator']);
    }

    public function test_searchable_and_sortable_see_grouped_columns(): void
    {
        $table = Table::make()->columns([
            ColumnGroup::make('Contact', [
                TextColumn::make('email')->searchable()->sortable(),
            ]),
        ]);

        $this->assertSame(['email'], $table->searchableColumns());
        $schema = $table->toSchema();
        $this->assertTrue($schema['columns'][0]['sortable']);
    }
}
