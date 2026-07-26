<?php

declare(strict_types=1);

namespace PanelKit\Panel\Resources;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Log;
use PanelKit\Panel\Forms\Form;
use PanelKit\Panel\Support\SchemaCache;
use PanelKit\Panel\Tables\ListResult;
use PanelKit\Panel\Tables\Table;

/**
 * A panel resource. One subclass per screen, and no Vue at all.
 *
 * Everything a list screen needs splits into two halves that travel at
 * different rates and must never be mixed:
 *
 *   schema()   structure. Identical for every tenant, cached, sent once.
 *   data()     rows, filter options, counts. Sent on every interaction.
 *
 * `definition()` must not execute a query. It is called to build the schema,
 * which happens on a cache miss during an ordinary page render, and a query in
 * there is what antipatterns §3.3 describes: three eager option lookups in
 * action definitions took `/admin/clients` down for every tenant when a column
 * was missing, because definitions evaluate at render time rather than when the
 * control is opened. A test asserts zero queries during schema construction.
 */
abstract class Resource
{
    /** @var class-string */
    protected static string $model;

    protected static string $icon = 'list';

    protected static ?string $group = null;

    protected static ?int $sort = null;

    /** Declarative definition. MUST NOT query. */
    abstract public static function table(Table $table): Table;

    /** Optional write form. A resource without one is read-only. */
    public static function form(Form $form): Form
    {
        return $form;
    }

    public static function formDefinition(): Form
    {
        return static::form(Form::make());
    }

    public static function isWritable(): bool
    {
        return static::formDefinition()->fields() !== [];
    }

    /**
     * Authorization. DENIES BY DEFAULT.
     *
     * A resource with no policy returns false rather than true. That inversion
     * is the whole point: the usual default means forgetting to write a policy
     * silently grants everyone everything, and the failure is invisible because
     * the page renders correctly for the person who forgot.
     *
     * The refusal is LOGGED, because a silently-denying panel is its own kind of
     * mystery — antipatterns opens on failures that returned 200 and looked
     * right, and "the button does nothing" is the same class of bug.
     *
     * Schema permission booleans only hide UI. Every write re-checks here, so a
     * client that lies gets a 403 rather than a mutation.
     */
    public static function can(string $ability, Model|string|null $record = null): bool
    {
        $model = static::model();

        if (Gate::getPolicyFor($model) === null) {
            Log::warning('Panel resource denied an ability because no policy is registered.', [
                'component' => 'Resource',
                'operation' => 'can',
                'resource' => static::key(),
                'model' => $model,
                'ability' => $ability,
            ]);

            return false;
        }

        return Gate::allows($ability, $record ?? $model);
    }

    /**
     * Permission booleans for the UI. Never a gate (spec S9 item 3).
     *
     * @return array<string, bool>
     */
    public static function permissions(): array
    {
        return [
            'viewAny' => static::can('viewAny'),
            'create' => static::isWritable() && static::can('create'),
            'update' => static::isWritable() && static::can('update'),
            'delete' => static::can('delete'),
        ];
    }

    /** URL segment and schema key, e.g. `clients`. */
    public static function key(): string
    {
        return str(class_basename(static::class))->beforeLast('Resource')->plural()->kebab()->value();
    }

    public static function label(): string
    {
        return str(class_basename(static::class))->beforeLast('Resource')->headline()->value();
    }

    public static function pluralLabel(): string
    {
        return str(static::label())->plural()->value();
    }

    public static function icon(): string
    {
        return static::$icon;
    }

    public static function group(): ?string
    {
        return static::$group;
    }

    public static function navigationSort(): int
    {
        return static::$sort ?? 0;
    }

    /** @return class-string */
    public static function model(): string
    {
        return static::$model;
    }

    public static function definition(): Table
    {
        return static::table(Table::make());
    }

    /**
     * The cached, tenant-independent half of the contract.
     *
     * The envelope carries `v` and `kind` from the start — spec §5 requires the
     * contract be versioned, and it is what lets a second schema shape be added
     * later without breaking a consumer that only understands `resource`.
     *
     * @return array<string, mixed>
     */
    public static function schema(string $panelId = 'admin'): array
    {
        $cache = app(SchemaCache::class);

        return $cache->remember($panelId, static::key(), static::permissionsFingerprint(), static function (): array {
            $table = static::definition();

            return [
                'v' => 1,
                'kind' => 'resource',
                'key' => static::key(),
                'label' => static::label(),
                'labelPlural' => static::pluralLabel(),
                'icon' => static::icon(),
                'group' => static::group(),
                'routes' => [
                    'index' => '/' . static::key(),
                    'store' => '/' . static::key(),
                    'update' => '/' . static::key() . '/{id}',
                    'destroy' => '/' . static::key() . '/{id}',
                ],
                'table' => $table->toSchema(),
                'form' => static::formDefinition()->toSchema(),
            ];
        });
    }

    /**
     * Rows, filter options and counts. Never cached, always tenant-scoped.
     *
     * Accepts an already-built definition so a caller that needs both the data
     * AND the filter options does not build the table twice. Building it twice
     * means two sets of filter instances, and a data-derived option closure then
     * runs once per set — a duplicate DISTINCT query per request that no test
     * would notice because the row count is identical either way.
     */
    public static function data(Request $request, ?Table $definition = null): ListResult
    {
        return ($definition ?? static::definition())->toListQuery(static::model())->run($request);
    }

    /**
     * Hash of the acting user's effective permission set.
     *
     * Schemas vary by role — a user without `delete_client` must not receive a
     * delete action — so the fingerprint keys the cache. It is deliberately NOT
     * a tenant id: the schema contains no tenant data (addendum Part A).
     *
     * Reused as the per-request permission lookup (addendum C), so permissions
     * resolve once and serve both purposes.
     */
    protected static function permissionsFingerprint(): string
    {
        $user = Auth::user();

        if ($user === null) {
            return 'guest';
        }

        // Spatie's API when present; a stable fallback when it is not. Never an
        // empty string — SchemaCache throws on that rather than collapsing every
        // role onto one key (antipatterns §1.5).
        if (method_exists($user, 'getAllPermissions')) {
            $names = $user->getAllPermissions()->pluck('name')->sort()->implode(',');

            return substr(hash('xxh128', $names), 0, 16);
        }

        return 'default';
    }
}
