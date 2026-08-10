<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Support\PanelSettings;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

/**
 * Values an operator changes without a deploy, and the trail behind them.
 *
 * A SETTING IS A DEPLOY SOMEBODY DID NOT DO, which is the point and also the
 * risk: retention windows, thresholds and toggles get changed at three in the
 * morning by whoever is on call. So every `put()` writes a HISTORY ROW in the
 * same call rather than leaving it to callers - a settings screen that opts
 * into history and a caller that forgets to record it is the gap this closes.
 *
 * A MISSING TABLE READS AS "NOTHING CONFIGURED". Settings are consulted during
 * boot and on ordinary requests, so a consumer who has not migrated must get
 * defaults and a working panel rather than an exception on every page.
 *
 * READS ARE MEMOISED PER PROCESS, which is why `PanelManager::flushMemoization`
 * exists and why this suite calls it between tests. On a long-lived worker the
 * same memo would answer for the life of the process.
 */
final class PanelSettingsTest extends TestCase
{
    use RefreshDatabase;

    private function settings(): PanelSettings
    {
        return app(PanelSettings::class);
    }

    public function test_a_value_survives_a_round_trip(): void
    {
        $this->settings()->put('trash.retention_days', 30);

        $this->assertSame(30, app(PanelSettings::class)->get('trash.retention_days'));
    }

    public function test_an_absent_key_returns_the_default(): void
    {
        $this->assertSame('fallback', $this->settings()->get('never.set', 'fallback'));
        $this->assertNull($this->settings()->get('never.set'));
    }

    /**
     * TYPES SURVIVE, because a setting read back as a string is a setting that
     * silently stops matching a strict comparison somewhere.
     */
    public function test_types_survive_the_round_trip(): void
    {
        $settings = $this->settings();

        $settings->put('a.bool', true);
        $settings->put('a.int', 42);
        $settings->put('a.list', ['x', 'y']);
        $settings->put('a.map', ['k' => 'v']);

        $fresh = app(PanelSettings::class);

        $this->assertTrue($fresh->get('a.bool'));
        $this->assertSame(42, $fresh->get('a.int'));
        $this->assertSame(['x', 'y'], $fresh->get('a.list'));
        $this->assertSame(['k' => 'v'], $fresh->get('a.map'));
    }

    public function test_writing_twice_updates_rather_than_duplicating(): void
    {
        $this->settings()->put('a.key', 'first');
        app(PanelSettings::class)->put('a.key', 'second');

        $this->assertSame('second', app(PanelSettings::class)->get('a.key'));
        $this->assertSame(1, \DB::table('panel_settings')->where('key', 'a.key')->count());
    }

    /**
     * EVERY WRITE LEAVES A HISTORY ROW, in the same call.
     *
     * The question a settings trail answers is "who lowered the retention
     * window before those records were purged", and it can only answer it if
     * recording was never optional.
     */
    public function test_every_write_records_history(): void
    {
        $this->settings()->put('a.key', 'first', by: 'grace@example.test');
        app(PanelSettings::class)->put('a.key', 'second', by: 'grace@example.test');

        $history = app(PanelSettings::class)->history('a.key');

        $this->assertCount(2, $history, 'A change was made with no entry in the trail.');
    }

    public function test_provenance_reports_who_changed_it_and_when(): void
    {
        $this->settings()->put('a.key', 'value', by: 'grace@example.test');

        $provenance = app(PanelSettings::class)->provenance('a.key');

        $this->assertSame('grace@example.test', $provenance['by'] ?? null);
        $this->assertNotNull($provenance['at'] ?? null);
    }

    public function test_provenance_of_an_unset_key_is_null(): void
    {
        $this->assertNull($this->settings()->provenance('never.set'));
    }

    public function test_forgetting_removes_the_value(): void
    {
        $this->settings()->put('a.key', 'value');

        app(PanelSettings::class)->forget('a.key');

        $this->assertNull(app(PanelSettings::class)->get('a.key'));
    }

    public function test_many_values_can_be_written_at_once(): void
    {
        $this->settings()->putMany(['one' => 1, 'two' => 2], by: 'grace@example.test');

        $fresh = app(PanelSettings::class);

        $this->assertSame(1, $fresh->get('one'));
        $this->assertSame(2, $fresh->get('two'));
    }

    /**
     * A MISSING TABLE IS NOT AN EXCEPTION.
     *
     * Settings are read during boot and on ordinary requests. A consumer who
     * has not run the migration must get defaults and a working panel, not a
     * 500 on every page - which is also what makes the package installable
     * before it is migrated.
     */
    public function test_a_missing_table_reads_as_nothing_configured(): void
    {
        Schema::drop('panel_settings');

        PanelManager::flushMemoization();

        $this->assertSame('fallback', app(PanelSettings::class)->get('anything', 'fallback'));
        $this->assertSame([], app(PanelSettings::class)->all());
    }
}
