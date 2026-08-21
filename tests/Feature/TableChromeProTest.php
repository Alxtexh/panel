<?php

declare(strict_types=1);

use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;
use Alxtexh\Panel\Tables\ViewState;

it('exposes sticky, width and resizable on columns', function () {
    $column = TextColumn::make('name')
        ->sticky()
        ->width(180)
        ->resizable();

    $schema = $column->toArray();

    expect($schema)
        ->toHaveKey('sticky', true)
        ->toHaveKey('width', 180)
        ->toHaveKey('resizable', true);
});

it('opts into table chrome pro flags and layouts on the table schema', function () {
    $table = Table::make()
        ->columns([
            TextColumn::make('name'),
            TextColumn::make('status'),
        ])
        ->stickyFirstColumn()
        ->resizableColumns()
        ->layouts(['table', 'cards', 'bogus']);

    $schema = $table->toSchema();

    expect($schema['stickyFirstColumn'])->toBeTrue()
        ->and($schema['resizableColumns'])->toBeTrue()
        ->and($schema['layouts'])->toBe(['table', 'cards']);
});

it('sanitises widths and layout in saved views', function () {
    $table = Table::make()
        ->columns([
            TextColumn::make('name'),
            TextColumn::make('status'),
        ])
        ->layouts(['table', 'cards']);

    $state = ViewState::sanitize([
        'widths' => [
            'name' => 200,
            'status' => 12,
            'gone' => 100,
            'secret' => 90,
        ],
        'layout' => 'cards',
        'extra' => 'drop',
    ], $table);

    expect($state)
        ->toHaveKey('widths', ['name' => 200])
        ->toHaveKey('layout', 'cards')
        ->not->toHaveKey('extra');

    $denied = ViewState::sanitize(['layout' => 'cards'], Table::make()->columns([
        TextColumn::make('name'),
    ]));

    expect($denied)->not->toHaveKey('layout');
});

it('lists widths and layout among allowed view keys', function () {
    expect(ViewState::allowedKeys())->toContain('widths', 'layout');
});
