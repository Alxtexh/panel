<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Queue;
use Alxtexh\Panel\Jobs\RunBackupNow;
use Alxtexh\Panel\Support\Abilities;
use Alxtexh\Panel\Support\InstallationState;
use Alxtexh\Panel\Support\LogReader;
use Alxtexh\Panel\Support\TenantContext;
use Tests\TestCase;

/**
 * The installation's own health: backups and logs.
 *
 * THE TESTS THAT MATTER ARE THE PATH ONES. A log viewer that opens the file it
 * was asked for is a read-any-file-on-the-server endpoint with a friendly name -
 * `?file=../../.env` is the whole exploit, and it returns 200 with the contents
 * of your credentials. So the cases below try exactly that, from several angles.
 *
 * THE ABILITY IS SEPARATE from managing anything else, because a stack trace
 * routinely names another organisation's records: on a shared installation this
 * screen is for whoever runs the servers, not for a tenant's administrator.
 */
final class OperationsTest extends TestCase
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

    /* ------------------------------------------------------------ the ability */

    public function test_both_pages_need_view_operations(): void
    {
        // Everything EXCEPT the one ability, so the refusal cannot be an
        // accident of having no permissions at all.
        $user = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $this->actingAs($user)->get('/operations/backups')->assertForbidden();
        $this->actingAs($user)->get('/operations/logs')->assertForbidden();
    }

    public function test_an_operator_can_open_them(): void
    {
        $user = $this->operator(['view_operations']);

        $this->actingAs($user)->get('/operations/backups')->assertOk();
        $this->actingAs($user)->get('/operations/logs')->assertOk();
    }

    /* --------------------------------------------------------------- traversal */

    /**
     * THE CENTRAL REFUSAL. A name outside the discovered list is not opened -
     * it falls back to a real log file rather than reading what was asked for.
     */
    public function test_a_traversal_attempt_reads_no_other_file(): void
    {
        $reader = new LogReader;

        foreach ([
            '../../.env',
            '../../../etc/passwd',
            '/etc/passwd',
            'laravel.log/../../.env',
        ] as $attempt) {
            $result = $reader->tail($attempt);

            $this->assertNotSame($attempt, $result['name'], "Opened [{$attempt}].");

            // It either found nothing, or fell back to a genuine log file.
            if ($result['name'] !== null) {
                $this->assertContains($result['name'], array_column($reader->files(), 'name'));
            }

            $joined = implode("\n", $result['lines']);
            $this->assertStringNotContainsString('APP_KEY', $joined);
            $this->assertStringNotContainsString('root:x:', $joined);
        }
    }

    /** And the same through the HTTP endpoint, which is where it would happen. */
    public function test_the_endpoint_refuses_a_foreign_path(): void
    {
        $user = $this->operator(['view_operations']);

        $response = $this->actingAs($user)->get('/operations/logs?file='.urlencode('../../.env'));

        $response->assertOk();

        $tail = $response->viewData('page')['props']['tail'];

        $this->assertNotSame('../../.env', $tail['name']);
        $this->assertStringNotContainsString('APP_KEY', implode("\n", $tail['lines']));
    }

    /** Only `.log` files are ever offered, so nothing else can be selected. */
    public function test_only_log_files_are_listed(): void
    {
        foreach ((new LogReader)->files() as $file) {
            $this->assertStringEndsWith('.log', $file['name']);
        }
    }

    /* ------------------------------------------------------------------ tail */

    public function test_the_tail_is_bounded(): void
    {
        $result = (new LogReader)->tail(null, lines: 25);

        $this->assertLessThanOrEqual(25, count($result['lines']));
    }

    /**
     * THE FILTER, AGAINST A LOG THIS TEST WROTE.
     *
     * It used to read whatever happened to be in `storage/logs` and skip when
     * that was empty - so on a clean machine it proved nothing and reported
     * green, and on a developer's machine it passed for reasons that had
     * nothing to do with the filter. Now that the suite logs to `null` (see
     * phpunit.xml) the ambient version would have skipped ALWAYS, which is the
     * useful kind of forcing function: a test that depends on its environment
     * eventually gets an environment that empties it.
     *
     * Both directions are asserted. A filter that returns nothing for every
     * term would pass a test that only checks the miss.
     */
    public function test_the_filter_narrows_the_lines(): void
    {
        $path = storage_path('logs/filter-fixture.log');

        file_put_contents($path, implode("\n", [
            '[2026-07-31 09:00:00] testing.INFO: a needle in here',
            '[2026-07-31 09:00:01] testing.INFO: nothing of interest',
            '[2026-07-31 09:00:02] testing.INFO: another needle',
        ])."\n");

        try {
            $reader = new LogReader;

            $this->assertCount(3, $reader->tail('filter-fixture.log', lines: 500)['lines']);

            $this->assertCount(
                2,
                $reader->tail('filter-fixture.log', lines: 500, needle: 'needle')['lines'],
            );

            $this->assertSame(
                [],
                $reader->tail('filter-fixture.log', lines: 500, needle: 'zzz-nothing-matches')['lines'],
            );
        } finally {
            @unlink($path);
        }
    }

    /* --------------------------------------------------------------- backups */

    /**
     * THE PAGE REPORTS RATHER THAN CRASHES when there are no backups yet, which
     * is the normal state of a fresh installation and of every dev machine.
     */
    public function test_the_backup_page_handles_having_no_backups(): void
    {
        $user = $this->operator(['view_operations']);

        $response = $this->actingAs($user)->get('/operations/backups');

        $response->assertOk();

        $status = $response->viewData('page')['props']['status'];

        $this->assertArrayHasKey('problem', $status);
        $this->assertArrayHasKey('healthy', $status);
    }

    /**
     * RESTORE EXISTS NOW, AND IT IS NOT REACHABLE BY LOOKING.
     *
     * This test used to assert the opposite - that no restore route existed at
     * all - on the reasoning that putting a snapshot back is irreversible and
     * belongs to somebody with a shell. That reasoning was argued and overruled:
     * an operator who can see the snapshots and cannot use them is being shown a
     * fire extinguisher behind glass with no hammer.
     *
     * SO THE TEST CHANGED SIDES, and what it now protects is the separation that
     * makes the feature survivable: `view_operations` opens the screen,
     * `manage_backups` is what may destroy something with it. The tests below
     * exercise each guard individually - this one only fixes the split.
     */
    public function test_looking_at_backups_does_not_permit_changing_them(): void
    {
        $user = $this->operator(['view_operations']);

        $this->actingAs($user)->delete('/operations/backups', ['paths' => ['x.zip']])
            ->assertForbidden();

        $this->actingAs($user)->post('/operations/backups/restore', [
            'path' => 'x.zip',
            'confirm' => 'x.zip',
        ])->assertForbidden();

        $this->actingAs($user)->put('/operations/backups/settings', [])
            ->assertForbidden();
    }

    /** Starting one is offered, and is queued rather than run inline. */
    public function test_a_backup_can_be_started_and_is_queued(): void
    {
        Queue::fake();

        $user = $this->operator(['view_operations']);

        $this->actingAs($user)->post('/operations/backups/run')->assertRedirect();

        Queue::assertPushed(RunBackupNow::class);
    }

    /** And it needs the same ability as reading the page. */
    public function test_starting_a_backup_needs_the_ability(): void
    {
        Queue::fake();

        $user = $this->operator(array_values(array_diff(Abilities::all(), ['view_operations'])));

        $this->actingAs($user)->post('/operations/backups/run')->assertForbidden();

        Queue::assertNothingPushed();
    }

    /**
     * ONLY ONE AT A TIME. Two concurrent runs write into the same destination
     * and compete for the same disk - and the second is started by whoever
     * clicks twice because the first gave no immediate feedback.
     *
     * THE LOCK IS NOT IN THE CACHE ANY MORE, and that change is the point. Cache
     * keys are tenant-prefixed by `CacheTenancyBootstrapper` - correctly - so
     * `Cache::lock('panel:backup:running')` was a lock PER ORGANISATION: two
     * tenants' administrators could each acquire "the" lock at the same moment,
     * which is precisely the event it exists to prevent. A backup covers every
     * tenant at once, so the thing serialising it has to as well.
     */
    public function test_a_second_run_is_skipped_while_one_holds_the_lock(): void
    {
        $state = app(InstallationState::class);

        $this->assertTrue($state->acquire('backup:running', 60));

        (new RunBackupNow('Tester'))->handle();

        $this->assertSame(
            'skipped',
            $state->get(RunBackupNow::STATE_KEY)['state'] ?? null,
        );
    }

    /**
     * AND THE LOCK IS NOT TENANT SCOPED, which is the bug that prompted moving
     * it. Held while standing in one organisation, it must still be held from
     * another - otherwise two backups run at once and neither knows.
     */
    public function test_the_lock_is_held_across_organisations(): void
    {
        $state = app(InstallationState::class);

        $this->assertTrue($state->acquire('backup:running', 60));

        $other = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        app(TenantContext::class);
        tenancy()->initialize($other);

        try {
            $this->assertFalse(
                $state->acquire('backup:running', 60),
                'A second organisation acquired a lock that was already held.',
            );
        } finally {
            tenancy()->end();
            $state->release('backup:running');
        }
    }
}
