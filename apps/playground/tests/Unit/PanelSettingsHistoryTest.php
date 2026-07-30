<?php

declare(strict_types=1);

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Support\PanelSettings;
use Tests\TestCase;

/**
 * Every value a key has held - roadmap 7.2. `PanelSettings` itself, not any
 * particular screen: the timeline is a property of the storage, not of
 * Backup settings being the first thing to show it.
 */
final class PanelSettingsHistoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_a_write_appends_a_history_row(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('example', ['a' => 1], 'Asha');

        $history = $settings->history('example');

        $this->assertCount(1, $history);
        $this->assertSame(['a' => 1], $history[0]['value']);
        $this->assertSame('Asha', $history[0]['by']);
    }

    public function test_history_is_newest_first_and_includes_the_current_value(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('example', ['step' => 1]);
        $settings->put('example', ['step' => 2]);
        $settings->put('example', ['step' => 3]);

        $history = $settings->history('example');

        $this->assertSame(
            [3, 2, 1],
            array_column(array_column($history, 'value'), 'step'),
        );
    }

    public function test_history_is_scoped_to_its_own_key(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('a', ['x' => 1]);
        $settings->put('b', ['x' => 2]);

        $this->assertCount(1, $settings->history('a'));
        $this->assertCount(1, $settings->history('b'));
    }

    public function test_a_specific_entry_can_be_read_back_by_id(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('example', ['step' => 1], 'Asha');
        $settings->put('example', ['step' => 2], 'Juma');

        $first = $settings->history('example')[1];

        $entry = $settings->historyEntry('example', $first['id']);

        $this->assertSame(['step' => 1], $entry['value']);
        $this->assertSame('Asha', $entry['by']);
    }

    public function test_an_unknown_entry_id_reads_as_absent(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('example', ['step' => 1]);

        $this->assertNull($settings->historyEntry('example', 999999));
    }

    /** Bounded, not indefinite - see the class's own note on why. */
    public function test_history_is_pruned_to_the_cap_keeping_the_newest(): void
    {
        $settings = app(PanelSettings::class);

        for ($i = 1; $i <= 25; $i++) {
            $settings->put('example', ['step' => $i]);
        }

        $history = $settings->history('example', 100);

        $this->assertCount(20, $history);
        $this->assertSame(25, $history[0]['value']['step']);
        $this->assertSame(6, $history[19]['value']['step']);
    }

    public function test_provenance_still_reports_only_the_current_value(): void
    {
        $settings = app(PanelSettings::class);

        $settings->put('example', ['step' => 1], 'Asha');
        $settings->put('example', ['step' => 2], 'Juma');

        $provenance = $settings->provenance('example');

        $this->assertSame('Juma', $provenance['by']);
    }
}
