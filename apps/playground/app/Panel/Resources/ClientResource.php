<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Client;
use Illuminate\Contracts\Database\Eloquent\Builder;
use App\Models\Plan;
use Illuminate\Database\Eloquent\Collection;
use PanelKit\Panel\Actions\BulkAction;
use PanelKit\Panel\Forms\Fields\DateField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Rules\ExistsInScope;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Schema\Tab;
use PanelKit\Panel\Schema\Tabs;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\DateRangeFilter;
use PanelKit\Panel\Tables\Filters\MultiSelectFilter;
use PanelKit\Panel\Tables\Filters\SelectFilter;
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
