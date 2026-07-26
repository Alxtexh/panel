<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Router;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * PHASE 2 — a near-verbatim copy of ClientsController, on purpose.
 *
 * Spec §11: "Copy and paste from phase 1. Do not abstract yet. The duplication
 * is the research." Reading this next to ClientsController and PlansController is
 * what tells Phase 3 what the shared QueryBuilder actually needs, rather than us
 * guessing an abstraction from a single example.
 *
 * What is identical (and therefore extractable): filter normalisation, the
 * sortable allowlist mechanism, keyset cursor encode/decode, the deferred total,
 * toBase + explicit select, and the shape of `rows()`.
 *
 * What differs (and therefore must stay configurable): the model, the column
 * list, which columns are sortable, which filters exist, and the join.
 */
final class RoutersController extends Controller
{
    /**
     * Sortable columns are a fixed allowlist. The value is interpolated into an
     * ORDER BY, which no query binding can parameterise.
     *
     * @var array<string, string>
     */
    private const SORTABLE = [
        'name' => 'routers.name',
        'status' => 'routers.status',
        'last_seen_at' => 'routers.last_seen_at',
        'created_at' => 'routers.created_at',
    ];

    /** @var list<string> */
    private const STATUSES = ['online', 'degraded', 'offline'];

    private const PER_PAGE = 50;

    public function index(Request $request): Response
    {
        $filters = $this->filters($request);
        $rows = $this->rows($filters);

        $last = end($rows) ?: null;
        $nextCursor = $last === null || count($rows) < self::PER_PAGE
            ? null
            : $this->encodeCursor($last, $filters['sort']);

        return Inertia::render('Routers/Index', [
            'records' => $rows,
            'filters' => $filters,
            'statuses' => self::STATUSES,
            'models' => $this->modelOptions(),
            'nextCursor' => $nextCursor,
            'perPage' => self::PER_PAGE,
            'total' => Inertia::defer(fn () => $this->total($filters)),
        ]);
    }

    /**
     * @return array{search: string, status: string|null, model: string|null, sort: string, direction: string, cursor: string|null}
     */
    private function filters(Request $request): array
    {
        $sort = (string) $request->query('sort', 'created_at');
        $direction = strtolower((string) $request->query('direction', 'desc'));
        $model = $request->query('model');

        return [
            'search' => trim((string) $request->query('search', '')),
            'status' => in_array($request->query('status'), self::STATUSES, true)
                ? (string) $request->query('status')
                : null,
            // Validated against the values actually present for this tenant,
            // so a crafted value cannot probe another tenant's inventory.
            'model' => is_string($model) && in_array($model, $this->modelOptions(), true) ? $model : null,
            'sort' => array_key_exists($sort, self::SORTABLE) ? $sort : 'created_at',
            'direction' => $direction === 'asc' ? 'asc' : 'desc',
            'cursor' => $request->query('cursor') ? (string) $request->query('cursor') : null,
        ];
    }

    /**
     * Distinct hardware models, tenant-scoped.
     *
     * Cheap here (50 routers). If this table ever grows, this becomes a
     * precomputed lookup rather than a DISTINCT in the request path — §10
     * forbids aggregates over a large table per request.
     *
     * @return list<string>
     */
    private function modelOptions(): array
    {
        return Router::query()
            ->toBase()
            ->select('model')
            ->whereNotNull('model')
            ->distinct()
            ->orderBy('model')
            ->pluck('model')
            ->all();
    }

    /**
     * @param  array{search: string, status: string|null, model: string|null, sort: string, direction: string, cursor: string|null}  $filters
     * @return list<array<string, mixed>>
     */
    private function rows(array $filters): array
    {
        $column = self::SORTABLE[$filters['sort']];
        $direction = $filters['direction'];

        $query = $this->base($filters)
            ->select([
                'routers.id',
                'routers.name',
                'routers.ip_address',
                'routers.model',
                'routers.status',
                'routers.last_seen_at',
                'routers.created_at',
            ])
            ->orderBy($column, $direction)
            ->orderBy('routers.id', $direction);

        $this->applyCursor($query, $filters, $column, $direction);

        return array_map(
            static fn (object $r): array => (array) $r,
            $query->limit(self::PER_PAGE)->get()->all(),
        );
    }

    /**
     * Tenant constraint comes from the global scope on the model, not a `where`
     * here. toBase() applies scopes before dropping to the query builder.
     *
     * @param  array{search: string, status: string|null, model: string|null, sort: string, direction: string, cursor: string|null}  $filters
     */
    private function base(array $filters): QueryBuilder
    {
        $query = Router::query()->toBase();

        if ($filters['status'] !== null) {
            $query->where('routers.status', $filters['status']);
        }

        if ($filters['model'] !== null) {
            $query->where('routers.model', $filters['model']);
        }

        if ($filters['search'] !== '') {
            // Prefix match — a leading wildcard cannot use an index.
            $term = str_replace(['%', '_'], ['\%', '\_'], $filters['search']) . '%';

            $query->where(function (QueryBuilder $q) use ($term): void {
                $q->where('routers.name', 'like', $term)
                    ->orWhere('routers.ip_address', 'like', $term);
            });
        }

        return $query;
    }

    /** @param array{sort: string, cursor: string|null, ...} $filters */
    private function applyCursor(QueryBuilder $query, array $filters, string $column, string $direction): void
    {
        if ($filters['cursor'] === null) {
            return;
        }

        $cursor = $this->decodeCursor($filters['cursor']);

        if ($cursor === null) {
            return;
        }

        [$value, $id] = $cursor;
        $operator = $direction === 'asc' ? '>' : '<';

        $query->where(function (QueryBuilder $q) use ($column, $operator, $value, $id): void {
            $q->where($column, $operator, $value)
                ->orWhere(function (QueryBuilder $q) use ($column, $operator, $value, $id): void {
                    $q->where($column, '=', $value)
                        ->where('routers.id', $operator, $id);
                });
        });
    }

    /** @param array{search: string, status: string|null, model: string|null, sort: string, direction: string, cursor: string|null} $filters */
    private function total(array $filters): int
    {
        return $this->base($filters)->count();
    }

    /** @param array<string, mixed> $row */
    private function encodeCursor(array $row, string $sort): string
    {
        return base64_encode(json_encode([$row[$sort], $row['id']], JSON_THROW_ON_ERROR));
    }

    /** @return array{0: mixed, 1: int}|null */
    private function decodeCursor(string $cursor): ?array
    {
        try {
            $decoded = json_decode(base64_decode($cursor, true) ?: '', true, 512, JSON_THROW_ON_ERROR);
        } catch (\JsonException) {
            return null;
        }

        if (! is_array($decoded) || count($decoded) !== 2) {
            return null;
        }

        return [$decoded[0], (int) $decoded[1]];
    }
}
