<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Plan;
use Illuminate\Database\Query\Builder as QueryBuilder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * PHASE 2 — the third copy, on purpose. See RoutersController for why.
 *
 * This one deliberately carries the two variations that a naive abstraction
 * built from Clients + Routers alone would have missed, and they are the most
 * valuable thing in the whole phase:
 *
 *   1. A BOOLEAN filter (`is_active`), where "not set" and "false" are different
 *      states. Both other screens only have string-equality filters, so an
 *      abstraction generalised from them would have modelled every filter as a
 *      nullable string and quietly broken this one.
 *
 *   2. A COMPUTED column (`price`), derived from price_cents. The schema layer
 *      in Phase 4 therefore cannot assume every column maps 1:1 to a database
 *      column, which changes what `select()` has to resolve.
 */
final class PlansController extends Controller
{
    /** @var array<string, string> */
    private const SORTABLE = [
        'name' => 'plans.name',
        'speed_mbps' => 'plans.speed_mbps',
        'price_cents' => 'plans.price_cents',
        'created_at' => 'plans.created_at',
    ];

    private const PER_PAGE = 50;

    public function index(Request $request): Response
    {
        $filters = $this->filters($request);
        $rows = $this->rows($filters);

        $last = end($rows) ?: null;
        $nextCursor = $last === null || count($rows) < self::PER_PAGE
            ? null
            : $this->encodeCursor($last, $filters['sort']);

        return Inertia::render('Plans/Index', [
            'records' => $rows,
            'filters' => $filters,
            'nextCursor' => $nextCursor,
            'perPage' => self::PER_PAGE,
            'total' => Inertia::defer(fn () => $this->total($filters)),
        ]);
    }

    /**
     * @return array{search: string, active: bool|null, sort: string, direction: string, cursor: string|null}
     */
    private function filters(Request $request): array
    {
        $sort = (string) $request->query('sort', 'created_at');
        $direction = strtolower((string) $request->query('direction', 'desc'));
        $active = $request->query('active');

        return [
            'search' => trim((string) $request->query('search', '')),
            // Three states, not two: null means "no filter", which is different
            // from false meaning "only inactive". Collapsing these is the bug an
            // abstraction generalised from string filters would introduce.
            'active' => match ($active) {
                '1', 'true' => true,
                '0', 'false' => false,
                default => null,
            },
            'sort' => array_key_exists($sort, self::SORTABLE) ? $sort : 'created_at',
            'direction' => $direction === 'asc' ? 'asc' : 'desc',
            'cursor' => $request->query('cursor') ? (string) $request->query('cursor') : null,
        ];
    }

    /**
     * @param  array{search: string, active: bool|null, sort: string, direction: string, cursor: string|null}  $filters
     * @return list<array<string, mixed>>
     */
    private function rows(array $filters): array
    {
        $column = self::SORTABLE[$filters['sort']];
        $direction = $filters['direction'];

        $query = $this->base($filters)
            ->select([
                'plans.id',
                'plans.name',
                'plans.speed_mbps',
                'plans.price_cents',
                'plans.is_active',
                'plans.created_at',
            ])
            ->orderBy($column, $direction)
            ->orderBy('plans.id', $direction);

        $this->applyCursor($query, $filters, $column, $direction);

        $rows = $query->limit(self::PER_PAGE)->get()->all();

        return array_map(static function (object $r): array {
            $row = (array) $r;

            // Computed, not selected. Formatting money in the database would be
            // locale-bound and uncacheable; formatting it in Vue would scatter
            // the same logic across every screen that shows a price.
            $row['price'] = number_format((int) $row['price_cents'] / 100, 2);
            $row['is_active'] = (bool) $row['is_active'];

            return $row;
        }, $rows);
    }

    /** @param array{search: string, active: bool|null, sort: string, direction: string, cursor: string|null} $filters */
    private function base(array $filters): QueryBuilder
    {
        $query = Plan::query()->toBase();

        if ($filters['active'] !== null) {
            $query->where('plans.is_active', $filters['active']);
        }

        if ($filters['search'] !== '') {
            $term = str_replace(['%', '_'], ['\%', '\_'], $filters['search']) . '%';
            $query->where('plans.name', 'like', $term);
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
                        ->where('plans.id', $operator, $id);
                });
        });
    }

    /** @param array{search: string, active: bool|null, sort: string, direction: string, cursor: string|null} $filters */
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
