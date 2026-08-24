<?php

declare(strict_types=1);

use Alxtexh\Panel\Actions\RecordAction;

it('defaults icons for common keys when the host omitted them', function () {
    expect(RecordAction::make('impersonate', 'Log in as user')->toArray()['icon'])->toBe('log-in');
    expect(RecordAction::make('recharge-credits', 'Recharge Credits')->toArray()['icon'])->toBe('coins');
    expect(RecordAction::make('delete', 'Delete')->destructive()->toArray()['icon'])->toBe('trash');
});

it('keeps an explicitly declared icon', function () {
    expect(
        RecordAction::make('impersonate', 'Log in as user')->icon('user-check')->toArray()['icon'],
    )->toBe('user-check');
});

it('infers from the label when the key is custom', function () {
    expect(RecordAction::defaultIconFor('become', 'Log in as user'))->toBe('log-in');
    expect(RecordAction::defaultIconFor('topup', 'Recharge Credits'))->toBe('coins');
});
