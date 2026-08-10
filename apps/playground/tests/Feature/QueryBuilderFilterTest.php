<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Alerts\Announcement;
use Alxtexh\Panel\Tables\Filters\BooleanFilter;
use Alxtexh\Panel\Tables\Filters\DateRangeFilter;
use Alxtexh\Panel\Tables\Filters\MultiSelectFilter;
use Alxtexh\Panel\Tables\Filters\QueryBuilderFilter;
use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tables\Filters\TrashedFilter;
use Alxtexh\Panel\Tables\ListQuery;
use Tests\TestCase;

/**
 * The nested and/or query builder - the last Filament gap, and the only one
 * that could widen what an operator can read.
 *
 * WHAT IS WORTH TESTING HERE IS THE REFUSALS. A builder that composes a query
 * correctly is the easy half; the half that matters is what it does with a
 * rule naming a column the resource never exposed, with an `or` at the top of
 * a tenant-scoped query, and with a tree a thousand groups deep. Each of those
 * has a wrong answer that still returns rows.
 */
final class QueryBuilderFilterTest extends TestCase
{
    private function builder(): QueryBuilderFilter
    {
        $filter = QueryBuilderFilter::make('advanced');

        /*
         * WIRED THROUGH `ListQuery::filters()`, not by hand, because that is
         * how an application gets one - and a test that called `over()`
         * directly would pass while the automatic wiring was broken.
         */
        ListQuery::for(Announcement::class)->filters([
            SelectFilter::make('status')->options(['active', 'suspended']),
            MultiSelectFilter::make('plan')->options(['gold', 'silver']),
            BooleanFilter::make('verified'),
            DateRangeFilter::make('created_at'),
            TrashedFilter::make('trashed'),
            $filter,
        ]);

        return $filter;
    }

    /** @return array<string, mixed> */
    private function schema(): array
    {
        return $this->builder()->toArray();
    }

    public function test_it_offers_every_filterable_field(): void
    {
        $fields = $this->schema()['fields'];

        $this->assertSame(
            ['status', 'plan', 'verified', 'created_at'],
            array_keys($fields),
        );
    }

    /**
     * IT NEVER OFFERS ITSELF. A builder that listed itself as a target is a
     * tree that can contain itself, which is an infinite recursion in the
     * translator rather than a query.
     */
    public function test_it_does_not_offer_itself(): void
    {
        $this->assertArrayNotHasKey('advanced', $this->schema()['fields']);
    }

    /**
     * AND IT NEVER OFFERS THE TRASHED FILTER.
     *
     * `TrashedFilter` rewrites the query's soft-delete scope rather than adding
     * a predicate, so "deleted is true OR status is active" has no meaning the
     * translator could honour - it would silently widen the result set to
     * include every deleted row, which is the exact shape of bug this whole
     * file exists to prevent.
     */
    public function test_it_does_not_offer_the_trashed_filter(): void
    {
        $this->assertArrayNotHasKey('trashed', $this->schema()['fields']);
    }

    /**
     * THE CENTRAL SECURITY PROPERTY. A rule naming a column the resource never
     * filtered on is REFUSED, and the refusal names it.
     *
     * Silently dropping it would turn "status is active AND secret is x" into
     * "status is active" - a WIDER result set than the operator asked for,
     * returned without comment.
     */
    public function test_a_rule_naming_an_unfilterable_column_is_refused(): void
    {
        $errors = $this->builder()->errorsIn([
            'logic' => 'and',
            'rules' => [['field' => 'password_hash', 'operator' => 'is', 'value' => 'x']],
        ]);

        $this->assertNotEmpty($errors);
        $this->assertStringContainsString('password_hash', $errors[0]);
    }

    /** And `normalise()` refuses the whole tree rather than applying the sound part of it. */
    public function test_an_invalid_tree_applies_nothing_at_all(): void
    {
        $value = $this->builder()->normalise([
            'logic' => 'and',
            'rules' => [
                ['field' => 'status', 'operator' => 'is', 'value' => 'active'],
                ['field' => 'password_hash', 'operator' => 'is', 'value' => 'x'],
            ],
        ]);

        $this->assertNull(
            $value,
            'A tree with one bad rule applied its good rules - so the query ran with fewer '
            .'conditions than the operator wrote, and returned more rows than they asked for.',
        );
    }

    /**
     * AN OPERATOR THE FIELD TYPE DOES NOT ALLOW IS REFUSED.
     *
     * `between` against a select is not a query anybody meant, and permitting
     * arbitrary operators invites a `where` no index can serve across the
     * whole table.
     */
    public function test_an_operator_the_field_does_not_allow_is_refused(): void
    {
        $errors = $this->builder()->errorsIn([
            'logic' => 'and',
            'rules' => [['field' => 'status', 'operator' => 'between', 'value' => ['a', 'b']]],
        ]);

        $this->assertNotEmpty($errors);
        $this->assertStringContainsString('between', $errors[0]);
    }

    public function test_unknown_logic_is_refused(): void
    {
        $errors = $this->builder()->errorsIn(['logic' => 'xor', 'rules' => []]);

        $this->assertNotEmpty($errors);
    }

    /**
     * DEPTH IS CAPPED, AND THE CAP REFUSES RATHER THAN TRUNCATING.
     *
     * The tree arrives from the client. A thousand-deep nest is a stack
     * overflow in the recursive translator and a planner denial-of-service in
     * the database; truncating it would run a query the operator did not write.
     */
    public function test_a_tree_nested_too_deep_is_refused(): void
    {
        $tree = ['logic' => 'and', 'rules' => [['field' => 'status', 'operator' => 'is', 'value' => 'active']]];

        for ($i = 0; $i <= QueryBuilderFilter::MAX_DEPTH + 1; $i++) {
            $tree = ['logic' => 'and', 'rules' => [$tree]];
        }

        $this->assertNotEmpty($this->builder()->errorsIn($tree));
    }

    public function test_a_tree_with_too_many_rules_is_refused(): void
    {
        $rules = array_fill(
            0,
            QueryBuilderFilter::MAX_RULES + 1,
            ['field' => 'status', 'operator' => 'is', 'value' => 'active'],
        );

        $this->assertNotEmpty($this->builder()->errorsIn(['logic' => 'and', 'rules' => $rules]));
    }

    /** An empty builder is not a filter, so it must not narrow anything. */
    public function test_an_empty_tree_applies_nothing(): void
    {
        $this->assertNull($this->builder()->normalise(['logic' => 'and', 'rules' => []]));
        $this->assertNull($this->builder()->normalise([]));
        $this->assertNull($this->builder()->normalise('not json'));
    }

    public function test_a_sound_tree_survives_normalisation(): void
    {
        $value = $this->builder()->normalise([
            'logic' => 'or',
            'rules' => [
                ['field' => 'status', 'operator' => 'is', 'value' => 'active'],
                [
                    'logic' => 'and',
                    'rules' => [['field' => 'plan', 'operator' => 'is_any_of', 'value' => ['gold']]],
                ],
            ],
        ]);

        $this->assertIsArray($value);
        $this->assertSame('or', $value['logic']);
        $this->assertCount(2, $value['rules']);
    }

    /**
     * THE WHOLE TREE GOES INSIDE ONE NESTED `where`, and this is the assertion
     * that stops a cross-tenant read.
     *
     * Without the outer closure, an `or` at the top level ORs itself against
     * every predicate already on the query - including the tenant scope. The
     * result is a query that reads another organisation's rows and looks like
     * a working feature.
     */
    public function test_an_or_tree_cannot_escape_the_scope_already_on_the_query(): void
    {
        $filter = $this->builder();

        // The base query builder, which is what `ListQuery` hands filters.
        $query = Announcement::query()->where('id', '>', 0)->toBase();

        $before = $query->wheres;

        $filter->apply($query, [
            'logic' => 'or',
            'rules' => [
                ['field' => 'status', 'operator' => 'is', 'value' => 'active'],
                ['field' => 'verified', 'operator' => 'is', 'value' => true],
            ],
        ]);

        $wheres = $query->wheres;

        $this->assertCount(count($before) + 1, $wheres, 'The tree added more than one top-level clause.');

        $added = end($wheres);

        $this->assertSame('Nested', $added['type'], 'The tree was not wrapped, so its OR escapes the existing scope.');
        $this->assertSame('and', $added['boolean'], 'The tree was ANDed onto the query, not ORed into it.');
    }
}
