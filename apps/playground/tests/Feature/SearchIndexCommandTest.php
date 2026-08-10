<?php

declare(strict_types=1);

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use PanelKit\Panel\Commands\SearchIndexCommand;
use PanelKit\Panel\PanelManager;
use ReflectionMethod;
use Tests\TestCase;

/**
 * The indexes this panel's search would use, written out for the engine.
 *
 * WHAT IT IS FOR. Search matches each word two ways: `term%`, which a btree
 * serves, and `% term%`, which nothing does - a sequential scan that is fine
 * over thousands of rows and the first thing to fall over at millions, once
 * per searchable resource per keystroke. Postgres and MySQL both ship an index
 * that serves the unanchored half, so the answer is DDL against the database
 * already running rather than a search cluster to operate.
 *
 * THE DRIVER BRANCHES ARE ASSERTED DIRECTLY, because this suite runs on SQLite
 * and the interesting output is the two it cannot produce. Testing only the
 * SQLite path would assert the one branch that emits nothing.
 */
final class SearchIndexCommandTest extends TestCase
{
    use RefreshDatabase;

    /** @return list<string> */
    private function statementsFor(string $driver): array
    {
        $command = app(SearchIndexCommand::class);

        $method = new ReflectionMethod($command, 'statements');

        return $method->invoke($command, app(PanelManager::class), $driver);
    }

    /**
     * ONE GIN INDEX PER COLUMN on Postgres: a trigram index is per-expression
     * and the search ORs its columns, so a composite would serve a query
     * nobody writes.
     */
    public function test_postgres_gets_the_extension_and_a_trigram_index_per_column(): void
    {
        $sql = $this->statementsFor('pgsql');

        $this->assertContains('CREATE EXTENSION IF NOT EXISTS pg_trgm', $sql);

        $clientName = array_values(array_filter(
            $sql,
            static fn (string $s): bool => str_contains($s, 'ON clients') && str_contains($s, '(name gin_trgm_ops)'),
        ));

        $this->assertNotEmpty($clientName, 'The clients name column is searchable and must get a trigram index.');

        // CONCURRENTLY, so building it does not hold a write lock on a table
        // somebody is using - which is the whole reason this is not automatic.
        $this->assertStringContainsString('CREATE INDEX CONCURRENTLY', $clientName[0]);
        $this->assertStringContainsString('IF NOT EXISTS', $clientName[0]);
    }

    /**
     * THE OPPOSITE SHAPE ON MYSQL, and correct: a FULLTEXT index is defined
     * across the columns a MATCH names together, so one per column could not
     * serve a multi-column MATCH at all.
     */
    public function test_mysql_gets_one_fulltext_index_covering_the_columns(): void
    {
        $sql = $this->statementsFor('mysql');

        $clients = array_values(array_filter(
            $sql,
            static fn (string $s): bool => str_contains($s, 'ALTER TABLE clients'),
        ));

        $this->assertCount(1, $clients, 'MySQL takes one FULLTEXT index per table, not one per column.');
        $this->assertStringContainsString('ADD FULLTEXT INDEX', $clients[0]);
        $this->assertStringContainsString('name', $clients[0]);
    }

    /** Every emitted statement is safe to run twice. */
    public function test_postgres_statements_are_all_repeatable(): void
    {
        foreach ($this->statementsFor('pgsql') as $sql) {
            $this->assertStringContainsString('IF NOT EXISTS', $sql, "Not re-runnable: {$sql}");
        }
    }

    /**
     * SQLITE IS TOLD, NOT GUESSED AT. FTS5 exists but needs a shadow table
     * rather than an index, which is a schema decision a command should not
     * make on somebody's behalf.
     */
    public function test_sqlite_says_what_it_cannot_do(): void
    {
        $this->artisan('panel:search-index')
            ->expectsOutputToContain('sqlite')
            ->assertExitCode(0);
    }
}
