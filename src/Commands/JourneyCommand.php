<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

/**
 * A whole session, end to end, through the real HTTP stack.
 *
 * WHY THIS EXISTS BESIDE `panel:benchmark`. That command times QUERIES, which is
 * the right unit for finding a missing index and the wrong one for answering
 * "does this feel fast". A page that issues one 0.4 ms query and then spends
 * 180 ms building a schema, serialising props and resolving policies is a page
 * the user experiences as slow, and every query-level number on it is green.
 *
 * So this measures what a person waits for: a real Request through the real
 * kernel, with middleware, authentication, Inertia and the whole response. The
 * numbers are LARGER than the query numbers by a wide margin, and that gap is
 * the point - it is the part of the budget the panel spends on itself.
 *
 * IT WALKS, RATHER THAN SAMPLING. The hops are in the order somebody actually
 * takes them: land on the dashboard, open the list, open a record, edit it, go
 * sideways into a workspace. Measuring those pages independently would miss the
 * thing a journey catches - state carried between hops, a cache that is warm
 * only because the previous page filled it, a query that is cheap on its own and
 * repeated on all five.
 *
 * A FAILING HOP IS REPORTED, NOT SKIPPED. A 500 that renders in 12 ms is the
 * fastest page in any suite, and a run that quietly dropped it would show an
 * improvement. Every hop's status code is printed beside its time for that
 * reason, and any non-2xx makes the command exit non-zero.
 */
final class JourneyCommand extends Command
{
    protected $signature = 'panel:journey
                            {--tenant= : Slug of the tenant to sign in as}
                            {--host= : Walk the journey against this hostname}
                            {--negative : Walk it as somebody who does NOT belong here; every hop must fail}
                            {--runs=3 : Measured passes, after a warm-up}
                            {--budget=300 : Milliseconds a single hop may take}
                            {--json : Emit a machine-readable report}';

    protected $description = 'Time a full signed-in journey through the panel over real HTTP';

    public function handle(): int
    {
        $slug = $this->option('tenant');

        if ($slug === null) {
            $this->components->error('Pass --tenant=<slug>. A journey needs somebody to be.');

            return self::FAILURE;
        }

        $tenant = DB::table('tenants')->where('slug', $slug)->first();

        if ($tenant === null) {
            $this->components->error("No tenant matches [{$slug}].");

            return self::FAILURE;
        }

        /*
         * THE NEGATIVE JOURNEY signs in as somebody from ANOTHER organisation and
         * walks the same fifteen hops. Every one must fail.
         *
         * A positive journey proves very little on its own: "acme's host shows
         * acme's data" is exactly what a panel with no isolation at all would
         * also do. The run that means something is the one that pushes against
         * the boundary - and a negative journey that PASSES is the finding.
         */
        $negative = (bool) $this->option('negative');

        /*
         * A NEGATIVE RUN WITHOUT A HOST IS NONSENSE, and it must refuse rather
         * than report.
         *
         * Without `--host` the tenant is resolved from the signed-in user - so
         * "somebody who does not belong here" is simply somebody browsing their
         * OWN organisation, every hop correctly returns 200, and the command
         * reports fifteen catastrophic leaks that do not exist. A security tool
         * that cries wolf is worse than none: the second time it is ignored.
         *
         * The negative case only has meaning when the host says one tenant and
         * the session says another.
         */
        if ($negative && $this->option('host') === null) {
            $this->components->error(
                'A negative journey needs --host. Without one the tenant comes from the signed-in '
                .'user, so the run would be somebody browsing their own data and every hop would '
                .'look like a leak.'
            );

            return self::FAILURE;
        }

        $user = config('auth.providers.users.model')::query()
            ->when($negative,
                fn ($q) => $q->where('tenant_id', '!=', $tenant->id),
                fn ($q) => $q->where('tenant_id', $tenant->id),
            )
            ->first();

        if ($user === null) {
            $this->components->error($negative
                ? "No user outside [{$slug}] exists, so there is nobody to refuse."
                : "Tenant [{$slug}] has no users, so nothing can sign in. Create one, or seed the tenant, first."
            );

            return self::FAILURE;
        }

        Auth::guard()->setUser($user);

        $runs = max(1, (int) $this->option('runs'));
        $budget = (float) $this->option('budget');

        $hops = $this->hops($tenant);

        // Warm-up, discarded. The first request through the kernel compiles
        // views, resolves the container graph and fills the schema cache - none
        // of which the second request pays, and all of which would otherwise be
        // attributed to whichever hop happened to be first.
        $this->walk($hops);

        $samples = [];

        for ($i = 0; $i < $runs; $i++) {
            $samples[] = $this->walk($hops);
        }

        return $this->report($samples, $budget, $slug);
    }

    /**
     * The journey, in the order a person takes it.
     *
     * @return array<string, string|array{0: string, 1: int}>
     */
    private function hops(object $tenant): array
    {
        $client = $this->sampleClient($tenant);

        $hops = [
            'dashboard' => '/dashboard',
            'clients list' => '/clients',
            'clients, page 2' => '/clients?page=2',
            'clients, filtered' => '/clients?status=active',
            'clients, searched' => '/clients?search=Amina',
            'plans list' => '/plans',
            'routers list' => '/routers',
            'sessions workspace' => '/workspaces/sessions',
            'command palette' => '/search?q=a',
            'organisation settings' => '/settings/organisation',
            /*
             * 423 IS THE CORRECT ANSWER HERE, not a failure.
             *
             * The security page sits behind password confirmation, and Laravel
             * answers an Inertia request that needs it with 423 Locked so the
             * client can prompt. The first run of this command called that a
             * broken page, which was the command being wrong about the app.
             *
             * It stays in the journey rather than being dropped, because the
             * middleware is real work somebody waits for, and because a page
             * that silently stopped requiring confirmation is worth failing on.
             */
            'security settings' => ['/settings/security', 423],
            'notifications' => '/notifications',
        ];

        // The record hops need a record, and an estate can legitimately have a
        // tenant with none - the 200-subscriber tenant exists precisely to keep
        // the empty-ish cases in the suite.
        if ($client !== null) {
            $hops['client detail'] = "/clients/{$client}";
            $hops['client edit form'] = "/clients/{$client}/edit";
            $hops['client invoice'] = "/clients/{$client}/invoice";
        }

        return $hops;
    }

    /**
     * A subscriber BELONGING TO THIS TENANT.
     *
     * The first version took the first client in the table, full stop - which is
     * one tenant's record, so walking any other tenant asked for a record they
     * cannot see and got three 404s. The panel was right and the command was
     * wrong, which is worth stating plainly: the run that found this was
     * reassuring rather than alarming, because it showed cross-tenant record
     * access being refused over real HTTP for four tenants in a row.
     *
     * The dedicated tenant needs tenancy INITIALISED to be asked at all. Its
     * subscribers are not in the central database, so a central query scoped by
     * `tenant_id` correctly returns nothing - and "no sample record" is
     * indistinguishable from "tenant has no records" unless the connection is
     * switched first.
     */
    private function sampleClient(object $tenant): int|string|null
    {
        if (($tenant->tenancy_db_name ?? null) === null) {
            return DB::table('clients')->where('tenant_id', $tenant->id)->orderBy('id')->value('id');
        }

        $model = config('tenancy.tenant_model');
        tenancy()->initialize($model::query()->findOrFail($tenant->id));

        try {
            return DB::table('clients')->orderBy('id')->value('id');
        } finally {
            tenancy()->end();
        }
    }

    /**
     * One pass. Returns milliseconds and status per hop.
     *
     * @param  array<string, string|array{0: string, 1: int}>  $hops
     * @return array<string, array{ms: float, status: int, expected: int, queries: int}>
     */
    private function walk(array $hops): array
    {
        $kernel = app(Kernel::class);
        $out = [];

        foreach ($hops as $label => $hop) {
            // A hop is either a URI, or a URI paired with the status it should
            // return. Defaulting to 200 keeps the common case a plain string.
            [$uri, $expected] = is_array($hop) ? $hop : [$hop, 200];

            $host = $this->option('host');

            $request = Request::create(
                $host === null ? $uri : 'http://'.$host.$uri,
                'GET',
            );

            // Inertia's XHR shape, because that is what every navigation after
            // the first actually is. A full HTML response measures the initial
            // page load, which happens once per session and is not the thing
            // being asked about.
            $request->headers->set('X-Inertia', 'true');
            $request->headers->set('X-Requested-With', 'XMLHttpRequest');
            $request->headers->set('Accept', 'application/json');

            /*
             * THE VERSION HEADER IS NOT OPTIONAL. Without it Inertia answers
             * every request with a 409 and a redirect, telling the browser to
             * reload - which is a real response, arrives in about 5 ms, and is
             * not a page.
             *
             * The first version of this command omitted it and reported a
             * fifteen-hop journey in 374 ms with every hop comfortably inside
             * budget. All fifteen were 409s. That is exactly the failure the
             * status column was added to catch, and it caught it on the first
             * run, which is the only reason these numbers mean anything.
             */
            if (class_exists(Inertia::class)) {
                $request->headers->set('X-Inertia-Version', (string) Inertia::getVersion());
            }

            DB::flushQueryLog();
            DB::enableQueryLog();

            $started = hrtime(true);
            $response = $kernel->handle($request);
            $ms = (hrtime(true) - $started) / 1_000_000;

            $queries = count(DB::getQueryLog());
            DB::disableQueryLog();

            $out[$label] = [
                'ms' => round($ms, 2),
                'status' => $response->getStatusCode(),
                'expected' => $expected,
                'queries' => $queries,
            ];
        }

        return $out;
    }

    /**
     * @param  list<array<string, array{ms: float, status: int, expected: int, queries: int}>>  $samples
     */
    private function report(array $samples, float $budget, string $slug): int
    {
        $rows = [];
        $total = 0.0;
        $bad = [];

        foreach (array_keys($samples[0]) as $label) {
            $times = array_map(static fn (array $pass): float => $pass[$label]['ms'], $samples);
            sort($times);

            $median = $times[intdiv(count($times), 2)];
            $status = $samples[0][$label]['status'];
            $queries = $samples[0][$label]['queries'];
            $total += $median;

            $over = $median > $budget;

            /*
             * IN A NEGATIVE RUN THE EXPECTATION INVERTS: anything in the 2xx
             * range is the failure, and a refusal is the pass. The budget still
             * applies, because a refusal that takes a second is its own problem.
             */
            $failed = $this->option('negative')
                ? ($status >= 200 && $status < 300)
                : $status !== $samples[0][$label]['expected'];

            if ($over || $failed) {
                $bad[] = $label.match (true) {
                    $failed && (bool) $this->option('negative') => sprintf(
                        ' (HTTP %d - SERVED to somebody who does not belong here)', $status,
                    ),
                    $failed => sprintf(' (HTTP %d, expected %d)', $status, $samples[0][$label]['expected']),
                    default => ' (over budget)',
                };
            }

            $rows[] = [
                $label,
                $status,
                sprintf('%s%.1f ms', $over ? '! ' : '  ', $median),
                $queries,
            ];
        }

        if ($this->option('json')) {
            $this->line((string) json_encode([
                'tenant' => $slug,
                'budgetMs' => $budget,
                'totalMs' => round($total, 1),
                'hops' => $rows,
                'problems' => $bad,
            ], JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR));

            return $bad === [] ? self::SUCCESS : self::FAILURE;
        }

        $this->newLine();
        $this->components->info(sprintf(
            '%s through [%s], median of %d passes',
            $this->option('negative') ? 'NEGATIVE journey' : 'Journey',
            $slug,
            count($samples),
        ));
        $this->table(['Hop', 'HTTP', 'Median', 'Queries'], $rows);

        // THE SINGLE NUMBER. Not an average of the hops - the sum, because that
        // is what somebody actually spends getting through the panel, and an
        // average hides a page that costs as much as the other eleven together.
        $this->components->info(sprintf('Whole journey: %.1f ms across %d hops.', $total, count($rows)));

        if ($bad !== []) {
            $this->components->error(implode(', ', $bad));

            return self::FAILURE;
        }

        return self::SUCCESS;
    }
}
