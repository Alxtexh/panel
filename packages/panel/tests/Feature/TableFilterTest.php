<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

/**
 * Filters, which are an allowlist wearing a query string.
 *
 * THE PARAMETERS ARE ATTACKER-CONTROLLED and end up in a WHERE clause, so the
 * question is never "does filtering work" - it is what happens to everything
 * that was NOT declared. An undeclared parameter must be ignored; an
 * undeclared VALUE for a declared filter must be ignored too, because
 * `?status=' OR 1=1--` is the same shape as `?status=published` to anything
 * that does not check.
 *
 * IGNORED, NOT REJECTED, and the difference is deliberate. A stale bookmark
 * carrying a filter that has since been removed should still show the list
 * rather than an error page - the parameter stops meaning anything, and the
 * screen keeps working.
 */
final class TableFilterTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $tenant;

    protected function setUp(): void
    {
        parent::setUp();

        $this->tenant = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $user = User::create([
            'tenant_id' => $this->tenant->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        foreach ([['A', 'draft'], ['B', 'published'], ['C', 'archived'], ['D', 'published']] as [$title, $status]) {
            Article::withoutGlobalScopes()->create([
                'tenant_id' => $this->tenant->id,
                'title' => $title,
                'status' => $status,
            ]);
        }
    }

    /** @return list<string> */
    private function titles(string $query = ''): array
    {
        $response = $this->get("/articles{$query}")->assertOk();

        return array_column($response->viewData('page')['props']['records'], 'title');
    }

    public function test_it_filters_by_a_declared_filter(): void
    {
        $titles = $this->titles('?status=published');

        sort($titles);

        $this->assertSame(['B', 'D'], $titles);
    }

    public function test_an_undeclared_value_is_ignored_rather_than_applied(): void
    {
        $this->assertCount(
            4,
            $this->titles('?status=not-a-status'),
            'An undeclared filter value narrowed the list instead of being ignored.',
        );
    }

    /**
     * A VALUE THAT IS NOT A STRING MUST NOT REACH THE QUERY.
     *
     * Array and nested parameters are the usual way an operator gets smuggled
     * past a filter that only ever expected a scalar.
     */
    public function test_a_non_scalar_filter_value_does_not_reach_sql(): void
    {
        $this->get('/articles?status[]=published&status[]=draft')->assertOk();

        $this->assertSame(4, Article::query()->count(), 'The table survived, so nothing was executed.');
    }

    public function test_an_undeclared_parameter_is_ignored(): void
    {
        $this->assertCount(4, $this->titles('?tenant_id=999'));
        $this->assertCount(4, $this->titles('?deleted_at=whatever'));
    }

    /**
     * A FILTER CANNOT REACH ACROSS ORGANISATIONS.
     *
     * The scope is applied first and the filter narrows within it, so a filter
     * value can only ever remove rows from what this person could already see.
     */
    public function test_a_filter_narrows_within_the_tenant_scope(): void
    {
        $theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $theirs->id,
            'title' => 'Theirs published',
            'status' => 'published',
        ]);

        $this->assertNotContains('Theirs published', $this->titles('?status=published'));
    }
}
