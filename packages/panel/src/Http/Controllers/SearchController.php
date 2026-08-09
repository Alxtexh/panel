<?php

declare(strict_types=1);

namespace PanelKit\Panel\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Resources\Resource;

/**
 * What the command palette asks when somebody types.
 *
 * THE REFERENCE APP HAD THIS AND THE PACKAGE DID NOT, and the demo's version
 * names `Client`, `Router` and `Plan` in its own source - which is exactly why
 * it could not ship. A palette that has to be rewritten per application is one
 * every application writes worse, and the third one has a cross-tenant leak
 * nobody reviews.
 *
 * IT SEARCHES WHAT THE PANEL ALREADY KNOWS. Every registered resource declares
 * its searchable columns for its own list screen; this asks each of them the
 * same question and takes the first few answers. There is no second search
 * implementation to keep in step - if a column is searchable in the table it is
 * searchable here, and if somebody marks a new one tomorrow the palette finds it
 * without being told.
 *
 * A LEAN JSON ENDPOINT, NOT AN INERTIA RENDER. The palette fires on keystrokes,
 * and re-rendering a page shell per keystroke is the cost model this package
 * exists to avoid. This returns the smallest payload that answers the question.
 *
 * PAGES ARE NOT SEARCHED HERE. The client already holds the navigation - the
 * same `panelNav` the sidebar draws - so it filters those locally, in the same
 * frame, with no network at all. Only records need a server.
 */
final class SearchController extends Controller
{
    /** Per resource. Small enough to stay fast, large enough to be useful. */
    private const LIMIT = 5;

    /** Below this a prefix search matches too much to be worth the round trip. */
    private const MIN_LENGTH = 2;

    /**
     * Resources asked, at most. A panel with forty resources would otherwise
     * make forty queries per keystroke, and nobody reads past the third group.
     */
    private const MAX_RESOURCES = 8;

    public function __invoke(Request $request, PanelManager $panels): JsonResponse
    {
        $term = trim((string) $request->query('q', ''));

        if (mb_strlen($term) < self::MIN_LENGTH) {
            return response()->json(['groups' => []]);
        }

        $panel = $panels->currentPanel();
        $prefix = $panel === null ? '' : rtrim('/'.trim($panel->getPath(), '/'), '/');

        $groups = [];

        /*
         * THE SAME SOURCE THE SIDEBAR READS. `resourcesFor()` answers "what
         * belongs to this panel", falling back to each resource's own
         * declaration - `panelFor()` alone returns only the REGISTRATION
         * override and is null for an ordinary application resource, so
         * filtering on it found nothing at all and the palette returned an
         * empty list for every term.
         */
        foreach ($panels->resourcesFor($panel?->id) as $class) {
            if (count($groups) >= self::MAX_RESOURCES) {
                break;
            }

            /** @var class-string<resource> $class */
            /*
             * THE SAME ABILITY THE LIST PAGE ASKS FOR.
             *
             * Without this the palette is a way to read a resource somebody was
             * denied - typing part of a name and reading the answer is reading
             * the record, whatever the list screen says. Deny-by-default holds
             * here because `can()` is the resource's own check, not a second
             * one written for this endpoint.
             */
            if (! $class::can('viewAny')) {
                continue;
            }

            $items = $this->search($class, $term, $prefix);

            if ($items !== []) {
                $groups[] = ['label' => $class::pluralLabel(), 'items' => $items];
            }
        }

        return response()->json(['groups' => $groups]);
    }

    /**
     * @return list<array{id: mixed, title: string, subtitle: ?string, href: string}>
     */
    private function search(string $class, string $term, string $prefix): array
    {
        $definition = $class::definition();

        /*
         * A SUB-REQUEST, so the resource's own state reader applies. `search`
         * is the parameter its list screen uses, and `run()` is the method that
         * turns it into the word-prefix match, the tenant scope and the joins -
         * all of which this endpoint would otherwise reimplement slightly
         * differently, which is how two searches disagree about what exists.
         */
        $result = $definition
            ->toListQuery($class::model())
            ->run(Request::create('/', 'GET', ['search' => $term, 'per_page' => self::LIMIT]));

        $key = 'id';
        $title = $this->titleColumn($result->records);

        return array_map(
            static fn (array $row): array => [
                'id' => $row[$key] ?? null,
                'title' => (string) ($row[$title] ?? $row[$key] ?? ''),
                'subtitle' => null,
                'href' => $prefix.'/'.$class::key().'/'.($row[$key] ?? ''),
            ],
            array_slice($result->records, 0, self::LIMIT),
        );
    }

    /**
     * What to call a row, chosen from what came back.
     *
     * NOT HARDCODED TO `name`. A resource may call it `title`, `label`, or
     * nothing of the sort - and a palette listing six rows all reading `4` is
     * worse than no palette. The first string-ish column that is not the key
     * is the honest guess, and the key itself is the fallback so a row is never
     * blank.
     */
    private function titleColumn(array $records): string
    {
        foreach (['name', 'title', 'label', 'reference', 'subject', 'description', 'email'] as $candidate) {
            if (isset($records[0][$candidate])) {
                return $candidate;
            }
        }

        /*
         * A DATE IS A STRING AND IS NEVER A NAME.
         *
         * "The first string-ish column" picked `created_at` on any resource
         * whose first text column is a timestamp - the activity trail being the
         * one everybody sees - so the palette offered five results all reading
         * `2026-08-08 16:47:41`. They are distinguishable from each other and
         * from nothing else, which is worse than showing the key: at least an
         * id looks like an id and nobody mistakes it for the answer.
         */
        foreach (array_keys($records[0] ?? []) as $column) {
            $value = $records[0][$column] ?? null;

            if ($column === 'id' || ! is_string($value)) {
                continue;
            }

            if (self::looksTemporal((string) $column, $value)) {
                continue;
            }

            return (string) $column;
        }

        return 'id';
    }

    /**
     * A column that holds a moment rather than a name.
     *
     * BOTH THE NAME AND THE VALUE ARE CHECKED, because either alone is wrong
     * often enough to matter: a column called `logged` holds a date under a name
     * that does not say so, and a `description` reading "2026 review" is prose
     * that merely opens with a year.
     */
    private static function looksTemporal(string $column, string $value): bool
    {
        if (preg_match('/(^|_)(at|date|time|on)$/i', $column) === 1) {
            return true;
        }

        return preg_match('/^\d{4}-\d{2}-\d{2}([ T]\d{2}:\d{2})?/', $value) === 1;
    }
}
