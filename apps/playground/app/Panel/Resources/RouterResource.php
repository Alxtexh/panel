<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Router;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\IconColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Table;

final class RouterResource extends Resource
{
    protected static string $model = Router::class;

    protected static string $icon = 'router';

    protected static ?string $group = 'Network';

    protected static ?int $sort = 20;

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->from('routers.name')->sortable()->searchable()->locked(),
                TextColumn::make('ip_address')->from('routers.ip_address')->label('IP address')
                    ->searchable()->copyable()->mono(),
                TextColumn::make('model')->from('routers.model')->muted(),
                // An icon, not a badge: reachability is scanned down the
                // column rather than read row by row.
                IconColumn::make('status')->from('routers.status')->sortable()
                    ->icons(['online' => 'wifi', 'offline' => 'wifi-off', 'degraded' => 'alert'])
                    ->colors(['online' => 'success', 'offline' => 'danger', 'degraded' => 'warning'])
                    ->labels(['online' => 'Online', 'offline' => 'Offline', 'degraded' => 'Degraded']),
                DateColumn::make('last_seen_at')->from('routers.last_seen_at')->label('Last seen')->sortable(),
                DateColumn::make('created_at')->from('routers.created_at')->sortable()->muted(),
            ])
            ->filters([
                SelectFilter::make('status')->column('routers.status')
                    ->options(['online', 'degraded', 'offline']),
                // Data-derived options, resolved lazily from a TENANT-SCOPED
                // query — never at schema-build time, and never cached into the
                // schema, because they are tenant data (addendum Part A).
                SelectFilter::make('model')->column('routers.model')
                    ->options(fn (): array => Router::query()->toBase()
                        ->select('model')->whereNotNull('model')
                        ->distinct()->orderBy('model')->pluck('model')->all()),
            ])
            ->tabs('routers.status', ['online', 'degraded', 'offline'])
            ->keyColumn('routers.id')
            ->alsoSelect(['routers.id'])
            ->defaultSort('created_at', 'desc');
    }
}
