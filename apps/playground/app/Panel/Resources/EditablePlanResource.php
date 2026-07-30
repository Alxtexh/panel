<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Plan;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Columns\ToggleColumn;
use PanelKit\Panel\Tables\Table;

/**
 * A table that exists to exercise inline cell editing.
 *
 * ROUTABLE, BUT NOT IN THE NAVIGATION.
 *
 * Inline editing is a framework capability with no screen in this panel that
 * wants it: a switch in a list turns a row into a control, and one mis-click
 * while scanning retires a plan that customers are being sold. So Plans shows a
 * badge and retiring goes through the bulk menu, where it is chosen rather than
 * brushed against.
 *
 * That left the capability untested. The tests used to hang off PlanResource's
 * toggle column, so a DISPLAY decision about one screen broke six tests about
 * behaviour that had not changed - which is the wrong coupling. This resource
 * is the subject instead: the endpoint, the casting and the refusals stay
 * covered without any real screen having to show a control it should not.
 *
 * It cannot live in the test file, because the resource routes are constrained
 * to the resources discovered at boot - a resource registered mid-test is not
 * routable, and every request against it 404s.
 */
final class EditablePlanResource extends Resource
{
    protected static string $model = Plan::class;

    protected static ?string $purpose = 'A fixture for inline cell editing - reachable, not shown in navigation.';

    public static function key(): string
    {
        return 'editable-plans';
    }

    /** See the class note: reachable, deliberately unlisted. */
    public static function showsInNavigation(): bool
    {
        return false;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->from('plans.name')->sortable(),
                ToggleColumn::make('is_active')->from('plans.is_active')->label('Active'),
            ])
            ->keyColumn('plans.id')
            ->alsoSelect(['plans.id'])
            ->defaultSort('name', 'asc');
    }
}
