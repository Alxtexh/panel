<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Debug\ExceptionHandler;
use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\QueueManager;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\Worker;
use Illuminate\Queue\WorkerOptions;
use Alxtexh\Panel\Support\TenantContext;
use Stancl\Tenancy\Bootstrappers\QueueTenancyBootstrapper;
use Tests\TestCase;

/**
 * ONE POOL OF WORKERS, EVERY TENANT.
 *
 * This is the arrangement that actually scales. A worker per tenant does not
 * survive past a few dozen organisations - most of them idle most of the time,
 * and every new customer needs a process - so the workers are shared and each
 * JOB carries the tenant that queued it.
 *
 * That makes the queue the single most dangerous place in a multi-tenant panel.
 * A web request is bounded: it starts, resolves one tenant, and dies. A worker
 * is a long-lived process that handles Acme's export, then Globex's bulk
 * update, then Acme's again, in the same memory. Anything left behind between
 * two of those is a cross-tenant leak with no request to trace it to.
 *
 * So the properties asserted here are, in order of how bad it is to get them
 * wrong:
 *
 *   1. A job runs as the tenant that DISPATCHED it, not as whoever the worker
 *      happened to be serving.
 *   2. Tenancy is ENDED between jobs, so nothing carries over.
 *   3. A job dispatched outside tenancy does not inherit one.
 *
 * Jobs are run through the real queue - pushed, then worked - rather than
 * `Bus::fake()` or `dispatchSync()`. Faking asserts that a job was queued;
 * running it is the only way to find out what tenant it woke up as.
 */
final class StanclSharedQueueTest extends TestCase
{
    use RefreshDatabase;

    /** Where each processed job recorded the tenant it saw. Static: it crosses the job boundary. */
    public static array $observed = [];

    private Tenant $acme;

    private Tenant $globex;

    protected function setUp(): void
    {
        parent::setUp();

        /*
         * THE APP'S OWN BOOTSTRAPPER LIST IS USED, not one set here.
         *
         * `QueueTenancyBootstrapper` registers its payload hook and its job
         * listener at SERVICE PROVIDER time, so overriding `tenancy.bootstrappers`
         * in a test does nothing - the listener is already attached, or it never
         * will be. An earlier version of this suite set the config AND called
         * `__constructStatic()` by hand, which made every test pass whether the
         * app was configured for it or not: removing the bootstrapper from
         * `config/tenancy.php` changed no result.
         *
         * Asserting the wiring instead means these tests fail if somebody
         * removes it from the real config, which is the only way they are worth
         * running.
         */
        $this->assertContains(
            QueueTenancyBootstrapper::class,
            (array) config('tenancy.bootstrappers'),
            'Shared workers need QueueTenancyBootstrapper in config/tenancy.php.',
        );

        config([
            'panel.tenancy.mode' => TenantContext::MODE_COLUMN,
            // The database driver, so jobs are really serialised to a payload
            // and read back - which is where the tenant id has to survive.
            'queue.default' => 'database',
        ]);

        self::$observed = [];

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->globex = Tenant::create(['name' => 'Globex', 'slug' => 'globex']);
    }

    protected function tearDown(): void
    {
        if (tenancy()->initialized) {
            tenancy()->end();
        }

        self::$observed = [];

        parent::tearDown();
    }

    /* ------------------------------------------------------- it carries over */

    /**
     * THE HEADLINE: a job dispatched under a tenant runs under that tenant.
     *
     * Dispatched inside tenancy, worked outside it - which is exactly what a
     * shared worker does, because the worker was never in anybody's tenancy to
     * begin with.
     */
    public function test_a_job_runs_as_the_tenant_that_dispatched_it(): void
    {
        tenancy()->initialize($this->acme);
        RecordsItsTenant::dispatch('first');
        tenancy()->end();

        $this->assertFalse(tenancy()->initialized, 'The worker starts outside tenancy.');

        $this->work();

        $this->assertArrayHasKey('first', self::$observed, 'The job never ran.');
        $this->assertSame($this->acme->id, self::$observed['first']);
    }

    /**
     * TWO TENANTS THROUGH ONE WORKER, IN SEQUENCE.
     *
     * The failure this catches is the expensive one: worker memory carrying
     * Acme into Globex's job, so a bulk update lands on the wrong
     * organisation's rows and nothing in the logs says which request caused it.
     */
    public function test_two_tenants_jobs_do_not_leak_into_each_other(): void
    {
        tenancy()->initialize($this->acme);
        RecordsItsTenant::dispatch('acme-1');
        tenancy()->end();

        tenancy()->initialize($this->globex);
        RecordsItsTenant::dispatch('globex-1');
        tenancy()->end();

        tenancy()->initialize($this->acme);
        RecordsItsTenant::dispatch('acme-2');
        tenancy()->end();

        // One worker, three jobs, interleaved tenants.
        $this->work(3);

        $this->assertSame($this->acme->id, self::$observed['acme-1'] ?? null);
        $this->assertSame($this->globex->id, self::$observed['globex-1'] ?? null);
        $this->assertSame($this->acme->id, self::$observed['acme-2'] ?? null, 'Globex leaked into the next Acme job.');
    }

    /**
     * A JOB QUEUED WITH NO TENANT MUST NOT ACQUIRE ONE.
     *
     * System work - a nightly rollup across every tenant, a cleanup sweep - is
     * dispatched centrally. If it inherited whatever tenant the worker last
     * handled, it would silently do its work for one organisation and skip the
     * rest, which is the kind of bug that is only noticed months later.
     */
    public function test_a_central_job_does_not_inherit_the_previous_tenant(): void
    {
        tenancy()->initialize($this->acme);
        RecordsItsTenant::dispatch('tenant-job');
        tenancy()->end();

        // Dispatched with no tenancy at all.
        RecordsItsTenant::dispatch('central-job');

        $this->work(2);

        $this->assertSame($this->acme->id, self::$observed['tenant-job'] ?? null);

        /*
         * `array_key_exists`, not `??`.
         *
         * The passing outcome here is a recorded NULL - the job ran and saw no
         * tenant - and `??` cannot tell that apart from the key being absent
         * because the job never ran at all. Written with `??` this assertion
         * failed against correct behaviour, which is the more embarrassing
         * direction for a test to be wrong in.
         */
        $this->assertArrayHasKey('central-job', self::$observed, 'The central job never ran.');
        $this->assertNull(self::$observed['central-job'], 'A central job picked up a tenant.');
    }

    /** And tenancy is genuinely ended once the worker is idle again. */
    public function test_the_worker_is_left_outside_tenancy(): void
    {
        tenancy()->initialize($this->acme);
        RecordsItsTenant::dispatch('only');
        tenancy()->end();

        $this->work();

        $this->assertFalse(tenancy()->initialized, 'The worker stayed inside a tenancy after the job.');
    }

    /* ------------------------------------------------------- it scopes right */

    /**
     * The payload is not just carried, it is USED: the panel's scope resolves
     * from it, so a job reads its own tenant's rows and no others.
     */
    public function test_a_job_reads_only_its_own_tenants_rows(): void
    {
        $this->clients($this->acme, 3);
        $this->clients($this->globex, 8);

        tenancy()->initialize($this->acme);
        CountsItsClients::dispatch('acme');
        tenancy()->end();

        tenancy()->initialize($this->globex);
        CountsItsClients::dispatch('globex');
        tenancy()->end();

        $this->work(2);

        $this->assertSame(3, self::$observed['acme'] ?? null);
        $this->assertSame(8, self::$observed['globex'] ?? null);
    }

    /* ---------------------------------------------------------------- setup */

    /**
     * Drive the WORKER directly, not `queue:work`.
     *
     * The Artisan command reconnects the database as part of its setup, which
     * destroys the transaction `RefreshDatabase` is holding - the test then
     * fails with "cannot start a transaction within a transaction", and so does
     * every test that runs after it on the same connection. It took the whole
     * suite down the first time.
     *
     * `Worker::runNextJob()` is the part being tested anyway: it pops a real
     * payload and fires `JobProcessing`/`JobProcessed`, which is where tenancy
     * is initialised and ended. Skipping the command loses the signal handling
     * and the daemon loop, neither of which has anything to do with tenants.
     */
    private function work(int $jobs = 1): void
    {
        // Built by hand: the Worker's constructor takes a maintenance-mode
        // callable the container cannot resolve on its own.
        $worker = new Worker(
            $this->app->make(QueueManager::class),
            $this->app->make(Dispatcher::class),
            $this->app->make(ExceptionHandler::class),
            static fn (): bool => false,
        );

        for ($i = 0; $i < $jobs; $i++) {
            $worker->runNextJob('database', 'default', new WorkerOptions);
        }
    }

    private function clients(Tenant $tenant, int $count): void
    {
        for ($i = 0; $i < $count; $i++) {
            $client = new Client;

            $client->forceFill([
                'tenant_id' => $tenant->id,
                'name' => "{$tenant->name} {$i}",
                'phone' => '0700000000',
                'access_code' => "AC-{$tenant->slug}-{$i}",
                'status' => 'active',
                'plan_type' => 'pppoe',
            ])->save();
        }
    }
}

/** Records whichever tenant the worker resolved while running this job. */
final class RecordsItsTenant implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(private readonly string $label) {}

    public function handle(): void
    {
        StanclSharedQueueTest::$observed[$this->label] = app(TenantContext::class)->currentKey();
    }
}

/** Runs a real scoped query, so the tenant has to be more than remembered. */
final class CountsItsClients implements ShouldQueue
{
    use Dispatchable;
    use InteractsWithQueue;
    use Queueable;
    use SerializesModels;

    public function __construct(private readonly string $label) {}

    public function handle(): void
    {
        StanclSharedQueueTest::$observed[$this->label] = Client::query()->count();
    }
}
