<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Filters\SelectFilter;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Comment;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;

final class SelectFilterRelationshipTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private Tenant $theirs;

    private Article $mineArticle;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);
        $this->theirs = Tenant::create(['name' => 'Theirs', 'slug' => 'theirs']);

        $user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($user);

        $this->mineArticle = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Mine article',
            'status' => 'draft',
        ]);

        Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->theirs->id,
            'title' => 'Theirs article',
            'status' => 'draft',
        ]);
    }

    public function test_relationship_options_are_tenant_scoped_and_labeled(): void
    {
        $filter = SelectFilter::make('article_id')->relationship(Article::class, 'title');

        $options = $filter->resolvedOptions();
        $labels = array_column($options, 'label');
        $values = array_column($options, 'value');

        $this->assertContains('Mine article', $labels);
        $this->assertNotContains('Theirs article', $labels);
        $this->assertContains((string) $this->mineArticle->getKey(), $values);
    }

    public function test_relationship_normalise_accepts_only_known_keys(): void
    {
        $filter = SelectFilter::make('article_id')->relationship(Article::class, 'title');

        $this->assertSame((string) $this->mineArticle->getKey(), $filter->normalise((string) $this->mineArticle->getKey()));
        $this->assertNull($filter->normalise('99999'));
        $this->assertNull($filter->normalise(['x']));
    }

    public function test_relationship_apply_narrows_a_query(): void
    {
        $other = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Other article',
            'status' => 'draft',
        ]);

        Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'article_id' => $this->mineArticle->getKey(),
            'body' => 'Kept',
        ]);

        Comment::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'article_id' => $other->getKey(),
            'body' => 'Dropped',
        ]);

        $filter = SelectFilter::make('article_id')
            ->column('article_id')
            ->relationship(Article::class, 'title');

        $query = DB::table('comments');
        $value = $filter->normalise((string) $this->mineArticle->getKey());
        $this->assertNotNull($value);
        $filter->apply($query, $value);

        $bodies = $query->pluck('body')->all();

        $this->assertContains('Kept', $bodies);
        $this->assertNotContains('Dropped', $bodies);
    }
}
