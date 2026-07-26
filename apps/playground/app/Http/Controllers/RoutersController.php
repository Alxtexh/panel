<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Router;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\ListQuery;

final class RoutersController extends Controller
{
    public function index(Request $request): Response
    {
        $result = ListQuery::for(Router::class)
            ->select([
                'routers.id',
                'routers.name',
                'routers.ip_address',
                'routers.model',
                'routers.status',
                'routers.last_seen_at',
                'routers.created_at',
            ])
            ->keyColumn('routers.id')
            ->sortable([
                'name' => 'routers.name',
                'status' => 'routers.status',
                'last_seen_at' => 'routers.last_seen_at',
                'created_at' => 'routers.created_at',
            ])
            ->searchable(['routers.name', 'routers.ip_address'])
            ->filters([
                SelectFilter::make('status')->column('routers.status')
                    ->options(['online', 'degraded', 'offline']),
                // Data-derived options, resolved lazily from a TENANT-SCOPED
                // query. That is what stops a crafted value confirming whether
                // another tenant owns hardware this one does not.
                SelectFilter::make('model')->column('routers.model')
                    ->options(fn (): array => Router::query()->toBase()
                        ->select('model')->whereNotNull('model')
                        ->distinct()->orderBy('model')->pluck('model')->all()),
            ])
            ->tabs('routers.status', ['online', 'degraded', 'offline'])
            ->defaultSort('created_at', 'desc')
            ->run($request);

        return Inertia::render('Routers/Index', [
            ...$result->toProps(),
            'total' => Inertia::defer($result->total),
            // Deferred: tab counts must never sit in front of the rows.
            ...($result->tabCounts ? ['tabCounts' => Inertia::defer($result->tabCounts)] : []),
        ]);
    }
}
