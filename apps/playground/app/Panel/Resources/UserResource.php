<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\Role;
use App\Models\Scopes\TenantScope;
use App\Models\User;
use PanelKit\Panel\Forms\Fields\MultiSelectField;
use PanelKit\Panel\Forms\Fields\PasswordField;
use PanelKit\Panel\Forms\Fields\SelectField;
use PanelKit\Panel\Forms\Fields\TextField;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Actions\RecordAction;
use PanelKit\Panel\Auth\Impersonation;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Table;

/**
 * The colleagues who can sign in, and which role each one holds.
 *
 * WITHOUT THIS SCREEN THE PERMISSION WORK IS INERT. Roles existed, the matrix
 * existed, and there was no way to give anybody a role - which made the whole
 * feature a configuration surface with nothing configured. Assigning a role is
 * the point at which permissions become real, so it is the field this resource
 * exists for.
 *
 * IT IS ONE PHP FILE, which is the kit's central claim and worth exercising on a
 * model that is genuinely awkward: a hashed password, a relation to a
 * tenant-scoped table, and a record you can lock yourself out with. If those
 * needed Vue, the claim would be false.
 */
final class UserResource extends Resource
{
    protected static string $model = User::class;

    protected static string $icon = 'users';

    protected static ?string $group = 'Organisation';

    protected static ?int $sort = 10;

    /**
     * NOT IN THE SIDEBAR, because it was the same screen twice.
     *
     * The account menu has held User management since roles and permissions
     * arrived, and this resource put a second "Users" entry in the resource
     * column. Two entry points to one subject is worse than either alone: the
     * two screens are not identical - the settings one has the roles and
     * invitations tabs - so whichever a person happened to click became their
     * idea of what the panel can do, and the half they never opened looked
     * missing.
     *
     * THE RESOURCE STAYS. Its routes, its policy, its abilities and its API
     * endpoints are all still here and still used - by the command palette, by
     * record links from other screens, and by integrations. Hiding is a
     * navigation decision and nothing else.
     */
    public static function showsInNavigation(): bool
    {
        return false;
    }

    /**
     * The driver's "join these rows into one string" function.
     *
     * THE THREE DATABASES SPELL IT DIFFERENTLY and none of them accepts the
     * others' syntax, so a single hardcoded expression works on whichever one
     * the author happened to run and is a SQL error on the rest - discovered by
     * whoever deploys to Postgres, not by whoever wrote it.
     */
    private static function groupConcat(string $column): string
    {
        return match (\Illuminate\Support\Facades\DB::getDriverName()) {
            'pgsql' => "string_agg({$column}, ', ')",
            'mysql', 'mariadb' => "group_concat({$column} separator ', ')",
            default => "group_concat({$column}, ', ')",
        };
    }

    public static function table(Table $table): Table
    {
        return $table
            /*
             * NO ROLE FILTER FOR NOW. Filtering a many-to-many needs an EXISTS
             * subquery rather than a column comparison, and the filter builder
             * takes a column. Left out rather than shipped filtering on
             * something that no longer exists - a filter that silently matches
             * nothing is worse than an absent one.
             */
            /*
             * SCOPED HERE RATHER THAN BY A GLOBAL SCOPE ON THE MODEL, and the
             * reason is authentication.
             *
             * Every other tenant-owned model carries `#[ScopedBy(TenantScope)]`,
             * which DENIES when no tenant is resolved. That is right for
             * subscribers and wrong for users: sign-in looks a person up by
             * email BEFORE any tenant exists, so the scope would deny the lookup
             * and nobody could log in. `users.email` is globally unique for the
             * same reason - identity resolves first, tenancy second.
             *
             * So `User` stays globally queryable for the auth path and every
             * PANEL query is constrained here. This is not theoretical: on the
             * first load, before this existed, the list showed all seven users
             * across five tenants.
             *
             * `constrain()` rather than `query()` because a predicate in the
             * join closure is dropped from counts - a bug this project shipped
             * once already, reporting every session ever recorded as the live
             * total.
             */
            ->constrain(function ($query): void {
                $key = TenantScope::currentTenantId();

                // Null is DENY, never "all tenants" - the same contract the
                // global scope keeps.
                $key === null
                    ? $query->whereRaw('1 = 0')
                    : $query->where('users.tenant_id', $key);
            })
            /*
             * QUALIFIED THROUGHOUT, because the join puts `id`, `name` and
             * `created_at` on both tables. `keyColumn` is the one easy to miss:
             * it is the keyset tiebreaker in every ORDER BY, so an unqualified
             * `id` makes the whole list a SQL error the moment a join exists.
             */
            ->keyColumn('users.id')
            /*
             * THE ROLE NAMES, NOT A COUNT.
             *
             * "1" in a Roles column answers the wrong question and reads like an
             * id. What somebody scanning this list wants is WHICH role, and with
             * several roles now possible per person the useful cell is the list.
             *
             * IT RIDES IN `alsoSelect`, WITH A BARE ALIAS, and both halves of
             * that were bugs before they were decisions. A `->query()` callback
             * adding to the select is discarded - the list sets its own
             * `select($this->select)` afterwards. And `addSelect(['x' => $sub])`
             * compiles the alias QUOTED, so this list, which hands back raw rows
             * rather than models, received a column literally named `"x"` and
             * rendered an empty cell with no error anywhere.
             *
             * A CORRELATED SUBQUERY RATHER THAN A JOIN, because a join to a
             * many-to-many multiplies the rows: one person with three roles
             * becomes three people in the table, and the pagination silently
             * disagrees with the count.
             */
            ->alsoSelect([
                'users.id',
                \Illuminate\Support\Facades\DB::raw(
                    '(select '.self::groupConcat('roles.name')
                    .' from model_has_roles'
                    .' join roles on roles.id = model_has_roles.role_id'
                    .' where model_has_roles.model_id = users.id'
                    .' and model_has_roles.model_type = '
                    .\Illuminate\Support\Facades\DB::escape(User::class)
                    .') as role_names'
                ),
            ])
            ->columns([
                TextColumn::make('name')->from('users.name')->sortAs('users.name')
                    ->sortable()->searchable()->locked(),

                TextColumn::make('email')->from('users.email')->sortAs('users.email')
                    ->sortable()->searchable()->copyable(),

                /*
                 * NO ROLE IS A STATE WORTH SEEING, and it is why this is a badge
                 * rather than text. Such a user can sign in and do nothing at
                 * all, and every page renders empty for them - which reads as a
                 * broken panel rather than as a missing assignment.
                 */
                TextColumn::make('role_names')->label('Roles'),

                DateColumn::make('email_verified_at')->from('users.email_verified_at')
                    ->sortAs('users.email_verified_at')->label('Verified')->sortable(),

                DateColumn::make('created_at')->from('users.created_at')
                    ->sortAs('users.created_at')->label('Joined')->sortable(),
            ])
            /*
             * NO ROLE FILTER FOR NOW. Filtering a many-to-many needs an EXISTS
             * subquery rather than a column comparison, and the filter builder
             * takes a column. Left out rather than shipped filtering on
             * something that no longer exists - a filter that silently matches
             * nothing is worse than an absent one.
             */
            /*
             * SCOPED HERE RATHER THAN BY A GLOBAL SCOPE ON THE MODEL, and the
             * reason is authentication.
             *
             * Every other tenant-owned model carries `#[ScopedBy(TenantScope)]`,
             * which DENIES when no tenant is resolved. That is right for
             * subscribers and wrong for users: sign-in looks a person up by
             * email BEFORE any tenant exists, so the scope would deny the lookup
             * and nobody could log in. `users.email` is globally unique for the
             * same reason - identity resolves first, tenancy second.
             *
             * So `User` stays globally queryable for the auth path and every
             * PANEL query is constrained here. This is not theoretical: on the
             * first load, before this existed, the list showed all seven users
             * across five tenants.
             *
             * `constrain()` rather than `query()` because a predicate in the
             * join closure is dropped from counts - a bug this project shipped
             * once already, reporting every session ever recorded as the live
             * total.
             */
            ->constrain(function ($query): void {
                $key = TenantScope::currentTenantId();

                // Null is DENY, never "all tenants" - the same contract the
                // global scope keeps.
                $key === null
                    ? $query->whereRaw('1 = 0')
                    : $query->where('users.tenant_id', $key);
            })
            /*
             * IMPERSONATION IS OFFERED ONLY WHERE IT WOULD SUCCEED.
             *
             * `visible()` asks the same object the endpoint asks - see
             * `Impersonation::allows()` - rather than re-deriving the rules
             * here. A second copy of "may I become this person" is how a menu
             * and a server end up disagreeing, and the disagreement always
             * favours the menu, which is the wrong direction.
             *
             * It is presentation only: hiding the entry is a courtesy, and the
             * controller refuses regardless (§9 item 3).
             */
            ->recordActions([
                /*
                 * VIEW AND EDIT WERE MISSING, and that was a real gap rather
                 * than a decision: the actions column was wired on the users tab
                 * and this list declared only `impersonate`, so the one screen
                 * for managing people offered no way to open or change any of
                 * them. Delete is added by the page as a synthetic entry (see
                 * `ResourceIndex`), because it opens a confirmation rather than
                 * calling the action endpoint.
                 */
                RecordAction::make('view', 'View')
                    ->icon('eye')
                    ->color('primary')
                    ->authorize('view')
                    ->link(fn (array $row): string => '/users/'.$row['id']),

                RecordAction::make('edit', 'Edit')
                    ->icon('pencil')
                    ->color('primary')
                    ->authorize('update')
                    ->link(fn (array $row): string => '/users/'.$row['id'].'/edit'),

                RecordAction::make('impersonate', 'Impersonate')
                    ->icon('user-check')
                    ->color('warning')
                    ->authorize('view')
                    ->confirm('Everything you do next is recorded as this person. Continue?')
                    ->visible(function (array $row): bool {
                        $actor = auth()->user();
                        $target = $actor === null ? null : User::query()->find($row['id'] ?? null);

                        return $actor !== null
                            && $target !== null
                            && app(Impersonation::class)->allows($actor, $target);
                    })
                    /*
                     * THE ACTION ENDPOINT DOES THE SWAP ITSELF rather than
                     * pointing at the controller, because a record action is a
                     * POST with a session and that is all `start()` needs. A
                     * `link()` would have to be a GET, and a GET that changes
                     * who you are signed in as is exactly the kind of thing a
                     * prefetcher or a crawler triggers by accident.
                     *
                     * A refusal becomes a validation error rather than a 500 -
                     * "that account can do things you cannot" is information for
                     * the operator, not a crash.
                     */
                    ->handle(function (User $user): void {
                        try {
                            app(Impersonation::class)->start(auth()->user(), $user);
                        } catch (\RuntimeException $e) {
                            throw \Illuminate\Validation\ValidationException::withMessages([
                                'impersonate' => $e->getMessage(),
                            ]);
                        }
                    }),

                /*
                 * DEMAND A NEW PASSWORD ON THE NEXT SIGN-IN.
                 *
                 * THIS IS WHY `must_change_password` EXISTS AS ITS OWN COLUMN.
                 * The age policy is a rule about everybody; this is a decision
                 * about one account - a reset handed over in person, a device
                 * left somewhere, a colleague who has left. It applies whatever
                 * the age policy says, and expressing it by backdating the
                 * change timestamp would work and would put a lie in a column
                 * other code reads.
                 *
                 * IT DOES NOT CHANGE THE PASSWORD, deliberately. Whoever holds
                 * this cannot use it to take an account over: the person still
                 * has to know their current password to set a new one, so the
                 * worst an operator can do with it is inconvenience somebody.
                 */
                RecordAction::make('require-password-change', 'Require a new password')
                    ->icon('key')
                    ->color('warning')
                    ->authorize('update')
                    ->confirm('They will be asked to choose a new password next time they sign in. Continue?')
                    ->visible(fn (array $row): bool => (int) ($row['id'] ?? 0) !== (int) auth()->id())
                    ->handle(function (User $user): void {
                        $user->forceFill(['must_change_password' => true])->save();
                    }),
            ])
            ->defaultSort('users.created_at', 'desc');
    }

    public static function form(Form $form): Form
    {
        return $form->schema([
            TextField::make('name')->required()->placeholder('Grace Wanjiru'),

            TextField::make('email')->label('Email address')->required()
                ->placeholder('grace@example.com'),

            /*
             * OPTIONS ARE SCOPED, and that is load-bearing rather than tidy.
             *
             * `Role` carries the tenant global scope, so this only offers roles
             * belonging to the current organisation - assigning another tenant's
             * role id would otherwise be privilege escalation by pointing at a
             * row you do not own. `User::hasPermission()` refuses such a role
             * anyway; this stops it being offered, which is the difference
             * between a guard and a trap.
             */
            /*
             * SEVERAL ROLES, which is the whole reason for moving to Spatie.
             * "Grace is Support and Billing" was not expressible before without
             * inventing a combined role for every combination.
             */
            /*
             * AT LEAST ONE ROLE IS REQUIRED, in the form as well as in the head
             * of whoever fills it in.
             *
             * A user with no role can sign in and every page renders empty -
             * which reads as a broken panel rather than as an unfinished
             * account, and the person it happens to reports it as a bug. The
             * state is legal in the database (the pivot simply has no rows) and
             * `hasPermission` correctly denies everything, so nothing errors;
             * it just produces somebody who cannot work and does not know why.
             *
             * Required at the form rather than the column, because a NOT NULL
             * cannot express "at least one row in a pivot" - and the server
             * validates it regardless of what the client sends.
             */
            MultiSelectField::make('roles')
                ->label('Roles')
                ->required()
                ->options(fn (): array => Role::query()->orderBy('name')->pluck('name', 'name')->all())
                ->help('Everything this person may do comes from their roles. Pick at least one.'),

            /*
             * BLANK MEANS UNCHANGED, and the field enforces that itself - see
             * PasswordField. A required password on an edit form turns every
             * unrelated change, like fixing a typo in a name, into a forced
             * password reset.
             */
            PasswordField::make('password')
                ->label('Password')
                ->help('Leave blank to keep the current password.'),
        ]);
    }
}
