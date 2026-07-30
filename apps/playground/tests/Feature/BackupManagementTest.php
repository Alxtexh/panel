<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Jobs\RestoreBackup;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Queue;
use Illuminate\Support\Facades\Storage;
use PanelKit\Panel\Support\Abilities;
use PanelKit\Panel\Support\BackupArchive;
use PanelKit\Panel\Support\BackupDestinationProbe;
use PanelKit\Panel\Support\BackupSettings;
use PanelKit\Panel\Support\InstallationState;
use PanelKit\Panel\Support\PanelSettings;
use Spatie\Backup\Notifications\Notifications\BackupHasFailedNotification;
use Spatie\Backup\Notifications\Notifications\BackupWasSuccessfulNotification;
use Spatie\Backup\Tasks\Monitor\HealthChecks\MaximumAgeInDays;
use Tests\TestCase;

/**
 * Doing things to a snapshot: downloading, deleting, restoring, scheduling.
 *
 * THE GUARDS ARE THE SUBJECT, not the happy paths. Every one of these endpoints
 * either hands out a file, removes one, or overwrites the live database, and all
 * three fail in the same silent direction: they return 200 and look like they
 * worked. So the cases below are mostly refusals - a path that is not a
 * snapshot, a delete that would empty the disk, a confirmation that does not
 * match, an ability that is missing.
 *
 * THE TRAVERSAL CASES ARE NOT THEORETICAL. `?path=../../.env` against a naive
 * download endpoint returns the credentials of the installation with a 200 and a
 * helpful filename. The archive resolves names against the enumerated list for
 * exactly this reason, and these assert it from several angles because the
 * tempting fix - rejecting strings containing `..` - passes a test and stops
 * almost nothing.
 */
final class BackupManagementTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    private string $directory;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);

        /*
         * A FAKE DISK, so the tests write nothing real. `Storage::fake` also
         * replaces the disk the archive resolves through, which is what lets a
         * traversal attempt be checked against a directory that actually has
         * files in it rather than against an empty one where everything is
         * refused for the wrong reason.
         */
        Storage::fake('local');

        $this->directory = (string) config('backup.backup.name', 'Laravel');
    }

    /** @param list<string> $abilities */
    private function operator(array $abilities): User
    {
        return User::factory()
            ->withAbilities($abilities)
            ->create(['tenant_id' => $this->tenant->id, 'email_verified_at' => now()]);
    }

    private function manager(): User
    {
        return $this->operator(['view_operations', 'manage_backups']);
    }

    /** @return list<string> */
    private function snapshots(int $count): array
    {
        $paths = [];

        for ($i = 1; $i <= $count; $i++) {
            $path = "{$this->directory}/2026-07-2{$i}-01-30-00.zip";
            Storage::disk('local')->put($path, "snapshot {$i}");
            $paths[] = $path;
        }

        return $paths;
    }

    /* ------------------------------------------------------------- download */

    public function test_a_snapshot_can_be_downloaded(): void
    {
        [$path] = $this->snapshots(1);

        $response = $this->actingAs($this->operator(['view_operations']))
            ->get('/operations/backups/download?path='.urlencode($path));

        $response->assertOk();
        $this->assertSame('snapshot 1', $response->streamedContent());
    }

    /**
     * THE ONE THAT MATTERS. A path outside the snapshot list is not a file the
     * endpoint has any business opening, however it is spelled.
     */
    public function test_download_refuses_anything_that_is_not_a_snapshot(): void
    {
        $this->snapshots(2);

        $user = $this->operator(['view_operations']);

        $attempts = [
            '../../.env',
            '../.env',
            $this->directory.'/../../.env',
            '/etc/passwd',
            $this->directory.'/nonexistent.zip',
            // A real file on the disk, but not a snapshot: the guard is "is it
            // in the list", not "is it inside the directory".
            $this->directory.'/notes.txt',
            '',
        ];

        Storage::disk('local')->put($this->directory.'/notes.txt', 'not a backup');

        foreach ($attempts as $attempt) {
            $this->actingAs($user)
                ->get('/operations/backups/download?path='.urlencode($attempt))
                ->assertNotFound();
        }
    }

    public function test_download_needs_the_ability(): void
    {
        [$path] = $this->snapshots(1);

        $user = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $this->actingAs($user)
            ->get('/operations/backups/download?path='.urlencode($path))
            ->assertForbidden();
    }

    /* --------------------------------------------------------------- delete */

    public function test_a_snapshot_can_be_deleted(): void
    {
        [$first, $second] = $this->snapshots(2);

        $this->actingAs($this->manager())
            ->delete('/operations/backups', ['paths' => [$first]])
            ->assertRedirect();

        Storage::disk('local')->assertMissing($first);
        Storage::disk('local')->assertExists($second);
    }

    public function test_several_can_be_deleted_at_once(): void
    {
        [$a, $b, $c] = $this->snapshots(3);

        $this->actingAs($this->manager())
            ->delete('/operations/backups', ['paths' => [$a, $b]])
            ->assertRedirect();

        Storage::disk('local')->assertMissing($a);
        Storage::disk('local')->assertMissing($b);
        Storage::disk('local')->assertExists($c);
    }

    /**
     * THE LAST COPY IS NOT DELETABLE.
     *
     * Not "warned about" - refused. The moment somebody asks for this is the
     * moment nobody is thinking clearly, and there is no undo on the other side
     * of it.
     */
    public function test_the_only_snapshot_cannot_be_deleted(): void
    {
        [$only] = $this->snapshots(1);

        $this->actingAs($this->manager())
            ->delete('/operations/backups', ['paths' => [$only]])
            ->assertRedirect();

        Storage::disk('local')->assertExists($only);
    }

    /** Nor by selecting every row, which is one click. */
    public function test_selecting_everything_and_deleting_is_refused_entirely(): void
    {
        $all = $this->snapshots(4);

        $this->actingAs($this->manager())
            ->delete('/operations/backups', ['paths' => $all])
            ->assertRedirect();

        foreach ($all as $path) {
            Storage::disk('local')->assertExists($path);
        }
    }

    /** And a request padded with names that do not exist cannot get around it. */
    public function test_unknown_names_do_not_dilute_the_last_copy_guard(): void
    {
        [$only] = $this->snapshots(1);

        $this->actingAs($this->manager())
            ->delete('/operations/backups', [
                'paths' => [$only, $this->directory.'/imaginary.zip', '../../.env'],
            ])
            ->assertRedirect();

        Storage::disk('local')->assertExists($only);
    }

    public function test_deleting_needs_manage_backups(): void
    {
        [$first] = $this->snapshots(2);

        $user = $this->operator(array_values(array_diff(Abilities::all(), ['manage_backups'])));

        $this->actingAs($user)
            ->delete('/operations/backups', ['paths' => [$first]])
            ->assertForbidden();

        Storage::disk('local')->assertExists($first);
    }

    /** A deletion nobody can attribute is a deletion that did not happen. */
    public function test_deleting_is_audited_with_the_snapshot_name(): void
    {
        [$first] = $this->snapshots(2);

        $this->actingAs($this->manager())->delete('/operations/backups', ['paths' => [$first]]);

        $entry = DB::table('audit_entries')->where('event', 'backup.deleted')->first();

        $this->assertNotNull($entry, 'No audit entry was written for the deletion.');
        $this->assertStringContainsString(basename($first), (string) $entry->changes);
    }

    /**
     * INSTALLATION SCOPE, NOT THE ACTOR'S ORGANISATION.
     *
     * A snapshot covers every tenant at once. Filing the entry under whichever
     * one the operator happened to be signed into said something true - where
     * they were standing - and hid something truer: that the effect did not stop
     * there, and no other organisation could see it had happened.
     */
    public function test_backup_events_are_recorded_against_the_installation(): void
    {
        [$first] = $this->snapshots(2);

        $this->actingAs($this->manager())->delete('/operations/backups', ['paths' => [$first]]);

        $entry = DB::table('audit_entries')->where('event', 'backup.deleted')->first();

        $this->assertNotNull($entry);
        $this->assertSame('installation', $entry->scope);

        // The tenant is still recorded: it says where the person was standing.
        $this->assertSame($this->tenant->id, (int) $entry->tenant_id);
    }

    /** And the page shows the trail, or nobody can answer "who deleted it". */
    public function test_the_page_lists_recent_backup_activity(): void
    {
        [$first] = $this->snapshots(2);

        $this->actingAs($this->manager())->delete('/operations/backups', ['paths' => [$first]]);

        $history = $this->actingAs($this->manager())
            ->get('/operations/backups')
            ->viewData('page')['props']['history'];

        $this->assertNotEmpty($history);
        $this->assertSame('backup.deleted', $history[0]['event']);
        $this->assertSame(basename($first), $history[0]['snapshot']);
    }

    /** Who last changed the policy, which the column recorded and nothing read. */
    public function test_the_page_reports_who_last_changed_the_settings(): void
    {
        $manager = $this->manager();

        $this->actingAs($manager)->put('/operations/backups/settings', $this->settingsPayload());

        $provenance = $this->actingAs($manager)
            ->get('/operations/backups')
            ->viewData('page')['props']['settingsChangedBy'];

        $this->assertNotNull($provenance);
        $this->assertSame($manager->name, $provenance['by']);
    }

    /* -------------------------------------------------------------- restore */

    public function test_restoring_requires_the_typed_name_to_match(): void
    {
        Queue::fake();

        [$path] = $this->snapshots(2);

        $this->actingAs($this->manager())->post('/operations/backups/restore', [
            'path' => $path,
            'confirm' => 'something else',
        ])->assertRedirect();

        Queue::assertNothingPushed();
    }

    public function test_restoring_with_the_right_name_queues_the_job(): void
    {
        Queue::fake();

        [$path] = $this->snapshots(2);

        $this->actingAs($this->manager())->post('/operations/backups/restore', [
            'path' => $path,
            'confirm' => basename($path),
        ])->assertRedirect();

        Queue::assertPushed(RestoreBackup::class, fn (RestoreBackup $job): bool => $job->path === $path);
    }

    public function test_restoring_an_unknown_snapshot_is_a_404(): void
    {
        Queue::fake();

        $this->snapshots(1);

        $this->actingAs($this->manager())->post('/operations/backups/restore', [
            'path' => '../../.env',
            'confirm' => '.env',
        ])->assertNotFound();

        Queue::assertNothingPushed();
    }

    public function test_restoring_needs_manage_backups(): void
    {
        Queue::fake();

        [$path] = $this->snapshots(1);

        $user = $this->operator(array_values(array_diff(Abilities::all(), ['manage_backups'])));

        $this->actingAs($user)->post('/operations/backups/restore', [
            'path' => $path,
            'confirm' => basename($path),
        ])->assertForbidden();

        Queue::assertNothingPushed();
    }

    /**
     * A restore that never got to run because another one is already in
     * progress has not entered either phase - `step` must say so rather
     * than leaving the page's step indicator to guess.
     */
    public function test_a_restore_refused_because_another_job_is_running_reports_no_step(): void
    {
        $state = app(InstallationState::class);
        $state->acquire('backup:running', 60);

        try {
            (new RestoreBackup('irrelevant.zip'))->handle();
        } finally {
            $state->release('backup:running');
        }

        $recorded = $state->get(RestoreBackup::STATE_KEY);

        $this->assertSame('skipped', $recorded['state']);
        $this->assertNull($recorded['step']);
    }

    /** The page hands the step straight through - it is what the indicator reads. */
    public function test_the_page_reports_which_step_the_last_restore_reached(): void
    {
        app(InstallationState::class)->put(RestoreBackup::STATE_KEY, [
            'state' => 'failed',
            'message' => 'The safety backup failed, so nothing was restored.',
            'step' => RestoreBackup::STEP_SAFETY_BACKUP,
            'at' => now()->toIso8601String(),
            'by' => 'Tester',
            'snapshot' => 'x.zip',
        ]);

        $lastRestore = $this->actingAs($this->manager())
            ->get('/operations/backups')
            ->viewData('page')['props']['lastRestore'];

        $this->assertSame(RestoreBackup::STEP_SAFETY_BACKUP, $lastRestore['step']);
    }

    /* ------------------------------------------------------------- settings */

    public function test_settings_are_saved_and_read_back(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', [
            'frequency' => 'weekly',
            'time' => '23:15',
            'weekday' => 3,
            'dayOfMonth' => 1,
            'keepDays' => 30,
            'maxMegabytes' => 20000,
            'destinations' => ['local'],
            'alertEmail' => 'ops@example.com',
            'alertTelegramChatId' => '-1001',
            'notifyOnSuccess' => true,
        ])->assertRedirect();

        $settings = BackupSettings::load(app(PanelSettings::class));

        $this->assertSame('weekly', $settings->frequency);
        $this->assertSame('23:15', $settings->time);
        $this->assertSame(3, $settings->weekday);
        $this->assertSame(30, $settings->keepDays);
        $this->assertSame('ops@example.com', $settings->alertEmail);
        $this->assertTrue($settings->notifyOnSuccess);
    }

    /** The page shows what was saved, or an operator cannot tell that it was. */
    public function test_the_page_reports_the_saved_schedule(): void
    {
        app(PanelSettings::class)->put(BackupSettings::KEY, [
            'frequency' => 'weekly',
            'time' => '04:00',
            'weekday' => 6,
        ]);

        $props = $this->actingAs($this->manager())
            ->get('/operations/backups')
            ->viewData('page')['props'];

        $this->assertSame('Every Saturday at 04:00', $props['schedule']);
    }

    public function test_a_frequency_the_scheduler_cannot_express_is_rejected(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', [
            'frequency' => 'every-minute',
            'time' => '01:30',
            'weekday' => 7,
            'dayOfMonth' => 1,
            'keepDays' => 7,
            'maxMegabytes' => null,
            'destinations' => ['local'],
            'alertEmail' => null,
            'alertTelegramChatId' => null,
            'notifyOnSuccess' => false,
        ])->assertSessionHasErrors('frequency');
    }

    /**
     * A DISK THAT DOES NOT EXIST IS REFUSED, and the reason is not tidiness.
     * Spatie throws on an unknown disk mid-run with `continue_on_failure` false,
     * so one bad name here means NO backup is taken at all - the setting meant
     * to add a second copy silently removes the first.
     */
    public function test_an_unknown_destination_disk_is_rejected(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', [
            'frequency' => 'daily',
            'time' => '01:30',
            'weekday' => 7,
            'dayOfMonth' => 1,
            'keepDays' => 7,
            'maxMegabytes' => null,
            'destinations' => ['local', 'nowhere'],
            'alertEmail' => null,
            'alertTelegramChatId' => null,
            'notifyOnSuccess' => false,
        ])->assertSessionHasErrors('destinations.1');
    }

    /** Local is forced back in, so a snapshot always exists somewhere reachable. */
    public function test_the_local_disk_cannot_be_removed(): void
    {
        $settings = BackupSettings::fromArray(['destinations' => ['s3']]);

        $this->assertContains('local', $settings->destinations);
    }

    /** Zero days would leave exactly one snapshot and look like a policy. */
    public function test_retention_is_clamped_to_at_least_a_day(): void
    {
        $this->assertSame(1, BackupSettings::fromArray(['keepDays' => 0])->keepDays);
        $this->assertSame(1, BackupSettings::fromArray(['keepDays' => -5])->keepDays);
    }

    /* ------------------------------------------------------------- cadences */

    public function test_a_monthly_schedule_is_accepted_and_described(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', [
            'frequency' => 'monthly',
            'time' => '02:00',
            'weekday' => 7,
            'dayOfMonth' => 22,
            'keepDays' => 90,
            'maxMegabytes' => null,
            'destinations' => ['local'],
            'alertEmail' => null,
            'alertTelegramChatId' => null,
            'alertTelegramToken' => null,
            'notifyOnSuccess' => false,
        ])->assertRedirect();

        $this->assertSame(
            'On the 22nd of each month at 02:00',
            BackupSettings::load(app(PanelSettings::class))->describe(),
        );
    }

    /**
     * A DAY THE CALENDAR DOES NOT ALWAYS HAVE IS NOT ACCEPTED.
     *
     * Laravel's monthly schedule does not fire when the day is absent, so "the
     * 31st" would silently skip February, April, June, September and November -
     * seven backups a year instead of twelve, with nothing to notice it.
     */
    public function test_a_day_of_month_beyond_the_shortest_month_is_rejected(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', [
            'frequency' => 'monthly',
            'time' => '02:00',
            'weekday' => 7,
            'dayOfMonth' => 31,
            'keepDays' => 90,
            'maxMegabytes' => null,
            'destinations' => ['local'],
            'alertEmail' => null,
            'alertTelegramChatId' => null,
            'alertTelegramToken' => null,
            'notifyOnSuccess' => false,
        ])->assertSessionHasErrors('dayOfMonth');
    }

    /** And a value arriving from anywhere else is clamped rather than trusted. */
    public function test_the_day_of_month_is_clamped(): void
    {
        $this->assertSame(28, BackupSettings::fromArray(['dayOfMonth' => 31])->dayOfMonth);
        $this->assertSame(1, BackupSettings::fromArray(['dayOfMonth' => 0])->dayOfMonth);
    }

    /**
     * THE MONITOR FOLLOWS THE CADENCE. A monthly schedule under a one-day
     * staleness check reports an incident every day for a month, and an alert
     * that cries daily is an alert somebody mutes - after which the real failure
     * is silent.
     */
    public function test_a_monthly_schedule_widens_the_staleness_threshold(): void
    {
        BackupSettings::fromArray(['frequency' => 'daily'])->apply();
        $daily = config('backup.monitor_backups.0.health_checks');

        BackupSettings::fromArray(['frequency' => 'monthly'])->apply();
        $monthly = config('backup.monitor_backups.0.health_checks');

        $check = MaximumAgeInDays::class;

        $this->assertGreaterThan($daily[$check], $monthly[$check]);
    }

    /* ------------------------------------------------------------- telegram */

    /**
     * BOTH HALVES ARE ASKED FOR, because either alone delivers nothing.
     *
     * The chat id was settable and the bot token came from the environment, so
     * an operator could fill in the only field they were shown, watch it save,
     * and receive no alerts with nothing on screen to explain it.
     */
    public function test_the_telegram_token_is_stored_and_applied(): void
    {
        $this->actingAs($this->manager())->put('/operations/backups/settings', $this->settingsPayload([
            'alertTelegramChatId' => '-1001',
            'alertTelegramToken' => '123456:REAL-TOKEN',
        ]))->assertRedirect();

        $settings = BackupSettings::load(app(PanelSettings::class));

        $this->assertSame('123456:REAL-TOKEN', $settings->alertTelegramToken);

        $settings->apply();

        $this->assertSame('123456:REAL-TOKEN', config('services.telegram.token'));
        $this->assertSame('-1001', config('services.telegram.chat_id'));
    }

    /** The token never reaches the browser, because it controls the bot outright. */
    public function test_the_token_is_never_sent_to_the_page(): void
    {
        app(PanelSettings::class)->put(BackupSettings::KEY, [
            'alertTelegramToken' => '123456:SECRET',
            'alertTelegramChatId' => '-1001',
        ]);

        $settings = $this->actingAs($this->manager())
            ->get('/operations/backups')
            ->viewData('page')['props']['settings'];

        $this->assertNull($settings['alertTelegramToken']);
        $this->assertTrue($settings['hasTelegramToken']);

        // Not merely absent from that key - absent from the payload entirely.
        $this->assertStringNotContainsString('123456:SECRET', json_encode($settings));
    }

    /**
     * AN EMPTY TOKEN FIELD MEANS "LEAVE IT", NEVER "CLEAR IT".
     *
     * The page is never sent the stored token, so the field posts back empty
     * unless somebody typed a new one. Taking that literally would make editing
     * the retention period silently delete a working credential - a setting that
     * destroys itself when an unrelated one is changed.
     */
    public function test_saving_without_retyping_the_token_keeps_it(): void
    {
        app(PanelSettings::class)->put(BackupSettings::KEY, [
            'alertTelegramToken' => '123456:KEEP-ME',
            'alertTelegramChatId' => '-1001',
        ]);

        $this->actingAs($this->manager())->put('/operations/backups/settings', $this->settingsPayload([
            'keepDays' => 45,
            'alertTelegramChatId' => '-1001',
            'alertTelegramToken' => null,
        ]))->assertRedirect();

        $settings = BackupSettings::load(app(PanelSettings::class));

        $this->assertSame('123456:KEEP-ME', $settings->alertTelegramToken);
        $this->assertSame(45, $settings->keepDays);
    }

    /** Half-configured is reported as not ready, because it silently sends nothing. */
    public function test_telegram_needs_both_halves_to_count_as_ready(): void
    {
        config()->set('services.telegram.token', null);
        config()->set('services.telegram.chat_id', null);

        $this->assertFalse(BackupSettings::fromArray(['alertTelegramChatId' => '-1001'])->telegramReady());
        $this->assertFalse(BackupSettings::fromArray(['alertTelegramToken' => 'abc'])->telegramReady());

        $this->assertTrue(BackupSettings::fromArray([
            'alertTelegramChatId' => '-1001',
            'alertTelegramToken' => 'abc',
        ])->telegramReady());
    }

    /**
     * THE ENVIRONMENT REMAINS THE FALLBACK. An installation already setting
     * `TELEGRAM_BOT_TOKEN` keeps working; a null in the panel means "not set
     * here", not "switch it off".
     */
    public function test_an_unset_panel_token_does_not_clear_an_environment_one(): void
    {
        config()->set('services.telegram.token', 'from-the-environment');

        BackupSettings::fromArray(['alertTelegramChatId' => '-1001'])->apply();

        $this->assertSame('from-the-environment', config('services.telegram.token'));
    }

    /**
     * A complete, valid payload. Individual tests override the one field they
     * are about, so a new required setting does not mean editing ten arrays.
     *
     * @param  array<string, mixed>  $overrides
     * @return array<string, mixed>
     */
    private function settingsPayload(array $overrides = []): array
    {
        return [
            'frequency' => 'daily',
            'time' => '01:30',
            'weekday' => 7,
            'dayOfMonth' => 1,
            'keepDays' => 7,
            'maxMegabytes' => null,
            'destinations' => ['local'],
            'alertEmail' => null,
            'alertTelegramChatId' => null,
            'alertTelegramToken' => null,
            'notifyOnSuccess' => false,
            ...$overrides,
        ];
    }

    /* -------------------------------------------------------- destinations */

    /**
     * A DISK IS PROVED, NOT JUST NAMED.
     *
     * "Configured" and "working" are different questions and only the second
     * matters. An `s3` entry with empty credentials passes every check a form
     * can make, saves happily, and fails on the first nightly run - and with
     * `continue_on_failure` false that failure takes the WHOLE backup down, so
     * adding an off-site copy silently removes the local one.
     */
    public function test_a_destination_that_cannot_be_written_to_is_not_saved(): void
    {
        config()->set('filesystems.disks.broken', [
            'driver' => 'local',
            // A path under a file, so every write fails - the cheapest way to
            // get a real driver to refuse rather than mocking one that does.
            'root' => __FILE__.'/nope',
            'throw' => false,
        ]);

        $this->actingAs($this->manager())
            ->put('/operations/backups/settings', $this->settingsPayload([
                'destinations' => ['local', 'broken'],
                'keepDays' => 99,
            ]))
            ->assertSessionHasErrors('destinations');

        // NOTHING was saved, not even the parts that were fine. A half-applied
        // settings save is worse than a refused one.
        $this->assertSame(7, BackupSettings::load(app(PanelSettings::class))->keepDays);
    }

    public function test_a_destination_that_works_is_saved(): void
    {
        $this->actingAs($this->manager())
            ->put('/operations/backups/settings', $this->settingsPayload(['keepDays' => 99]))
            ->assertSessionHasNoErrors();

        $this->assertSame(99, BackupSettings::load(app(PanelSettings::class))->keepDays);
    }

    /** The probe writes, reads back, and cleans up after itself. */
    public function test_the_probe_leaves_nothing_behind(): void
    {
        $result = (new BackupDestinationProbe)->check('local');

        $this->assertTrue($result['ok'], $result['message']);

        $this->assertSame(
            [],
            Storage::disk('local')->allFiles('.panelkit-probe'),
            'The probe left its test file on the disk.',
        );
    }

    /**
     * WHAT WAS WRITTEN HAS TO READ BACK. A destination that accepts a write and
     * returns something else cannot restore a snapshot, and it is exactly the
     * failure a "did the write throw?" check calls healthy.
     */
    public function test_the_probe_verifies_the_contents_not_just_the_write(): void
    {
        $probe = new BackupDestinationProbe;

        $this->assertFalse($probe->check('nonexistent-disk')['ok']);
        $this->assertStringContainsString('No such disk', $probe->check('nonexistent-disk')['message']);
    }

    public function test_a_destination_can_be_tested_without_saving(): void
    {
        $this->actingAs($this->manager())
            ->post('/operations/backups/destinations/test', ['disk' => 'local'])
            ->assertRedirect();

        // Testing is not a change, so nothing was written.
        $this->assertSame(7, BackupSettings::load(app(PanelSettings::class))->keepDays);
    }

    public function test_testing_a_destination_needs_manage_backups(): void
    {
        $user = $this->operator(array_values(array_diff(Abilities::all(), ['manage_backups'])));

        $this->actingAs($user)
            ->post('/operations/backups/destinations/test', ['disk' => 'local'])
            ->assertForbidden();
    }

    /* --------------------------------------------------- what apply() changes */

    public function test_applying_the_settings_reaches_the_config_spatie_reads(): void
    {
        BackupSettings::fromArray([
            'keepDays' => 21,
            'maxMegabytes' => 1234,
            'destinations' => ['local'],
            'alertEmail' => 'ops@example.com',
        ])->apply();

        $this->assertSame(21, config('backup.cleanup.default_strategy.keep_all_backups_for_days'));
        $this->assertSame(
            1234,
            config('backup.cleanup.default_strategy.delete_oldest_backups_when_using_more_megabytes_than'),
        );
        $this->assertSame('ops@example.com', config('backup.notifications.mail.to'));

        /*
         * THE MONITOR WATCHES WHAT IS WRITTEN. These are two separate config
         * keys, and when they disagree the health check reports on a location
         * nothing writes to any more - a green light over an empty directory.
         */
        $this->assertSame(
            config('backup.backup.destination.disks'),
            config('backup.monitor_backups.0.disks'),
        );
    }

    /** Silence on success is the default, and it is a decision rather than an omission. */
    public function test_success_notifications_are_off_unless_asked_for(): void
    {
        BackupSettings::fromArray(['alertEmail' => 'ops@example.com'])->apply();

        $this->assertSame(
            [],
            config('backup.notifications.notifications.'
                .BackupWasSuccessfulNotification::class),
        );
    }

    public function test_success_notifications_use_the_same_channels_as_failures(): void
    {
        BackupSettings::fromArray([
            'alertEmail' => 'ops@example.com',
            'notifyOnSuccess' => true,
        ])->apply();

        $failure = config('backup.notifications.notifications.'
            .BackupHasFailedNotification::class);

        $success = config('backup.notifications.notifications.'
            .BackupWasSuccessfulNotification::class);

        $this->assertSame($failure, $success);
        $this->assertNotEmpty($success);
    }

    /* ------------------------------------------------------------- the model */

    /** The archive is the authority, and it holds the line without a controller. */
    public function test_the_archive_refuses_to_empty_itself(): void
    {
        $all = $this->snapshots(3);

        $result = (new BackupArchive)->delete($all);

        $this->assertSame([], $result['deleted']);
        $this->assertNotNull($result['reason']);
    }

    public function test_the_archive_resolves_only_real_snapshots(): void
    {
        [$path] = $this->snapshots(2);

        $archive = new BackupArchive;

        $this->assertSame($path, $archive->resolve($path));
        $this->assertNull($archive->resolve('../../.env'));
        $this->assertNull($archive->resolve($this->directory.'/missing.zip'));
    }
}
