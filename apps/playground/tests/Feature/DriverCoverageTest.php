<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use PanelKit\Panel\CustomFields\CustomField;
use PanelKit\Panel\CustomFields\CustomFieldFactory;
use PanelKit\Panel\Widgets\Bucket;
use Tests\TestCase;

/**
 * SQLite, MySQL/MariaDB and Postgres are all first-class for panel data.
 *
 * That sentence is the support matrix (see DEPLOYMENT.md), and this test is
 * what stops it rotting: a driver-specific feature that ships handling only
 * the database its author happened to develop on does not fail loudly - it
 * produces a column that silently reads nothing, or a chart that is wrong
 * without being broken, on whichever driver was forgotten. It has already
 * happened once: custom fields shipped excluding Postgres, on reasoning
 * about one installation's connections rather than about the framework.
 *
 * THE DRIVER IS SWAPPED IN CONFIG, NOT CONNECTED. Building SQL text asks
 * the connection for its driver name, which reads config - no server has
 * to be running. That is what lets one suite cover all three arms on any
 * machine.
 */
final class DriverCoverageTest extends TestCase
{
    use RefreshDatabase;

    /** @return array<string, mixed> */
    private function withDriver(string $connection, callable $callback): mixed
    {
        $original = config('database.default');

        try {
            config(['database.default' => $connection]);

            return $callback();
        } finally {
            config(['database.default' => $original]);

            // NEVER the suite's own connection: purging the in-memory sqlite
            // database destroys every table the rest of the suite stands on.
            if ($connection !== $original) {
                DB::purge($connection);
            }
        }
    }

    /** @return list<array{connection: string, driver: string}> */
    private function configuredDrivers(): array
    {
        $out = [];

        foreach ((array) config('database.connections') as $name => $config) {
            $driver = (string) ($config['driver'] ?? '');

            if (in_array($driver, ['sqlite', 'mysql', 'mariadb', 'pgsql'], true)) {
                $out[$driver] ??= ['connection' => (string) $name, 'driver' => $driver];
            }
        }

        return array_values($out);
    }

    /**
     * Every first-class driver must be CONFIGURED in the reference app -
     * otherwise the per-driver assertions below silently skip and this
     * guard guards nothing.
     */
    public function test_all_three_first_class_drivers_are_configured(): void
    {
        $drivers = array_column($this->configuredDrivers(), 'driver');

        foreach (['sqlite', 'pgsql'] as $required) {
            $this->assertContains($required, $drivers);
        }

        $this->assertTrue(
            in_array('mysql', $drivers, true) || in_array('mariadb', $drivers, true),
            'Neither a mysql nor a mariadb connection is configured.',
        );
    }

    public function test_custom_field_extraction_has_an_arm_for_every_driver(): void
    {
        $definition = new CustomField([
            'resource' => 'clients', 'key' => 'fibre_node', 'type' => 'text',
            'label' => 'Fibre node', 'required' => false, 'sort' => 0,
        ]);

        $expected = [
            'sqlite' => "json_extract(clients.custom, '$.fibre_node') as custom_fibre_node",
            'mysql' => "JSON_UNQUOTE(JSON_EXTRACT(clients.custom, '$.fibre_node')) as custom_fibre_node",
            'mariadb' => "JSON_UNQUOTE(JSON_EXTRACT(clients.custom, '$.fibre_node')) as custom_fibre_node",
            'pgsql' => "clients.custom->>'fibre_node' as custom_fibre_node",
        ];

        foreach ($this->configuredDrivers() as ['connection' => $connection, 'driver' => $driver]) {
            $sql = $this->withDriver(
                $connection,
                static fn (): string => (string) CustomFieldFactory::selectExpression($definition)->getValue(
                    DB::connection($connection)->getQueryGrammar(),
                ),
            );

            $this->assertSame(
                $expected[$driver],
                $sql,
                "Custom field extraction is wrong or missing on the [{$driver}] driver.",
            );
        }
    }

    /** Bucket already had all the arms; pinned so it keeps them. */
    public function test_time_series_bucketing_has_an_arm_for_every_driver(): void
    {
        foreach ($this->configuredDrivers() as ['driver' => $driver]) {
            $sql = Bucket::Day->expression($driver, 'created_at');

            $this->assertNotSame('', $sql, "Bucketing produced nothing on [{$driver}].");
            $this->assertStringContainsString('created_at', $sql);
        }
    }
}
