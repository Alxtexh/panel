<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tables;

use Illuminate\Database\Query\Builder;
use InvalidArgumentException;

/**
 * Nested AND/OR conditions, composed in the UI and compiled on the SERVER.
 *
 * THE CLIENT SENDS A TREE, NEVER AN EXPRESSION. That distinction is the whole
 * security design, and it is easy to get wrong in a way that looks identical
 * from the outside. A "query builder" that accepts `status = 'active' AND ...`
 * and puts it anywhere near a query has handed the client SQL. What arrives here
 * is data: `{field, operator, value}` leaves joined by `and`/`or`, where every
 * field is checked against the table's declared filters and every operator
 * against a fixed list. Nothing in the payload becomes syntax.
 *
 * THE FIELD ALLOWLIST IS THE DECLARED FILTERS, not the columns. A column is
 * merely something the table displays; a filter is something the resource
 * decided may be queried on, and it is the one that has an index behind it. The
 * difference matters at scale: allowing any column means a condition on an
 * unindexed one scans the table, which is a denial of service somebody can type.
 *
 * DEPTH IS BOUNDED. A tree nested three hundred levels deep is a stack overflow
 * during compilation, before any query runs - cheap to send and expensive to
 * receive, which is the shape of an attack rather than a mistake.
 */
final class QueryConditions
{
    /** How deeply groups may nest. Four is more than anybody composes by hand. */
    public const MAX_DEPTH = 4;

    /** Total leaves, across the whole tree. */
    public const MAX_CONDITIONS = 50;

    /**
     * Operators, and how many values each takes.
     *
     * A FIXED LIST, and the values are bound - `like` is here because a prefix
     * search is legitimate, and the pattern is built below rather than accepted,
     * so a caller cannot send `%foo%` and turn every search into a full scan.
     */
    private const OPERATORS = [
        'equals' => 1,
        'not_equals' => 1,
        'contains' => 1,
        'starts_with' => 1,
        'greater_than' => 1,
        'less_than' => 1,
        'between' => 2,
        'is_empty' => 0,
        'is_not_empty' => 0,
    ];

    /**
     * Declared filter KEY => the database COLUMN behind it.
     *
     * THE TWO ARE NOT THE SAME, and conflating them is a bug that only shows up
     * on filters whose key differs from their column. `planType` is what the
     * client sends and what the schema advertises; `plan_type` is what a WHERE
     * needs. Using the key as a column produces "no such column" on exactly the
     * filters that were renamed for the UI's benefit.
     *
     * This is the same split `sortable()` already makes for ORDER BY, and for
     * the same reason: the client names things, the database has columns.
     *
     * @var array<string, string>
     */
    private readonly array $fields;

    /** @param array<string, string> $fields key => qualified column */
    public function __construct(array $fields)
    {
        $this->fields = $fields;
    }

    /**
     * Build one from a table's declared filters.
     *
     * The filters, not the columns - see the class docblock.
     */
    public static function forTable(Table $table): self
    {
        $fields = [];

        foreach ($table->getFilters() as $filter) {
            $fields[$filter->key] = $filter->resolvedColumn();
        }

        return new self($fields);
    }

    /**
     * Apply a condition tree to a query.
     *
     * @param  array<string, mixed>  $tree
     */
    public function apply(Builder $query, array $tree): void
    {
        $this->assertSize($tree);

        $this->compile($query, $tree, 0);
    }

    /**
     * @param  array<string, mixed>  $group
     */
    private function compile(Builder $query, array $group, int $depth): void
    {
        if ($depth > self::MAX_DEPTH) {
            throw new InvalidArgumentException('Those conditions are nested too deeply.');
        }

        $conjunction = ($group['conjunction'] ?? 'and') === 'or' ? 'or' : 'and';
        $children = $group['children'] ?? [];

        if (! is_array($children)) {
            throw new InvalidArgumentException('A condition group must contain a list.');
        }

        foreach ($children as $child) {
            if (! is_array($child)) {
                continue;
            }

            /*
             * A NESTED GROUP BECOMES A NESTED CLOSURE, which is what makes
             * precedence correct. Flattening `a AND (b OR c)` into a sequence
             * of wheres produces `a AND b OR c` - a different question, silently
             * answered.
             */
            if (($child['type'] ?? 'condition') === 'group') {
                $query->where(function (Builder $nested) use ($child, $depth): void {
                    $this->compile($nested, $child, $depth + 1);
                }, null, null, $conjunction);

                continue;
            }

            $this->applyCondition($query, $child, $conjunction);
        }
    }

    /**
     * @param  array<string, mixed>  $condition
     */
    private function applyCondition(Builder $query, array $condition, string $conjunction): void
    {
        $field = (string) ($condition['field'] ?? '');
        $operator = (string) ($condition['operator'] ?? '');

        if (! array_key_exists($field, $this->fields)) {
            throw new InvalidArgumentException("[{$field}] cannot be filtered on.");
        }

        // From here on the COLUMN is used, never the key the client sent.
        $column = $this->fields[$field];

        if (! array_key_exists($operator, self::OPERATORS)) {
            throw new InvalidArgumentException("[{$operator}] is not a known operator.");
        }

        $values = array_values((array) ($condition['value'] ?? []));

        if (count($values) < self::OPERATORS[$operator]) {
            throw new InvalidArgumentException("[{$operator}] needs ".self::OPERATORS[$operator].' value(s).');
        }

        $boolean = $conjunction === 'or' ? 'or' : 'and';

        match ($operator) {
            'equals' => $query->where($column, '=', $values[0], $boolean),
            'not_equals' => $query->where($column, '!=', $values[0], $boolean),
            // The pattern is BUILT, never accepted: a caller sending `%x%`
            // would otherwise turn a prefix seek into a full scan.
            'contains' => $query->where($column, 'like', '%'.$this->escapeLike((string) $values[0]).'%', $boolean),
            'starts_with' => $query->where($column, 'like', $this->escapeLike((string) $values[0]).'%', $boolean),
            'greater_than' => $query->where($column, '>', $values[0], $boolean),
            'less_than' => $query->where($column, '<', $values[0], $boolean),
            'between' => $query->whereBetween($column, [$values[0], $values[1]], $boolean),
            'is_empty' => $query->whereNull($column, $boolean),
            'is_not_empty' => $query->whereNotNull($column, $boolean),
        };
    }

    /**
     * `%`, `_` and `\` are LIKE syntax, not text.
     *
     * Without this a search for "50%" matches everything, which reads as a
     * broken filter rather than as an escaping bug.
     */
    private function escapeLike(string $value): string
    {
        return str_replace(['\\', '%', '_'], ['\\\\', '\\%', '\\_'], $value);
    }

    /**
     * Count the leaves before compiling any of them.
     *
     * Checked up front rather than during the walk, so a tree that is too large
     * is refused whole instead of applying the first fifty conditions and then
     * throwing - which would leave the caller with a partial query and an error.
     *
     * @param  array<string, mixed>  $group
     */
    private function assertSize(array $group, int $depth = 0): int
    {
        if ($depth > self::MAX_DEPTH) {
            throw new InvalidArgumentException('Those conditions are nested too deeply.');
        }

        $count = 0;

        foreach ($group['children'] ?? [] as $child) {
            if (! is_array($child)) {
                continue;
            }

            $count += ($child['type'] ?? 'condition') === 'group'
                ? $this->assertSize($child, $depth + 1)
                : 1;
        }

        if ($count > self::MAX_CONDITIONS) {
            throw new InvalidArgumentException('That is more than '.self::MAX_CONDITIONS.' conditions.');
        }

        return $count;
    }

    /**
     * What the client may offer, so the UI never invents an operator.
     *
     * @return array<string, mixed>
     */
    public function toSchema(): array
    {
        return [
            // KEYS, not columns: the client names filters, and the column
            // behind one is not its business.
            'fields' => array_keys($this->fields),
            'operators' => array_map(
                static fn (int $arity): array => ['values' => $arity],
                self::OPERATORS,
            ),
            'maxDepth' => self::MAX_DEPTH,
            'maxConditions' => self::MAX_CONDITIONS,
        ];
    }
}
