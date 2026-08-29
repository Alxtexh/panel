<?php

declare(strict_types=1);

use Alxtexh\Panel\Tables\Filters\SelectFilter;

it('accepts a plain list of value strings', function () {
    $filter = SelectFilter::make('status')->options(['draft', 'sent', 'paid']);

    expect($filter->resolvedOptions())->toBe(['draft', 'sent', 'paid'])
        ->and($filter->allowedValues())->toBe(['draft', 'sent', 'paid']);
});

it('accepts a list of value/label pairs', function () {
    $filter = SelectFilter::make('status')->options([
        ['value' => 'draft', 'label' => 'Draft'],
        ['value' => 'sent', 'label' => 'Sent'],
    ]);

    expect($filter->allowedValues())->toBe(['draft', 'sent']);
});

it('accepts an empty list', function () {
    $filter = SelectFilter::make('status')->options([]);

    expect($filter->resolvedOptions())->toBe([]);
});

it('accepts a closure that resolves to a list', function () {
    $filter = SelectFilter::make('status')->options(fn (): array => ['draft', 'sent']);

    expect($filter->resolvedOptions())->toBe(['draft', 'sent']);
});

/**
 * THE MISTAKE THIS CATCHES: `SelectField::options()` on the sibling form
 * field class takes a `value => label` map, and it is the same method name
 * on a class in the same package - so reaching for that shape here is a
 * natural mistake, not a careless one. Passed through uncaught, the string
 * keys survive into the JSON payload as an object rather than an array, and
 * `TableToolbar.vue`'s `(filter.options ?? []).map(...)` throws
 * "options.map is not a function" in the browser - a crash with no
 * indication it started from a one-line typo in a resource class.
 */
it('rejects a value => label map with a clear message naming the fix', function () {
    $filter = SelectFilter::make('status')->options([
        'draft' => 'Draft',
        'sent' => 'Sent',
    ]);

    expect(fn () => $filter->resolvedOptions())
        ->toThrow(InvalidArgumentException::class, "SelectFilter::make('status')");
});

it('rejects a map returned from a closure the same way', function () {
    $filter = SelectFilter::make('status')->options(fn (): array => ['draft' => 'Draft']);

    expect(fn () => $filter->resolvedOptions())->toThrow(InvalidArgumentException::class);
});
