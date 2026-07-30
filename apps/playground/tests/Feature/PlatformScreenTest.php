<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\InstallationState;
use Tests\TestCase;

/**
 * What the installation is running, without a shell.
 *
 * WHAT IS ASSERTED IS MOSTLY WHAT IS *NOT* THERE. A screen that reports
 * configuration is one bad line away from being a screen that publishes the
 * application key, the database password and the mail credentials to anybody
 * holding an operations ability - and it would look completely normal doing it.
 *
 * THE SCHEDULER CHECK IS THE REASON THE PAGE EARNS ITS PLACE. A missing cron
 * entry means no backups, no cleanup and no monitoring, and every screen
 * reporting on those looks perfectly healthy because they simply never ran.
 */
final class PlatformScreenTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    /** @return array<string, mixed> */
    private function report(): array
    {
        return $this->actingAs($this->operator(['view_operations']))
            ->get('/operations/monitoring')
            ->viewData('page')['props'];
    }

    public function test_it_needs_view_operations(): void
    {
        $user = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $this->actingAs($user)->get('/operations/monitoring')->assertForbidden();
    }

    /**
     * LOOKING IS NOT MANAGING. The person diagnosing a problem is usually not
     * the person allowed to restore over the database, and requiring the
     * stronger ability to read a driver name would force the two together.
     */
    public function test_it_does_not_need_manage_backups(): void
    {
        $this->actingAs($this->operator(['view_operations']))
            ->get('/operations/monitoring')
            ->assertOk();
    }

    public function test_it_reports_the_drivers_in_use(): void
    {
        $drivers = $this->report()['drivers'];

        $this->assertSame(config('cache.default'), $drivers['cache']);
        $this->assertSame(config('queue.default'), $drivers['queue']);
        $this->assertSame(config('database.default'), $drivers['database']['connection']);
    }

    /**
     * NO SECRETS. The obvious version of this screen dumps `config()` and puts
     * the application key on a web page.
     */
    public function test_it_publishes_no_credentials(): void
    {
        config()->set('database.connections.sqlite.password', 'the-database-password');
        config()->set('mail.mailers.smtp.password', 'the-mail-password');

        $payload = json_encode($this->report());

        foreach ([
            (string) config('app.key'),
            'the-database-password',
            'the-mail-password',
        ] as $secret) {
            $this->assertStringNotContainsString($secret, (string) $payload, 'A secret reached the page.');
        }
    }

    /**
     * THE SCHEDULER HEARTBEAT. Its absence is the quietest serious failure a
     * Laravel deployment has.
     *
     * IT IS NOT IN THE CACHE, and the reason is the bug this test found. Cache
     * keys are tenant-prefixed by `CacheTenancyBootstrapper` - correctly - so a
     * heartbeat written by cron with no tenant is simply absent when read inside
     * a tenant request. The screen reported a perfectly healthy scheduler as
     * dead, and nothing suggested the reading was the broken part.
     */
    public function test_a_missing_scheduler_is_reported_as_unhealthy(): void
    {
        app(InstallationState::class)->forget('scheduler:last-run');

        $this->assertFalse($this->report()['scheduler']['healthy']);
    }

    public function test_a_recent_tick_is_reported_as_healthy(): void
    {
        app(InstallationState::class)->put('scheduler:last-run', now()->toIso8601String(), 86_400);

        $this->assertTrue($this->report()['scheduler']['healthy']);
    }

    /** A tick from an hour ago is not a running scheduler. */
    public function test_a_stale_tick_is_not_healthy(): void
    {
        app(InstallationState::class)->put('scheduler:last-run', now()->subHour()->toIso8601String(), 86_400);

        $this->assertFalse($this->report()['scheduler']['healthy']);
    }

    /**
     * THE DOCTOR'S FINDINGS ARE BORROWED, not reimplemented - a second copy of
     * those checks would agree while both were new and disagree exactly when one
     * of them had been fixed.
     */
    public function test_the_health_findings_are_included(): void
    {
        $findings = $this->report()['findings'];

        $this->assertIsArray($findings);

        /*
         * NOT MERELY AN ARRAY. The commands were registered only when
         * `runningInConsole()`, so `Artisan::call('panel:doctor')` from an HTTP
         * request answered "the command does not exist" - and the screen
         * dutifully reported that as a health problem, on an installation where
         * the command works perfectly from a shell.
         */
        foreach ($findings as $finding) {
            $this->assertStringNotContainsString(
                'does not exist',
                (string) ($finding['detail'] ?? ''),
                'The health checks could not be run from a web request.',
            );
        }
    }

    public function test_the_tenancy_mode_is_explained_rather_than_named(): void
    {
        $tenancy = $this->report()['tenancy'];

        $this->assertSame(config('panel.tenancy.mode'), $tenancy['mode']);
        // A mode name is one word; two of them are one word apart and mean
        // entirely different isolation guarantees.
        $this->assertNotSame('', $tenancy['meaning']);
    }

    /* ------------------------------------------------------------- health */

    /**
     * THE NUMBERS THAT CHANGE, which is what this screen was missing.
     *
     * The page listed versions, drivers and the tenancy mode - a deploy-time
     * question somebody asks once. Whether the disk is filling, the queue is
     * backing up, anything has failed and the database is still quick was
     * answered nowhere in the panel.
     */
    public function test_the_screen_reports_live_health(): void
    {
        $props = $this->actingAs($this->operator(['view_operations']))
            ->get('/operations/monitoring')
            ->assertOk()
            ->viewData('page')['props'];

        $health = $props['health'];

        $this->assertArrayHasKey('cpu', $health);
        $this->assertArrayHasKey('memory', $health);
        $this->assertArrayHasKey('disk', $health);
        $this->assertArrayHasKey('queue', $health);

        // The database is answering, and the latency is real rather than a
        // placeholder - a check that only asks whether the connection opens
        // cannot see a database that is up and taking 400ms.
        $this->assertTrue($health['database']['available']);
        $this->assertIsFloat($health['database']['latency_ms']);

        // A cache round trip, not a ping: "the process is listening" is not the
        // same as "a write followed by a read returns what was written".
        $this->assertTrue($health['cache']['available']);
    }

    /** The metrics endpoint answers on its own, for the page to poll. */
    public function test_metrics_are_available_as_json(): void
    {
        $this->actingAs($this->operator(['view_operations']))
            ->getJson('/operations/monitoring/metrics')
            ->assertOk()
            ->assertJsonStructure(['cpu', 'memory', 'disk', 'database', 'queue', 'cache', 'scheduler', 'at']);
    }

    /** And they are behind the same permission as the screen. */
    public function test_metrics_need_view_operations(): void
    {
        $stranger = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $this->actingAs($stranger)->getJson('/operations/monitoring/metrics')->assertForbidden();
    }

    /**
     * THE OLD PATH STILL LANDS SOMEWHERE. It is in runbooks and bookmarks, and a
     * monitoring page that has moved is one somebody looks for at exactly the
     * wrong moment.
     */
    public function test_the_old_platform_path_redirects(): void
    {
        $this->actingAs($this->operator(['view_operations']))
            ->get('/operations/platform')
            ->assertRedirect('/operations/monitoring');
    }
}
