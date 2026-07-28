<?php

declare(strict_types=1);

return [

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
    /*
    |---------------------------------------------------------------------------
    | Uploads
    |---------------------------------------------------------------------------
    |
    | THE DISK MUST BE PRIVATE. `local` is, `public` is not - a file under the
    | public disk is served by the web server with whatever handler its
    | extension maps to, and every check the upload path performs is worthless
    | if the deployment hands the result to PHP-FPM. Reads go through
    | UploadController, which authorizes the RECORD before streaming.
    |
    | `max_kilobytes` is the hard ceiling for the whole panel. A field may lower
    | it and may not raise it. Note that PHP's own `upload_max_filesize` and
    | `post_max_size` still apply and are usually smaller - a request over those
    | never reaches Laravel at all, so raising this alone changes nothing.
    |
    */
    'uploads' => [
        'disk' => env('PANEL_UPLOAD_DISK', 'local'),
        'max_kilobytes' => (int) env('PANEL_UPLOAD_MAX_KB', 10240),
    ],

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
    | Live updates
    |---------------------------------------------------------------------------
    |
    | driver
    |   'poll'       Default. Zero infrastructure, works on plain PHP-FPM. NOT
    |                the polling the spec warns about: that warning is about
    |                re-rendering a component server-side per viewer per tick.
    |                This asks one bounded indexed question - "which of these
    |                visible ids changed since T" - and usually answers with an
    |                empty array.
    |   'broadcast'  Reverb, Pusher or Ably. True push, constant server cost
    |                regardless of viewer count. Needs a running process, which
    |                is why it is opt-in rather than assumed.
    |   'none'       Off.
    |
    | Moving from poll to broadcast is a config change. No resource, page or
    | component knows which driver is active.
    |
    */
    'live' => [
        'driver' => env('PANEL_LIVE_DRIVER', 'poll'),
        'interval_ms' => (int) env('PANEL_LIVE_INTERVAL', 10_000),
        'batch_ms' => 250,
        'channel' => null,
        'events' => [],
        'pause_when_hidden' => true,
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
    | Where somebody locked out of the panel should write.
    |
    | Shown on the suspension wall, which is rendered before any session exists
    | - so there is no in-panel way to ask, and an address here is the only
    | route back for whoever hits it.
    */
    'support_email' => env('PANEL_SUPPORT_EMAIL'),

    /*
    | Auth screens.
    |
    | Turnstile is OFF by default and a single switch for every door - sign-in,
    | registration, password reset, OTP and magic link. Protecting some of them
    | protects none.
    |
    | ON WITH NO SECRET REFUSES EVERY REQUEST, deliberately: a check that passes
    | when it cannot run is an open door that reports itself as locked.
    */
    'auth' => [
        /*
        | PASSWORD RENEWAL, OFF BY DEFAULT.
        |
        | Forced rotation is no longer recommended practice - NIST dropped it,
        | because what it reliably produces is `Summer2024!` becoming
        | `Summer2025!` on a card under the keyboard, while a genuinely
        | compromised password is changed the moment anybody notices rather than
        | ninety days later. It is here because some installations are audited
        | against a requirement to have it, and a panel that cannot express that
        | is a panel they cannot use.
        |
        | ZERO MEANS NEVER, and it is the default: switching this on is a
        | decision somebody makes deliberately rather than one they inherit.
        |
        | `refuse_reuse` IS ON REGARDLESS, and is the part worth having whatever
        | the expiry says. A renewal satisfied by re-entering the same password
        | changed nothing while recording that it did.
        */
        'password' => [
            'max_age_days' => (int) env('PANEL_PASSWORD_MAX_AGE_DAYS', 0),
            'refuse_reuse' => env('PANEL_PASSWORD_REFUSE_REUSE', true),
        ],

        'turnstile' => [
            'enabled' => env('PANEL_TURNSTILE', false),
            'site_key' => env('TURNSTILE_SITE_KEY'),
            'secret_key' => env('TURNSTILE_SECRET_KEY'),
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Extra panel abilities
    |--------------------------------------------------------------------------
    |
    | Panel-level abilities THIS APPLICATION defines, as `name => label`.
    |
    | The package knows about `manage_roles`, `impersonate_users` and the rest,
    | because they guard things the package itself does. It cannot know that this
    | installation wants revenue figures hidden from the support rota - that is a
    | fact about the business, not about the framework, so it is declared here.
    |
    | THE LABEL IS PART OF THE DECLARATION, not an afterthought. These names
    | appear as checkboxes in the permission matrix, and `view_commercial_widgets`
    | as a checkbox label is a question rather than a description. The labels
    | used to be a hardcoded map in the Vue component, which is exactly how an
    | ability added on the server ends up rendering as somebody else's caption.
    |
    | NAMING SOMETHING HERE DOES NOT GRANT OR ENFORCE ANYTHING. It makes the name
    | real - so a superuser role covers it, the matrix offers it, and
    | `panel:permissions sync` stops pruning it. Whatever checks it is what
    | enforces it.
    */
    /*
    |--------------------------------------------------------------------------
    | The default panel
    |--------------------------------------------------------------------------
    |
    | Which portal is "the application" - the one served when nothing has said
    | otherwise, and the one `make:panel-resource` writes into when no `--panel`
    | is given.
    |
    | NAMED RATHER THAN INFERRED FROM PROVIDER ORDER. "First registered" is
    | decided by a file that a generator edits, so creating a portal silently
    | changed which panel was the default - and with it where the next resource
    | landed. A name in config only changes when somebody changes it.
    */
    'default' => env('PANEL_DEFAULT', 'admin'),

    /*
    |--------------------------------------------------------------------------
    | The public API
    |--------------------------------------------------------------------------
    |
    | Requests per minute PER TOKEN, not per address: one customer behind a NAT
    | is one address and many integrations, and a per-IP limit punishes all of
    | them for the noisiest.
    |
    | The limiter is only defined if the application has not defined its own -
    | an installation that has thought about its limits keeps them.
    */
    'api' => [
        'rate_limit' => (int) env('PANEL_API_RATE_LIMIT', 120),
    ],

    /*
    |--------------------------------------------------------------------------
    | Retrieval, so the assistant can cite instead of inventing
    |--------------------------------------------------------------------------
    |
    | THE DEFAULT EMBEDDER IS LOCAL AND FREE, deliberately. `HashEmbedder` is a
    | bag of words - it matches "suspension" to "suspend" and will never match
    | "turn off their line" - but it needs no key, sends nothing anywhere and
    | costs nothing. The alternative default is an outbound call to a provider
    | nobody configured, which either fails or silently spends money, and a panel
    | should not start paying for something because a feature exists.
    |
    | Point `embedder` at `ProviderEmbedder::class` for real semantic retrieval,
    | and set `dimensions` to what that model actually returns.
    |
    | CHANGING THE EMBEDDER OR THE MODEL MEANS RE-INDEXING. Two models' vectors
    | are not comparable, so the stored ones stop meaning anything - run
    | `panel:knowledge index --fresh`.
    */
    'knowledge' => [
        'embedder' => env('PANEL_EMBEDDER', PanelKit\Panel\Knowledge\HashEmbedder::class),

        /*
        | How long the vectors are. THE MIGRATION SIZES THE `vector` COLUMN AND
        | ITS INDEX FROM THIS, so changing it after the fact needs a migration,
        | not just a config edit. Ignored by `HashEmbedder`, which knows its own
        | width; used by `ProviderEmbedder`, which asks the provider for it.
        */
        'dimensions' => (int) env('PANEL_EMBEDDING_DIMENSIONS', 1536),

        // Null uses the application's configured default.
        'provider' => env('PANEL_EMBEDDING_PROVIDER'),
        'model' => env('PANEL_EMBEDDING_MODEL'),

        /*
        | THE SIMILARITY BELOW WHICH A MATCH IS NOT A MATCH - read only by
        | `ProviderEmbedder`, since `HashEmbedder` knows its own scale.
        |
        | Every model puts its noise somewhere different: unrelated text scores
        | around 0.7 on some older models and 0.1 on newer ones, so the same
        | number is a strict filter in one space and a pass-everything in
        | another. Too high loses answers, which somebody reports; too low hands
        | the model an unrelated passage, which produces a confident wrong answer
        | that nobody reports.
        */
        'floor' => (float) env('PANEL_KNOWLEDGE_FLOOR', 0.35),

        /*
        | THE CEILING ON THE PORTABLE SEARCH PATH. Without pgvector every
        | candidate chunk is read and scored in PHP; this is what stops an
        | installation that indexed far more than expected turning a search into
        | a memory incident. Searching a bounded subset beats falling over.
        |
        | Postgres with pgvector ignores this - the database does the work.
        */
        'scan_limit' => (int) env('PANEL_KNOWLEDGE_SCAN_LIMIT', 5000),

        /*
        | Roughly how many characters of text go into one chunk.
        |
        | A WHOLE PAGE AS ONE VECTOR MATCHES EVERYTHING WEAKLY AND NOTHING WELL.
        | Passages of a few hundred words each carry one idea, which is what
        | makes a match mean something - and what makes a citation land on the
        | paragraph that answers the question rather than the document that
        | contains it.
        */
        'chunk_size' => (int) env('PANEL_KNOWLEDGE_CHUNK_SIZE', 1200),

        /*
        | WHAT GETS INDEXED - classes implementing `Knowledge\KnowledgeSource`.
        |
        | EMPTY BY DEFAULT, because the package cannot know which of an
        | installation's text is safe to read back into an answer. Help articles
        | are; the notes an agent writes about a subscriber's payment dispute
        | may very much not be, and a package that decided that on somebody's
        | behalf would be making a data-protection choice it has no standing to
        | make.
        */
        'sources' => [],
    ],

    'abilities' => [],

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

];
