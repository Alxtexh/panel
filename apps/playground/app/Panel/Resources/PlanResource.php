<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Plan;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\ToggleColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\BooleanFilter;
use PanelKit\Panel\Tables\Table;

final class PlanResource extends Resource
{
    protected static string $model = Plan::class;

    protected static string $icon = 'package';

    protected static ?string $group = 'Network';

    protected static ?int $sort = 30;

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->from('plans.name')->sortable()->searchable()->locked(),
                TextColumn::make('speed_mbps')->from('plans.speed_mbps')->label('Speed')->sortable()->suffix('Mbps'),
                // Displays the computed `price`, orders by `price_cents` —
                // sorting the formatted string puts 12,000.00 before 900.00.
                TextColumn::make('price')->sortable()->sortAs('price_cents')->prefix('KES'),
                // A switch, so retiring a plan is one click from the list.
                ToggleColumn::make('is_active')->label('Active')
                    ->labels('Available to new clients', 'Retired'),
                DateColumn::make('created_at')->from('plans.created_at')->sortable()->muted(),
            ])
            ->filters([
                // Three states: unset, true, false. `false` is an applied value.
                BooleanFilter::make('active')->label('Availability')->column('plans.is_active')
                    ->labels('Active', 'Inactive'),
            ])
            ->keyColumn('plans.id')
            // `price` is computed, so the underlying columns must be selected
            // explicitly — the column list alone would not include them.
            ->alsoSelect(['plans.id', 'plans.price_cents', 'plans.is_active'])
            ->transform(function (array $row): array {
                $row['price'] = number_format((int) $row['price_cents'] / 100, 2);
                $row['is_active'] = (bool) $row['is_active'];

                return $row;
            })
            ->defaultSort('created_at', 'desc');
    }
}
