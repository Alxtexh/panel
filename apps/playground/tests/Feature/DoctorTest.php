<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\LazyLoadingViolationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Jobs\DeliverScheduledReport;
use PanelKit\Panel\Jobs\ExportRecords;
use PanelKit\Panel\Jobs\RestoreBackup;
use PanelKit\Panel\Jobs\RunBackupNow;
use PanelKit\Panel\Jobs\RunBulkAction;
use PanelKit\Panel\Knowledge\KnowledgeBase;
use PanelKit\Panel\Models\Ticket;
use PanelKit\Panel\Models\TicketReply;
use PanelKit\Panel\PanelManager;
use Tests\TestCase;

/**
 * The command that finds configuration which is silently wrong.
 *
 * EVERY CHECK EXISTS BECAUSE THE FAILURE IS INVISIBLE. A misconfiguration that
 * throws is already reported by the exception; `panel:doctor` is for the other
 * kind - a working panel serving wrong or unprotected data, where every page
 * returns 200 and the whole suite passes.
 *
 * So these tests assert two things per check: that it FIRES on the broken
 * configuration, and that it stays QUIET on the correct one. A checker that
 * always complains is one people learn to ignore, which makes it worse than
 * absent.
 */
final class DoctorTest extends TestCase
{
    use RefreshDatabase;

    /**
     * NO DOCTOR TEST MAY DEPEND ON WHAT IS ON THIS MACHINE'S DISK.
     *
     * `checkBackupFreshness` reads the real backup destination, which on a
     * developer's laptop holds whatever snapshots happen to be there from
     * whenever they last ran `backup:run`. Left alone, every assertion in this
     * file that doctor is QUIET starts failing three days after somebody's
     * last backup - a suite that goes red because of the calendar, which is
     * the worst kind of flake because the diff explains nothing.
     *
     * Faked in `setUp` rather than per test, because the coupling is to the
     * whole file: any check added later that reads a disk inherits the same
     * hazard, and a fake that is already in place is one nobody has to
     * remember.
     */
    protected function setUp(): void
    {
        parent::setUp();

        /*
         * DOCTOR MUST NOT READ THIS MACHINE'S BACKUP DESTINATION.
         *
         * It reports a destination whose newest snapshot has gone stale, which
         * on a laptop is whatever is left from the last `backup:run`. Without
         * this, every assertion here that doctor is QUIET starts failing three
         * days after that - a suite going red because of the calendar, which
         * is the worst kind of flake because the diff explains nothing.
         *
         * A DISK OF THIS FILE'S OWN rather than a fake of the configured one:
         * spatie resolves the destination through its own registry, and only a
         * name that exists nowhere else is guaranteed to hold nothing. It is
         * NOT in the base TestCase, because the backup tests configure their
         * own destination and a blanket override in setUp takes it away.
         */
        Storage::fake('doctor-has-no-backups');
        config(['backup.backup.destination.disks' => ['doctor-has-no-backups']]);
    }

    /* ------------------------------------------------------------- queue */

    /**
     * `retry_after` MUST EXCEED EVERY JOB TIMEOUT, and this is arithmetic
     * rather than opinion.
     *
     * It is how long the queue waits before deciding a reserved job was
     * abandoned and handing it to ANOTHER worker. It is not a retry in the
     * `$tries` sense - a job with `$tries = 1` is still re-delivered this way,
     * because as far as the queue is concerned nothing failed.
     *
     * At Laravel's stock 90 seconds this panel was wrong for four of its five
     * jobs. `ExportRecords` is allowed 900 and measures 54 seconds against the
     * reference tenant's 250,000 subscribers, so a larger organisation crosses
     * 90 comfortably and gets two workers writing the same file. A re-run
     * `RunBulkAction` applies its mutation twice. A re-run `RestoreBackup`
     * starts a database restore over one already in progress.
     *
     * ASSERTED BY READING THE JOBS, not by restating a number here. A test
     * that hardcoded "3700" would pass while somebody raised a timeout past
     * it, which is the only way this breaks.
     */
    public function test_the_queue_reclaims_no_job_before_it_could_have_finished(): void
    {
        $jobs = [
            ExportRecords::class,
            RunBulkAction::class,
            DeliverScheduledReport::class,
            RestoreBackup::class,
            RunBackupNow::class,
        ];

        $longest = 0;
        $worst = '';

        foreach ($jobs as $job) {
            $timeout = (new \ReflectionClass($job))->getDefaultProperties()['timeout'] ?? null;

            $this->assertNotNull(
                $timeout,
                "[{$job}] declares no \$timeout, so it inherits whatever queue:work was launched with - "
                .'a number that lives in a deploy script this package cannot see.',
            );

            if ($timeout > $longest) {
                $longest = (int) $timeout;
                $worst = $job;
            }
        }

        foreach (array_keys((array) config('queue.connections')) as $connection) {
            $retryAfter = config("queue.connections.{$connection}.retry_after");

            if ($retryAfter === null) {
                continue; // sync and sqs have no reservation window.
            }

            $this->assertGreaterThan(
                $longest,
                $retryAfter,
                "The [{$connection}] queue reclaims a job after {$retryAfter}s while [{$worst}] is "
                ."allowed {$longest}s - so a long job is handed to a second worker while the first "
                .'is still running it.',
            );
        }
    }

    /* -------------------------------------------------------- strict mode */

    /**
     * AN N+1 IS AN EXCEPTION IN DEVELOPMENT AND CI.
     *
     * The query-count guard proves the shape for ONE resource - it counts
     * queries for /clients at ten rows and a thousand and fails if the number
     * moved. That is a good test, and it is one test: every resource added
     * since is unguarded, and the twelfth will be too. Eloquent refusing to
     * lazy-load is the version that scales, because the mistake cannot be
     * written without something failing immediately.
     *
     * PINNED HERE BECAUSE IT IS ONE LINE IN A PROVIDER. A setting whose only
     * evidence is its own presence is one somebody removes while chasing an
     * unrelated failure, and nothing says so until a list page starts firing a
     * query per row in production.
     *
     * THE FRAMEWORK ONLY FLAGS COLLECTIONS OF MORE THAN ONE - see
     * `Builder::hydrate`, which sets the per-instance flag under
     * `count($items) > 1`, because a single model cannot cause an N+1. So the
     * fixture below has TWO replies. With one, this test would pass against a
     * guard that was switched off, which is the failure it exists to prevent.
     */
    public function test_lazy_loading_is_refused_outside_production(): void
    {
        $this->assertTrue(
            Model::preventsLazyLoading(),
            'Eloquent strict mode is off, so an N+1 would go unnoticed until production.',
        );

        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        config(['panel.tenancy.resolver' => fn () => $tenant->id]);

        $user = User::factory()->create(['tenant_id' => $tenant->id]);

        $ticket = Ticket::query()->forceCreate([
            'tenant_id' => $tenant->id,
            'opened_by' => $user->id,
            'subject' => 'Two replies, so the framework arms the guard',
            'status' => Ticket::OPEN,
            'priority' => 'normal',
        ]);

        foreach (['first', 'second'] as $body) {
            TicketReply::query()->forceCreate([
                'tenant_id' => $tenant->id,
                'ticket_id' => $ticket->id,
                'author_id' => $user->id,
                'visibility' => TicketReply::PUBLIC,
                'body' => $body,
            ]);
        }

        $this->expectException(LazyLoadingViolationException::class);

        foreach (TicketReply::query()->get() as $reply) {
            $reply->author?->name;
        }
    }

    /* --------------------------------------------------------- broadcasting */

    /**
     * THE ONE THAT COST THIS PROJECT TWO ROUNDS OF FALSE-GREEN TESTS. The log
     * broadcaster never consults channel callbacks, so every channel authorises
     * - including for a guest - and nothing anywhere says so.
     */
    public function test_it_reports_a_broadcast_driver_that_cannot_authorise(): void
    {
        config([
            'panel.live.driver' => 'broadcast',
            'broadcasting.default' => 'log',
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('broadcast driver is [log]')
            ->assertFailed();
    }

    /**
     * AND IS QUIET WHEN THE PANEL DOES NOT BROADCAST AT ALL.
     *
     * The check used to look at the broadcast driver alone, and Laravel ships
     * `log` by default - so a fresh, correctly configured install reported a
     * problem about channel authorisation for a panel whose live driver is
     * `poll` and which registers no channel anybody can reach. This is the first
     * command anybody runs after installing, and a first run that says "1
     * problem found" about something that is not a problem teaches people to
     * stop reading the output.
     */
    public function test_it_is_quiet_about_the_broadcaster_when_the_panel_polls(): void
    {
        config([
            'panel.live.driver' => 'poll',
            'broadcasting.default' => 'log',
        ]);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    public function test_it_is_quiet_about_a_real_broadcaster(): void
    {
        config(['broadcasting.default' => 'pusher']);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* ------------------------------------------------------- session limits */

    /**
     * A limit with no server-side session store does nothing at all - and
     * "nothing at all" is believed to be "enforced", which is the failure.
     */
    public function test_it_reports_a_session_limit_that_cannot_work(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'panel.security.max_sessions' => 3,
            'session.driver' => 'cookie',
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('cannot support it')
            ->assertFailed();
    }

    public function test_a_limit_with_a_database_store_is_fine(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'panel.security.max_sessions' => 3,
            'session.driver' => 'database',
        ]);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* -------------------------------------------------------------- session */

    /**
     * A shared cookie across subdomains is survivable here - the session carries
     * its tenant and a mismatch is refused - but it must be deliberate rather
     * than something somebody added to stop being logged out between hosts.
     */
    public function test_it_reports_a_shared_session_domain(): void
    {
        config([
            'broadcasting.default' => 'pusher',
            'session.domain' => '.panelkit.test',
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('shares one cookie across subdomains')
            ->assertFailed();
    }

    /* --------------------------------------------------------------- exit */

    /**
     * NOTES DO NOT FAIL THE BUILD. Everything is not equally wrong, and a report
     * where every line is a warning trains people to read none of them.
     */
    public function test_notes_alone_do_not_fail(): void
    {
        config(['broadcasting.default' => 'pusher']);

        // No domains are seeded in this test database, which is a note.
        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /* ------------------------------------------------------------ retrieval */

    /**
     * A KNOWLEDGE BASE THAT CAN NO LONGER BE SEARCHED, and says nothing.
     *
     * Change the embedder or its model and every stored vector becomes a
     * different length from the ones queries produce. Nothing errors:
     * `KnowledgeBase` refuses to compare mismatched vectors and scores them
     * zero, so the passages sit there, `panel:knowledge status` reports
     * thousands of them, and every search comes back empty for good.
     */
    public function test_it_reports_passages_embedded_by_a_different_model(): void
    {
        DB::table('panel_knowledge_chunks')->insert([
            'tenant_id' => 1,
            'source' => 'help',
            'source_id' => 'a#0',
            'title' => 'Indexed by something else',
            'content' => 'Stored when the panel used a different embedding model.',
            'content_hash' => str_repeat('a', 64),
            // Eight, where the configured embedder produces 256.
            'embedding' => json_encode(array_fill(0, 8, 0.5)),
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('Stored passages are 8-dimensional')
            ->assertFailed();
    }

    /** And it is quiet when they match, which is every ordinary installation. */
    public function test_it_is_quiet_about_passages_from_the_current_embedder(): void
    {
        config(['panel.tenancy.resolver' => static fn (): int => 1]);

        app(KnowledgeBase::class)
            ->put('help', 'exports', 'Exporting a list', 'Exports run in the background.');

        config(['broadcasting.default' => 'pusher']);

        $this->artisan('panel:doctor')->assertSuccessful();
    }

    /**
     * THE CHECK THAT EXISTS BECAUSE THE DRIFT REPORT CANNOT SEE THE PROBLEM.
     *
     * `mergeConfigFrom` is shallow, so an application's published `plugins`
     * array replaces the package's whole - and the package is where
     * `TicketingPlugin` is now listed. An installation upgrading into 0.3.2
     * therefore names a portal in `panel.ticketing`, reloads, and gets no ticket
     * screen and no error. `panel:update`'s drift check skips list values by
     * design, so it says nothing either.
     */
    public function test_doctor_reports_ticketing_configured_without_its_plugin(): void
    {
        config([
            'panel.ticketing.operator' => 'admin',
            'panel.ticketing.opener' => 'reseller',
            // What a published config from before 0.3.2 looks like: its own
            // plugins, and no idea the package added one.
            'panel.plugins' => [],
        ]);

        /*
         * THE STATIC REGISTRY IS EMPTIED, and that is not test scaffolding - it
         * is the difference between this test and no test. `PanelManager::
         * $plugins` is static and survives the whole process, so by the time
         * this runs an earlier boot has already registered ticketing from the
         * reference app's config and doctor would report a healthy install. The
         * condition being reproduced is a FRESH PROCESS whose config never named
         * it, which is what a production request is.
         */
        $registry = new \ReflectionProperty(PanelManager::class, 'plugins');
        $before = $registry->getValue();
        $registry->setValue(null, []);

        try {
            $this->artisan('panel:doctor')
                ->expectsOutputToContain('Ticketing is configured and its plugin is not installed')
                ->assertFailed();
        } finally {
            $registry->setValue(null, $before);
        }
    }

    /**
     * AND SAYS NOTHING WHEN IT IS INSTALLED, which is the half that decides
     * whether the check is worth having. A report that cries wolf on a correct
     * installation is one people stop reading.
     */
    public function test_doctor_is_quiet_when_ticketing_is_installed(): void
    {
        $findings = $this->findings();

        $this->assertSame(
            [],
            array_values(array_filter(
                $findings,
                static fn (array $f): bool => str_contains($f['title'], 'Ticketing'),
            )),
            'Doctor reported ticketing as broken on the reference app, where it works.',
        );
    }

    /**
     * A NAME THAT POINTS AT NOTHING is the other half of the same upgrade: an
     * installation with existing ticket tables sets `tables` to what it has, and
     * a typo there produces a schema that looks complete - the packaged
     * migration skips the table it believes exists - failing as SQL on the first
     * person to open the queue.
     */
    public function test_doctor_reports_a_ticket_table_that_does_not_exist(): void
    {
        config(['panel.ticketing.tables.tickets' => 'tickets_typo']);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('[tickets_typo] does not exist')
            ->assertFailed();
    }

    /** Doctor's own findings, decoded. */
    private function findings(): array
    {
        /*
         * `Artisan::call`, NOT `$this->artisan()`. The latter returns a pending
         * assertion object that runs on destruction, so reading the output here
         * decoded an empty string.
         */
        Artisan::call('panel:doctor', ['--json' => true]);

        return (array) json_decode(Artisan::output(), true, 512, JSON_THROW_ON_ERROR);
    }

    public function test_it_emits_machine_readable_findings(): void
    {
        config([
            'panel.live.driver' => 'broadcast',
            'broadcasting.default' => 'log',
        ]);

        $this->artisan('panel:doctor --json')->assertFailed();
    }

    /**
     * DOCTOR NAMES THE TRAIT WITHOUT WHICH THE PANEL DENIES EVERYTHING.
     *
     * `panel:install` adds it now, so this is for an installation that predates
     * that or whose user model was replaced since. The check is on the MODEL's
     * methods rather than on the file, because what matters is whether a granted
     * ability can be held - not how the class came to be able to hold it.
     */
    public function test_it_reports_a_user_model_that_cannot_hold_a_role(): void
    {
        config(['auth.providers.users.model' => RolelessUser::class]);

        $this->artisan('panel:doctor')
            ->expectsOutputToContain('cannot hold a role')
            ->assertExitCode(1);
    }

    /** And says nothing when the model can. */
    public function test_it_is_quiet_when_the_user_model_holds_roles(): void
    {
        $this->assertTrue(method_exists(config('auth.providers.users.model'), 'assignRole'));

        $output = Artisan::output();

        $this->artisan('panel:doctor');

        $this->assertStringNotContainsString('cannot hold a role', Artisan::output().$output);
    }
}

/**
 * A user model with no roles, for the check above.
 *
 * A REAL CLASS rather than an anonymous one, because the check asks
 * `method_exists()` of a class NAME out of config, and an anonymous class's name
 * is not something config can hold.
 */
final class RolelessUser extends \Illuminate\Foundation\Auth\User {}
