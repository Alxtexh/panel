<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Alxtexh\Panel\PanelManager;
use Alxtexh\Panel\Resources\Resource;

/**
 * The indexes this panel's search needs, written out for your engine.
 *
 * WHY THIS EXISTS. Search matches each word two ways: `term%` at the start of
 * a value, which a btree index serves, and `% term%` at the start of any later
 * word, which nothing does. That second half is a sequential scan, and it is
 * the deliberate price of finding somebody by their surname - fine over
 * thousands of rows, and the first thing to fall over at millions, once per
 * searchable resource per keystroke.
 *
 * NO EXTERNAL SERVICE. Postgres and MySQL both ship an index that serves an
 * unanchored match - `pg_trgm` GIN and `FULLTEXT` respectively - so the fix is
 * DDL against the database already in use rather than a search cluster to run,
 * secure and pay for.
 *
 * IT PRINTS BY DEFAULT AND THAT IS THE POINT. Creating an index on a large
 * table takes a lock and a long time; which tables are large, when the quiet
 * hour is, and whether to build concurrently are decisions belonging to
 * whoever runs the installation. `--apply` exists for a laptop and a staging
 * database, and uses CONCURRENTLY on Postgres so it does not hold a write lock
 * on the table it is indexing.
 *
 * MEASURE FIRST. `IMPROVEMENT_PLAN.md` puts this behind row counts rather than
 * opinions: a panel over ten thousand rows does not need any of this, and an
 * index nobody needed is write cost and disk for nothing.
 */
final class SearchIndexCommand extends Command
{
    protected $signature = 'panel:search-index {--apply : Run the statements instead of printing them}';

    protected $description = 'The trigram or fulltext indexes this panel\'s search would use, for the current engine';

    public function handle(PanelManager $panels): int
    {
        $driver = DB::connection()->getDriverName();

        if (! in_array($driver, ['pgsql', 'mysql', 'mariadb'], true) ) {
            $this->components->warn(
                "No unanchored-match index exists for [{$driver}]. Postgres (pg_trgm) and MySQL "
                .'(FULLTEXT) do; SQLite has FTS5 but it needs a shadow table rather than an index, '
                .'which is a schema decision this command will not make for you.'
            );

            return self::SUCCESS;
        }

        $statements = $this->statements($panels, $driver);

        if ($statements === []) {
            $this->components->info('No resource declares a searchable column, so there is nothing to index.');

            return self::SUCCESS;
        }

        if (! $this->option('apply')) {
            $this->components->info(
                count($statements).' statement(s). Review them, pick the tables that are actually '
                .'big, and run them in a quiet hour - or re-run with --apply on a laptop.'
            );
            $this->newLine();

            foreach ($statements as $sql) {
                $this->line($sql.';');
            }

            return self::SUCCESS;
        }

        foreach ($statements as $sql) {
            $this->components->task($sql, static function () use ($sql): void {
                /*
                 * NO TRANSACTION. Postgres refuses CREATE INDEX CONCURRENTLY
                 * inside one, and wrapping the others would hold a lock for the
                 * whole run rather than one index at a time. Each statement is
                 * independently safe to retry - every one is IF NOT EXISTS.
                 */
                DB::statement($sql);
            });
        }

        return self::SUCCESS;
    }

    /** @return list<string> */
    private function statements(PanelManager $panels, string $driver): array
    {
        $byTable = [];

        foreach ($panels->resources() as $class) {
            /** @var class-string<Resource> $class */
            $table = (new ($class::model()))->getTable();

            foreach ($class::definition()->searchableColumns() as $column) {
                // Columns arrive qualified (`clients.name`) because that is what
                // the query builder needs; the index names the column alone.
                $bare = str_contains($column, '.') ? substr($column, strrpos($column, '.') + 1) : $column;

                $byTable[$table][$bare] = true;
            }
        }

        $out = [];

        foreach ($byTable as $table => $columns) {
            $names = array_keys($columns);
            sort($names);

            $out = [...$out, ...match ($driver) {
                'pgsql' => $this->postgres($table, $names),
                default => [$this->mysql($table, $names)],
            }];
        }

        return $out;
    }

    /**
     * ONE GIN INDEX PER COLUMN, because a trigram index is per-expression and
     * the search ORs the columns rather than concatenating them - a composite
     * would serve a query nobody writes.
     *
     * @param  list<string>  $columns
     * @return list<string>
     */
    private function postgres(string $table, array $columns): array
    {
        $out = ['CREATE EXTENSION IF NOT EXISTS pg_trgm'];

        foreach ($columns as $column) {
            $out[] = sprintf(
                'CREATE INDEX CONCURRENTLY IF NOT EXISTS %s ON %s USING gin (%s gin_trgm_ops)',
                $this->indexName($table, $column),
                $table,
                $column,
            );
        }

        return $out;
    }

    /**
     * ONE FULLTEXT INDEX OVER ALL THE COLUMNS, which is the opposite shape from
     * Postgres and correct for MySQL: a FULLTEXT index is defined across the
     * columns a MATCH names together, and one per column could not serve a
     * multi-column MATCH at all.
     *
     * @param  list<string>  $columns
     */
    private function mysql(string $table, array $columns): string
    {
        return sprintf(
            'ALTER TABLE %s ADD FULLTEXT INDEX %s (%s)',
            $table,
            $this->indexName($table, 'search'),
            implode(', ', $columns),
        );
    }

    /**
     * Identifiers cap at 63 characters on Postgres and 64 on MySQL, and a
     * silently truncated name is two indexes that collide.
     */
    private function indexName(string $table, string $column): string
    {
        $name = "{$table}_{$column}_search_idx";

        return strlen($name) <= 63 ? $name : substr($name, 0, 45).'_'.substr(md5($name), 0, 8).'_idx';
    }
}
