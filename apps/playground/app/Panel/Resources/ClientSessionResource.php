<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\ClientSession;
use Alxtexh\Panel\Resources\Resource;
use Alxtexh\Panel\Tables\Columns\BadgeColumn;
use Alxtexh\Panel\Tables\Columns\DateColumn;
use Alxtexh\Panel\Tables\Columns\TextColumn;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Table;

/**
 * ONE subscriber's connection history, as a full screen - roadmap 4.2.
 *
 * THE NESTED RESOURCE THE RELATION MANAGER COULD NOT BE. The Sessions tab on
 * a client's record page is a summary: a related list inside somebody else's
 * screen, good for a glance and structurally incapable of more - no tabs, no
 * URL of its own to link in a ticket, no export. A client with years of
 * history deserves the whole table apparatus, and that is a RESOURCE - so
 * this is one, nested: it answers only at `/clients/{id}/sessions`, resolves
 * and authorises the client before touching a row, and constrains every query
 * to that client's sessions.
 *
 * NO FORM, DELIBERATELY. A session is telemetry - the network wrote it, and
 * nobody should type one into existence. With no form the panel renders no
 * New or Edit anywhere, and the create and edit URLs 404; the screen is the
 * history, not a place to invent it.
 */
final class ClientSessionResource extends Resource
{
    protected static string $model = ClientSession::class;

    protected static string $icon = 'activity';

    protected static ?string $purpose = "This subscriber's connection history, newest first.";

    // Nested under clients: /clients/{id}/sessions, and nowhere else.
    protected static ?string $parent = ClientResource::class;

    public static function key(): string
    {
        // 'sessions', not 'client-sessions': the parent is already in the
        // URL, so repeating it would read /clients/5/client-sessions.
        return 'sessions';
    }

    public static function label(): string
    {
        return 'Session';
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                DateColumn::make('started_at')->from('client_sessions.started_at')
                    ->label('Started')->withTime()->sortable(),
                DateColumn::make('ended_at')->from('client_sessions.ended_at')
                    ->label('Ended')->withTime()->sortable(),
                BadgeColumn::make('status')->from('client_sessions.status')->colors([
                    'online' => 'success',
                    'offline' => 'neutral',
                ]),
                TextColumn::make('ip_address')->from('client_sessions.ip_address')
                    ->label('IP')->mono()->copyable(),
                TextColumn::make('bytes_in')->from('client_sessions.bytes_in')->label('In')->muted(),
                TextColumn::make('bytes_out')->from('client_sessions.bytes_out')->label('Out')->muted(),
            ])
            ->filters([
                SelectFilter::make('status')->column('client_sessions.status')
                    ->options(['online', 'offline']),
            ])
            ->tabs('client_sessions.status', ['online', 'offline'])
            ->keyColumn('client_sessions.id')
            ->alsoSelect(['client_sessions.id'])
            ->defaultSort('started_at', 'desc')
            ->perPage(25);
    }

    /** The demo's own subject matter - the worked example the API reference is for. */
    public static function documented(): bool
    {
        return true;
    }
}
