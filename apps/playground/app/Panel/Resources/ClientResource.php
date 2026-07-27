<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Client;
use App\Models\ClientSession;
use Illuminate\Contracts\Database\Eloquent\Builder;
use App\Models\Plan;
use Illuminate\Database\Eloquent\Collection;
use PanelKit\Panel\Actions\BulkAction;
use PanelKit\Panel\Forms\Fields\DateField;
use PanelKit\Panel\Forms\Fields\MultiSelectField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Rules\ExistsInScope;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Schema\Tab;
use PanelKit\Panel\Schema\Tabs;
use PanelKit\Panel\Resources\RelationManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\DateRangeFilter;
use PanelKit\Panel\Tables\Filters\MultiSelectFilter;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Filters\TrashedFilter;
use PanelKit\Panel\Tables\Table;

/**
 * PHASE 4 — the whole Clients screen. No Vue.
 *
 * Colours are SEMANTIC (`success`, `danger`), never CSS classes. Vue decides
 * what those look like; a class string authored here would be invisible to the
 * CSS scanner and silently purged (antipatterns §6.1).
 */
final class ClientResource extends Resource
{
    protected static string $model = Client::class;

    protected static string $icon = 'users';

    protected static ?string $group = 'Subscribers';

    protected static ?int $sort = 10;

    /**
     * The write form.
     *
     * `tenant_id` is deliberately absent and cannot be added: it is set from
     * the request context, and a form field for it would be a way to move a
     * record into another tenant. sanitize() drops anything not listed here, so
     * mass assignment is closed by construction rather than by remembering a
     * $fillable list.
     */
    public static function form(Form $form): Form
    {
        return $form->schema([
            Tabs::make()->tabs([
                Tab::make('Identity')->schema([
                    Section::make('Contact')->columns(2)->schema([
                        TextField::make('name')->required()->placeholder('Full name'),
                        TextField::make('phone')->required()->as('tel')->placeholder('+2547...'),
                    ]),
                    Section::make('Access')->description('How this subscriber authenticates.')
                        ->columns(2)->schema([
                            TextField::make('access_code')->required()->max(32)
                                ->help('Unique within your organisation.'),
                            SelectField::make('status')->required()->options([
                                'active' => 'Active',
                                'expired' => 'Expired',
                                'suspended' => 'Suspended',
                            ]),
                        ]),
                ]),

                Tab::make('Service')->schema([
                    Section::make('Plan')->columns(2)->schema([
                        SelectField::make('plan_type')->label('Plan type')->required()->options([
                            'pppoe' => 'PPPoE',
                            'hotspot' => 'Hotspot',
                            'static' => 'Static',
                        ]),
                        // A CLOSURE. Resolved when the form data is assembled,
                        // never while building the cached schema, and
                        // tenant-scoped by the model's global scope.
                        // SEARCHABLE. Plans is small today, but a picker that
                        // renders every option inline stops working the moment
                        // it points at anything that grows - and `exists` is a
                        // stronger check than an in: list built from whatever
                        // the last search happened to return.
                        SelectField::make('plan_id')->label('Plan')
                            ->searchable(fn (string $term): array => Plan::query()
                                ->when($term !== '', fn ($q) => $q->where('name', 'like', $term . '%'))
                                ->orderBy('name')->limit(25)->pluck('name', 'id')->all())
                            // NOT exists:plans,id — that queries the raw table
                            // and confirms another tenant's row. This asks the
                            // model, so the tenant global scope applies.
                            ->rule(ExistsInScope::of(Plan::class)),
                    ]),
                    Section::make('Billing')->collapsible(collapsed: true)->schema([
                        DateField::make('expiry_date')->label('Expires'),
                        // Several values from a short fixed list — the option
                        // list is also the validation rule, and it is enforced
                        // on each MEMBER rather than on the array.
                        MultiSelectField::make('reminder_days')->label('Reminder times')
                            ->placeholder('No reminders')
                            ->help('When to warn this subscriber before their subscription lapses.')
                            ->options([
                                0 => 'At expiry',
                                1 => '1 day before',
                                2 => '2 days before',
                                3 => '3 days before',
                                4 => '4 days before',
                                5 => '5 days before',
                                7 => '7 days before',
                                14 => '14 days before',
                                30 => '30 days before',
                            ]),
                    ]),
                ]),
            ]),
        ]);
    }

    /**
     * The VIEW page layout. Leaves are the same Column objects the table uses,
     * so a value cannot render one way in the list and another here.
     */
    public static function infolist(): array
    {
        return [
            Tabs::make()->tabs([
                Tab::make('Overview')->schema([
                    Section::make('Identity')->columns(2)->schema([
                        TextColumn::make('name'),
                        TextColumn::make('phone'),
                        TextColumn::make('access_code')->label('Access code')->mono(),
                        BadgeColumn::make('status')->colors([
                            'active' => 'success',
                            'expired' => 'danger',
                            'suspended' => 'warning',
                        ]),
                    ]),
                ]),

                Tab::make('Service')->schema([
                    Section::make('Plan')->columns(2)->schema([
                        TextColumn::make('plan_name')->label('Plan'),
                        TextColumn::make('plan_type')->label('Type')->transform('upper'),
                        DateColumn::make('expiry_date')->label('Expires'),
                        DateColumn::make('created_at')->label('Created')->withTime(),
                    ]),
                ]),
            ]),
        ];
    }

    /**
     * A client's sessions, on the client's own page.
     *
     * FETCHED ON DEMAND, NOT EAGER-LOADED. At 5M sessions a busy client has
     * thousands, and `$client->load('sessions')` would read every one to render
     * the ten a person looks at. This runs the same keyset-paginated ListQuery
     * the main tables use, bounded to a page.
     *
     * @return list<RelationManager>
     */
    public static function relations(): array
    {
        return [
            RelationManager::make('sessions', 'Sessions')
                ->related(ClientSession::class, 'client_sessions.client_id')
                ->icon('activity')
                ->table(fn (Table $table): Table => $table
                    ->columns([
                        DateColumn::make('started_at')->label('Started')->withTime()->sortable(),
                        DateColumn::make('ended_at')->label('Ended')->withTime(),
                        BadgeColumn::make('status')->colors([
                            'online' => 'success',
                            'offline' => 'neutral',
                        ]),
                        TextColumn::make('ip_address')->label('IP')->mono(),
                        TextColumn::make('bytes_in')->label('In')->muted(),
                        TextColumn::make('bytes_out')->label('Out')->muted(),
                    ])
                    ->filters([
                        SelectFilter::make('status')->column('client_sessions.status')
                            ->options(['online', 'offline']),
                    ])
                    ->keyColumn('client_sessions.id')
                    ->alsoSelect(['client_sessions.id'])
                    ->defaultSort('started_at', 'desc')),
        ];
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')->from('clients.name')->sortable()->searchable()->locked(),
                TextColumn::make('access_code')->from('clients.access_code')->searchable()->copyable()->mono(),
                TextColumn::make('phone')->from('clients.phone')->searchable()->copyable()->muted(),
                /*
                 | A BADGE, not an editable select.
                 |
                 | SelectColumn exists and works, but putting it on `status` put
                 | a form control in every row of the busiest column in the
                 | panel: a list is a READING surface first, and a wall of
                 | dropdowns is harder to scan than a wall of coloured badges —
                 | the value stops being something you take in at a glance and
                 | becomes something you have to read out of a widget.
                 |
                 | Changing many statuses at once is what the bulk actions are
                 | for, and changing one is what the row menu is for.
                 */
                BadgeColumn::make('status')->from('clients.status')->sortable()->colors([
                    'active' => 'success',
                    'expired' => 'danger',
                    'suspended' => 'warning',
                ]),
                TextColumn::make('plan_name')->from('plans.name as plan_name')->label('Plan'),
                TextColumn::make('plan_type')->from('clients.plan_type')->label('Type')->transform('upper')->muted(),
                DateColumn::make('expiry_date')->from('clients.expiry_date')->label('Expires')->sortable(),
                DateColumn::make('created_at')->from('clients.created_at')->sortable()->muted(),
            ])
            ->filters([
                // Multiple at once: "everything that is not healthy" was not
                // expressible with a single-select filter.
                MultiSelectFilter::make('status')->column('clients.status')
                    ->options(['active', 'expired', 'suspended']),
                SelectFilter::make('planType')->label('Plan type')->column('clients.plan_type')
                    ->options(['pppoe', 'hotspot', 'static']),
                // The question a billing panel is actually asked.
                DateRangeFilter::make('expiring')->label('Expiry')->column('clients.expiry_date'),
                // Live by default; deleted records are reachable but never the
                // default view.
                TrashedFilter::make('trashed')->label('Deleted')->deletedColumn('clients.deleted_at'),
            ])
            /*
             | Bulk actions.
             |
             | The MUTATION IS DECLARED HERE, server-side. The browser posts
             | `{action: 'suspend'}` and nothing else — it cannot describe an
             | attribute set, so this endpoint can never become a way to write
             | an arbitrary column on rows the operator merely happens to be
             | able to see.
             |
             | Each one is a single UPDATE per chunk, so suspending 60,000
             | expired clients is sixty queries rather than sixty thousand.
             */
            ->bulkActions([
                BulkAction::make('activate', 'Activate')
                    ->icon('check')
                    ->authorize('update')
                    ->mutate(['status' => 'active']),

                BulkAction::make('suspend', 'Suspend')
                    ->icon('pause')
                    ->authorize('update')
                    ->requiresConfirmation('Suspend the selected clients? They will lose access immediately.')
                    ->mutate(['status' => 'suspended']),

                BulkAction::make('restore', 'Restore')
                    ->icon('undo')
                    ->authorize('restore')
                    // A soft delete is a column, so restoring many is one
                    // UPDATE per chunk like any other bulk mutation.
                    ->mutate(['deleted_at' => null]),

                BulkAction::make('delete', 'Delete')
                    ->icon('trash')
                    ->destructive()
                    ->authorize('delete')
                    // A handler rather than a mutation: deleting through the
                    // models fires the events any listener depends on, which a
                    // bare DELETE would skip silently.
                    ->handle(fn (Collection $records) => $records->each->delete()),
            ])
            // ONE grouped query for every tab count (addendum C1).
            ->tabs('clients.status', ['active', 'expired', 'suspended'])
            // A closure, never executed while building the schema.
            ->query(fn (Builder $q) => $q->leftJoin('plans', 'plans.id', '=', 'clients.plan_id'))
            ->keyColumn('clients.id')
            ->alsoSelect(['clients.id'])
            ->defaultSort('created_at', 'desc');
    }
}
