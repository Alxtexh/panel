<?php

declare(strict_types=1);

namespace Alxtexh\Panel\Tests\Feature;

use Alxtexh\Panel\Tables\Columns\BadgeColumn;
use Alxtexh\Panel\Tests\Fixtures\Models\Article;
use Alxtexh\Panel\Tests\Fixtures\Models\Tenant;
use Alxtexh\Panel\Tests\Fixtures\Models\User;
use Alxtexh\Panel\Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;
use InvalidArgumentException;

/**
 * Filament-style badge resolvers: a pill that writes, only when opted in.
 */
final class BadgeColumnTest extends TestCase
{
    use RefreshDatabase;

    private Tenant $mine;

    private User $user;

    private Article $article;

    protected function setUp(): void
    {
        parent::setUp();

        $this->mine = Tenant::create(['name' => 'Mine', 'slug' => 'mine']);

        $this->user = User::create([
            'tenant_id' => $this->mine->id,
            'name' => 'Operator',
            'email' => 'operator@example.test',
            'password' => 'password',
            'email_verified_at' => now(),
        ]);

        $this->actingAs($this->user);

        $this->article = Article::withoutGlobalScopes()->create([
            'tenant_id' => $this->mine->id,
            'title' => 'Original',
            'status' => 'draft',
        ]);
    }

    public function test_a_badge_is_display_only_until_it_opts_in(): void
    {
        $plain = BadgeColumn::make('status')->colors(['draft' => 'neutral'])->toArray();

        $this->assertSame('badge', $plain['type']);
        $this->assertArrayNotHasKey('resolver', $plain);
        $this->assertArrayNotHasKey('editable', $plain);

        $resolver = BadgeColumn::make('status')
            ->colors(['draft' => 'neutral', 'published' => 'success'])
            ->resolver()
            ->toArray();

        $this->assertTrue($resolver['resolver']);
        $this->assertTrue($resolver['editable']);
        $this->assertSame(['draft' => 'Draft', 'published' => 'Published'], $resolver['options']);
    }

    public function test_inline_update_is_an_alias_of_resolver(): void
    {
        $column = BadgeColumn::make('priority')
            ->options(['low', 'urgent'])
            ->inlineUpdate();

        $this->assertTrue($column->isResolver());
        $this->assertTrue($column->isInlineWritable());
    }

    public function test_a_resolver_without_options_or_colours_is_refused(): void
    {
        $this->expectException(InvalidArgumentException::class);

        BadgeColumn::make('status')->resolver()->toArray();
    }

    public function test_a_resolver_badge_can_be_written_from_the_list(): void
    {
        $this->patchJson("/articles/{$this->article->getKey()}/cell", [
            'column' => 'workflow',
            'value' => 'published',
        ])->assertOk();

        $this->assertSame('published', $this->article->fresh()->status);
    }

    public function test_a_display_badge_cannot_be_written(): void
    {
        $this->patchJson("/articles/{$this->article->getKey()}/cell", [
            'column' => 'kind',
            'value' => 'published',
        ])->assertNotFound();

        $this->assertSame('draft', $this->article->fresh()->status);
    }

    public function test_a_resolver_rejects_a_value_outside_its_map(): void
    {
        $this->patchJson("/articles/{$this->article->getKey()}/cell", [
            'column' => 'workflow',
            'value' => 'god',
        ])->assertStatus(422);

        $this->assertSame('draft', $this->article->fresh()->status);
    }
}
