<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Client;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Queue;
use PanelKit\Panel\Jobs\DeliverScheduledReport;
use PanelKit\Panel\Mail\ScheduledReportMail;
use PanelKit\Panel\Reports\ScheduledReport;
use Tests\TestCase;

/**
 * A filtered list, on a schedule, emailed as a CSV.
 *
 * IT IS THE EXPORT BUTTON, MINUS THE PERSON. Every operations team has somebody
 * who opens the panel each Monday, applies four filters, presses Export and
 * forwards the file - and that person exists because the panel could not do it.
 *
 * THE FAILURE MODES ARE ALL QUIET. A report that stops arriving looks like a
 * quiet week; one that arrives twice teaches people to ignore it; one that runs
 * as nobody produces rows its recipients were never entitled to see. Almost
 * everything below is about those three rather than about the happy path.
 */
final class ScheduledReportTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $acme;

    private Tenant $rival;

    private User $owner;

    protected function setUp(): void
    {
        parent::setUp();

        $this->acme = Tenant::create(['name' => 'Acme', 'slug' => 'acme']);
        $this->rival = Tenant::create(['name' => 'Rival', 'slug' => 'rival']);

        $this->owner = User::factory()->create([
            'tenant_id' => $this->acme->id,
            'email_verified_at' => now(),
        ]);
    }

    private function report(array $attributes = []): ScheduledReport
    {
        return ScheduledReport::query()->create([
            'tenant_id' => $this->acme->id,
            'user_id' => $this->owner->getKey(),
            'name' => 'Overdue accounts',
            'resource' => 'clients',
            'state' => ['status' => 'expired'],
            'frequency' => 'weekly',
            'time' => '07:00',
            'weekday' => 1,
            'day_of_month' => 1,
            'recipients' => ['finance@example.com'],
            'is_active' => true,
            ...$attributes,
        ]);
    }

    private function client(Tenant $tenant, string $name, string $code, string $status = 'expired'): Client
    {
        return Client::query()->forceCreate([
            'tenant_id' => $tenant->id,
            'name' => $name,
            'access_code' => $code,
            'phone' => '+2547'.random_int(10_000_000, 99_999_999),
            'status' => $status,
            'plan_type' => 'pppoe',
            'expiry_date' => now()->subMonth(),
        ]);
    }

    /* --------------------------------------------------------- when it runs */

    /** A Monday at 07:00 is due; the same minute on a Tuesday is not. */
    public function test_a_weekly_report_is_due_on_its_day_only(): void
    {
        $report = $this->report();

        $monday = Carbon::parse('2026-08-03 07:00');   // a Monday
        $tuesday = Carbon::parse('2026-08-04 07:00');

        $this->assertSame(1, $monday->dayOfWeekIso);

        $this->assertTrue($report->isDue($monday));
        $this->assertFalse($report->isDue($tuesday));
    }

    public function test_it_is_not_due_a_minute_either_side(): void
    {
        $report = $this->report();

        $this->assertFalse($report->isDue(Carbon::parse('2026-08-03 06:59')));
        $this->assertTrue($report->isDue(Carbon::parse('2026-08-03 07:00')));
        $this->assertFalse($report->isDue(Carbon::parse('2026-08-03 07:01')));
    }

    public function test_an_inactive_report_is_never_due(): void
    {
        $report = $this->report(['is_active' => false]);

        $this->assertFalse($report->isDue(Carbon::parse('2026-08-03 07:00')));
    }

    /**
     * ALREADY SENT THIS MINUTE IS NOT DUE.
     *
     * The guard against a doubled tick, a retried worker, or two servers both
     * running the scheduler. A report arriving twice teaches people to ignore
     * it, which costs more than one that arrives late.
     */
    public function test_it_is_not_due_twice_in_the_same_minute(): void
    {
        $now = Carbon::parse('2026-08-03 07:00');

        $report = $this->report(['last_sent_at' => $now]);

        $this->assertFalse($report->isDue($now));
    }

    public function test_a_daily_report_is_due_every_day_at_its_time(): void
    {
        $report = $this->report(['frequency' => 'daily']);

        $this->assertTrue($report->isDue(Carbon::parse('2026-08-03 07:00')));
        $this->assertTrue($report->isDue(Carbon::parse('2026-08-04 07:00')));
        $this->assertFalse($report->isDue(Carbon::parse('2026-08-04 08:00')));
    }

    public function test_a_monthly_report_is_due_on_its_day(): void
    {
        $report = $this->report(['frequency' => 'monthly', 'day_of_month' => 15]);

        $this->assertTrue($report->isDue(Carbon::parse('2026-08-15 07:00')));
        $this->assertFalse($report->isDue(Carbon::parse('2026-08-14 07:00')));
    }

    /* ------------------------------------------------------- the dispatcher */

    public function test_the_command_dispatches_only_what_is_due(): void
    {
        Queue::fake();

        $due = $this->report(['name' => 'Due']);
        $this->report(['name' => 'Wrong day', 'weekday' => 3]);
        $this->report(['name' => 'Switched off', 'is_active' => false]);

        $this->artisan('panel:reports-due', ['--now' => '2026-08-03 07:00'])->assertSuccessful();

        Queue::assertPushed(
            DeliverScheduledReport::class,
            fn (DeliverScheduledReport $job): bool => (new \ReflectionProperty($job, 'reportId'))
                ->getValue($job) === $due->id,
        );

        Queue::assertPushed(DeliverScheduledReport::class, 1);
    }

    public function test_nothing_is_dispatched_on_an_ordinary_minute(): void
    {
        Queue::fake();

        $this->report();

        $this->artisan('panel:reports-due', ['--now' => '2026-08-03 11:23'])->assertSuccessful();

        Queue::assertNothingPushed();
    }

    /* ---------------------------------------------------------- the delivery */

    public function test_it_emails_the_matching_rows_to_the_recipients(): void
    {
        Mail::fake();

        $this->client($this->acme, 'Overdue One', 'O-1');
        $this->client($this->acme, 'Overdue Two', 'O-2');
        $this->client($this->acme, 'Still Active', 'A-1', status: 'active');

        $report = $this->report();

        (new DeliverScheduledReport($report->id))->handle();

        Mail::assertSent(ScheduledReportMail::class, function (ScheduledReportMail $mail): bool {
            return $mail->hasTo('finance@example.com');
        });

        $this->assertStringContainsString('Sent', (string) $report->refresh()->last_result);
    }

    /**
     * THE FILTER IS APPLIED. A report that ignored its own state would send the
     * whole table - useless, and a data-minimisation problem in an email to an
     * external address.
     */
    public function test_the_saved_filter_narrows_what_is_sent(): void
    {
        Mail::fake();

        $this->client($this->acme, 'Overdue One', 'O-1');
        $this->client($this->acme, 'Still Active', 'A-1', status: 'active');

        (new DeliverScheduledReport($this->report()->id))->handle();

        Mail::assertSent(ScheduledReportMail::class, function (ScheduledReportMail $mail): bool {
            $csv = $this->csvOf($mail);

            return str_contains($csv, 'Overdue One') && ! str_contains($csv, 'Still Active');
        });
    }

    /**
     * ANOTHER ORGANISATION'S RECORDS NEVER APPEAR.
     *
     * This is the one that matters most: the output leaves the building. The
     * report runs as its owner, so the panel's own tenant scope applies - but a
     * scope that was applied on the screen and forgotten in a background job is
     * exactly the failure this whole feature could have had.
     */
    public function test_another_organisations_records_are_not_emailed(): void
    {
        Mail::fake();

        $this->client($this->acme, 'Ours Overdue', 'O-1');
        $this->client($this->rival, 'Theirs Overdue', 'R-1');

        (new DeliverScheduledReport($this->report()->id))->handle();

        Mail::assertSent(ScheduledReportMail::class, function (ScheduledReportMail $mail): bool {
            $csv = $this->csvOf($mail);

            return str_contains($csv, 'Ours Overdue') && ! str_contains($csv, 'Theirs Overdue');
        });
    }

    /**
     * A REPORT WITH NO ROWS IS STILL SENT.
     *
     * "No overdue accounts this week" is the answer somebody is waiting for, and
     * silence is indistinguishable from a scheduler that stopped - which is the
     * failure this feature is most likely to have.
     */
    public function test_an_empty_report_is_still_delivered(): void
    {
        Mail::fake();

        (new DeliverScheduledReport($this->report()->id))->handle();

        Mail::assertSent(ScheduledReportMail::class, fn (ScheduledReportMail $mail): bool => $mail->rows === 0);
    }

    /**
     * THE MINUTE IS CLAIMED BEFORE THE WORK.
     *
     * A long export is still running on the next tick, so a report that stamped
     * itself afterwards would be dispatched again while the first was in flight
     * and the recipient would get it twice.
     */
    public function test_the_send_is_recorded_even_when_it_fails(): void
    {
        Mail::fake();

        // A resource that does not exist, so the export throws.
        $report = $this->report(['resource' => 'nonexistent']);

        (new DeliverScheduledReport($report->id))->handle();

        $report->refresh();

        $this->assertNotNull($report->last_sent_at, 'The minute was not claimed.');
        $this->assertStringContainsString('Failed', (string) $report->last_result);

        Mail::assertNothingSent();
    }

    /** And the failure is visible rather than silent. */
    public function test_a_failure_is_recorded_where_somebody_can_see_it(): void
    {
        Mail::fake();

        $report = $this->report(['resource' => 'nonexistent']);

        (new DeliverScheduledReport($report->id))->handle();

        $this->assertStringStartsWith('Failed', (string) $report->refresh()->last_result);
    }

    /** The schedule the screen would describe is the one that runs. */
    public function test_the_description_matches_the_schedule(): void
    {
        $this->assertSame('Every Monday at 07:00', $this->report()->describe());
        $this->assertSame('Every day at 07:00', $this->report(['frequency' => 'daily'])->describe());
    }

    /**
     * Read the CSV back out of a sent mailable.
     *
     * THROUGH THE MAILABLE, NOT THROUGH THE ATTACHMENT'S INTERNALS. Reaching
     * into `Attachment` by reflection tied the test to a private property name
     * that Laravel is free to change - and it did. Asking the mailable to render
     * its own attachment goes through the public path an actual send uses.
     */
    private function csvOf(ScheduledReportMail $mail): string
    {
        $csv = '';

        // `withSymfonyMessage` is not available on an un-sent mailable, so the
        // data callback is invoked the way the mailer would.
        foreach ($mail->attachments() as $attachment) {
            $attachment->attachWith(
                static function (): void {},
                static function (callable $data) use (&$csv): void {
                    $csv .= (string) $data();
                },
            );
        }

        return $csv;
    }
}
