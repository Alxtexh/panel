<?php

declare(strict_types=1);

namespace App\Panel\Ticketing;

use App\Models\Ticket;
use App\Models\User;
use Illuminate\Database\Eloquent\Builder;
use PanelKit\Panel\Actions\ActionGroup;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Forms\Rules\ExistsInScope;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Table;

/**
 * THE QUEUE - the operator's end of a ticket, roadmap 6.3.
 *
 * The counterpart is `MyTicketResource`, and the pair is the point: one model,
 * one policy, two screens that differ in what they show and what they let you
 * do. This one lists the WHOLE ORGANISATION'S tickets, which is what a support
 * rota needs and what `view_any_tickets` grants. The other lists the signed-in
 * person's own, and grants nothing because being the person who asked is the
 * entitlement.
 *
 * WHAT ONLY THIS SIDE HAS: assignment and resolution. Both are operator
 * judgements - who picks this up, and whether the problem is actually fixed -
 * and `TicketPolicy` refuses them to an opener however the request arrives, so
 * the absence of the controls here is a courtesy rather than the enforcement.
 *
 * NO DELETE ACTION ON THE ROW, deliberately, even for somebody holding
 * `delete_tickets`. Deleting a ticket destroys the record of a complaint, and
 * the one-click affordance for that does not belong beside Resolve, which is
 * the button people are reaching for.
 */
final class TicketResource extends Resource
{
    protected static string $model = Ticket::class;

    protected static string $icon = 'mail';

    protected static ?string $purpose = 'Everything this organisation has been asked, oldest unresolved first.';

    protected static ?string $group = 'Organisation';

    protected static ?int $sort = 20;

    public static function key(): string
    {
        return 'tickets';
    }

    public static function label(): string
    {
        return 'Ticket';
    }

    /**
     * NO IMPORT. A queue is filled by people asking for help, not by an
     * operator uploading a spreadsheet of complaints - see
     * `Resource::importable()`. Import belongs on the screens that hold data
     * an ISP genuinely migrates in bulk: subscribers, plans, routers.
     */
    public static function importable(): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form->columns(2)->schema([
            TextField::make('subject')->required(),

            SelectField::make('status')->required()
                ->options([
                    Ticket::OPEN => 'Open',
                    Ticket::PENDING => 'Waiting on the customer',
                    Ticket::RESOLVED => 'Resolved',
                ]),

            SelectField::make('priority')->required()
                ->options(['low' => 'Low', 'normal' => 'Normal', 'urgent' => 'Urgent']),

            /*
             * WHO IS HANDLING IT. Nullable on purpose - unassigned is the
             * normal state of a new ticket, and a queue that cannot express it
             * is a queue that lies about its backlog.
             *
             * `ExistsInScope`, NOT `exists:users,id`: the raw rule queries the
             * table and would happily confirm another organisation's operator,
             * which is a way to assign this ticket outside the tenant.
             */
            SelectField::make('assigned_to')->label('Assigned to')
                ->searchable(fn (string $term): array => User::query()
                    ->when($term !== '', fn ($q) => $q->where('name', 'like', $term.'%'))
                    ->orderBy('name')->limit(25)->pluck('name', 'id')->all())
                ->rule(ExistsInScope::of(User::class)),
        ]);

        /*
         * `opened_by` IS NOT A FIELD, on either side. It is stamped from the
         * signed-in user when the row is created - see the model - because a
         * form field for it is a way to file a complaint under somebody else's
         * name, and the "read your own" half of the policy is built on it.
         */
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('subject')->from('tickets.subject')
                    ->sortable()->searchable()->locked(),

                BadgeColumn::make('status')->from('tickets.status')->colors([
                    Ticket::OPEN => 'warning',
                    Ticket::PENDING => 'neutral',
                    Ticket::RESOLVED => 'success',
                ]),

                BadgeColumn::make('priority')->from('tickets.priority')->colors([
                    'urgent' => 'danger',
                    'normal' => 'neutral',
                    'low' => 'neutral',
                ]),

                // The names, not the ids. A queue that shows `opened_by: 4142`
                // is a queue somebody has to look things up to read.
                TextColumn::make('opener')->from('openers.name')->label('Opened by'),
                TextColumn::make('assignee')->from('assignees.name')->label('Assigned to'),

                DateColumn::make('created_at')->from('tickets.created_at')
                    ->label('Opened')->sortable()->withTime(),
                DateColumn::make('resolved_at')->from('tickets.resolved_at')
                    ->label('Resolved')->sortable()->withTime()->muted(),
            ])
            ->filters([
                SelectFilter::make('priority')->column('tickets.priority')
                    ->options(['low', 'normal', 'urgent']),
            ])
            ->tabs('tickets.status', [Ticket::OPEN, Ticket::PENDING, Ticket::RESOLVED])
            /*
             * TWO JOINS ONTO THE SAME TABLE, aliased, because a ticket has two
             * people on it and they are rarely the same one. In `query()`
             * rather than `constrain()`: these reach extra columns, they do not
             * narrow the set, and a count drops them.
             */
            ->query(fn (Builder $q) => $q
                ->leftJoin('users as openers', 'openers.id', '=', 'tickets.opened_by')
                ->leftJoin('users as assignees', 'assignees.id', '=', 'tickets.assigned_to'))
            /*
             * NO HAND-BUILT `View` OR `Edit` LINK, and that is deliberate
             * rather than an omission. A link written here would have to say
             * `/tickets/{id}` - correct only while this portal is mounted at
             * the root, and this resource is installed by a PLUGIN into
             * whichever panel an installation nominates. The row already links
             * to the record from `routes.index`, which carries the panel's own
             * prefix, and the record page offers Edit.
             *
             * What stays are the acts that have no URL at all.
             */
            ->recordActions([
                ActionGroup::make('Status')->actions([
                    /*
                     * AUTHORISED AS `resolve`, NOT `update`, which is the whole
                     * reason the policy has a method of that name. They are the
                     * same permission today and they are not the same act, and
                     * writing it as `update` here would erase the distinction
                     * at the only place anybody reads it.
                     */
                    RecordAction::make('resolve', 'Mark resolved')
                        ->icon('check')->color('success')
                        ->authorize('resolve')
                        ->mutate(['status' => Ticket::RESOLVED])
                        ->confirm('Mark this ticket resolved? It stops accepting replies.')
                        ->visible(fn (array $row): bool => ($row['status'] ?? null) !== Ticket::RESOLVED),

                    RecordAction::make('waiting', 'Waiting on customer')
                        ->icon('clock')
                        ->authorize('resolve')
                        ->mutate(['status' => Ticket::PENDING])
                        ->visible(fn (array $row): bool => ($row['status'] ?? null) === Ticket::OPEN),

                    // Reopening is an operator act too - which is what stops a
                    // late reply from quietly reviving a closed ticket.
                    RecordAction::make('reopen', 'Reopen')
                        ->icon('refresh')->color('warning')
                        ->authorize('resolve')
                        ->mutate(['status' => Ticket::OPEN])
                        ->visible(fn (array $row): bool => ($row['status'] ?? null) === Ticket::RESOLVED),
                ]),
            ])
            ->keyColumn('tickets.id')
            ->alsoSelect(['tickets.id', 'tickets.status'])
            /*
             * OLDEST FIRST, and this is the one sort default in the panel that
             * is not `created_at desc`. A queue read newest-first buries the
             * person who has been waiting longest under everybody who complained
             * this morning, which is precisely the wrong end to serve.
             */
            ->defaultSort('created_at', 'asc')
            ->perPage(25);
    }
}
