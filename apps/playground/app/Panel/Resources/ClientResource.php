<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Client;
use Illuminate\Contracts\Database\Eloquent\Builder;
use App\Models\Plan;
use PanelKit\Panel\Forms\Fields\DateField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Schema\Section;
use PanelKit\Panel\Schema\Tab;
use PanelKit\Panel\Schema\Tabs;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
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
                        SelectField::make('plan_id')->label('Plan')->options(
                            fn (): array => Plan::query()->orderBy('name')->pluck('name', 'id')->all()
                        ),
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
                SelectFilter::make('status')->column('clients.status')
                    ->options(['active', 'expired', 'suspended']),
                SelectFilter::make('planType')->label('Plan type')->column('clients.plan_type')
                    ->options(['pppoe', 'hotspot', 'static']),
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
