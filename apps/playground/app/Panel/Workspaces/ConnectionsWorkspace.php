<?php

declare(strict_types=1);

namespace App\Panel\Workspaces;

use App\Models\ClientSession;
use Illuminate\Contracts\Database\Eloquent\Builder;
use PanelKit\Panel\Pages\Workspace;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Table;

/**
 * A subject area that is not one model with one list.
 *
 * Connections is a question an operator asks in two halves - who is online right
 * now, and what happened earlier - and neither half is usefully a filter tab on
 * the other. Live sessions are watched; history is searched. They want different
 * default sorts, different columns, and to be paged independently.
 *
 * IT IS CALLED CONNECTIONS, NOT SESSIONS, and the rename is why it now has a
 * place in the navigation at all. The underlying rows are client CONNECTION
 * sessions - an ISP concept that shares a word with authentication - so a
 * sidebar entry reading "Sessions" answered a question nobody was asking:
 * somebody looking for that in a panel wants to know where they are signed in,
 * which lives in Security settings. Rather than leave the screen unlinked to
 * dodge the collision, the screen got the name it always meant.
 *
 * THE TWO TABLES SHARE NOTHING BUT THE PAGE. Each reads `?live[...]` or
 * `?history[...]`, so sorting one leaves the other exactly where it was, and the
 * URL describes both - which means the state somebody is looking at can be sent
 * to somebody else.
 *
 * BOTH ARE SPLIT ON `ended_at` BEING NULL, not on the status column. A status is
 * written by something and can lag; a null end time is what "still running"
 * actually means. Splitting on the column that can be stale would put the same
 * session in both tables, or in neither.
 */
final class ConnectionsWorkspace
{
    public static function definition(): Workspace
    {
        return Workspace::make('connections')
            ->heading('Connections', 'Who is connected now, and what happened earlier.')
            ->table('live', self::liveTable(), 'Online now')
            ->table('history', self::historyTable(), 'Recent history');
    }

    /**
     * Currently connected.
     *
     * Sorted by start time ASCENDING, so the longest-running session is at the
     * top. On a live list that is the interesting end; "started most recently"
     * reorders itself constantly and tells an operator nothing.
     */
    private static function liveTable(): Table
    {
        return Table::make()
            ->model(ClientSession::class)
            ->columns([
                TextColumn::make('client_name')->label('Subscriber')
                    ->from('clients.name')->searchable()->sortable(),
                TextColumn::make('ip_address')->label('IP')->copyable(),
                DateColumn::make('started_at')->label('Since')->sortable()->withTime(),
                TextColumn::make('bytes_in')->label('Down'),
                TextColumn::make('bytes_out')->label('Up'),
            ])
            ->query(fn (Builder $q) => $q->leftJoin('clients', 'clients.id', '=', 'client_sessions.client_id'))
            // A CONSTRAINT, not part of the join. A count drops the join when
            // nothing needs it, so a predicate hidden in there would be absent
            // from the total - which is exactly the bug this split was made to
            // fix: "3 live sessions" reported as every session ever recorded.
            ->constrain(fn (Builder $q) => $q->whereNull('client_sessions.ended_at'))
            ->keyColumn('client_sessions.id')
            ->alsoSelect(['client_sessions.id'])
            ->defaultSort('started_at', 'asc')
            ->perPage(10);
    }

    /** Closed sessions, newest first, filterable by how they ended. */
    private static function historyTable(): Table
    {
        return Table::make()
            ->model(ClientSession::class)
            ->columns([
                TextColumn::make('client_name')->label('Subscriber')
                    ->from('clients.name')->searchable()->sortable(),
                // QUALIFIED, because the join brings `clients.status` into
                // scope alongside `client_sessions.status` and an unqualified
                // reference is ambiguous - SQLite says so, loudly, which is
                // better than a driver that silently picks one.
                BadgeColumn::make('status')->from('client_sessions.status')->colors([
                    'online' => 'success',
                    'offline' => 'neutral',
                ]),
                DateColumn::make('started_at')->label('Started')->sortable()->withTime(),
                DateColumn::make('ended_at')->label('Ended')->sortable()->withTime(),
            ])
            ->query(fn (Builder $q) => $q->leftJoin('clients', 'clients.id', '=', 'client_sessions.client_id'))
            ->constrain(fn (Builder $q) => $q->whereNotNull('client_sessions.ended_at'))
            ->keyColumn('client_sessions.id')
            ->alsoSelect(['client_sessions.id'])
            ->filters([
                SelectFilter::make('status')->column('client_sessions.status')
                    ->options(['online', 'offline']),
            ])
            ->defaultSort('ended_at', 'desc')
            ->perPage(10);
    }
}
