<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Tables\Filters\BooleanFilter;
use PanelKit\Panel\Tables\ListQuery;

final class PlansController extends Controller
{
    public function index(Request $request): Response
    {
        $result = ListQuery::for(Plan::class)
            ->select([
                'plans.id',
                'plans.name',
                'plans.speed_mbps',
                'plans.price_cents',
                'plans.is_active',
                'plans.created_at',
            ])
            ->keyColumn('plans.id')
            ->sortable([
                'name' => 'plans.name',
                'speed_mbps' => 'plans.speed_mbps',
                // `price` is displayed but `price_cents` is ordered by — sorting
                // the formatted string would put 12,000.00 before 900.00.
                'price_cents' => 'plans.price_cents',
                'created_at' => 'plans.created_at',
            ])
            ->searchable(['plans.name'])
            ->filters([
                // Three states: unset, true, false. `false` is an applied value,
                // not the absence of one.
                BooleanFilter::make('active')->label('Availability')->column('plans.is_active')
                    ->labels('Active', 'Inactive'),
            ])
            ->transform(function (array $row): array {
                // Computed column with no matching database column. Formatting
                // in SQL would be locale-bound; formatting in Vue would scatter
                // the same logic across every screen that shows a price.
                $row['price'] = number_format((int) $row['price_cents'] / 100, 2);
                $row['is_active'] = (bool) $row['is_active'];

                return $row;
            })
            ->defaultSort('created_at', 'desc')
            ->run($request);

        return Inertia::render('Plans/Index', [
            ...$result->toProps(),
            'total' => Inertia::defer($result->total),
        ]);
    }
}
