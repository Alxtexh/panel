<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\Plan;
use App\Models\Router;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Backing endpoint for the ⌘K command palette.
 *
 * A lean JSON endpoint rather than an Inertia render, deliberately. The palette
 * fires on keystrokes; re-rendering a page shell per keystroke is exactly the
 * Livewire cost model the whole project exists to avoid (spec §8). This returns
 * the smallest possible payload and nothing else.
 *
 * Static pages are NOT searched here — the client already has the nav list and
 * filters it locally in the same frame, so page results appear with zero network
 * latency. Only records need the server.
 *
 * NOTE ON SCOPE: spec §12 lists "Global search across all resources" as
 * explicitly out of scope for v1. This is a deliberate override.
 */
final class SearchController extends Controller
{
    /** Small enough to stay fast, large enough to be useful. */
    private const LIMIT = 6;

    /** Below this, a prefix search matches too much to be worth the round trip. */
    private const MIN_LENGTH = 2;

    public function __invoke(Request $request): JsonResponse
    {
        $term = trim((string) $request->query('q', ''));

        if (mb_strlen($term) < self::MIN_LENGTH) {
            return response()->json(['groups' => []]);
        }

        return response()->json([
            'groups' => array_values(array_filter([
                $this->clients($term),
                $this->routers($term),
                $this->plans($term),
            ])),
        ]);
    }

    /**
     * @return array{label: string, items: list<array<string, mixed>>}|null
     */
    private function clients(string $term): ?array
    {
        // Prefix match, not `%term%`. A leading wildcard cannot use an index and
        // turns every keystroke into a full scan of 500k rows.
        $prefix = str_replace(['%', '_'], ['\%', '\_'], $term) . '%';

        // Tenant scoping comes from the global scope on the model, which
        // toBase() applies before dropping to the query builder. A palette that
        // searched across tenants would be the worst possible leak — it is the
        // one surface a user points at arbitrary strings.
        $rows = Client::query()
            ->toBase()
            ->select(['id', 'name', 'access_code', 'status'])
            ->where(function ($q) use ($prefix): void {
                $q->where('name', 'like', $prefix)
                    ->orWhere('access_code', 'like', $prefix)
                    ->orWhere('phone', 'like', $prefix);
            })
            ->limit(self::LIMIT)
            ->get();

        if ($rows->isEmpty()) {
            return null;
        }

        return [
            'label' => 'Clients',
            'items' => $rows->map(fn (object $row): array => [
                'id' => 'client-' . $row->id,
                'title' => $row->name,
                'subtitle' => $row->access_code . ' · ' . $row->status,
                'href' => '/clients?search=' . urlencode($row->access_code),
            ])->all(),
        ];
    }

    /**
     * @return array{label: string, items: list<array<string, mixed>>}|null
     */
    private function routers(string $term): ?array
    {
        $prefix = str_replace(['%', '_'], ['\%', '\_'], $term) . '%';

        $rows = Router::query()
            ->toBase()
            ->select(['id', 'name', 'ip_address', 'status'])
            ->where(function ($q) use ($prefix): void {
                $q->where('name', 'like', $prefix)->orWhere('ip_address', 'like', $prefix);
            })
            ->limit(self::LIMIT)
            ->get();

        if ($rows->isEmpty()) {
            return null;
        }

        return [
            'label' => 'Routers',
            'items' => $rows->map(fn (object $row): array => [
                'id' => 'router-' . $row->id,
                'title' => $row->name,
                'subtitle' => $row->ip_address . ' · ' . $row->status,
                'href' => '/routers?search=' . urlencode($row->name),
            ])->all(),
        ];
    }

    /**
     * @return array{label: string, items: list<array<string, mixed>>}|null
     */
    private function plans(string $term): ?array
    {
        $prefix = str_replace(['%', '_'], ['\%', '\_'], $term) . '%';

        $rows = Plan::query()
            ->toBase()
            ->select(['id', 'name', 'speed_mbps', 'is_active'])
            ->where('name', 'like', $prefix)
            ->limit(self::LIMIT)
            ->get();

        if ($rows->isEmpty()) {
            return null;
        }

        return [
            'label' => 'Plans',
            'items' => $rows->map(fn (object $row): array => [
                'id' => 'plan-' . $row->id,
                'title' => $row->name,
                'subtitle' => $row->speed_mbps . ' Mbps · ' . ($row->is_active ? 'active' : 'inactive'),
                'href' => '/plans?search=' . urlencode($row->name),
            ])->all(),
        ];
    }
}
