<?php

declare(strict_types=1);

namespace App\Panel\Resources;

use App\Models\AuditEntry;
use App\Models\User;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;
use PanelKit\Panel\Tables\Columns\BadgeColumn;
use PanelKit\Panel\Tables\Columns\DateColumn;
use PanelKit\Panel\Tables\Columns\TextColumn;
use PanelKit\Panel\Tables\Filters\DateRangeFilter;
use PanelKit\Panel\Tables\Filters\SelectFilter;
use PanelKit\Panel\Tables\Table;

/**
 * Everything that happened in this organisation.
 *
 * THE DATA EXISTED AND NOBODY COULD SEE IT. `AuditRecorder` has been writing an
 * entry for every change - actor, record, event, diff, IP, time - since the
 * audit trail was built, and the only way to read it was per record, from a
 * panel on that record's own page. So the question an audit trail is actually
 * for - "what happened here yesterday", "what did this person do" - had no
 * screen at all.
 *
 * READ-ONLY, DECLARED AS SUCH. `actions()` narrows this resource to viewing, so
 * `create_activity` and `delete_activity` never appear in the permission matrix.
 * An audit entry that can be edited is not evidence, and an ability that can be
 * granted but does nothing teaches people the matrix lies.
 *
 * SCOPED LIKE EVERYTHING ELSE, and it matters more here than almost anywhere:
 * a trail describes who works at an organisation, what they touch and when they
 * are at their desk. It is more revealing than most of the data it records.
 */
final class ActivityResource extends Resource
{
    protected static string $model = AuditEntry::class;

    protected static string $icon = 'activity';

    protected static ?string $group = 'Organisation';

    protected static ?int $sort = 90;

    /**
     * IN THE ACCOUNT MENU, NOT THE SIDEBAR.
     *
     * The sidebar is the list of things this panel ADMINISTERS - subscribers,
     * routers, plans. A trail of what the panel did to itself is not one of
     * them; it is the same kind of thing as the logs and the backups, which
     * have always been in the account menu, and it was sitting in Organisation
     * between two screens that manage people.
     *
     * Routable, and linked from the menu - see `UserMenuContent.vue`.
     */
    public static function showsInNavigation(): bool
    {
        return false;
    }

    /**
     * ABSENT FROM THE API REFERENCE, on purpose.
     *
     * This is an internal record of what the panel did to itself: read-only,
     * rendered on exactly one screen, and of no use to anybody integrating from
     * outside. Its endpoints exist and work; documenting them only lengthened
     * the reference somebody is reading to find the endpoint they actually
     * came for.
     */
    public static function documented(): bool
    {
        return false;
    }

    /** Nothing writes here - see the class note. */
    public static function actions(): array
    {
        return ['viewAny', 'view'];
    }

    public static function label(): string
    {
        return 'Activity';
    }

    public static function pluralLabel(): string
    {
        return 'Activity';
    }

    /**
     * There is no form, and that is the point.
     *
     * The base class requires one, so this is deliberately empty rather than
     * absent - an empty schema produces no fields, and the policy refuses
     * `create` and `update` regardless.
     */
    public static function form(Form $form): Form
    {
        return $form->schema([]);
    }

    /**
     * `App\Models\Client` => `Client`, for every registered resource.
     *
     * @return array<string, string>
     */
    private static function recordLabels(): array
    {
        $out = [];

        foreach (app(PanelManager::class)->resources() as $class) {
            $out[$class::model()] = $class::label();
        }

        return $out;
    }

    public static function table(Table $table): Table
    {
        return $table
            ->model(AuditEntry::class)
            /*
             * NEWEST FIRST, ALWAYS THE DEFAULT. A log read from the oldest end
             * is a log nobody reads: the question is almost always "what just
             * happened", and making people paginate to the end to find out is
             * how a feature gets called useless.
             */
            ->defaultSort('audit_entries.created_at', 'desc')
            ->keyColumn('audit_entries.id')
            ->columns([
                DateColumn::make('created_at')->from('audit_entries.created_at')
                    ->sortAs('audit_entries.created_at')
                    ->label('When')->sortable()->locked(),

                /*
                 * THE SNAPSHOT NAME, not a join to `users`.
                 *
                 * `actor_name` was written at the time of the change, so a
                 * rename does not rewrite history and a departed colleague is
                 * still named. A join would also put this list's cost back on
                 * the users table for no gain - see the model's own note.
                 */
                TextColumn::make('actor_name')->from('audit_entries.actor_name')
                    ->sortAs('audit_entries.actor_name')
                    ->label('Who')->sortable()->searchable(),

                BadgeColumn::make('event')->from('audit_entries.event')
                    ->sortAs('audit_entries.event')
                    ->label('What')->sortable(),

                /*
                 * THE CLASS NAME IS TRANSLATED, not shown raw.
                 *
                 * `auditable_type` stores a fully-qualified class because that
                 * is what makes the row resolvable, and `App\Models\Client` is
                 * not what anybody reading a log wants to see. The map is BUILT
                 * FROM THE REGISTERED RESOURCES rather than hand-written, so a
                 * resource added next year labels itself instead of silently
                 * reverting to its class name.
                 *
                 * The stored value is untouched - filtering and the URL still
                 * use the class, so a saved view keeps working.
                 */
                BadgeColumn::make('auditable_type')->from('audit_entries.auditable_type')
                    ->sortAs('audit_entries.auditable_type')
                    ->label('Record')->sortable()
                    ->labels(self::recordLabels())
                    ->defaultColor('secondary'),

                /*
                 * WHAT IT WAS CALLED, not which row it was.
                 *
                 * A column of ids answers nothing - the question is "which
                 * subscriber", and the id is a lookup away from it.
                 * `auditable_label` is a snapshot written at the time of the
                 * change, so it is present even for records that no longer
                 * exist; see the recorder.
                 *
                 * THE ID IS NOT SHOWN AT ALL. It was kept as a muted column "for
                 * when you stop reading and start investigating", which was a
                 * guess: it is stored on the row, the record type is beside it,
                 * and nobody scanning a log reads primary keys. A column that
                 * exists in case somebody wants it is how a table gets too wide
                 * to read.
                 */
                TextColumn::make('auditable_label')->from('audit_entries.auditable_label')
                    ->label('Which')->searchable(),

                /*
                 * THE IP IS THE FIELD THAT ANSWERS "was this really them", and
                 * also the one that turns a change log into a record of where
                 * staff were sitting.
                 *
                 * It is a plain column rather than one hidden by default,
                 * because columns have no server-side default visibility here -
                 * hiding is a per-user client preference through the column
                 * panel. Declaring `->hidden()` would have been inventing an API
                 * that does not exist, which is how a resource ends up throwing
                 * on its own list page.
                 */
                TextColumn::make('ip_address')->from('audit_entries.ip_address')
                    ->label('IP')->mono(),
            ])
            ->filters([
                /*
                 * OPTIONS FROM THE DATA, resolved lazily and tenant-scoped -
                 * never at schema-build time, because the values are tenant data
                 * and the schema is shared (addendum Part A).
                 */
                SelectFilter::make('event')->column('audit_entries.event')
                    ->options(fn (): array => AuditEntry::query()->toBase()
                        ->select('event')->distinct()->orderBy('event')
                        ->pluck('event')->all()),

                SelectFilter::make('actor_name')->label('Who')
                    ->column('audit_entries.actor_name')
                    ->options(fn (): array => AuditEntry::query()->toBase()
                        ->select('actor_name')->whereNotNull('actor_name')
                        ->distinct()->orderBy('actor_name')->limit(50)
                        ->pluck('actor_name')->all()),

                SelectFilter::make('auditable_type')->label('Record type')
                    ->column('audit_entries.auditable_type')
                    ->options(fn (): array => AuditEntry::query()->toBase()
                        ->select('auditable_type')->distinct()->orderBy('auditable_type')
                        ->pluck('auditable_type')->all()),

                // "What happened on the 14th" is the second question anybody
                // asks of a log, after "what happened just now".
                DateRangeFilter::make('created_at')->label('When')
                    ->column('audit_entries.created_at'),
            ]);
    }
}
