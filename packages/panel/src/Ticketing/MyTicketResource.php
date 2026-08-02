<?php

declare(strict_types=1);

namespace PanelKit\Panel\Ticketing;

use PanelKit\Panel\Models\Ticket;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Table;

/**
 * THE OTHER END - what the person who asked sees, roadmap 6.3.
 *
 * Same model, same policy, same table. Everything that differs about this
 * screen follows from one fact: the reader is the OPENER, not the operator.
 *
 * IT LISTS ONLY THEIR OWN, and the constraint is on the table rather than
 * anywhere else, so it applies to the rows, the counts, the tabs and the
 * export identically - see `constrain()` versus `query()` on `Table`. A
 * predicate written as a filter default would be one a crafted request could
 * clear.
 *
 * IT GRANTS NOTHING, which is why `actions()` is empty. Every other resource
 * contributes seven ability names to the permission matrix; this one
 * contributes none, because there is no such thing as a role that lets you
 * read your own support requests - you read them because you opened them. An
 * ability like `view_any_my_tickets` would be grantable, would mean nothing,
 * and would teach whoever administers the matrix that it lies.
 *
 * NO ASSIGNMENT, NO STATUS, NO RESOLVE. The opener says what is wrong and adds
 * to the conversation; whether the problem is fixed is the operator's
 * judgement. `TicketPolicy` refuses all three no matter how the request
 * arrives, so their absence here is the screen agreeing with the policy rather
 * than the place it is enforced.
 */
final class MyTicketResource extends Resource
{
    protected static string $model = Ticket::class;

    protected static string $icon = 'mail';

    protected static ?string $purpose = 'Everything you have asked us, and where each one has got to.';

    protected static ?int $sort = 30;

    /**
     * A DISTINCT KEY, because the operator portal already has a `tickets`.
     *
     * Keys are unique across the installation, not per panel - the key is the
     * URL segment, the schema-cache component and the audit label - so the two
     * ends of one conversation cannot both be called `tickets`.
     */
    public static function key(): string
    {
        return 'my-tickets';
    }

    public static function label(): string
    {
        return 'Support request';
    }

    public static function pluralLabel(): string
    {
        return 'Support';
    }

    /**
     * NO ABILITIES IN THE MATRIX. See the class note: this screen is entered
     * by being the person who asked, and an ability nobody needs to hold is
     * one that can only mislead whoever administers roles.
     *
     * @return list<string>
     */
    public static function actions(): array
    {
        return [];
    }

    /**
     * THE ONE OVERRIDE, and it is the hinge of the whole two-sided design.
     *
     * `viewAny` normally asks "may you list this resource", which for tickets
     * means `view_any_tickets` - the operator's grant, and exactly what the
     * opener does not have. Asking it here would leave a subscriber unable to
     * open a screen showing nothing but their own requests, which is the
     * portal being useless in the name of security.
     *
     * So this side asks `viewOwn` instead: are you signed into an
     * organisation. What that then SHOWS is settled by the table's
     * `constrain()` below, which is the honest division - the gate says you
     * may look, the query decides at what.
     *
     * Every other ability passes straight through, so a record request still
     * answers to the same `TicketPolicy` the operator's screen does.
     */
    public static function can(string $ability, Model|string|null $record = null): bool
    {
        if ($ability === 'viewAny') {
            return parent::can('viewOwn');
        }

        return parent::can($ability, $record);
    }

    /**
     * NOT AN API SURFACE, and this one is a safety property rather than a
     * preference.
     *
     * `documented()` gates the public API as well as the reference, and this
     * resource is the wrong thing to expose through it twice over. It is a
     * VIEW of a table `tickets` already exposes - two endpoints over one
     * table, differing only in a WHERE clause, is an ambiguity nobody
     * integrating should have to resolve. And it contributes no ability names
     * (see `actions()`), so a token could not be scoped to it in the terms
     * every other endpoint is scoped in: the narrowing half of "the token
     * narrows, the policy decides" would have nothing to say.
     *
     * An integration that wants somebody's tickets asks `tickets` and filters.
     */
    public static function documented(): bool
    {
        return false;
    }

    /**
     * NO IMPORT BUTTON. Opening a ticket is what this screen is for, so
     * `create` is true - and Import used to follow `create`, which put an
     * "upload a CSV" control on a subscriber's list of their own complaints.
     * Nothing would have broken; it is simply a control that makes no sense
     * here, which is what DESIGN_RULES rule 5 is about. See
     * `Resource::importable()` for why the two questions were separated.
     */
    public static function importable(): bool
    {
        return false;
    }

    public static function form(Form $form): Form
    {
        return $form->columns(1)->schema([
            TextField::make('subject')->label('What is wrong?')->required(),

            /*
             * PRIORITY IS THE OPENER'S, and that is a deliberate choice rather
             * than an oversight. Somebody who has been offline for two days
             * knows that better than a queue does, and an operator can change
             * it afterwards. The alternative - a fixed 'normal' on everything -
             * makes the field useless on both ends.
             */
            SelectField::make('priority')->label('How urgent is it?')->required()
                ->options([
                    'low' => 'Whenever you can',
                    'normal' => 'Soon',
                    'urgent' => 'I am offline right now',
                ]),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('subject')->from('tickets.subject')
                    ->sortable()->searchable()->locked(),

                /*
                 * THE OPENER'S SIDE OF THE SAME IDEA, and it starts from the
                 * opposite place: a ticket you just raised is not "new" to
                 * you. Only a REPLY makes it unread here, which is why this
                 * requires `last_reply_at` where the desk's version does not.
                 */
                BadgeColumn::make('unread')->label('')->fromRaw(
                    '(case when tickets.last_reply_at is not null'
                    .' and (tickets.opener_read_at is null'
                    .' or tickets.last_reply_at >= tickets.opener_read_at)'
                    ." then 'Reply' else '' end)"
                )->colors(['Reply' => 'success']),

                BadgeColumn::make('status')->from('tickets.status')->colors([
                    Ticket::OPEN => 'warning',
                    Ticket::PENDING => 'neutral',
                    Ticket::RESOLVED => 'success',
                ]),

                DateColumn::make('created_at')->from('tickets.created_at')
                    ->label('Asked')->sortable()->withTime(),
                DateColumn::make('resolved_at')->from('tickets.resolved_at')
                    ->label('Answered')->sortable()->withTime()->muted(),
            ])
            /*
             * THE WHOLE DIFFERENCE, IN ONE LINE. `constrain()` rather than
             * `query()` because this narrows which rows the table is ABOUT: it
             * has to apply to the counts and the tab totals as well as the
             * page, and a predicate hung on `query()` is silently absent from
             * every total - which would show somebody a count of the
             * organisation's tickets above a list of their own.
             */
            ->constrain(fn ($q) => $q->where('tickets.opened_by', Auth::id()))
            ->tabs('tickets.status', [Ticket::OPEN, Ticket::PENDING, Ticket::RESOLVED])
            /*
             * SO A ROW CLICK OPENS THE CONVERSATION, which is the only reason
             * a subscriber opens this screen at all. `baseUrl()` carries this
             * portal's own path - see `Resource::baseUrl()`.
             */
            ->recordActions([
                RecordAction::make('view', 'View')
                    ->icon('eye')->color('primary')->authorize('view')
                    ->link(fn (array $row): string => self::baseUrl((string) $row['id'])),
            ])
            /*
             * CLICKING A ROW OPENS THE TICKET, which is the only thing anybody
             * wants from a queue row - the record page is where the
             * conversation is, and the conversation is the ticket. It has to
             * be asked for: a table whose records are edited in place would be
             * ruined by a click that navigated away mid-edit, so the default
             * is off and this says otherwise.
             */
            ->rowClick()
            ->keyColumn('tickets.id')
            ->alsoSelect(['tickets.id', 'tickets.status'])
            ->defaultSort('created_at', 'desc')
            ->perPage(25);
    }
}
