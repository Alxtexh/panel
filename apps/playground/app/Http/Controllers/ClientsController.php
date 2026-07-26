<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\ListQuery;

/**
 * PHASE 3 — everything mechanical now lives in ListQuery. What remains is only
 * what is genuinely specific to this resource.
 */
final class ClientsController extends Controller
{
    public function index(Request $request): Response
    {
        $result = ListQuery::for(Client::class)
            ->select([
                'clients.id',
                'clients.name',
                'clients.phone',
                'clients.access_code',
                'clients.status',
                'clients.plan_type',
                'clients.expiry_date',
                'clients.created_at',
                'plans.name as plan_name',
            ])
            // One join, so the query count stays constant rather than growing
            // by one per row — the N+1 the query-count guard exists to catch.
            ->join(fn (Builder $q) => $q->leftJoin('plans', 'plans.id', '=', 'clients.plan_id'))
            ->keyColumn('clients.id')
            ->sortable([
                'name' => 'clients.name',
                'status' => 'clients.status',
                'expiry_date' => 'clients.expiry_date',
                'created_at' => 'clients.created_at',
            ])
            ->searchable(['clients.name', 'clients.phone', 'clients.access_code'])
            ->filters([
                SelectFilter::make('status')->column('clients.status')
                    ->options(['active', 'expired', 'suspended']),
                SelectFilter::make('planType')->label('Plan type')->column('clients.plan_type')
                    ->options(['pppoe', 'hotspot', 'static']),
            ])
            // ONE grouped query for every tab count, never one per tab (addendum C1).
            ->tabs('clients.status', ['active', 'expired', 'suspended'])
            ->defaultSort('created_at', 'desc')
            ->run($request);

        return Inertia::render('Clients/Index', [
            ...$result->toProps(),
            // Deferred, so the rows paint before any COUNT runs (§10).
            'total' => Inertia::defer($result->total),
            // Deferred: tab counts must never sit in front of the rows.
            ...($result->tabCounts ? ['tabCounts' => Inertia::defer($result->tabCounts)] : []),
        ]);
    }
}
