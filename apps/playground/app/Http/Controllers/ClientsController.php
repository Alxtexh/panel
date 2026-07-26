<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * PHASE 1 — deliberately hardcoded.
 *
 * No schema JSON, no resource class, no abstraction. Spec §11: "Do not abstract
 * before phase 4." Phases 2 and 3 duplicate this twice; the duplication is what
 * tells us what the abstraction should be, rather than us guessing now.
 *
 * The performance decisions here are NOT provisional, though — they are the
 * §10 mandates, and they are what Phase 3 extracts into the shared QueryBuilder:
 *
 *   - `toBase()`         no model hydration on a read-only list (§10)
 *   - explicit `select`  never SELECT * on a wide table (§10)
 *   - keyset pagination  OFFSET 100000 walks 100,000 rows; a seek does not (§10)
 *   - no COUNT(*)        the total is a deferred prop, arriving after the rows (§10)
 *   - one join           constant query count, never proportional to row count (§10)
 */
final class ClientsController extends Controller
{
    /**
     * Sortable columns are a fixed allowlist, not user input passed through.
     *
     * The value is interpolated into an ORDER BY, which no query binding can
     * parameterise — an allowlist is the only correct defence. Every entry has a
     * matching composite index (see the clients migration); a sort on anything
     * else would silently become a 500k-row filesort.
     *
     * @var array<string, string>
     */
    private const SORTABLE = [
        'name' => 'clients.name',
        'status' => 'clients.status',
        'expiry_date' => 'clients.expiry_date',
        'created_at' => 'clients.created_at',
    ];

    /** @var list<string> */
    private const STATUSES = ['active', 'expired', 'suspended'];

    /** @var list<string> */
    private const PLAN_TYPES = ['pppoe', 'hotspot', 'static'];

    private const PER_PAGE = 50;

    public function index(Request $request): Response
    {
        $filters = $this->filters($request);

        $rows = $this->rows($filters);

        // The cursor for the next page is the last row's (sort value, id). It is
        // derived server-side from the actual result rather than trusted from the
        // client, so a tampered cursor cannot skip the tenant constraint.
        $last = end($rows) ?: null;
        $nextCursor = $last === null || count($rows) < self::PER_PAGE
            ? null
            : $this->encodeCursor($last, $filters['sort']);

        return Inertia::render('Clients/Index', [
            'records' => $rows,
            'filters' => $filters,
            'sortable' => array_keys(self::SORTABLE),
            'statuses' => self::STATUSES,
            'planTypes' => self::PLAN_TYPES,
            'nextCursor' => $nextCursor,
            'perPage' => self::PER_PAGE,

            // §10: "Never block a list response on COUNT(*)." The rows paint
            // first; the total arrives on a second request and fills in. On 500k
            // rows this is the difference between a 15 ms and a 300 ms response.
            'total' => Inertia::defer(fn () => $this->total($filters)),
        ]);
    }

    /**
     * Normalises and validates every piece of user input up front, so nothing
     * downstream has to wonder whether a value is safe.
     *
     * @return array{search: string, status: string|null, planType: string|null, sort: string, direction: string, cursor: string|null}
     */
    private function filters(Request $request): array
    {
        $sort = (string) $request->query('sort', 'created_at');
        $direction = strtolower((string) $request->query('direction', 'desc'));

        return [
            'search' => trim((string) $request->query('search', '')),
            'status' => in_array($request->query('status'), self::STATUSES, true)
                ? (string) $request->query('status')
                : null,
            'planType' => in_array($request->query('planType'), self::PLAN_TYPES, true)
                ? (string) $request->query('planType')
                : null,
            'sort' => array_key_exists($sort, self::SORTABLE) ? $sort : 'created_at',
            'direction' => $direction === 'asc' ? 'asc' : 'desc',
            'cursor' => $request->query('cursor') ? (string) $request->query('cursor') : null,
        ];
    }

    /**
     * @param  array{search: string, status: string|null, planType: string|null, sort: string, direction: string, cursor: string|null}  $filters
     * @return list<array<string, mixed>>
     */
    private function rows(array $filters): array
    {
        $column = self::SORTABLE[$filters['sort']];
        $direction = $filters['direction'];

        $query = $this->base($filters)
            // Exactly the columns the UI renders. The join supplies plan.name in
            // the same query, so the count stays constant rather than growing by
            // one per row — the N+1 the §10 guard exists to catch.
            ->select([
                'clients.id',
                'clients.name',
                'clients.phone',
                'clients.access_code',
                'clients.status',
                'clients.plan_type',
                'clients.expiry_date',
                'clients.created_at',
                'plans.name as plan_name',
            ])
            ->orderBy($column, $direction)
            // id is the tiebreaker, and it is also the trailing column on every
            // sort index — without it the seek below is ambiguous and rows can
            // repeat or vanish across pages.
            ->orderBy('clients.id', $direction);

        $this->applyCursor($query, $filters, $column, $direction);

        return array_map(
            static fn (object $r): array => (array) $r,
            $query->limit(self::PER_PAGE)->get()->all(),
        );
    }

    /**
     * The tenant constraint comes from the global scope on the Client model, not
     * from a `where` here. `toBase()` applies scopes before dropping to the query
     * builder, so the constraint survives — see TenantScope.
     *
     * @param  array{search: string, status: string|null, planType: string|null, sort: string, direction: string, cursor: string|null}  $filters
     */
    private function base(array $filters): QueryBuilder
    {
        $query = Client::query()
            ->leftJoin('plans', 'plans.id', '=', 'clients.plan_id')
            ->toBase();

        if ($filters['status'] !== null) {
            $query->where('clients.status', $filters['status']);
        }

        if ($filters['planType'] !== null) {
            $query->where('clients.plan_type', $filters['planType']);
        }

        if ($filters['search'] !== '') {
            // Prefix match, not `%term%`. A leading wildcard cannot use an index
            // and turns every keystroke into a 500k-row scan. Substring search
            // needs a trigram index (Postgres) or FTS, which is a real decision
            // for the engine choice rather than something to fake here.
            $term = str_replace(['%', '_'], ['\%', '\_'], $filters['search']) . '%';

            $query->where(function (QueryBuilder $q) use ($term): void {
                $q->where('clients.name', 'like', $term)
                    ->orWhere('clients.phone', 'like', $term)
                    ->orWhere('clients.access_code', 'like', $term);
            });
        }

        return $query;
    }

    /**
     * Keyset seek: WHERE (sort_col, id) < (?, ?) expressed as an explicit OR so
     * it is portable across Postgres, MySQL and SQLite while the engine is still
     * undecided. Postgres row-value syntax is tidier and can replace this once
     * the engine is fixed.
     *
     * @param  array{sort: string, cursor: string|null, ...}  $filters
     */
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
                        ->where('clients.id', $operator, $id);
                });
        });
    }

    /**
     * The exact count, resolved only when the deferred prop is requested.
     *
     * This is still a COUNT over the filtered set and still costs what it costs —
     * the point is that it no longer sits in front of the rows. §10 offers an
     * approximate count from pg_class.reltuples as the cheaper alternative, which
     * becomes available once the engine is chosen.
     *
     * @param  array{search: string, status: string|null, planType: string|null, sort: string, direction: string, cursor: string|null}  $filters
     */
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
