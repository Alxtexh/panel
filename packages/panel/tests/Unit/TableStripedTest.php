<?php

declare(strict_types=1);

use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Table;

it('serialises optional table stripes', function () {
    $schema = Table::make()
        ->columns([TextColumn::make('name')])
        ->striped()
        ->toSchema();

    expect($schema['striped'])->toBeTrue();
});

it('defaults stripes off', function () {
    $schema = Table::make()
        ->columns([TextColumn::make('name')])
        ->toSchema();

    expect($schema['striped'])->toBeFalse();
});
