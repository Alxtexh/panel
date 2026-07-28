<script setup lang="ts">
/**
 * How to build a panel with PanelKit.
 *
 * IT LIVES IN THE PANEL, NOT IN A README. Documentation in a repository is read
 * once, by whoever set the project up; documentation in the running application
 * is read by whoever is looking at the thing it describes, at the moment they
 * have the question. That is also what keeps it honest - a claim on this page is
 * one screen away from being checked.
 *
 * IT IS WRITTEN AS A SEQUENCE, not as an API dump. The reference for individual
 * endpoints is the API screen; what is missing without this page is the order:
 * what you need before you start, which command comes next, and which decisions
 * are hard to change later.
 *
 * THE CODE SAMPLES ARE COPIED FROM THIS APPLICATION rather than invented. Every
 * one of them is a shortened form of a file that exists here, so a sample that
 * stops working is a sample somebody can diff against a real class.
 */
import AppLayout from '@/layouts/AppLayout.vue'
import { Head } from '@inertiajs/vue3'
import { Check, Copy, Terminal, TriangleAlert } from '@lucide/vue'
import { computed, ref } from 'vue'

defineOptions({ layout: AppLayout })

interface Block {
    /** `shell` renders with a prompt and a copy button; `php` and `text` do not. */
    kind: 'shell' | 'php' | 'text'
    code: string
}

interface Section {
    id: string
    title: string
    /** Paragraphs. Kept as separate strings so each is one idea. */
    body: string[]
    blocks?: Block[]
    /** The thing that is easy to get wrong here, if there is one. */
    warning?: string
}

const sections: Section[] = [
    {
        id: 'before',
        title: 'Before you start',
        body: [
            'PanelKit is a Laravel package plus a Vue rendering layer. It does not replace Laravel - it assumes one, and it assumes you have already decided how people sign in.',
            'You need PHP 8.4, Laravel 12 or 13, Node 20 or newer, and a database. SQLite is enough to build against; the panel makes no assumption about which engine you finish on.',
            'Two things are worth deciding before the first command, because both are awkward to change afterwards: whether the application is multi-tenant, and which guard authenticates each portal. Everything else here is reversible.',
        ],
        blocks: [
            {
                kind: 'shell',
                code: 'composer require panelkit/panel\nnpm install @panelkit/ui\nphp artisan panel:install',
            },
        ],
        warning:
            'If the application is multi-tenant, set `panel.tenancy.mode` before generating resources. A resource written against the wrong mode queries correctly and scopes to nothing.',
    },
    {
        id: 'panels',
        title: 'A panel is a portal',
        body: [
            'A panel is a routing and authorization boundary: a URL prefix, a guard, a set of middleware, and - the one that matters - whether tenant scoping applies to everything it queries.',
            'Most applications end up with more than one. A tenant-facing admin portal, a platform portal for whoever runs the installation, sometimes a reseller or partner portal. They are not themes; they see different data through different guards.',
            'Each panel is one command. It writes a provider, a resource directory, and registers itself - there is no route file to edit and no list to keep in step.',
        ],
        blocks: [
            {
                kind: 'shell',
                code:
                    '# The operator portal, scoped to a tenant\nphp artisan make:panel admin\n\n# A platform portal that sees ACROSS tenants\nphp artisan make:panel platform --central --path=platform\n\n# A partner portal on its own guard\nphp artisan make:panel reseller --guard=reseller',
            },
            {
                kind: 'php',
                code:
                    "// app/Providers/Panels/PlatformPanelProvider.php - generated, and meant to be edited\n$panels->registerPanel(\n    Panel::make('platform')\n        ->path('platform')\n        ->guard('web')\n        ->context(Panel::CONTEXT_CENTRAL)   // no tenant scoping\n        ->middleware(['web'])\n        ->authMiddleware(['auth:web']),\n);",
            },
        ],
        warning:
            '`--central` switches tenant scoping OFF for that portal. Use it for a platform portal and never for a customer-facing one: a central query reached from a tenant request returns every organisation and looks completely normal.',
    },
    {
        id: 'resources',
        title: 'A screen is a class',
        body: [
            'A resource is one class describing one model: its table, its form, its actions. There is no Vue to write and nothing to register - the class is discovered, routed and rendered.',
            '`--generate` reads the database and pre-fills columns and fields from the real schema. It is a starting point, not a contract: edit it freely.',
            'Resource keys are unique across the whole installation, because a key is the URL segment, the ability name and the audit label at once. Two resources claiming one key is refused at boot rather than silently letting one overwrite the other.',
        ],
        blocks: [
            {
                kind: 'shell',
                code:
                    'php artisan make:panel-resource Client --generate\n\n# Into a specific portal\nphp artisan make:panel-resource Tenant --panel=platform --generate',
            },
            {
                kind: 'php',
                code:
                    "final class ClientResource extends Resource\n{\n    protected static string \$model = Client::class;\n    protected static string \$panel = 'admin';\n\n    public static function table(Table \$table): Table\n    {\n        return \$table\n            ->columns([\n                TextColumn::make('name')->searchable()->sortable(),\n                BadgeColumn::make('status')->colors(['active' => 'success']),\n                DateColumn::make('expiry_date')->sortable(),\n            ])\n            ->filters([SelectFilter::make('status')->options(['active', 'expired'])])\n            ->defaultSort('created_at', 'desc');\n    }\n}",
            },
        ],
    },
    {
        id: 'forms',
        title: 'Forms, and where validation lives',
        body: [
            'A resource without a form is read-only. Adding one makes create and edit pages appear; the rules are declared on the fields and enforced on the server.',
            'The browser never decides what is valid. A field hidden by a condition is still validated, and a request that skips the form entirely is refused by the same rules the form displays.',
            'Never add a field for the tenant column. It is set from request context, and a form field for it is a way to write a record into another organisation.',
        ],
        blocks: [
            {
                kind: 'php',
                code:
                    "public static function form(Form \$form): Form\n{\n    return \$form->columns(2)->schema([\n        TextField::make('name')->required(),\n        TextField::make('phone')->required()->rules(['regex:/^\\+?[0-9 ]{7,}\$/']),\n        SelectField::make('status')->options(['active', 'expired'])->required(),\n        DateField::make('expiry_date')->required(),\n        FileUploadField::make('id_document')->help('Stored privately.'),\n    ]);\n}",
            },
        ],
    },
    {
        id: 'actions',
        title: 'Actions',
        body: [
            'A record action is a button on a row. A bulk action applies to a selection, or to everything matching the current filters.',
            'Both are named by KEY, never by behaviour. The request says which declared action to run; it can never describe what the action does, so an endpoint cannot be talked into performing something the resource did not offer.',
            'Anything destructive should ask first, and anything long-running should be queued - a bulk action over a filtered set can be a million rows.',
        ],
        blocks: [
            {
                kind: 'php',
                code:
                    "RecordAction::make('suspend', 'Suspend')\n    ->icon('ban')\n    ->color('warning')\n    ->authorize('update')\n    ->confirm('They lose access immediately. Continue?')\n    ->handle(fn (Client \$client) => \$client->suspend()),\n\nBulkAction::make('export', 'Export CSV')->queued(),",
            },
        ],
    },
    {
        id: 'permissions',
        title: 'Permissions',
        body: [
            'Ability names are derived from the registry, never stored: a resource keyed `clients` produces `view_any_clients`, `update_clients` and the rest, because that is a fact about the code rather than a row somebody typed.',
            'A resource whose model has no policy grants nothing. That is deliberate - the alternative is a screen that renders and permits everything because a file was forgotten.',
            'Roles are ordinary records. Templates fill the matrix as a starting point and then get out of the way; nothing stays linked to a template afterwards.',
        ],
        blocks: [
            {
                kind: 'shell',
                code: 'php artisan panel:permissions sync',
            },
            {
                kind: 'php',
                code:
                    "// A resource declares which actions exist for it. A read-only one\n// has no `delete` to grant, and offering the checkbox would be worse\n// than noise: somebody ticks it believing it does something.\npublic static function actions(): array\n{\n    return ['viewAny', 'view'];\n}",
            },
        ],
    },
    {
        id: 'tenancy',
        title: 'Tenancy',
        body: [
            'Three modes. `column` puts every organisation in one database separated by a tenant column that the panel adds to every query. `database` gives each its own and the panel adds nothing, because isolation happened before it saw the request. `hybrid` lets the mode be a property of the tenant rather than of the installation.',
            'A null tenant key is always a DENY signal, never "all tenants". That single rule is what makes the failure mode an empty list rather than a leak.',
            'Scoping follows the PANEL, not the request. A central panel applies none; a tenant panel refuses to operate without a resolved organisation.',
        ],
        blocks: [
            {
                kind: 'php',
                code: "// config/panel.php\n'tenancy' => [\n    'mode' => env('PANEL_TENANCY_MODE', 'column'),\n    'column' => 'tenant_id',\n],",
            },
        ],
        warning:
            'Test isolation with real fixtures rather than by reading the code. This project keeps a matrix that tries every read and write against another organisation\'s record for every registered resource - it has caught real leaks twice.',
    },
    {
        id: 'dashboard',
        title: 'Dashboard and widgets',
        body: [
            'Widgets are declared like everything else. Each resolves independently and none blocks the first paint, so one slow aggregate does not hold up the other five.',
            'A widget that fails reports itself and leaves the rest of the page working. That is the behaviour, not an aspiration - there is a test that renders a deliberately broken widget and asserts the dashboard still answers.',
            'A widget may declare an ability. Filtering happens before the deferred prop is registered, so a figure somebody may not see is never computed and never travels.',
        ],
        blocks: [
            {
                kind: 'php',
                code:
                    "StatWidget::make('clients_total', 'Total clients')\n    ->value(fn (): int => Client::query()->count())\n    ->description('All subscribers'),\n\nChartWidget::make('signups', 'New subscribers')\n    ->type('line')\n    ->withPeriods()\n    ->ability('view_commercial_widgets')\n    ->data(fn (Period \$p) => \$this->signupSeries()->resolve(\$p)),",
            },
        ],
    },
    {
        id: 'api',
        title: 'The public API',
        body: [
            'The panel\'s own endpoints are not an API. They are session-authenticated, shaped for the interface, and free to change whenever a screen changes - anybody who integrates against them breaks on a redesign.',
            'The public API is the other surface: versioned in the path, JSON in and out, and stable. It runs over the same resource registry, so the same policies decide and the same tenant scope applies - an API with its own query path is an API with its own leaks.',
            'A token carries the organisation, because there is no session and no host to resolve one from. It can only ever NARROW: what it grants is intersected with what its owner may do at the moment of the request, so a key outliving the permission that justified it grants nothing.',
        ],
        blocks: [
            {
                kind: 'shell',
                code:
                    '# Issue one. The plaintext is shown once and never stored.\nphp artisan panel:api-token ops@example.com "Billing sync"\n\n# Scope it to reading, rather than to everything the account can do\nphp artisan panel:api-token ops@example.com "Reporting" \\\n  --ability=view_any_clients --ability=view_clients --days=90',
            },
            {
                kind: 'shell',
                code:
                    'curl -H "Authorization: Bearer pk_..." https://example.com/api/v1/clients\ncurl -H "Authorization: Bearer pk_..." https://example.com/api/v1/clients/42\ncurl -X PATCH -H "Authorization: Bearer pk_..." -H "Content-Type: application/json" \\\n  -d \'{"status":"suspended"}\' https://example.com/api/v1/clients/42',
            },
        ],
        warning:
            'Lists page by cursor, never by page number - `?page=5000` is the one access pattern the rest of this system was built to avoid. Follow `meta.next_cursor`.',
    },
    {
        id: 'operations',
        title: 'Running it',
        body: [
            'Backups, logs and the platform report are built in, behind two abilities: `view_operations` opens them, `manage_backups` is what deletes a snapshot or restores over the live database.',
            'The schedule is the feature. A backup screen with nothing scheduled can only ever say "no backups have been taken yet", so the scheduler entries matter more than the page.',
            '`panel:doctor` answers "is anything silently wrong" from a shell, and the same findings appear on the Platform screen for whoever does not have one.',
        ],
        blocks: [
            {
                kind: 'shell',
                code:
                    'php artisan panel:doctor\nphp artisan panel:benchmark\n\n# The one line without which nothing is scheduled\n* * * * * cd /path/to/app && php artisan schedule:run >> /dev/null 2>&1',
            },
        ],
        warning:
            'A missing cron entry is the quietest serious failure a deployment has: no backups, no cleanup, no monitoring - and every screen reporting on those looks perfectly healthy, because they simply never ran.',
    },
    {
        id: 'reports',
        title: 'Reports on a schedule',
        body: [
            'A filtered list, on a schedule, emailed as a CSV. It is the export button minus the person - every operations team has somebody who opens the panel each Monday, applies four filters, presses Export and forwards the file, and that person exists because the panel could not do it.',
            'The filter state is stored, never the rows. A report is a question, and the answer is recomputed each time it runs; storing the result would make every Monday a copy of the day it was created.',
            'It runs AS its owner, so the panel\'s own policies and tenant scope apply. A report whose owner loses access stops producing rows - which is the correct direction, because the output leaves the building.',
        ],
        blocks: [
            {
                kind: 'php',
                code:
                    "ScheduledReport::create([\n    'tenant_id' => \$tenant->id,\n    'user_id' => \$owner->id,          // whose permissions it runs with\n    'name' => 'Overdue accounts',\n    'resource' => 'clients',\n    'state' => ['status' => 'expired'],  // the filters, as a saved view holds them\n    'frequency' => 'weekly',\n    'weekday' => 1,\n    'time' => '07:00',\n    'recipients' => ['finance@example.com'],\n]);",
            },
            {
                kind: 'shell',
                code:
                    '# One scheduler entry asks every minute; the rows decide.\nphp artisan panel:reports-due\n\n# Try a schedule without waiting for it\nphp artisan panel:reports-due --now="2026-08-03 07:00"',
            },
        ],
        warning:
            'A report with no matching rows is still sent. Silence is indistinguishable from a scheduler that stopped, and nobody chases an email they did not receive.',
    },
    {
        id: 'knowledge',
        title: 'Retrieval, so the assistant can cite',
        body: [
            'Asked "how do exports work here", a language model with nothing to read answers from nothing - fluently, plausibly, and about somebody else\'s software. It is indistinguishable from a real answer because it is written in the same voice. Retrieval replaces that with the actual passage and a link to it.',
            'You declare what is worth indexing. A knowledge source yields documents; the indexer cuts each into passages of a few hundred words, embeds them and stores them under the current organisation. A whole page as one vector matches everything weakly and nothing well, which is why the chunk, not the document, is the unit.',
            'The default embedder is local, free and needs no key. It hashes words into buckets, so it matches "suspension" to "suspend" and will never match "turn off their line" - point panel.knowledge.embedder at ProviderEmbedder for real semantic matching, and re-index, because two models\' vectors are not comparable.',
            'On PostgreSQL with pgvector the search runs in the database against a cosine index; everywhere else the candidates are read and scored in PHP, capped by panel.knowledge.scan_limit. Same schema, same answers, and no installation is excluded from the feature for want of an extension.',
            'Below a similarity floor the answer is an empty list rather than the least-bad row. That is the half that protects somebody: the caller is a model, and the least-bad row is exactly what it will build a confident paragraph from.',
        ],
        blocks: [
            {
                kind: 'php',
                code:
                    "// A source: where text worth citing comes from.\nfinal class HelpSource implements KnowledgeSource\n{\n    public function key(): string\n    {\n        return 'help';\n    }\n\n    public function documents(): iterable\n    {\n        foreach (HelpArticles::all() as \$article) {\n            yield new Document(\n                source: \$this->key(),\n                id: \$article['id'],          // stable: re-indexing REPLACES\n                title: \$article['title'],\n                content: implode(\"\\n\\n\", \$article['body']),\n                url: '/help#'.\$article['id'], // the citation somebody can check\n            );\n        }\n    }\n}\n\n// config/panel.php\n'knowledge' => ['sources' => [HelpSource::class]],",
            },
            {
                kind: 'shell',
                code:
                    '# Index for one organisation. --tenant is required, because a chunk filed\n# under the wrong one leaks later as prose in the panel\'s own voice.\nphp artisan panel:knowledge index --tenant=1\n\n# Drop each source first, so documents removed at the far end stop being cited\nphp artisan panel:knowledge index --tenant=1 --fresh\n\nphp artisan panel:knowledge status --tenant=1   # count, search path, embedder\nphp artisan panel:knowledge clear --tenant=1 --source=help',
            },
        ],
        warning:
            'Index only what everyone who can use the assistant may already read. Retrieved text goes into a prompt and comes back paraphrased, with no quotation marks and no source - a tool that answers a question the screen would refuse is the same leak through a different pipe.',
    },
    {
        id: 'commands',
        title: 'Every command',
        body: ['The full list, in the order you are likely to need them.'],
        blocks: [
            {
                kind: 'shell',
                code:
                    'php artisan panel:install                  # publish config, register the provider\nphp artisan make:panel {id}               # a portal: provider, resources, routes\nphp artisan make:panel-resource {Model}   # a screen, optionally --generate\nphp artisan panel:permissions sync        # reconcile ability names with the registry\nphp artisan panel:doctor                  # what is silently wrong\nphp artisan panel:benchmark               # query counts and timings on real data\nphp artisan panel:seed-demo               # believable data to build against\nphp artisan panel:cache-clear             # drop cached resource schemas\nphp artisan panel:api-token {email} {name} # issue a public API token\nphp artisan panel:reports-due             # dispatch any scheduled reports due now\nphp artisan panel:knowledge index         # index panel content for the assistant',
            },
        ],
    },
]

/* ------------------------------------------------------------------ */

const active = ref<string>(sections[0].id)

function jump(id: string) {
    active.value = id
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const copied = ref<string | null>(null)

async function copy(code: string) {
    try {
        await navigator.clipboard.writeText(code)
        copied.value = code
        setTimeout(() => (copied.value = null), 1500)
    } catch {
        // Clipboard access is refused in some contexts. The code is selectable
        // either way, so a failed copy is not worth an error message.
    }
}

const shellLines = (code: string) => code.split('\n')

const isComment = (line: string) => line.trimStart().startsWith('#')

const current = computed(() => sections.find((s) => s.id === active.value) ?? sections[0])
</script>

<template>
    <Head title="Building a panel" />

    <div class="flex flex-col gap-6 p-4 sm:p-6">
        <div>
            <h1 class="text-xl font-semibold tracking-tight sm:text-2xl">Building a panel</h1>
            <p class="text-muted-foreground mt-1 text-sm">
                What you need before you start, which command comes next, and the decisions that
                are hard to change later.
            </p>
        </div>

        <div class="flex flex-col gap-6 lg:flex-row">
            <!--
                A CONTENTS COLUMN, sticky, because this page is long and the
                question somebody arrives with is usually one section deep.
            -->
            <nav class="lg:w-52 lg:shrink-0">
                <ol class="lg:sticky lg:top-4 flex gap-1 overflow-x-auto lg:flex-col lg:overflow-visible">
                    <li v-for="(section, i) in sections" :key="section.id">
                        <button
                            type="button"
                            class="w-full rounded-md px-3 py-1.5 text-left text-sm whitespace-nowrap transition-colors"
                            :class="
                                current.id === section.id
                                    ? 'bg-muted font-medium'
                                    : 'text-muted-foreground hover:text-foreground'
                            "
                            @click="jump(section.id)"
                        >
                            <span class="text-muted-foreground mr-1.5 text-xs tabular-nums">
                                {{ i + 1 }}
                            </span>
                            {{ section.title }}
                        </button>
                    </li>
                </ol>
            </nav>

            <div class="flex min-w-0 flex-1 flex-col gap-10">
                <section v-for="section in sections" :id="section.id" :key="section.id" class="scroll-mt-4">
                    <h2 class="text-base font-semibold">{{ section.title }}</h2>

                    <p
                        v-for="(paragraph, i) in section.body"
                        :key="i"
                        class="text-muted-foreground mt-2 text-sm leading-relaxed"
                    >
                        {{ paragraph }}
                    </p>

                    <div v-for="(block, i) in section.blocks ?? []" :key="`b${i}`" class="mt-3">
                        <div
                            class="group bg-muted/40 relative overflow-x-auto rounded-lg border p-3 font-mono text-xs"
                        >
                            <button
                                type="button"
                                class="bg-background absolute top-2 right-2 rounded-md border p-1.5 opacity-0 transition-opacity group-hover:opacity-100 focus:opacity-100"
                                :aria-label="copied === block.code ? 'Copied' : 'Copy'"
                                @click="copy(block.code)"
                            >
                                <Check v-if="copied === block.code" class="size-3.5 text-emerald-600" />
                                <Copy v-else class="size-3.5" />
                            </button>

                            <!--
                                A SHELL BLOCK GETS A PROMPT, and a comment does
                                not - a `$` in front of `# The operator portal`
                                is a line somebody pastes and watches fail.
                            -->
                            <template v-if="block.kind === 'shell'">
                                <div
                                    v-for="(line, l) in shellLines(block.code)"
                                    :key="l"
                                    class="whitespace-pre"
                                    :class="isComment(line) ? 'text-muted-foreground' : ''"
                                >
                                    <span
                                        v-if="line.trim() !== '' && !isComment(line)"
                                        class="text-muted-foreground select-none"
                                        aria-hidden="true"
                                        >$ </span
                                    >{{ line }}
                                </div>
                            </template>

                            <pre v-else class="whitespace-pre">{{ block.code }}</pre>
                        </div>
                    </div>

                    <!--
                        THE THING THAT IS EASY TO GET WRONG, marked. Every one of
                        these is a mistake that produces a working-looking screen
                        rather than an error, which is why it needs saying at all.
                    -->
                    <p
                        v-if="section.warning"
                        class="mt-3 flex items-start gap-2 rounded-lg border border-amber-500/40 bg-amber-500/5 p-3 text-sm"
                    >
                        <TriangleAlert class="mt-0.5 size-4 shrink-0 text-amber-600 dark:text-amber-500" />
                        <span>{{ section.warning }}</span>
                    </p>
                </section>

                <p class="text-muted-foreground flex items-center gap-2 border-t pt-4 text-xs">
                    <Terminal class="size-3.5" />
                    Every command above is real. Run
                    <span class="font-mono">php artisan list</span> to see them in this
                    installation.
                </p>
            </div>
        </div>
    </div>
</template>
