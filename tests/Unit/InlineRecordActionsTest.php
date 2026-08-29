<?php

declare(strict_types=1);

use Alxtexh\Panel\Actions\ActionGroup;
use Alxtexh\Panel\Actions\RecordAction;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;

it('defaults inline record actions off', function () {
    $schema = Table::make()
        ->columns([TextColumn::make('name')])
        ->toSchema();

    expect($schema['inlineRecordActions'])->toBeFalse();
});

it('serialises inline record actions when opted in', function () {
    $schema = Table::make()
        ->columns([TextColumn::make('name')])
        ->inlineRecordActions()
        ->toSchema();

    expect($schema['inlineRecordActions'])->toBeTrue();
});

it('can be switched back off explicitly', function () {
    $schema = Table::make()
        ->columns([TextColumn::make('name')])
        ->inlineRecordActions()
        ->inlineRecordActions(false)
        ->toSchema();

    expect($schema['inlineRecordActions'])->toBeFalse();
});

it('does not change how record actions themselves serialise', function () {
    $withInline = Table::make()
        ->columns([TextColumn::make('name')])
        ->recordActions([
            RecordAction::make('view', 'View'),
            ActionGroup::make('More')->actions([RecordAction::make('archive', 'Archive')]),
        ])
        ->inlineRecordActions()
        ->toSchema()['recordActions'];

    $withoutInline = Table::make()
        ->columns([TextColumn::make('name')])
        ->recordActions([
            RecordAction::make('view', 'View'),
            ActionGroup::make('More')->actions([RecordAction::make('archive', 'Archive')]),
        ])
        ->toSchema()['recordActions'];

    expect($withInline)->toBe($withoutInline)
        ->and($withInline)->toHaveCount(2)
        ->and($withInline[0]['actions'][0]['key'])->toBe('view')
        ->and($withInline[1]['label'])->toBe('More')
        ->and($withInline[1]['actions'][0]['key'])->toBe('archive');
});
