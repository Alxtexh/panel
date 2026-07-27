<?php

declare(strict_types=1);

namespace PanelKit\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * php artisan panel:seed-demo --scale=large|medium|small
 *
 * Spec §2: "Performance claims are meaningless against 50 rows." This seeds at
 * a scale where the database is the bottleneck, which is the only scale at which
 * the §10 budgets mean anything.
 *
 * Spec §2 also mandates bulk insert() in chunks rather than model factories in a
 * loop — factories hydrate and save one model per row, which turns a 90-second
 * job into an overnight one. Nothing here touches an Eloquent model.
 *
 * LOCAL ONLY. Refuses to run outside a local environment, and refuses to run
 * against a non-local database host. Spec §2 hard rules 2 and 4.
 */
final class SeedDemoCommand extends Command
{
    protected $signature = 'panel:seed-demo
                            {--scale=medium : xlarge|large|medium|small}
                            {--fresh : Truncate demo tables first}
                            {--only= : Seed one section only (inbox)}';

    protected $description = 'Seed realistic multi-tenant demo data at scale';

    private const CHUNK = 5_000;

    private const SCALES = [
        'small'  => ['tenants' => 2, 'clients' => 5_000,   'sessions' => 20_000,    'plans' => 20,  'routers' => 10],
        'medium' => ['tenants' => 5, 'clients' => 50_000,  'sessions' => 200_000,   'plans' => 200, 'routers' => 50],
        'large'  => ['tenants' => 5, 'clients' => 500_000, 'sessions' => 2_000_000, 'plans' => 200, 'routers' => 50],
        /*
         | Deliberately past the point where anything sloppy shows.
         |
         | At 5M sessions a missing index is seconds rather than milliseconds,
         | an OFFSET page is a visible stall, and a COUNT(*) in front of rows is
         | unmissable. Numbers taken at `medium` prove a query SHAPE; numbers
         | taken here prove the shape survives contact with real volume.
         */
        'xlarge' => ['tenants' => 5, 'clients' => 1_000_000, 'sessions' => 5_000_000, 'plans' => 400, 'routers' => 100],
    ];

    public function handle(): int
    {
        if (! $this->guardLocal()) {
            return self::FAILURE;
        }

        $scale = $this->option('scale');

        if (! isset(self::SCALES[$scale])) {
            $this->error("Unknown scale [{$scale}]. Use large, medium, or small.");

            return self::FAILURE;
        }

        $cfg = self::SCALES[$scale];
        $started = microtime(true);

        /*
         * `--only` exists because reseeding is not always the answer.
         *
         * Adding the mailbox after a 5M-row dataset had already been generated
         * meant either twenty minutes of rewriting rows that had not changed,
         * or a one-off script. A named section is neither: the seeding logic
         * stays in one place and can be re-run for the part that is missing.
         */
        if ($this->option('only') === 'inbox') {
            $tenantIds = DB::table('tenants')->pluck('id')->all();

            if ($tenantIds === []) {
                $this->components->error('No tenants exist. Run a full seed first.');

                return self::FAILURE;
            }

            DB::table('chat_messages')->delete();
            DB::table('chat_conversations')->delete();
            DB::table('mail_messages')->delete();

            $this->seedInbox($tenantIds);
            $this->components->info('Done in ' . round(microtime(true) - $started, 1) . 's.');

            return self::SUCCESS;
        }

        if ($this->option('fresh')) {
            $this->truncateDemoTables();
        }

        $this->components->info("Seeding demo data at scale [{$scale}]");

        $tenantIds = $this->seedTenants($cfg['tenants']);
        $planIds   = $this->seedPlans($tenantIds, $cfg['plans']);
        $routerIds = $this->seedRouters($tenantIds, $cfg['routers']);
        $this->seedClients($tenantIds, $planIds, $routerIds, $cfg['clients']);
        $this->seedSessions($tenantIds, $cfg['sessions']);
        $this->seedInbox($tenantIds);

        $elapsed = round(microtime(true) - $started, 1);
        $this->newLine();
        $this->components->info("Done in {$elapsed}s");

        // Spec §0 acceptance: the seeder must finish in under 5 minutes.
        if ($elapsed > 300) {
            $this->components->warn(
                "Exceeded the 5 minute Phase 0 budget ({$elapsed}s). Tune chunking before proceeding."
            );
        }

        return self::SUCCESS;
    }

    /**
     * Spec §2 hard rules: never point at a remote database, never run
     * destructive commands against anything but the local database.
     */
    private function guardLocal(): bool
    {
        if (! app()->environment('local', 'testing')) {
            $this->error('panel:seed-demo refuses to run outside the local environment.');

            return false;
        }

        $connection = config('database.default');
        $host = config("database.connections.{$connection}.host");

        $localHosts = ['127.0.0.1', 'localhost', '::1', 'db', 'postgres', 'mysql', 'mariadb', null, ''];

        if (! in_array($host, $localHosts, true)) {
            $this->error("Refusing to seed: DB host [{$host}] is not local.");

            return false;
        }

        return true;
    }

    private function truncateDemoTables(): void
    {
        $this->components->warn('Truncating demo tables (local database only)');

        // Child-first, so foreign keys stay satisfied without disabling checks.
        foreach (['chat_messages', 'chat_conversations', 'mail_messages', 'client_sessions', 'clients', 'routers', 'plans', 'tenants'] as $table) {
            if (Schema::hasTable($table)) {
                DB::table($table)->delete();
            }
        }
    }

    /** @return list<int> */
    private function seedTenants(int $count): array
    {
        $names = ['Nairobi Fibre', 'Coastline ISP', 'Rift Valley Net', 'Lakeside Broadband', 'Highland Connect'];
        $now = now();
        $rows = [];

        for ($i = 0; $i < $count; $i++) {
            $name = $names[$i] ?? "Demo Tenant {$i}";
            $rows[] = [
                'name' => $name,
                'slug' => str($name)->slug()->value(),
                'logo_url' => null,
                'theme_colors' => json_encode(['primary' => sprintf('oklch(0.55 0.20 %d)', 200 + $i * 30)]),
                'features' => json_encode(['clients' => true, 'routers' => true, 'plans' => true]),
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        DB::table('tenants')->insert($rows);
        $this->components->task("  {$count} tenants", fn () => true);

        return DB::table('tenants')->orderBy('id')->pluck('id')->all();
    }

    /** @return array<int, list<int>> tenantId => planIds */
    private function seedPlans(array $tenantIds, int $total): array
    {
        $now = now();
        $rows = [];
        $perTenant = max(1, intdiv($total, count($tenantIds)));

        foreach ($tenantIds as $tenantId) {
            for ($i = 0; $i < $perTenant; $i++) {
                $speed = [5, 10, 20, 40, 100][$i % 5];
                $rows[] = [
                    'tenant_id' => $tenantId,
                    'name' => "{$speed}Mbps " . ['Home', 'Business', 'Lite'][$i % 3],
                    'speed_mbps' => $speed,
                    'price_cents' => $speed * 100_000,
                    'is_active' => true,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        foreach (array_chunk($rows, self::CHUNK) as $chunk) {
            DB::table('plans')->insert($chunk);
        }

        $this->components->task('  ' . count($rows) . ' plans', fn () => true);

        return DB::table('plans')->orderBy('id')->get(['id', 'tenant_id'])
            ->groupBy('tenant_id')->map->pluck('id')->map->all()->all();
    }

    /** @return array<int, list<int>> tenantId => routerIds */
    private function seedRouters(array $tenantIds, int $total): array
    {
        $now = now();
        $rows = [];
        $perTenant = max(1, intdiv($total, count($tenantIds)));

        foreach ($tenantIds as $t => $tenantId) {
            for ($i = 0; $i < $perTenant; $i++) {
                $rows[] = [
                    'tenant_id' => $tenantId,
                    'name' => sprintf('RTR-%02d-%03d', $t + 1, $i + 1),
                    'ip_address' => sprintf('10.%d.%d.1', $t + 1, $i + 1),
                    'model' => ['MikroTik CCR2004', 'MikroTik hEX S', 'Ubiquiti EdgeRouter'][$i % 3],
                    'status' => ['online', 'online', 'online', 'degraded', 'offline'][$i % 5],
                    'last_seen_at' => $now,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        foreach (array_chunk($rows, self::CHUNK) as $chunk) {
            DB::table('routers')->insert($chunk);
        }

        $this->components->task('  ' . count($rows) . ' routers', fn () => true);

        return DB::table('routers')->orderBy('id')->get(['id', 'tenant_id'])
            ->groupBy('tenant_id')->map->pluck('id')->map->all()->all();
    }

    private function seedClients(array $tenantIds, array $planIds, array $routerIds, int $total): void
    {
        $first = ['Amina', 'Brian', 'Cynthia', 'David', 'Esther', 'Felix', 'Grace', 'Hassan', 'Irene', 'James',
                  'Kevin', 'Lydia', 'Moses', 'Nancy', 'Oscar', 'Patience', 'Quincy', 'Rose', 'Samuel', 'Teresa'];
        $last  = ['Achieng', 'Baraka', 'Chebet', 'Dube', 'Ekwaro', 'Fumo', 'Gitau', 'Hamisi', 'Imani', 'Juma',
                  'Kamau', 'Lutta', 'Mwangi', 'Njoroge', 'Otieno', 'Peters', 'Quaye', 'Ruto', 'Simiyu', 'Tembo'];
        $statuses = ['active', 'active', 'active', 'active', 'active', 'active', 'expired', 'expired', 'suspended'];
        $planTypes = ['pppoe', 'hotspot', 'static'];

        $bar = $this->output->createProgressBar($total);
        $bar->setFormat('  clients  %current%/%max% [%bar%] %percent:3s%%  %elapsed:6s%');
        $bar->start();

        $nowTs = time();
        $tenantCount = count($tenantIds);
        $buffer = [];
        $seq = 0;

        // 540 days of history, strongly weighted towards recent sign-ups, so
        // the list has depth to page through and the chart has a growth curve.
        $signupWeights = $this->dayWeights(540, $nowTs, 0.6, 0.85);
        $expiryWeights = $this->dayWeights(360, $nowTs, 1.0, 0.0);

        for ($i = 0; $i < $total; $i++) {
            $tenantId = $tenantIds[$i % $tenantCount];
            $tenantPlans = $planIds[$tenantId] ?? [null];
            $tenantRouters = $routerIds[$tenantId] ?? [null];

            /*
             | Deterministic, but SHAPED — see dayWeights(). Reproducible
             | between runs so a perf number stays comparable, while still
             | producing a series with weekday rhythm and a growth trend rather
             | than a horizontal line.
             |
             | THE PREVIOUS FORM WAS SILENTLY WRONG. `($i * 37) % (86400 * 730)`
             | reads as "spread over two years", and is — but only once
             | `$i * 37` exceeds 63,072,000, which needs 1.7 MILLION rows. At
             | 50k the modulo never wraps, so every client was created within 21
             | days: "clients over time" covered three weeks whatever the scale,
             | and a date filter beyond a month matched everything or nothing.
             | A weight table cannot fail that way — the window is stated in
             | days and the distribution is normalised to it.
             */
            $createdOffset = $this->offsetFor($i, $signupWeights, 11);

            // Same trap: an expiry spread must not depend on the row count
            // either. Half already lapsed, half still ahead.
            $expiryOffset = $this->offsetFor($i, $expiryWeights, 71) - (86400 * 180);

            $buffer[] = [
                'tenant_id' => $tenantId,
                /*
                 | THE SAME DECORRELATION TRAP as status/plan_type above.
                 |
                 | `$i` advances by `$tenantCount` between two rows of the SAME
                 | tenant, so `$i % count($tenantRouters)` only ever visits the
                 | residues those strides land on — with 5 tenants and 10
                 | routers, exactly two routers received every client and the
                 | other eight showed zero. Dividing by the tenant count first
                 | walks the list one entry at a time.
                 */
                'plan_id' => $tenantPlans[intdiv($i, $tenantCount) % count($tenantPlans)],
                'router_id' => $tenantRouters[intdiv($i, $tenantCount) % count($tenantRouters)],
                'name' => $first[$i % 20] . ' ' . $last[intdiv($i, 20) % 20],
                'phone' => '+2547' . str_pad((string) (10_000_000 + ($i % 89_999_999)), 8, '0', STR_PAD_LEFT),
                'access_code' => strtoupper(base_convert((string) (100_000 + $seq++), 10, 36)),
                /*
                 | STATUS AND PLAN TYPE MUST BE INDEPENDENT.
                 |
                 | `$statuses[$i % 9]` beside `$planTypes[$i % 3]` looks like two
                 | unrelated cycles and is not: 9 is a multiple of 3, so `$i % 9`
                 | determines `$i % 3`. Every suspended client landed on the same
                 | plan type, which made every cross-tab degenerate — the stacked
                 | and radar charts showed statuses that only ever appeared under
                 | one plan, which reads as a charting bug rather than as seeded
                 | data.
                 |
                 | Dividing before the modulo decorrelates them.
                 */
                /*
                 | STATUS IS BIASED BY ROUTER, so some service areas genuinely
                 | perform worse than others.
                 |
                 | A flat `$statuses[...]` cycle gives EVERY router the same
                 | 66.7% active share, which is realistic of nothing and makes a
                 | ranked "worst performers" chart a row of identical bars — the
                 | one chart whose entire purpose is showing the spread.
                 |
                 | Each router gets a stable health score and the draw is
                 | compared against it, so active share varies from roughly 40%
                 | to 95% across the estate while staying deterministic.
                 */
                'status' => $this->statusFor($i, intdiv($i, $tenantCount) % count($tenantRouters)),
                'plan_type' => $planTypes[$i % 3],
                'expiry_date' => date('Y-m-d H:i:s', $nowTs + $expiryOffset),
                'created_at' => date('Y-m-d H:i:s', $nowTs - $createdOffset),
                'updated_at' => date('Y-m-d H:i:s', $nowTs - $createdOffset),
            ];

            if (count($buffer) >= self::CHUNK) {
                DB::table('clients')->insert($buffer);
                $bar->advance(count($buffer));
                $buffer = [];
            }
        }

        if ($buffer !== []) {
            DB::table('clients')->insert($buffer);
            $bar->advance(count($buffer));
        }

        $bar->finish();
        $this->newLine();
    }

    private function seedSessions(array $tenantIds, int $total): void
    {
        // Pull the client id range per tenant once, rather than joining per row.
        $ranges = DB::table('clients')
            ->selectRaw('tenant_id, MIN(id) AS min_id, MAX(id) AS max_id, COUNT(*) AS n')
            ->groupBy('tenant_id')
            ->get()
            ->keyBy('tenant_id');

        if ($ranges->isEmpty()) {
            $this->components->warn('  no clients seeded, skipping sessions');

            return;
        }

        $routers = DB::table('routers')->orderBy('id')->get(['id', 'tenant_id'])
            ->groupBy('tenant_id')->map->pluck('id')->map->all()->all();

        $bar = $this->output->createProgressBar($total);
        $bar->setFormat('  sessions %current%/%max% [%bar%] %percent:3s%%  %elapsed:6s%');
        $bar->start();

        $nowTs = time();
        $tenantCount = count($tenantIds);
        $buffer = [];

        $sessionWeights = $this->dayWeights(90, $nowTs, 0.45, 0.45);

        for ($i = 0; $i < $total; $i++) {
            $tenantId = $tenantIds[$i % $tenantCount];
            $range = $ranges[$tenantId] ?? null;

            if ($range === null) {
                continue;
            }

            $span = max(1, (int) $range->max_id - (int) $range->min_id + 1);
            $clientId = (int) $range->min_id + (($i * 7) % $span);
            $tenantRouters = $routers[$tenantId] ?? [null];

            $startedOffset = $this->offsetFor($i, $sessionWeights, 29);
            // One session in six is still live, which gives the Phase 8 live
            // view something to patch without needing a generator process.
            $isLive = ($i % 6) === 0;

            $buffer[] = [
                'tenant_id' => $tenantId,
                'client_id' => $clientId,
                'router_id' => $tenantRouters[$i % count($tenantRouters)],
                'status' => $isLive ? 'online' : 'offline',
                'ip_address' => sprintf('100.%d.%d.%d', ($i % 250) + 1, (intdiv($i, 250) % 250) + 1, ($i % 253) + 2),
                'bytes_in' => ($i * 104_729) % 50_000_000_000,
                'bytes_out' => ($i * 15_485_863) % 20_000_000_000,
                'started_at' => date('Y-m-d H:i:s', $nowTs - $startedOffset),
                'ended_at' => $isLive ? null : date('Y-m-d H:i:s', $nowTs - $startedOffset + 3600),
                'created_at' => date('Y-m-d H:i:s', $nowTs - $startedOffset),
                'updated_at' => date('Y-m-d H:i:s', $nowTs - $startedOffset),
            ];

            if (count($buffer) >= self::CHUNK) {
                DB::table('client_sessions')->insert($buffer);
                $bar->advance(count($buffer));
                $buffer = [];
            }
        }

        if ($buffer !== []) {
            DB::table('client_sessions')->insert($buffer);
            $bar->advance(count($buffer));
        }

        $bar->finish();
        $this->newLine();
    }

    /**
     * A subscriber's status, biased by which router serves them.
     *
     * `$statuses` is still the source of the mix; this only decides how far
     * along that list a given subscriber lands, so the overall proportions stay
     * recognisable while individual routers diverge.
     */
    private function statusFor(int $i, int $routerIndex): string
    {
        // Stable per router, spread across the range, never 0 or 100.
        $health = 42 + (($routerIndex * 37) % 53);

        /*
         * A proper avalanche hash, not a single multiply.
         *
         * `($i * prime) % 100` looks random and is not: `$i` advances by a FIXED
         * stride between two subscribers on the same router, so the products
         * land on an arithmetic progression and only a handful of distinct rolls
         * ever appear. The first attempt produced routers at exactly 50.1%,
         * 66.7% and 83.3% — and one at a flat 100% — which reads as fabricated
         * because it is.
         *
         * Masking to 32 bits keeps every step in integer range; without it the
         * second multiply exceeds PHP's integer width, silently becomes a float
         * and loses the low bits that carry the randomness.
         */
        $h = ($i * 2654435761) & 0xFFFFFFFF;
        $h = ($h ^ ($h >> 13)) & 0xFFFFFFFF;
        $h = ($h * 1274126177) & 0xFFFFFFFF;
        $h = ($h ^ ($h >> 16)) & 0xFFFFFFFF;

        $roll = ($h + $routerIndex * 7919) % 100;

        if ($roll < $health) {
            return 'active';
        }

        // The remainder splits roughly two to one, as it did before.
        return $roll % 3 === 0 ? 'suspended' : 'expired';
    }

    /**
     * A cumulative weight table over `$days` days, ending today.
     *
     * WHY THE SEEDER SHAPES ITS OWN TIME DISTRIBUTION.
     *
     * The previous `($i * 17) % (86400 * 30)` spread rows PERFECTLY EVENLY over
     * the window. That is fine for measuring query cost — every bucket holds the
     * same number of rows — and useless for everything else: a time series drawn
     * from it is a horizontal line, so a chart bug that mangles the shape is
     * invisible, and so is a chart feature that renders it well.
     *
     * The curve here is weekly seasonality (quiet weekends), a gentle growth
     * trend, and two out-of-phase sine terms so the wobble does not read as a
     * repeating pattern. Deterministic, so a performance number is still
     * comparable between runs.
     *
     * @return list<float> Cumulative weights, normalised to end at 1.0.
     */
    private function dayWeights(int $days, int $nowTs, float $weekendDip, float $growth): array
    {
        $todayDow = (int) date('w', $nowTs);
        $weights = [];
        $sum = 0.0;

        for ($d = 0; $d < $days; $d++) {
            // $d counts BACKWARDS from today, so day 0 is today.
            $dow = ($todayDow - $d % 7 + 7) % 7;
            $seasonal = ($dow === 0 || $dow === 6) ? $weekendDip : 1.0;

            // Older days are lighter, so the series trends upward on screen.
            $trend = 1.0 - $growth * ($d / max(1, $days - 1));
            $wobble = 1 + 0.20 * sin($d / 3.1) + 0.11 * sin($d / 1.6 + 1.2);

            $w = max(0.05, $seasonal * $trend * $wobble);
            $sum += $w;
            $weights[$d] = $sum;
        }

        return array_map(static fn (float $w): float => $w / $sum, $weights);
    }

    /**
     * Pick a second-offset into the past for row `$i`, following `$cumulative`.
     *
     * A binary search over ~90 buckets is seven comparisons — cheap enough to
     * run two million times, which a reject-sampling loop would not be.
     */
    private function offsetFor(int $i, array $cumulative, int $salt): int
    {
        // Knuth multiplicative hash: a well-spread deterministic uniform.
        $u = (($i * 2654435761 + $salt) % 1000003) / 1000003;

        $lo = 0;
        $hi = count($cumulative) - 1;

        while ($lo < $hi) {
            $mid = intdiv($lo + $hi, 2);
            if ($cumulative[$mid] < $u) {
                $lo = $mid + 1;
            } else {
                $hi = $mid;
            }
        }

        /*
         * Hour of day, weighted towards the evening peak an ISP actually sees.
         * Without this the "Today" view — which buckets by hour — is flat even
         * though the daily view is not.
         */
        $hourPick = (($i * 40503 + $salt) % 100) / 100;
        $hour = $hourPick < 0.55
            ? 18 + (int) ($hourPick / 0.55 * 5)   // 18:00-22:00 carries most of it
            : (int) ($hourPick * 24);

        $minute = ($i * 7919 + $salt) % 3600;

        return $lo * 86400 + (23 - min(23, $hour)) * 3600 + $minute;
    }


    /**
     * Mail and chat for every panel USER, not every tenant.
     *
     * These screens are per person: an inbox belongs to whoever is signed in,
     * so seeding per tenant would leave the demo user with an empty mailbox
     * whenever they were not the first user of their tenant — which is exactly
     * how a seeded feature ends up looking broken.
     *
     * Small on purpose. Mail and chat are not the volume story; clients and
     * sessions are. A million rows here would slow every reseed for no
     * additional confidence.
     */
    private function seedInbox(array $tenantIds): void
    {
        $users = DB::table('users')->whereIn('tenant_id', $tenantIds)->get(['id', 'tenant_id']);

        if ($users->isEmpty()) {
            $this->components->warn('  no panel users, skipping mail and chat');

            return;
        }

        $senders = [
            ['Amina Achieng', 'amina.achieng@example.co.ke'],
            ['Felix Mwangi', 'felix.mwangi@example.co.ke'],
            ['Patience Ekwaro', 'p.ekwaro@example.co.ke'],
            ['Kevin Peters', 'kevin.peters@example.co.ke'],
            ['Network Operations', 'noc@example.co.ke'],
            ['Billing', 'billing@example.co.ke'],
        ];

        $subjects = [
            ['Connection dropping in the evenings', 'Since Tuesday the line drops around 8pm and comes back after a few minutes.'],
            ['Upgrade to 20Mbps?', 'We would like to move up a plan before the end of the month.'],
            ['Invoice query', 'The last invoice shows two months. Could you check?'],
            ['Router replacement', 'The unit at the Kiambaa site is showing a red light.'],
            ['Scheduled maintenance', 'Fibre splicing on the north route, Sunday 02:00 to 05:00.'],
            ['New installation request', 'A neighbour has asked about coverage on our street.'],
            ['Payment confirmation', 'Transfer sent this morning, reference 88213.'],
            ['Speed test results', 'Attached are the results from this week, as requested.'],
        ];

        $folders = ['inbox', 'inbox', 'inbox', 'inbox', 'archived', 'sent', 'spam'];

        $mail = [];
        $now = time();
        $n = 0;

        foreach ($users as $user) {
            for ($i = 0; $i < 40; $i++) {
                [$name, $email] = $senders[$n % count($senders)];
                [$subject, $body] = $subjects[$n % count($subjects)];
                $offset = ($n * 7717) % (86400 * 21);
                $n++;

                $mail[] = [
                    'user_id' => $user->id,
                    'tenant_id' => $user->tenant_id,
                    'folder' => $folders[$i % count($folders)],
                    'from_name' => $name,
                    'from_email' => $email,
                    'subject' => $subject,
                    'preview' => mb_substr($body, 0, 90),
                    'body' => $body . "\n\n" . 'Thanks,' . "\n" . $name,
                    'is_read' => $i % 3 !== 0,
                    'is_starred' => $i % 7 === 0,
                    'has_attachment' => $i % 5 === 0,
                    'received_at' => date('Y-m-d H:i:s', $now - $offset),
                    'created_at' => date('Y-m-d H:i:s', $now - $offset),
                    'updated_at' => date('Y-m-d H:i:s', $now - $offset),
                ];
            }
        }

        foreach (array_chunk($mail, self::CHUNK) as $chunk) {
            DB::table('mail_messages')->insert($chunk);
        }

        $contacts = ['Amina Achieng', 'Felix Mwangi', 'Patience Ekwaro', 'Kevin Peters', 'Rose Simiyu', 'Moses Otieno'];
        $statuses = ['online', 'away', 'offline'];
        $lines = [
            'Is the line back up on your side?',
            'Thanks, that fixed it.',
            'Can someone come out on Thursday?',
            'Invoice received, payment going out today.',
            'The router is blinking red again.',
            'All good now, appreciate the quick help.',
        ];

        $c = 0;

        foreach ($users as $user) {
            foreach ($contacts as $contact) {
                $last = $now - (($c * 5407) % (86400 * 3));

                $conversationId = DB::table('chat_conversations')->insertGetId([
                    'user_id' => $user->id,
                    'tenant_id' => $user->tenant_id,
                    'contact_name' => $contact,
                    'contact_email' => str($contact)->lower()->replace(' ', '.')->value() . '@example.co.ke',
                    'status' => $statuses[$c % 3],
                    'last_message' => $lines[$c % count($lines)],
                    'last_message_at' => date('Y-m-d H:i:s', $last),
                    'unread_count' => $c % 4 === 0 ? ($c % 3) + 1 : 0,
                    'created_at' => date('Y-m-d H:i:s', $last),
                    'updated_at' => date('Y-m-d H:i:s', $last),
                ]);

                $thread = [];

                for ($m = 0; $m < 12; $m++) {
                    $at = $last - ((12 - $m) * 900);

                    $thread[] = [
                        'conversation_id' => $conversationId,
                        'tenant_id' => $user->tenant_id,
                        'direction' => $m % 2 === 0 ? 'incoming' : 'outgoing',
                        'body' => $lines[($c + $m) % count($lines)],
                        'sent_at' => date('Y-m-d H:i:s', $at),
                        'created_at' => date('Y-m-d H:i:s', $at),
                        'updated_at' => date('Y-m-d H:i:s', $at),
                    ];
                }

                DB::table('chat_messages')->insert($thread);
                $c++;
            }
        }

        $this->components->info('  mail and chat seeded for ' . $users->count() . ' users');
    }

}
