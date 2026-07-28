<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\JsonSchema;
use PanelKit\Panel\Tables\Table;

/**
 * The OpenAPI description of the panel's own endpoints, generated from routes.
 *
 * GENERATED, NOT WRITTEN. A hand-maintained spec is a second description of the
 * application that drifts from the first, and the drift is invisible: the
 * document still renders, still looks authoritative, and quietly documents an
 * endpoint that was renamed a year ago. The routes and the registry already know
 * everything here.
 *
 * IT DESCRIBES THE PANEL'S HTTP SURFACE, not a public API. These are the
 * endpoints a resource screen actually calls - list, create, update, delete,
 * bulk, actions, import. That is the thing somebody integrating with the panel,
 * or debugging it, needs to see; a hand-written "API guide" is neither.
 */
final class ApiReferenceController extends Controller
{
    public function spec(): JsonResponse
    {
        $paths = [];

        foreach (app(PanelManager::class)->resources() as $key => $class) {
            /*
             * NOT EVERY RESOURCE IS AN INTEGRATION SURFACE.
             *
             * The activity trail is the case that prompted this: it is a
             * read-only record of what the panel did to itself, rendered on one
             * screen, and nobody integrates against it - so listing it here only
             * lengthened a document somebody is reading to find the endpoint
             * they actually need. Volume is not thoroughness in a reference.
             *
             * OPT-OUT, NOT OPT-IN. A resource that forgets to declare itself
             * should appear and be edited down, rather than be missing with
             * nothing to notice it.
             */
            if (! $class::documented()) {
                continue;
            }

            $label = $class::pluralLabel();

            /*
             * THE TABLE OBJECT, NOT ITS SCHEMA. `toSchema()` is the CLIENT's
             * contract and deliberately omits things the browser has no use for
             * - which columns are searchable is one of them, since the server
             * decides that entirely. Reading the definition means the reference
             * describes the endpoint rather than describing the screen.
             */
            $table = $class::definition();
            $form = $class::formDefinition();
            $schema = new JsonSchema;

            /*
             * THE REFERENCE DOCUMENTS WHAT THE RESOURCE ACTUALLY SUPPORTS.
             *
             * Every resource used to get the full CRUD set, so a read-only one -
             * the activity log - published `POST`, `PUT` and `DELETE` endpoints
             * that its own policy refuses unconditionally. An API reference that
             * describes operations the server will never allow is worse than a
             * missing one: somebody writes an integration against it, and finds
             * out at runtime.
             *
             * `actions()` is the same declaration the permission matrix reads,
             * so the two cannot drift.
             */
            $supports = fn (string $action): bool => in_array($action, $class::actions(), true);

            $paths["/{$key}"] = [
                'get' => $this->operation(
                    $label,
                    "List {$label}",
                    'Keyset-paginated. The total arrives as a deferred prop rather than blocking the rows.',
                    query: $this->listQuery($table),
                    responds: $schema->page($table->getColumns()),
                ),
            ];

            if ($supports('create')) {
                $paths["/{$key}"]['post'] = $this->operation(
                    $label,
                    "Create a {$class::label()}",
                    'Validated against the resource form - the same declaration that generated this schema.',
                    accepts: $schema->writeBody($form->fields()),
                    responds: $schema->row($table->getColumns()),
                );
            }

            $paths["/{$key}/{id}"] = array_filter([
                'get' => $supports('view')
                    ? $this->operation(
                        $label,
                        "Read one {$class::label()}",
                        '',
                        path: true,
                        responds: $schema->row($table->getColumns()),
                    )
                    : null,
                'put' => $supports('update')
                    ? $this->operation(
                        $label,
                        "Update a {$class::label()}",
                        'Send only the attributes being changed; nothing is required.',
                        path: true,
                        accepts: $schema->writeBody($form->fields(), partial: true),
                        responds: $schema->row($table->getColumns()),
                    )
                    : null,
                'delete' => $supports('delete')
                    ? $this->operation($label, "Delete a {$class::label()}", '', path: true)
                    : null,
            ]);

            $paths["/{$key}/bulk"] = [
                'post' => $this->operation(
                    $label,
                    'Run a bulk action',
                    'The request names a declared action KEY and a selection. It never describes what the action does.',
                    accepts: $schema->bulkBody(array_column(
                        array_map(static fn ($a): array => $a->toArray(), $table->getBulkActions()),
                        'key',
                    )),
                ),
            ];

            $paths["/{$key}/{id}/action"] = [
                'post' => $this->operation(
                    $label,
                    'Run a record action',
                    'Same rule as bulk: a key the resource declared, never an attribute set.',
                    path: true,
                    accepts: $schema->recordActionBody($this->recordActionKeys($table)),
                ),
            ];

            $paths["/{$key}/import"] = [
                'post' => $this->operation(
                    $label,
                    'Import a CSV',
                    'Send `dryRun` to validate without writing. Rows fail independently and are reported by spreadsheet line.',
                ),
            ];
        }

        return response()->json([
            'openapi' => '3.1.0',
            'info' => [
                'title' => config('app.name').' panel API',
                'version' => '1.0.0',
                'description' => "The HTTP surface every resource screen uses.\n\n"
                    ."Every endpoint is tenant-scoped and authorized per record; an id belonging to another\n"
                    .'organisation is *not found* rather than forbidden.',
            ],
            'servers' => [['url' => config('app.url')]],

            /*
             * TWO SURFACES, AND SAYING WHICH IS WHICH IS THE POINT.
             *
             * The paths below are the PANEL's own endpoints: session
             * authenticated, Inertia shaped, and free to change whenever a
             * screen does. Anybody integrating against them breaks on a
             * redesign - so the document names the other one, which is
             * versioned and stable, rather than leaving a reader to assume this
             * is it.
             */
            'components' => [
                'securitySchemes' => [
                    'session' => [
                        'type' => 'apiKey',
                        'in' => 'cookie',
                        'name' => config('session.cookie'),
                        'description' => 'The panel\'s own endpoints. Not a contract - they change with the screens.',
                    ],
                    'bearer' => [
                        'type' => 'http',
                        'scheme' => 'bearer',
                        'description' => 'The public API at /api/v1. Issue a token with `php artisan panel:api-token`.',
                    ],
                ],
            ],
            'paths' => $paths,
        ]);
    }

    /**
     * The query string a list endpoint really accepts, for THIS resource.
     *
     * READ FROM THE TABLE DEFINITION, not written out by hand. The five generic
     * parameters that used to be listed here were true of every resource and
     * useful for none: they said a `sort` parameter exists without saying which
     * columns it takes, and said nothing at all about filters - which is most of
     * what the screen actually sends. Anybody integrating had to open the
     * resource class, at which point the reference has failed at its one job.
     *
     * ENUMERATED WHERE THE SERVER ENUMERATES. `sort` and `perPage` are refused
     * outright when they name something undeclared, so the allowed values belong
     * in the document as an enum rather than as prose. Filter OPTION lists are
     * deliberately not resolved: they are tenant data - one organisation's plan
     * names - and a generated spec is cached and shared.
     *
     * @return list<array<string, mixed>>
     */
    private function listQuery(Table $table): array
    {
        /*
         * BOTH HALVES, because neither alone is enough. `toSchema()` is the
         * client contract and holds the tabs, the page sizes and the default
         * sort; it deliberately omits which columns are SEARCHABLE, since the
         * browser never decides that. The column objects have it.
         */
        $schema = $table->toSchema();

        $sortable = [];
        $searchable = [];

        foreach ($table->getColumns() as $column) {
            if ($column->isSortable()) {
                $sortable[] = $column->resolvedSortKey();
            }

            if ($column->isSearchable()) {
                $searchable[] = $column->key;
            }
        }

        $query = [];

        if ($searchable !== []) {
            $query[] = $this->param(
                'search',
                'Matches the START of any word in '.$this->readable($searchable)
                    .'. Not a substring match - a trailing wildcard can use an index and a '
                    .'leading one cannot, which is the difference between a fast list and a scan.',
            );
        }

        if ($sortable !== []) {
            $query[] = $this->param(
                'sort',
                "Anything undeclared falls back to `{$schema['defaultSort']}`, silently - "
                    .'an unsortable column is not an error, because the alternative is a '
                    .'saved link breaking when a column stops being sortable.',
                enum: $sortable,
            );

            $query[] = $this->param('direction', 'Sort direction.', enum: ['asc', 'desc']);
        }

        $query[] = $this->param(
            'cursor',
            'Opaque keyset cursor, taken from the previous page. Never an offset: a page '
                .'number skips or repeats rows as records are inserted underneath it.',
        );

        $query[] = $this->param(
            'perPage',
            'Anything not in this list is refused rather than clamped, so a request for '
                .'50000 rows fails instead of quietly returning 100.',
            enum: array_map('strval', (array) ($schema['perPageOptions'] ?? [])),
        );

        if (($schema['tabs'] ?? []) !== []) {
            $query[] = $this->param(
                'tab',
                'A predefined slice of the list, applied ALONGSIDE the filters rather than '
                    .'instead of them.',
                enum: array_map('strval', array_values((array) $schema['tabs'])),
            );
        }

        /*
         * FILTERS ARE THE PART THAT WAS MISSING ENTIRELY, and they are most of
         * what a real request carries. Each is named after its own key, so the
         * document says `?status=active` rather than describing a mechanism and
         * leaving the reader to guess the spelling.
         *
         * OPTION LISTS ARE NOT RESOLVED HERE. They are tenant data - one
         * organisation's plan names - and this document is generated once and
         * read by everybody; the values belong in the payload beside the rows.
         */
        foreach ($table->getFilters() as $filter) {
            $shape = $filter->toSchema();

            $query[] = $this->param(
                (string) $shape['key'],
                "Filter by {$shape['label']} ({$shape['type']}). Permitted values travel with "
                    .'the rows, because they are the organisation\'s own data.',
            );
        }

        if (($schema['groupBy'] ?? null) !== null) {
            $query[] = $this->param(
                'group',
                "Rows are grouped by {$schema['groupBy']['label']} by default. Send `0` to switch that off.",
            );
        }

        return $query;
    }

    /**
     * Every record action key, including the ones inside a group.
     *
     * READ FROM THE SCHEMA, not from the raw list. `getRecordActions()` returns
     * a mix of actions and `ActionGroup`s - a group has no key of its own, and
     * mapping over it blindly is how this first went wrong. The schema has
     * already flattened them into `[['actions' => [...]], ...]`, which is the
     * same shape the client walks, so the document and the screen cannot end up
     * offering different action keys.
     *
     * @return list<string>
     */
    private function recordActionKeys(Table $table): array
    {
        $keys = [];

        foreach ((array) ($table->toSchema()['recordActions'] ?? []) as $entry) {
            foreach ((array) ($entry['actions'] ?? []) as $action) {
                if (isset($action['key'])) {
                    $keys[] = (string) $action['key'];
                }
            }
        }

        return array_values(array_unique($keys));
    }

    /** @param list<string> $items */
    private function readable(array $items): string
    {
        if (count($items) === 1) {
            return "`{$items[0]}`";
        }

        $last = array_pop($items);

        return '`'.implode('`, `', $items)."` or `{$last}`";
    }

    /**
     * @param  list<array<string, mixed>>  $query
     * @param  array<string, mixed>|null  $accepts  Request body schema.
     * @param  array<string, mixed>|null  $responds  200 body schema.
     * @return array<string, mixed>
     */
    private function operation(
        string $tag,
        string $summary,
        string $description = '',
        array $query = [],
        bool $path = false,
        ?array $accepts = null,
        ?array $responds = null,
    ): array {
        $parameters = $query;

        if ($path) {
            $parameters[] = [
                'name' => 'id',
                'in' => 'path',
                'required' => true,
                'schema' => ['type' => 'integer'],
            ];
        }

        return array_filter([
            'tags' => [$tag],
            'summary' => $summary,
            'description' => $description,
            'parameters' => $parameters,
            'requestBody' => $accepts === null ? null : [
                'required' => true,
                'content' => ['application/json' => ['schema' => $accepts]],
            ],
            'responses' => array_filter([
                '200' => array_filter([
                    'description' => 'OK',
                    'content' => $responds === null ? null : [
                        'application/json' => ['schema' => $responds],
                    ],
                ]),
                '403' => ['description' => 'Authenticated, but not permitted.'],
                '404' => ['description' => 'No such record - including one belonging to another organisation.'],
                /*
                 * THE ERROR SHAPE IS DOCUMENTED, and it is the one integrators
                 * actually have to handle. The happy path gets guessed
                 * correctly; a 422 whose body nobody expected reads as a server
                 * fault, and the report that follows is about the wrong thing.
                 */
                '422' => $accepts === null ? ['description' => 'Validation failed.'] : [
                    'description' => 'Validation failed.',
                    'content' => ['application/json' => ['schema' => (new JsonSchema)->validationError()]],
                ],
            ]),
        ], static fn (mixed $v): bool => $v !== '' && $v !== [] && $v !== null);
    }

    /**
     * @param  list<string>  $enum
     * @return array<string, mixed>
     */
    private function param(string $name, string $description, array $enum = []): array
    {
        return [
            'name' => $name,
            'in' => 'query',
            'required' => false,
            'description' => $description,
            'schema' => array_filter([
                'type' => 'string',
                // An empty enum is omitted rather than sent: `"enum": []` means
                // "no value is valid", which renders as an unusable parameter.
                'enum' => $enum,
            ], static fn (mixed $v): bool => $v !== []),
        ];
    }
}
