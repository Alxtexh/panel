<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Models\Tenant;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Notification;
use PanelKit\Panel\Notifications\TelegramText;
use PanelKit\Panel\Support\MonitorSampler;
use Tests\TestCase;

/**
 * Roadmap 5.3: monitoring becomes history, and thresholds become alerts.
 *
 * The property under test is the EDGE, not the state: a metric living above
 * its threshold sends one message when it crosses, none while it stays
 * there, and an all-clear when it comes back - a channel that repeats
 * "disk is full" every five minutes is a channel people mute by Thursday.
 */
final class MonitorSamplerTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();

        Notification::fake();

        // A configured Telegram, so alerts have somewhere to try to go -
        // these are the keys Telegram::send() actually reads.
        config([
            'services.telegram.token' => 'test-token',
            'services.telegram.chat_id' => '12345',
        ]);
    }

    private function seedSample(array $row): void
    {
        DB::table('panel_monitor_samples')->insert([
            'cpu_pct' => null, 'memory_pct' => null, 'disk_pct' => null,
            'queue_waiting' => null, 'failed_jobs' => null, 'db_ms' => null,
            ...$row,
            'created_at' => now()->subMinutes(5),
        ]);
    }

    public function test_a_sample_is_stored_and_retrievable_as_history(): void
    {
        $this->artisan('panel:monitor-sample')->assertSuccessful();

        $this->assertSame(1, DB::table('panel_monitor_samples')->count());

        $history = app(MonitorSampler::class)->history();

        $this->assertCount(1, $history);
        $this->assertArrayHasKey('disk_pct', $history[0]);
    }

    public function test_old_samples_are_pruned(): void
    {
        DB::table('panel_monitor_samples')->insert([
            'disk_pct' => 10,
            'created_at' => now()->subDays(8),
        ]);

        app(MonitorSampler::class)->sample();

        $this->assertSame(
            0,
            DB::table('panel_monitor_samples')->where('created_at', '<', now()->subDays(7))->count(),
            'A sample older than the retention survived the prune.',
        );
    }

    public function test_crossing_a_threshold_sends_one_alert(): void
    {
        config(['panel.monitoring.thresholds.failed_jobs' => 1]);

        // Previous sample below the line...
        $this->seedSample(['failed_jobs' => 0]);

        // ...and a failed job appears before the next tick.
        DB::table('failed_jobs')->insert([
            'uuid' => 'test-uuid-1', 'connection' => 'database', 'queue' => 'default',
            'payload' => '{}', 'exception' => 'boom', 'failed_at' => now(),
        ]);

        app(MonitorSampler::class)->sample();

        Notification::assertSentTimes(TelegramText::class, 1);
    }

    public function test_staying_over_the_threshold_stays_quiet(): void
    {
        config(['panel.monitoring.thresholds.failed_jobs' => 1]);

        // Already over the line last tick.
        $this->seedSample(['failed_jobs' => 3]);

        DB::table('failed_jobs')->insert([
            'uuid' => 'test-uuid-2', 'connection' => 'database', 'queue' => 'default',
            'payload' => '{}', 'exception' => 'boom', 'failed_at' => now(),
        ]);

        app(MonitorSampler::class)->sample();

        Notification::assertNothingSent();
    }

    public function test_recovery_sends_the_all_clear(): void
    {
        config(['panel.monitoring.thresholds.failed_jobs' => 1]);

        // Over the line last tick; the failed_jobs table is empty now.
        $this->seedSample(['failed_jobs' => 3]);

        app(MonitorSampler::class)->sample();

        Notification::assertSentTimes(TelegramText::class, 1);
    }

    public function test_the_first_sample_on_a_breached_host_alerts_immediately(): void
    {
        config(['panel.monitoring.thresholds.failed_jobs' => 1]);

        DB::table('failed_jobs')->insert([
            'uuid' => 'test-uuid-3', 'connection' => 'database', 'queue' => 'default',
            'payload' => '{}', 'exception' => 'boom', 'failed_at' => now(),
        ]);

        // No previous sample at all: the very first one must not wait for a
        // second breach that may be weeks of silence away.
        app(MonitorSampler::class)->sample();

        Notification::assertSentTimes(TelegramText::class, 1);
    }

    public function test_the_monitoring_page_carries_history_and_thresholds(): void
    {
        $tenant = Tenant::create(['name' => 'Acme', 'slug' => 'acme-monitor']);
        $user = User::factory()->withAbilities(['view_operations'])
            ->create(['tenant_id' => $tenant->id, 'email_verified_at' => now()]);

        $this->seedSample(['disk_pct' => 38]);

        $props = $this->actingAs($user)->get('/operations/monitoring')
            ->assertOk()->viewData('page')['props'];

        $this->assertCount(1, $props['history']);
        $this->assertArrayHasKey('disk_pct', $props['thresholds']);
    }
}
