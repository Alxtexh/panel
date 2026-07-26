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
                            {--scale=medium : large|medium|small}
                            {--fresh : Truncate demo tables first}';

    protected $description = 'Seed realistic multi-tenant demo data at scale';

    private const CHUNK = 5_000;

    private const SCALES = [
        'small'  => ['tenants' => 2, 'clients' => 5_000,   'sessions' => 20_000,    'plans' => 20,  'routers' => 10],
        'medium' => ['tenants' => 5, 'clients' => 50_000,  'sessions' => 200_000,   'plans' => 200, 'routers' => 50],
        'large'  => ['tenants' => 5, 'clients' => 500_000, 'sessions' => 2_000_000, 'plans' => 200, 'routers' => 50],
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

        if ($this->option('fresh')) {
            $this->truncateDemoTables();
        }

        $this->components->info("Seeding demo data at scale [{$scale}]");

        $tenantIds = $this->seedTenants($cfg['tenants']);
        $planIds   = $this->seedPlans($tenantIds, $cfg['plans']);
        $routerIds = $this->seedRouters($tenantIds, $cfg['routers']);
        $this->seedClients($tenantIds, $planIds, $routerIds, $cfg['clients']);
        $this->seedSessions($tenantIds, $cfg['sessions']);

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
        foreach (['client_sessions', 'clients', 'routers', 'plans', 'tenants'] as $table) {
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

        for ($i = 0; $i < $total; $i++) {
            $tenantId = $tenantIds[$i % $tenantCount];
            $tenantPlans = $planIds[$tenantId] ?? [null];
            $tenantRouters = $routerIds[$tenantId] ?? [null];

            // Deterministic pseudo-variation. Avoids 500k rand() calls and keeps
            // the dataset reproducible between runs, which matters when a perf
            // number regresses and you need to compare like for like.
            $createdOffset = ($i * 37) % (86400 * 730);
            $expiryOffset  = (($i * 53) % (86400 * 365)) - (86400 * 60);

            $buffer[] = [
                'tenant_id' => $tenantId,
                'plan_id' => $tenantPlans[$i % count($tenantPlans)],
                'router_id' => $tenantRouters[$i % count($tenantRouters)],
                'name' => $first[$i % 20] . ' ' . $last[intdiv($i, 20) % 20],
                'phone' => '+2547' . str_pad((string) (10_000_000 + ($i % 89_999_999)), 8, '0', STR_PAD_LEFT),
                'access_code' => strtoupper(base_convert((string) (100_000 + $seq++), 10, 36)),
                'status' => $statuses[$i % 9],
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

        for ($i = 0; $i < $total; $i++) {
            $tenantId = $tenantIds[$i % $tenantCount];
            $range = $ranges[$tenantId] ?? null;

            if ($range === null) {
                continue;
            }

            $span = max(1, (int) $range->max_id - (int) $range->min_id + 1);
            $clientId = (int) $range->min_id + (($i * 7) % $span);
            $tenantRouters = $routers[$tenantId] ?? [null];

            $startedOffset = ($i * 17) % (86400 * 30);
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
}
