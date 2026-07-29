<?php

declare(strict_types=1);

return [

    /*
    |---------------------------------------------------------------------------
    | Extra panel abilities
    |---------------------------------------------------------------------------
    |
    | Panel-level abilities this ISP back-office defines, as `name => label`.
    |
    | THESE EXIST BECAUSE A DASHBOARD IS NOT ONE SECRET. The support rota needs
    | the connection counts and must not see what the business is earning; the
    | finance desk is the other way round. Without a name for that distinction
    | the only choices were "show everybody the revenue" or "take the dashboard
    | away", and both are the wrong answer to a real question.
    |
    | TWO, NOT THIRTY. One ability per widget would be honest and unusable - a
    | permission matrix with thirty dashboard checkboxes is one nobody reads, and
    | an unread matrix gets ticked wholesale, which grants more than a coarse one
    | ever would. These are the two cuts this business actually makes.
    |
    | The labels live here because they are what appears on the matrix, and a
    | checkbox reading `view_commercial_widgets` is a question rather than a
    | description. See `DashboardController::COMMERCIAL`, which is what tags the
    | widgets, and `Abilities::extra()`, which is what makes the names real.
    */
    'abilities' => [
        'view_commercial_widgets' => 'Dashboard: sign-ups, plans and renewals',
        'view_network_widgets' => 'Dashboard: sessions, routers and service areas',
    ],

    /*
    |---------------------------------------------------------------------------
    | Demonstration switches
    |---------------------------------------------------------------------------
    |
    | Things this reference app can show that a real installation should not.
    |
    | `broken_widget` puts a permanently failing card on the dashboard, which is
    | how the failure-isolation behaviour is DEMONSTRATED - one widget throwing
    | must not take the page down. It shipped enabled for a long time, and a
    | permanently red card teaches every reader to ignore red cards. The
    | behaviour is proved by a test now; this only makes it visible on request.
    */
    'demo' => [
        'broken_widget' => env('PANEL_DEMO_BROKEN_WIDGET', false),
    ],

    /*
    |---------------------------------------------------------------------------
    | Role templates
    |---------------------------------------------------------------------------
    |
    | Starting points for a new role, on top of the generic ones the package
    | ships (read only, editor, manager).
    |
    | THESE ARE THE BUSINESS'S ROLES, which is why they are here and not in the
    | package. "Support" means something specific at an ISP - see everything,
    | correct a subscriber's details, never touch billing or permissions - and a
    | framework guessing at that would ship a confidently wrong default.
    |
    | A TEMPLATE ONLY FILLS THE MATRIX. What comes out is an ordinary role,
    | editable afterwards, with nothing recording where it came from - see
    | `RoleTemplates` for why keeping that link would be a second permission
    | system.
    |
    | `resources` names resource KEYS; unregistered ones are skipped, and each
    | action is intersected with what that resource actually supports.
    */
    'role_templates' => [
        'support' => [
            'name' => 'Support desk',
            'description' => 'Sees everything, fixes subscriber details, sees the network but not the money.',
            'actions' => ['viewAny', 'view', 'update'],
            'resources' => ['clients', 'routers', 'plans', 'activities'],
            'panel' => ['view_network_widgets'],
        ],

        'finance' => [
            'name' => 'Finance',
            'description' => 'Subscribers and plans with the commercial figures; no network internals.',
            'actions' => ['viewAny', 'view', 'create', 'update'],
            'resources' => ['clients', 'plans', 'editable-plans'],
            'panel' => ['view_commercial_widgets'],
        ],

        'network' => [
            'name' => 'Network operations',
            'description' => 'Routers and connections, plus the operations screens. No customer edits.',
            'actions' => ['viewAny', 'view', 'create', 'update'],
            'resources' => ['routers'],
            /*
             | `view_operations` WITHOUT `manage_backups`. Everyone on an
             | operations rota should be able to see whether last night's backup
             | ran; deleting a snapshot and restoring over the live database is a
             | much smaller circle, and a template is exactly where that
             | distinction gets quietly collapsed.
             */
            'panel' => ['view_network_widgets', 'view_operations'],
        ],
    ],

    /*
    |---------------------------------------------------------------------------
    | Schema cache
    |---------------------------------------------------------------------------
    |
    | The resource schema travels once per session and is cached. Spec §9 item 2:
    | the cache key MUST include the tenant id and a permission fingerprint. A
    | key of `panel:schema:clients` serves one tenant's schema to another, and
    | one role's actions to a role that lacks them.
    |
    | Key shape: panel:schema:{panelId}:{resource}:{tenantId}:{permissionsHash}:{appVersion}
    |
    */
    'schema_cache' => [
        /*
        | OFF in local by default.
        |
        | The key carries an app version, not a hash of the definition, so
        | editing a resource class does NOT invalidate its cached schema. In
        | production that is correct - a deploy changes the version. In
        | development it means every schema edit appears to do nothing until
        | someone remembers to clear the cache, which is antipatterns S4.2
        | ("poisoned keys outlive the fix") reproduced daily.
        |
        | It caught us within minutes of the cache going in: a column suffix was
        | added and the table kept rendering the old schema.
        */
        'enabled' => env('PANEL_SCHEMA_CACHE', env('APP_ENV') !== 'local'),
        'store' => env('PANEL_SCHEMA_CACHE_STORE'), // null = default store
        'ttl' => 3600,
    ],

    /*
    |---------------------------------------------------------------------------
    | Pagination
    |---------------------------------------------------------------------------
    |
    | Spec §10: never block a list response on COUNT(*). Above `keyset_threshold`
    | rows a resource uses keyset pagination and exposes "load more" rather than
    | page numbers, because OFFSET 100000 forces the database to walk 100,000
    | rows while WHERE (sort_col, id) < (?, ?) uses the index.
    |
    */
    'pagination' => [
        'default_per_page' => 10,
        'per_page_options' => [10, 25, 50, 100],
        'keyset_threshold' => 10_000,
        'count_strategy' => env('PANEL_COUNT_STRATEGY', 'deferred'), // deferred|approximate|none
    ],

    /*
    |---------------------------------------------------------------------------
    | Table rendering
    |---------------------------------------------------------------------------
    */
    'table' => [
        'virtualize_above' => 200,
    ],

    /*
    |---------------------------------------------------------------------------
    | Resource discovery
    |---------------------------------------------------------------------------
    |
    | directory => namespace. Scanned lazily on first access, so a generated
    | resource is routable with no registration line - which is what makes
    | `make:panel-resource --generate` produce a working screen untouched.
    |
    */
    'discover' => [
        app_path('Panel/Resources') => 'App\\Panel\\Resources',
    ],

    /*
    |---------------------------------------------------------------------------
    | Tenancy
    |---------------------------------------------------------------------------
    |
    | mode
    |   'column'   Shared / single database. Every tenant's rows live in one
    |              database separated by a tenant_id column, and the panel adds
    |              that constraint to every query. This is stancl/tenancy's
    |              single-database tenancy.
    |
    |   'database' Dedicated / multi database. stancl/tenancy switches the
    |              connection during bootstrapping and the rows carry no tenant
    |              column, so the panel must NOT add one - isolation is already
    |              done by the time the panel sees the request.
    |
    |   'hybrid'   BOTH, decided per tenant. A tenant with a database of its own
    |              is isolated by connection; every other tenant shares the
    |              central database and is scoped by column. This is the shape a
    |              real SaaS ends up in - most tenants share, and the few large
    |              or contractually-isolated ones do not - and it requires
    |              PanelKit's ConditionalDatabaseBootstrapper, because stancl's
    |              own switches the connection for every tenant unconditionally.
    |
    |   'none'     Single-tenant application.
    |
    | resolver
    |   null       Auto-detect: use stancl/tenancy if it is installed and
    |              initialised, otherwise the authenticated user's tenant column.
    |   'stancl'   Force stancl/tenancy.
    |   'auth'     Force the authenticated user's tenant column.
    |   Closure    Resolve it yourself; return int|string|null.
    |
    | A null tenant key is always a DENY signal, never "all tenants".
    |
    */
    /*
    |---------------------------------------------------------------------------
    | Security
    |---------------------------------------------------------------------------
    |
    | max_sessions
    |   How many places one account may be signed in at once. 0 is unlimited,
    |   which is the default: a limit is a policy decision with real consequences
    |   for anybody legitimately using a laptop, a desktop and a phone, and a
    |   framework that imposed one silently would have every installation
    |   discover it as a bug report.
    |
    |   When the limit is reached the OLDEST session ends, never the new one.
    |   Refusing the login instead would lock somebody out on behalf of a session
    |   they cannot reach - a laptop at the office, a phone that was reset.
    |
    |   Requires the `database` session driver. There is nothing to count with a
    |   cookie-only store; `panel:doctor` reports that combination.
    |
    */
    /*
    |---------------------------------------------------------------------------
    | Assistant
    |---------------------------------------------------------------------------
    |
    | prompts_per_hour
    |   How many prompts one ORGANISATION may send in an hour. 0 disables the
    |   limit.
    |
    |   Keyed by tenant rather than by user or IP: a per-user limit is widened by
    |   adding colleagues, and an IP limit punishes a whole office behind one NAT
    |   address while missing somebody on a home connection. The unit that pays
    |   the bill is the unit that is limited.
    |
    */
    'ai' => [
        'prompts_per_hour' => env('PANEL_AI_PROMPTS_PER_HOUR', 120),
    ],

    /*
    |---------------------------------------------------------------------------
    | Authentication
    |---------------------------------------------------------------------------
    |
    | password_reset
    |   'link'  email a signed URL - the Laravel default.
    |   'otp'   email a short numeric code the person types in.
    |
    |   Both are offered because the right answer depends on the audience, not on
    |   which is better. A link is fewer steps and fails badly where mail is read
    |   on a different device from the browser, which is common on shared office
    |   machines. A code survives that and is easier to phish, since a person can
    |   be talked into reading six digits aloud.
    |
    | magic_link
    |   Passwordless sign-in by emailed link. OFF BY DEFAULT and deliberately so:
    |   it makes the mailbox a complete account takeover path, with no second
    |   factor between an intercepted email and a session. Turn it on knowing
    |   that.
    |
    | otp_lifetime / magic_link_lifetime
    |   Minutes. Short, because these are credentials sitting in an inbox.
    |
    */
    'auth' => [
        'password_reset' => env('PANEL_PASSWORD_RESET', 'link'),
        'magic_link' => env('PANEL_MAGIC_LINK', false),
        'otp_lifetime' => 10,
        'magic_link_lifetime' => 10,

        /*
        | Cloudflare Turnstile on the auth screens.
        |
        | OFF BY DEFAULT and a single switch for every door - sign-in,
        | registration, password reset, OTP and magic link. Protecting some of
        | them protects none.
        |
        | ON WITH NO SECRET REFUSES EVERY REQUEST, deliberately. See the
        | `Turnstile` class: a check that passes when it cannot run is an open
        | door that reports itself as locked.
        */
        'turnstile' => [
            'enabled' => env('PANEL_TURNSTILE', false),
            'site_key' => env('TURNSTILE_SITE_KEY'),
            'secret_key' => env('TURNSTILE_SECRET_KEY'),
        ],
    ],

    'security' => [
        'max_sessions' => env('PANEL_MAX_SESSIONS', 0),
    ],

    /*
    | What the assistant is allowed to look things up in.
    |
    | THE HELP CENTRE ONLY, and that limit is the point. Indexing subscriber
    | records here would put a person's account details into a prompt to answer
    | a question about how exporting works - `FindSubscriber` exists for the
    | cases that genuinely need a record, and it checks the same policy the
    | screen does before returning one.
    |
    | Everything else - which embedder, how wide the vectors are, how big a
    | chunk is - stays at the package defaults, which are local and free. See
    | `packages/panel/config/panel.php`.
    */
    /*
    | PLUGINS.
    |
    | A published plugin registers itself from its own service provider, so this
    | list is usually empty and `composer require` is the whole installation.
    | The announcements plugin lives in this application rather than in a
    | package - the playground is one repository - so it is named here, which is
    | the other supported way in.
    */
    'plugins' => [
        App\Plugins\AnnouncementsPlugin::class,
    ],

    'knowledge' => [
        'sources' => [
            App\Knowledge\HelpSource::class,
        ],
    ],

    /*
    | Where somebody locked out of the panel should write.
    |
    | Shown on the suspension wall, which is rendered before any session exists
    | - so there is no in-panel way to ask, and an address here is the only
    | route back for whoever hits it.
    */
    'support_email' => env('PANEL_SUPPORT_EMAIL'),

    'tenancy' => [
        'mode' => env('PANEL_TENANCY_MODE', 'column'),
        'column' => 'tenant_id',
        'resolver' => null,

        /*
        | Per-tenant feature flags, as name => bool. A Closure, or null to read
        | them from the acting user's tenant relation.
        |
        | An ABSENT flag means disabled. A flag that defaults to on is not a
        | flag, it is a comment.
        */
        'features' => null,
    ],

    /*
    |---------------------------------------------------------------------------
    | Exports
    |---------------------------------------------------------------------------
    |
    | Where a queued export writes its CSV. Local by default: an export contains
    | whatever the operator could already see, but writing it to a public disk
    | would put that behind a guessable URL instead of behind the download
    | endpoint's ownership check.
    |
    */
    'exports' => [
        'disk' => env('PANEL_EXPORT_DISK', 'local'),

        /*
        | How long a finished export stays downloadable. It must outlive the
        | notification announcing it - that notification is stored until
        | somebody reads it, and a link that expires within the hour turns
        | "your export is ready" into a 404 page the next morning.
        */
        'retention_days' => (int) env('PANEL_EXPORT_RETENTION_DAYS', 7),
    ],


    /*
    |--------------------------------------------------------------------------
    | Saved views
    |--------------------------------------------------------------------------
    |
    | A named set of table settings, saved by one person for one resource.
    |
    | OPTIONAL, and null disables it cleanly. The panel offers saved views; it
    | does not require them, so an application that has not created the table
    | gets an empty list rather than an error on every resource page.
    |
    | The MODEL rather than a table name, because the model carries the tenant
    | global scope - reaching for the table directly would be the one place the
    | kit queried tenant data without it.
    */
    'saved_views' => [
        'model' => \App\Models\SavedView::class,
    ],
];
