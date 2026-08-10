<?php

declare(strict_types=1);

namespace App\Support;

/**
 * The build guide: one page per subject, held on the server.
 *
 * IT WAS ONE PAGE WITH THIRTEEN SECTIONS, and the comparison that made that
 * untenable was Filament's own documentation - twenty-two pages on form fields
 * alone. Thirteen sections is an orientation, not a reference: it tells somebody
 * the order to do things in and leaves every actual question ("what does
 * `visibleWhen` enforce?", "how do I add a column type?") to be answered by
 * reading source.
 *
 * A PAGE PER SUBJECT, WITH ITS OWN URL. That is the part that matters. A section
 * inside a long page cannot be linked to in a code review, bookmarked, or sent
 * to somebody with "read this first" - and the anchor everybody actually shares
 * is the top of the page. `/about/building/tenancy` is a thing you can hand
 * over.
 *
 * ON THE SERVER, for the same reason the help articles are: so a test can see
 * it. `GuideTest` walks every page, so a group naming a page that does not exist
 * fails rather than rendering a dead link, and the commands listed here are
 * checked against the ones actually registered - documentation that drifts from
 * the code is worse than none, because it is believed.
 *
 * THE CODE SAMPLES ARE SHORTENED FORMS OF FILES IN THIS APPLICATION rather than
 * invented. A sample that stops working is one somebody can diff against a real
 * class.
 */
final class Guide
{
    /**
     * The navigation: groups of pages, in reading order.
     *
     * @return list<array{title: string, pages: list<string>}>
     */
    public static function groups(): array
    {
        return [
            [
                'title' => 'Getting started',
                'pages' => ['introduction', 'installation', 'panels', 'resources'],
            ],
            [
                'title' => 'Tables',
                'pages' => ['columns', 'filters', 'grouping', 'summaries'],
            ],
            [
                'title' => 'Forms',
                'pages' => ['forms', 'fields', 'layouts', 'validation'],
            ],
            [
                'title' => 'Acting on records',
                'pages' => ['actions', 'bulk-actions', 'relations', 'trash', 'import-export'],
            ],
            [
                'title' => 'The panel',
                'pages' => ['navigation', 'pages', 'permissions', 'tenancy', 'widgets'],
            ],
            [
                'title' => 'Extending',
                'pages' => ['custom-fields', 'plugins', 'testing', 'blueprint'],
            ],
            [
                'title' => 'Running it',
                'pages' => ['operations', 'reports', 'knowledge', 'api', 'commands'],
            ],
        ];
    }

    /** Every page slug, in navigation order. */
    public static function slugs(): array
    {
        return array_merge(...array_column(self::groups(), 'pages'));
    }

    public static function has(string $slug): bool
    {
        return array_key_exists($slug, self::pages());
    }

    public static function page(string $slug, string $term = ''): array
    {
        $page = self::pages()[$slug];

        return [
            'slug' => $slug,
            'title' => $page['title'],
            'summary' => $page['summary'],
            /*
             * THE SEARCHED TERM IS MARKED IN THE PROSE, so arriving from a
             * result lands on the sentence rather than on a page you then have
             * to read looking for the word you already typed. That is the whole
             * difference between search that finds a PAGE and search that finds
             * an ANSWER.
             */
            'body' => array_map(
                static fn (string $paragraph): array => self::paragraph($paragraph, $term),
                $page['body'],
            ),
            'blocks' => $page['blocks'] ?? [],
            'warning' => isset($page['warning']) ? self::segments($page['warning'], $term) : null,
        ];
    }

    /**
     * One paragraph, split into a lead and the rest.
     *
     * THE PROSE WAS UNREADABLE AS A WALL. Every paragraph here opens with a
     * capitalised claim - "THE RULES ARE WRITTEN ONCE" - and then explains it,
     * which is a good way to write and a terrible way to render if the claim is
     * just more sentence. Pulled out, it becomes the thing you scan for; the
     * explanation is what you read once you have found the right paragraph.
     *
     * SPLIT HERE RATHER THAN WRITTEN AS TWO FIELDS, because the shape is already
     * in the prose and asking every author to restate it is how the two drift.
     *
     * @return array{lead: list<array{type: string, value: string}>|null, text: list<array{type: string, value: string}>}
     */
    private static function paragraph(string $body, string $term = ''): array
    {
        /*
         * AT LEAST TWO CAPITALISED WORDS, ending at a full stop, a comma or a
         * dash. One word is an acronym in an ordinary sentence - "The API is" -
         * and hoisting that would put "THE API" on its own line for no reason.
         */
        if (preg_match('/^([A-Z][A-Z0-9\'`\-]*(?:\s+[A-Z][A-Z0-9\'`\-]*)+)([.,]|\s-)\s+(.*)$/su', $body, $m) === 1) {
            return [
                'lead' => self::segments(rtrim($m[1], ' -'), $term),
                'text' => self::segments(trim($m[3]), $term),
            ];
        }

        return ['lead' => null, 'text' => self::segments($body, $term)];
    }

    /**
     * Text split into prose and code spans.
     *
     * DONE ON THE SERVER, AS DATA, rather than by handing the client a string to
     * interpret. Rendering markdown in the browser means either a parser in the
     * bundle or `v-html`, and `v-html` over content that will one day be edited
     * by somebody is how documentation becomes an injection point.
     *
     * @return list<array{type: string, value: string}>
     */
    private static function segments(string $text, string $term = ''): array
    {
        /*
         * NO `PREG_SPLIT_NO_EMPTY`, and that flag is the trap. The alternation
         * below depends on POSITION - even is prose, odd is code - and dropping
         * empty pieces renumbers everything after the first one, so a paragraph
         * starting with a code span came back with its prose marked as code and
         * its code as prose. Empty pieces are filtered AFTER the parity is read.
         */
        $parts = preg_split('/`([^`]+)`/u', $text, -1, PREG_SPLIT_DELIM_CAPTURE);

        $out = [];

        foreach ($parts ?: [$text] as $i => $part) {
            if ($part === '') {
                continue;
            }

            $type = $i % 2 === 1 ? 'code' : 'text';

            if ($term === '' || mb_strlen($term) < 2) {
                $out[] = ['type' => $type, 'value' => $part];

                continue;
            }

            /*
             * A CODE SPAN IS MARKED WHOLE, never split. Splitting `visibleWhen`
             * into three chips for a search on "visible" is less readable than
             * the thing being searched for - but leaving it unmarked was worse:
             * the search matches inside code, so `SliderField` was a result that
             * opened a page with nothing highlighted, which reads as the wrong
             * page.
             */
            if ($type === 'code') {
                $out[] = [
                    'type' => self::contains($part, $term) ? 'code-match' : 'code',
                    'value' => $part,
                ];

                continue;
            }

            foreach (self::highlight($part, $term) as $piece) {
                $out[] = $piece;
            }
        }

        return $out;
    }

    /**
     * The page before and after this one, for walking the guide in order.
     *
     * DOCUMENTATION IS READ FORWARDS the first time and searched afterwards.
     * Without these somebody reading it end to end has to return to the contents
     * between every page, which is how people stop reading it end to end.
     *
     * @return array{previous: array{slug: string, title: string}|null, next: array{slug: string, title: string}|null}
     */
    public static function neighbours(string $slug): array
    {
        $slugs = self::slugs();
        $index = array_search($slug, $slugs, true);

        $at = static fn (int $i): ?array => isset($slugs[$i])
            ? ['slug' => $slugs[$i], 'title' => self::pages()[$slugs[$i]]['title']]
            : null;

        return [
            'previous' => $index > 0 ? $at($index - 1) : null,
            'next' => $at($index + 1),
        ];
    }

    /**
     * @return array<string, array{title: string, summary: string, body: list<string>, blocks?: list<array{kind: string, code: string}>, warning?: string}>
     */
    public static function pages(): array
    {
        return [
            /* ------------------------------------------------ getting started */

            'introduction' => [
                'title' => 'What this is',
                'summary' => 'An admin panel framework for Laravel, and the shape of the thing you build with it.',
                'body' => [
                    'Alxtexhpanel builds administration screens from PHP classes. You declare a resource - a table, a form, some actions - and the panel produces the list, the record pages, the routes, the permissions and the navigation entry. The developer experience is deliberately close to Filament; the transport is not. Every screen is an Inertia page rendered by Vue, so a filter, a sort and a page change are one JSON request rather than a full round trip.',
                    'The unit of work is a RESOURCE: one class per thing you administer. Everything else in this guide hangs off that - columns and filters describe its list, fields describe its form, actions describe what can be done to it, and policies decide who may do any of it.',
                    'The unit of deployment is a PANEL: a portal with its own path, guard and tenancy context. One application can serve several - an operator panel at the root, a platform panel at /platform, a reseller panel at /reseller - and a resource belongs to exactly one of them.',
                    'What this guide is for is the order. Which command comes first, which decisions are hard to change later, and which of the defaults are load-bearing rather than arbitrary.',
                ],
            ],

            'installation' => [
                'title' => 'Installation',
                'summary' => 'What has to exist before the first panel does.',
                'body' => [
                    'Alxtexhpanel needs PHP 8.4, Laravel 12 or 13, and Inertia with Vue 3. Two packages: `alxtexh-enterprise/panel` on the server, and `@alxtexh-enterprise/panel` on npm for the screens it renders and the table and form underneath them. Both are required - the server package alone answers requests with page names nothing can resolve.',
                    'The install command publishes the config, registers the service provider if package discovery has not, writes one page file per screen into `resources/js/pages`, and prints what it did not do. Those page files exist because Inertia resolves a page name by globbing that directory, so a screen living in `node_modules` is one it cannot find. Each is a single line, and each is where you replace that screen with your own.',
                    'Read the install output: it names the decisions the package refuses to make for you, chiefly the tenancy mode.',
                    'Tenancy is the one thing to settle before writing a resource. `column` shares one database and scopes by a tenant column; `database` gives each tenant their own and the panel adds no column at all; `hybrid` allows both at once. Changing modes later means changing every query the panel builds, so this is a decision worth ten minutes now.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "composer require alxtexh-enterprise/panel\nnpm install @alxtexh-enterprise/panel\n\n# Publishes config, and writes the five page files\nphp artisan panel:install\n\n# What it publishes, and what it deliberately leaves to you\nphp artisan panel:doctor",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "// config/panel.php\n'tenancy' => [\n    // column | database | hybrid | none\n    'mode' => env('PANEL_TENANCY_MODE', 'column'),\n    'column' => 'tenant_id',\n    // null auto-detects stancl/tenancy, then the acting user's tenant\n    'resolver' => null,\n],",
                    ],
                ],
                'warning' => 'A null tenant key is always a DENY signal, never "all tenants". Every query the panel builds fails closed when no tenant resolves, which is why a misconfigured resolver shows an empty screen rather than everybody\'s data.',
            ],

            'panels' => [
                'title' => 'Panels are portals',
                'summary' => 'One command produces a working portal: provider, routes, guard, home page and navigation.',
                'body' => [
                    'A panel is an id, a path, a guard, middleware and a tenancy context. `make:panel` writes the provider, registers it, creates the resource directory and mounts the routes - so the portal is reachable on the next request without a route file being edited.',
                    'THE GUARD IS THE POINT. Everything inside a panel resolves the acting user through that panel\'s guard, never through a bare `$request->user()`. A panel authenticated with a non-default guard whose code calls `$request->user()` gets null, and null tends to be interpreted as "no preferences" rather than "not signed in" - which is how unsaved edits get silently discarded.',
                    'THE CONTEXT DECIDES WHETHER TENANT SCOPING APPLIES. A `central` panel is deliberately unscoped: a platform administrator needs to see every organisation, and that is what the panel is for. A `tenant` panel refuses to serve without a resolved tenant. Conflating the two is how a super admin ends up seeing one tenant, or an operator sees everyone.',
                    'Resources are discovered from the panel\'s own directory, and the route\'s `{resource}` segment is constrained to that panel\'s keys - so a tenant-panel URL cannot resolve a central-panel resource.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "# A tenant portal at /reseller\nphp artisan make:panel reseller --path=reseller\n\n# A central one, unscoped, for platform staff\nphp artisan make:panel platform --path=platform --central",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "\$panels->registerPanel(\n    Panel::make('reseller')\n        ->path('reseller')\n        ->guard('web')\n        ->context(Panel::CONTEXT_TENANT)\n        ->middleware(['web'])\n        ->authMiddleware(['auth:web'])\n        ->brandName(fn (): string => config('app.name').' — Reseller'),\n);",
                    ],
                ],
            ],

            'resources' => [
                'title' => 'A screen is a class',
                'summary' => 'One resource declares the table, the form and what may be done to a record.',
                'body' => [
                    'A resource names a model and declares a table. That alone produces a working list screen with sorting, search, pagination and a navigation entry. Adding a form makes it writable; without one it is read-only, and the panel renders no create or edit buttons rather than rendering buttons that fail.',
                    'THE DEFINITION MUST NOT QUERY. `table()` and `form()` build a description, and that description is cached per panel, resource, tenant and permission set. A query inside a definition runs while the schema is being built - once per cache miss, for every user, before anyone has asked for a row - and worse, its results can be cached and served to the wrong tenant. Option lists that come from the database are closures for exactly this reason.',
                    'The key is the URL segment, the ability suffix (`view_any_clients`), the schema-cache component and the audit label, so it is unique across the whole installation. Two resources claiming the same key throw at registration rather than silently overwriting each other.',
                    '`--generate` reads the table\'s columns and writes a first draft - columns for the scalar ones, fields for the writable ones, sensible labels. It is a starting point, not an output you are expected to keep.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "php artisan make:panel-resource Client --generate\nphp artisan make:panel-resource Invoice --panel=reseller",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "final class ClientResource extends Resource\n{\n    protected static string \$model = Client::class;\n\n    public static function table(Table \$table): Table\n    {\n        return \$table\n            ->columns([\n                TextColumn::make('name')->searchable()->sortable(),\n                BadgeColumn::make('status')->colours([\n                    'active' => 'emerald', 'expired' => 'amber', 'suspended' => 'rose',\n                ]),\n                DateColumn::make('expiry_date')->sortable(),\n            ])\n            ->defaultSort('created_at', 'desc')\n            ->perPage(25);\n    }\n}",
                    ],
                ],
                'warning' => 'A resource with no policy is invisible to everybody. That is the safe default and it looks exactly like a permissions bug - `panel:doctor` reports it by name.',
            ],

            /* ------------------------------------------------------------ tables */

            'columns' => [
                'title' => 'Columns',
                'summary' => 'Text, badge, date, icon, image, select, toggle and editable-in-place.',
                'body' => [
                    'A column declares what to read and how to present it. `TextColumn` covers most of it; `BadgeColumn` maps values to colours; `DateColumn` formats and sorts on the underlying value rather than the formatted string. `IconColumn` and `ImageColumn` render a glyph or a thumbnail, and both take the semantic name rather than a class or a URL - the client decides what an icon looks like.',
                    'SORTING AND SEARCHING ARE OPT-IN PER COLUMN, because both are index questions. A sortable column with no index behind it is a full table scan that appears the first time somebody clicks a header on a large table, and a searchable column that is a computed expression cannot use one at all.',
                    'THREE COLUMNS EDIT IN PLACE: `SelectColumn`, `ToggleColumn` and `EditableColumn`. They write through the same policy and the same validation as the form - an in-place edit is a normal update that happens to have a smaller control - and they are the right choice for a value people change constantly and a form would make tedious.',
                    'A column can read a relation with `from()`, and the list declares the join rather than lazy-loading it, so the query count stays constant however many rows are on screen.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "TextColumn::make('name')->searchable()->sortable()->copyable(),\nTextColumn::make('plan_name')->from('plans.name')->label('Plan'),\nBadgeColumn::make('status')->colours(['active' => 'emerald', 'expired' => 'amber']),\nDateColumn::make('expiry_date')->sortable(),\nIconColumn::make('is_online')->trueIcon('wifi')->falseIcon('wifi-off'),\nToggleColumn::make('is_active'),          // writes through the policy\nEditableColumn::make('notes')->max(120),  // same validation as the form",
                    ],
                ],
            ],

            'filters' => [
                'title' => 'Filters',
                'summary' => 'Select, multi-select, boolean, date range, and a query builder for the rest.',
                'body' => [
                    'Filters live in the address bar. That is deliberate: a filtered view can be bookmarked, sent to a colleague or reloaded, and the back button does what it looks like it does.',
                    'FILTERS ARE STAGED. Nothing is applied until Apply, so setting three conditions is one request rather than three - which matters on a table where each request is a real query.',
                    'The option list is the validation rule. A select filter validates the submitted value against its declared options, so a hand-edited query string cannot introduce a predicate the table never offered. Unknown values fall back to the default view rather than erroring, because a stale bookmark should show something.',
                    'For the combinations nobody can enumerate in advance there is a query builder: a small tree of conditions the operator assembles, constrained to the columns the resource declared. It answers "expired, on fibre, in this district, not contacted since March" without a developer adding a filter for it.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "->filters([\n    MultiSelectFilter::make('status')->column('clients.status')\n        ->options(['active', 'expired', 'suspended']),\n\n    SelectFilter::make('planType')->label('Plan type')\n        ->column('clients.plan_type')->options(['pppoe', 'hotspot', 'static']),\n\n    DateRangeFilter::make('expiring')->label('Expiry')\n        ->column('clients.expiry_date'),\n])",
                    ],
                ],
            ],

            'grouping' => [
                'title' => 'Grouping rows',
                'summary' => 'Cluster a table by a column, with counts per group.',
                'body' => [
                    'A grouped table renders a header row per distinct value with the rows beneath it. It suits a list somebody scans by category - routers by status, subscribers by plan - and it is a display decision rather than a query one: the same rows, ordered so that the groups hold together.',
                    'Grouping composes with filters and sorting. The group is the outer ordering and the table\'s sort is the inner one, so "by status, newest first within each" is the natural reading.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "return \$table\n    ->columns([...])\n    ->groupBy('status', 'Status')\n    ->defaultSort('created_at', 'desc');",
                    ],
                ],
            ],

            'summaries' => [
                'title' => 'Summaries',
                'summary' => 'Footer totals over the whole filtered set, not the visible page.',
                'body' => [
                    'A summariser puts a total, average, minimum or maximum under a column. It runs over the FILTERED SET rather than the page - a page total is a number somebody will read as the answer and act on, and it is almost never the answer they wanted.',
                    'It is one extra aggregate query per summarised column, which is why it is opt-in. On a table where the count itself is deferred, a summary is the one thing that forces the database to visit every matching row.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "TextColumn::make('price_cents')\n    ->label('Price')\n    ->summarize(Summarizer::sum()->money('KES')),\n\nTextColumn::make('speed_mbps')\n    ->summarize(Summarizer::average()->decimals(1)),",
                    ],
                ],
            ],

            /* ------------------------------------------------------------- forms */

            'forms' => [
                'title' => 'Forms',
                'summary' => 'One declaration produces the create screen, the edit screen and the validation.',
                'body' => [
                    'A form is a list of fields, optionally arranged in sections, tabs or wizard steps. The same declaration renders both create and edit, and produces the validation rules the server enforces.',
                    'THE RULES ARE WRITTEN ONCE, on the server. The client carries no copy - a duplicated rule set drifts, and the copy that drifts is always the client one, so the failure is "the form said it was fine and the save rejected it".',
                    'A resource without a form is read-only, and the panel renders no create or edit affordances at all rather than rendering buttons that lead to a 403.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "public static function form(Form \$form): Form\n{\n    return \$form->schema([\n        Tabs::make()->tabs([\n            Tab::make('Identity')->schema([\n                Section::make('Contact')->columns(2)->schema([\n                    TextField::make('name')->required()->placeholder('Full name'),\n                    TextField::make('phone')->required()->as('tel'),\n                ]),\n            ]),\n            Tab::make('Service')->schema([\n                RadioField::make('plan_type')->required()->inline()->options([\n                    'pppoe' => 'PPPoE', 'hotspot' => 'Hotspot', 'static' => 'Static',\n                ]),\n            ]),\n        ]),\n    ]);\n}",
                    ],
                ],
            ],

            'fields' => [
                'title' => 'Fields',
                'summary' => 'Every field type, and when each one is the right control.',
                'body' => [
                    'TEXT AND NUMBERS. `TextField` (with `as()` for email, tel, url), `TextareaField`, `NumberField`, `PasswordField`, `DateField`. `SliderField` is for a number where the RANGE is the point - a percentage, a quota - and its bounds are enforced server-side, because a range input posts an ordinary value that anybody can change.',
                    'CHOOSING ONE. `SelectField` hides its options until opened, which is right for fifty plans and wrong for three delivery methods; `RadioField` shows them, and the rule of thumb is "if reading the options is part of deciding, show them". A select can be `searchable()`, which fetches on demand - the only workable choice for a relation that grows, since rendering every option inline stops working at a few hundred.',
                    'CHOOSING SEVERAL. `MultiSelectField` is a token input for a long list; `CheckboxListField` shows a short known one. Both validate every MEMBER, not just the array - a rule set that checks only the array accepts `["email", "anything"]`, because the array is an array.',
                    'FREE-FORM AND RICH. `TagsField` for labels people invent (bounded in count and length, since there is no option list to validate against), `RichEditorField` for prose, `KeyValueField` for arbitrary labelled values, `RepeaterField` for a list of sub-records, `FileUploadField` for documents, `ColourField` for a hex colour - pattern-checked, because the value ends up in a style attribute.',
                    'CONDITIONAL FIELDS ARE ENFORCED ON BOTH SIDES FROM ONE DECLARATION. `visibleWhen` hides the control in the browser and becomes `required_if` on the server, so a request claiming the controlling value must supply the field whatever the browser drew.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "TextField::make('email')->as('email')->required(),\nSelectField::make('plan_id')->searchable(fn (string \$term) => Plan::search(\$term)),\nRadioField::make('plan_type')->inline()->options([...]),\nCheckboxListField::make('channels')->columns(2)->options(['email' => 'Email', 'sms' => 'SMS']),\nTagsField::make('labels')->max(10)->suggestions(['vip', 'chased']),\nColourField::make('brand')->presets(['#1e90ff', '#10b981']),\nSliderField::make('quota')->range(0, 100)->step(5)->unit('%'),\nFileUploadField::make('id_document')->image()->maxKilobytes(2048),\n\nTextField::make('other_model')->visibleWhen('model', 'other')->required(),",
                    ],
                ],
            ],

            'layouts' => [
                'title' => 'Sections, tabs and wizards',
                'summary' => 'Grouping fields so a long form is answerable.',
                'body' => [
                    'A `Section` is a titled group with an optional description and a column count. Sections are the default answer to a long form: they let somebody skim for the part they came to change.',
                    '`Tabs` split a record into subjects - identity, service, billing - where each is independently useful and nobody needs all of them at once. A tab is not validation: submitting the form validates every field in every tab, and the client jumps to the first tab with an error rather than reporting one you cannot see.',
                    'A `Wizard` is for a sequence somebody follows once, usually creation. It is the wrong shape for editing, where people arrive knowing which field they came to change and a wizard makes them walk past four steps to reach it.',
                    'These are layout INTENT rather than CSS. A section declares two columns; the client decides what that means at each width, and no class names travel in the schema.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "Wizard::make()->steps([\n    Step::make('Identity')->description('What this device is called')->schema([\n        TextField::make('name')->required(),\n    ]),\n    Step::make('Connection')->schema([\n        TextField::make('ip_address')->label('IP address')->required(),\n    ]),\n]),\n\nSection::make('Contact')->columns(2)->schema([...]),\nGrid::make(3)->schema([...]),",
                    ],
                ],
            ],

            'validation' => [
                'title' => 'Validation',
                'summary' => 'Where the rules live, and why there is only one copy.',
                'body' => [
                    'Every field produces its own rules and the form assembles them. `required()` becomes `required`, an option list becomes `in:`, a slider\'s range becomes `between:` and its step becomes `multiple_of:`. Anything else goes on with `rules()`, which appends rather than replaces.',
                    'A MULTI-VALUE FIELD NEEDS TWO RULES. `array` guards the field and `key.*` guards each member; a rule set that validates only the array accepts a valid array of invalid values. Fields that hold several values declare the member rule themselves - it is not something a caller should have to remember.',
                    'AN EMPTY OPTION LIST REJECTS EVERYTHING rather than accepting anything. A tenant-scoped list that resolves to nothing means "there is nothing you may choose", and the alternative reading - "no constraint" - is how one organisation\'s ids get written against another\'s record.',
                    'The endpoint carries the `precognitive` middleware, so the same rules can answer a live validation request without a second declaration.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "TextField::make('access_code')\n    ->required()\n    ->max(32)\n    ->rules(['alpha_dash', Rule::unique('clients', 'access_code')]),\n\n// What the form produces\n[\n    'access_code' => ['required', 'string', 'max:32', 'alpha_dash', <unique>],\n    'channels'    => ['nullable', 'array'],\n    'channels.*'  => ['in:email,sms'],\n]",
                    ],
                ],
            ],

            /* -------------------------------------------------- acting on records */

            'actions' => [
                'title' => 'Actions',
                'summary' => 'What can be done to one record, declared where the policy can be checked.',
                'body' => [
                    'A record action is a name, an icon, a policy ability and a callback. The panel renders it only when the acting user passes the ability for THAT record - a button that is rendered and then refused teaches somebody the panel is broken, where an absent one teaches them they lack the permission.',
                    'DESTRUCTIVE ACTIONS ASK FIRST, in the page. `window.confirm` is suppressed in embedded browsers - it returns false without showing anything - so a confirmation that relies on it silently does nothing for some people and everything for others.',
                    '`ActionGroup` collapses several into a menu, which is what keeps a row from growing a toolbar. `ReplicateAction` copies a record with the fields you nominate, which is the common "another one like this" case.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "->recordActions([\n    RecordAction::make('suspend')\n        ->label('Suspend')->icon('ban')->ability('update')\n        ->confirm('Suspend this subscriber? Their connection drops immediately.')\n        ->run(fn (Client \$client) => \$client->update(['status' => 'suspended'])),\n\n    ActionGroup::make('More')->actions([\n        ReplicateAction::make()->except(['access_code', 'phone']),\n    ]),\n])",
                    ],
                ],
            ],

            'bulk-actions' => [
                'title' => 'Bulk actions',
                'summary' => 'The same act over a selection, or over everything matching the filters.',
                'body' => [
                    'THE MUTATION IS DECLARED ON THE SERVER. The browser posts an action NAME and nothing else - it cannot describe an attribute set - so a bulk endpoint can never become a way to write an arbitrary column on rows somebody merely happens to see.',
                    'THE INLINE / QUEUED SPLIT IS DECIDED BY WHETHER THE SET IS BOUNDED, not by a row-count guess. An explicit selection is bounded by what a person can tick, so it runs inline and answers in milliseconds. Select-all-matching is unbounded - it can be the whole table - so it is queued and followed, because a request over 90,000 rows will time out half way through and leave the work half done.',
                    'A queued run reports progress and says when it finished. Another tenant\'s ids in the payload simply match nothing: the set is re-derived server-side as the acting user, so the ids are a filter over what they can already see rather than a list of what to write.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "->bulkActions([\n    BulkAction::make('suspend')\n        ->label('Suspend')\n        ->ability('update')\n        ->confirm('Suspend :count subscribers?')\n        ->mutate(['status' => 'suspended']),\n])",
                    ],
                ],
            ],

            'relations' => [
                'title' => 'Related records',
                'summary' => 'A child table on a record page, with its own columns and actions.',
                'body' => [
                    'A relation manager renders a related list as a tab on the record page - a subscriber\'s invoices, a router\'s connections. It is a resource in miniature: its own columns, its own actions, its own policy checks, scoped to the parent record.',
                    'It queries only when its tab is opened. A record page with four relation tabs that all loaded eagerly is four queries nobody asked for on every view, and the tab most people open is the first one.',
                    'WHEN A TAB IS TOO SMALL, NEST A RESOURCE INSTEAD. A resource declaring `$parent` answers only under its parent\'s URL - `/clients/5/sessions` - with the WHOLE table apparatus: its own tabs, filters, saved state, a URL you can paste into a ticket. The parent segment is the authorisation context: every request resolves the parent through its own tenant-scoped model, checks `view` on it, constrains the list to its rows, and stamps the foreign key on create from the URL rather than the form body. The flat spelling deliberately does not route.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "public static function relations(): array\n{\n    return [\n        RelationManager::make('invoices')\n            ->label('Invoices')\n            ->columns([\n                TextColumn::make('number'),\n                DateColumn::make('issued_at'),\n                TextColumn::make('total')->money('KES'),\n            ]),\n    ];\n}",
                    ],
                ],
            ],

            'trash' => [
                'title' => 'Soft deletes and the trash',
                'summary' => 'Where a deleted record goes, and how long it stays there.',
                'body' => [
                    'A model with `SoftDeletes` gets a bin for free. Delete removes the record from every list; it does not appear under a filter, because a table that can include deleted rows is a table where every count and every export has to be read twice.',
                    'THE TRASH IS ONE SCREEN ACROSS EVERY RESOURCE, because "I deleted something yesterday and I need it back" does not come with a resource name attached. It is tenant-scoped and policy-checked per record: restore and delete-forever are separate abilities, since plenty of roles should be able to correct a record without resurrecting one somebody else removed.',
                    'RECORDS ARE KEPT FOR A PUBLISHED WINDOW - seven days by default - shown on each row as "3 days left" and enforced by `panel:prune-trash`, which reads the same config value. Without the sweep a soft delete is not a delete: the row stays in the table, the backups and every later export, and "deleted" quietly means "hidden".',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "# Scheduled daily; safe to run by hand\nphp artisan panel:prune-trash\n\n# See what would go first\nphp artisan panel:prune-trash --pretend --days=30",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "// config/panel.php\n'trash' => [\n    'retention_days' => (int) env('PANEL_TRASH_RETENTION_DAYS', 7),\n],",
                    ],
                ],
                'warning' => 'Under database-per-tenant the pruner reaches the current connection only. Run it inside each tenant\'s context - `tenants:run panel:prune-trash` with stancl.',
            ],

            'import-export' => [
                'title' => 'Import and export',
                'summary' => 'Data in and out, both bounded and both queued.',
                'body' => [
                    'EXPORT WRITES THE CURRENT FILTERED VIEW. Filter to 43 records and you get 43 rows, however many pages they span. It is always queued and streams to disk in chunks - building a CSV in memory is how a worker dies with an allocation error on a large table, which looks like an infrastructure problem rather than an export written wrong.',
                    'The file is announced rather than downloaded silently, and the link outlives the notification: ownership lives in a table with the same retention as the file, not in a cache entry that expires in an hour while the CSV sits on disk.',
                    'CSV INJECTION IS HANDLED. A value starting with `=`, `+`, `-` or `@` is prefixed with a quote, because spreadsheet software treats such a cell as a formula - and without it the panel is the delivery mechanism for content an operator typed in themselves.',
                    'IMPORT IS A WIZARD: upload, map columns to fields, preview, then commit. The mapping step exists because somebody else\'s spreadsheet never has your column names, and the preview exists because the first import is always wrong in a way you can only see.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "# Exports past their window, file and record together\nphp artisan panel:prune-exports",
                    ],
                ],
            ],

            /* -------------------------------------------------------- the panel */

            'navigation' => [
                'title' => 'Navigation',
                'summary' => 'How a screen gets into the sidebar, and how to prove it did.',
                'body' => [
                    'Resources place themselves: a resource declares an icon, a group and a sort, and the panel filters the list by permission server-side, so a resource somebody may not open never reaches their browser.',
                    'ANYTHING THAT IS NOT A RESOURCE HAS TO BE DECLARED, and this is the failure worth guarding. A page that is in no menu is indistinguishable from a page nobody has written - finished screens ended up reachable from nowhere here more than once, with their own tests still green.',
                    'So non-resource pages are declared on the SERVER, where a test can see them, and a coverage test renders every authenticated screen and fails on any that is neither a resource, nor declared, nor listed as deliberately unlinked WITH A REASON.',
                    'The panel contributes its own entries too - the trash screen, and anything a plugin added - so a generated portal links them without the application editing a list.',
                    'A CLUSTER COLLAPSES SEVERAL RESOURCES INTO ONE ENTRY. A group is a heading - every member still owns a line of the column - which is right for peers and wrong for facets of one subject. Declaring a `Cluster` class and pointing each member\'s `$cluster` at it puts one word in the sidebar; the members appear as a sub-navigation strip on every screen inside, permission-filtered like everything else. Non-resource screens that belong to the same subject - a workspace, say - are named by the cluster\'s `pages()`, because they have no class to declare membership on.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "// app/Panel/Pages.php\npublic static function all(): array\n{\n    return [\n        ['title' => 'Mail', 'href' => '/apps/mail', 'icon' => 'mail', 'group' => 'Apps'],\n        ['title' => 'API reference', 'href' => '/docs', 'icon' => 'book-open', 'group' => 'Building'],\n    ];\n}\n\npublic static function intentionallyUnlinked(): array\n{\n    return [\n        '/dashboard' => 'The home screen: first in the sidebar and the logo target.',\n        '/help' => 'Linked from the sidebar footer.',\n    ];\n}",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "// One word in the sidebar; the facets appear once you arrive.\nfinal class NetworkCluster extends Cluster\n{\n    protected static string \$icon = 'router';\n}\n\n// On each member resource:\nprotected static ?string \$cluster = NetworkCluster::class;\n\n// Non-resource screens can join via pages():\n// return [['title' => 'Capacity report', 'href' => '/reports/capacity']];",
                    ],
                ],
            ],

            'pages' => [
                'title' => 'Pages of your own',
                'summary' => 'A screen that is not a resource, inside the panel.',
                'body' => [
                    'Not everything is a table. A workspace, a monitor, a reconciliation screen - these are ordinary Inertia pages with ordinary controllers, and they live inside the panel so they inherit its prefix, guard and middleware.',
                    'A SETTINGS-SHAPED SCREEN NEEDS NONE OF THAT. A `SingularResource` is a form and two functions: declare the fields exactly as a resource does, say where the one record\'s values come from (`values()`) and go to (`save()`), list the class in `config(\'panel.singulars\')`, and the screen mounts at `/{key}` rendered through the same form page every edit screen uses - validation, unsaved-changes guard and all. Gate it with a panel-level ability. Billing preferences is the reference app\'s example.',
                    'Application routes that belong inside EVERY panel go through the route extension point. That is what stops a generated portal getting the resource screens and silently losing import, saved views and the audit trail - which is precisely what happened when those routes lived in the application\'s own route file.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "// Registered once; called inside every panel's group\nPanelRoutes::extend(function (array \$resources, Panel \$panel): void {\n    Route::get('{resource}/import', [ImportController::class, 'create'])\n        ->whereIn('resource', \$resources)->name('import');\n});",
                    ],
                ],
            ],

            'permissions' => [
                'title' => 'Permissions',
                'summary' => 'Ability names, roles, and the matrix people actually tick.',
                'body' => [
                    'Every resource action has an ability name derived from the key: `view_any_clients`, `update_clients`, `restore_clients`. `panel:permissions sync` reconciles the registry with the database, creating what is missing and reporting what is orphaned.',
                    'A RESOURCE WITH NO POLICY DENIES EVERYTHING. That is the correct default - forgetting to write a policy locks a resource down rather than opening it up - and `panel:doctor` names any resource in that state, because "invisible to everybody" and "permissions bug" look identical from a screen.',
                    'Roles are per tenant. The permission matrix is generated from the registry rather than hardcoded, so a resource added today appears in it today; role templates fill it in for the common shapes - support, finance, network operations - and what comes out is an ordinary role with nothing recording where it came from.',
                    'Panel-level abilities cover things that are not a resource: dashboard widget groups, the operations screens. They are declared in config with the label the matrix shows, because a checkbox reading `view_commercial_widgets` is a question rather than a description.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "php artisan panel:permissions sync\nphp artisan panel:doctor    # names resources with no policy",
                    ],
                    [
                        'kind' => 'php',
                        'code' => "// config/panel.php\n'abilities' => [\n    'view_commercial_widgets' => 'Dashboard: sign-ups, plans and renewals',\n    'view_network_widgets' => 'Dashboard: sessions, routers and service areas',\n],",
                    ],
                ],
            ],

            'tenancy' => [
                'title' => 'Tenancy',
                'summary' => 'Column, database or hybrid - and the rule that never bends.',
                'body' => [
                    'In `column` mode every query carries `where tenant_id = ?` and every index leads with that column. In `database` mode stancl/tenancy switches the connection before the panel sees the request, so the panel adds NO column - isolation is already done, and adding a predicate would be redundant and slow. `hybrid` supports both at once, which is what an installation moving its largest customers onto their own databases actually looks like.',
                    'A NULL TENANT KEY IS A DENY SIGNAL, NEVER "ALL TENANTS". Every path fails closed. That is why a misconfigured resolver produces an empty screen rather than everybody\'s data, and it is the single most important line in the tenancy code.',
                    'MOVING A TENANT TO THEIR OWN DATABASE MAKES THEM SLOWER UNTIL YOU RE-INDEX, which is the trap worth knowing about. Indexes that lead with the tenant column cannot serve an ORDER BY when nothing constrains that column, so a dedicated database falls back to full scans - measured here at 0.45 ms against 9.65 ms for the same 25,000 rows. `panel:reindex-tenant` adds the sibling indexes and refuses to run against a shared database.',
                    'The isolation matrix is a test, not a promise: every resource, every action, every combination of two tenants.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "# Inside a dedicated tenant's context\nphp artisan panel:reindex-tenant --pretend\nphp artisan panel:reindex-tenant\n\n# Query counts and plans against real data\nphp artisan panel:benchmark",
                    ],
                ],
                'warning' => 'Cache keys are tenant-prefixed. A value written outside tenancy and read inside it is a miss, and the endpoint 404s - which looks exactly like an ownership check refusing.',
            ],

            'widgets' => [
                'title' => 'Dashboard widgets',
                'summary' => 'Stats, charts and the permissions that decide who sees which.',
                'body' => [
                    'A stat widget is a number, a label and optionally a trend against the previous period. A chart widget is a series, and twelve chart types are available - line, area, stepped, bars in four arrangements, combo, pie, doughnut, polar area, radar and a heatmap.',
                    'WIDGETS FAIL INDEPENDENTLY. One widget throwing must not take the dashboard down, so each renders inside its own boundary and a failed one shows an error card while the rest of the page works.',
                    'A DASHBOARD IS NOT ONE SECRET. The support rota needs connection counts and should not see revenue; finance is the other way round. Widgets are tagged with a panel ability, so the same dashboard shows different cards to different roles rather than being all-or-nothing.',
                    'Time-series widgets read from rollups rather than the raw table. `panel:refresh-rollups` maintains them, which is what keeps a twelve-month chart from being a twelve-month scan.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "StatWidget::make('active')\n    ->label('Active')\n    ->value(fn () => Client::where('status', 'active')->count())\n    ->trend(Trend::againstPrevious())\n    ->ability('view_network_widgets'),\n\nChartWidget::make('signups')\n    ->label('New subscribers')\n    ->series(fn (Window \$window) => Rollup::daily('clients', \$window))\n    ->ability('view_commercial_widgets'),",
                    ],
                ],
            ],

            /* -------------------------------------------------------- extending */

            'custom-fields' => [
                'title' => 'A field type of your own',
                'summary' => 'Two halves: a PHP class that describes it, a Vue control registered for it.',
                'body' => [
                    'THE SERVER HALF is a subclass of `Field`. It declares its type, adds whatever keys the control needs to `toSchema()`, and brings its own validation rules. Nothing in the package needs to know it exists.',
                    'THE CLIENT HALF is a Vue component registered against the same type string. The registry is consulted BEFORE the built-in controls, which means you can also REPLACE one - registering your own `select` control changes every select in the panel.',
                    'The contract is plain `v-model`: the component receives `field`, `modelValue`, `options`, `errors` and `disabled`, and emits `update:modelValue`. That is deliberately ordinary - a control written for a panel should be a normal Vue component that happens to be usable here.',
                    'Register in your application\'s entry point, or in a plugin\'s. The package registers its own five that way, so the path you take is the one it takes.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "final class SignaturePadField extends Field\n{\n    private int \$penWidth = 2;\n\n    public function penWidth(int \$pixels): static\n    {\n        \$this->penWidth = \$pixels;\n\n        return \$this;\n    }\n\n    public function type(): string\n    {\n        return 'signature-pad';\n    }\n\n    protected function typeRules(): array\n    {\n        return ['string', 'starts_with:data:image/png;base64,'];\n    }\n\n    public function toSchema(): array\n    {\n        return [...parent::toSchema(), 'penWidth' => \$this->penWidth];\n    }\n}",
                    ],
                    [
                        'kind' => 'text',
                        'code' => "// resources/js/app.ts\nimport { registerFieldControl } from '@alxtexh-enterprise/panel'\nimport SignaturePad from './fields/SignaturePad.vue'\n\nregisterFieldControl('signature-pad', SignaturePad)",
                    ],
                ],
                'warning' => 'An option-bearing field must override `resolveOptions()`. `Field` returns null - "no options" - and the control then renders with nothing to choose, on a form that otherwise looks complete.',
            ],

            'plugins' => [
                'title' => 'Plugins',
                'summary' => 'A package that installs resources, routes and pages into a panel.',
                'body' => [
                    'A plugin implements `PanelPlugin` - an id, which panels it applies to, and a `register()` that adds things. A published package registers itself from its own service provider, so `composer require` is the whole installation; an application can also name one in `panel.plugins` or in a specific panel.',
                    'A PLUGIN CAN ONLY ADD. It never receives the `Panel` itself, because an API that handed it over is one where installing a package can change the guard, the tenancy context or the middleware - a billing plugin able to turn off tenant scoping as a side effect of being installed.',
                    'ROUTES GO INSIDE THE PANEL\'S GROUP, so a plugin route carries the portal\'s prefix, middleware, guard and route-name prefix without asking. A package registering routes from its own provider would get none of that, and an unauthenticated route into a tenant\'s records is not something anybody spots reviewing a package they did not write.',
                    'A plugin\'s resource lands in the panel that ACCEPTED it, not the one its class names - a package cannot know what an installation called its portals.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "final class BillingPlugin extends Plugin\n{\n    public function id(): string\n    {\n        return 'acme/billing';\n    }\n\n    // Plugin defaults to tenant panels; override to change that\n    public function register(PluginContext \$context): void\n    {\n        \$context->resources([InvoiceResource::class]);\n\n        \$context->page('Invoices', 'billing/invoices', 'file-text', 'Billing');\n\n        \$context->routes(function (Panel \$panel): void {\n            Route::get('billing/invoices', [InvoiceController::class, 'index'])\n                ->name('billing.invoices');\n        });\n    }\n}\n\n// In the package's service provider\napp(PanelManager::class)->plugin(new BillingPlugin);",
                    ],
                ],
            ],

            'testing' => [
                'title' => 'Testing a panel',
                'summary' => 'Exported assertions for the three things that actually go wrong.',
                'body' => [
                    '`InteractsWithPanels` is a trait for your own test cases. Every helper goes through HTTP, because calling a resource\'s methods directly proves the class works and says nothing about whether the route, the middleware, the panel, the guard and the policy line up - which is where the failures are.',
                    'THE THREE ASSERTIONS TO WRITE FIRST. That the resource is registered at all - a class that was never discovered has no route, no menu entry and no error. That another organisation\'s record is invisible AND unreachable - the list is the obvious half, the record URL is the half people forget and the half an attacker uses. And that somebody without the ability is refused - a policy that is registered and never consulted permits everything, silently.',
                    'URLs are built from the registry rather than written out, so a test does not hardcode `/clients` and then fail in a portal mounted somewhere else.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "final class InvoiceResourceTest extends TestCase\n{\n    use InteractsWithPanels;\n    use RefreshDatabase;\n\n    public function test_it_is_scoped_and_guarded(): void\n    {\n        \$this->assertResourceRegistered('invoices');\n\n        \$this->assertResourceShows(\$this->operator, 'invoices', \$mine);\n        \$this->assertTenantIsolation(\$this->operator, 'invoices', \$theirs);\n        \$this->assertResourceRefuses(\$this->stranger, 'invoices');\n\n        \$this->assertSchemaHasColumn(\$this->operator, 'invoices', 'total');\n        \$this->assertPanelValidationFails(\$this->operator, 'invoices', ['number' => ''], 'number');\n    }\n}",
                    ],
                ],
            ],

            'blueprint' => [
                'title' => 'Building with an AI agent',
                'summary' => 'A generated instruction file, and the documentation as plain text.',
                'body' => [
                    'An agent asked to "add an invoices screen" will otherwise invent a controller, a route and a Blade view. All three work, none of them is how this panel does anything, and every one quietly skips the tenant scope and the policy. The cost is not the wasted attempt - it is that the result LOOKS right: a resource with no policy is invisible, and a query without the scope returns another organisation\'s rows with a 200.',
                    '`panel:blueprint` writes the conventions into `AGENTS.md`, which is what agents read on every session without anybody remembering to paste anything. It leads with the rules that fail silently rather than with a feature tour, because everything discoverable by reading a class - method names, options - an agent can already find.',
                    'IT IS GENERATED, NOT MAINTAINED. The resource list, the panels and the commands come from the running application, so an instruction file naming a resource somebody deleted last week cannot happen. That matters more here than in ordinary documentation: a person notices a stale claim and an agent writes code against it. Re-run it after adding a resource or a portal.',
                    'IT APPENDS BETWEEN MARKERS rather than overwriting. `AGENTS.md` usually holds a team\'s own notes - deploy steps, conventions nothing here knows about - and a command that replaced the file is a command nobody runs twice.',
                    'THE DOCUMENTATION IS ALSO FETCHABLE AS TEXT. `/docs/llms.txt` is an index in the shape agents expect, so a tool can decide what to read rather than pulling everything to answer one question; `/docs/guide.md` is this whole guide as one document, and `/docs/blueprint.md` is the instruction file. All three are behind the panel\'s own authentication, because the blueprint names this installation\'s resources and portals.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "# Write it into the project\nphp artisan panel:blueprint\n\n# Somewhere else, or to read it first\nphp artisan panel:blueprint --file=CLAUDE.md\nphp artisan panel:blueprint --print",
                    ],
                    [
                        'kind' => 'text',
                        'code' => "# Point an agent at the documentation over HTTP\n\n/docs/llms.txt        an index of every page, with summaries\n/docs/guide.md        the whole guide as one markdown document\n/docs/blueprint.md    the conventions and the verification steps",
                    ],
                ],
                'warning' => 'The blueprint tells an agent what to do; it does not enforce anything. The guards are the policy, the tenant scope and the tests - `panel:doctor` and the isolation assertions in `InteractsWithPanels` are what actually catch a mistake.',
            ],

            /* --------------------------------------------------------- running it */

            'operations' => [
                'title' => 'Running it',
                'summary' => 'The scheduler, backups, and the checks that catch what is silently wrong.',
                'body' => [
                    'ONE CRON ENTRY, and it is the quietest serious failure a deployment has. Without `schedule:run` there are no backups, no cleanup, no monitoring and no scheduled reports - and every screen reporting on those looks perfectly healthy, because the work simply never ran. The panel writes a heartbeat every minute so a stopped scheduler is visible rather than assumed.',
                    'BACKUPS ARE CONFIGURED FROM A SCREEN: schedule, retention, off-site destination, and who is told when one finishes or fails. A destination is probed before it is saved, because a write-only credential that was wrong is discovered on the night it matters.',
                    'RESTORE STOPS WRITES WHILE IT RUNS. A restore over a live database with traffic still arriving produces a database that is neither the snapshot nor the current state.',
                    '`panel:doctor` reports configuration that is silently wrong: a broadcaster that cannot authorise channels, a session limit the store cannot support, indexes a dedicated tenant cannot use, a knowledge base whose stored vectors no longer match the embedder. Everything it names returns 200 today and is wrong anyway.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => '* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1',
                    ],
                    [
                        'kind' => 'shell',
                        'code' => "php artisan panel:doctor\nphp artisan panel:doctor --json    # for a monitor",
                    ],
                ],
            ],

            'reports' => [
                'title' => 'Scheduled reports',
                'summary' => 'A saved filter, run as its owner, emailed as a CSV.',
                'body' => [
                    'It is the export button minus the person. Every operations team has somebody who opens the panel each Monday, applies four filters, presses Export and forwards the file - and that person exists because the panel could not do it.',
                    'THE FILTER IS STORED, NEVER THE ROWS. A report is a question, and the answer is recomputed each time it runs; storing the result would make every Monday a copy of the day it was created.',
                    'IT RUNS AS ITS OWNER, so the panel\'s own policies and tenant scope apply. A report whose owner loses access stops producing rows, which is the correct direction, because the output leaves the building.',
                    'A REPORT WITH NO ROWS IS STILL SENT. "No overdue accounts this week" is the answer somebody is waiting for, and silence is indistinguishable from a scheduler that stopped.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "ScheduledReport::create([\n    'tenant_id' => \$tenant->id,\n    'user_id' => \$owner->id,           // whose permissions it runs with\n    'name' => 'Overdue accounts',\n    'resource' => 'clients',\n    'state' => ['status' => 'expired'], // the filters, as a saved view holds them\n    'frequency' => 'weekly',\n    'weekday' => 1,\n    'time' => '07:00',\n    'recipients' => ['finance@example.com'],\n]);",
                    ],
                    [
                        'kind' => 'shell',
                        'code' => "# One scheduler entry asks every minute; the rows decide\nphp artisan panel:reports-due\nphp artisan panel:reports-due --now=\"2026-08-03 07:00\"",
                    ],
                ],
            ],

            'knowledge' => [
                'title' => 'Retrieval and the assistant',
                'summary' => 'So the assistant cites a page instead of inventing an answer.',
                'body' => [
                    'Asked "how do exports work here", a language model with nothing to read answers from nothing - fluently, plausibly, and about somebody else\'s software. Retrieval replaces that with the actual passage and a link to it.',
                    'YOU DECLARE WHAT IS WORTH INDEXING. A knowledge source yields documents; the indexer cuts each into passages, embeds them and stores them under the current organisation. Index only what everyone who can use the assistant may already read - retrieved text goes into a prompt and comes back paraphrased, with no quotation marks and no source.',
                    'THE DEFAULT EMBEDDER IS LOCAL AND FREE. It hashes words into buckets, so it matches "suspension" to "suspend" and will never match "turn off their line". Point `panel.knowledge.embedder` at `ProviderEmbedder` for real semantic matching - and re-index, because two models\' vectors are not comparable.',
                    'On PostgreSQL with pgvector the search runs in the database against a cosine index; everywhere else the candidates are read and scored in PHP. Below a similarity floor the answer is an empty list rather than the least-bad row - the caller is a model, and the least-bad row is what it builds a confident paragraph from.',
                ],
                'blocks' => [
                    [
                        'kind' => 'php',
                        'code' => "final class HelpSource implements KnowledgeSource\n{\n    public function key(): string\n    {\n        return 'help';\n    }\n\n    public function documents(): iterable\n    {\n        foreach (HelpArticles::all() as \$article) {\n            yield new Document(\n                source: \$this->key(),\n                id: \$article['id'],           // stable: re-indexing REPLACES\n                title: \$article['title'],\n                content: implode(\"\\n\\n\", \$article['body']),\n                url: '/help#'.\$article['id'], // a citation somebody can check\n            );\n        }\n    }\n}",
                    ],
                    [
                        'kind' => 'shell',
                        'code' => "php artisan panel:knowledge index --tenant=1\nphp artisan panel:knowledge index --tenant=1 --fresh\nphp artisan panel:knowledge status --tenant=1",
                    ],
                ],
            ],

            'api' => [
                'title' => 'The public API',
                'summary' => 'Tokens, abilities and a rate limit, separate from the panel\'s own endpoints.',
                'body' => [
                    'The REST API is mounted once at `/api/v1`, not per panel: a panel is how a PERSON reaches data, and a token is an integration reading records. Making an integration choose a portal would leak an interface detail into a contract.',
                    'A TOKEN CARRIES ABILITIES, and they are INTERSECTED with what the token\'s user may do. Granting an integration `delete_clients` cannot exceed the permissions of the account it belongs to - a token is a narrower key to the same door, never a wider one.',
                    'THE RATE LIMIT IS PER TOKEN, not per address. One customer behind a NAT is one address and many integrations, and a per-IP limit punishes all of them for the noisiest.',
                    'The endpoints share the resource definitions, so a column added to a screen is a field in the API, and the OpenAPI document is generated from the same source rather than maintained beside it.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "php artisan panel:api-token ops@acme.test \"Billing sync\" --abilities=view_any_clients,update_clients\n\ncurl -H \"Authorization: Bearer pk_…\" https://panel.test/api/v1/clients?status=expired",
                    ],
                ],
            ],

            'commands' => [
                'title' => 'Every command',
                'summary' => 'The full list, in the order you are likely to need them.',
                'body' => [
                    'Everything the package registers. The generators come first, the diagnostics next, and the maintenance commands - all of which are scheduled and all of which are safe to run by hand - last.',
                ],
                'blocks' => [
                    [
                        'kind' => 'shell',
                        'code' => "php artisan panel:install                   # publish config, register the provider\nphp artisan panel:update                    # after composer update: page files, guide, doctor\nphp artisan make:panel {id}                 # a portal: provider, resources, routes\nphp artisan make:panel {id} --auth          # ...and its own sign-in, on its own guard\nphp artisan panel:make-user                 # the first account, so somebody can sign in\nphp artisan make:panel-resource {Model}     # a screen, optionally --generate\nphp artisan panel:permissions sync          # reconcile ability names with the registry\nphp artisan panel:doctor                    # what is silently wrong
php artisan panel:search-index              # the trigram/fulltext DDL search would use\nphp artisan panel:doctor-alert              # doctor on a schedule, announced when the answer changes\nphp artisan panel:blueprint                 # write the conventions into AGENTS.md, for an AI agent\nphp artisan panel:benchmark                 # query counts and timings on real data\nphp artisan panel:seed-demo                 # believable data to build against\nphp artisan panel:seed-reference            # the reference application's own data\nphp artisan panel:cache-clear               # drop cached resource schemas
php artisan panel:sitemap-generate          # write sitemap.xml from every registered URL\nphp artisan panel:reindex-tenant            # indexes for a dedicated tenant database\nphp artisan panel:api-token {email} {name}  # issue a public API token\nphp artisan panel:reports-due               # dispatch any scheduled reports due now\nphp artisan panel:knowledge index           # index panel content for the assistant\nphp artisan panel:refresh-rollups           # maintain the time-series tables\nphp artisan panel:monitor-sample            # one monitoring sample, and any threshold alerts\nphp artisan panel:prune-trash               # empty the bin past its retention\nphp artisan panel:prune-exports             # expired exports, file and record\nphp artisan panel:prune-uploads             # uploads nobody ever saved\nphp artisan panel:tenant-suspension {slug}  # lock an organisation out, or lift it\nphp artisan panel:journey                   # walk a first-run journey end to end",
                    ],
                ],
            ],
        ];
    }

    /**
     * The whole guide as one markdown document.
     *
     * FOR THE READER THAT IS NOT A PERSON. An agent asked to add a screen cannot
     * click through thirty pages; it fetches one file, or it guesses. Filament
     * ships `llms.txt` for the same reason, and the reason is worth stating
     * plainly: documentation that only exists as a rendered page is documentation
     * half the people writing code against it cannot read.
     *
     * GENERATED FROM THE SAME SOURCE as the screen, so there is no second copy to
     * drift. The prose is written with a capitalised lead per paragraph, which
     * markdown renders as bold - the same shape the page shows as a heading.
     */
    public static function markdown(): string
    {
        $out = ["# Building a panel\n"];

        $out[] = 'What you need before you start, which command comes next, and the '
            ."decisions that are hard to change later.\n";

        foreach (self::groups() as $group) {
            $out[] = '## '.$group['title']."\n";

            foreach ($group['pages'] as $slug) {
                $page = self::pages()[$slug];

                $out[] = '### '.$page['title'];
                $out[] = '_'.$page['summary']."_\n";

                foreach ($page['body'] as $paragraph) {
                    $out[] = $paragraph."\n";
                }

                foreach ($page['blocks'] ?? [] as $block) {
                    $language = $block['kind'] === 'shell' ? 'bash' : $block['kind'];

                    $out[] = '```'.$language."\n".$block['code']."\n```\n";
                }

                if (isset($page['warning'])) {
                    $out[] = '> **Careful:** '.$page['warning']."\n";
                }
            }
        }

        return implode("\n", $out);
    }

    /**
     * The index an agent fetches first.
     *
     * LINKS RATHER THAN CONTENT, in the `llms.txt` shape: a list of every page
     * with a one-line summary, so a tool can decide what to read instead of
     * pulling the whole guide to answer one question.
     */
    public static function llmsTxt(string $base): string
    {
        $out = [
            '# '.config('app.name').' — panel documentation',
            '',
            '> An administration panel built with Alxtexhpanel. Screens are declared as PHP '
            .'classes; the framework generates routes, permissions and navigation.',
            '',
            '## Start here',
            '',
            '- ['.'The blueprint]('.$base.'/docs/blueprint.md): the conventions to follow and the '
            .'mistakes that return HTTP 200. Read this before writing code.',
            '- [The whole guide]('.$base.'/docs/guide.md): every page below, as one document.',
            '',
        ];

        foreach (self::groups() as $group) {
            $out[] = '## '.$group['title'];
            $out[] = '';

            foreach ($group['pages'] as $slug) {
                $page = self::pages()[$slug];

                $out[] = '- ['.$page['title'].']('.$base.'/about/building/'.$slug.'): '.$page['summary'];
            }

            $out[] = '';
        }

        return implode("\n", $out);
    }

    /* ---------------------------------------------------------------- search */

    /**
     * Pages matching `$term`, best first.
     *
     * IT SEARCHES THE PROSE, NOT THE TITLES. A table of contents already
     * answers "which page is called filters"; the question somebody actually
     * arrives with is "where does it say anything about `visibleWhen`" - and
     * that word appears in the body of one page and the title of none. Matching
     * titles only would make the search box a slower version of the list beside
     * it.
     *
     * ON THE SERVER, deliberately. The alternative is shipping every page with
     * every page - the whole guide is tens of kilobytes of prose - so that a
     * search nobody performs is paid for by everybody who opens the
     * documentation to read one paragraph.
     *
     * RANKED, because a term in a title means something different from a term in
     * the fourth paragraph. Title beats summary beats prose beats code, and
     * within a rank the guide\'s own reading order breaks the tie - which is
     * more useful than alphabetical, since earlier pages are more introductory.
     *
     * @return list<array{slug: string, title: string, group: string, snippet: list<array{type: string, value: string}>}>
     */
    public static function search(string $term): array
    {
        $term = trim($term);

        /*
         * TWO CHARACTERS MINIMUM. A single letter matches most of the guide, so
         * the result is a list of everything - which reads as "the search is
         * broken" rather than "type more".
         */
        if (mb_strlen($term) < 2) {
            return [];
        }

        $groupOf = [];

        foreach (self::groups() as $group) {
            foreach ($group['pages'] as $slug) {
                $groupOf[$slug] = $group['title'];
            }
        }

        $results = [];
        $order = 0;

        foreach (self::slugs() as $slug) {
            $page = self::pages()[$slug];
            $order++;

            $rank = null;
            $snippet = null;

            if (self::contains($page['title'], $term)) {
                $rank = 0;
                $snippet = $page['summary'];
            } elseif (self::contains($page['summary'], $term)) {
                $rank = 1;
                $snippet = $page['summary'];
            }

            foreach ($page['body'] as $paragraph) {
                if (! self::contains($paragraph, $term)) {
                    continue;
                }

                // A prose match beats a code one but not a title; the first
                // matching paragraph is the snippet, because it is the one the
                // reader will land on.
                if ($rank === null || $rank > 2) {
                    $rank = 2;
                    $snippet = $paragraph;
                }

                break;
            }

            if ($rank === null) {
                foreach ($page['blocks'] ?? [] as $block) {
                    if (self::contains($block['code'], $term)) {
                        $rank = 3;
                        $snippet = $page['summary'];

                        break;
                    }
                }
            }

            if ($rank === null) {
                continue;
            }

            $results[] = [
                'slug' => $slug,
                'title' => $page['title'],
                'group' => $groupOf[$slug] ?? '',
                'snippet' => self::highlight(self::around((string) $snippet, $term), $term),
                'rank' => $rank,
                'order' => $order,
            ];
        }

        usort(
            $results,
            static fn (array $a, array $b): int => [$a['rank'], $a['order']] <=> [$b['rank'], $b['order']],
        );

        return array_map(
            static fn (array $r): array => array_diff_key($r, ['rank' => null, 'order' => null]),
            array_slice($results, 0, 12),
        );
    }

    private static function contains(string $haystack, string $needle): bool
    {
        return mb_stripos($haystack, $needle) !== false;
    }

    /**
     * A window of text around the first match.
     *
     * A SNIPPET THAT STARTS AT THE PARAGRAPH is a snippet whose match is often
     * off the end of the line - so the result shows a sentence that does not
     * contain the word somebody typed, which reads as a wrong result. This
     * centres on the match instead.
     */
    private static function around(string $text, string $term, int $width = 140): string
    {
        $text = trim(preg_replace('/\s+/u', ' ', $text) ?? $text);

        $at = mb_stripos($text, $term);

        if ($at === false || mb_strlen($text) <= $width) {
            return $text;
        }

        $start = max(0, $at - (int) ($width / 3));

        $window = mb_substr($text, $start, $width);

        return ($start > 0 ? '…' : '').trim($window).'…';
    }

    /**
     * Text split so the client can mark the match without `v-html`.
     *
     * THE SAME REASON THE CODE SPANS ARE SEGMENTS: highlighting by injecting
     * `<mark>` into a string means rendering unescaped HTML from content
     * somebody will one day edit.
     *
     * @return list<array{type: string, value: string}>
     */
    private static function highlight(string $text, string $term): array
    {
        $parts = preg_split(
            '/('.preg_quote($term, '/').')/iu',
            $text,
            -1,
            PREG_SPLIT_DELIM_CAPTURE,
        );

        $out = [];

        foreach ($parts ?: [$text] as $i => $part) {
            if ($part === '') {
                continue;
            }

            // Odd pieces are the captured term - see the note in `segments`
            // about why empty pieces are dropped after the parity is read.
            $out[] = ['type' => $i % 2 === 1 ? 'match' : 'text', 'value' => $part];
        }

        return $out;
    }
}
