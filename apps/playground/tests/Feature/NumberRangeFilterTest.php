<?php

declare(strict_types=1);

namespace Tests\Feature;

use Alxtexh\Panel\Tables\Filters\NumberRangeFilter;
use Illuminate\Support\Facades\DB;
use Tests\TestCase;

/**
 * Numeric from–to filters, the table counterpart of catalog rent/price ranges.
 */
final class NumberRangeFilterTest extends TestCase
{
    public function test_it_normalises_a_from_to_pair(): void
    {
        $filter = NumberRangeFilter::make('id')->column('articles.id');

        $this->assertSame(['from' => 2, 'to' => 9], $filter->normalise('2..9'));
        $this->assertSame(['from' => 100, 'to' => null], $filter->normalise('100..'));
        $this->assertSame(['from' => null, 'to' => 50], $filter->normalise('..50'));
        $this->assertNull($filter->normalise('not-a-range'));
        $this->assertNull($filter->normalise('abc..def'));
        $this->assertSame(['from' => 1, 'to' => 5], $filter->normalise('5..1'));
    }

    public function test_it_narrows_a_query_to_the_inclusive_range(): void
    {
        $filter = NumberRangeFilter::make('id')->column('id');
        $query = DB::table('articles');

        $filter->apply($query, $filter->normalise('2..4'));

        $sql = $query->toSql();

        $this->assertStringContainsString('>=', $sql);
        $this->assertStringContainsString('<=', $sql);
        $this->assertSame([2, 4], $query->getBindings());
    }
}
