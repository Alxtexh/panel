<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\Knowledge;
use PanelKit\Panel\PanelManager;
use PanelKit\Panel\Support\TenantContext;

/**
 * Check for the configurations that are wrong in ways nothing else reports.
 *
 * EVERY CHECK HERE EXISTS BECAUSE THE FAILURE IS SILENT. A misconfiguration that
 * throws is already reported by the exception; this command is for the other
 * kind - the settings that produce a working panel serving wrong or unprotected
 * data, where every page returns 200 and every test passes.
 *
 * Most of them were found the hard way in this project:
 *
 *   - `BROADCAST_CONNECTION=log` makes channel authorisation INERT. The log
 *     broadcaster never consults the callbacks, so every channel authorises,
 *     including for a guest.
 *   - A tenant-led index in a dedicated database cannot serve any query, because
 *     the panel drops the tenant predicate there - 20 to 60 times slower, with
 *     correct results.
 *   - A session limit with a cookie store silently does nothing.
 *   - A resource with no policy is denied entirely, which looks like a
 *     permissions bug rather than a missing file.
 *
 * IT DISTINGUISHES A PROBLEM FROM A NOTE. Everything is not equally wrong, and a
 * report where every line is a warning trains people to read none of them.
 */
final class DoctorCommand extends Command
{
    protected $signature = 'panel:doctor {--json : Emit a machine-readable report}';

    protected $description = 'Check for configuration that is silently wrong';

    /** @var list<array{level: string, title: string, detail: string}> */
    private array $findings = [];

    public function handle(PanelManager $panels, TenantContext $context): int
    {
        $this->checkPolicies($panels);
        $this->checkBroadcasting();
        $this->checkSessionLimit();
        $this->checkCacheTagging();
        $this->checkTenancy($context);
        $this->checkIndexes($context);
        $this->checkKnowledge();

        if ($this->option('json')) {
            $this->line((string) json_encode($this->findings, JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR));
        } else {
            $this->report();
        }

        // NON-ZERO ONLY FOR PROBLEMS. A note is information; failing a build over
        // one would make people stop running this.
        return $this->has('problem') ? self::FAILURE : self::SUCCESS;
    }

    /* ------------------------------------------------------------- checks */

    private function checkPolicies(PanelManager $panels): void
    {
        foreach ($panels->resources() as $key => $class) {
            if (\Illuminate\Support\Facades\Gate::getPolicyFor($class::model()) === null) {
                $this->problem(
                    "[{$key}] has no policy",
                    'The panel denies every ability when no policy is registered, so this resource '
                    .'is invisible to everybody. That is the safe default and it looks exactly like '
                    .'a permissions bug.',
                );
            }
        }
    }

    private function checkBroadcasting(): void
    {
        $driver = config('broadcasting.default');

        if ($driver === 'log' || $driver === 'null') {
            $this->problem(
                "Broadcast driver is [{$driver}], so channel authorisation is inert",
                'The log and null broadcasters never consult the channel callbacks - every channel '
                .'authorises, including for a guest. A channel written today can be wrong in every '
                .'way and still appear to work all the way to deploy.',
            );
        }
    }

    private function checkSessionLimit(): void
    {
        $limit = (int) config('panel.security.max_sessions', 0);

        if ($limit > 0 && config('session.driver') !== 'database') {
            $this->problem(
                'A session limit is set but the session store cannot support it',
                'panel.security.max_sessions is '.$limit.' and session.driver is ['
                .config('session.driver').']. There is no server-side record of who is signed in, '
                .'so nothing is counted and nothing is ended - the limit is believed and absent.',
            );
        }
    }

    /**
     * A tenant-tagged cache needs a store that can tag.
     *
     * stancl's `CacheTenancyBootstrapper` prefixes cache keys per tenant using
     * TAGS, and of Laravel's stores only `array` and `redis` support tagging.
     * With `database` or `file` the bootstrapper cannot isolate - so one
     * tenant's memoized count or cached schema can be served to another, which
     * is a cross-tenant leak through a cache rather than a query.
     *
     * The failure is not silent everywhere - a tagged read throws - but it is
     * silent where it matters, because most cache use in the panel is untagged
     * and works fine right up until the tagged path is reached.
     */
    private function checkCacheTagging(): void
    {
        $store = config('cache.default');

        if (in_array($store, ['redis', 'array', 'memcached'], true)) {
            return;
        }

        if (! class_exists('Stancl\\Tenancy\\Tenancy')) {
            return;
        }

        $bootstrappers = (array) config('tenancy.bootstrappers', []);

        if (! in_array('Stancl\\Tenancy\\Bootstrappers\\CacheTenancyBootstrapper', $bootstrappers, true)) {
            return;
        }

        $this->problem(
            "Cache store [{$store}] cannot tag, but tenant cache isolation needs it",
            'CacheTenancyBootstrapper tags cache entries per tenant, and only redis, array and '
            .'memcached support tagging. On this store a tagged read throws and the isolation it '
            .'promises does not happen - use redis, or remove the bootstrapper and accept that the '
            .'cache is shared across tenants.',
        );
    }

    private function checkTenancy(TenantContext $context): void
    {
        $mode = $context->mode();

        if ($mode === TenantContext::MODE_NONE) {
            $this->note('Tenancy is off', 'Every query is unscoped. Correct for a single-tenant install.');

            return;
        }

        if (! DB::getSchemaBuilder()->hasTable('domains')) {
            $this->note(
                'No domains table',
                'Tenants cannot be identified by hostname, so the panel resolves them from the '
                .'signed-in user. Workable, but every tenant then shares one login page.',
            );
        } elseif (DB::table('domains')->count() === 0) {
            $this->note(
                'No tenant has a domain',
                'Hostname resolution is wired but nothing matches, so every request falls back to '
                .'the signed-in user\'s tenant.',
            );
        }

        if (config('session.domain') !== null) {
            $this->problem(
                'SESSION_DOMAIN is set, which shares one cookie across subdomains',
                'With tenants on subdomains this offers one tenant\'s session cookie to every '
                .'other tenant\'s host. PanelKit stamps the tenant on the session and refuses a '
                .'mismatch, so this is survivable - but it should be deliberate.',
            );
        }
    }

    /**
     * The index shape that is right in one tenancy mode and useless in the other.
     *
     * Only meaningful inside a DEDICATED database, and only checkable there, so
     * it reports what it looked at rather than silently finding nothing.
     */
    private function checkIndexes(TenantContext $context): void
    {
        if ($context->shouldScopeByColumn()) {
            return;
        }

        if (DB::connection()->getDriverName() !== 'sqlite') {
            return;
        }

        $column = $context->column();
        $suspect = [];

        foreach (DB::select("select name from sqlite_master where type = 'table' and name not like 'sqlite_%'") as $table) {
            foreach (DB::select('pragma index_list("'.$table->name.'")') as $index) {
                if (str_starts_with($index->name, 'sqlite_autoindex')) {
                    continue;
                }

                $columns = array_map(
                    static fn (object $r): string => $r->name,
                    DB::select('pragma index_info("'.$index->name.'")'),
                );

                if (($columns[0] ?? null) === $column && count($columns) > 1) {
                    $suspect[] = $index->name;
                }
            }
        }

        if ($suspect !== []) {
            $this->problem(
                count($suspect).' index(es) lead with ['.$column.'] in a dedicated database',
                'The panel omits the tenant predicate here, and an index cannot serve an ORDER BY '
                .'when its leading column is unconstrained - so these indexes are unusable and '
                .'every list falls back to a full scan. Run panel:reindex-tenant.',
            );
        }
    }

    /**
     * Retrieval that is configured but cannot work.
     *
     * THE FAILURE IS ENTIRELY SILENT, which is the only reason it is worth a
     * check. A vector column sized for one embedder and rows written by another
     * do not error - `KnowledgeBase` refuses to compare vectors of different
     * lengths and scores them zero, so every search returns nothing, forever,
     * and the assistant simply says it has no documentation. Nothing in a log,
     * nothing on a screen, and the feature looks like it was never turned on.
     */
    private function checkKnowledge(): void
    {
        if ((array) config('panel.knowledge.sources', []) === []) {
            // Nothing configured is not a fault. An installation that has not
            // set retrieval up has not done anything wrong.
            return;
        }

        try {
            $embedder = app(Knowledge\Embedder::class);
        } catch (\Throwable $e) {
            $this->problem(
                'The configured embedder cannot be constructed',
                'panel.knowledge.embedder is set to something the container cannot build ('
                .$e->getMessage().'), so every index and every search will throw.',
            );

            return;
        }

        /*
         * WHAT IS STORED versus WHAT WOULD BE ASKED. This compares the length of
         * a passage already in the table against the current embedder, because
         * that is the pair that actually has to match - config only matters
         * where it sized a column.
         *
         * A CHANGED MODEL IS THE CASE THIS CATCHES, and it is the one nobody
         * notices: the rows are all still there, `panel:knowledge status` reports
         * thousands of passages, and every single search returns nothing.
         */
        $stored = $this->storedVectorLength();

        if ($stored !== null && $stored !== $embedder->dimensions()) {
            $this->problem(
                sprintf(
                    'Stored passages are %d-dimensional but the embedder produces %d',
                    $stored,
                    $embedder->dimensions(),
                ),
                'Vectors of different lengths are never compared, so every search returns nothing '
                .'while the passages sit there looking indexed. The embedder or its model changed; '
                .'re-run panel:knowledge index --fresh.',
            );
        }

        if (DB::connection()->getDriverName() === 'pgsql' && ! $this->hasVectorColumn()) {
            $this->note(
                'PostgreSQL is in use but the pgvector column is missing',
                'Retrieval still works - the candidates are read and scored in PHP, capped at '
                .config('panel.knowledge.scan_limit', 5000).' passages - but the database could be '
                .'doing it against an index. Install the vector extension and re-run the migration.',
            );
        }
    }

    /**
     * How long the vectors already in the table are, or null if there are none.
     *
     * ONE ROW, AND ONLY ITS LENGTH. No content is read and nothing is scoped to
     * a tenant, because nothing here looks at what a passage says - `count()` of
     * a decoded array is the entire measurement.
     */
    private function storedVectorLength(): ?int
    {
        try {
            $embedding = DB::table('panel_knowledge_chunks')->value('embedding');
        } catch (\Throwable) {
            // The migration has not run. Not a fault - retrieval is simply not
            // in use yet, and the indexer would create nothing to compare.
            return null;
        }

        if ($embedding === null) {
            return null;
        }

        $vector = json_decode((string) $embedding, true);

        return is_array($vector) && $vector !== [] ? count($vector) : null;
    }

    private function hasVectorColumn(): bool
    {
        try {
            return DB::selectOne(
                "SELECT 1 AS ok FROM information_schema.columns
                 WHERE table_name = 'panel_knowledge_chunks' AND column_name = 'embedding_vector'",
            ) !== null;
        } catch (\Throwable) {
            return false;
        }
    }

    /* ------------------------------------------------------------ plumbing */

    private function problem(string $title, string $detail): void
    {
        $this->findings[] = ['level' => 'problem', 'title' => $title, 'detail' => $detail];
    }

    private function note(string $title, string $detail): void
    {
        $this->findings[] = ['level' => 'note', 'title' => $title, 'detail' => $detail];
    }

    private function has(string $level): bool
    {
        return array_any(
            $this->findings,
            static fn (array $f): bool => $f['level'] === $level,
        );
    }

    private function report(): void
    {
        $this->newLine();

        if ($this->findings === []) {
            $this->components->info('Nothing silently wrong.');

            return;
        }

        foreach ($this->findings as $finding) {
            $finding['level'] === 'problem'
                ? $this->components->error($finding['title'])
                : $this->components->warn($finding['title']);

            $this->line('    '.wordwrap($finding['detail'], 90, "\n    "));
            $this->newLine();
        }

        $problems = count(array_filter($this->findings, static fn (array $f): bool => $f['level'] === 'problem'));

        $problems > 0
            ? $this->components->error("{$problems} problem(s) found.")
            : $this->components->info('No problems - the notes above are informational.');
    }
}
