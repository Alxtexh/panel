<?php

declare(strict_types=1);

use Alxtexh\Panel\Schema\Section;

it('serialises an optional section icon into the schema', function () {
    $schema = Section::make('Identity')
        ->icon('user')
        ->description('Who this is')
        ->toSchema();

    expect($schema)->toMatchArray([
        'component' => 'section',
        'label' => 'Identity',
        'description' => 'Who this is',
        'icon' => 'user',
    ]);
});

it('omits a missing section icon as null', function () {
    $schema = Section::make('Identity')->toSchema();

    expect($schema['icon'])->toBeNull();
});
